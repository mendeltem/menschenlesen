# Vierzig Minuten für einen Fremden

[![Vierzig Minuten für einen Fremden — jetzt im Browser spielen](bilder/spielen.svg)](https://mendeltem.github.io/menschenlesen/)

### ▶ [Hier spielen](https://mendeltem.github.io/menschenlesen/) — im Browser, ohne Installation, ohne Konto

Du besuchst einen Mann, den du nicht kennst, und willst ihm irgendwann
etwas verkaufen. Nur klappt das nicht am ersten Tag. Beim ersten Besuch
lernst du ihn kennen; was danach zwischen euch steht, entscheidet, ob er
den Koffer überhaupt ansieht.

Es läuft vollständig im Browser: kein Server, kein Konto, nichts wird
gesendet. Der Knopf oben startet die gespielte Fassung; wer das Zeug
lieber lokal hat, lädt das Verzeichnis herunter und öffnet `index.html`
per Doppelklick. Beides ist dieselbe Datei.

## Was drin steckt

**Fünf Merkmale, fünf Stufen.** Die Persönlichkeit bleibt bayessch:
3125 mögliche Menschen, ein Rollenklischee als Startbild, jede Antwort
ein Datenpunkt, P(Person | Antwort) ∝ P(Antwort | Person) · P(Person).
Über jeder Frage steht, wie viele bit sie verspricht.

**Zwei Waagen für das, was er will.** Früher waren es fünf Motive — das
war genauer und unlesbar. Jetzt gibt es zwei Fragen mit je zwei Seiten:

| | |
|---|---|
| Sicherheit ⟷ Freiheit | will Verlässlichkeit ⟷ will selbst bestimmen |
| Nähe ⟷ Geltung | will dazugehören ⟷ will gesehen werden |

Fünfundzwanzig mögliche Menschen statt 3125, dieselbe Rechnung, und man
kann den Balken ansehen und weiß Bescheid. Jede der sieben Fragen bietet
vier Antworten, eine je Pol, und trennt damit beide Waagen auf einmal.

**Besuche statt einer Partie.** Zwischen zwei Besuchen bleibt, was du
gehört hast, und wie ihr steht. Gespeichert werden nicht die
Wahrscheinlichkeiten, sondern seine Antworten; beim nächsten Mal wird
daraus dasselbe Bild neu gerechnet.

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

## Zwei Balken

**Geduld** gilt für diesen Nachmittag und beginnt bei hundert. Jede Frage
kostet, und zwar zunehmend: die erste sechs, die siebte gut zehn — er
merkt, wenn er verhört wird. Ein Gespräch, das trifft, gibt ihm Geduld
zurück; eines, das danebengeht, kostet zusätzlich. Bei null steht er auf.
Ein Drittel des Verbrauchs nimmt er mit ins nächste Mal.

**Freundschaft** beginnt bei 35 und ist das einzige, was wirklich bleibt.

| | |
|---|---|
| ab 80 | verbündet |
| ab 60 | vertraut |
| ab 40 | bekannt |
| ab 20 | fremd |
| unter 8 | verbrannt — er lässt dich nicht mehr herein |

Sie wächst, wenn du ihn richtig liest: ein Festlegen ohne Widerspruch ist
bis zu 25 wert, ein Gespräch über seine Lage bis zu 8. Sie fällt bei
jeder Frage und bei jedem Fehlgriff.

**Der Koffer** geht erst ab 55 auf. Darunter sieht er hinein, sieht dich
an und schiebt ihn zurück — das kostet 12. Auch ein geglückter Versuch
kostet 6: du hast dich zu erkennen gegeben.

## Ob er kauft, ist ein Wurf

Keine Schwelle mehr, sondern eine Aussicht — und sie steht vor dem Wurf
auf dem Schirm.

**Der Bedarf ist die Bedingung.** Was er nicht braucht, kauft er nicht.
Bei ihm gilt das hart:

| | Passung | beste Aussicht |
|---|---|---|
| Die Uhr | +3,2 | 93 % |
| Der Stift | −1,7 | **0 %** |
| Die Brille | −2,6 | **0 %** |

**Die Freundschaft ist der Zuschlag,** nicht der Ersatz: bis zu fünfzehn
Punkte auf die Aussicht. Genug, um aus einem Vielleicht ein Ja zu machen.
Nie genug, um aus einem Nein etwas zu machen.

## Seine Lage

Bei jedem Besuch ist etwas anderes los — zehn Zustände, jeder mit drei
Wegen hinein: der Umzug in den Neubau, elf Tage bis zum Gutachten, eine
Leitung von vierunddreißig, die Revision, die erste Doktorandin, der
Rücken, das neue Rechensystem, ein Preis zu dem er nicht will, der
Kollege der geht, der Mitbewohner ab Mai.

Jeder Weg hinein unterstellt eine Persönlichkeit — teilnehmend, nüchtern,
ordnungsliebend. Verrechnet wird er mit der, die er wirklich hat. Vor der
Wahl steht nur, was **dein** Modell erwarten lässt. Ist dein Bild falsch,
führt dich genau diese Zahl in die Mine:

> Haben Sie jemanden, der Ihnen etwas abnimmt? — *unklar +0,3*

Ohne eine einzige Frage sieht das harmlos aus. Nach neun Fragen steht da
*gegen dein Bild −0,8*, und das stimmt: er lacht kurz und ohne Freude.

Wer trifft, erfährt außerdem, was er deswegen gerade braucht — und das
verschiebt, welche Ware diese Woche die richtige ist.

## Wie es gebaut ist

Ein Skelett, das nichts über eine bestimmte Person weiß, und Personen,
die alles mitbringen: Texte, Fragen, Zustände, Bilder, Farbschema.

| | |
|---|---|
| `index.html` | Menü und Mechanik. Weiß nichts über Baumgartner. |
| `welt.js` | was für jede Person gilt: die Achsen, die Freundschaftsstufen, die Abschlussrechnung, dein Koffer, die Belege |
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
in schlechter Laune tun sie mehr weh, nicht weniger.

## Die Balance

`python balance.py` liest die Gewichte aus `spiel.html`, die Fragen und
Zustände aus `welt.js` und `personen/`, und spielt sechshundert
Besuchsreihen je Spielweise über bis zu sechs Besuche. Weil die Zahlen
aus dem Spiel selbst kommen, können Messung und Wirklichkeit nicht
auseinanderlaufen. In welchem Besuch er kauft:

| | 1. | 2. | 3. | 4. | 5. | 6. | kauft | verbrannt |
|---|---|---|---|---|---|---|---|---|
| Zufall | 0 % | 0 % | 0 % | 0 % | 0 % | 0 % | **0 %** | 74 % |
| Mittelmaß | 1 % | 8 % | 12 % | 11 % | 16 % | 13 % | **59 %** | 0 % |
| gutes Zuhören | 1 % | 33 % | 37 % | 20 % | 7 % | 2 % | **99 %** | 0 % |
| alles ausfragen | 0 % | 1 % | 43 % | 41 % | 14 % | 1 % | **99 %** | 0 % |

Blind raten gewinnt nie und verbrennt in drei von vier Fällen die
Freundschaft so weit, dass er nicht mehr aufmacht. Am ersten Tag zu
verkaufen ist möglich, aber selten. Wer alles ausfragt, kommt auch hin —
braucht dafür aber einen Besuch länger als der, der gezielt fragt, weil
die Geduld schneller aufgebraucht ist und ein Drittel davon mit ins
nächste Mal geht.

## Ehrlichkeit

Die Person steht fest, sie wird nicht aus dem Prior gezogen. Das
Rollenklischee am Anfang ist genau das: ein Klischee. Das Gesicht trägt
null bit — es wird unabhängig vom wahren Profil gezeigt.

Die Wertung im Verkauf gewichtet Autonomieunterstützung rund dreimal so
stark wie Motivpassung. Das ist keine Designlaune, sondern der Stand der
Belege: g = 0,84 über 74 Interventionsstudien gegen r = 0,11 über 41
Studien, in kontrollierten Designs meist nicht signifikant. Die Items
selbst sind erfunden — Näheres in `wissenschaftliche_pruefung.md`.
