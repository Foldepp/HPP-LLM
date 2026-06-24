# LibreChat Overlay

Diese Dateien sind die projektspezifischen Anpassungen fuer LibreChat. Der komplette LibreChat-Klon wird nicht in diesem Repository gespeichert.

## Dateien

- `librechat.yaml` - App-Konfiguration, Modell-Specs und Praxis-Modi
- `litellm.config.yaml` - Routing zu OpenRouter, DeepSeek/Ollama und Embeddings
- `docker-compose.override.yml` - lokale Docker-Ergaenzungen
- `praxis_guardrail.py` - Guardrail gegen Cloud-Verarbeitung sensibler Inhalte

## Anwenden

```bash
./scripts/apply-librechat-overlay.sh
```

Alternativ manuell:

```bash
cp librechat-overlay/librechat.yaml vendor/LibreChat/librechat.yaml
cp librechat-overlay/litellm.config.yaml vendor/LibreChat/litellm.config.yaml
cp librechat-overlay/docker-compose.override.yml vendor/LibreChat/docker-compose.override.yml
cp librechat-overlay/praxis_guardrail.py vendor/LibreChat/praxis_guardrail.py
```

Die Datei `vendor/LibreChat/.env` bleibt lokal und enthaelt API Keys. Sie gehoert nicht ins Git-Repository.

## HPP-Branding anwenden

Nach dem Start oder Recreate des LibreChat-Containers:

```bash
./scripts/apply-librechat-branding.sh
```

Das Skript injiziert `client-branding/hpp-theme.css`, `client-branding/hpp-theme.js` und das HPP/Artemis-Logo in den laufenden LibreChat-Container. Nach einem Container-Recreate muss es erneut ausgefuehrt werden.
