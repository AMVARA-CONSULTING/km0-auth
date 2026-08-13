# NEW-Task: Hub Google + service=mail → activate / LDAP OAuth (sibling of km0-mail #11)

## Related
- km0-mail FEAT/issue #11
- opencloud activate-mail #23, session-gate #22

## Goal
Update Auth hub so Google is Cloud IdP; Mail uses `@km0digital.com` after activate; Roundcube OAuth = Dex LDAP.

## Files
- `host-www/hub-auth.js`, `login.html`, `sso-continue.html`, `i18n.js`
- Deploy: `scripts/deploy-auth-hub.sh`

## Note
Implemented primarily via km0-mail agent task #11 (cross-repo). Keep this NEW as hub-local tracking until done, then mark closed in comments.
