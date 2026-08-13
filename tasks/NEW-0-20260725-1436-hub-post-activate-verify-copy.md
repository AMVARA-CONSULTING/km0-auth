# NEW-Task: Hub post-activate verify copy (sibling of km0-mail #15)

## Context
km0-mail FEAT-15 closes the activate → password → verify path. Hub surfaces need matching copy.

## Changes (already applied in this tree)
- `host-www/i18n.js` — `hubLoginActivateMailHint` (CA/ES/EN/DE) mentions mailbox password + inbox verify; Google cannot open the mailbox
- `host-www/hub-auth.js` — `MAIL_POST_ACTIVATE_LOGIN` + `goMailPostActivateLogin()` for wizard/API consumers (`…/index.php?_task=login&activated=1`)

## Deploy
```bash
sudo /opt/km0-auth/scripts/deploy-auth-hub.sh
/opt/km0-auth/scripts/verify-auth-hub.sh
```

## Related
- km0-mail #15
- Cloud wizard: `/opt/opencloud/host-www/opencloud-auth/activate-mail.html` + Dex theme i18n success body
