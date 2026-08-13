(function (global) {
  'use strict';

  var OIDC_SCOPE = 'openid profile email';
  var DEX_ORIGIN = 'https://cloud.km0digital.com';
  var MAIL_ORIGIN = 'https://mail.km0digital.com';
  var CLOUD_BRIDGE = DEX_ORIGIN + '/km0-oidc-start.html';
  var MAIL_OAUTH_START = MAIL_ORIGIN + '/index.php/login/oauth';
  var ACTIVATE_MAIL_URL = DEX_ORIGIN + '/activate-mail.html';
  var MAIL_PASSWORD_LOGIN = MAIL_ORIGIN + '/index.php?_task=login';
  var MAIL_POST_ACTIVATE_LOGIN = MAIL_ORIGIN + '/index.php?_task=login&activated=1';

  // Post-login redirect hint only. The login is always global (single Dex session).
  var SERVICES = { cloud: true, mail: true };

  function getService() {
    try {
      var s = new URLSearchParams(location.search).get('service');
      return SERVICES[s] ? s : '';
    } catch (_) {
      return '';
    }
  }

  /**
   * Whether this hub login should set km0_sso_continue (via cloud bridge sso=all).
   * Unified lobby login and service=mail — not service=cloud alone
   * (keeps session-gate cloud→/files without bouncing to Mail).
   */
  function wantsMailFollowThrough(service) {
    var svc = service === undefined ? getService() : service;
    return !svc || svc === 'mail';
  }

  function clearOidcBrowserState() {
    var pat = /^oidc\.|^oidc\.user:/i;
    try {
      [sessionStorage, localStorage].forEach(function (store) {
        Object.keys(store).forEach(function (k) {
          if (pat.test(k)) store.removeItem(k);
        });
      });
    } catch (_) {}
  }

  function clearAllAuthState() {
    clearOidcBrowserState();
    var authPat = /^oc_oAuth\.|^oidc\.|^oidc\.user:/i;
    try {
      [sessionStorage, localStorage].forEach(function (store) {
        Object.keys(store).forEach(function (k) {
          if (authPat.test(k)) store.removeItem(k);
        });
      });
    } catch (_) {}
    try {
      document.cookie = 'oc_auth_mode=;path=/;max-age=0;SameSite=Lax';
      document.cookie = 'km0_sso_continue=;domain=.km0digital.com;path=/;max-age=0;SameSite=Lax';
    } catch (_) {}
  }

  function getStoredIdToken() {
    var stores = [localStorage, sessionStorage];
    var keyPrefixes = ['oc_oAuth.user:', 'oidc.user:'];
    for (var s = 0; s < stores.length; s++) {
      var store = stores[s];
      var keys;
      try { keys = Object.keys(store); } catch (_) { continue; }
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var matched = false;
        for (var p = 0; p < keyPrefixes.length; p++) {
          if (k.indexOf(keyPrefixes[p]) === 0) { matched = true; break; }
        }
        if (!matched) continue;
        try {
          var v = JSON.parse(store.getItem(k));
          if (v && v.id_token) return v.id_token;
        } catch (_) {}
      }
    }
    return null;
  }

  function completeLogoutIfNeeded() {
    try {
      var params = new URLSearchParams(location.search);
      if (params.get('from_dex')) {
        clearAllAuthState();
        location.replace(location.origin + '/login?service=cloud&signed_out=1');
        return true;
      }
      clearAllAuthState();
      var idToken = getStoredIdToken();
      var postLogout = location.origin + '/login?service=cloud&signed_out=1&from_dex=1';
      var qs = new URLSearchParams({ post_logout_redirect_uri: postLogout });
      if (idToken) qs.set('id_token_hint', idToken);
      location.assign(DEX_ORIGIN + '/dex/logout?' + qs.toString());
      return true;
    } catch (_) {
      clearAllAuthState();
      location.replace(location.origin + '/login?service=cloud&signed_out=1');
      return true;
    }
  }

  // Cloud is the session anchor: completing OAuth here sets the global Dex session
  // cookie on cloud.km0digital.com and lands the user in OpenCloud (/files).
  // Pass options.ssoAll (or sso:'all') so km0-oidc-start sets km0_sso_continue.
  function startCloudLogin(connectorId, options) {
    options = options || {};
    var params = new URLSearchParams({ connector_id: connectorId || 'ldap' });
    if (options.ssoAll === true || options.sso === 'all' || options.sso === '1') {
      params.set('sso', 'all');
    }
    location.assign(CLOUD_BRIDGE + '?' + params.toString());
  }

  // Mail anchor: Roundcube OAuth against Dex LDAP. Reuses the Dex session when
  // one already exists for LDAP; Google-only sessions cannot silent-SSO here.
  function startMailOAuth(options) {
    options = options || {};
    if (options.prompt === 'none') {
      location.assign(MAIL_OAUTH_START + '?prompt=none');
      return;
    }
    location.assign(MAIL_OAUTH_START);
  }

  function goActivateMail() {
    location.assign(ACTIVATE_MAIL_URL);
  }

  function goMailPasswordLogin() {
    location.assign(MAIL_PASSWORD_LOGIN);
  }

  function goMailPostActivateLogin() {
    location.assign(MAIL_POST_ACTIVATE_LOGIN);
  }

  // Single global login. `service` only decides the final destination/anchor.
  function startGlobalLogin(connectorId) {
    clearOidcBrowserState();
    var connector = connectorId || 'ldap';
    var svc = getService();
    var ssoAll = wantsMailFollowThrough(svc);
    var loginOpts = { ssoAll: ssoAll };

    // Google identity cannot own a KM0 mailbox: always anchor via cloud.
    // With service=mail or unified login, set sso=all so post-login can reach Mail.
    if (connector === 'google') {
      startCloudLogin('google', loginOpts);
      return;
    }
    if (svc === 'mail') {
      // LDAP + mail intent: Roundcube OAuth (Dex LDAP). Google path uses cloud above.
      startMailOAuth({});
      return;
    }
    startCloudLogin(connector, loginOpts);
  }

  function storePendingLogin(login, password) {
    try {
      sessionStorage.setItem('km0_pending_login', JSON.stringify({
        login: login,
        password: password,
        exp: Date.now() + 120000
      }));
    } catch (_) {}
  }

  global.KM0HubAuth = {
    getService: getService,
    wantsMailFollowThrough: wantsMailFollowThrough,
    startGlobalLogin: startGlobalLogin,
    startCloudLogin: startCloudLogin,
    startMailOAuth: startMailOAuth,
    goActivateMail: goActivateMail,
    goMailPasswordLogin: goMailPasswordLogin,
    goMailPostActivateLogin: goMailPostActivateLogin,
    clearOidcBrowserState: clearOidcBrowserState,
    clearAllAuthState: clearAllAuthState,
    completeLogoutIfNeeded: completeLogoutIfNeeded,
    storePendingLogin: storePendingLogin,
    DEX_ORIGIN: DEX_ORIGIN,
    MAIL_ORIGIN: MAIL_ORIGIN,
    ACTIVATE_MAIL_URL: ACTIVATE_MAIL_URL,
    MAIL_PASSWORD_LOGIN: MAIL_PASSWORD_LOGIN,
    MAIL_POST_ACTIVATE_LOGIN: MAIL_POST_ACTIVATE_LOGIN
  };

  global.KM0DexAuth = global.KM0HubAuth;
})(window);
