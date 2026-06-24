# Handoff fuer den naechsten Chat

## Kurzstand

Wir bauen ein Corporate LLM fuer einen Heilpraktiker-Mustercase, das spaeter zugleich als KMU-Showcase fuer AI-Beratung nutzbar ist. Die Richtung ist: echtes Arbeitswerkzeug zuerst, Marketing-Seite als erklaerbare Verpackung dazu.

## Was umgesetzt ist

- Statische Showcase-Seite unter `website-template/index.html`
- Produkt- und MVP-Spezifikationen unter `specs/`
- Synthetische Demo-Dokumente unter `demo-documents/heilpraktiker/`
- LibreChat-Konfiguration als Overlay unter `librechat-overlay/`
- Modell-Modi:
  - `Praxis Sicher`: lokales Modell fuer sensible Praxis-/Patienteninhalte
  - `Praxis Schnell`: guenstiges Cloud-Modell fuer unkritische Aufgaben
  - `Praxis Stark`: staerkeres Cloud-Modell fuer anspruchsvollere Aufgaben
  - `DeepSeek Test`: zusaetzlicher Provider-Test
- Lokale Embeddings ueber Ollama `nomic-embed-text`
- Datenschutz-Guardrail in `praxis_guardrail.py`, der sensible Inhalte vor Cloud-Modellen blockiert
- RAG/Wissenssuche wurde mit synthetischen Dokumenten getestet

## Lokale URLs

- Corporate LLM App: `http://localhost:3080/login`
- Webseite: `website-template/index.html`

## Wichtige Dateien

- `README.md` - Projektuebersicht und Wiederherstellung
- `specs/praxis-kmu-corporate-llm-roadmap.md` - Produkt-Roadmap
- `specs/heilpraktiker-promptbibliothek.md` - fachliche Prompt-Vorlagen
- `specs/demo-workflows-heilpraktiker.md` - Demo- und Kundenszenarien
- `specs/local-oss-stack-runbook.md` - technische Runbook-Notizen
- `librechat-overlay/librechat.yaml` - sichtbare App-Konfiguration und Modell-Specs
- `librechat-overlay/litellm.config.yaml` - Modellrouting
- `librechat-overlay/praxis_guardrail.py` - Datenschutz-Guardrail
- `librechat-overlay/docker-compose.override.yml` - Docker-Ergaenzungen

## Secrets

Keys liegen lokal in `vendor/LibreChat/.env` und werden nicht committed. Keine API Keys ins Repo schreiben.

## Wiederherstellung in einem neuen Setup

1. Repo klonen.
2. LibreChat nach `vendor/LibreChat/` klonen.
3. Overlay-Dateien aus `librechat-overlay/` nach `vendor/LibreChat/` kopieren.
4. `.env` lokal anlegen und OpenRouter-/DeepSeek-/sonstige Keys eintragen.
5. Docker starten.
6. `http://localhost:3080/login` oeffnen.

## Naechste sinnvolle Schritte

1. In der App sichtbarer machen, ob ein Modus lokal oder Cloud nutzt.
2. Staerkeres lokales Modell testen, weil `llama3.2:3b` nur MVP-tauglich ist.
3. Einen gefuehrten Demo-Ablauf fuer Kundentermine bauen.
4. Ein kleines Restore-/Install-Skript schreiben, damit Overlay und Start weniger manuell sind.
5. Spaeter: Kostenmonitoring, Rollen/Rechte, Backup-Konzept und DSGVO-Dokumentation schaerfen.

## Produktlogik

Fuer Heilpraktiker ist `Praxis Sicher` der Standard fuer vertrauliche Daten. Cloud-Modi sind nur fuer unkritische Texte, Marketing, allgemeine Vorlagen oder anonymisierte Inhalte gedacht. Das ist der Kern des Beratungsarguments fuer KMU: lokale Sensibilitaet plus Cloud-Leistung dort, wo sie vertretbar ist.
