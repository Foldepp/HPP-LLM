# Demo-Workflows: Heilpraktiker Corporate LLM

Stand: 2026-06-24

Ziel: Eine Demo, die in 10 bis 15 Minuten zeigt, warum das System fuer sensible KMU-Daten mehr ist als ein Chatbot.

## Vorbereitung

App:

- LibreChat: http://localhost:3080/login
- Website-Mustercase: http://127.0.0.1:3090/

Demo-Dokumente:

- `demo-documents/heilpraktiker/praxisleitfaden-datenschutz.md`
- `demo-documents/heilpraktiker/anamnese-beispiel-synthetisch.md`
- `demo-documents/heilpraktiker/patientenkommunikation-vorlagen.md`

Wichtig: In der Demo nur synthetische Daten verwenden.

## Demo 1: Die einfache Modellwahl

Ziel: Nutzer verstehen sofort, welcher Modus wofuer gedacht ist.

Ablauf:

1. Neuen Chat oeffnen.
2. Modusauswahl zeigen:
   - `Praxis Sicher`
   - `Praxis Schnell`
   - `Praxis Stark`
   - `DeepSeek Test`
3. Kurz erklaeren:
   - `Praxis Sicher` ist lokal und fuer vertrauliche Praxisarbeit.
   - Cloud-Modi sind fuer unkritische Texte, Organisation und Konzepte.

Demo-Satz:

> Wir verkaufen nicht "ein weiteres Chatfenster", sondern einen KI-Arbeitsplatz mit Datenregeln.

## Demo 2: Cloud blockt Patientendaten

Ziel: Datenschutz als Produktverhalten zeigen.

Modus: `Praxis Schnell`

Prompt:

```text
Patientin Maria, Geburtsdatum 01.02.1980, hat seit drei Wochen Beschwerden. Bitte fasse die Anamnese zusammen.
```

Erwartung:

- Anfrage wird geblockt.
- Hinweis fordert Wechsel zu `Praxis Sicher`.

Demo-Satz:

> Der Fehler ist hier das Feature: Die Cloud soll genau das nicht verarbeiten.

## Demo 3: Lokal verarbeitet sensible Notiz

Ziel: Unterschied zwischen blockierter Cloud und erlaubter lokaler Verarbeitung zeigen.

Modus: `Praxis Sicher`

Prompt:

```text
Strukturiere diese synthetische Anamnesenotiz in Anliegen, Beobachtungen, Rueckfragen und naechste organisatorische Schritte.

Eine fiktive Patientin berichtet seit mehreren Wochen ueber wechselnde Erschoepfung, unruhigen Schlaf und Verdauungsbeschwerden nach stressreichen Arbeitstagen. Sie wuenscht sich eine strukturierte Betrachtung ihrer Alltagsbelastung und moechte besser verstehen, welche Beobachtungen sie bis zum naechsten Termin dokumentieren sollte.
```

Erwartung:

- Anfrage wird verarbeitet.
- Antwort bleibt vorsichtig.
- Keine Diagnose, keine Therapieempfehlung.

Demo-Satz:

> Sensible Inhalte sind nicht verboten. Sie gehoeren nur in den richtigen Modus.

## Demo 4: Praxiswissen aus Dokumenten finden

Ziel: Knowledge Base / RAG zeigen.

Modus: `Praxis Sicher`

Vorbereitung:

- Datenschutzleitfaden hochladen oder bereits eingebettetes Demo-Dokument nutzen.

Prompt:

```text
Welche Inhalte duerfen nur im lokalen Praxis-Sicher-Modus verarbeitet werden?

Bitte nenne die Datenklassen und fasse die Regel fuer Mitarbeitende kurz zusammen.
```

Erwartung:

- Antwort nennt z. B. Patientennamen, Geburtsdaten, Beschwerden, Anamnesen, Behandlungsverlaeufe, Medikationshinweise, Laborwerte und private Lebensumstaende.
- Quellenanzeige ist sichtbar.

Demo-Satz:

> Die KI antwortet nicht nur aus Allgemeinwissen, sondern aus den eigenen Regeln der Praxis.

## Demo 5: Cloud fuer unkritische Arbeit

Ziel: Cloud nicht verteufeln, sondern sinnvoll abgrenzen.

Modus: `Praxis Schnell`

Prompt:

```text
Schreibe eine kurze organisatorische E-Mail-Vorlage fuer eine Terminerinnerung ohne personenbezogene Daten.
```

Erwartung:

- Anfrage wird erlaubt.
- Kurze nutzbare Vorlage.

Demo-Satz:

> Cloud ist nicht falsch. Falsch ist nur, sie ohne Datenregeln zu nutzen.

## Demo 6: Beratungsueberleitung

Ziel: Vom Heilpraktiker-Case zur KMU-Beratung wechseln.

Modus: `Praxis Stark`

Prompt:

```text
Uebertrage diese Logik auf eine Steuerberatung: Welche Daten sollten lokal bleiben, welche Aufgaben duerfen in die Cloud, und welche Regeln braucht das Team?
```

Erwartung:

- System zeigt Uebertragbarkeit.
- Sensible Mandatsdaten werden als lokal/vertraulich klassifiziert.

Demo-Satz:

> Der Heilpraktiker-Case ist der Beweis. Die Beratung uebertraegt die Logik auf andere KMUs.

## Abschlussfrage an Kunden

Nach der Demo:

```text
Welche drei Datenarten in Ihrem Unternehmen duerfen auf keinen Fall unkontrolliert in externe KI-Systeme gelangen?
```

Ziel:

- Einstieg in Datenklassifikation.
- Ausgangspunkt fuer Workshop oder Pilot.
