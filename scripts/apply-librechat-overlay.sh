#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OVERLAY_DIR="$ROOT_DIR/librechat-overlay"
LIBRECHAT_DIR="${1:-$ROOT_DIR/vendor/LibreChat}"

if [[ ! -d "$LIBRECHAT_DIR" ]]; then
  echo "LibreChat folder not found: $LIBRECHAT_DIR" >&2
  echo "Clone LibreChat to vendor/LibreChat or pass the path as first argument." >&2
  exit 1
fi

for file in librechat.yaml litellm.config.yaml docker-compose.override.yml praxis_guardrail.py; do
  if [[ ! -f "$OVERLAY_DIR/$file" ]]; then
    echo "Missing overlay file: $OVERLAY_DIR/$file" >&2
    exit 1
  fi
done

cp "$OVERLAY_DIR/librechat.yaml" "$LIBRECHAT_DIR/librechat.yaml"
cp "$OVERLAY_DIR/litellm.config.yaml" "$LIBRECHAT_DIR/litellm.config.yaml"
cp "$OVERLAY_DIR/docker-compose.override.yml" "$LIBRECHAT_DIR/docker-compose.override.yml"
cp "$OVERLAY_DIR/praxis_guardrail.py" "$LIBRECHAT_DIR/praxis_guardrail.py"

echo "LibreChat overlay applied to: $LIBRECHAT_DIR"
echo "Restart LibreChat services afterwards, for example:"
echo "  cd \"$LIBRECHAT_DIR\" && docker compose restart api litellm"
