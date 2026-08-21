# Die drei Stockwerke — die Bilder fürs Treppenhaus

Das Menü ist kein Menü, sondern ein Treppenhaus: ein Stockwerk auf
einmal, mit **▲** und **▼** dazwischen. Jede Etage hat ein eigenes Bild,
das dahinterliegt, und eine eigene Farbe.

Dateien gehören nach `bilder/` und heißen so, wie `welt.js` sie erwartet:

| Etage | Datei | Farbe | wer dort sitzt |
|---|---|---|---|
| Erster Stock | `etage1.webp` | `#8a6f4a` — Eichenholz | Tobias Baumgartner, Annika Reuter |
| Erdgeschoss | `etageE.webp` | `#8c5a44` — Terrakotta | Petra Kettner, Angela Vogt |
| Untergeschoss | `etageU.webp` | `#4a6a72` — kaltes Blaugrün | Luigi Sartori, Kai Dombrowski |

Fehlt ein Bild, bleibt der Farbverlauf stehen — das Spiel läuft, es ist
nur weniger schön.

Über dem Bild liegt ein Schleier, damit die Schrift lesbar bleibt: oben
und unten dunkel, in der Mitte durchsichtig. Ein Bild darf also ruhig
hell sein.

### Der erste Bogen

Er kam als 2×2, also mit vier Feldern für drei Stockwerke — das
Erdgeschoss war zweimal drin. Genommen wurde die Fassung mit der
Werkstatttür, den Paketen und den nassen Streifen, weil diese drei Dinge
im Gespräch vorkommen. Der Bogen liegt als `etagenbogen.jpg` daneben.

Die hellen Stege lagen bei x 1368–1383 und y 760–775; geschnitten wurde
mit drei Pixel Rand:

| Feld | Datei |
|---|---|
| oben links | `etageE.webp` |
| oben rechts | `etage1.webp` |
| unten rechts | `etageU.webp` |
| unten links | die zweite Erdgeschossfassung, ungenutzt |

---

## Was alle drei gemeinsam haben

Ein Amtsgebäude, das sich für ein römisches Forum hält. Nicht Comic,
nicht Witz: ein realer Verwaltungsbau der Nachkriegszeit, dem jemand
Marmor, Rundbögen und Versalien verpasst hat, weil das damals nach
Ordnung aussah. Genau darin liegt der Asterix-Ton — das Haus meint es
vollkommen ernst.

> Illustrated architectural interior in a flat vector-comic style: clean
> black line art, soft cel shading, muted palette, **no people, no text,
> no signage lettering**, wide 16:9, viewed straight down a corridor
> with strong one-point perspective.
>
> A mid-century civic administration building that was built to look
> like a Roman forum and never quite recovered: travertine floor slabs,
> a coffered ceiling, round arches on square pilasters, a laurel frieze
> running along the top of the wall, and a row of identical doors
> receding into the distance. Everything is worn — the marble is
> scuffed, the paint on the pilasters is chipped, and someone has run a
> cable along the frieze with plastic clips.

Danach folgt je Etage ein Absatz.

---

## `etageE.webp` — Erdgeschoss

Terrakotta. Hier kommt man herein, und hier kommt man an zweien nicht
vorbei.

> **This floor:** the entrance hall. A revolving door at the far end
> throwing hard daylight across the floor. To one side a wooden reception
> counter with a glass screen above it and a speaking slot at the bottom;
> a large ledger lies open on it. Beside the counter a stack of parcels
> three rows high. Further along, a shallow open door to a caretaker's
> workshop with a pegboard of tools visible inside. Two wet streaks on
> the stone floor near the door. Warm terracotta and ochre, daylight from
> the entrance, long shadows.

---

## `etage1.webp` — Erster Stock

Eichenholz. Der Gang mit den Büros — und der vierten Tür.

> **This floor:** an office corridor with no windows, lit by fluorescent
> tubes, four identical doors along one wall. The **fourth door** is
> subtly different: its little name plate holder is empty, with a
> brighter unfaded rectangle where a card used to sit, and a half-torn
> post-office sticker beside the handle. A paper tray beside that door
> is overflowing. The other three doors show signs of life — one is ajar
> with warm lamplight and stacks of paper, one has a folded blanket over
> a chair just visible. Oak veneer, brass handles, aged linoleum.

---

## `etageU.webp` — Untergeschoss

Kaltes Blaugrün. Kantine und Serverraum, und niemand kommt vorbei.

> **This floor:** a basement corridor, lower ceiling, exposed pipes and
> cable trays running along it. At one end a serving hatch with its
> shutter half down and a folding menu board beside it, the warm yellow
> light of a kitchen leaking underneath. At the other end a heavy door
> standing open onto two rows of black server racks with a narrow aisle
> between them, cold blue-white light, a small fan on a cardboard box.
> No daylight anywhere. Cold blue-green with one warm patch from the
> kitchen.

---

## Danach

Nichts eintragen — `welt.js` erwartet die Namen bereits:

```js
bild:`bilder/etageE.webp`, farbe:`#8c5a44`
```

Nur wenn eine Etage dazukommt, braucht sie dort eine eigene Zeile mit
`bild`, `farbe` und `hoehe`. **`nr` ist der Schritt auf der Route,
`hoehe` das Stockwerk im Haus** — beim Erdgeschoss null, beim Keller
minus eins. Die zwei sind nicht dasselbe, und die Pfeile richten sich
nach `hoehe`.
