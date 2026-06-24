# HPP-LLM / Artemis Corporate LLM

MVP-Vorlage fuer ein eigenes Corporate LLM im Heilpraktiker-Kontext und gleichzeitig als KMU-Showcase fuer AI-Beratung.

Das Projekt kombiniert eine schlanke Showcase-Webseite, konkrete Produkt-Spezifikationen, synthetische Demo-Dokumente und eine LibreChat-Konfiguration mit Modell-Auswahl, lokalem Modus und Datenschutz-Guardrail.

## Ziel

Wir bauen keine reine Werbeseite, sondern einen nutzbaren Corporate-LLM-Mustercase:

- Praxisinterne Wissenssuche ueber eigene Dokumente
- Auswahl zwischen lokalem Modell fuer sensible Inhalte und Cloud-Modellen fuer allgemeine Aufgaben
- Datenschutz-Logik, die sensible Praxis-/Patientenkontexte vor Cloud-Modellen blockiert
- Demo-Material fuer Heilpraktiker und als uebertragbare KMU-Vorlage

## Inhalt dieses Repos

- `website-template/` - statische Corporate-LLM-Seite als Beratungs- und Praxis-Showcase
- `specs/` - MVP-Spezifikationen, technische Entscheidungen, Roadmap und Umsetzungschecklisten
- `demo-documents/heilpraktiker/` - synthetische Beispiel-Dokumente fuer RAG/Wissenssuche
- `librechat-overlay/` - unsere LibreChat-Anpassungen ohne kompletten LibreChat-Klon
- `scripts/` - kleine Hilfsskripte fuer Vorschau und Wiederherstellung

## Bewusst nicht im Repo

- API Keys und lokale `.env` Dateien
- lokale Datenbanken, Uploads, Logs und Indexdaten
- der komplette LibreChat-Quellcode unter `vendor/LibreChat/`
- echte Patientendaten oder vertrauliche Praxisdaten

## Lokale Wiederherstellung

1. Dieses Repo klonen.
2. LibreChat frisch nach `vendor/LibreChat/` klonen.
3. Die Dateien aus `librechat-overlay/` in den LibreChat-Ordner kopieren:

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

4. In `vendor/LibreChat/.env` die lokalen Keys eintragen. Diese Datei wird nicht committed.
5. LibreChat per Docker starten und im Browser oeffnen:

```bash
cd vendor/LibreChat
docker compose up -d
```

Danach: `http://localhost:3080/login`

Die statische Webseite liegt unter `website-template/index.html`.

## Aktueller Funktionsstand

- Modell-Auswahl mit Praxis-Modi:
  - `Praxis Sicher (lokal)` fuer sensible Inhalte ueber lokales Ollama-Modell
  - `Praxis Schnell (Cloud)` fuer unkritische Cloud-Aufgaben
  - `Praxis Stark (Cloud)` fuer anspruchsvollere Cloud-Aufgaben
  - `DeepSeek Test (Cloud)` als zusaetzlicher Provider-Test
- Lokale Embeddings ueber `nomic-embed-text`
- RAG-Test mit synthetischen Praxisdokumenten
- LiteLLM-Guardrail gegen versehentliche Cloud-Verarbeitung sensibler Inhalte
- KMU-taugliche Landing-/Showcase-Seite fuer Artemis Intelligence

## Hinweis

Dieses Projekt ist ein technischer MVP und Beratungs-Showcase. Es ersetzt keine rechtliche, medizinische oder datenschutzrechtliche Pruefung. Vor echter Verarbeitung von Patientendaten braucht es ein klares Datenschutz-, Berechtigungs-, Backup- und Hosting-Konzept.
