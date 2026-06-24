# Heilpraktiker-Promptbibliothek fuer den MVP

Stand: 2026-06-24

Diese Bibliothek ist fuer zwei Zwecke gedacht:

- Eigene Praxisarbeit: schnelle, sichere Startpunkte fuer wiederkehrende Aufgaben.
- Beratungsdemo: Kunden sehen sofort, dass Corporate LLM konkrete Workflows, Datenregeln und Verantwortlichkeiten abbildet.

Grundregel:

- Patientendaten, Anamnesen, Beschwerden, Verlaeufe, Laborwerte und private Lebensumstaende nur in `Praxis Sicher`.
- Website-Texte, allgemeine Organisation, Schulungen und Beratungsunterlagen duerfen in Cloud-Modi, solange keine echten Patientendaten enthalten sind.
- Die KI unterstuetzt Struktur, Sprache und Vorbereitung. Sie trifft keine Diagnose, keine Therapieentscheidung und keine Dosierungsempfehlung.

## Praxis Sicher

### Anamnesenotiz strukturieren

Modus: `Praxis Sicher`

Prompt:

```text
Strukturiere die folgende Anamnesenotiz in:

1. Anliegen der Person
2. Beobachtungen und zeitlicher Verlauf
3. Belastende oder verstaerkende Faktoren
4. Offene Rueckfragen fuer den naechsten Termin
5. Neutrale Dokumentationsnotiz
6. Dinge, die fachlich geprueft werden muessen

Wichtig: Keine Diagnose, keine Therapieempfehlung, keine Dosierung. Formuliere vorsichtig und neutral.

Notiz:
[Text einfuegen]
```

### Verlaufsnotiz zusammenfassen

Modus: `Praxis Sicher`

Prompt:

```text
Fasse diese Verlaufsnotiz fuer die interne Praxisdokumentation zusammen.

Struktur:
- Aktueller Stand
- Veraenderungen seit dem letzten Kontakt
- Beobachtete Muster
- Offene Fragen
- Naechste organisatorische Schritte

Keine Diagnose, keine therapeutische Bewertung, keine Heilversprechen.

Notiz:
[Text einfuegen]
```

### Rueckfragen fuer naechsten Termin

Modus: `Praxis Sicher`

Prompt:

```text
Erstelle aus dieser Notiz eine Liste neutraler Rueckfragen fuer den naechsten Termin.

Die Fragen sollen:
- offen formuliert sein
- keine Diagnose nahelegen
- alltagsbezogene Beobachtungen erfassen
- Belastung, Schlaf, Ernaehrung, Medikamente/Nahrungsergaenzungen und Verlauf beruecksichtigen

Notiz:
[Text einfuegen]
```

### Symptomtagebuch-Vorlage

Modus: `Praxis Sicher`

Prompt:

```text
Erstelle eine neutrale Vorlage fuer ein Symptomtagebuch.

Die Vorlage soll Felder enthalten fuer:
- Datum und Uhrzeit
- Beobachtete Beschwerden
- Staerke oder Intensitaet in eigenen Worten
- Schlaf
- Mahlzeiten
- Stress oder besondere Belastungen
- Bewegung
- Medikamente oder Nahrungsergaenzungen, falls relevant
- Freie Notizen

Wichtig: Keine medizinischen Schlussfolgerungen oder Diagnosehinweise.
```

### Praxisdokument durchsuchen

Modus: `Praxis Sicher`

Prompt:

```text
Nutze die hochgeladenen Praxisdokumente und beantworte:

Welche Inhalte duerfen nur im lokalen Praxis-Sicher-Modus verarbeitet werden?

Bitte nenne die Datenklassen, fasse die Regel kurz zusammen und verweise auf die genutzten Quellen.
```

## Praxis Schnell

### Neutrale Terminerinnerung

Modus: `Praxis Schnell`

Prompt:

```text
Schreibe eine kurze, freundliche Terminerinnerung fuer eine Praxis.

Rahmen:
- keine Patientendaten
- keine Gesundheitsdaten
- kein Bezug auf Beschwerden
- freundlich, klar, professionell
- mit Hinweis, Unterlagen oder Fragen zum Termin mitzubringen
```

### Website-Abschnitt fuer Praxisprofil

Modus: `Praxis Schnell`

Prompt:

```text
Formuliere einen kurzen Website-Abschnitt fuer eine Heilpraktikerpraxis.

Ton:
- ruhig
- vertrauenswuerdig
- klar
- keine Heilversprechen
- keine Diagnose- oder Erfolgsversprechen

Thema:
[Thema einfuegen]
```

### Interne Checkliste Terminvorbereitung

Modus: `Praxis Schnell`

Prompt:

```text
Erstelle eine interne Checkliste fuer die allgemeine Terminvorbereitung in einer kleinen Praxis.

Wichtig:
- keine Patientendaten
- keine medizinischen Inhalte
- nur organisatorische Schritte
- kurz, praktikabel, als Liste
```

## Praxis Stark

### Schulung KI-Nutzung in Praxen

Modus: `Praxis Stark`

Prompt:

```text
Entwirf eine 45-Minuten-Schulung fuer Mitarbeitende einer kleinen Praxis:
"Sichere KI-Nutzung im Praxisalltag".

Inhalte:
- Was darf in lokale KI?
- Was darf in Cloud-KI?
- Welche Daten sind besonders sensibel?
- Beispiele fuer sichere und unsichere Prompts
- Mini-Checkliste fuer den Alltag

Keine echten Patientendaten verwenden.
```

### Beratungsangebot fuer KMUs

Modus: `Praxis Stark`

Prompt:

```text
Erstelle ein Beratungsangebot fuer ein KMU, das KI sicher einfuehren will.

Struktur:
- Ausgangslage
- Zielbild
- 3-stufiges Vorgehen
- Datenschutz- und Datenflussklaerung
- Pilotphase
- Ergebnis fuer den Kunden

Positionierung: praktisch, seriös, fuer kleine Unternehmen verstaendlich.
```

### Demo-Story fuer Kundengespraech

Modus: `Praxis Stark`

Prompt:

```text
Formuliere eine 10-Minuten-Demo-Story fuer einen Corporate-LLM-Mustercase.

Use Case: Heilpraktikerpraxis.

Die Story soll zeigen:
- Warum normale Chatbots fuer sensible Daten nicht reichen
- Wie lokale und Cloud-Modelle getrennt werden
- Wie die Cloud-Sperre sensible Daten blockt
- Wie eigene Dokumente lokal durchsucht werden
- Wie das auf andere KMUs uebertragbar ist
```

## Demo-Blocker-Test

Modus: zuerst `Praxis Schnell`, danach `Praxis Sicher`

Prompt fuer Cloud-Test:

```text
Patientin Maria, Geburtsdatum 01.02.1980, hat seit drei Wochen Beschwerden. Bitte fasse die Anamnese zusammen.
```

Erwartung:

- In Cloud-Modi wird die Anfrage blockiert.
- In `Praxis Sicher` darf die Anfrage verarbeitet werden.
- Das ist der wichtigste Demo-Moment: Datenschutz ist ein Systemverhalten.
