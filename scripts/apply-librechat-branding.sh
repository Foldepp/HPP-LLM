#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BRANDING_DIR="$ROOT_DIR/librechat-overlay/client-branding"
CONTAINER_NAME="${1:-LibreChat}"
BRANDING_VERSION="$(date +%s)"

for file in hpp-theme.css hpp-theme.js hpp-logo.svg; do
  if [[ ! -f "$BRANDING_DIR/$file" ]]; then
    echo "Missing branding file: $BRANDING_DIR/$file" >&2
    exit 1
  fi
done

if ! docker inspect "$CONTAINER_NAME" >/dev/null 2>&1; then
  echo "Container not found: $CONTAINER_NAME" >&2
  echo "Start LibreChat first, then rerun this script." >&2
  exit 1
fi

docker cp "$BRANDING_DIR/hpp-theme.css" "$CONTAINER_NAME:/app/client/dist/hpp-theme.css"
docker cp "$BRANDING_DIR/hpp-theme.js" "$CONTAINER_NAME:/app/client/dist/hpp-theme.js"
docker cp "$BRANDING_DIR/hpp-logo.svg" "$CONTAINER_NAME:/app/client/dist/assets/logo.svg"
docker cp "$BRANDING_DIR/hpp-logo.svg" "$CONTAINER_NAME:/app/client/public/assets/logo.svg"

docker exec -u 0 -e HPP_BRANDING_VERSION="$BRANDING_VERSION" "$CONTAINER_NAME" sh -lc '
  set -e
  for index_file in /app/client/index.html /app/client/dist/index.html; do
    [ -f "$index_file" ] || continue
    sed -i "s#<title>LibreChat</title>#<title>HPP Corporate LLM</title>#" "$index_file"
    sed -i "s|<meta name=\"theme-color\" content=\"#[0-9A-Fa-f]*\" />|<meta name=\"theme-color\" content=\"#fff8f2\" />|" "$index_file"
    sed -i "/hpp-theme.css/d; /hpp-theme.js/d" "$index_file"
    sed -i "s#</head>#    <link rel=\"stylesheet\" href=\"./hpp-theme.css?v=${HPP_BRANDING_VERSION}\" />\\n    <script src=\"./hpp-theme.js?v=${HPP_BRANDING_VERSION}\"></script>\\n  </head>#" "$index_file"
  done
'

echo "HPP Corporate LLM branding applied to container: $CONTAINER_NAME"
