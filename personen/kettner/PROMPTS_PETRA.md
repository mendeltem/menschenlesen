# Petra Kettner — die Bilder

*Der allgemeine Weg steht in [`PROMPTS.md`](../../PROMPTS.md). Diese
Datei zeigt ihn an Petra durchgespielt, wie
[`PROMPTS_KAI.md`](../dombrowski/PROMPTS_KAI.md) an Kai.*

Empfang, 56. Die sechste Person und die erste Tür des Hauses.

Dateien gehören nach `personen/kettner/bilder/` und heißen
`neutral.webp` bis `abweisend.webp`; `kettner.js` erwartet sie unter
genau diesen Namen.

---

## Wer sie ist, in einem Absatz

Sechsundfünfzig, seit zweiundzwanzig Jahren an demselben Tresen. Aufrecht,
kompakt, kurzes graues Haar, das alle sechs Wochen exakt gleich geschnitten
wird. Sparsames Make-up, aber vorhanden — sie ist im Dienst. Eine Lesebrille
an einer Kette, die sie beim Sprechen abnimmt und beim Schreiben aufsetzt.
**Ihr warmer Akzent ist Weinrot**, ein Strickmantel über der Bluse, den sie
auch bei Wärme anlässt.

| | |
|---|---|
| Tobias Baumgartner | Ziegelrot |
| Annika Reuter | Blaugrau |
| Luigi Sartori | Moosgrün |
| Angela Vogt | Signalorange |
| Kai Dombrowski | Ockergelb |
| **Petra Kettner** | **Weinrot** |

Zwei Dinge machen sie beim Zeichnen aus:

| | |
|---|---|
| **Wie sie lächelt** | wie ein Schalter. An und aus, ohne Übergang, und die Augen machen nie mit — um die Augen bleibt alles glatt |
| **Wie sie ärgerlich wird** | sie wird **höflicher**. Das Lächeln bleibt und steht eine Spur zu lange, die Augen werden still, beide Hände legen sich flach auf den Tresen |

**Das ist die schwerste Aufgabe im ganzen Satz, und sie ist der Sinn der
Figur:** Feld 2 (verbindlich) und Feld 7 (sehr höflich) müssen fast
dasselbe Bild sein und trotzdem unterscheidbar. Bei allen anderen Personen
sieht Ärger nach Ärger aus — bei Angela laut nach vorn, bei Kai kalt nach
hinten, bei Luigi traurig. Bei ihr sieht er aus wie Freundlichkeit, und
genau das muss man sehen können.

Der Unterschied liegt in drei Kleinigkeiten, und die gehören in den Prompt:
in Feld 2 sind die Augen kurz beteiligt und die Schultern lösen sich; in
Feld 7 sind die Augen vollkommen unbewegt, das Kinn ist einen Millimeter
höher, und beide Hände liegen flach.

Und noch etwas, das sonst niemand hat: **sie steht nie auf.** In allen zehn
Feldern sitzt sie, aufrecht, hinter derselben Tresenkante.

---

## Ohne Referenzbild: ein Kontaktbogen aus Text

Ein Bild, zehn Felder, danach zerschneiden.

Die Glasscheibe gehört zu ihrem Arbeitsplatz, aber **nicht in die
Porträts** — Spiegelungen zerstören die Ähnlichkeit über zehn Felder
hinweg. Sie kommt nur im Raumbild vor.

> A contact sheet of ten portrait panels in a 5 by 2 grid, all of the same
> woman, illustrated in a flat vector-comic style: clean black line art,
> soft cel shading, muted natural palette, light grey background (#e2e2e0)
> in every panel, head-and-shoulders, front view, thin even gutters between
> panels, no text, no labels, no numbers, no borders around the whole
> sheet, no glass or window between her and the viewer.
>
> The woman, identical in all ten panels: 56 years old, fair skin, a
> sharply cut short grey bob, discreet make-up, small gold stud earrings,
> reading glasses on a fine chain resting on her chest. A dark wine-red
> knitted cardigan worn over a pale blouse buttoned to the top. She is
> seated and upright in every panel, both forearms at the front edge of a
> counter that crosses the very bottom of the frame. Short unpainted
> nails, a plain wedding-less hand, a ballpoint pen lying parallel to the
> counter edge.
>
> The ten panels differ only in expression and upper-body posture, in this
> order, left to right, top row then bottom row:
> 1 — businesslike and composed, looking straight at the viewer, mouth
> closed and level, both hands resting on the counter.
> 2 — the professional smile: mouth smiling, and for one moment the eyes
> take part too, the shoulders dropping very slightly. Warm, but on duty.
> 3 — dry amusement: one corner of the mouth raised, eyebrows level, a
> single slow blink, no teeth showing.
> 4 — attentive: leaning forward a few centimetres, reading glasses now
> pushed up, both eyebrows slightly raised, genuinely listening.
> 5 — thinking, gaze dropped to the counter in front of her, one hand
> straightening a pen that is already straight.
> 6 — checking you: chin drawn back, head very slightly tilted, one
> eyebrow a fraction lower, eyes narrowed in assessment rather than
> hostility.
> 7 — angry, expressed as extreme politeness: **almost the same face as
> panel 2**, but the smile is held a moment too long, the eyes are
> completely still and take no part in it, the chin is a millimetre
> higher, and both hands lie flat and motionless on the counter. Nothing
> is raised, nothing is furrowed. It should read as courtesy first and as
> anger a second later.
> 8 — closed off, the smile gone entirely, looking past the viewer towards
> the door, hands withdrawn from the counter into her lap.
> 9 — briefly permeable: caught out by something, eyes bright, the mouth
> not quite steady, looking down and away, one hand at the collar of the
> cardigan. Recovering already.
> 10 — turned three-quarters away while still seated, reaching for a
> telephone at the side, already looking at something else.

Zerschneiden in dieser Reihenfolge:

| Feld | Datei | in der Anzeige heißt das |
|---|---|---|
| 1 | `neutral.webp` | sachlich |
| 2 | `freundlich.webp` | verbindlich |
| 3 | `amuesiert.webp` | trocken |
| 4 | `interessiert.webp` | aufmerksam |
| 5 | `nachdenklich.webp` | nachdenklich |
| 6 | `skeptisch.webp` | prüfend |
| 7 | `gereizt.webp` | **sehr höflich** |
| 8 | `verschlossen.webp` | verschlossen |
| 9 | `geruehrt.webp` | kurz durchlässig |
| 10 | `abweisend.webp` | abweisend |

Von Hand muss das niemand:

```bash
python werkzeug/kontaktbogen_schneiden.py personen/kettner/kontaktbogen.jpg kettner
```

**Wenn das nicht sauber trennt:** die Stegsuche braucht dunkle Stege
zwischen den Feldern. Kommt der Bogen mit gezeichneten Rahmen (wie Kais)
oder mit Beschriftung zwischen den Reihen (wie Angelas), liest man die
Kanten einmal ab und gibt sie mit:

```bash
python werkzeug/kontaktbogen_schneiden.py personen/kettner/kontaktbogen.jpg kettner --rand 5 --senkrecht L1,R1,L2,R2,L3,R3,L4,R4,L5,R5 --waagerecht O1,U1,O2,U2
```

Je Feld zwei Zahlen, linke und rechte Kante; bei `--waagerecht` je Reihe
Ober- und Unterkante. Gesucht sind die Spalten und Zeilen, in denen über
dreißig Prozent der Pixel dunkler als 120 sind.

---

## Mit Referenzbild: ein Bild hinein, zehn heraus

Sobald es ein Porträt von ihr gibt, ist das der bessere Weg — die
Ähnlichkeit hält dann von selbst.

> Use the attached portrait as the exact reference for the character.
> Keep her identity, face shape, hair colour and cut, skin tone, make-up,
> the reading glasses on their chain, clothing, colours, line style,
> shading, framing and the plain light grey background **identical** in
> every panel. Do not restyle, do not age her, do not change the palette,
> do not add anything she is not already wearing. She remains seated
> behind the same counter edge in every panel.
>
> Produce a contact sheet of ten head-and-shoulders panels in a 5 by 2
> grid, thin even gutters, no text, no labels, no numbers, no borders.
> The panels differ **only** in facial expression and upper-body posture,
> in the order listed above.

## Die zehn einzeln

Wer lieber zehn einzelne Bilder erzeugt: der Beschreibungsabsatz von oben
(*The woman, identical in all ten panels: …*) wird wortgleich
vorangestellt, dann folgt genau eine der zehn Zeilen als `Expression:`.
Nicht kürzen — von der Wiederholung lebt die Ähnlichkeit. Quadratisch 1:1,
kein Text, kein Rahmen. Bei Feld 10 zusätzlich: *three-quarter view,
still seated.*

**Bei ihr lohnt es sich, Feld 2 und Feld 7 im selben Durchgang zu
erzeugen** und nebeneinanderzulegen. Sind sie zu verschieden, ist Feld 7
falsch — sie schreit nicht. Sind sie ununterscheidbar, fehlt in Feld 7
die Starre um die Augen und die flache Hand. Dann hilft der Zusatz: *the
smile is identical to the friendly panel, but held; the eyes do not
participate at all; both hands lie flat and still.*

---

## Ihr Empfang

`personen/kettner/bilder/raum.webp` — Querformat 16:9, liegt hinter dem
Seitenkopf. Jeder Gegenstand kommt im Gespräch vor.

> Illustrated interior in the same flat vector-comic style as the
> portraits: clean black line art, soft cel shading, muted natural
> palette, no people, no text, 16:9.
>
> The reception desk in the entrance hall of an institutional building,
> seen from the visitor's side. A wooden counter with a glass screen above
> it and a speaking slot at the bottom, a small self-printed name sign
> taped to the inside of the glass with one corner torn and stuck back
> down. A large open visitor's book with ruled columns, a ballpoint pen
> lying exactly parallel to its edge. A shallow drawer of numbered visitor
> passes, three compartments empty. Behind the desk a key board with forty
> hooks, two hooks holding small paper notes instead of keys. A stack of
> parcels three rows high beside the counter. A lunch box on a tea towel
> underneath. A folded canteen menu. A telephone with two lines. On the
> ceiling above the revolving door a small black dome camera, aimed at the
> desk rather than the door. Cool even daylight from the glass entrance,
> everything squared up and slightly worn.

Wer die Szene mit ihr darin will:

> The woman from the portraits sits behind the counter in three-quarter
> view, writing in the open book, not looking up.

---

## Danach

`kettner.js` erwartet die zehn Dateien bereits unter den Namen oben. Nur
das Raumbild fehlt noch in der Datei:

```js
raumbild: `personen/kettner/bilder/raum.webp`,
```

Bis dahin steht dort absichtlich nichts, dann bleibt der Streifen oben
leer statt tot.
