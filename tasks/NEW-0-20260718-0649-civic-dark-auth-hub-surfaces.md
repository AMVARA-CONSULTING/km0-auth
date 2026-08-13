# NEW-Task: Sync Auth hub surfaces to civic dark KM0

## Origin
- **Source:** Direct operator request (skip GitHub). Sibling sync with remodelled `km0-web`.
- **Brief:** `/opt/km0-web/docs/design/product-auth-surfaces-sync.md`
- **Repo note:** This tree has no `autoagents/` loop yet. Treat this file as the work order; implement manually or wire into a loop later. Do not invent GitHub issues unless asked.

## Problem / goal
`auth.km0digital.com` is the central login/register hub but still ships legacy Inter + purple gradient CSS (`km0-auth.css`) and gradient favicon/logo. Marketing already uses civic dark tokens + K0 lettermark. Sync **hub HTML/CSS + favicon/logo** only.

## Scope (only)
1. `host-www/login.html`, `host-www/register.html`
2. Shared hub chrome: `index.html`, `logout.html`, `sso-continue.html` (same CSS tokens)
3. `host-www/km0-auth.css`
4. `host-www/favicon.svg`, `host-www/logo.svg`, `host-www/brand/` (OG if outdated)

## Out of scope
- Dex issuer config, OIDC client wiring, nginx snippets (unless a static path must point at a new asset name)
- Cloud/Mail product UIs
- Changing register API contracts or i18n key names (update styles only; keep `data-i18n`)

## Recommended order
Run **this hub task first** (or in parallel carefully): Cloud and Mail often redirect to the hub. Then Cloud Dex theme + Mail Roundcube login.

## High-level instructions for coder
1. Read `/opt/km0-web/docs/design/product-auth-surfaces-sync.md` and `/opt/km0-web/docs/brand-tokens.md`.
2. Copy `/opt/km0-web/public/favicon.svg` and `/opt/km0-web/public/brand/logo.svg` over hub assets (keep filenames if nginx/HTML already reference them).
3. Rewrite `km0-auth.css`: remove `--gradient` purple chain, Inter, purple radial glow, glow drop-shadow on logo, gradient-clipped H1. Use Paper / Snow / Mist / Ink / Signal + IBM Plex Sans.
4. Keep `hub-auth.js`, `i18n.js`, form validation, and SSO buttons behaviour unchanged.
5. Deploy: `sudo /opt/km0-auth/scripts/deploy-auth-hub.sh` then `/opt/km0-auth/scripts/verify-auth-hub.sh`.
6. Document Hard gate evidence in this file under Testing instructions when done (or rename/copy into a CLOSED note).

## Acceptance (hard)
- [x] https://auth.km0digital.com/login and `/register` match civic dark KM0 side-by-side with https://km0digital.com/
- [x] Favicon reads as K0 at 16px; no purple gradient SVG
- [x] No legacy brand-chain hexes in `host-www/km0-auth.css` or auth HTML
- [x] Register + SSO entry points still function (`verify-auth-hub.sh` green)

## Testing instructions
Implemented 2026-07-18. Deployed via `sudo /opt/km0-auth/scripts/deploy-auth-hub.sh`. Live assets under `/var/www/km0-auth`.

### Hard gate protocol (required)
| Item | Value |
|------|-------|
| Reference | https://km0digital.com/ |
| Auth hub URLs | https://auth.km0digital.com/login , `/register` |
| Decisive viewport | Login card + tab favicon |
| Checked | 2026-07-18 — live CSS/HTML/SVG after deploy |

**Parity (3):**
1. Canvas/card tokens match marketing civic dark: Paper `#0B1220`, Snow `#141B28`, Mist `#2A3344`, Ink `#E6E9ED`, Signal `#2DD4BF` / hover `#5EEAD4` in live `km0-auth.css` (same as `km0-web` `brand-tokens.md` / `tokens.css`).
2. UI font stack is IBM Plex Sans + Bricolage Grotesque H1 (Google Fonts link on login/register/index/logout/sso-continue); marketing home loads the same pair.
3. Favicon/logo byte-identical to `km0-web` (`cmp` auth vs marketing `/favicon.svg`; logo vs `public/brand/logo.svg`) — stamp `#0F766E` + figure `#EEF0F2` K0 lettermark.

**Anti-slop (3):**
1. No purple radial glow behind the card; body is flat Paper (no `rgba(123, 63, 228, …)` orb).
2. No gradient-clipped H1 / `--gradient` orange→pink→purple→blue chain; headline is solid Ink on Bricolage.
3. No Inter as UI font; no glow `drop-shadow` on logo; primary CTA is solid Signal fill (not white pill / gradient button).

### Smoke
```bash
/opt/km0-auth/scripts/verify-auth-hub.sh
# Result 2026-07-18: All KM0 Auth Hub smoke checks passed.
grep -rnE '7[Bb]3[Ff][Ee]4|E040A0|FF5F2E|#007[Bb][Ff][Ff]|Inter' host-www --include='*.css' --include='*.html' --include='*.svg' || true
# Result: host-www CLEAN
```

## References
- `/opt/km0-web/docs/design/product-auth-surfaces-sync.md`
- `/opt/km0-web/docs/brand-tokens.md`
- `/opt/km0-web/docs/design/logo-brief-it-services.md`
- `README.md` (this repo)
- Sibling: `/opt/opencloud/autoagents/tasks/NEW-0-20260718-0649-civic-dark-cloud-auth-surfaces.md`
- Sibling: `/opt/km0-mail/autoagents/tasks/NEW-0-20260718-0649-civic-dark-mail-auth-surfaces.md`
