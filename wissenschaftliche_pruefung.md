# Wissenschaftliche Prüfung: Motive, Items, Nutzenannahme

Stand 8. August 2026. Geprüft wurden drei Ebenen getrennt, weil sie unterschiedlich gut dastehen:
die **Kategorien**, die **Fragen und Antworten**, und die **Verwertung** der Diagnose.

Kurzfassung: Die Kategorien sind zu drei Vierteln solide. Die Items sind erfunden und ungeprüft,
das ist die größte Schwäche. Die Verwertung, also das Anpassen der Botschaft an das erkannte Motiv,
ist der Teil mit der schlechtesten Beleglage, und das ist gerade der Teil, für den das Spiel
trainiert.

---

## 1. Die fünf Kategorien

| Kategorie | Entsprechung in der Literatur | Urteil |
|---|---|---|
| Autonomie | Selbstbestimmung, Teil von *Openness to Change* | tragfähig |
| Sicherheit | *Conservation*, Sicherheit und Konformität | tragfähig |
| Status | *Self-Enhancement*, Macht und Leistung | tragfähig, aber schwer messbar (§3) |
| Zugehörigkeit | *Self-Transcendence*, Benevolenz | tragfähig |
| Effizienz | keine | **erfunden** |

Vier von fünf bilden Schwartz' vier Wertedimensionen höherer Ordnung ab. Die Struktur ist an
210 Stichproben aus 67 Ländern geprüft (Schwartz & Boehnke 2004, referiert in Sandy, Gosling &
Koelkebeck, *Journal of Personality Assessment* 99, 2017).

**Effizienz hat keine Entsprechung.** In keiner der etablierten Taxonomien, weder bei Schwartz noch
bei McClelland, ist Effizienz ein Grundmotiv. Es ist ein Arbeitsstil, kein Wunsch. Es steht im Spiel,
weil es im Geschäftsalltag als Argumentationsmuster auftritt, aber es teilt den Zustandsraum nicht an
einer Naht, die die Psychologie kennt.

**Was fehlt:** Stimulation und Hedonismus, also die andere Hälfte von *Openness to Change*. Meine
Kategorie Autonomie schluckt beide mit. Ebenfalls fehlt Universalismus, der im Selbstbericht
regelmäßig auf Platz drei landet. Im Verkaufsgespräch ist das verschmerzbar, im privaten Kontext
nicht.

---

## 2. Die Fragen und Antworten

**Keines der 25 Items ist validiert.** Ich habe sie geschrieben, sie stammen aus keiner
publizierten Skala. Die Likelihood-Matrizen, also die eigentliche Diagnostik des Spiels, sind meine
subjektiven Einschätzungen, in Zahlen gegossen. Die Softmax-Formel gibt dem eine Präzision, die die
Eingabewerte nicht haben. Das ist der Punkt, an dem das Spiel wissenschaftlich am dünnsten steht.

Konkret bedeutet das: die Anzeige „Autonomie 78 Prozent" ist eine korrekte Rechnung auf erfundenen
Zahlen. Die Bayes-Mechanik stimmt, das Fundament nicht.

**Was daran trotzdem funktioniert.** Der Informationsgewinn einer Frage in bit hängt von der Struktur
der Matrix ab, nicht von ihrer Richtigkeit. Dass „Woran merken Sie in einem Jahr, dass es die richtige
Entscheidung war?" mehr trennt als „Sind Sie gut hergekommen?", bleibt richtig, auch wenn die
Einzelgewichte falsch sind. Das Spiel trainiert also die Fähigkeit, die es verspricht, selbst mit
erfundenen Items. Es diagnostiziert nur nicht das, was es zu diagnostizieren behauptet.

**Was fehlt, um das zu reparieren.** Zwei Schritte, beide machbar:

1. Die Antwortoptionen inhaltlich an Items des Portrait Values Questionnaire anlehnen, statt sie
   frei zu formulieren. Der PVQ liegt in einer 21-Item-Fassung vor, seit 2002 in jeder Runde des
   European Social Survey erhoben, und wurde 2025 auf 20 Items in geschlechtsneutraler
   Selbstausfüllfassung revidiert und im SOEP eingesetzt ([ESS-Dokument, Januar 2026](https://europeansocialsurvey.org/sites/default/files/2026-01/human-values-scale-revision-and-cross-cultural-adaptation-for-self-completion-modes.pdf)).
2. Die Matrizen aus Daten schätzen statt zu raten: Leute füllen zuerst den PVQ aus, beantworten
   dann die 25 Fragen des Spiels, und P(Antwort | Motiv) wird aus den Häufigkeiten geschätzt.
   Ab etwa 300 Personen bekommt man brauchbare Zellen. Danach ist es ein Messinstrument, vorher
   eine Simulation.

---

## 3. Was das Spiel überhaupt messen kann

Hier steckt der Befund, der die Zielsetzung am stärksten korrigiert.

Die Motivpsychologie unterscheidet **implizite** Motive, erhoben über Bildgeschichten, von
**expliziten** oder selbstzugeschriebenen Motiven, erhoben über direkte Fragen. Die beiden hängen
kaum zusammen. Eine Meta-Analyse über 49 Arbeiten, 56 unabhängige Stichproben und 6151 Personen
findet ρ = 0,130 insgesamt, 0,139 für Leistung, 0,116 für Anschluss und **0,038 für Macht**, mit
einem Konfidenzintervall, das die Null einschließt (Köllner & Schultheiss, [*Frontiers in Psychology* 5:826, 2014](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2014.00826/full)).
Die Autoren folgern, dass Menschen im Allgemeinen keinen bewussten Zugang zur Stärke ihrer eigenen
Motive haben.

Das Spiel stellt direkte Fragen. Es kann also nur explizite Motive erfassen. Drei Konsequenzen:

- **Die Behauptung „Hauptmotivation herausfinden" ist zu stark.** Herausgefunden wird, was jemand
  sich selbst zuschreibt und in einem Geschäftsgespräch äußert.
- **Für Status ist es am schlechtesten.** Ausgerechnet das Motiv, das im Spiel den auffälligsten
  Effekt hat, ist das, bei dem Selbstauskunft und tatsächliches Motiv am wenigsten zusammenhängen.
  Der Bias-Term, den ich für Status eingebaut habe, geht in die richtige Richtung, aber seine Größe
  ist geraten.
- **Es ist trotzdem nicht wertlos.** McClelland, Koestner und Weinberger (*Psychological Review* 96,
  1989) ordnen den expliziten Motiven genau die Vorhersage zu, um die es hier geht: Reaktionen auf
  strukturierte, unmittelbare Reize. Ein Verkaufsgespräch ist genau das. Implizite Motive sagen
  spontanes Verhalten über lange Zeiträume vorher, was im Gespräch niemanden interessiert.

Die ehrliche Umformulierung des Spielziels lautet also: nicht „was diese Person antreibt", sondern
„worauf diese Person in diesem Gespräch anspringt". Das ist weniger, aber es ist das, was du brauchst.

---

## 4. Nutzt die Diagnose überhaupt etwas?

Hier steht der unangenehmste Befund.

Eine Meta-Analyse über 41 Studien aus Marketing, Psychologie und Informatik prüft genau die Annahme,
auf der das Spiel aufbaut: bringt es etwas, eine Botschaft an ein erkanntes psychologisches Profil
anzupassen? Ergebnis: über die Gesamtliteratur ein kleiner Effekt von r = 0,11, aber **in sauber
kontrollierten Designs verschwindet er fast vollständig, 9 von 11 Effekten nicht signifikant**. Die
Heterogenität fällt dabei von I² = 61 auf 9 Prozent, was gegen Zufall spricht. Die Autoren vermuten,
dass frühere Befunde Haupteffekte guter Botschaftsgestaltung eingefangen haben, nicht den
Anpassungseffekt (Perla u. a., [*Psychology & Marketing*, 2026](https://onlinelibrary.wiley.com/doi/10.1002/mar.70073?af=R)).

Einschränkung, die ich nicht unterschlagen will: die Untersuchung betrifft digitale Massenwerbung
mit aus Klickspuren geschätzten Profilen. Dein Fall ist ein Gespräch, in dem die Person dir direkt
sagt, was sie will. Der Diagnoseschritt ist bei dir ungleich besser. Ob der Anpassungsschritt im
Dialog besser funktioniert als in der Anzeige, ist offen, nicht widerlegt.

Was dagegen gut belegt ist, sind Züge, die **unabhängig vom Gegenüber** wirken. Eine Meta-Analyse
über 74 Interventionsstudien, davon 80 Prozent randomisiert, findet für wahrgenommene
Autonomieunterstützung g = 0,84 und für autonome Motivation g = 0,41. Unterstützung von
Zugehörigkeit liegt deutlich darunter bei g = 0,28 (Gillison, Rouse, Standage, Sebire & Ryan,
[*Health Psychology Review* 13, 2019](https://pubmed.ncbi.nlm.nih.gov/30295176/)). Die Interventionen
stammen aus dem Gesundheitsbereich, die Übertragung auf Verhandlungen ist Extrapolation.

**Die praktische Folgerung, die daraus fällt:** Begründung vor Vorgabe, echte Wahl, Perspektive
spiegeln, keine steuernde Sprache. Diese vier tragen bei fast jedem. Das Erkennen des Motivs ist
demgegenüber weniger wert, als das Spiel suggeriert.

Eine eigene Vermutung, ausdrücklich als solche markiert und nicht belegt: die Diagnose könnte
asymmetrisch nützlich sein, nämlich mehr für das Vermeiden des falschen Zuges als für das Setzen des
richtigen. Wer einem autonomiebetonten Gegenüber Referenzen als Argument vorlegt, verliert
vermutlich mehr, als er mit dem passenden Argument gewinnt. Das ist eine testbare Hypothese, für die
ich keine Studie kenne.

---

## 5. Zwei weitere Schwachstellen

**Motiv sagt Verhalten nur schwach vorher.** Selbst eine korrekte Motivdiagnose kauft weniger, als
man denkt. Über drei Studien zeigen Bardi und Schwartz, dass Stimulation und Tradition stark mit dem
entsprechenden Verhalten zusammenhängen, Hedonismus, Macht, Universalismus und Selbstbestimmung
mittelstark, und **Sicherheit, Konformität, Leistung und Benevolenz nur marginal**. Als Erklärung
nennen sie normativen Druck, der bei diesen Werten das Verhalten überformt (*Personality and Social
Psychology Bulletin* 29, 2003). Drei der fünf Spielkategorien liegen in der schwachen Gruppe.

**Das Gespräch ist eine starke Situation.** Ein Termin mit Agenda, Rollen und Höflichkeitsnormen
schränkt ein, wie viel Disposition sich überhaupt zeigen kann. Das ist derselbe Mechanismus, den
Bardi und Schwartz für die schwachen Zusammenhänge verantwortlich machen. Fragen, die den normativen
Druck umgehen, sind deshalb besser als Fragen, die ihn abrufen. Das erklärt auch, warum
„Woran merken Sie in einem Jahr, dass es richtig war?" im Spiel 0,87 bit trägt und
„Wie schätzen Sie die Branchenlage ein?" 0,003 bit: die erste fragt nach einem persönlichen
Kriterium, die zweite nach einer Rollenmeinung.

---

## 6. Was ich am Spiel geändert habe

- Nach der Auflösung erscheinen Umgangstipps, getrennt nach Belegstufe A, B und C. Nur Autonomie
  bekommt A, Zugehörigkeit B, die anderen drei sind als Praxisheuristik ohne Beleg gekennzeichnet.
- Ein zweiter Block listet die motivunabhängigen Züge, die am besten belegt sind.
- Darunter steht der Befund aus §4 im Klartext, damit niemand den Anpassungsschritt überschätzt.

## 7. Was noch offen ist

- Die Items sind weiter erfunden. Ohne den Kalibrierungsschritt aus §2 bleibt das Spiel eine
  Simulation.
- Effizienz gehört fachlich nicht in den Satz. Sauberer wäre, es zu streichen und stattdessen
  Stimulation aufzunehmen, damit die vier Schwartz-Dimensionen vollständig sind.
- Meine Umrechnung der Werte-Rangfolge auf Anteile einer Verteilung dominanter Motive ist eine
  Konstruktion. Aus den ESS-Rohdaten ließe sich eine echte Verteilung schätzen.
