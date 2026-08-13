# KM0 Auth Hub

Central login and registration for KM0 services at **https://auth.km0digital.com**.

- **Dex issuer** (unchanged): `https://cloud.km0digital.com/dex`
- **Cloud / Mail** redirect legacy `/login.html` and `/register` to this hub
- **Register** always provisions OpenCloud IDM + KM0 Mail mailbox

## Deploy

```bash
sudo /opt/km0-auth/scripts/deploy-auth-hub.sh
sudo /opt/opencloud/scripts/issue-auth-km0digital-cert.sh   # first time only
sudo cp /opt/opencloud/nginx/snippets/opencloud-locations.conf /etc/nginx/snippets/
sudo cp /opt/km0-mail/nginx/sites-available/mail /etc/nginx/sites-available/mail
sudo nginx -t && sudo systemctl reload nginx
```

## Verify

```bash
/opt/km0-auth/scripts/verify-auth-hub.sh
/opt/opencloud/scripts/verify-auth-pages.sh
```

## Backup before cutover

```bash
/opt/km0-auth/scripts/backup-pre-hub-cutover.sh
# Artifacts: /unmount/km0-hub-cutover/<stamp>/
```

## SSO (single sign-on)

Login once for **OpenCloud + Mail**:

1. Hub **「Iniciar sesión en KM0」** (unified, no `?service=`) or **`?service=mail`** → cloud bridge with **`sso=all`** so `km0_sso_continue` is set on `.km0digital.com`.
2. After OpenCloud login → `km0-sso-snippet.js` sends the browser to **`/sso-continue`**.
3. **`/sso-continue`** is a chooser (no auto `prompt=none`): LDAP/KM0 OAuth webmail, **Activate KM0 Mail** (`https://cloud.km0digital.com/activate-mail.html`), or mailbox password Roundcube. Avoids Google-only silent LDAP loops.
4. Per-service: `?service=cloud` does **not** set `sso=all` (session-gate stays cloud→`/files`). `?service=mail` + Google still anchors Cloud then continues via the chooser.

Dex session cookie lives on `cloud.km0digital.com`; Mail OAuth reuses it when the Dex session is LDAP-capable.

## Mail SSO note

Roundcube OAuth → Dex LDAP is configured (`oauth_auth_uri` / `oauth_token_uri`). **Dovecot XOAUTH2** still requires the `oauth2` passdb driver (not in stock Debian Bookworm image). Until Dovecot CE 2.4 migration, webmail OAuth may fail at IMAP with password fallback: `mail.km0digital.com/index.php?_task=login`.
