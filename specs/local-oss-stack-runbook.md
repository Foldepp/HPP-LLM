# Lokaler OSS-Stack: Runbook

Stand: 2026-06-24

## Ziel

Dieses Runbook startet die erste lokale MVP-Basis:

- LibreChat
- LibreChat Admin Panel
- MongoDB
- Meilisearch
- LibreChat RAG API
- PostgreSQL/pgvector
- LiteLLM Proxy
- Ollama fuer lokalen Chat und lokale Embeddings

## Start

```bash
cd "vendor/LibreChat"
docker compose up -d
```

Danach:

- App: http://localhost:3080
- Admin Panel: http://localhost:3000
- LiteLLM Proxy: http://localhost:4000
- Ollama: http://localhost:11434

## Vor dem ersten echten Modelltest

In `vendor/LibreChat/.env` ersetzen:

```bash
OPENAI_API_KEY=replace-with-openai-or-azure-compatible-key
LITELLM_MASTER_KEY=replace-with-local-master-key
RAG_OPENAI_API_KEY=replace-with-the-same-local-master-key
```

Wichtig:

- `LITELLM_MASTER_KEY` und `RAG_OPENAI_API_KEY` muessen gleich sein, solange RAG ueber LiteLLM laeuft.
- Provider-Keys gehoeren nur in `.env`, nicht in `librechat.yaml`.
- `.env` ist in der Root-`.gitignore` ausgeschlossen.

## Lokale Modelle

Aktuell lokal geladen:

```bash
cd "vendor/LibreChat"
docker compose exec -T ollama ollama list
```

Erwartet:

- `llama3.2:3b` fuer lokalen Chat
- `nomic-embed-text` fuer lokale Dokumenten-Embeddings

Falls ein Modell fehlt:

```bash
docker compose exec -T ollama ollama pull llama3.2:3b
docker compose exec -T ollama ollama pull nomic-embed-text
```

## Lokale Dokumentenintelligenz

Die RAG-API nutzt direkt Ollama:

```env
EMBEDDINGS_PROVIDER=ollama
EMBEDDINGS_MODEL=nomic-embed-text
OLLAMA_BASE_URL=http://ollama:11434
```

Damit verlassen Embeddings fuer hochgeladene Praxisdokumente nicht den lokalen Docker-Stack.

Nach Aenderungen:

```bash
cd "vendor/LibreChat"
docker compose up -d --force-recreate rag_api
docker compose restart api
```

Schnelltest:

```bash
curl -sS --max-time 15 http://localhost:3080/login >/dev/null && echo "LibreChat erreichbar"
curl -sS --max-time 15 -H "Authorization: Bearer sk-local-mvp-change-me" http://localhost:4000/v1/models
```

Der End-to-End-Test wurde am 2026-06-24 mit synthetischen Heilpraktiker-Dokumenten bestanden:

- lokale RAG-API: `langchain_ollama.embeddings.OllamaEmbeddings`
- Modell: `nomic-embed-text`
- Vektordimension: 768
- Ergebnis: lokale Suche findet Datenschutzleitfaden und synthetische Anamnesenotiz.

## Erster Testablauf

1. http://localhost:3080 oeffnen.
2. Ersten Nutzer registrieren.
3. Dieser Nutzer wird Admin.
4. Im neuen Chat einen Praxis-Modus auswaehlen:
   - `Praxis Sicher`: lokaler Modus fuer Patientendaten und Praxisdokumente.
   - `Praxis Schnell`: Cloud-Modus fuer unkritische Organisation und Texte.
   - `Praxis Stark`: staerkerer Cloud-Modus fuer Konzepte und Schulungen.
   - `DeepSeek Test`: experimenteller Cloud-Testmodus, keine vertraulichen Daten.
5. Synthetisches Testdokument hochladen.
6. File Search/RAG im Modus `Praxis Sicher` testen.
7. Quellenanzeige pruefen.
8. Erst danach echte Praxisdaten verwenden.

## Praxis-Modi

LibreChat nutzt `modelSpecs` in `vendor/LibreChat/librechat.yaml`, damit Nutzer keine technischen Modellnamen lernen muessen.

Aktuelle Zuordnung:

- `Praxis Sicher` -> `mvp-local-sensitive`, lokaler Chat ueber Ollama, File Search aktiv.
- `Praxis Schnell` -> `mvp-standard`, Cloud, keine Patientendaten.
- `Praxis Stark` -> `mvp-premium`, Cloud, keine Patientendaten.
- `DeepSeek Test` -> `mvp-deepseek-v4`, Cloud, nur fuer unkritische Tests.

Die alte Preset-Auswahl ist deaktiviert, damit die Praxis-Modi die fuehrende Auswahl im UI sind.

Technischer Test am 2026-06-24:

- LibreChat startet mit den vier Praxis-Modi.
- `Praxis Sicher` ist als Default markiert.
- Lokaler Chat ueber `mvp-local-sensitive` antwortet ueber den LiteLLM/Ollama-Weg.
- App erreichbar unter http://localhost:3080/login.

## Cloud-Schutz fuer sensible Praxisdaten

Der LiteLLM-Gateway nutzt eine lokale Guardrail in `vendor/LibreChat/praxis_guardrail.py`.

Ziel:

- Cloud-Modelle blocken Eingaben, die nach Patientendaten oder Gesundheitsdaten aussehen.
- Der lokale Modus `Praxis Sicher` bleibt fuer solche Inhalte nutzbar.
- Lokale Embeddings fuer Dokumente bleiben funktionsfaehig.

Technische Einbindung:

- `vendor/LibreChat/litellm.config.yaml`
  - Guardrail `praxis-sensitive-data`
  - `default_on: true`
  - `skip_system_message_in_guardrail: true`
- `vendor/LibreChat/docker-compose.override.yml`
  - mountet `praxis_guardrail.py` nach `/app/praxis_guardrail.py`

Getestet am 2026-06-24:

- Cloud-Modell `mvp-standard` mit synthetischer Patientinnen-Anamnese wird blockiert.
- Lokales Modell `mvp-local-sensitive` mit synthetischer Patientinnen-Anamnese wird nicht blockiert.
- Cloud-Modell `mvp-standard` mit unkritischer Terminerinnerung wird erlaubt.
- Embedding-Modell `mvp-embedding` liefert weiter lokale 768-dimensionale Embeddings.

## Stop

```bash
cd "vendor/LibreChat"
docker compose down
```

## Reset lokaler Daten

Nur fuer lokale Tests:

```bash
cd "vendor/LibreChat"
docker compose down -v
rm -rf data-node meili_data* uploads logs images litellm-data
```

## Naechste Haertung

- LiteLLM Budget-Datenbank aktivieren.
- Langfuse einbinden.
- Produktionsdomain/TLS vorbereiten.
- Backup-Skripte fuer MongoDB und PostgreSQL schreiben.
- Registrierung fuer Pilotinstanzen nach Admin-Erstellung deaktivieren.
- Cloud-Warnung im UI sichtbar machen, zusaetzlich zur technischen Gateway-Sperre.
- Groesseres lokales Modell testen, falls Antwortqualitaet fuer Praxisarbeit nicht reicht.
