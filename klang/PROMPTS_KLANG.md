# Die Geräusche

Dateien gehören in diesen Ordner und heißen so, wie das Spiel sie
erwartet. Alles kurz, alles trocken, alles ohne Musik: das Haus soll
klingen, nicht auftreten.

| Datei | wann | Länge |
|---|---|---|
| `tuer-auf.mp3` | eine Tür geht auf — die nächste Person wird frei | 1,2 s |
| `schloss.mp3` | eine verschlossene Tür anfassen, die nicht dran ist | 0,7 s |
| `eintragen.mp3` | Petra trägt dich ins Buch ein | 1,0 s |
| `stempel.mp3` | am Ende: der A38 wird gestempelt | 0,9 s |
| `blaettern.mp3` | einen Wortwechsel zurück oder vor | 0,25 s |
| `notiz.mp3` | eine neue Notiz landet in der Spalte | 0,4 s |
| `treppe-hoch.mp3` | ein Stockwerk höher | 1,3 s |
| `treppe-runter.mp3` | und wieder hinunter | 1,3 s |

---

## Was für alle gilt

Diese Sätze gehören vor jeden einzelnen Prompt:

> A single short **diegetic sound effect**, recorded as if with one
> microphone two metres away in a large stone-floored corridor of a
> nineteen-fifties civic building. Dry, close, unglamorous. **No music,
> no drone, no reverb tail beyond the room's own, no whoosh, no riser,
> no cinematic sweetener, no voice.** Mono, 44.1 kHz, starts within 30
> milliseconds, ends cleanly.

Der Ton des Hauses: **Stein, Metall, Papier.** Nichts Digitales, nichts
Freundliches. Wenn ein Geräusch nach einer Benutzeroberfläche klingt,
ist es falsch.

---

## `tuer-auf.mp3` — eine Tür geht auf

Das wichtigste Geräusch im Spiel: es bedeutet, dass jemand dich
weitergeschickt hat.

> A heavy interior door being unlatched and opened about halfway: the
> lever handle turns with a dry mechanical click, the latch withdraws,
> the door swings on a stiff hinge with a low single creak, and stops.
> No slam, no closing. The room behind sounds slightly larger than the
> one in front.

## `schloss.mp3` — die Tür bleibt zu

Kurz, hart, endgültig. Es soll nicht wie ein Fehler klingen, sondern wie
ein Schloss.

> A door handle pressed down and released against a locked latch: two
> short dull mechanical knocks, metal on metal, with no give at all.
> The door itself does not move. Very short, no echo.

## `eintragen.mp3` — das Besucherbuch

Petras Geräusch. Papier und Kugelschreiber, sonst nichts.

> A ballpoint pen writing four or five characters quickly on paper that
> lies on a hard wooden surface, then the pen being set down beside it.
> The paper is thick and slightly stiff. Close, dry, no room.

## `stempel.mp3` — der A38

Das Ende. Ein einziger Stempel, und der sitzt.

> A rubber stamp: the short muffled press into an ink pad, then a
> single firm strike onto a sheet of paper on a wooden desk. The strike
> is one decisive impact with a slight wooden resonance underneath. No
> second strike.

## `blaettern.mp3` — zurück im Verlauf

So leise, dass man es fast nicht merkt.

> A single sheet of paper being turned over on a stack: a short dry
> rustle, nothing more. Very quiet, very short.

## `notiz.mp3` — eine Notiz kommt dazu

Der kleinste Ton im Spiel.

> A pencil making a single short tick on paper, as if ticking something
> off a list. One sound, dry, no room.

## `treppe-hoch.mp3` und `treppe-runter.mp3` — Stockwerk wechseln

Zwei, drei Schritte auf Stein, nicht mehr. Kein ganzer Gang.

> Three unhurried footsteps on a stone stairway in a large echoing
> stairwell, leather soles, with the natural tail of the space after
> the last step. No handrail sounds, no door.

Zweimal: einmal hinauf, einmal hinunter. Hinunter ist schneller und
härter, hinauf ungleichmäßiger — man hört den Unterschied, auch wenn
man ihn nicht benennen kann.

---

## Fertig nehmen statt erzeugen

Für sieben trockene Alltagsgeräusche ist eine Bibliothek der kürzere
Weg: Türklinken, Stempel und Schritte auf Stein gibt es aufgenommen,
und aufgenommen klingen sie besser als erzeugt. **[Pixabay
Sound-Effects](https://pixabay.com/sound-effects/)** passt dafür — die
Pixabay-Lizenz erlaubt die Verwendung ohne Namensnennung, auch
kommerziell; nur weiterverkaufen darf man die Dateien nicht als
Dateien. Für ein Spiel, das sie einbaut, reicht das.

Wonach man sucht, und woran man merkt, dass es das falsche ist:

| Datei | Suchbegriffe | daneben ist es, wenn |
|---|---|---|
| `tuer-auf.mp3` | `door open`, `door handle open`, `office door open` | die Tür auch wieder zufällt, oder ein Horror-Knarren |
| `schloss.mp3` | `locked door`, `door handle rattle`, `door knob locked` | jemand klopft, oder ein Schlüssel dreht sich |
| `eintragen.mp3` | `pen writing paper`, `ballpoint writing` | eine Feder kratzt, oder es rauscht dabei |
| `stempel.mp3` | `rubber stamp`, `stamp paper` | zwei Schläge, oder ein Cartoon-Effekt |
| `blaettern.mp3` | `page turn`, `paper single page` | ein ganzes Buch, oder Zeitungspapier |
| `notiz.mp3` | `pencil tick`, `pen check mark`, `pencil write short` | es klingt nach einer Benutzeroberfläche |
| `treppe-*.mp3` | `footsteps stairs concrete`, `footsteps stairwell` | mehr als vier Schritte, oder Turnschuhe |

**Der Ton des Hauses bleibt derselbe: Stein, Metall, Papier.** Was nach
Software klingt, ist falsch, auch wenn es sauber aufgenommen ist. Und
was länger als anderthalb Sekunden ist, wird geschnitten — beim vierten
Mal Hören zählt jede Zehntelsekunde.

Umbenennen nicht vergessen: das Spiel sucht genau die Namen aus der
Tabelle oben, in genau diesem Ordner.

---

## Was jetzt im Ordner liegt

Sechs Aufnahmen von [Pixabay](https://pixabay.com/sound-effects/) liegen
in `klang/quellen/`. Daraus geschnitten sind sieben Geräusche — die
Quellen bleiben liegen, damit man den Schnitt wiederholen oder anders
setzen kann.

| Datei | Länge | geschnitten aus | Stelle |
|---|---|---|---|
| `tuer-auf.mp3` | 0,76 s | *fletchpike — door opening* | 0,06–0,82 s |
| `schloss.mp3` | 0,32 s | *hasin2004 — open door* | 1,40–1,59 s, **zweimal** |
| `eintragen.mp3` | 1,00 s | *freesound — writing pen signature paper* | 0,34–1,34 s |
| `notiz.mp3` | 0,20 s | dieselbe Aufnahme | 2,88–3,08 s |
| `blaettern.mp3` | 0,30 s | *creatorshome — turn a page* | 0,00–0,30 s |
| `treppe-hoch.mp3` | 1,30 s | *freesound — footsteps up stairs* | 12,30–13,60 s |
| `treppe-runter.mp3` | 1,35 s | *freesound — footsteps down stairs* | 5,10–6,45 s |

**Das Schloss ist gebaut, nicht gefunden.** Ein verschlossenes Schloss
gibt es als Aufnahme kaum, und was es gibt, klingt nach Einbruch. Also
den Klinkenschlag aus der zweiten Türaufnahme genommen, ihn zweimal
hintereinandergelegt — 125 Millisekunden Abstand, der zweite 2,5 dB
leiser — und nach 0,42 Sekunden abgeschnitten. Zwei dumpfe Schläge, kein
Nachgeben. Genau das hört man, wenn eine Tür nicht aufgeht.

**Zwei Treppen statt einer.** Es waren zwei Aufnahmen da, hinauf und
hinunter, also klingen **▲** und **▼** verschieden. Das ist keine
Spielerei: wenn beide Knöpfe gleich klingen, glaubt man dem Knopf nicht.

### Die Lautheiten sind gestuft, nicht gleich

Jede Datei ist auf eine gemessene Spitze gebracht, nicht auf eine
geratene — `ffmpeg`s `volumedetect` sagt, wie laut sie ist, dann wird
genau die Differenz angewendet. Die Stufen sind Absicht:

| | | |
|---|---|---|
| **−3 dB** | `tuer-auf` | die wichtigste Sache im Spiel |
| **−6 dB** | `schloss` | soll erschrecken, aber nicht ärgern |
| **−7 dB** | `treppe-hoch`, `treppe-runter` | |
| **−9 dB** | `eintragen` | |
| **−14 dB** | `blaettern` | fast nicht zu merken |
| **−15 dB** | `notiz` | der kleinste Ton |

Deshalb gibt es im Spiel nur einen Regler für alle (`KLANG_LAUT`, 0,85)
— das Verhältnis steckt in den Dateien.

**Fehlt noch `stempel.mp3`**, der Stempel auf dem A38 ganz am Ende. Bis
es ihn gibt, bleibt es an dieser einen Stelle still.

---

## Eingebaut ist es

`klingt()` steht in `quelle/spiel.html` neben der Musik und hängt am
selben Schalter: wer ♪ ausschaltet, macht auch das Haus still.
**Fehlt eine Datei, bleibt es an der Stelle still** — einmal daneben
gegriffen, und der Ton wird nie wieder versucht. Man kann die sieben
also einzeln nachlegen.

Wo sie hängen:

| Klang | ausgelöst durch |
|---|---|
| `tuerAuf` | jemand gibt deinen Namen weiter — die nächste Tür geht auf |
| `stempel` | dieselbe Stelle bei Kai: du hast den A38 |
| `schloss` | eine verschlossene Tür im Treppenhaus anklicken; sie rüttelt dazu |
| `treppeHoch` / `treppeRunter` | **▲** und **▼**, und sie klingen verschieden |
| `blaettern` | einen Wortwechsel zurück oder vor |
| `notiz` | eine Antwort, die etwas verrät, wird notiert |
| `eintragen` | Petra trägt dich ins Buch ein |

Der letzte hängt nicht am Code, sondern an der Person: **jede Zeile darf
`klang:` mitbringen.** Bei Petra steht es an der Ankunft:

```js
wie2: `zügig, sehr geübt, …`, klang: `eintragen`,
```

So bekommt jeder seinen eigenen Ton, ohne dass das Spiel die Personen
kennen muss.
