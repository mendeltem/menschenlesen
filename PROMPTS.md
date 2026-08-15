# Der Personengenerator

Ein Prompt, ein Werkzeug, beliebig viele Menschen. Aus einem Satz
Beschreibung wird ein Kontaktbogen mit zehn Stimmungen, aus dem Bogen
werden zehn Dateien, und aus den Dateien wird eine spielbare Person.

    1. Beschreibung ausfüllen        (unten, drei Zeilen Arbeit)
    2. Prompt laufen lassen          → ein Bogen, 5 × 2 Felder
    3. python werkzeug/kontaktbogen_schneiden.py bogen.png <kennung>
                                     → bilder/<kennung>_*.webp
    4. Pfade in die Personendatei    (das Skript druckt sie fertig aus)

---

## Der Prompt

Alles ist fest außer den zwei Stellen in `«»`. Die Reihenfolge der zehn
Felder darf sich nicht ändern — das Schneidewerkzeug verlässt sich darauf.

> A contact sheet of ten portrait panels in a 5 by 2 grid, all of the same
> person, illustrated in a flat vector-comic style: clean black line art,
> soft cel shading, muted natural palette, warm skin tones, plain light
> grey background in every panel, head-and-shoulders, front view, thin even
> gutters between panels, no text, no labels, no numbers, no border around
> the sheet.
>
> The person, identical in all ten panels: «BESCHREIBUNG»
>
> The panels differ only in facial expression and upper-body posture, in
> this order, left to right, top row first:
>
> 1 — attentive and still, mouth closed, looking at the viewer.
> 2 — a small warm closed-lip smile, eyes slightly narrowed, brows relaxed.
> 3 — laughing, eyes creased shut. «LACHEN»
> 4 — leaning in, eyebrows raised, alert and curious, lips slightly parted
> as if about to speak.
> 5 — thinking, eyes lowered and turned away, mouth closed, brows even.
> 6 — sceptical, brows drawn together, head tilted a fraction, lips pressed
> into a thin line.
> 7 — irritated. «ÄRGER»
> 8 — closed off, chin lowered, body turned slightly away from the viewer,
> unreadable.
> 9 — unexpectedly moved, eyes wet and bright, a small reluctant smile,
> looking a little downward.
> 10 — standing, half turned away in three-quarter view, seen from the
> side, about to end the conversation.

### «BESCHREIBUNG»

Alter, Haar, Haut, Brille, Kleidung, ein mitgeführter Gegenstand. Fünf
bis acht Angaben reichen; mehr macht es nicht ähnlicher, nur enger. Zwei
Beispiele aus dem Spiel:

> 52 years old, pale skin with dense freckles, messy uncombed steel-grey
> hair, thick amber-brown rectangular glasses, dark grey blazer over a
> brick-red shirt, large over-ear headphones around his neck.

> 38 years old, fair skin, dark hair in a chin-length bob, dark brows,
> small silver studs, a blue-grey knitted jumper over a patterned collared
> shirt, no make-up, narrow-shouldered.

**Ein warmer Akzent je Person**, und bei jeder ein anderer — bei ihm das
Ziegelrot, bei ihr das Blaugrau. Daran erkennt man sie im Menü, bevor man
den Namen liest.

### «LACHEN» und «ÄRGER»

Die zwei Stellen, an denen das Temperament sichtbar wird. Alles andere
darf gleich bleiben, diese zwei nicht — sonst reagieren alle Personen
gleich, und das Spiel besteht ja gerade darin, dass sie es nicht tun.

| | «LACHEN» | «ÄRGER» |
|---|---|---|
| laut, nach außen | head tilted back, wide open smile showing teeth | jaw set, brows drawn together, staring directly and coldly at the viewer |
| zurückhaltend, nach innen | covering the mouth with the back of one hand, shoulders pulled up | rigidly polite: jaw tight, high colour on both cheeks, eyes cast down, chin level, annoyance held in |
| trocken, spöttisch | one corner of the mouth only, shoulders still | a single raised eyebrow and a very long pause, nothing else moving |
| weich, offen | shoulders shaking, one hand flat on the chest | brows up and pained rather than angry, eyes searching the viewer's face |

---

## Die Regel, die man nicht brechen darf

> **Das Aussehen zeigt Beruf und Gewohnheit. Die Stimmungen zeigen die
> Laune. Die wahren Werte zeigt nichts davon.**

Wer der Ängstlichen ein ängstliches Gesicht malt, hat das Spiel kaputt
gemacht: dann liest man das Profil vom Porträt ab und muss nicht mehr
fragen. Aus den Werten holt man **Gegenstände und Gewohnheiten**, die
mehrdeutig genug sind — die kommen in den Raum, nicht ins Gesicht:

| Wert | Nicht ins Bild | Aber das schon |
|---|---|---|
| hohe Gewissenhaftigkeit | verkniffener Blick | Werkzeug parallel gelegt, beschriftete Kästen |
| niedrige Gewissenhaftigkeit | schludrige Haltung | Papierstapel auf dem Besucherstuhl, drei Tassen |
| hohe Offenheit | verträumter Blick | drei angefangene Bücher, ein fachfremdes Werkzeug |
| starke Introversion | trauriges Gesicht | Einzelarbeitsplatz, Tür halb zu |
| hoher Neurotizismus | Sorgenfalten | doppelte Sicherung: zweites Notizbuch, Ersatzteil |
| hohe Verträglichkeit | Dauerlächeln | zwei Tassen, obwohl nur eine gebraucht wird |
| will Sicherheit | — | dasselbe Werkzeug seit zwanzig Jahren, repariert statt ersetzt |
| will dazugehören | — | Gruppenfoto, ein zweiter Platz am Tisch |
| will Geltung | — | Urkunde gerade gehängt, Namensschild in Sichthöhe |

Die Stimmungen dürfen dagegen alles: sie erscheinen erst *nach* einer
Antwort und sind deshalb keine Vorschau, sondern eine Reaktion.

---

## Ist schon ein Bild da

Dann braucht es keine Beschreibung mehr — das Bild ist die Beschreibung,
und die Ähnlichkeit hält von selbst:

> Use the attached portrait as the exact reference for the character. Keep
> identity, face shape, hair, skin tone, accessories, clothing, colours,
> line style, shading, framing and the plain light grey background
> identical in every panel. Do not restyle, do not age the person, do not
> change the palette, do not add anything they are not already wearing.
>
> Produce a contact sheet of ten head-and-shoulders panels in a 5 by 2
> grid, thin even gutters, no text, no labels, no numbers. The panels
> differ only in facial expression and upper-body posture, in this order,
> left to right, top row first:
>
> *(dieselben zehn Zeilen wie oben)*

---

## Der Raum

Eigener Prompt, Querformat 16:9, liegt im Spiel hinter dem Seitenkopf.
Hierhin gehören die Gegenstände aus der Tabelle oben.

> Illustrated interior in the same flat vector-comic style as the
> portraits: clean black line art, soft cel shading, muted natural palette,
> no people, no text, 16:9.
>
> «WO DIESE PERSON ARBEITET, mit drei bis fünf konkreten Gegenständen, die
> ihre Gewohnheiten zeigen»

---

## Das Schneiden

    python werkzeug/kontaktbogen_schneiden.py bogen.png annika

Das Werkzeug findet die Trennlinien selbst — es sucht die durchgehend
dunklen Spalten und Zeilen. Findet es keine, teilt es gleichmäßig. Mit
`--pruefen` zeigt es nur an, wo es schneiden würde, ohne etwas zu
schreiben; `--rand N` schneidet je Seite N Pixel mehr weg, falls noch
Striche stehen bleiben. Zum Schluss druckt es die Zeilen aus, die in der
Personendatei unter `stimmungen` stehen müssen.
