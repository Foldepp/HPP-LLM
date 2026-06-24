# Praxis-KMU Corporate LLM Roadmap

## Zielbild

Wir bauen ein Corporate LLM, das zuerst als echter KI-Arbeitsplatz fuer die spaetere Heilpraktikerpraxis nutzbar ist und gleichzeitig als Mustercase fuer AI-Beratung bei KMUs dient.

Die Positionierung ist bewusst zweigleisig:

- Eigennutzung: sichere Praxis-KI fuer Dokumentation, Praxiswissen und vertrauliche Arbeitsablaeufe.
- Beratung: nachvollziehbarer Referenzcase fuer KMUs, die KI nutzen wollen, aber Datenschutz, Rollen, Wissen und sensible Daten sauber klaeren muessen.

Kostenpflichtige Bausteine kommen zum Schluss. Bis dahin nutzen wir Open Source, lokale Modelle und vorhandene Infrastruktur.

## Was wir von CorporateLLM uebernehmen

Relevant fuer unsere KMU-Version:

- Eine einfache Chat-Oberflaeche statt technischer API-Nutzung.
- Modell-Picker mit klarer Auswahl zwischen lokal, guenstig, stark und Spezialmodell.
- Bring Your Own Model, damit Kunden eigene Anbieter oder lokale Modelle nutzen koennen.
- Knowledge Base / RAG fuer eigene Dokumente.
- Team-Verwaltung, Rollen und Kollaboration.
- Geteilte Agenten oder Assistenten fuer wiederkehrende Aufgaben.
- Governance: DSGVO-Story, No-Training, Verschluesselung, Audit-Logs, klare Datenregeln.

Nicht sofort relevant:

- Viele Bezahlplaene.
- Prioritaets-Support.
- Breite Modellpreistabellen.
- Enterprise-SSO als MVP-Pflicht.
- Umfangreiches Partnerprogramm.

## Was Heilpraktiker anders brauchen

Heilpraktiker sind kein generischer KMU-Case. Die sensiblen Daten sind der Kern.

Pflicht:

- Lokaler Modus fuer Patientendaten.
- Lokale Dokumentensuche und lokale Embeddings.
- Klare Warnung oder Sperre, wenn Patientendaten in Cloud-Modellen genutzt werden sollen.
- Vorlagen fuer Anamnese, Verlauf, Patientenkommunikation, Datenschutz und Praxisorganisation.
- Keine Diagnose- oder Therapieautomatik.
- Einfache Sprache statt technischer Modellnamen.

Ueberzeugend fuer Kunden:

- Sichtbare Trennung: "Sicher lokal" vs. "Cloud fuer unkritische Aufgaben".
- Beispielhafte Workflows, die sofort verstaendlich sind.
- Datenschutzargument nicht als PDF-Anhang, sondern als Produktverhalten.
- Live-Demo mit echtem Use Case.
- Uebertragbarkeit auf andere sensible Branchen.

## MVP 1: Nutzbarer eigener Praxisarbeitsplatz

Ziel: Du kannst das System selbst verwenden, ohne Patientendaten in die Cloud zu senden.

Features:

- Login und privater Workspace.
- Modell-Auswahl mit sprechenden Namen:
  - Praxis Sicher: lokal.
  - Praxis Schnell: guenstige Cloud, keine Patientendaten.
  - Praxis Stark: staerkere Cloud, keine Patientendaten.
  - DeepSeek / Spezialmodell: optional fuer unkritische Aufgaben.
- Lokaler Chat ueber Ollama.
- Lokale Embeddings ueber Ollama oder lokalen Embedding-Service.
- Lokale Knowledge Base fuer Praxisdokumente.
- Datei-Upload fuer PDFs, DOCX, TXT und Markdown.
- Quellenanzeige bei Dokumentenantworten.
- Basis-Prompts:
  - Anamnese strukturieren.
  - Verlaufsnotiz zusammenfassen.
  - Rueckfragen extrahieren.
  - Patienteninformation neutral formulieren.
  - Praxisprozess erklaeren.
- Warnhinweis im Cloud-Modus.
- Startseite / Landingpage als Mustercase.

Kostenstatus:

- Ohne neue kostenpflichtige SaaS-Bausteine umsetzbar.
- OpenRouter bleibt nur fuer unkritische Modelltests.
- Lokale Modelle verursachen keine Tokenkosten.

## MVP 2: Beratungsfaehiger Demo-Case

Ziel: Kunden verstehen innerhalb von 10 Minuten, warum Corporate LLM mehr ist als "ChatGPT im Browser".

Features:

- Demo-Datensatz mit synthetischen Praxisdokumenten.
- Demo-Workflows:
  - "Was darf lokal, was darf Cloud?"
  - "Patientennotiz zusammenfassen."
  - "Praxiswissen aus Dokumenten finden."
  - "Cloud-Modus blockt sensible Anfrage."
- Branchenumschalter:
  - Heilpraktiker.
  - Steuerberater.
  - Kanzlei.
  - Coaching / Beratung spaeter.
- Einfache Admin-Seite:
  - Modelle aktivieren/deaktivieren.
  - Lokaler Modus als Default.
  - Cloud-Warnungen konfigurieren.
- Exportierbare Beratungs-Checkliste:
  - Datenarten.
  - Risiken.
  - geeigneter Modus.
  - naechste Implementierungsschritte.

Kostenstatus:

- Weiterhin groesstenteils kostenfrei.
- Optional: kleine Cloud-Modellkosten fuer Demo-Anfragen.

## MVP 3: KMU-Produktfaehigkeit

Ziel: Aus dem internen Case wird ein wiederholbares Angebot.

Features:

- Mandantenfaehigkeit light:
  - eine Installation pro Kunde oder streng getrennte Workspaces.
- Rollen:
  - Inhaber.
  - Mitarbeiter.
  - Nur-Lesen / eingeschraenkt.
- Audit-Log:
  - wer hat wann welches Modell genutzt?
  - welche Dokumentquelle wurde verwendet?
  - Cloud oder lokal?
- Datenklassifikation:
  - oeffentlich.
  - intern.
  - vertraulich.
  - besonders sensibel.
- Agenten/Assistenten:
  - Praxisdoku-Assistent.
  - Datenschutz-Assistent.
  - Marketing-Assistent ohne Patientendaten.
  - Wissenssuche.
- Onboarding:
  - 30-Minuten-Einrichtung.
  - Dokumentenupload.
  - Modellregeln.
  - erste 5 Prompts.

Kostenstatus:

- Kann noch lokal/Open Source laufen.
- Kosten entstehen erst bei Hosting, Domain, Backups, E-Mail, Monitoring oder kommerziellen Modellen.

## Zum Schluss: Kostenpflichtige Bausteine

Erst wenn Produktnutzen und Demo sitzen:

- Domain und Hosting.
- Professionelles Backup.
- E-Mail-Versand.
- Monitoring und Logging.
- Bezahlsystem.
- Rechtsdokumente / AVV / Datenschutzpruefung.
- Optional EU-Cloud-Modelle.
- Optional besseres lokales Modell oder staerkere Hardware.

## Naechste konkrete Schritte

1. Lokale Embeddings einbauen. Erledigt am 2026-06-24 mit Ollama und `nomic-embed-text`.
2. Upload/RAG so konfigurieren, dass sensible Dokumente lokal bleiben. Technischer Grundtest erledigt am 2026-06-24.
3. Modellnamen im UI vereinfachen. Erledigt am 2026-06-24 ueber `modelSpecs`:
   - `Praxis Sicher` als lokaler Default.
   - `Praxis Schnell` fuer unkritische Cloud-Aufgaben.
   - `Praxis Stark` fuer laengere Konzepte und Schulungen ohne Patientendaten.
   - `DeepSeek Test` fuer unkritische Experimente.
4. Cloud-Sperre fuer sensible Inhalte als harte Gateway-Regel einbauen. Erledigt am 2026-06-24.
5. Heilpraktiker-Promptbibliothek erstellen. Erledigt am 2026-06-24.
6. Synthetische Demo-Dokumente erweitern.
7. Landingpage um "Demo-Workflows" ergaenzen. Erledigt am 2026-06-24.
8. Kurzen Beratungsablauf definieren: Analyse, Demo, Pilot, Umsetzung. Erster Demo-Ablauf erledigt am 2026-06-24.

## Entscheidung

Der wichtigste naechste Produktschritt ist jetzt die sichtbare sichere Nutzungsfuehrung.

Lokale Embeddings, lokale Vektorsuche, sprechende Praxis-Modi und die Gateway-Sperre fuer Cloud-Modi laufen. Als Naechstes muss die App diese Regeln fuer Nutzer sichtbar und angenehm erklaeren.

## Stand 2026-06-24: lokale Dokumentenintelligenz

Erledigt:

- `nomic-embed-text` in Ollama geladen.
- RAG-API auf `EMBEDDINGS_PROVIDER=ollama` gestellt.
- `OLLAMA_BASE_URL=http://ollama:11434` gesetzt.
- LiteLLM behaelt `mvp-embedding` als separaten Gateway-Test.
- Synthetische Demo-Dokumente unter `demo-documents/heilpraktiker/` angelegt.
- Lokales Einbetten und lokale Suche gegen pgvector getestet.

Testfrage:

> Welche Inhalte duerfen nur im lokalen Praxis-Sicher-Modus verarbeitet werden?

Ergebnis:

Die lokale Suche findet den Datenschutzleitfaden mit den Datenklassen Patientennamen, Geburtsdaten, Beschwerden, Anamnesen, Behandlungsverlaeufe, Medikationshinweise, Laborwerte und private Lebensumstaende.

## Stand 2026-06-24: Praxis-Modi im UI

Erledigt:

- LibreChat `modelSpecs` konfiguriert.
- `Praxis Sicher` als Default hinterlegt.
- Lokaler Modus nutzt `mvp-local-sensitive`.
- Cloud-Modi enthalten klare Systemanweisung: keine Patientendaten, keine Gesundheitsdaten, bei sensiblen Inhalten Wechsel zu `Praxis Sicher` verlangen.
- File Search ist nur im sicheren Praxis-Modus aktiv.
- Alte Preset-Auswahl deaktiviert, damit die Praxis-Modi die fuehrende Auswahl bleiben.

Noch offen:

- Sichtbarer UI-Hinweis direkt neben Cloud-Modi.
- Besseres lokales Modell fuer hoehere Antwortqualitaet evaluieren.

## Stand 2026-06-24: Gateway-Sperre fuer sensible Cloud-Eingaben

Erledigt:

- Lokale LiteLLM-Guardrail `praxis-sensitive-data` angelegt.
- Aktiviert fuer alle Requests, aber die Regel blockt nur Cloud-Modelle:
  - `mvp-standard`
  - `mvp-premium`
  - `mvp-deepseek-v4`
- `mvp-local-sensitive` bleibt fuer vertrauliche Praxisarbeit nutzbar.
- `mvp-embedding` bleibt fuer lokale Dokumenten-Embeddings nutzbar.

Test:

- Cloud + synthetische Patientinnen-Anamnese: blockiert.
- Lokal + synthetische Patientinnen-Anamnese: erlaubt.
- Cloud + unkritische Terminerinnerung: erlaubt.
- Lokale Embeddings: 768 Dimensionen, HTTP 200.

Einordnung:

Das ist noch keine vollstaendige DSGVO-/Medizinprodukt-/Rechtspruefung, aber es ist fuer den MVP ein wichtiger Produktbeweis: Datenschutz ist nicht nur Text auf der Website, sondern ein technisches Verhalten im System.

## Stand 2026-06-24: Promptbibliothek und Demo-Workflows

Erledigt:

- Heilpraktiker-Promptbibliothek angelegt:
  - `specs/heilpraktiker-promptbibliothek.md`
- Demo-Ablauf fuer Kundengespraeche angelegt:
  - `specs/demo-workflows-heilpraktiker.md`
- LibreChat Conversation Starter in den Praxis-Modi geschaerft.
- Landingpage um Demo-Sektion erweitert:
  - Cloud blockt sensible Daten.
  - Lokal wird dieselbe Notiz nutzbar.
  - Praxiswissen liefert Quellen.

Einordnung:

Damit ist der MVP nicht nur technisch lauffaehig, sondern vorfuehrbar. Die naechste Luecke ist nicht mehr "Was kann das System?", sondern "Wie fuehren wir Nutzer im UI so, dass sie ohne Erklaerung den richtigen Modus waehlen?"
