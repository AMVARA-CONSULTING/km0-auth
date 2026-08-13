#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WEB_ROOT="/var/www/km0-auth"

sudo mkdir -p "${WEB_ROOT}"
sudo rsync -a --delete "${ROOT}/host-www/" "${WEB_ROOT}/"
sudo install -D -m 0644 "${ROOT}/nginx/sites-available/auth" /etc/nginx/sites-available/auth
sudo ln -sf /etc/nginx/sites-available/auth /etc/nginx/sites-enabled/auth
sudo nginx -t
sudo systemctl reload nginx
echo "KM0 Auth Hub deployed to ${WEB_ROOT}"
