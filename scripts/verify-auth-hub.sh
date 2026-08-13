#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${KM0_AUTH_BASE_URL:-https://auth.km0digital.com}"
HUB="${KM0_AUTH_HUB_URL:-https://auth.km0digital.com}"

fail() { echo "FAIL: $*" >&2; exit 1; }
pass() { echo "PASS: $*"; }

check_redirect() {
  local url="$1"
  local expect="$2"
  local loc
  loc="$(curl -sS -o /dev/null -w '%{redirect_url}' "${url}")"
  [[ "$loc" == *"${expect}"* ]] || fail "${url} redirect got ${loc}, expected *${expect}*"
  pass "${url} → hub"
}

echo "Verifying KM0 Auth Hub at ${BASE_URL}"

code="$(curl -sS -o /tmp/km0-hub-body.html -w '%{http_code}' "${BASE_URL}/")"
[[ "$code" == "200" ]] || fail "/ returned ${code}"
grep -q 'service-tile' /tmp/km0-hub-body.html || fail "lobby missing service tiles"
pass "/ lobby HTTP 200"

code="$(curl -sS -o /tmp/km0-hub-login.html -w '%{http_code}' "${BASE_URL}/login?service=cloud")"
[[ "$code" == "200" ]] || fail "/login returned ${code}"
grep -q 'pricing-notice' /tmp/km0-hub-login.html || fail "login missing pricing-notice"
grep -q 'km0-lang-switch' /tmp/km0-hub-login.html || fail "login missing lang switch"
pass "/login cloud HTTP 200"

code="$(curl -sS -o /tmp/km0-hub-register.html -w '%{http_code}' "${BASE_URL}/register")"
[[ "$code" == "200" ]] || fail "/register returned ${code}"
pass "/register HTTP 200"

code="$(curl -sS -o /tmp/km0-hub-logout.html -w '%{http_code}' "${BASE_URL}/logout?from_dex=1")"
[[ "$code" == "200" ]] || fail "/logout returned ${code}"
pass "/logout HTTP 200"

code="$(curl -sS -o /tmp/km0-hub-sso.html -w '%{http_code}' "${BASE_URL}/sso-continue")"
[[ "$code" == "200" ]] || fail "/sso-continue returned ${code}"
grep -q 'km0-sso-activate' /tmp/km0-hub-sso.html || fail "sso-continue missing activate CTA"
grep -q 'km0-sso-ldap-oauth' /tmp/km0-hub-sso.html || fail "sso-continue missing LDAP OAuth CTA"
grep -q 'hub-auth.js' /tmp/km0-hub-sso.html || fail "sso-continue missing hub-auth.js"
pass "/sso-continue chooser HTTP 200"

code="$(curl -sS -o /tmp/km0-hub-auth.js -w '%{http_code}' "${BASE_URL}/hub-auth.js")"
[[ "$code" == "200" ]] || fail "/hub-auth.js returned ${code}"
grep -q "sso', 'all'" /tmp/km0-hub-auth.js || grep -q 'sso", "all"' /tmp/km0-hub-auth.js || grep -q "set('sso'" /tmp/km0-hub-auth.js || fail "hub-auth.js missing sso=all bridge param"
grep -q 'activate-mail.html' /tmp/km0-hub-auth.js || fail "hub-auth.js missing activate-mail deep-link"
grep -q 'wantsMailFollowThrough' /tmp/km0-hub-auth.js || fail "hub-auth.js missing wantsMailFollowThrough"
pass "/hub-auth.js sso=all + activate URL"

code="$(curl -sS -o /tmp/km0-hub-login-mail.html -w '%{http_code}' "${BASE_URL}/login?service=mail&session_checked=1")"
[[ "$code" == "200" ]] || fail "/login?service=mail returned ${code}"
grep -q 'km0-mail-activate-block' /tmp/km0-hub-login-mail.html || fail "mail login missing activate block"
pass "/login?service=mail activate CTA present"

# Cloud may serve login.html locally (HTTP 200) or redirect to the hub — both OK.
cloud_code="$(curl -sS -o /dev/null -w '%{http_code}' "https://cloud.km0digital.com/login.html")"
[[ "$cloud_code" == "200" || "$cloud_code" == "301" || "$cloud_code" == "302" ]] \
  || fail "cloud /login.html returned ${cloud_code}"
pass "cloud /login.html reachable (${cloud_code})"
check_redirect "https://mail.km0digital.com/login.html" "auth.km0digital.com/login"

echo "All KM0 Auth Hub smoke checks passed."
