#!/usr/bin/env bash
# Puts your real domain into the website's address tags, sitemap and robots.txt.
#
# Usage:   bash set-domain.sh yourdomain.com
#      or: bash set-domain.sh www.yourdomain.com   (use the exact address people will type)
#
# Run it once, then upload the "site" folder again.
set -euo pipefail

if [ $# -ne 1 ]; then
  echo "Usage: bash set-domain.sh yourdomain.com"
  exit 1
fi

domain="$(printf '%s' "$1" | tr 'A-Z' 'a-z')"
domain="${domain#http://}"; domain="${domain#https://}"; domain="${domain%/}"

# Only plain domain names are accepted (letters, numbers, dots, hyphens).
if ! printf '%s' "$domain" | grep -Eq '^([a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$'; then
  echo "That does not look like a domain name: $1"
  echo "Example: bash set-domain.sh yorlincleaning.com"
  exit 1
fi

here="$(cd "$(dirname "$0")" && pwd)"
count=0
for f in "$here"/site/*.html "$here"/site/sitemap.xml "$here"/site/robots.txt; do
  if grep -q 'YOURDOMAIN\.COM' "$f"; then
    perl -pi -e "s/YOURDOMAIN\.COM/$domain/g" "$f"
    count=$((count + 1))
  fi
done

echo "Done. Updated $count files to use https://$domain"
echo "Now upload the 'site' folder to your host again."
