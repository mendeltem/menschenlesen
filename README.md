# Vierzig Minuten für einen Fremden

Du besuchst einen Mann, den du nicht kennst, und willst ihm irgendwann
etwas verkaufen. Nur klappt das nicht am ersten Tag. Beim ersten Besuch
lernst du ihn kennen; was danach zwischen euch steht, entscheidet, ob er
den Koffer überhaupt ansieht.

Alles läuft im Browser, ohne Server und ohne Netz. `index.html` öffnen
genügt.

## Was drin steckt

**Ein bayessches Modell über 3125 Zustände.** Fünf Persönlichkeitsmerkmale
mit je fünf Stufen. Vor dem ersten Wort verteilt sich der Glaube nach
einer Glockenkurve, verschoben durch ein Rollenklischee — das bei dieser
Person überwiegend falsch ist. Jede Antwort ist ein Datenpunkt,
P(Person | Antwort) ∝ P(Antwort | Person) · P(Person). Über jeder Frage
steht, wie viele bit sie verspricht.

**Besuche statt einer Partie.** Zwischen zwei Besuchen bleibt die
Beziehung und alles, was du gehört hast. Gespeichert werden dabei nicht
die 3125 Wahrscheinlichkeiten, sondern seine Antworten; beim nächsten Mal
wird daraus dasselbe Bild neu gerechnet.

**Eine Drehscheibe statt einer Reihenfolge.** Nach jedem Schritt
entscheidest du neu: ihn über sich reden lassen, herausfinden, worauf er
anspringt, dich festlegen, fragen was gerade los ist, den Koffer
aufmachen, gehen. Alles ist immer erlaubt. Nur kostet alles etwas.

**Die Wahrheit siehst du nie.** Es gibt keine Auflösung, in der seine
wahren Werte in einer Tabelle stehen. Du hast dein Modell, deine Notizen
und ihn. Wenn du dich festlegst, sagst du es ihm ins Gesicht, und er
antwortet: bei einem Treffer bestätigt er, bei einem Fehlgriff
widerspricht er. Aus der Richtung seines Widerspruchs kannst du
schließen, wohin du danebenlagst. Mehr Hilfe gibt es nicht.

## Die Beziehung

Sie beginnt bei 35 und ist das einzige, was bleibt.

| | |
|---|---|
| ab 80 | verbündet |
| ab 60 | vertraut |
| ab 40 | bekannt |
| ab 20 | fremd |
| unter 8 | verbrannt — er lässt dich nicht mehr herein |

**Was sie kostet:** jede Frage, und zwar zunehmend. Die erste kostet 1,
die siebte schon 1,7 — er merkt, wenn er verhört wird. Wer sich die
Fragen über mehrere Besuche einteilt, kommt billiger davon. Auch die
Auffälligkeit nimmt er zur Hälfte mit ins nächste Mal.

**Was sie bringt:** ihn richtig zu lesen. Ein Festlegen, bei dem er nicht
widerspricht, ist bis zu 25 wert; ein Gespräch über seine Lage, das
trifft, bis zu 8.

**Der Koffer** geht erst ab 55 auf. Darunter sieht er hinein, sieht dich
an und schiebt ihn zurück — das kostet 12. Auch ein geglückter Versuch
kostet 6: du hast dich zu erkennen gegeben, und das nimmst du nicht
zurück.

## Seine Lage

Bei jedem Besuch ist etwas anderes los — zehn Zustände, jeder mit drei
Wegen hinein: der Umzug in den Neubau, elf Tage bis zum Gutachten, eine
Leitung von vierunddreißig, die Revision, die erste Doktorandin, der
Rücken, das neue Rechensystem, ein Preis, zu dem er nicht will, der
Kollege, der geht, der Mitbewohner ab Mai.

Jeder Weg hinein unterstellt eine Persönlichkeit — teilnehmend, nüchtern,
ordnungsliebend. Verrechnet wird er mit der, die er wirklich hat. Vor der
Wahl steht nur, was **dein** Modell erwarten lässt. Ist dein Bild falsch,
führt dich genau diese Zahl in die Mine:

> Haben Sie jemanden, der Ihnen etwas abnimmt? — *unklar +0,3*

Ohne eine einzige Frage sieht das harmlos aus. Nach neun Fragen steht da
*gegen dein Bild −0,8*, und das stimmt: er lacht kurz und ohne Freude.

Wer trifft, erfährt außerdem, was er deswegen gerade braucht. Das zählt,
wenn du ihm etwas hinlegst.

## Wie es gebaut ist

Ein Skelett, das nichts über eine bestimmte Person weiß, und Personen,
die alles mitbringen: Texte, Fragen, Zustände, Bilder, Farbschema.

| | |
|---|---|
| `index.html` | Menü und Mechanik. Weiß nichts über Baumgartner. |
| `welt.js` | was für jede Person gilt: die zehn Achsen, die Beziehungsstufen, dein Koffer, die Belege |
| `personen/baumgartner.js` | eine Person: Wahrheit, Fragen, Zustände, seine Widerworte, Stimmungen, Verkaufszüge |
| `bilder/` | zehn Stimmungen und der Raum |
| `musik/` | fünf Spuren: Menü, Laden, Gespräch, gewonnen, verloren |
| `balance.py` | spielt sechshundert Besuchsreihen je Spielweise und misst, wann er kauft |

**Eine Person ergänzen** heißt: `personen/baumgartner.js` kopieren, `id`,
Namen und Texte ändern, Bilder danebenlegen, im `index.html` eine Zeile
`<script src="personen/…">` anfügen. Am Skelett ändert sich nichts.

Die Personendateien sind JSON in der Form, aber JavaScript in der
Verpackung — mit Absicht: Browser verbieten `fetch()` auf `file://`, per
`<script src>` geladene Dateien nicht. So läuft das Spiel per Doppelklick
genauso wie auf einem Server.

**Was bleibt** — Kasse, Bestand und die Akte jeder Person — liegt im
Speicher des Browsers. *Zurücksetzen* im Menü räumt es weg; danach kennt
dich jede Person wieder nicht.

## Die Stimmung

Wie er dasitzt, entscheidet mit. Jeder Zug wird mit einem Faktor
verrechnet, der an seiner Laune hängt: gerührt ×1,3, interessiert ×1,2,
neutral ×1, skeptisch ×0,85, gereizt ×0,55. Fehlgriffe wirken umgekehrt —
in schlechter Laune tun sie mehr weh, nicht weniger. Wer ihn verstimmt,
macht sich den ganzen Rest schwer.

## Die Balance

`python balance.py` liest die Gewichte aus `spiel.html`, die Fragen und
Zustände aus `welt.js` und `personen/`, und spielt sechshundert
Besuchsreihen je Spielweise. Weil die Zahlen aus dem Spiel selbst kommen,
können Messung und Wirklichkeit nicht auseinanderlaufen. Der Stand — in
welchem Besuch er kauft:

| | 1. | 2. | 3. | 4. | kauft | verbrannt |
|---|---|---|---|---|---|---|
| Zufall | 0 % | 0 % | 0 % | 0 % | **0 %** | 89 % |
| Mittelmaß | 0 % | 6 % | 10 % | 9 % | **26 %** | 1 % |
| gutes Zuhören | 1 % | 27 % | 41 % | 20 % | **89 %** | 0 % |
| alles ausfragen | 0 % | 2 % | 46 % | 46 % | **93 %** | 0 % |

Blind raten gewinnt nie und verbrennt in neun von zehn Fällen die
Beziehung so weit, dass er nicht mehr aufmacht. Am ersten Tag zu
verkaufen ist möglich, aber selten — auch bei gutem Spiel nur in einem
von hundert Durchgängen. Wer alles ausfragt, kommt am Ende auch hin,
braucht dafür aber einen Besuch länger als der, der gezielt fragt.

## Ehrlichkeit

Die Person steht fest, sie wird nicht aus dem Prior gezogen. Das
Rollenklischee am Anfang ist genau das: ein Klischee. Das Gesicht trägt
null bit — es wird unabhängig vom wahren Profil gezeigt.

Die Wertung im Verkauf gewichtet Autonomieunterstützung rund dreimal so
stark wie Motivpassung. Das ist keine Designlaune, sondern der Stand der
Belege: g = 0,84 über 74 Interventionsstudien gegen r = 0,11 über 41
Studien, in kontrollierten Designs meist nicht signifikant. Die Items
selbst sind erfunden — Näheres in `wissenschaftliche_pruefung.md`.
