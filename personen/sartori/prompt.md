# Luigi Sartori — die Bilder

Aufbau und Regeln stehen in [PROMPTS.md](../../PROMPTS.md). Hier steht
nur, was bei ihm in die drei Lücken gehört, und darunter der fertige
Text zum Einsetzen.

## Was ihn ausmacht

| | |
|---|---|
| Warmer Akzent | **Moosgrün.** Bei Baumgartner das Ziegelrot, bei Reuter das Blaugrau, bei ihm das Grün des Halstuchs. Daran erkennt man ihn im Menü, bevor man den Namen liest. |
| Mitgeführter Gegenstand | das Geschirrtuch über der linken Schulter. Er legt es nie ab, auch nicht im Sitzen. |
| Wie er lacht | weich und mit dem ganzen Oberkörper, eine Hand flach auf der Brust |
| Wie er ärgerlich wird | gar nicht sichtbar ärgerlich, sondern **gekränkt**: Brauen hoch und schmerzlich statt zusammengezogen |

Das Letzte ist der wichtigste Unterschied zu den anderen zwei. Baumgartner
wird kalt, Reuter wird übertrieben höflich, Luigi wird traurig — und wer
das nicht erkennt, hält seinen siebten Ausdruck für Zustimmung.

### «BESCHREIBUNG»

> 61 years old, olive skin, thick grey hair combed straight back, deep
> laughter lines around the eyes, a grey-flecked moustache, no glasses,
> white double-breasted cook's jacket with the top button open, a moss
> green neckerchief, a green-checked kitchen towel over his left shoulder,
> broad shoulders, thick forearms.

### «LACHEN»

> shoulders shaking, one hand flat on his chest, head dropping forward

### «ÄRGER»

> brows raised and pained rather than drawn together, eyes searching the
> viewer's face, mouth slightly open as if he had been about to say
> something friendly and thought better of it

## Der fertige Prompt

Alles einsetzen, nichts umstellen — die Reihenfolge der zehn Felder
braucht das Schneidewerkzeug.

> A contact sheet of ten portrait panels in a 5 by 2 grid, all of the same
> person, illustrated in a flat vector-comic style: clean black line art,
> soft cel shading, muted natural palette, warm skin tones, plain light
> grey background in every panel, head-and-shoulders, front view, thin even
> gutters between panels, no text, no labels, no numbers, no border around
> the sheet.
>
> The person, identical in all ten panels: 61 years old, olive skin, thick
> grey hair combed straight back, deep laughter lines around the eyes, a
> grey-flecked moustache, no glasses, white double-breasted cook's jacket
> with the top button open, a moss green neckerchief, a green-checked
> kitchen towel over his left shoulder, broad shoulders, thick forearms.
>
> The panels differ only in facial expression and upper-body posture, in
> this order, left to right, top row first:
>
> 1 — attentive and still, mouth closed, looking at the viewer.
> 2 — a small warm closed-lip smile, eyes slightly narrowed, brows relaxed.
> 3 — laughing, eyes creased shut, shoulders shaking, one hand flat on his
> chest, head dropping forward.
> 4 — leaning in, eyebrows raised, alert and curious, lips slightly parted
> as if about to speak.
> 5 — thinking, eyes lowered and turned away, mouth closed, brows even.
> 6 — sceptical, brows drawn together, head tilted a fraction, lips pressed
> into a thin line.
> 7 — brows raised and pained rather than drawn together, eyes searching the
> viewer's face, mouth slightly open as if he had been about to say
> something friendly and thought better of it.
> 8 — closed off, chin lowered, body turned slightly away from the viewer,
> unreadable.
> 9 — unexpectedly moved, eyes wet and bright, a small reluctant smile,
> looking a little downward.
> 10 — standing, half turned away in three-quarter view, seen from the
> side, about to end the conversation.

## Seine Küche

Querformat 16:9, liegt im Spiel hinter dem Seitenkopf. Die Gegenstände
sind nicht beliebig: jeder einzelne kommt im Gespräch vor.

> Illustrated interior in the same flat vector-comic style as the
> portraits: clean black line art, soft cel shading, muted natural palette,
> no people, no text, 16:9.
>
> A large institutional kitchen after service, seen from the cook's side:
> a closed steel serving hatch with the shutter half down, a worn wax-cloth
> notebook with a rubber band around it lying beside the till, a large
> dishwasher with a handwritten DEFEKT sign taped to it and plastic tubs
> stacked next to it, a scuffed wooden stool behind the counter where it
> does not belong, two coffee cups on the pass, and a second apron hanging
> clean and folded by the sink.

## Danach

```bash
python werkzeug/kontaktbogen_schneiden.py personen/sartori/kontaktbogen.png sartori
```

Das legt die zehn Bilder in `personen/sartori/bilder/` und druckt die
Zeilen aus, die unter `stimmungen` einzutragen sind — sie stehen dort
schon, die Datei erwartet die Bilder unter genau diesen Namen. Das
Küchenbild kommt als `personen/sartori/bilder/raum.webp` daneben, und in
`sartori.js` wird `raumbild` darauf gesetzt; bis dahin steht dort
absichtlich nichts, dann bleibt der Streifen oben leer statt tot.
