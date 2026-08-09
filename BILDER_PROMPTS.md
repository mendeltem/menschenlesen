# Bilder für das Gespräch

**Stand: alle zehn Stimmungen und der Raum liegen in `bilder/`.** Sie
stammen aus deinem Kontaktbogen `baumgartner.png`, den ich vermessen und in
Einzeldateien zerlegt habe (vier Spalten à 466 px, drei Reihen, dazu das
Büro). Die beiden letzten Felder des Bogens trugen falsche Beschriftungen:
das dritte in der unteren Reihe ist die Büroszene und liegt jetzt als
`raum.webp`, das vierte ist ein Profil vor der Tafel und liegt ungenutzt als
`tobias_tafel.webp` daneben. Das leere Büro vom Kopf des Bogens liegt als
`raum_objekte.webp` bereit, falls du lieber das statt der Szene willst.

Das Spiel sucht die Dateien im Ordner `bilder/` neben `gespraech.html`.
Fehlt eine, nimmt es das eingebettete Grundporträt und zeigt die Stimmung
nur als Text. Es geht also nichts kaputt, wenn du eine austauschst oder
löschst.

Alle Bilder müssen **dieselbe Person, derselbe Stil** sein. Deshalb steht
in jedem Prompt derselbe Beschreibungsblock. Am zuverlässigsten wird es,
wenn du das vorhandene `baumgartner.webp` als Referenzbild mitgibst und
darunter nur den Stimmungssatz änderst.

---

## Der feste Block

> Illustrated portrait in the same flat vector-comic style as the reference:
> clean black line art, soft flat shading, muted natural palette, plain light
> grey background (#e2e2e0), centred head-and-shoulders, front view, square
> 1:1, no text, no border.
>
> Same man in every image: 52 years old, pale skin with dense freckles across
> nose and cheeks, messy uncombed steel-grey hair, thick amber-brown
> rectangular glasses, sideburns and shaved chin, dark grey blazer over a
> brick-red shirt, large over-ear headphones resting around his neck.

## Die Stimmungen

Dateiname → der Satz, den du unter den festen Block setzt.

| Datei | Stimmungssatz |
|---|---|
| `bilder/tobias_neutral.webp` | Expression: neutral, attentive, mouth relaxed and closed, looking straight at the viewer. |
| `bilder/tobias_freundlich.webp` | Expression: a small warm closed-mouth smile, eyes slightly narrowed, relaxed brows. |
| `bilder/tobias_amuesiert.webp` | Expression: laughing openly, head tilted back a little, eyes creased shut, wide open smile showing teeth. |
| `bilder/tobias_interessiert.webp` | Expression: leaning forward, chin slightly lowered, eyebrows raised, alert and curious, lips parted as if about to speak. |
| `bilder/tobias_nachdenklich.webp` | Expression: thinking, looking away to the side and slightly up, one hand touching his chin, mouth closed. |
| `bilder/tobias_skeptisch.webp` | Expression: sceptical, one eyebrow raised high, the other lowered, mouth pressed into a flat line, head tilted a fraction. |
| `bilder/tobias_gereizt.webp` | Expression: irritated, jaw set, brows drawn together, lips tight, staring directly and coldly at the viewer. |
| `bilder/tobias_verschlossen.webp` | Expression: closed off, leaning back away from the viewer, arms folded across his chest, chin lowered, unreadable. |
| `bilder/tobias_geruehrt.webp` | Expression: unexpectedly touched, softened gaze, eyes slightly wet, a small crooked reluctant smile, looking a little downward. |
| `bilder/tobias_abweisend.webp` | Expression: standing up and turning away, seen from a three-quarter back angle, head turned back over his shoulder for a last look, headphones being pulled up over his ears. |

## Der Raum

`bilder/raum.webp` — Querformat 16:9, wird als Kopfbild über dem Gespräch
gezeigt.

> Illustrated interior in the same flat vector-comic style as the reference
> portraits: clean black line art, soft flat shading, muted natural palette,
> no people, no text, 16:9.
>
> A statistician's office on the fourth floor of an older institute building.
> One window onto a narrow courtyard, grey daylight. A desk buried under
> stacks of printouts, two of them sliding sideways. A laptop, a single pen.
> A half-wiped blackboard on the side wall with three lines of formulas
> nobody erased. A visitor's chair with more paper on the floor beside it.
> A very old coffee machine on a filing cabinet. Bookshelves with books in
> several languages, lying and standing mixed. Warm and lived-in, not tidy.

## Die anderen neunzehn Personen

Falls du später wieder mehrere Personen willst: dasselbe Rezept. Nimm die
Beschreibung aus `look` der jeweiligen Person, setze sie an die Stelle des
festen Blocks und hänge dieselben zehn Stimmungssätze an. Die Dateien heißen
dann `bilder/<kennung>_<stimmung>.webp`; die Kennung trägst du im Spiel bei
der Person unter `bildkennung` ein.
