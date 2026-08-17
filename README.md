# Vierzig Minuten für einen Fremden

[![Vierzig Minuten für einen Fremden — jetzt im Browser spielen](bilder/spielen.svg)](https://mendeltem.github.io/menschenlesen/)

### ▶ [Hier spielen](https://mendeltem.github.io/menschenlesen/) — im Browser, ohne Installation, ohne Konto

*Wer hier weiterbaut, fängt unten bei **[Weiterbauen](#weiterbauen)** an:
dort steht, welche Datei man anfasst, wie gebaut wird, was entschieden
ist und was noch offen.*

Du besuchst einen Mann, den du nicht kennst, und willst ihm irgendwann
etwas verkaufen. Nur klappt das nicht am ersten Tag. Beim ersten Besuch
lernst du ihn kennen; was danach zwischen euch steht, entscheidet, ob er
den Koffer überhaupt ansieht.

Es läuft vollständig im Browser: kein Server, kein Konto, nichts wird
gesendet. Der Knopf oben startet die gespielte Fassung; wer das Zeug
lieber lokal hat, lädt das Verzeichnis herunter und öffnet `index.html`
per Doppelklick. Beides ist dieselbe Datei.

## Drei Stufen

Das Spiel hatte alles auf einmal: lesen, ausfragen, Freundschaft, Geduld,
Lagen, Verkauf. Jetzt kommt es in drei Stufen, und die ersten zwei sind
nichts als zuhören.

| | | |
|---|---|---|
| **1** | Sein Wesen | fünf Merkmale, jedes von −2 bis +2 |
| **2** | Was er braucht | zwei Waagen, jede mit zwei Seiten |
| **3** | Der Koffer | alles Übrige, und erst jetzt geht es ums Verkaufen |

**In Stufe eins und zwei gibt es keine Balken und kein Modell.** Keine
Freundschaft, keine Geduld, keine bit-Zahlen, keine
Wahrscheinlichkeitsbalken — nur das Gespräch, deine Notizen und er. Du
fragst, so lange du willst; nichts kostet etwas, nichts läuft ab. Wenn du
meinst, genug zu wissen, legst du dich fest, und damit ist die Stufe
vorbei.

**Punkte gibt es je Achse:** genau getroffen zählt voll, eine Stufe
daneben zählt wenig, weiter daneben gar nicht. Hundert Punkte je Stufe,
zusammen zweihundert — daraus werden die Sterne:

| | | | | |
|---|---|---|---|---|
| ★★★★★ | ★★★★ | ★★★ | ★★ | ★ |
| ab 180 | ab 145 | ab 105 | ab 60 | ab 25 |

Wer fünfzig Punkte schafft, kommt in die nächste Stufe. Wer nicht, spielt
sie noch einmal — er fängt dann von vorn an, und man weiß mehr als beim
ersten Mal.

**Stufe drei erbt alles.** Die Festlegungen stehen, die Fragen sind
gestellt, und die Freundschaft startet danach, wie gut du gelesen hast:
zweihundert Punkte bringen dich auf 75 statt auf 35. Wer schlecht liest,
sitzt einem Fremden gegenüber; wer gut liest, jemandem, der ihn für einen
hält, der zuhört.

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

Die Waagen verteilen sich flacher als die Merkmale: ein Merkmal ist
normalverteilt, die meisten Menschen sind mittel verträglich. Eine Waage
mit zwei Seiten ist das nicht — wer selbst bestimmen will, will es, und
die Mitte ist der seltenere Fall.

**Besuche statt einer Partie.** Zwischen zwei Besuchen bleibt, was du
gehört hast, und wie ihr steht. Gespeichert werden nicht die
Wahrscheinlichkeiten, sondern seine Antworten; beim nächsten Mal wird
daraus dasselbe Bild neu gerechnet.

**Ein blätterbarer Verlauf.** Jeder Wortwechsel trägt eine Marke mit
Nummer — *jetzt*, *−1*, *−2* —, und genau einer steht groß. Mit den
Pfeiltasten, den zwei Knöpfen oben rechts oder dem Mausrad am oberen
Rand springt man zurück; der gewählte wird groß, alles andere klein, und
daneben steht ausgeschrieben, wie weit man zurück ist.

**Eine Drehscheibe statt einer Reihenfolge.** Nach jedem Schritt
entscheidest du neu: ihn über sich reden lassen, herausfinden, worauf er
anspringt, dich festlegen, fragen was gerade los ist, den Koffer
aufmachen, gehen. Alles ist immer erlaubt. Nur kostet alles etwas.

**Das Festlegen ist der Kern.** Aus dem Gespräch schließt du, wer er
ist — und irgendwann sagst du es ihm ins Gesicht: für jedes Merkmal eine
Stufe, für jede Waage eine Seite. Es steht immer oben in der Übersicht,
es liegt als Knopf neben deinem Bild von ihm, und wenn du eine Fragerunde
beendest, wirst du direkt gefragt. Auch neu festlegen darfst du dich
jederzeit — nur zählt das erst wieder, wenn du seither Neues gehört hast:
volle Wertung ab einer neuen Antwort je Achse. Wer dieselbe Vorstellung
zweimal abgibt, bekommt nichts dafür und kostet ihn Geduld.

**Die Wahrheit siehst du nie.** Es gibt keine Auflösung, in der seine
wahren Werte in einer Tabelle stehen. Du hast dein Modell, deine Notizen
und ihn. Wenn du dich festlegst, sagst du es ihm ins Gesicht, und er
antwortet: bei einem Treffer bestätigt er, bei einem Fehlgriff
widerspricht er. Aus der Richtung seines Widerspruchs kannst du
schließen, wohin du danebenlagst. Mehr Hilfe gibt es nicht.

## Zwei Balken — nur in Stufe drei

In den Lesestufen gibt es sie nicht. Erst wenn es ums Verkaufen geht,
kommen sie dazu.

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
| Der Stift | −1,4 | **0 %** |
| Die Brille | −4,0 | **0 %** |

**Die Freundschaft ist der Zuschlag,** nicht der Ersatz: bis zu fünfzehn
Punkte auf die Aussicht. Genug, um aus einem Vielleicht ein Ja zu machen.
Nie genug, um aus einem Nein etwas zu machen.

## Drei Menschen, die sich widersprechen

Baumgartner ist laut, offen, unordentlich und nicht umzuwerfen; er will
selbst bestimmen und auf keine Bühne. Annika Reuter ist eher still, sehr
genau und sehr zugewandt; sie will Verlässlichkeit und einen zweiten
Menschen im Raum. Ruhig sind beide — ihn wirft nichts um, und sie
arbeitet mit Dingen, die vierhundert Jahre überstanden haben.

Das ist kein Beiwerk, sondern der Prüfstein. Wer aus dem ersten Gespräch
Gewohnheiten mitbringt, tritt beim zweiten in Minen: bei ihm trägt der
trockene, direkte Weg, bei ihr der behutsame — und wer ihr fröhlich
widerspricht, bekommt keinen Streit, sondern ein sehr höfliches Ende.
Und die richtige Ware dreht sich mit:

Der dritte ist Luigi Sartori, Kantinenkoch, einundsechzig, seit
vierunddreißig Jahren dasselbe Haus. Er ist zugewandt wie sonst niemand
und trotzdem lieber allein: er kocht für zweihundert Leute und geht nie
in den Speisesaal. Wer ihn für den lauten, herzlichen Koch hält, den das
Klischee verspricht, redet an ihm vorbei — und merkt es nicht, weil er
freundlich bleibt. Sein Ärger sieht aus wie Zustimmung.

| | Baumgartner | Reuter | Sartori |
|---|---|---|---|
| Die Uhr | **+3,2** | −3,2 | −1,6 |
| Der Stift | −1,4 | **+2,6** | **+1,6** |
| Die Brille | −4,0 | −1,6 | −2,2 |

Bei Reuter und Sartori trägt dieselbe Ware aus verschiedenen Gründen:
sie will nichts verlieren, er will nichts vergessen. Wer die Ware nach
dem Menschen wählt, merkt den Unterschied nicht einmal. Wer sie nach dem
letzten Gespräch wählt, hat zufällig recht — und beim nächsten zufällig
unrecht.

Auch die Anzeige redet über jede Person in ihrer Form — *Sein Wesen*
gegen *Ihr Wesen*, *er antwortet dir darauf* gegen *sie antwortet dir
darauf*. Die Formen stehen als Tabelle in der Personendatei.

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
| `index.html` | Menü und Mechanik. Weiß nichts über eine bestimmte Person. |
| `welt.js` | was für jede Person gilt: die Achsen, die Freundschaftsstufen, die Abschlussrechnung, dein Koffer, die Belege |
| `personen/baumgartner/` | Tobias Baumgartner, Statistiker: seine Datei und seine Bilder |
| `personen/reuter/` | Annika Reuter, Papierrestauratorin — dasselbe noch einmal, und in fast allem seine Gegenprobe |
| `personen/sartori/` | Luigi Sartori, Kantinenkoch |
| `PROMPTS_ANNIKA.md`, `PROMPTS_LUIGI.md` | der Personengenerator an einer Person durchgespielt, fertig zum Kopieren |
| `PROMPTS.md` | ein Prompt, aus dem jede weitere Person entsteht |
| `werkzeug/` | zerlegt einen Kontaktbogen in die zehn Stimmungsbilder |
| `musik/` | fünf Spuren: Menü, Laden, Gespräch, gewonnen, verloren |
| `balance.py` | spielt sechshundert Besuchsreihen je Spielweise und misst, wann er kauft |
| `quelle/spiel.html` | **die Vorlage, an der man arbeitet** — Menü, Mechanik, Anzeige |
| `quelle/themes.css` | die dreizehn Farbschemata, alle dunkel |
| `quelle/bauen.py` | setzt beides zu `index.html` zusammen |

**Jede Person hat einen Ordner**, und darin liegt alles, was zu ihr
gehört:

```
personen/reuter/
  reuter.js            Wahrheit, Fragen, Zustände, Widerworte, Verkaufszüge
  kontaktbogen.jpg     der erzeugte Bogen, aus dem die Bilder kommen
  bilder/              neutral.webp, freundlich.webp … abweisend.webp
```

**Eine Person ergänzen** heißt: Ordner anlegen, die Datei einer
bestehenden Person hineinkopieren, `id`, Namen und Texte ändern — und den
Bogen zerschneiden:

```bash
python werkzeug/kontaktbogen_schneiden.py personen/reuter/kontaktbogen.jpg reuter
```

Das legt die zehn Bilder in `personen/reuter/bilder/` und druckt die
Zeilen aus, die unter `stimmungen` einzutragen sind. Am Skelett ändert
sich nichts, die `<script>`-Zeile setzt `bauen.py` selbst.

Die Personendateien sind JSON in der Form, aber JavaScript in der
Verpackung — mit Absicht: Browser verbieten `fetch()` auf `file://`, per
`<script src>` geladene Dateien nicht. So läuft das Spiel per Doppelklick
genauso wie auf einem Server.

**Was bleibt** — Kasse, Bestand und die Akte jeder Person — liegt im
Speicher des Browsers. **Zurücksetzen** steht oben in der Leiste, liegt
auf <kbd>Umschalt</kbd>+<kbd>R</kbd> und ist aus dem Menü wie aus jedem
laufenden Gespräch erreichbar; es fragt einmal nach und räumt dann alles
weg: Kasse, Koffer, alle Akten, Farbschema,
Musik und die aufgeklappten Kästen. Danach kennt dich jede Person wieder
nicht.

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
| Zufall | 0 % | 0 % | 0 % | 0 % | 0 % | 0 % | **0 %** | 76 % |
| Mittelmaß | 1 % | 7 % | 12 % | 13 % | 15 % | 13 % | **61 %** | 0 % |
| gutes Zuhören | 1 % | 28 % | 36 % | 22 % | 9 % | 2 % | **98 %** | 0 % |
| alles ausfragen | 0 % | 1 % | 34 % | 43 % | 19 % | 3 % | **100 %** | 0 % |

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

## Weiterbauen

**`index.html` wird nicht bearbeitet.** Sie entsteht aus der Vorlage und
wird beim nächsten Bauen überschrieben. Angefasst wird
`quelle/spiel.html`.

```bash
python quelle/bauen.py
```

Das ist der ganze Bauvorgang: Vorlage plus Farbschemata plus eine
`<script>`-Zeile je Person, fertig ist `index.html`. Kein
Bundler, keine Abhängigkeiten — mit Absicht: das Spiel soll sich per
Doppelklick öffnen lassen, und auf `file://` verbietet der Browser
`fetch()`. Deshalb liegen `welt.js` und die Personendateien daneben statt
nachgeladen zu werden.

**Die Zahlen prüfen:**

```bash
python balance.py n=600
```

`balance.py` liest die Gewichte aus `quelle/spiel.html` und die Inhalte
aus `welt.js` und `personen/`. Es rechnet nichts nach, was im Spiel
anders wäre — wenn eine Konstante wandert, wandert die Messung mit. Wer
an Gewichten dreht, dreht sie in `quelle/spiel.html` und lässt das hier
gegenrechnen, bevor er committet.

**Örtlich ansehen:**

```bash
python -m http.server 8731
```

Dann `http://127.0.0.1:8731/`. Ohne Server geht es auch — `index.html`
doppelklicken —, nur bleibt die Musik dann je nach Browser stumm, bis
man einmal klickt.

## Was entschieden ist, und warum

Kurz, damit niemand es zweimal entscheiden muss:

- **Fünf Merkmale bayessch, zwei Waagen für die Motive.** Die fünf Motive
  waren genauer und unlesbar. Zwei Achsen kann man ansehen und versteht
  sie; fünf muss man studieren.
- **Die Waagen haben eine eigene, flachere Verteilung** (`mglocke`). Ein
  Merkmal ist normalverteilt, ein Entweder-Oder nicht. Mit der
  Merkmalsglocke landete das Modell praktisch nie auf einem Außenpol.
- **Der Spieler sieht die Wahrheit nie.** Keine Auflösung, keine Tabelle
  mit den echten Werten — auch nicht am Ende. Rückmeldung kommt nur über
  ihn: bestätigt, schränkt ein, widerspricht.
- **Der Abschluss ist ein Wurf, keine Schwelle.** Der Bedarf ist die
  Bedingung, die Freundschaft der Zuschlag. Freundschaft macht aus einem
  Vielleicht ein Ja und aus einem Nein nichts.
- **Fragen kosten zunehmend.** Sonst wäre es immer richtig, alles zu
  fragen, und die Lesephasen hätten keine Entscheidung mehr, nur Arbeit.
- **Der Fehlgriff wiegt doppelt so schwer wie der Treffer.** Das ist eine
  Vermutung und keine Messung; siehe `wissenschaftliche_pruefung.md`.
- **Eine Datei je Person, per `<script>` geladen.** Siehe oben: `file://`.

## Was offen ist

**Zwei Merkmale sind praktisch nicht zu treffen.** Bei den fünf Merkmalen
gilt weiter die Glockenkurve, und Baumgartner steht bei Extraversion auf
+2 und bei Neurotizismus auf −2 — beide am Außenpol. Gemessen über 500
Durchläufe mit jeweils optimaler Fragenwahl, Anteil genau getroffen:

| | O (+2) | C (−1) | E (+2) | A (+1) | N (−2) |
|---|---|---|---|---|---|
| nach 6 Fragen | 52 % | 61 % | **0 %** | 27 % | **2 %** |
| nach 9 Fragen | 57 % | 83 % | **20 %** | 27 % | **17 %** |

Wer perfekt spielt, bekommt auf zwei von fünf Merkmalen fast immer ein
*eingeschränkt* statt eines *bestätigt* — und das kostet Freundschaft.
Das ist keine Schwierigkeit, das ist eine kaputte Rückmeldung. Drei Wege
hinaus, keiner davon entschieden:

1. Den Merkmalen dieselbe Behandlung geben wie den Waagen, also eine
   flachere Kurve. Macht alle fünf lesbarer und verschiebt die Balance.
2. Baumgartners Profil von den Außenpolen wegrücken (E +1, N −1). Ändert
   die Figur.
3. So lassen und die Wertung ändern: *eingeschränkt* nicht mehr fast
   wertlos machen, sondern die Punkte je Merkmal daran messen, wie weit
   der Außenpol überhaupt erreichbar ist.

**Die zweite Waage ist deutlich schwerer als die erste.** Freiheit wird
nach fünf Fragen zu 54 % genau getroffen, Geltung nur zu 29 %. Grund:
seine Freiheit ist so ausgeprägt, dass er meistens die Freiheitsantwort
wählt — die Geltungsantworten kommen selten dran und liefern deshalb
wenig. Behebbar über Fragen, die nur eine Waage abstufen; das macht sie
aber leicht (99 %) und nimmt ihnen den Reiz. Bisher unangetastet.

**Nur eine Person.** Das Skelett trägt beliebig viele, Baumgartner ist
die einzige. Eine zweite wäre der beste Test dafür, ob die Trennung
zwischen Welt und Person wirklich sauber ist.

**Kein Bildschirmfoto in der README.** Der Spielknopf oben führt zur
Demo, aber ein Bild vom laufenden Spiel fehlt.

## Woher die Bilder und die Musik kommen

`BILDER_PROMPTS.md` und `MUSIK.md` halten fest, womit die zehn
Stimmungsbilder, der Raum und die fünf Spuren erzeugt wurden — damit
sich Nachschub im selben Stil machen lässt.
