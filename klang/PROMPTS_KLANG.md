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
| `treppe.mp3` | Stockwerk wechseln | 1,4 s |

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

## `treppe.mp3` — Stockwerk wechseln

Zwei, drei Schritte auf Stein, nicht mehr. Kein ganzer Gang.

> Three unhurried footsteps on a stone stairway in a large echoing
> stairwell, leather soles, with the natural tail of the space after
> the last step. No handrail sounds, no door.

---

## Einbauen

Noch spielt das Spiel keinen dieser Töne ab — die Dateien dürfen
zuerst da sein. Wenn sie liegen, kommt eine kleine Funktion neben die
Musik in `quelle/spiel.html`:

```js
const KLANG = { tuerAuf:"klang/tuer-auf.mp3", schloss:"klang/schloss.mp3", … };
function klingt(k){ … }
```

Sie hängt am selben Schalter wie die Musik: wer ♪ ausschaltet, macht
auch das Haus still.
