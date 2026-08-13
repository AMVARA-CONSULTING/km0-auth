# NEW-Task: Hub SSO cookie + activate CTA (sibling of km0-mail #14)

## Related
- km0-mail #14 (primary FEAT), #11
- opencloud #25 wizard URL, #24 identity

## Files
- `host-www/hub-auth.js` — `sso=all` on cloud bridge when unified or `service=mail`
- `host-www/sso-continue.html` — chooser (LDAP OAuth / activate / password); no auto `prompt=none`
- `host-www/login.html` + `i18n.js` — activate CTA for `service=mail`
- Deploy: `scripts/deploy-auth-hub.sh`
- Verify: `scripts/verify-auth-hub.sh` (sso-continue + hub-auth.js checks)

## Status (2026-07-25)
Implemented via km0-mail agent FEAT-14. Canonical activate deep-link: `https://cloud.km0digital.com/activate-mail.html`.
