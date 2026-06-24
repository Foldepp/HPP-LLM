# Umsetzungsliste: KMU AI Workspace MVP

Stand: 2026-06-24

Diese Liste ist die operative Ableitung aus `specs/mvp-spec.md`.

## Tag 1: Fundament

Ziel: Nutzer koennen sich registrieren, einloggen und eine Organisation sehen.

### Aufgaben

- [ ] Projekt initialisieren
- [ ] Environment-Konfiguration anlegen
- [ ] Datenbank einrichten
- [ ] Auth einrichten
- [ ] Tabellen erstellen:
  - [ ] organizations
  - [ ] memberships
  - [ ] invitations
  - [ ] models
  - [ ] organization_models
- [ ] Modell-Seeds anlegen
- [ ] Registrierungsseite bauen
- [ ] Loginseite bauen
- [ ] Onboarding: Organisation erstellen
- [ ] App-Layout mit geschuetzten Routen bauen
- [ ] Rollenpruefung serverseitig vorbereiten

### Abnahme

- [ ] Neuer Nutzer kann Konto erstellen.
- [ ] Nutzer kann Organisation erstellen.
- [ ] Nutzer ist Owner dieser Organisation.
- [ ] Nicht eingeloggte Nutzer kommen nicht in die App.

## Tag 2: Chat

Ziel: Erster nutzbarer KI-Chat mit Streaming und Usage-Erfassung.

### Aufgaben

- [ ] Tabellen erstellen:
  - [ ] chats
  - [ ] messages
  - [ ] model_usage
- [ ] LLM-Provider-Abstraktion bauen
- [ ] Server-Endpunkt fuer Chatnachricht bauen
- [ ] Streaming-Antwort implementieren
- [ ] Chatliste bauen
- [ ] Chatansicht bauen
- [ ] Neues-Chat-Flow bauen
- [ ] Modell-Auswahl bauen
- [ ] Nachrichten speichern
- [ ] Token/Kosten grob erfassen
- [ ] Budgetcheck vor Modellaufruf vorbereiten

### Abnahme

- [ ] Nutzer kann neuen Chat erstellen.
- [ ] Nutzer kann Nachricht senden.
- [ ] Antwort streamt sichtbar.
- [ ] Chat bleibt nach Reload erhalten.
- [ ] Usage-Eintrag wird gespeichert.

## Tag 3: Assistenten

Ziel: Vordefinierte und eigene Assistenten funktionieren im Chat.

### Aufgaben

- [ ] Tabelle assistants erstellen
- [ ] 10 offizielle Assistenten seeden
- [ ] Assistentenliste bauen
- [ ] Assistenten-Detail bauen
- [ ] Assistenten-Editor bauen
- [ ] Eigenen Assistenten erstellen
- [ ] Assistent bearbeiten
- [ ] Chat mit Assistent starten
- [ ] Assistent-Systemprompt in Prompt-Aufbau integrieren
- [ ] Beispielprompts anzeigen

### Abnahme

- [ ] Nutzer sieht offizielle Assistenten.
- [ ] Nutzer kann eigenen Assistenten erstellen.
- [ ] Nutzer kann Chat mit Assistent starten.
- [ ] Antwort folgt sichtbar dem Assistentenprofil.

## Tag 4: Spaces und Upload

Ziel: Nutzer koennen Wissensraeume erstellen und Dokumente hochladen.

### Aufgaben

- [ ] Tabellen erstellen:
  - [ ] spaces
  - [ ] documents
  - [ ] document_chunks
- [ ] Storage einrichten
- [ ] Space-Liste bauen
- [ ] Space-Detail bauen
- [ ] Space erstellen/bearbeiten/loeschen
- [ ] Upload fuer PDF bauen
- [ ] Upload fuer DOCX bauen
- [ ] Upload fuer TXT/MD bauen
- [ ] Dateigroesse auf 25 MB begrenzen
- [ ] MIME-Type pruefen
- [ ] Text-Extraktion implementieren
- [ ] Dokumentstatus anzeigen

### Abnahme

- [ ] Nutzer kann Space erstellen.
- [ ] Nutzer kann PDF hochladen.
- [ ] Nutzer kann DOCX hochladen.
- [ ] Nutzer sieht Verarbeitungsstatus.
- [ ] Fehlerhafte Datei blockiert nicht den Space.

## Tag 5: RAG mit Quellen

Ziel: Nutzer koennen Fragen zu Dokumenten stellen und erhalten Quellen.

### Aufgaben

- [ ] Chunking implementieren
- [ ] Embedding-Provider einrichten
- [ ] Embeddings speichern
- [ ] Vektorsuche bauen
- [ ] Retrieval nach organization_id und space_id filtern
- [ ] Space-Auswahl im Chat bauen
- [ ] Quellenkontext in Prompt einfuegen
- [ ] Quellen in Assistant-Message speichern
- [ ] Quellen im UI anzeigen
- [ ] Nicht-gefunden-Verhalten implementieren

### Abnahme

- [ ] Frage zu Dokument wird beantwortet.
- [ ] Antwort zeigt Quellen.
- [ ] Frage ohne passende Quelle fuehrt zu ehrlicher Nicht-gefunden-Antwort.
- [ ] Cross-Tenant-Zugriff ist per Test ausgeschlossen.

## Tag 6: Admin und Limits

Ziel: Pilotbetrieb ist kontrollierbar.

### Aufgaben

- [ ] Admin-Navigation bauen
- [ ] Nutzerverwaltung bauen
- [ ] Einladungen bauen
- [ ] Rollenwechsel bauen
- [ ] Modellverwaltung pro Organisation bauen
- [ ] Defaultmodell setzen
- [ ] Nutzungsauswertung bauen
- [ ] Budgetanzeige bauen
- [ ] Monatsbudget setzen
- [ ] Budgetlimit technisch erzwingen
- [ ] audit_events_light anlegen
- [ ] wichtige Adminaktionen protokollieren

### Abnahme

- [ ] Owner/Admin sehen Adminbereich.
- [ ] Member sieht Adminbereich nicht.
- [ ] Admin kann Modell deaktivieren.
- [ ] Deaktiviertes Modell kann nicht genutzt werden.
- [ ] Budgetlimit verhindert neue Modellaufrufe.

## Tag 7: Pilotfaehigkeit

Ziel: Produkt ist demo- und pilotbereit.

### Aufgaben

- [ ] Leere Zustaende verbessern
- [ ] Fehlermeldungen vereinheitlichen
- [ ] Loading States einbauen
- [ ] Upload-Hinweise einbauen
- [ ] Modellregionen-Seite erstellen
- [ ] Subprozessoren-Seite erstellen
- [ ] Datenschutz-/AVV-Hinweise verlinken
- [ ] Demo-Organisation vorbereiten
- [ ] Demo-Space mit Beispieldokument vorbereiten
- [ ] Smoke-Test komplett durchspielen
- [ ] Deployment vorbereiten
- [ ] Backup-/Loeschprozess dokumentieren

### Abnahme

- [ ] Neuer Pilotkunde kann End-to-End onboarden.
- [ ] Chat, Assistenten und Space-RAG funktionieren.
- [ ] Admin kann Nutzung kontrollieren.
- [ ] Compliance-Basisseiten sind vorhanden.
- [ ] Keine geheimen Keys im Browser.

## Kritische Tests vor Pilot

- [ ] Nutzer A aus Organisation A kann keine Chats von Organisation B lesen.
- [ ] Nutzer A aus Organisation A kann keine Dokumente von Organisation B abrufen.
- [ ] Retrieval nutzt nur Chunks der aktiven Organisation.
- [ ] Member kann Admin-APIs nicht aufrufen.
- [ ] API-Keys erscheinen nicht in Browser-Netzwerkrequests.
- [ ] Upload von Datei ueber 25 MB wird abgelehnt.
- [ ] Nicht erlaubtes Dateiformat wird abgelehnt.
- [ ] Providerfehler zeigt keine sensiblen Details.
- [ ] Budgetlimit wird serverseitig geprueft.

## Erste Pilot-Demo

Demo-Ablauf:

1. Login
2. Organisation zeigen
3. Vertriebsassistent oeffnen
4. Follow-up-Mail erzeugen
5. Space "Produktwissen" oeffnen
6. PDF hochladen oder vorbereitetes PDF zeigen
7. Frage zum PDF stellen
8. Quellen zeigen
9. Adminbereich mit Nutzung und Modellfreigaben zeigen

Erfolgskriterium:

- Der Kunde versteht innerhalb von 15 Minuten, wie das Tool konkret im eigenen Unternehmen genutzt werden kann.

