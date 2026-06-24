# MVP-Spezifikation: KMU AI Workspace

Stand: 2026-06-24

## 1. Produktziel

Wir bauen einen schlanken, sicheren KI-Arbeitsplatz fuer KMUs. Das MVP soll Teams ermoeglichen, KI kontrolliert zu nutzen, Firmenwissen per Dokumenten-Upload abzufragen und wiederkehrende Aufgaben ueber vorbereitete Assistenten zu erledigen.

Das MVP ist kein vollstaendiger Corporate-LLM-Klon. Es ist ein verkaufsfaehiger Pilot fuer echte KMU-Kunden, der in wenigen Tagen bis Wochen inkrementell umgesetzt werden kann.

## 2. Zielgruppe

Primaere Zielgruppe:

- KMUs mit 10 bis 250 Mitarbeitenden
- Geschaeftsfuehrung, IT-Leitung, Operations, Vertrieb, HR, Marketing
- Unternehmen ohne eigene KI-Abteilung
- Teams mit vielen internen Dokumenten, Vorlagen, Handbuechern oder wiederkehrenden Textaufgaben

Typische Probleme:

- Mitarbeitende nutzen private KI-Tools ohne Kontrolle.
- Unternehmenswissen liegt verstreut in PDFs, Word-Dateien und Vorlagen.
- Datenschutz und Provider-Fragen blockieren produktive Nutzung.
- Es fehlt eine einfache Einfuehrung mit klaren Regeln und konkreten Use Cases.

## 3. MVP-Erfolgskriterien

Das MVP gilt als erfolgreich, wenn ein Pilotkunde Folgendes ohne Entwicklerhilfe erledigen kann:

1. Ein Team anlegen und mindestens zwei Nutzer einladen.
2. Einen Chat mit einem freigeschalteten KI-Modell starten.
3. Einen Space erstellen und mindestens ein Dokument hochladen.
4. Eine Frage zum Dokument stellen und eine Antwort mit Quellen erhalten.
5. Einen vorbereiteten Assistenten nutzen.
6. Einen eigenen Assistenten erstellen.
7. Als Admin Nutzung und grobe Kosten sehen.
8. Ein Team-Monatslimit setzen oder einsehen.

Geschaeftlich gilt das MVP als erfolgreich, wenn mindestens drei Pilotkunden bereit sind, fuer Setup plus monatliche Betreuung zu zahlen.

## 4. Scope

### 4.1 In Scope

- Authentifizierung
- Organisationen/Teams
- Rollen: Owner, Admin, Member
- Nutzer einladen
- KI-Chat mit Streaming
- Auswahl aus 2 bis 3 Modellen
- Chatverlauf
- Assistenten mit Systemprompt
- Vordefinierte Assistenten
- Spaces fuer Firmenwissen
- Dokument-Upload fuer PDF, DOCX, TXT, MD
- Text-Extraktion
- Chunking
- Embeddings
- Vektorsuche mit Quellen
- Antwortgenerierung aus Space-Kontext
- Adminbereich mit Nutzern, Modellfreigaben, Nutzung und Monatsbudget
- Einfache Compliance-Seiten: Datenschutz, AVV-Hinweis, Subprozessoren, Modellregionen
- Manuelle Rechnungsfaehigkeit oder einfacher Stripe-Checkout

### 4.2 Out of Scope fuer MVP

- BYOM
- SSO/SAML
- SCIM
- komplexe Gruppenrechte
- oeffentliche Chat-Links
- Prompt-Versionierung
- Diff-Ansicht
- Schwarm-Voting
- Audit-Logs auf Enterprise-Niveau
- OCR fuer Bilder
- PPTX/XLSX-Verarbeitung
- Google Drive, SharePoint, Confluence oder Microsoft 365 Integrationen
- Mobile App
- Browser Extension
- feingranulare Kostenabrechnung je Token im Kunden-UI
- Marketplace fuer Assistenten

## 5. Kernpositionierung

Arbeitstitel:

> Sicherer KI-Arbeitsplatz fuer KMUs

Kurzversprechen:

> Firmenwissen hochladen, KI kontrolliert nutzen, produktive Assistenten sofort einsetzen.

Wichtige Botschaften:

- Team statt privater Wildwuchs
- Firmenwissen mit Quellen
- klare Modell- und Kostenkontrolle
- Datenschutzorientiert mit transparenter Provider- und Regionenlogik
- Einrichtung und Betreuung als Teil des Angebots

## 6. Nutzerrollen

### 6.1 Owner

Der Owner besitzt die Organisation.

Kann:

- Organisation verwalten
- Nutzer einladen und entfernen
- Rollen vergeben
- Modelle aktivieren/deaktivieren
- Monatsbudget setzen
- Subscription/Rechnung verwalten
- Spaces und Assistenten verwalten
- Datenexport oder Loeschung anstossen

### 6.2 Admin

Kann:

- Nutzer einladen
- Member entfernen
- Spaces und Assistenten verwalten
- Nutzung sehen
- Modelle aktivieren/deaktivieren

Kann nicht:

- Owner entfernen
- Organisation loeschen
- Abrechnung final kuendigen

### 6.3 Member

Kann:

- Chats erstellen
- freigegebene Assistenten nutzen
- teamweite Spaces nutzen
- eigene private Chats sehen

Kann nicht:

- Nutzer verwalten
- Modelle freischalten
- Monatsbudget aendern
- Dokumente loeschen, die andere hochgeladen haben, ausser bei Adminrechten

## 7. Hauptobjekte

### 7.1 Organisation

Eine Organisation ist der Mandant und die zentrale Sicherheitsgrenze.

Felder:

- id
- name
- slug
- owner_user_id
- default_model_id
- monthly_budget_cents
- budget_alert_threshold_percent
- created_at
- updated_at

Akzeptanzkriterien:

- Jede Nutzeraktion ist einer Organisation zugeordnet.
- Daten einer Organisation duerfen nie in einer anderen Organisation sichtbar sein.
- Serverseitige Checks sind Pflicht, UI-Checks allein reichen nicht.

### 7.2 Membership

Verknuepft Nutzer mit Organisation und Rolle.

Felder:

- id
- organization_id
- user_id
- role: owner | admin | member
- status: active | invited | suspended
- invited_email
- invited_by_user_id
- created_at
- updated_at

Akzeptanzkriterien:

- Ein Nutzer kann in mehreren Organisationen sein.
- Pro Organisation muss mindestens ein Owner existieren.
- Der letzte Owner kann nicht entfernt oder herabgestuft werden.

### 7.3 Chat

Ein Chat enthaelt Nachrichten und optional Kontext durch Agent und/oder Space.

Felder:

- id
- organization_id
- created_by_user_id
- title
- assistant_id nullable
- space_id nullable
- model_id
- visibility: private | organization
- created_at
- updated_at

Akzeptanzkriterien:

- Private Chats sind nur fuer Ersteller sichtbar.
- Organisation-Chats sind fuer Teammitglieder sichtbar.
- Chats in einem Space nutzen automatisch den Space-Kontext.

### 7.4 Message

Felder:

- id
- chat_id
- organization_id
- role: user | assistant | system
- content
- model_id nullable
- input_tokens nullable
- output_tokens nullable
- total_cost_cents nullable
- citations jsonb nullable
- created_at

Akzeptanzkriterien:

- Assistant-Nachrichten speichern genutztes Modell und Kostenmetadaten.
- Zitate werden strukturiert gespeichert.
- Systemprompts werden nicht unnötig im sichtbaren Chatverlauf angezeigt.

### 7.5 Assistant

Ein Assistent ist ein wiederverwendbares Profil mit Systemprompt.

Felder:

- id
- organization_id nullable fuer globale Templates
- created_by_user_id nullable
- name
- description
- system_prompt
- greeting
- icon
- default_model_id nullable
- is_official
- visibility: private | organization
- created_at
- updated_at

Akzeptanzkriterien:

- Offizielle Assistenten sind fuer alle Organisationen lesbar.
- Team-Assistenten sind nur innerhalb der Organisation sichtbar.
- Member koennen Assistenten nutzen, aber nur eigene bearbeiten.
- Admins koennen alle Team-Assistenten bearbeiten.

### 7.6 Space

Ein Space ist ein Wissensraum.

Felder:

- id
- organization_id
- created_by_user_id
- name
- description
- instructions
- visibility: private | organization
- status: empty | processing | ready | error
- created_at
- updated_at

Akzeptanzkriterien:

- Ein Space kann mehrere Dokumente enthalten.
- Nur sichtbare Spaces koennen im Chat ausgewaehlt werden.
- Wenn ein Space nicht ready ist, wird im Chat klar darauf hingewiesen.

### 7.7 Document

Felder:

- id
- organization_id
- space_id
- uploaded_by_user_id
- filename
- mime_type
- file_size_bytes
- storage_key
- processing_status: queued | extracting | embedding | ready | error
- extracted_text_chars
- error_message nullable
- created_at
- updated_at

Akzeptanzkriterien:

- Maximale Dateigroesse im MVP: 25 MB.
- Erlaubte Formate: PDF, DOCX, TXT, MD.
- Fehlerhafte Dateien werden mit sichtbarer Fehlermeldung markiert.
- Originaldateien koennen geloescht werden.

### 7.8 DocumentChunk

Felder:

- id
- organization_id
- space_id
- document_id
- chunk_index
- content
- token_count_estimate
- page_number nullable
- embedding vector
- metadata jsonb
- created_at

Akzeptanzkriterien:

- Jeder Chunk ist eindeutig einem Dokument und Space zugeordnet.
- Retrieval filtert immer nach organization_id und space_id.
- Quellen verweisen auf Dokumentname und, wenn moeglich, Seite/Abschnitt.

### 7.9 Model

Felder:

- id
- provider
- name
- display_name
- region_label: eu | global
- input_cost_per_million_tokens_usd
- output_cost_per_million_tokens_usd
- is_enabled_globally
- is_default
- created_at
- updated_at

Empfohlene MVP-Modelle:

- Gutes Alltagsmodell, guenstig
- Starkes Premium-Modell
- Schnelles Modell fuer einfache Aufgaben

Akzeptanzkriterien:

- Admins koennen Modelle pro Organisation aktivieren/deaktivieren.
- Modelle mit globaler Verarbeitung werden sichtbar als Global markiert.
- Defaultmodell wird gesetzt, wenn Nutzer keines auswaehlt.

### 7.10 ModelUsage

Felder:

- id
- organization_id
- user_id
- chat_id nullable
- message_id nullable
- model_id
- input_tokens
- output_tokens
- estimated_cost_cents
- created_at

Akzeptanzkriterien:

- Jede Modellantwort erzeugt einen Usage-Eintrag.
- Adminbereich aggregiert Nutzung pro Monat.
- Bei erreichtem Monatsbudget werden teure Modelle blockiert oder alle Modellaufrufe gestoppt, je nach Team-Einstellung.

## 8. Screens

### 8.1 Login

Elemente:

- E-Mail
- Passwort
- Login-Button
- Link zu Passwort vergessen
- Link zu Konto erstellen

Akzeptanzkriterien:

- Fehlermeldungen sind klar und nicht technisch.
- Nach Login geht es zur zuletzt genutzten Organisation oder zum Onboarding.

### 8.2 Registrierung

Elemente:

- E-Mail
- Passwort
- Passwort bestaetigen
- Checkbox AGB/Datenschutz
- Konto erstellen

Akzeptanzkriterien:

- Passwortregeln werden sichtbar.
- Nutzer erstellt nach Registrierung eine Organisation.

### 8.3 Onboarding

Schritte:

1. Organisation benennen
2. Zielbereich waehlen: Vertrieb, HR, Support, Marketing, Allgemein
3. Erstes Dokument optional hochladen
4. Ersten Assistenten auswaehlen

Akzeptanzkriterien:

- Onboarding kann uebersprungen werden.
- Nach Abschluss landet Nutzer im Chat.

### 8.4 Chat

Layout:

- Linke Spalte: Chatliste, Neuer Chat, Spaces, Assistenten
- Hauptbereich: Nachrichten
- Oben: Modell-Auswahl, Space-Auswahl, Assistenten-Badge
- Unten: Eingabefeld, Senden, Datei/Space-Hinweis

Funktionen:

- Neuer Chat
- Nachricht senden
- Streaming-Antwort
- Antwort kopieren
- Quellen anzeigen
- Chat umbenennen
- Chat loeschen

Akzeptanzkriterien:

- Nutzer kann keine Nachricht senden, wenn kein Modell freigegeben ist.
- Bei Space-Chat werden Quellen angezeigt.
- Bei fehlenden Quellen sagt die Antwort, dass im Space keine passende Grundlage gefunden wurde.
- Streaming-Abbruch wird sauber behandelt.

### 8.5 Spaces

Liste:

- Name
- Beschreibung
- Dokumentanzahl
- Status
- Zuletzt aktualisiert

Detail:

- Space bearbeiten
- Dokumente hochladen
- Dokumentliste
- Verarbeitungstatus
- Testfrage stellen

Akzeptanzkriterien:

- Upload zeigt Fortschritt oder Status.
- Nach Verarbeitung ist der Space im Chat nutzbar.
- Fehlerhafte Dokumente blockieren nicht den ganzen Space.

### 8.6 Assistenten

Liste:

- Offizielle Assistenten
- Team-Assistenten
- Eigene Assistenten

Editor:

- Name
- Beschreibung
- Icon
- Begruessung
- Systemprompt
- Optionales Modell
- Sichtbarkeit

Akzeptanzkriterien:

- Systemprompt-Limit: 5.000 Zeichen.
- Begruessung-Limit: 1.000 Zeichen.
- Nutzer kann aus Assistent heraus neuen Chat starten.

### 8.7 Admin

Tabs:

- Nutzer
- Modelle
- Nutzung
- Organisation
- Compliance

Nutzer:

- Mitgliederliste
- Rolle aendern
- Einladen
- Entfernen

Modelle:

- Modell aktivieren/deaktivieren
- Defaultmodell setzen
- EU/Global Kennzeichnung

Nutzung:

- aktueller Monat
- Nachrichtenanzahl
- Token grob
- geschaetzte Kosten
- Budgetbalken

Organisation:

- Name
- Monatsbudget
- Warnschwelle

Compliance:

- Subprozessoren
- Modellregionen
- Datenexport anfragen
- Loeschung anfragen

Akzeptanzkriterien:

- Nur Owner/Admin sieht Adminbereich.
- Member erhalten keinen Zugriff auf Adminrouten.
- Budgetaenderungen werden serverseitig geprueft.

## 9. RAG-Verhalten

### 9.1 Dokumentverarbeitung

Pipeline:

1. Datei hochladen
2. Datei in Storage speichern
3. Document mit status queued erstellen
4. Hintergrundjob extrahiert Text
5. Text wird bereinigt
6. Text wird in Chunks geteilt
7. Embeddings werden erzeugt
8. Chunks werden gespeichert
9. Document status ready
10. Space status ready, wenn mindestens ein Dokument ready ist

Chunking:

- Zielgroesse: ca. 700 bis 1.000 Tokens
- Overlap: ca. 100 bis 150 Tokens
- Seitenzahl bei PDF wenn moeglich speichern

Akzeptanzkriterien:

- Leere Dokumente werden als error markiert.
- Sehr kurze Dokumente erzeugen mindestens einen Chunk.
- Verarbeitung laeuft asynchron.

### 9.2 Retrieval

Bei Frage in Space:

1. Query embedding erzeugen
2. Top 8 bis 12 Chunks aus gleichem Space suchen
3. Optional niedrige Scores herausfiltern
4. Kontextblock mit Quellen bauen
5. Modellantwort mit Quellenpflicht erzeugen

Systemregel:

> Antworte auf Basis der bereitgestellten Quellen. Wenn die Quellen keine Antwort enthalten, sage klar, dass im vorhandenen Firmenwissen keine passende Information gefunden wurde. Erfinde keine Fakten.

Akzeptanzkriterien:

- Quellen enthalten Dokumentname und Abschnitt/Seite, soweit vorhanden.
- Antwort nutzt nur Chunks aus derselben Organisation.
- Keine Space-uebergreifende Suche im MVP.

## 10. KI-Chat-Verhalten

### 10.1 Normaler Chat

Prompt-Zusammensetzung:

- Plattform-Systemregel
- optional Assistent-Systemprompt
- Chatverlauf
- aktuelle Nutzernachricht

### 10.2 Space-Chat

Prompt-Zusammensetzung:

- Plattform-Systemregel
- optional Assistent-Systemprompt
- Space-Instructions
- Quellenkontext
- Chatverlauf gekuerzt
- aktuelle Nutzernachricht

### 10.3 Fehlerverhalten

Faelle:

- Provider nicht erreichbar
- Monatsbudget erreicht
- Modell deaktiviert
- Space verarbeitet noch
- Retrieval findet nichts

Akzeptanzkriterien:

- Nutzer bekommt verstaendliche Meldung.
- Fehler werden intern protokolliert.
- Keine API-Keys oder Providerdetails im UI anzeigen.

## 11. Vordefinierte Assistenten

MVP-Set:

1. Vertriebsassistent
2. Marketingassistent
3. HR-Assistent
4. Supportassistent
5. Geschaeftsfuehrungsassistent
6. Protokollassistent
7. Qualitaetsmanager
8. E-Mail-Assistent
9. Wissens-Assistent
10. Datenschutz-Coach

Jeder Assistent braucht:

- Name
- kurze Beschreibung
- Icon
- Begruessung
- Systemprompt
- drei Beispielprompts

Beispiel: Vertriebsassistent

- Beschreibung: Hilft bei Angeboten, Follow-ups, Einwandbehandlung und kundenorientierten Texten.
- Begruessung: "Wobei soll ich dich im Vertrieb unterstuetzen?"
- Beispielprompts:
  - "Schreibe ein freundliches Follow-up nach einem Erstgespraech."
  - "Formuliere aus diesen Stichpunkten ein Angebot."
  - "Gib mir Antworten auf typische Einwaende gegen unseren Preis."

## 12. Admin- und Kostenlogik

### 12.1 Budget

Jede Organisation hat ein monthly_budget_cents.

MVP-Default:

- Demo/Pilot: 50 EUR intern
- Kleines Paket: 100 EUR intern
- Groesseres Paket: individuell

Budgetlogik:

- Bei 80 Prozent: Admin-Warnung anzeigen.
- Bei 100 Prozent: neue Modellaufrufe blockieren oder nur guenstiges Modell erlauben.

Akzeptanzkriterien:

- Budgetcheck erfolgt direkt vor Provideraufruf.
- Usage wird nach Providerantwort gespeichert.
- Bei Fehler nach Providerantwort wird Nutzung trotzdem soweit moeglich erfasst.

### 12.2 Preise

Preise werden intern als Konfiguration gepflegt.

MVP muss keine exakte Kundenabrechnung je Token anzeigen. Es reicht:

- geschaetzte Nutzung
- geschaetzte Kosten
- Budgetfortschritt

## 13. Compliance-Anforderungen MVP

### 13.1 Pflichtseiten

Im Produkt oder als verlinkte Dokumente:

- Datenschutzhinweise
- AVV-Hinweis oder AVV-PDF
- Subprozessorenliste
- Modellregionen
- Loesch- und Exportprozess
- KI-Nutzungsregeln fuer Mitarbeitende

### 13.2 Produkthinweise

Im UI sichtbar:

- Modelle mit Verarbeitung ausserhalb EU als Global markieren.
- Hinweis bei Dokumentupload: keine Passwoerter, Zahlungsdaten oder geheimen Schluessel hochladen.
- Hinweis im Space: Antworten koennen falsch sein und muessen fachlich geprueft werden.

### 13.3 Mindest-Security

- API-Keys nur serverseitig in Environment/Secret Manager
- keine Providerkeys im Browser
- HTTPS
- sichere Session-Cookies
- Rate Limits fuer Chat und Uploads
- serverseitige Mandantenpruefung fuer jede Query
- Storage-Zugriff nur ueber signierte URLs oder Backend
- Loeschung entfernt Datenbankeintraege und Storage-Objekte best effort

## 14. API-Spezifikation

Die exakten Pfade koennen je nach Framework angepasst werden. Wichtig ist die fachliche Trennung.

### Auth

- POST /api/auth/sign-up
- POST /api/auth/sign-in
- POST /api/auth/sign-out
- POST /api/auth/forgot-password

Wenn ein Auth-Anbieter genutzt wird, koennen diese Endpunkte entfallen.

### Organizations

- GET /api/organizations
- POST /api/organizations
- GET /api/organizations/:organizationId
- PATCH /api/organizations/:organizationId

### Members

- GET /api/organizations/:organizationId/members
- POST /api/organizations/:organizationId/invitations
- PATCH /api/organizations/:organizationId/members/:memberId
- DELETE /api/organizations/:organizationId/members/:memberId

### Models

- GET /api/models
- GET /api/organizations/:organizationId/models
- PATCH /api/organizations/:organizationId/models/:modelId

### Chats

- GET /api/organizations/:organizationId/chats
- POST /api/organizations/:organizationId/chats
- GET /api/chats/:chatId
- PATCH /api/chats/:chatId
- DELETE /api/chats/:chatId
- POST /api/chats/:chatId/messages

Message endpoint:

- akzeptiert content, model_id optional, assistant_id optional, space_id optional
- liefert Streaming-Antwort
- speichert User-Message und Assistant-Message

### Assistants

- GET /api/organizations/:organizationId/assistants
- POST /api/organizations/:organizationId/assistants
- GET /api/assistants/:assistantId
- PATCH /api/assistants/:assistantId
- DELETE /api/assistants/:assistantId

### Spaces

- GET /api/organizations/:organizationId/spaces
- POST /api/organizations/:organizationId/spaces
- GET /api/spaces/:spaceId
- PATCH /api/spaces/:spaceId
- DELETE /api/spaces/:spaceId

### Documents

- GET /api/spaces/:spaceId/documents
- POST /api/spaces/:spaceId/documents
- DELETE /api/documents/:documentId
- POST /api/documents/:documentId/reprocess

### Usage

- GET /api/organizations/:organizationId/usage?month=YYYY-MM

### Compliance

- GET /api/organizations/:organizationId/export
- POST /api/organizations/:organizationId/export
- POST /api/organizations/:organizationId/delete-request

## 15. Datenbanktabellen

Mindesttabellen:

- users, falls nicht komplett vom Auth-Anbieter verwaltet
- organizations
- memberships
- invitations
- models
- organization_models
- chats
- messages
- assistants
- spaces
- documents
- document_chunks
- model_usage
- audit_events_light

### 15.1 organization_models

Felder:

- id
- organization_id
- model_id
- is_enabled
- is_default
- created_at
- updated_at

Constraint:

- Pro Organisation maximal ein Defaultmodell.

### 15.2 audit_events_light

MVP-light, nicht Enterprise Audit Log.

Felder:

- id
- organization_id
- actor_user_id
- event_type
- target_type
- target_id
- metadata jsonb
- created_at

Events:

- member.invited
- member.role_changed
- member.removed
- model.enabled
- model.disabled
- space.created
- document.uploaded
- document.deleted
- assistant.created
- budget.updated

## 16. Frontend-Routen

Empfohlene Routen:

- /login
- /sign-up
- /onboarding
- /app
- /app/chats/:chatId
- /app/spaces
- /app/spaces/:spaceId
- /app/assistants
- /app/assistants/:assistantId
- /app/admin/users
- /app/admin/models
- /app/admin/usage
- /app/admin/compliance
- /legal/privacy
- /legal/subprocessors
- /legal/model-regions

## 17. UI-Prinzipien

- Keine Marketing-Landingpage als Produktstart.
- Nach Login direkt nutzbarer Chat.
- Adminfunktionen ruhig, klar und tabellarisch.
- Quellen muessen gut sichtbar und pruefbar sein.
- Warnungen kurz und handlungsorientiert.
- Keine technischen Providerfehler an Endnutzer durchreichen.
- Fachbegriffe vermeiden, wo sie nicht noetig sind.

## 18. Umsetzungsreihenfolge fuer die naechsten Tage

### Tag 1: Fundament

Ziel:

- App-Geruest
- Auth
- Datenbank
- Organisationen
- Rollen

Tasks:

- Projekt initialisieren
- Auth-Anbieter einrichten
- Tabellen organizations, memberships, models anlegen
- Seed fuer Modelle
- Login/Registrierung
- Organisation erstellen
- geschuetztes App-Layout

Done:

- Nutzer kann sich registrieren, einloggen und eine Organisation sehen.

### Tag 2: Chat

Ziel:

- erster nutzbarer KI-Chat

Tasks:

- Tabellen chats, messages, model_usage
- Provider-Abstraktion
- Streaming-Endpunkt
- Chatliste
- Chatansicht
- Modell-Auswahl
- Usage-Erfassung grob

Done:

- Nutzer kann neuen Chat starten und Antwort streamen lassen.

### Tag 3: Assistenten

Ziel:

- vordefinierte und eigene Assistenten

Tasks:

- Tabelle assistants
- Seed fuer 10 offizielle Assistenten
- Assistentenliste
- Assistenten-Editor
- Chat mit Assistent starten
- Systemprompt in Chat-Prompt integrieren

Done:

- Nutzer kann Vertriebs-/HR-/Support-Assistent nutzen und eigenen Assistenten anlegen.

### Tag 4: Spaces und Upload

Ziel:

- Dokumente hochladen und verarbeiten

Tasks:

- Tabellen spaces, documents, document_chunks
- Space-Liste und Detailseite
- Upload fuer PDF, DOCX, TXT, MD
- Storage-Anbindung
- Text-Extraktion
- Hintergrundjob oder einfache Queue

Done:

- Nutzer kann Space erstellen und Dokument hochladen.

### Tag 5: RAG

Ziel:

- Fragen mit Quellen beantworten

Tasks:

- Chunking
- Embeddings erzeugen
- Vektorsuche
- Space im Chat auswaehlen
- Quellenkontext in Prompt einfuegen
- Quellen im UI anzeigen

Done:

- Nutzer kann Fragen zu einem Dokument stellen und bekommt Quellen.

### Tag 6: Admin und Limits

Ziel:

- Kontrollierbarer Pilotbetrieb

Tasks:

- Nutzerverwaltung
- Modelle pro Organisation aktivieren/deaktivieren
- Budget anzeigen
- Budgetgrenze pruefen
- Usage Dashboard
- einfache Audit-Events

Done:

- Admin kann Nutzer und Modelle verwalten und Nutzung sehen.

### Tag 7: Politur und Pilotfaehigkeit

Ziel:

- Demo- und Pilot-ready

Tasks:

- leere Zustaende
- Fehlermeldungen
- Beispielinhalte
- Compliance-Seiten
- Upload-Hinweise
- erste Testdaten
- Smoke Tests
- Deployment

Done:

- Ein Pilotkunde kann End-to-End onboarden, chatten, Dokumente befragen und Assistenten nutzen.

## 19. Testfaelle

### Auth und Rollen

- Registrierung erstellt Nutzer.
- Nutzer erstellt Organisation.
- Owner kann Admin einladen.
- Member kann Adminseite nicht oeffnen.
- Letzter Owner kann nicht geloescht werden.

### Chat

- Chat ohne Space erzeugt Antwort.
- Chat mit Assistent nutzt Systemprompt.
- Deaktiviertes Modell kann nicht genutzt werden.
- Budgetlimit blockiert neue Modellaufrufe.
- Providerfehler zeigt freundliche Fehlermeldung.

### Spaces

- PDF Upload erzeugt Document.
- DOCX Upload erzeugt Document.
- TXT Upload erzeugt Document.
- Nicht erlaubtes Format wird abgelehnt.
- Datei ueber 25 MB wird abgelehnt.
- Fehlerhafte Datei markiert nur dieses Dokument als error.

### RAG

- Frage mit passender Quelle liefert Antwort mit Quelle.
- Frage ohne passende Quelle gibt klare Nicht-gefunden-Antwort.
- Nutzer aus Organisation A kann Chunks aus Organisation B nicht abrufen.
- Geloeschtes Dokument taucht nicht mehr in Quellen auf.

### Admin

- Admin sieht monatliche Nutzung.
- Member sieht keine Nutzung.
- Modell-Deaktivierung wirkt sofort.
- Budgetaenderung wird gespeichert.

## 20. Offene Entscheidungen

Vor Umsetzung klaeren:

1. Auth: Supabase Auth, Clerk oder Auth.js?
2. Hosting: Supabase/ Vercel EU, eigener Server, Hetzner, AWS oder Azure?
3. Zahlungsstart: Stripe sofort oder manuelle Rechnung fuer Piloten?
4. Erste Modelle: Welche Provider und Regionen?
5. Rechtliches: Wer prueft AVV, Datenschutz und Subprozessorenliste?
6. Design: schlichtes eigenes UI oder Komponentenbibliothek?

Empfehlung fuer schnellsten MVP:

- Next.js
- Supabase Postgres mit pgvector
- Supabase Auth
- Supabase Storage oder S3-kompatibler EU-Storage
- Vercel/Node Deployment nur, wenn Datenregion und Datenschutz sauber dokumentiert sind
- Stripe spaeter, fuer erste Piloten Rechnung manuell

## 21. Pilotangebot

Empfohlenes Pilotpaket:

- Einmaliges Setup: 2.500 bis 5.000 EUR
- Monatlich: 490 bis 990 EUR
- Enthalten:
  - 1 Organisation
  - bis 20 Nutzer
  - 3 Spaces
  - 10 Assistenten
  - 1 Schulung
  - monatliches Nutzungskontingent
  - Support per E-Mail

Nicht enthalten:

- unbegrenzte Modellnutzung
- Rechtsberatung
- individuelle Integrationen
- SSO
- On-Premise Betrieb

## 22. Release-Kriterien MVP

Vor Pilotstart muss gelten:

- Kein Zugriff ueber Organisationsgrenzen in Tests nachweisbar.
- Chat funktioniert stabil mit mindestens zwei Modellen.
- Dokument-RAG funktioniert mit PDF und DOCX.
- Quellen werden angezeigt.
- Admin kann Nutzer und Modelle verwalten.
- Nutzung wird erfasst.
- Upload- und Modellkosten sind begrenzt.
- Datenschutz-/Subprozessorenhinweise sind verfuegbar.
- Backup- und Loeschprozess sind zumindest operativ dokumentiert.

## 23. Nicht verhandelbare Leitplanken

- Keine geheimen Providerkeys im Frontend.
- Keine ungeprueften Cross-Tenant-Abfragen.
- Keine "100% DSGVO-konform"-Behauptung ohne juristische Pruefung.
- Keine unbegrenzte Nutzung ohne harte interne Limits.
- Keine Antwort aus Firmenwissen ohne Quellen, wenn der Space-Kontext genutzt wird.
- Keine sensiblen Fehlermeldungen im UI.

