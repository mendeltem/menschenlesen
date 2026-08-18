# Angela Vogt — die Bilder

*Der allgemeine Weg steht in [`PROMPTS.md`](../../PROMPTS.md). Diese
Datei zeigt ihn an Angela durchgespielt, wie
[`PROMPTS_LUIGI.md`](../sartori/PROMPTS_LUIGI.md) an Luigi.*

Hausmeisterin und Betriebselektrikerin, 47. Die vierte Person.

Dateien gehören nach `personen/vogt/bilder/` und heißen `neutral.webp`
bis `abweisend.webp`; `vogt.js` erwartet sie unter genau diesen Namen.

---

## Wer sie ist, in einem Absatz

Siebenundvierzig, seit neunundzwanzig Jahren im Beruf, davon neunzehn in
diesem Haus. Breit in den Schultern, kräftige Hände, grauer Zopf. Der
Schlüsselbund am Gürtel ist ihr Erkennungszeichen — einundvierzig Stück,
und man hört sie kommen. **Ihr warmer Akzent ist Signalorange**, die
Arbeitsjacke.

| | |
|---|---|
| Tobias Baumgartner | Ziegelrot |
| Annika Reuter | Blaugrau |
| Luigi Sartori | Moosgrün |
| **Angela Vogt** | **Signalorange** |

Zwei Dinge machen sie beim Zeichnen aus:

| | |
|---|---|
| **Wie sie lacht** | laut, Kopf im Nacken, offener Mund, Zähne zu sehen — sie hält nichts zurück |
| **Wie sie ärgerlich wird** | Kinn vor, Brauen zusammen, Blick direkt in die Kamera. Sofort, laut, und nach zehn Sekunden vorbei |

Ihr Ärger ist der Gegenentwurf zu Luigis: er wird traurig, sie wird
laut — und trägt nichts nach. Wer ihr das nicht ansieht, hält ihren
siebten Ausdruck für einen Streit, den es nicht gibt.

---

## Ohne Referenzbild: ein Kontaktbogen aus Text

Ein Bild, zehn Felder, danach zerschneiden.

> A contact sheet of ten portrait panels in a 5 by 2 grid, all of the same
> woman, illustrated in a flat vector-comic style: clean black line art,
> soft cel shading, muted natural palette, warm skin tones, light grey
> background (#e2e2e0) in every panel, head-and-shoulders, front view, thin
> even gutters between panels, no text, no labels, no numbers, no borders
> around the whole sheet.
>
> The woman, identical in all ten panels: 47 years old, weathered fair
> skin, few lines but deep ones, grey-blonde hair pulled back into a
> practical braid with strands escaping at the temples, no make-up, small
> plain steel stud earrings. A high-visibility orange work jacket, open,
> over a faded navy work shirt with the sleeves rolled to the elbow. A
> heavy bunch of keys clipped to her belt, visible at the lower edge of the
> frame. Broad shoulders, strong forearms, short unpainted nails, a
> shallow old scar across the back of one hand.
>
> The ten panels differ only in expression and upper-body posture, in this
> order, left to right, top row then bottom row:
> 1 — attentive and square to the viewer, chin level, mouth closed, both
> hands resting on her knees.
> 2 — a broad open smile, eyes creased, one eyebrow slightly higher than
> the other.
> 3 — laughing out loud, head tipped back, mouth wide open showing teeth,
> shoulders shaking, one hand slapping her own thigh.
> 4 — leaning right in towards the viewer, elbows on the bench, both
> eyebrows raised, already half-way into an answer.
> 5 — looking off to the side and slightly down, mouth closed, turning a
> screwdriver over in her hands.
> 6 — sceptical, chin drawn back, one eyebrow raised, head tilted, arms
> folded across her chest.
> 7 — angry: chin pushed forward, brows drawn hard together, staring
> directly at the viewer, mouth open mid-sentence. Loud, not cold — the
> anger of someone who will have forgotten it in ten minutes.
> 8 — closed off, jaw set, looking past the viewer at the door, one hand
> flat on the bench, saying nothing.
> 9 — unexpectedly moved, eyes bright and wet, jaw tight against it, gaze
> dropping to her own hands, a quick embarrassed half-smile.
> 10 — standing, half turned away in three-quarter view, wiping her hands
> on her trousers, already looking down the corridor.

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
python werkzeug/kontaktbogen_schneiden.py personen/vogt/kontaktbogen.jpg vogt
```

**Wenn der Bogen beschriftet ist:** Gemini hat beim ersten Versuch die
Dateinamen über und unter die Felder geschrieben, obwohl im Prompt *no
text, no labels, no numbers* steht — und die mittlere Zeile war noch
dazu falsch. Zwischen den Reihen liegt dann kein Steg, sondern Text, und
die Stegsuche schneidet mitten hinein. Dann liest man die Feldkanten
einmal ab und gibt sie mit:

```bash
python werkzeug/kontaktbogen_schneiden.py personen/vogt/kontaktbogen.jpg vogt --rand 4 --senkrecht 30,555,587,1113,1144,1671,1702,2228,2259,2785 --waagerecht 72,675,812,1452
```

Je Feld zwei Zahlen, linke und rechte Kante. Die Bilder selbst standen
in der richtigen Reihenfolge, nur die Beschriftung war Unsinn.

---

## Mit Referenzbild: ein Bild hinein, zehn heraus

Sobald es ein Porträt von ihr gibt, ist das der bessere Weg — die
Ähnlichkeit hält dann von selbst.

> Use the attached portrait as the exact reference for the character.
> Keep her identity, face shape, hair colour and hairstyle, skin tone,
> clothing, colours, line style, shading, framing and the plain light grey
> background **identical** in every panel. Do not restyle, do not age her,
> do not change the palette, do not add anything she is not already
> wearing.
>
> Produce a contact sheet of ten head-and-shoulders panels in a 5 by 2
> grid, thin even gutters, no text, no labels, no numbers, no borders.
> The panels differ **only** in facial expression and upper-body posture,
> in the order listed above.

## Die zehn einzeln

Wer lieber zehn einzelne Bilder erzeugt: der Beschreibungsabsatz von oben
(*The woman, identical in all ten panels: …*) wird wortgleich vorangestellt,
dann folgt genau eine der zehn Zeilen als `Expression:`. Nicht kürzen —
von der Wiederholung lebt die Ähnlichkeit. Quadratisch 1:1, kein Text,
kein Rahmen. Bei Feld 10 zusätzlich: *three-quarter view from behind her
shoulder instead of front view.*

---

## Ihre Werkstatt

`personen/vogt/bilder/raum.webp` — Querformat 16:9, liegt hinter dem
Seitenkopf. Jeder Gegenstand kommt im Gespräch vor.

> Illustrated interior in the same flat vector-comic style as the
> portraits: clean black line art, soft cel shading, muted natural palette,
> no people, no text, 16:9.
>
> A caretaker's workshop on the ground floor of an institutional building,
> behind the stairwell, door standing open to a corridor. A pegboard with tools hung on painted
> outlines, two outlines empty and the two tools lying on the bench instead.
> A cut-open section of pipe on the bench, the inside almost closed up with
> scale, a handwritten note beside it with two dates. A key board with a
> large empty hook. A hand-drawn plan of the building's stopcocks taped to
> the wall, yellowed. A small paint-spattered radio, switched on. A folded
> building plan with pencil crosses on it. An enamel sign reading AUSSER
> BETRIEB leaning against the door frame. No daylight, warm work lamps,
> orderly where it matters and cluttered everywhere else.

Wer die Szene mit ihr darin will:

> The woman from the portraits sits on the workbench in three-quarter view,
> cleaning a screwdriver without looking at it.

---

## Danach

`vogt.js` erwartet die zehn Dateien bereits unter den Namen oben. Nur das
Werkstattbild fehlt noch in der Datei:

```js
raumbild: `personen/vogt/bilder/raum.webp`,
```

Bis dahin steht dort absichtlich nichts, dann bleibt der Streifen oben
leer statt tot.
