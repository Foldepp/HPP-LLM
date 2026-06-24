# OSS-basierte MVP-Umsetzungsliste

Stand: 2026-06-24

Diese Checkliste ersetzt fuer die erste Umsetzung die eigenbauorientierte Liste. Ziel ist: moeglichst viel konfigurieren und integrieren, moeglichst wenig selbst programmieren.

## Zielarchitektur

- LibreChat als Hauptanwendung
- LiteLLM Proxy als Modellgateway
- LibreChat RAG API mit PostgreSQL/pgvector
- MongoDB fuer LibreChat
- Meilisearch fuer Suche
- Langfuse ab Pilotbetrieb
- Ein Stack pro Pilotkunde

## Tag 1: Lokale Basisinstanz

Ziel: LibreChat laeuft lokal mit Login und erstem Modell.

Aufgaben:

- [ ] LibreChat Repository klonen
- [ ] `.env` aus Beispiel erzeugen
- [ ] Docker Compose starten
- [ ] Adminnutzer anlegen
- [ ] MongoDB pruefen
- [ ] Meilisearch pruefen
- [ ] RAG API Container pruefen
- [ ] LiteLLM Proxy lokal starten
- [ ] erstes Modell in LiteLLM konfigurieren
- [ ] LibreChat so konfigurieren, dass es LiteLLM als OpenAI-kompatiblen Endpoint nutzt

Abnahme:

- [ ] Login funktioniert.
- [ ] Adminnutzer existiert.
- [ ] Chat mit Modell funktioniert.
- [ ] Provider-Key liegt nicht im Browser.

## Tag 2: RAG-Test

Ziel: Dokumente koennen hochgeladen und abgefragt werden.

Aufgaben:

- [ ] RAG API Konfiguration pruefen
- [ ] PostgreSQL/pgvector Container pruefen
- [ ] Embedding-Modell konfigurieren
- [ ] PDF hochladen
- [ ] DOCX hochladen
- [ ] TXT/MD hochladen
- [ ] Quellenanzeige pruefen
- [ ] Dateigroessenlimit setzen
- [ ] Demo-Dokumente vorbereiten

Abnahme:

- [ ] Frage zu PDF wird mit Quellen beantwortet.
- [ ] Frage zu DOCX wird mit Quellen beantwortet.
- [ ] Fehlerhafte Datei erzeugt verstaendliche Meldung.

## Tag 3: Modelle, Budgets, Limits

Ziel: Modellnutzung ist kontrollierbar.

Aufgaben:

- [ ] LiteLLM Admin-Key sicher setzen
- [ ] Kunden-/Team-Key fuer LibreChat erzeugen
- [ ] guenstiges Standardmodell konfigurieren
- [ ] Premium-Modell konfigurieren
- [ ] optional EU-Modell konfigurieren
- [ ] Teambudget setzen
- [ ] Rate Limits setzen
- [ ] Test: Budgetueberschreitung
- [ ] Test: deaktiviertes Modell
- [ ] Cost Tracking pruefen

Abnahme:

- [ ] LibreChat kann nur erlaubte Modelle nutzen.
- [ ] LiteLLM erfasst Kosten.
- [ ] Budgetlimit greift technisch.

## Tag 4: Assistenten und KMU-Demo

Ziel: Die Instanz wirkt wie ein KMU-Produkt, nicht wie ein nacktes OSS-Tool.

Aufgaben:

- [ ] 10 Assistenten anlegen:
  - [ ] Vertriebsassistent
  - [ ] Marketingassistent
  - [ ] HR-Assistent
  - [ ] Supportassistent
  - [ ] Geschaeftsfuehrungsassistent
  - [ ] Protokollassistent
  - [ ] Qualitaetsmanager
  - [ ] E-Mail-Assistent
  - [ ] Wissens-Assistent
  - [ ] Datenschutz-Coach
- [ ] Beispielprompts je Assistent hinterlegen
- [ ] Demo-Space mit Produkt-/Firmenwissen vorbereiten
- [ ] Demo-Fragen formulieren
- [ ] Starttexte und UI-Konfiguration anpassen

Abnahme:

- [ ] 15-Minuten-Demo funktioniert ohne technische Erklaerung.
- [ ] Mindestens drei Assistenten liefern sichtbar unterschiedliche, sinnvolle Ergebnisse.

## Tag 5: Pilot-Deployment

Ziel: Eine sichere Pilotinstanz ist online.

Aufgaben:

- [ ] EU-VPS auswaehlen
- [ ] Docker und Firewall einrichten
- [ ] Domain setzen
- [ ] TLS/HTTPS einrichten
- [ ] `.env` produktiv setzen
- [ ] Secrets nicht ins Repo schreiben
- [ ] Volumes fuer MongoDB/Postgres/Meilisearch absichern
- [ ] Backup-Skript fuer MongoDB erstellen
- [ ] Backup-Skript fuer Postgres erstellen
- [ ] Backup fuer Uploads/Storage klaeren
- [ ] Restore einmal testen

Abnahme:

- [ ] Instanz ist ueber HTTPS erreichbar.
- [ ] Login funktioniert.
- [ ] Chat funktioniert.
- [ ] RAG funktioniert.
- [ ] Backup und Restore sind getestet.

## Tag 6: Compliance-Basis

Ziel: Pilot ist vertrauenswuerdig erklaerbar.

Aufgaben:

- [ ] Subprozessorenliste erstellen
- [ ] Modellregionen dokumentieren
- [ ] Datenflussdiagramm erstellen
- [ ] Loeschprozess dokumentieren
- [ ] Exportprozess dokumentieren
- [ ] Upload-Hinweis formulieren
- [ ] KI-Nutzungsregeln fuer Mitarbeitende erstellen
- [ ] AVV-Entwurf vorbereiten oder juristisch pruefen lassen

Abnahme:

- [ ] Kunde kann sehen, welche Provider beteiligt sind.
- [ ] Kunde kann sehen, wo Daten gespeichert werden.
- [ ] Kunde bekommt klare Nutzungsregeln.

## Tag 7: Haertung und erster Pilot

Ziel: Erste echte Nutzung kann starten.

Aufgaben:

- [ ] Rollen und Rechte pruefen
- [ ] Registrierung oeffnen oder schliessen nach Pilotmodus
- [ ] Adminzugriff absichern
- [ ] Uploadlimits pruefen
- [ ] Rate Limits pruefen
- [ ] Budgetlimit pruefen
- [ ] Providerfehler testen
- [ ] Demo mit Testnutzer durchspielen
- [ ] Kundenspezifische Assistenten/Spaces vorbereiten
- [ ] Onboarding-Termin vorbereiten

Abnahme:

- [ ] Pilotkunde kann produktiv starten.
- [ ] Support- und Betriebsprozess ist klar.
- [ ] Kritische Sicherheitschecks sind bestanden.

## Was wir erst spaeter selbst bauen

- Provisioning-Automation fuer neue Kundeninstanzen
- zentrale Kunden-/Rechnungsverwaltung
- eigene Landingpage
- eigenes Onboarding-Frontend
- tiefere Branding-Anpassung
- eigene RAG-Qualitaetsauswertung
- eigene Assistentenbibliothek als importierbares Paket

## Sofortige No-Gos

- [ ] Keine Providerkeys im Frontend
- [ ] Keine gemeinsame Instanz fuer mehrere Pilotkunden ohne harte Mandantentrennung
- [ ] Keine unbegrenzte Modellnutzung
- [ ] Keine DSGVO-Garantien ohne Pruefung
- [ ] Keine Produktivdaten ohne Backup
- [ ] Keine offenen Registrierungen auf Pilotinstanzen, ausser bewusst gewollt

