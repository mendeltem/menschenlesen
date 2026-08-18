# Kai Dombrowski — die Bilder

*Der allgemeine Weg steht in [`PROMPTS.md`](../../PROMPTS.md). Diese
Datei zeigt ihn an Kai durchgespielt, wie
[`PROMPTS_ANGELA.md`](../vogt/PROMPTS_ANGELA.md) an Angela.*

Systemadministrator, 43. Die fünfte Person.

Dateien gehören nach `personen/dombrowski/bilder/` und heißen
`neutral.webp` bis `abweisend.webp`; `dombrowski.js` erwartet sie unter
genau diesen Namen.

---

## Wer er ist, in einem Absatz

Dreiundvierzig, seit elf Jahren im selben fensterlosen Raum im Keller.
Schmal, leicht vornübergebeugt, blasse Haut ohne Sonne, dünnes Haar,
das er alle drei Monate selbst schneidet. Zwei Tage Bart, nie mehr
und nie weniger. Er friert bei achtzehn Grad und sagt das nicht. **Sein
warmer Akzent ist Ockergelb**, ein ausgewaschener Kapuzenpulli unter
einem offenen Hemd — das einzig Warme in einem Raum aus schwarzem Blech.

| | |
|---|---|
| Tobias Baumgartner | Ziegelrot |
| Annika Reuter | Blaugrau |
| Luigi Sartori | Moosgrün |
| Angela Vogt | Signalorange |
| **Kai Dombrowski** | **Ockergelb** |

Zwei Dinge machen ihn beim Zeichnen aus:

| | |
|---|---|
| **Wie er lacht** | gar nicht. Ein einzelnes Ausatmen durch die Nase, Mund zu, Augen bleiben glatt — Spott, keine Freude |
| **Wie er sich sorgt** | er wird still statt laut. Blick knapp an der Kamera vorbei, Kiefer fest, eine Hand im Nacken. Nach innen, nicht nach außen |

**Das Wichtigste am ganzen Satz:** sein Ärger darf nicht aussehen wie
Angelas. Sie geht vor, er geht zurück. Sie wird laut, er wird leise und
sehr genau. Wer seinen siebten Ausdruck zeichnet wie ihren, hat den
falschen Menschen gezeichnet — bei ihr ist es in zehn Minuten vorbei,
bei ihm liegt es abends noch da.

Und einen Blick hat er, den sonst niemand hat: **er sieht alle zwei
Minuten am Gegenüber vorbei auf einen Bildschirm.** Auch mitten im Satz.
Das ist keine Unhöflichkeit, das ist die Angst, etwas zu übersehen.

---

## Ohne Referenzbild: ein Kontaktbogen aus Text

Ein Bild, zehn Felder, danach zerschneiden.

> A contact sheet of ten portrait panels in a 5 by 2 grid, all of the same
> man, illustrated in a flat vector-comic style: clean black line art,
> soft cel shading, muted natural palette, cool pale skin tones, light grey
> background (#e2e2e0) in every panel, head-and-shoulders, front view, thin
> even gutters between panels, no text, no labels, no numbers, no borders
> around the whole sheet.
>
> The man, identical in all ten panels: 43 years old, pale indoor
> complexion, thinning dark hair cut short and slightly unevenly, two days
> of stubble, faint shadows under the eyes, plain rimless glasses that
> catch a little reflected light. A washed-out ochre-yellow hooded
> sweatshirt worn under an open, faded grey-checked shirt, the hood bunched
> at the back of his neck. Narrow shoulders, a slight forward stoop, long
> thin hands, a fraying fabric wristband. He is cold and does not mention
> it: the hood collar is pulled up at the throat in every panel.
>
> The ten panels differ only in expression and upper-body posture, in this
> order, left to right, top row then bottom row:
> 1 — concentrating, not on the viewer: eyes directed slightly off to one
> side as if at a screen, mouth closed, one hand raised near his chin.
> 2 — a small closed-mouth smile, genuinely warm but brief, eyes finally on
> the viewer, shoulders dropping a little.
> 3 — sarcastic: a single breath out through the nose, mouth closed and
> pulled to one side, eyebrows flat, eyes not creased at all. Amusement
> without any joy in it.
> 4 — wide awake and leaning in, both eyebrows up, lips parted, one hand
> flat on his knee — the look of someone who has just been asked a precise
> question and is glad about it.
> 5 — thinking, gaze dropped to his own hands, jaw tight, one hand at the
> back of his neck, shoulders drawn up.
> 6 — distrustful, chin drawn back, head tilted, one eyebrow slightly
> lowered rather than raised, arms not folded but hands gripping his own
> forearms.
> 7 — angry, and quietly so: leaning back and away from the viewer, not
> forward. Jaw set, eyes very steady and narrowed, mouth a thin straight
> line. Cold and precise, the anger of someone who will still be carrying
> it tonight.
> 8 — shut down, looking past the viewer at nothing, face gone completely
> flat, both hands closed around a mug he is not drinking from.
> 9 — caught out and moved against his will: eyes wet and wide, a single
> hard swallow, looking straight at the viewer for once and clearly wishing
> he were not.
> 10 — half standing, turned away in three-quarter view, a laptop already
> tucked under one arm, glancing back over his shoulder without stopping.

Zerschneiden in dieser Reihenfolge:

| Feld | Datei |
|---|---|
| 1 | `neutral.webp` |
| 2 | `freundlich.webp` |
| 3 | `amuesiert.webp` |
| 4 | `interessiert.webp` |
| 5 | `nachdenklich.webp` |
| 6 | `skeptisch.webp` |
| 7 | `gereizt.webp` |
| 8 | `verschlossen.webp` |
| 9 | `geruehrt.webp` |
| 10 | `abweisend.webp` |

Von Hand muss das niemand:

```bash
python werkzeug/kontaktbogen_schneiden.py personen/dombrowski/kontaktbogen.jpg dombrowski
```

**Bei seinem Bogen ging das nicht.** Er kam unbeschriftet und in der
richtigen Reihenfolge — aber mit einem gezeichneten Rahmen um jedes
Feld und ohne dunklen Steg dazwischen. Die Stegsuche findet dann nichts,
teilt gleichmäßig, und der schwarze Strich bleibt in jedem Bild stehen.
Also einmal die Rahmenlinien abgelesen und knapp innerhalb geschnitten:

```bash
python werkzeug/kontaktbogen_schneiden.py personen/dombrowski/kontaktbogen.jpg dombrowski --rand 5 --senkrecht 24,633,670,1285,1322,1941,1978,2593,2630,3239 --waagerecht 26,636,675,1285
```

Je Feld zwei Zahlen, linke und rechte Kante; bei `--waagerecht` je Reihe
Ober- und Unterkante. `--rand 5` frisst den Rahmenstrich weg. Heraus
kommen zehn Bilder um 600 × 600.

Die Zahlen gelten für diesen Bogen (3264 × 1312). Bei einem neuen liest
man sie neu ab: gesucht sind die Spalten und Zeilen, in denen über
dreißig Prozent der Pixel dunkler als 120 sind — das sind genau die
Rahmen.

**Wenn ein Bogen beschriftet ist:** bei Angela hat Gemini die
Dateinamen über und unter die Felder geschrieben, obwohl im Prompt *no
text, no labels, no numbers* steht. Zwischen den Reihen liegt dann kein
Steg, sondern Text. Derselbe Weg hilft, nur liest man die Kanten dann an
den Feldern statt an den Rahmen ab.

---

## Mit Referenzbild: ein Bild hinein, zehn heraus

Sobald es ein Porträt von ihm gibt, ist das der bessere Weg — die
Ähnlichkeit hält dann von selbst.

> Use the attached portrait as the exact reference for the character.
> Keep his identity, face shape, hair, skin tone, glasses, clothing,
> colours, line style, shading, framing and the plain light grey background
> **identical** in every panel. Do not restyle, do not age him, do not
> change the palette, do not add anything he is not already wearing, and do
> not remove the glasses in any panel.
>
> Produce a contact sheet of ten head-and-shoulders panels in a 5 by 2
> grid, thin even gutters, no text, no labels, no numbers, no borders.
> The panels differ **only** in facial expression and upper-body posture,
> in the order listed above.

## Die zehn einzeln

Wer lieber zehn einzelne Bilder erzeugt: der Beschreibungsabsatz von oben
(*The man, identical in all ten panels: …*) wird wortgleich vorangestellt,
dann folgt genau eine der zehn Zeilen als `Expression:`. Nicht kürzen —
von der Wiederholung lebt die Ähnlichkeit. Quadratisch 1:1, kein Text,
kein Rahmen. Bei Feld 10 zusätzlich: *three-quarter view from behind his
shoulder instead of front view.*

Ein Hinweis, der bei ihm mehr zählt als bei den anderen: **Feld 3 und
Feld 7 fallen bei Bildgeneratoren gern zusammen.** Sarkasmus und stiller
Ärger sehen beide nach schmalem Mund aus. Wenn die zwei Felder gleich
aussehen, hilft in Feld 3 der Zusatz *the corner of the mouth pulled to
one side, eyes flat and unbothered*, in Feld 7 *leaning back, chin
lowered, eyes narrowed and fixed*.

---

## Sein Serverraum

`personen/dombrowski/bilder/raum.webp` — Querformat 16:9, liegt hinter
dem Seitenkopf. Jeder Gegenstand kommt im Gespräch vor.

> Illustrated interior in the same flat vector-comic style as the
> portraits: clean black line art, soft cel shading, muted cool palette,
> no people, no text, 16:9.
>
> A small windowless server room in the basement of an institutional
> building, converted from an old map archive. Two rows of black 19-inch racks facing each
> other with a narrow aisle between them, about eighty centimetres wide.
> Bundles of patch cables, a few status lights. On one rack a yellowed
> handwritten label. A low rolling cart with a closed laptop on it. A
> second desk against the end wall, completely empty and dusty, with a
> switched-on power strip underneath. A monitor whose bezel is covered in
> layered sticky notes in three colours, and one clean white note at the
> lower edge that does not match the others. A printed sheet of paper taped
> to the inside of the door. A thermometer hanging from a cable bundle. A
> small private desk fan standing on a cardboard box. A mug of cold coffee.
> Cold blue-white overhead light, no daylight, no warmth anywhere except a
> single ochre hoodie thrown over the back of a chair.

Wer die Szene mit ihm darin will:

> The man from the portraits sits on the rolling cart at the end of the
> aisle in three-quarter view, the laptop open on his knees, looking at it
> and not at us.

---

## Danach

`dombrowski.js` erwartet die zehn Dateien bereits unter den Namen oben.
Nur das Raumbild fehlt noch in der Datei:

```js
raumbild: `personen/dombrowski/bilder/raum.webp`,
```

Bis dahin steht dort absichtlich nichts, dann bleibt der Streifen oben
leer statt tot.
