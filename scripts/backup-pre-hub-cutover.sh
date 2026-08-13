#!/usr/bin/env bash
# Pre-cutover backup for KM0 Auth Hub — writes to /unmount (never deletes user data).
set -euo pipefail

BACKUP_ROOT="${BACKUP_ROOT:-/unmount/km0-hub-cutover}"
STAMP="$(date +%Y%m%d-%H%M%S)"
DEST="${BACKUP_ROOT}/${STAMP}"

log() { echo "[backup] $*"; }
fail() { echo "[backup] ERROR: $*" >&2; exit 1; }

mkdir -p "${DEST}/env-backups" "${DEST}/nginx-sites"

log "Destination: ${DEST}"

if [[ -f /opt/opencloud/opencloud-compose/.env ]]; then
  log "OpenCloud volumes..."
  COMPOSE_DIR=/opt/opencloud/opencloud-compose COMPOSE_PROJECT_NAME=opencloud \
    BACKUP_ROOT="${DEST}" /opt/opencloud/scripts/backup-volumes.sh || fail "opencloud backup-volumes failed"
else
  log "WARN: opencloud-compose .env missing — skip volume backup"
fi

DEX_VOL="$(docker volume ls --format '{{.Name}}' | grep -E 'dex-data$' | head -1 || true)"
if [[ -n "${DEX_VOL}" ]]; then
  log "Dex volume ${DEX_VOL}..."
  docker run --rm \
    -v "${DEX_VOL}:/from:ro" \
    -v "${DEST}:/backup" \
    alpine:3.20 \
    tar czf "/backup/dex-data-${STAMP}.tar.gz" -C /from .
else
  log "WARN: dex-data volume not found"
fi

if [[ -f /opt/km0-mail/.env ]]; then
  log "Mail postgres + maildir..."
  BACKUP_ROOT="${DEST}" /opt/km0-mail/scripts/backup-maildir.sh || fail "mail backup failed"
else
  log "WARN: km0-mail .env missing — skip mail backup"
fi

for f in \
  /opt/opencloud/dex/.env \
  /opt/opencloud/register-api/.env \
  /opt/opencloud/opencloud-compose/.env \
  /opt/km0-mail/.env; do
  if [[ -f "$f" ]]; then
    cp -a "$f" "${DEST}/env-backups/$(basename "$(dirname "$f")")-$(basename "$f")"
  fi
done
chmod 600 "${DEST}/env-backups/"* 2>/dev/null || true

for f in \
  /opt/opencloud/nginx/sites-available/opencloud \
  /opt/opencloud/nginx/snippets/opencloud-locations.conf \
  /opt/km0-mail/nginx/sites-available/mail \
  /etc/nginx/sites-available/opencloud \
  /etc/nginx/sites-available/mail; do
  if [[ -f "$f" ]]; then
    cp -a "$f" "${DEST}/nginx-sites/$(basename "$f").bak"
  fi
done

{
  echo "stamp=${STAMP}"
  echo "host=$(hostname -f 2>/dev/null || hostname)"
  echo "date=$(date -Is)"
  find "${DEST}" -type f -printf '%s %p\n' | sort -k2
} > "${DEST}/MANIFEST.txt"

shopt -s nullglob
archives=("${DEST}"/*.tar.gz "${DEST}"/*.sql.gz)
if [[ ${#archives[@]} -eq 0 ]]; then
  fail "no archive files created in ${DEST}"
fi
for a in "${archives[@]}"; do
  [[ -s "$a" ]] || fail "empty archive: $a"
  log "OK $(basename "$a") ($(du -h "$a" | cut -f1))"
done

log "Backup complete: ${DEST}"
