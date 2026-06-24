# Open-Source-Pruefung und technische Entscheidung

Stand: 2026-06-24

## Kurzentscheidung

Wir bauen das MVP nicht von Grund auf neu.

Technische Basis:

- Kernprodukt: LibreChat
- Modellgateway: LiteLLM Proxy
- RAG: LibreChat RAG API mit PostgreSQL/pgvector
- Observability: Langfuse, ab Pilotphase
- Dokumentextraktion: zunaechst LibreChat/RAG API Standard; spaeter Unstructured fuer bessere PDF/DOCX-Extraktion
- Deployment: Docker Compose auf einem EU-VPS
- Mandantenmodell im MVP: ein Stack pro Pilotkunde, keine gemeinsame Multi-Tenant-SaaS-Plattform

Diese Entscheidung spart uns Wochen Arbeit, reduziert Sicherheitsrisiken und passt zum Beratungs-/Managed-Service-Geschaeftsmodell.

## Warum kein kompletter Eigenbau?

Unser MVP braucht viele Standardbausteine:

- Login
- Nutzerverwaltung
- Rollen/Admin
- Chat UI
- Provider-Anbindung
- Streaming
- Datei-Upload
- RAG
- Agents
- Suchfunktion
- Modellkonfiguration
- Kosten- und Nutzungskontrolle

Diese Dinge sind bereits in reifen Open-Source-Projekten vorhanden. Ein Eigenbau waere nur sinnvoll, wenn wir sehr spezielle Produktdifferenzierung in der Kernoberflaeche brauchen. Fuer den ersten KMU-Pilot ist die Differenzierung aber nicht die Chat-UI, sondern:

- Einrichtung
- Datenschutz-/Betriebskonzept
- gute Assistenten
- gute Wissensraeume
- Schulung
- Support
- branchenspezifische Use Cases

## Bewertete Optionen

## 1. LibreChat

Website/Repo:

- https://www.librechat.ai/
- https://github.com/danny-avila/LibreChat

Staerken:

- MIT-Lizenz
- self-hosted
- Multi-Provider-Chat
- Agents
- Admin Panel
- Rollen, Gruppen und Rechte
- RAG API mit FastAPI, LangChain, PostgreSQL und pgvector
- Docker-Setup bringt MongoDB, Meilisearch, RAG API und Vector DB mit
- Konfiguration ueber `.env` und `librechat.yaml`
- S3/Azure Blob Storage fuer Dateiablage konfigurierbar
- gute Grundlage fuer Unternehmen, weil Multi-User und Admin schon vorhanden sind

Passt zu unserem MVP:

- Chat: ja
- Agents: ja
- RAG: ja
- Team/User/Admin: ja
- Modellkonfiguration: ja
- Datei-Upload: ja
- Suche: ja, ueber Meilisearch
- White-label/kommerziell: gut wegen MIT

Schwaechen:

- Keine perfekte SaaS-Mandantenlogik fuer viele Kunden in einer gemeinsamen Instanz.
- Abrechnung/Subscriptions sind nicht unser Produktmodell.
- UI ist generisch und muesste fuer Marke/Positionierung angepasst werden.
- RAG ist gut fuer MVP, aber nicht automatisch perfekt fuer komplexe Dokumente.

Entscheidung:

LibreChat ist unsere Basis.

## 2. Open WebUI

Website/Repo:

- https://docs.openwebui.com/
- https://github.com/open-webui/open-webui

Staerken:

- Sehr stark fuer selbst gehostete KI-Workspaces
- Multi-User, Rollen, Gruppen, Modellzugriff
- Knowledge/RAG eingebaut
- OpenAI-kompatible Provider und Ollama
- Sehr gute lokale/offline Story

Passt zu unserem MVP:

- Chat: ja
- RAG: ja
- Admin/Rollen: ja
- Modellzugriff: ja

Schwaechen:

- Lizenz-/Branding-Historie ist fuer ein kommerzielles, eigenes Produkt weniger angenehm.
- White-label und Weiterverkauf wirken riskanter als bei MIT-Projekten.
- Stark als internes Tool, weniger ideal als Basis fuer unser eigenes Managed-KMU-Angebot.

Entscheidung:

Nicht als Hauptbasis. Gut als Vergleich und Fallback fuer On-Prem-Kunden, die explizit lokale Modelle/Ollama wollen.

## 3. AnythingLLM

Website/Repo:

- https://anythingllm.com/
- https://github.com/Mintplex-Labs/anything-llm

Staerken:

- MIT-Lizenz
- Sehr einfach fuer RAG-Workspaces
- Dokumente, Quellen, Agents, Multi-Provider
- Docker-Version unterstuetzt Multi-User
- Gute Demo-Erfahrung

Passt zu unserem MVP:

- RAG-Workspaces: ja
- Dokumentchat: ja
- Multi-User: ja
- schnelle Demo: sehr gut

Schwaechen:

- Rollen/Rechte weniger fein als bei LibreChat.
- Wirkt staerker als fertiges Dokumentchat-Tool, weniger als erweiterbare Chat-Plattform.
- Workspace- und RAG-Rechtemodell ist fuer unseren KMU-Teamanspruch weniger sauber.

Entscheidung:

Nicht Hauptbasis. Gut fuer sehr schnelle Demos oder lokale Einzelkunden-Installationen.

## 4. Dify

Website/Repo:

- https://dify.ai/
- https://github.com/langgenius/dify

Staerken:

- Sehr stark fuer Workflows, Agentic Apps und RAG-Pipelines
- Visueller Builder
- Knowledge Bases
- Team-/Workspace-Konzept
- Gut, wenn wir spaeter kundenspezifische KI-Apps bauen wollen

Passt zu unserem MVP:

- Workflows: ja
- RAG: ja
- Agenten: ja
- API Apps: ja

Schwaechen:

- Lizenz ist nicht plain MIT/Apache, sondern modifizierte Apache-2.0-Lizenz mit Bedingungen.
- Community Self-Hosted ist nicht ideal fuer ein eigenes multi-tenant SaaS/White-label-Modell.
- Produkt ist eher App-/Workflow-Builder als direkt der KI-Arbeitsplatz fuer Endnutzer.

Entscheidung:

Nicht als Hauptbasis. Spaeter als internes Workflow-Backend moeglich, aber fuer das MVP vermeiden wir Lizenz- und Produktkomplexitaet.

## 5. LiteLLM

Website/Repo:

- https://docs.litellm.ai/
- https://github.com/BerriAI/litellm

Staerken:

- Einheitliches OpenAI-kompatibles Gateway fuer viele Provider
- Cost Tracking
- Budgets
- Rate Limits
- Teams/Keys
- Routing und Fallbacks
- Logging-Integrationen, auch Langfuse

Passt zu unserem MVP:

- Modellgateway: ja
- Budgetkontrolle: ja
- Providerwechsel: ja
- Kostenuebersicht: ja

Schwaechen:

- Zusaetzlicher Betriebsbaustein.
- Budgetlogik muss sauber getestet werden.
- Admin-Komplexitaet steigt etwas.

Entscheidung:

Einsetzen. Nicht jede App sollte direkt Provider-Keys kennen. LiteLLM wird unser kontrollierter KI-Gateway.

## 6. Langfuse

Website/Repo:

- https://langfuse.com/
- https://github.com/langfuse/langfuse

Staerken:

- Open-Source LLM Observability
- Self-hostable
- Tracing, Prompt Management, Evals, Debugging
- MIT fuer Kernfunktionen
- Gute Grundlage, um RAG-Qualitaet und Kosten zu verstehen

Passt zu unserem MVP:

- Tracing: ja
- Debugging: ja
- Promptverbesserung: ja
- Pilotbetrieb: ja

Schwaechen:

- Fuer Tag 1 nicht zwingend.
- Noch ein Service im Stack.

Entscheidung:

Ab Pilotphase einsetzen. Fuer den ersten lokalen Prototyp optional.

## 7. Unstructured

Website/Repo:

- https://docs.unstructured.io/
- https://github.com/Unstructured-IO/unstructured

Staerken:

- Sehr gute Dokumentextraktion fuer PDF, DOCX, HTML, Bilder und weitere Formate
- Open-Source-Komponenten
- Nuetzlich fuer bessere RAG-Qualitaet

Passt zu unserem MVP:

- Dokumentextraktion: ja
- spaetere OCR/komplexe PDFs: ja

Schwaechen:

- Fuer das erste MVP eventuell Overkill.
- Kann Deployment und Abhaengigkeiten schwerer machen.

Entscheidung:

Nicht sofort als Pflicht. Erst nutzen, wenn Standard-Extraktion bei Pilotdokumenten nicht reicht.

## Finale Architektur fuer MVP

## Betriebsmodell

Wir starten nicht als zentrale Multi-Tenant-SaaS-Plattform.

Stattdessen:

- pro Pilotkunde eine eigene Instanz
- eigene Datenbank
- eigene RAG-Datenbank
- eigene Dateiablage
- eigene LiteLLM-Team-/Key-Konfiguration

Vorteile:

- deutlich weniger Mandantenrisiko
- bessere Datenschutzargumentation
- einfachere Loeschung/Export
- weniger Custom-Code
- schneller pilotierbar
- passt zu Managed-Service-Preisen

Nachteil:

- Betrieb skaliert operativ schlechter.
- Spaeter brauchen wir Automatisierung fuer Provisioning, Backups und Updates.

Fuer 3 bis 10 Pilotkunden ist das bewusst der richtige Trade-off.

## Komponenten

### 1. LibreChat

Rolle:

- Haupt-UI
- Nutzerlogin
- Chat
- Agents
- Admin
- Rollen/Gruppen
- Datei-Upload
- Anbindung an RAG API

Daten:

- MongoDB fuer Appdaten
- Meilisearch fuer Suche

### 2. LibreChat RAG API

Rolle:

- Dokumentindexierung
- Retrieval
- Vektorsuche

Daten:

- PostgreSQL mit pgvector

### 3. LiteLLM Proxy

Rolle:

- zentraler Provider-Zugang
- Modellrouting
- Budgets
- Rate Limits
- Cost Tracking

Modelle im MVP:

- ein guenstiges Standardmodell
- ein starkes Premium-Modell
- optional ein EU/Datenschutz-freundliches Modell ueber Azure/OpenAI/Vertex/Mistral je nach Vertrag

Wichtig:

- LibreChat spricht nach Moeglichkeit nur mit LiteLLM.
- Provider-Keys liegen nur in LiteLLM, nicht in mehreren Appteilen.

### 4. Langfuse

Rolle:

- Tracing
- Debugging
- Prompt-/RAG-Qualitaetsanalyse

Start:

- optional in Woche 1
- Pflicht ab bezahltem Pilotbetrieb

### 5. Storage

Start:

- lokal gemountetes Docker Volume fuer ersten Test

Pilot:

- S3-kompatibler EU-Storage, z. B. Hetzner Object Storage sobald verfuegbar/passend, AWS eu-central-1, Scaleway, IONOS S3 oder MinIO auf eigenem VPS

Wichtig:

- Dokumente nicht oeffentlich
- Backups verschluesselt
- klare Loeschroutine

## Nicht selbst bauen im MVP

Nicht selbst bauen:

- Chat UI
- Streaming
- Nutzerlogin
- Admin Panel
- Rollen/Gruppen-Grundlage
- Agents-Grundfunktion
- RAG-Basis
- Datei-Upload-Basis
- Modellprovider-Abstraktion
- Suchindex
- Kosten-/Budgetgrundlage

Selbst bauen oder konfigurieren:

- Branding
- Landingpage
- Onboarding-Dokumente
- vordefinierte Assistenten
- Modell-/Budget-Konfiguration
- Datenschutz-/Subprozessoren-Dokumente
- Deployment-Automation
- Backup-/Restore-Skripte
- Kunden-spezifische Spaces
- Schulungsmaterial

## Anpassungen an unserer bisherigen MVP-Spec

Die bisherige Spec bleibt fachlich wertvoll, aber die technische Umsetzung aendert sich:

- `organizations` als eigene App-Tabelle entfaellt im MVP, weil pro Kunde eigene Instanz.
- Eigene `memberships`-Logik entfaellt weitgehend; LibreChat Rollen/Gruppen nutzen.
- Eigene Chat-/Message-Tabellen entfallen; LibreChat verwaltet sie.
- Eigene RAG-Pipeline entfaellt; LibreChat RAG API nutzen.
- Eigene Usage-Tabelle wird nicht zuerst gebaut; LiteLLM/Langfuse fuer Usage und Kosten nutzen.
- Eigene Adminoberflaeche entfaellt zuerst; LibreChat Admin + LiteLLM Admin verwenden.

Was bleibt:

- fachlicher Scope
- Pilotangebot
- Compliance-Anforderungen
- Assistenten-Set
- Abnahmekriterien
- Datenschutzleitplanken
- spaetere Produktvision

## Konkreter Umsetzungsplan

## Tag 1: Lokaler Stack

- LibreChat per Docker Compose starten
- `.env` sauber konfigurieren
- Adminnutzer erstellen
- RAG API aktivieren
- Meilisearch aktivieren
- LiteLLM Proxy starten
- erstes Modell ueber LiteLLM an LibreChat anbinden

Abnahme:

- Login funktioniert
- Chat mit Modell funktioniert
- Admin sieht Nutzer/Grundkonfiguration

## Tag 2: RAG und Dokumente

- PostgreSQL/pgvector fuer RAG pruefen
- PDF/DOCX/TXT hochladen
- Datei im Chat/Agent verwenden
- Quellen pruefen
- Limits fuer Dateigroessen setzen
- Testdokumente vorbereiten

Abnahme:

- Frage zu einem PDF liefert Antwort mit Quellen.

## Tag 3: Agents und KMU-Vorlagen

- 10 Assistenten als Templates anlegen
- Standard-Modell je Assistent definieren
- Beispielprompts erstellen
- Agenten mit Testdokumenten pruefen

Abnahme:

- Vertriebs-, HR- und Wissens-Assistent funktionieren in Demo-Szenarien.

## Tag 4: Budget und Modellkontrolle

- LiteLLM Keys/Teams/Budgets konfigurieren
- guenstige und teure Modelle trennen
- Budgetlimit testen
- Rate Limits setzen
- Cost Tracking pruefen

Abnahme:

- Budgetlimit blockiert oder begrenzt Modellnutzung.
- Kosten sind pro Kunde/Instanz nachvollziehbar.

## Tag 5: Pilot-Deployment

- EU-VPS einrichten
- Docker Compose produktionsnah deployen
- Domain und TLS
- Backups fuer MongoDB, Postgres und Storage
- Basis-Monitoring
- Datenschutzseiten und Subprozessoren-Dokumente bereitstellen

Abnahme:

- Demo-Instanz ist ueber HTTPS erreichbar.
- Backup ist getestet.
- Keine Providerkeys im Browser sichtbar.

## Tag 6: Branding und Demo

- Name, Logo, Farben minimal anpassen
- Starttexte und Beispiele anpassen
- Demo-Space vorbereiten
- Demo-Agenten vorbereiten
- Pilot-Onboarding-Checkliste erstellen

Abnahme:

- 15-Minuten-Kundendemo laeuft ohne technische Erklaerung.

## Tag 7: Haertung

- Rollen/Gruppen pruefen
- Upload-/Datei-Limits pruefen
- Budgetgrenzen pruefen
- Loeschprozess testen
- Export/Backup dokumentieren
- Update-Prozess dokumentieren

Abnahme:

- Erster Pilotkunde kann onboarden.

## Offene technische Details

Diese Punkte pruefen wir direkt beim Setup:

1. Welche LibreChat-Version ist fuer RAG und Admin-Panel aktuell stabil genug?
2. Welche Modelle laufen im MVP ueber welchen Provider?
3. Ob LiteLLM-Budgets fuer unseren exakten Flow hart genug greifen.
4. Ob LibreChat RAG fuer unsere Testdokumente qualitativ reicht.
5. Ob S3-kompatibler Storage sofort noetig ist oder lokales Volume fuer Demo reicht.

## Quellen

- LibreChat Website: https://www.librechat.ai/
- LibreChat GitHub: https://github.com/danny-avila/LibreChat
- LibreChat Admin Panel: https://www.librechat.ai/docs/features/admin_panel
- LibreChat Access Control: https://www.librechat.ai/docs/features/access_control
- LibreChat Agents: https://www.librechat.ai/docs/features/agents
- LibreChat RAG API: https://www.librechat.ai/docs/configuration/rag_api
- LibreChat Local Installation: https://www.librechat.ai/docs/local
- LibreChat S3 Storage: https://www.librechat.ai/docs/configuration/cdn/s3
- LiteLLM GitHub: https://github.com/BerriAI/litellm
- LiteLLM Spend Tracking: https://docs.litellm.ai/docs/proxy/cost_tracking
- LiteLLM Team Budgets: https://docs.litellm.ai/docs/proxy/team_budgets
- Langfuse Self Hosting: https://langfuse.com/self-hosting
- Langfuse GitHub: https://github.com/langfuse/langfuse
- Open WebUI Features: https://docs.openwebui.com/features/
- Open WebUI Knowledge: https://docs.openwebui.com/features/workspace/knowledge/
- AnythingLLM GitHub: https://github.com/Mintplex-Labs/anything-llm
- AnythingLLM Security and Access: https://docs.useanything.com/features/security-and-access
- AnythingLLM Documents in Chat: https://docs.anythingllm.com/chatting-with-documents/introduction
- Dify GitHub: https://github.com/langgenius/dify
- Dify License: https://github.com/langgenius/dify/blob/main/LICENSE
- Dify Knowledge: https://docs.dify.ai/en/use-dify/knowledge/readme
- Unstructured Overview: https://docs.unstructured.io/open-source/introduction/overview
- Unstructured GitHub: https://github.com/Unstructured-IO/unstructured

