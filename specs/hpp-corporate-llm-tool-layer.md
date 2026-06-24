# MVP-Spezifikation: HPP Corporate LLM Tool Layer

Stand: 2026-06-24

## 1. Ziel

Das HPP Corporate LLM soll sich im MVP sichtbar vom Chatbot zum echten Arbeitswerkzeug fuer eine Heilpraktikerpraxis entwickeln.

Der Nutzer soll nicht mit einem leeren Chatfenster starten, sondern mit einem Praxis-Dashboard, klaren Arbeitsablaeufen, spezialisierten Agenten, Wissensraeumen, erzeugbaren Artefakten und jederzeit sichtbaren Sicherheitsanzeigen.

Kurz gesagt:

> Nicht "Frag die KI irgendwas", sondern "Erledige sichere Praxisarbeit mit KI-Unterstuetzung".

## 2. Produktversprechen

Das MVP liefert einen nutzbaren Praxisarbeitsplatz fuer wiederkehrende, sensible und organisatorische Aufgaben.

Die App fuehrt Nutzer durch:

- sichere Modellwahl
- erlaubte Datenverarbeitung
- passende Workflows
- Dokumenten- und Wissenskontext
- verwertbare Ergebnisse als Artefakte
- klare Hinweise, ob ein Vorgang lokal, cloudbasiert oder blockiert ist

Der Chat bleibt erhalten, ist aber nicht mehr das Produktzentrum. Das Zentrum ist die erledigte Praxisaufgabe.

## 3. Zielgruppe

Primaere Nutzer:

- Praxisinhaberin oder Praxisinhaber
- Assistenz oder Mitarbeitende mit organisatorischen Aufgaben
- spaeter: Datenschutz-/Admin-Verantwortliche bei KMU-Kunden

Typische Nutzungssituationen:

- Patientenkommunikation neutral vorbereiten
- synthetische oder lokale Anamnesen strukturieren
- Praxiswissen aus eigenen Dokumenten nachschlagen
- Datenschutzregeln fuer KI-Nutzung einhalten
- Vorlagen, Checklisten und Notizen erstellen
- Demo gegenueber KMU-Kunden zeigen

## 4. MVP-Erfolgskriterien

Das MVP gilt als erfolgreich, wenn ein Nutzer ohne Entwicklerhilfe Folgendes erledigen kann:

1. Dashboard oeffnen und sofort den aktuellen Sicherheitsmodus sehen.
2. Einen gefuehrten Workflow starten, statt einen leeren Chat formulieren zu muessen.
3. Einen passenden Praxis-Agenten auswaehlen.
4. Einen Space mit Praxiswissen nutzen und Quellen in Antworten sehen.
5. Ein konkretes Artefakt erzeugen, z. B. eine Patienteninfo, interne Notiz oder Checkliste.
6. Eine Cloud-Anfrage mit sensiblen Daten geblockt sehen.
7. Dieselbe sensible Aufgabe im lokalen Praxis-Sicher-Modus ausfuehren.
8. Ein erzeugtes Artefakt speichern, kopieren oder erneut im Chat weiterbearbeiten.

## 5. Scope

### 5.1 In Scope fuer dieses MVP

- Praxis-Dashboard als Startseite
- Sicherheitsstatus prominent sichtbar
- Workflow-Kacheln fuer konkrete Aufgaben
- Agenten-Auswahl mit sprechenden Rollen
- Space-Auswahl fuer Praxiswissen
- Artefakt-Erzeugung aus Workflows
- Artefakt-Ablage innerhalb der App
- Chat als Arbeitskontext hinter Workflows
- lokale Verarbeitung fuer sensible Inhalte
- Cloud-Sperre oder Warnung fuer sensible Inhalte
- Quellenanzeige bei Space-Antworten
- klare Ergebnisaktionen: kopieren, speichern, weiterbearbeiten
- Demo-faehiger Ablauf mit synthetischen Praxisdaten

### 5.2 Bewusst spaeter

- vollstaendige Rollen- und Rechteverwaltung
- detaillierte Audit-Logs
- Freigabeprozesse fuer Artefakte
- Versionshistorie fuer Artefakte
- Team-Kommentare
- SSO/SAML
- Mandantenfaehigkeit fuer viele Kunden in einer Installation
- Rechnungsmodul
- externer Marketplace fuer Agenten
- komplexe Datenklassifikation mit frei konfigurierbaren Regeln

## 6. Hauptnavigation

Die App braucht eine einfache Navigation, die nach Arbeit statt Technik sortiert ist.

MVP-Navigation:

- Dashboard
- Workflows
- Agents
- Spaces
- Artefakte
- Chat
- Einstellungen

Der Chat darf erreichbar bleiben, soll aber nicht der erste und einzige Einstieg sein.

## 7. Praxis-Dashboard

Das Dashboard ist der neue Startpunkt.

Es beantwortet auf einen Blick:

- In welchem Sicherheitsmodus arbeite ich gerade?
- Welche Aufgaben kann ich jetzt starten?
- Welche Spaces sind verfuegbar?
- Welche Artefakte wurden zuletzt erstellt?
- Gibt es Warnungen oder blockierte Vorgange?

### 7.1 Dashboard-Bereiche

Pflichtbereiche:

- Sicherheitsstatus
- Schnellstart-Workflows
- Aktive Spaces
- Zuletzt erzeugte Artefakte
- Letzte blockierte oder gewarnte Aktionen

Optional, wenn schnell umsetzbar:

- Nutzungszaehler lokal vs. Cloud
- "Demo starten"-Button fuer Beratungssituation
- Hinweis auf noch nicht eingerichtete Spaces

### 7.2 Akzeptanzkriterien

- Der aktuelle Modus ist im ersten sichtbaren Bereich erkennbar.
- `Praxis Sicher` ist als lokaler Modus klar ausgezeichnet.
- Cloud-Modi tragen eine sichtbare Einschraenkung: keine Patienten- oder Gesundheitsdaten.
- Nutzer koennen von der Startseite direkt einen Workflow starten.
- Keine Startseite besteht nur aus einem Chatfenster.

## 8. Workflows

Workflows sind gefuehrte Aufgaben mit Eingabefeldern, Sicherheitslogik und Ergebnisformat.

Ein Workflow besteht aus:

- Name
- Zweck
- erlaubter Sicherheitsmodus
- Eingabemaske
- optionalem Space-Kontext
- Agent
- Ergebnisformat
- Artefakt-Typ

### 8.1 MVP-Workflows

#### Workflow: Anamnese strukturieren

Zweck:

- Eine lokale, synthetische oder vertrauliche Notiz in eine klare Struktur bringen.

Sicherheitsmodus:

- nur `Praxis Sicher`

Eingaben:

- Freitextnotiz
- optional: Termin-/Kontextangabe

Ausgabe:

- Anliegen
- Beobachtungen
- Rueckfragen
- organisatorische naechste Schritte
- ausdruecklicher Hinweis: keine Diagnose, keine Therapieentscheidung

Artefakt:

- `Praxisnotiz`

#### Workflow: Patienteninformation vorbereiten

Zweck:

- Neutrale, gut verstaendliche Kommunikation vorbereiten.

Sicherheitsmodus:

- `Praxis Sicher`, wenn personenbezogen
- Cloud erlaubt, wenn ohne personenbezogene oder medizinische Details

Eingaben:

- Thema
- Tonalitaet
- Laenge
- personenbezogene Daten ja/nein

Ausgabe:

- Nachrichtentwurf
- kurze Variante
- neutrale Betreffzeile

Artefakt:

- `Nachrichtenvorlage`

#### Workflow: Praxiswissen finden

Zweck:

- Fragen zu internen Praxisregeln und Dokumenten beantworten.

Sicherheitsmodus:

- bevorzugt `Praxis Sicher`

Eingaben:

- Frage
- Space-Auswahl

Ausgabe:

- Antwort
- Quellen
- kurze Handlungsregel fuer Mitarbeitende

Artefakt:

- `Wissensantwort`

#### Workflow: Datenschutz-Check fuer KI-Nutzung

Zweck:

- Vor einer Anfrage klaeren, ob lokal oder Cloud erlaubt ist.

Sicherheitsmodus:

- lokal oder regelbasiert ohne Modellaufruf moeglich

Eingaben:

- geplante Aufgabe
- Datenarten
- Ziel der Verarbeitung

Ausgabe:

- Einstufung: lokal erlaubt, Cloud erlaubt, Cloud blockiert, unklar
- empfohlener Modus
- Begruendung in einfacher Sprache

Artefakt:

- `Datenschutz-Check`

#### Workflow: KMU-Demo uebertragen

Zweck:

- Den Heilpraktiker-Case auf eine andere Branche uebertragen.

Sicherheitsmodus:

- Cloud erlaubt, solange keine echten Kundendaten enthalten sind

Eingaben:

- Branche
- sensible Datenarten
- typische Aufgaben

Ausgabe:

- Datenklassen
- lokale Aufgaben
- Cloud-faehige Aufgaben
- erste Pilot-Workflows

Artefakt:

- `Beratungsnotiz`

### 8.2 Akzeptanzkriterien

- Jeder Workflow hat eine klare Sicherheitsregel.
- Ein Workflow kann den falschen Modus blockieren oder Wechsel zu `Praxis Sicher` verlangen.
- Ergebnisse werden nicht nur als Chatantwort angezeigt, sondern als Artefakt speicherbar.
- Workflows koennen mit synthetischen Demo-Daten vorgefuehrt werden.

## 9. Agents

Agents sind spezialisierte Assistenten mit Rolle, Grenzen und Ausgabeformat.

MVP-Agenten:

- Praxisdoku-Agent
- Patientenkommunikations-Agent
- Datenschutz-Agent
- Praxiswissen-Agent
- KMU-Berater-Agent

### 9.1 Agent: Praxisdoku-Agent

Aufgabe:

- Notizen strukturieren, Rueckfragen extrahieren, organisatorische naechste Schritte formulieren.

Grenzen:

- keine Diagnose
- keine Therapieempfehlung
- keine medizinische Entscheidung
- sensible Inhalte nur lokal

### 9.2 Agent: Patientenkommunikations-Agent

Aufgabe:

- neutrale, freundliche und verstaendliche Textvorlagen schreiben.

Grenzen:

- keine individuellen Heilversprechen
- keine Diagnosen
- keine Cloud-Verarbeitung bei Personenbezug

### 9.3 Agent: Datenschutz-Agent

Aufgabe:

- Datenarten erkennen, Modus empfehlen, Regeln erklaeren.

Grenzen:

- keine Rechtsberatung als finale Bewertung
- verweist bei Unsicherheit auf manuelle Pruefung

### 9.4 Agent: Praxiswissen-Agent

Aufgabe:

- interne Dokumente und Regeln beantworten.

Grenzen:

- muss Quellen anzeigen, wenn Space-Kontext genutzt wird
- soll Unsicherheit benennen, wenn keine passende Quelle gefunden wird

### 9.5 Agent: KMU-Berater-Agent

Aufgabe:

- HPP-Logik auf andere KMU-Branchen uebertragen.

Grenzen:

- nur mit synthetischen oder anonymisierten Daten in Cloud-Modi
- macht Vorschlaege fuer Pilot-Workflows, keine finale Compliance-Freigabe

## 10. Spaces

Spaces sind Wissensraeume mit Dokumenten, Regeln und erlaubtem Nutzungsmodus.

MVP-Spaces:

- Praxiswissen
- Datenschutz und KI-Regeln
- Patientenkommunikation
- Demo-Unterlagen
- KMU-Beratung

### 10.1 Space-Eigenschaften

Jeder Space hat:

- Name
- Beschreibung
- Datenklasse
- erlaubte Modi
- Dokumente
- Quellenanzeige aktiv ja/nein
- Standard-Agent

### 10.2 Datenklassen im MVP

Pragmatische Klassen:

- oeffentlich
- intern
- vertraulich
- besonders sensibel

Regel:

- Besonders sensible Inhalte duerfen nur in `Praxis Sicher` verarbeitet werden.
- Vertrauliche Inhalte sollen lokal verarbeitet werden, ausser sie sind eindeutig anonymisiert.
- Oeffentliche und interne Inhalte duerfen je nach Einstellung auch Cloud-Modi nutzen.

### 10.3 Akzeptanzkriterien

- Ein Space zeigt sichtbar, ob er lokal, cloudfaehig oder sensibel ist.
- Fragen an einen sensiblen Space verwenden automatisch `Praxis Sicher` oder blockieren den Vorgang.
- Antworten aus Spaces zeigen Quellen.
- Wenn keine Quelle gefunden wird, wird das offen gesagt.

## 11. Artefakte

Artefakte sind verwertbare Arbeitsergebnisse, nicht nur Chatnachrichten.

MVP-Artefakt-Typen:

- Praxisnotiz
- Nachrichtenvorlage
- Wissensantwort
- Datenschutz-Check
- Beratungsnotiz
- Checkliste

### 11.1 Artefakt-Funktionen

MVP-Funktionen:

- speichern
- kopieren
- umbenennen
- erneut im Chat bearbeiten
- aus Workflow heraus erzeugen
- anzeigen, aus welchem Modus und Agenten sie entstanden sind

Spaeter:

- Versionierung
- Freigabe
- Kommentare
- Export als PDF oder DOCX
- Loeschfristen

### 11.2 Artefakt-Metadaten

Jedes Artefakt speichert:

- Titel
- Typ
- Inhalt
- erstellt am
- erstellt von
- Agent
- Workflow
- Sicherheitsmodus
- verwendeter Space
- Quellen, falls vorhanden
- Warnhinweise, falls vorhanden

### 11.3 Akzeptanzkriterien

- Nutzer koennen ein Ergebnis als Artefakt speichern.
- Artefakte sind in einer eigenen Ansicht wieder auffindbar.
- Artefakte zeigen den Sicherheitskontext ihrer Erstellung.
- Ein Artefakt kann als Ausgangspunkt fuer eine Folgefrage verwendet werden.

## 12. Sicherheitsanzeigen

Sicherheit muss im Produkt sichtbar sein, nicht nur in Dokumentation.

### 12.1 Sicherheitsmodi

MVP-Modi:

- `Praxis Sicher`: lokal, fuer Patientendaten und besonders sensible Inhalte
- `Praxis Schnell`: Cloud, nur fuer unkritische Aufgaben ohne Personen- oder Gesundheitsdaten
- `Praxis Stark`: Cloud, fuer laengere Konzepte, Schulungen und Beratung ohne sensible Daten
- `DeepSeek Test`: experimentell, nur fuer unkritische Tests

### 12.2 Anzeigezustaende

Jede relevante Ansicht zeigt einen der folgenden Zustaende:

- Gruen: lokal sicher
- Gelb: Cloud erlaubt, aber keine sensiblen Daten
- Rot: Anfrage blockiert
- Grau: noch nicht bewertet

Textbeispiele:

- `Lokal sicher: Diese Aufgabe laeuft im Praxis-Sicher-Modus.`
- `Cloud-Modus: Keine Patienten-, Gesundheits- oder vertraulichen Daten eingeben.`
- `Blockiert: Diese Anfrage enthaelt sensible Daten und muss lokal verarbeitet werden.`
- `Unklar: Bitte Datenart pruefen oder Datenschutz-Check starten.`

### 12.3 Blockierlogik im MVP

Cloud-Anfragen werden blockiert, wenn sie erkennbare Hinweise enthalten auf:

- Patientennamen
- Geburtsdaten
- Beschwerden
- Anamnese
- Behandlungsverlauf
- Medikationshinweise
- Laborwerte
- private Lebensumstaende
- Kombination aus Personenbezug und Gesundheitsthema

Das MVP muss nicht perfekt klassifizieren. Es muss konservativ sein und bei Unsicherheit auf `Praxis Sicher` verweisen.

### 12.4 Akzeptanzkriterien

- Nutzer sehen vor dem Absenden den aktuellen Sicherheitsmodus.
- Cloud-Modi warnen dauerhaft und nicht nur einmalig.
- Blockierte Anfragen erklaeren knapp, warum geblockt wurde.
- Die App bietet direkt den Wechsel zu `Praxis Sicher` an.
- Sicherheitsanzeigen erscheinen auch bei Workflows, Spaces und Artefakten.

## 13. Chat als Arbeitskontext

Der Chat bleibt wichtig, wird aber als Kontext- und Nachbearbeitungsflaeche verstanden.

Chat kann:

- freie Fragen beantworten
- Workflow-Ergebnisse weiterbearbeiten
- Artefakte verfeinern
- Space-Fragen aufnehmen
- Agenten nutzen

Chat soll nicht:

- alleiniger Einstieg sein
- Sicherheitsregeln verstecken
- Nutzer zwingen, gute Prompts selbst zu erfinden

Akzeptanzkriterien:

- Ein Workflow kann einen Chat mit vorausgewaehltem Agenten und Modus starten.
- Ein Artefakt kann im Chat weiterbearbeitet werden.
- Der Chat zeigt Modus, Agent und Space sichtbar an.

## 14. Demo-Szenario fuer MVP-Abnahme

Die Abnahme sollte als 10-Minuten-Demo funktionieren.

### Ablauf

1. Dashboard oeffnen.
2. Sicherheitsstatus `Praxis Sicher` zeigen.
3. Workflow `Datenschutz-Check fuer KI-Nutzung` starten.
4. Beispiel mit Patientendaten als Cloud-ungeeignet einstufen lassen.
5. In `Praxis Schnell` eine sensible Anfrage absenden und Blockade zeigen.
6. Zu `Praxis Sicher` wechseln.
7. Workflow `Anamnese strukturieren` mit synthetischer Notiz ausfuehren.
8. Ergebnis als `Praxisnotiz` speichern.
9. Space `Datenschutz und KI-Regeln` fragen, welche Daten lokal bleiben muessen.
10. Antwort mit Quellen zeigen.
11. Artefakt `Beratungsnotiz` erzeugen, das die Logik auf eine andere KMU-Branche uebertraegt.

### Demo-Erfolg

Der Zuschauer soll nach der Demo sagen koennen:

- Das ist kein normaler Chatbot.
- Die App verhindert riskante Nutzung.
- Die App hilft bei echten Praxisaufgaben.
- Die Logik ist auf andere sensible KMU-Branchen uebertragbar.

## 15. Technische Umsetzung im MVP

Pragmatischer Ansatz:

- Bestehenden Chat und Modellrouter weiterverwenden.
- Workflows als vordefinierte Prompt- und UI-Konfigurationen bauen.
- Agents als Systemprompt-Profile abbilden.
- Spaces auf bestehender RAG-/File-Search-Logik aufsetzen.
- Artefakte zunaechst als einfache persistierte Ergebnisobjekte speichern.
- Sicherheitsstatus aus aktuellem Modell, Space-Datenklasse und einfacher Inhaltspruefung ableiten.

### 15.1 Minimaler Datenentwurf

#### Workflow

- id
- name
- description
- required_mode
- default_agent_id
- default_space_id nullable
- artifact_type
- input_schema
- prompt_template
- created_at
- updated_at

#### Agent

- id
- name
- description
- system_prompt
- allowed_modes
- default_output_format
- created_at
- updated_at

#### Space

- id
- name
- description
- data_class
- allowed_modes
- default_agent_id nullable
- created_at
- updated_at

#### Artifact

- id
- title
- type
- content
- workflow_id nullable
- agent_id nullable
- space_id nullable
- security_mode
- source_chat_id nullable
- sources_json nullable
- warnings_json nullable
- created_by
- created_at
- updated_at

#### SecurityEvent

Nur light im MVP, noch kein vollstaendiges Audit-Log:

- id
- event_type: warning | blocked | mode_switch
- security_mode
- reason
- workflow_id nullable
- agent_id nullable
- space_id nullable
- created_at

## 16. Nichtfunktionale Anforderungen

### 16.1 Sprache

- UI und Texte auf Deutsch.
- Keine technischen Modellnamen als fuehrende Nutzerbegriffe.
- Kurze Erklaerungen, klare Handlungsaufforderungen.

### 16.2 Sicherheit

- Sensible Inhalte standardmaessig lokal.
- Cloud-Modi konservativ sperren.
- Kein stiller Fallback von lokal auf Cloud.
- Sicherheitsmodus muss serverseitig beachtet werden, nicht nur im UI.

### 16.3 Bedienbarkeit

- Nutzer sollen ohne Promptwissen starten koennen.
- Workflows brauchen klare Eingabefelder.
- Ergebnisse muessen kopier- und speicherbar sein.
- Leere Zustaende sollen naechste sinnvolle Aktion anbieten.

## 17. Priorisierung

### P0: MVP-Kern

- Dashboard mit Sicherheitsstatus
- Workflow-Start fuer mindestens drei Workflows
- Agenten-Profile fuer mindestens drei Agenten
- Space-Nutzung mit Quellen
- Artefakt speichern und anzeigen
- Cloud-Blockade fuer sensible Inhalte

### P1: Demo-Qualitaet

- Demo-Modus mit synthetischen Beispielen
- letzte Artefakte auf Dashboard
- Sicherheitsereignisse als einfache Liste
- Branchenuebertragung fuer KMU-Demo

### P2: Produktreife spaeter

- Rollenmodell
- Audit-Log
- Freigaben
- Exportformate
- Mandantenfaehigkeit
- Admin-Konfiguration der Datenklassen

## 18. Rollen und Audit spaeter

Rollen und Audit sind wichtig, aber nicht der erste Hebel fuer das Tool-Gefuehl.

Spaeteres Rollenmodell:

- Inhaber
- Admin
- Mitarbeitende
- Nur-Lesen

Spaeteres Audit:

- wer hat welchen Workflow genutzt
- welcher Modus wurde verwendet
- welche Space-Quellen wurden genutzt
- welche Cloud-Anfrage wurde blockiert
- welches Artefakt wurde erzeugt oder geaendert

MVP-Regel:

- Schon jetzt Sicherheitsereignisse leicht speichern.
- Noch keine vollstaendige Admin- und Audit-Oberflaeche bauen.
- Keine komplexe Rechteverwaltung vor dem sichtbaren Tool Layer.

## 19. Offene Entscheidungen

- Sollen Artefakte zunaechst nur pro Nutzer oder bereits teamweit sichtbar sein?
- Soll `Praxis Sicher` immer Default bleiben, auch wenn ein Workflow cloudfaehig ist?
- Welche drei Workflows sind fuer die erste Live-Demo Pflicht?
- Werden Artefakte in LibreChat-Konversationen eingebettet oder als eigene App-Objekte gefuehrt?
- Soll der Datenschutz-Check rein regelbasiert laufen oder lokal mit LLM-Unterstuetzung?

## 20. MVP-Definition in einem Satz

Das HPP Corporate LLM MVP ist fertig, wenn Nutzer ueber ein Praxis-Dashboard gefuehrte, sichere Workflows mit Agenten und Spaces ausfuehren koennen, daraus wiederverwendbare Artefakte entstehen und die App jederzeit sichtbar macht, ob eine Aufgabe lokal sicher, cloudfaehig oder blockiert ist.
