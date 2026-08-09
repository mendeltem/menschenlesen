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

## Die Dateien

| | |
|---|---|
| `gespraech.html` | das Spiel, alles darin außer Bildern und Musik |
| `bilder/` | zehn Stimmungen und der Raum |
| `musik/` | fünf Spuren: Menü, Laden, Gespräch, gewonnen, verloren |
| `balance.py` | spielt tausend Partien durch und misst die Gewinnchancen |
| `BILDER_PROMPTS.md` | wie die Bilder entstanden sind, zum Nachmachen |
| `MUSIK.md` | welche Datei wo läuft und was musikalisch passt |
| `wissenschaftliche_pruefung.md` | was an dem Modell belegt ist und was nicht |
| `motivdiagnose.html` | der Vorgänger: fünf Motive, zwanzig Personen |
| `bigfive_rate(1).html` | der andere Vorgänger: Big Five über 32 Zustände |

## Die Balance

`python balance.py` liest die Zahlen aus dem Spiel und spielt vierhundert
Partien je Spielweise. Der Stand:

| | kauft | lässt offen |
|---|---|---|
| Zufall | 0 % | 6 % |
| Mittelmaß | 11 % | 61 % |
| gutes Zuhören | 81 % | 19 % |
| alles ausfragen | 94 %, aber im Mittel schlechter | 6 % |

Blind raten gewinnt nie. Die Maximalstrategie zahlt sich nicht mehr aus,
seit Fragen Geduld und Auffälligkeit kosten.

## Ehrlichkeit

Die Person steht fest, sie wird nicht aus dem Prior gezogen. Das
Rollenklischee am Anfang ist genau das: ein Klischee. Das Gesicht trägt
null bit — es wird unabhängig vom wahren Profil gezeigt.

Die Wertung im letzten Akt gewichtet Autonomieunterstützung rund dreimal
so stark wie Motivpassung. Das ist keine Designlaune, sondern der Stand
der Belege: g = 0,84 über 74 Interventionsstudien gegen r = 0,11 über 41
Studien, in kontrollierten Designs meist nicht signifikant. Die Items
selbst sind erfunden — Näheres in `wissenschaftliche_pruefung.md`.
