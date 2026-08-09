# Vierzig Minuten für einen Fremden

Ein Gespräch mit einem einzigen Menschen. Du hast vierzig Minuten, um
herauszufinden, wie er tickt, was ihn antreibt und was ihn privat bewegt
— und am Ende willst du ihm etwas verkaufen.

Alles läuft im Browser, ohne Server und ohne Netz. `gespraech.html`
öffnen genügt.

## Was drin steckt

**Ein bayessches Modell über 3125 Zustände.** Fünf Persönlichkeitsmerkmale
mit je fünf Stufen. Vor dem ersten Wort verteilt sich der Glaube nach
einer Glockenkurve, verschoben durch ein Rollenklischee — das bei dieser
Person überwiegend falsch ist. Jede Antwort ist ein Datenpunkt,
P(Person | Antwort) ∝ P(Antwort | Person) · P(Person). Über jeder Frage
steht, wie viele bit sie verspricht.

**Fünf Phasen.** Ankunft mit einer Frage, Persönlichkeit lesen, Motive
lesen, privat ausforschen, verkaufen. Die Lesephasen kannst du jederzeit
abbrechen — dann musst du dich festlegen, und die Auflösung kommt sofort.

**Drei Kosten, die gegeneinander stehen.** Jede Frage kostet Geduld und
macht ihn wachsamer. Wer alles ausfragt, betritt den privaten Teil schon
halb verbrannt und fliegt bei Auffälligkeit zehn raus, bevor er den
Koffer öffnen kann.

**Ein Koffer mit drei Waren.** Was du anbietest, misst sich an seinen
Motiven und an dem, was du privat erfahren hast. Wie du es anbietest,
misst sich an seiner Persönlichkeit.

## Wie es gebaut ist

Ein Skelett, das nichts über eine bestimmte Person weiß, und Personen,
die alles mitbringen: Texte, Fragen, Bilder, Farbschema.

| | |
|---|---|
| `index.html` | Menü und Mechanik. Weiß nichts über Baumgartner. |
| `welt.js` | was für jede Person gilt: die zehn Achsen, was eine Ausprägung bedeutet, dein Koffer, die Belege |
| `personen/baumgartner.js` | eine Person: Wahrheit, Fragen, Antworten, Stimmungen, Verkaufszüge |
| `bilder/` | zehn Stimmungen und der Raum |
| `musik/` | fünf Spuren: Menü, Laden, Gespräch, gewonnen, verloren |
| `balance.py` | spielt vierhundert Partien je Spielweise und misst die Gewinnchancen |

**Eine Person ergänzen** heißt: `personen/baumgartner.js` kopieren, `id`,
Namen und Texte ändern, Bilder danebenlegen, im `index.html` eine Zeile
`<script src="personen/…">` anfügen. Am Skelett ändert sich nichts.

Die Personendateien sind JSON in der Form, aber JavaScript in der
Verpackung — mit Absicht: Browser verbieten `fetch()` auf `file://`, per
`<script src>` geladene Dateien nicht. So läuft das Spiel per Doppelklick
genauso wie auf einem Server.

**Was du besitzt** — Kasse und Bestand — liegt im Speicher des Browsers
und überlebt Gespräche und Neustarts. *Zurücksetzen* im Menü räumt es weg.

## Die Stimmung

Wie er dasitzt, entscheidet mit. Jeder Zug wird mit einem Faktor
verrechnet, der an seiner Laune hängt: gerührt ×1,3, interessiert ×1,2,
neutral ×1, skeptisch ×0,85, gereizt ×0,55. Fehlgriffe wirken umgekehrt —
in schlechter Laune tun sie mehr weh, nicht weniger. Wer ihn verstimmt,
macht sich den ganzen Rest schwer; das steht im Rahmen neben seinem
Gesicht und am Ende in der Zugbilanz.

## Die Balance

`python balance.py` liest die Gewichte aus `spiel.html`, die Fragen aus
`welt.js` und `personen/`, und spielt vierhundert Partien je Spielweise.
Weil die Zahlen aus dem Spiel selbst kommen, können Messung und Wirklichkeit
nicht auseinanderlaufen. Der Stand:

| | kauft | lässt offen |
|---|---|---|
| Zufall | 0 % | 5 % |
| Mittelmaß | 14 % | 56 % |
| gutes Zuhören | 82 % | 18 % |
| alles ausfragen | 99 %, aber im Mittel schlechter | 1 % |

Blind raten gewinnt nie. Die Maximalstrategie zahlt sich nicht aus, seit
Fragen Geduld und Auffälligkeit kosten — sie kommt im Schnitt niedriger
heraus als das gezielte Fragen, nur mit weniger Streuung.

## Ehrlichkeit

Die Person steht fest, sie wird nicht aus dem Prior gezogen. Das
Rollenklischee am Anfang ist genau das: ein Klischee. Das Gesicht trägt
null bit — es wird unabhängig vom wahren Profil gezeigt.

Die Wertung im letzten Akt gewichtet Autonomieunterstützung rund dreimal
so stark wie Motivpassung. Das ist keine Designlaune, sondern der Stand
der Belege: g = 0,84 über 74 Interventionsstudien gegen r = 0,11 über 41
Studien, in kontrollierten Designs meist nicht signifikant. Die Items
selbst sind erfunden — Näheres in `wissenschaftliche_pruefung.md`.
