# Die sechs Türen

Im Treppenhaus stehen Türen, keine Leute. Wer noch nicht dran ist, zeigt
nur ein Blatt, einen Griff und ein Schild — wer dahinter sitzt, erfährt
man, wenn sie aufgeht.

Genau **eine** Tür ist offen: die nächste auf der Route. Sie leuchtet und
zeigt das Gesicht. Alles davor steht offen, alles danach ist zu.

| Route | Datei | Schild | wer dahinter sitzt |
|---|---|---|---|
| 1 | `tuer-empfang.webp` | EMPFANG | Petra Kettner |
| 2 | `tuer-werkstatt.webp` | HAUSMEISTEREI | Angela Vogt |
| 3 | `tuer-buero.webp` | 1.11 | Tobias Baumgartner |
| 4 | `tuer-restaurierung.webp` | 1.13 · PAPIERRESTAURIERUNG | Annika Reuter |
| 5 | `tuer-kueche.webp` | KÜCHE · PERSONAL | Luigi Sartori |
| 6 | `tuer-server.webp` | U 14 | Kai Dombrowski |

Fehlt ein Bild, bleibt die dunkle Fläche mit dem Griff stehen — es läuft,
es ist nur weniger schön.

**Der Griff wird im Spiel gezeichnet**, als kleiner Punkt rechts auf
halber Höhe. Wer im Bild schon einen malt, bekommt zwei; besser also
ohne, oder den gezeichneten Punkt später aus dem CSS nehmen.

---

## Was alle sechs gemeinsam haben

Format **5:4**, also etwas höher als breit — die Tür füllt das Bild fast
ganz. Kein Gang, kein Raum, kein Mensch: man steht direkt davor.

> Illustrated door seen straight on, filling almost the whole frame, in
> a flat vector-comic style: clean black line art, soft cel shading,
> muted palette, **no people, no text, no lettering of any kind**, 5:4
> portrait format, viewed head-on from about a metre away.
>
> The door belongs to a mid-century civic building that was built to
> look like a Roman forum and never quite recovered: a plain travertine
> architrave around the frame, a thin laurel moulding above it, and
> below that a door that is much more ordinary than its own doorway.
> Everything is worn — the stone is scuffed at knee height, the paint
> is chipped where the handle sits.
>
> The door is **closed**. Dim corridor light from the left, the interior
> unlit and invisible.

Danach folgt je Tür ein Absatz. Sie sollen sich auf den ersten Blick
unterscheiden lassen — Material, Farbe, was daran klebt.

---

## `tuer-empfang.webp` — Route 1 · Petra Kettner

Keine Tür im eigentlichen Sinn, sondern die Öffnung im Tresen.

> **This door:** not a door but a service hatch: a wooden counter front
> with a large glass screen above it and a narrow speaking slot at the
> bottom edge. The glass is slightly reflective, the wood is oak,
> varnished and worn pale along the bottom where shoes have kicked it.
> A small hand-printed card is taped to the inside of the glass, blank.
> Warm terracotta wall around it.

## `tuer-werkstatt.webp` — Route 2 · Angela Vogt

Die einzige Tür, die offen steht — und trotzdem geschlossen ist, solange
man nicht dran ist.

> **This door:** a heavy steel workshop door painted a chipped
> industrial grey-green, with a kick plate at the bottom, a cylinder
> lock and a hasp for a padlock. A key cabinet outline is faintly
> visible in the paint where one used to hang. Scuff marks from a
> trolley. Beside the frame, a coil of cable on a hook.

## `tuer-buero.webp` — Route 3 · Tobias Baumgartner

Bürotür, und dahinter ist es unordentlich.

> **This door:** an office door in oak veneer with a brass handle and an
> empty brushed-steel name plate holder at eye height. The door is
> slightly ajar — a hand's width — and warm lamplight falls out through
> the gap onto the floor. A cardboard box is wedged against the frame
> to stop it swinging shut.

## `tuer-restaurierung.webp` — Route 4 · Annika Reuter

Dieselbe Bautür, und doch das Gegenteil.

> **This door:** the same oak office door, but shut tight and
> impeccably kept: the name plate holder holds a neatly cut card, the
> handle is polished, and a small hygrometer is screwed to the frame at
> eye height. A folded towel lies along the bottom of the door as a
> draught stop. No light under it.

## `tuer-kueche.webp` — Route 5 · Luigi Sartori

Die Tür ohne Schild, hinter der Ausgabe.

> **This door:** a swing door for kitchen use: stainless steel push
> plate over most of the surface, a small round porthole window at head
> height fogged from the inside with warm yellow light behind it, and a
> rubber bumper strip along the bottom. Slightly greasy fingerprints
> around the push plate. No handle at all.

## `tuer-server.webp` — Route 6 · Kai Dombrowski

Die letzte, und die einzige, die etwas bewacht.

> **This door:** a heavy grey fire door in a basement, with a card
> reader mounted beside the frame and a closer arm at the top. A strip
> of cold blue-white light escapes underneath. A yellowed handwritten
> sticker is stuck at eye height, blank. Exposed pipes run across the
> wall above the frame.

---

## Danach

`welt.js` braucht nichts. Jede Person trägt ihre Tür selbst:

```js
route: 1,
tuer: { schild: `Empfang`, bild: `bilder/tuer-empfang.webp` },
```

**`route` bestimmt die Reihenfolge im ganzen Haus**, `etage`, in welchem
Stockwerk die Tür hängt. Eine Person dazwischenzuschieben heißt: die
Nummern dahinter um eins hochzählen.
