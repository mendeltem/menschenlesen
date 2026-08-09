# Musik

Das Spiel sucht fünf Dateien im Ordner `musik/` neben `gespraech.html`:

| Datei | Läuft, wenn … |
|---|---|
| `musik/menu.mp3` | ein Fenster offen ist — Koffer oder „Was das Modell tut" |
| `musik/shop.mp3` | du im Laden bist |
| `musik/ingame.mp3` | das Gespräch läuft, von der Ankunft bis zum letzten Zug |
| `musik/won.mp3` | er gekauft hat |
| `musik/verloren.mp3` | er nicht gekauft hat oder dich rausgeworfen hat |

Alle Spuren laufen in Endlosschleife.

Fehlt eine Datei, bleibt es an der Stelle still — das Spiel läuft normal
weiter. Der Wechsel wird über anderthalb Sekunden überblendet, die
Lautstärke liegt bei 35 Prozent. Oben rechts schaltet **♪** die Musik ab
und an; die Wahl bleibt gespeichert.

Browser lassen Ton erst zu, nachdem du etwas angeklickt hast. Deshalb
beginnt die Musik nicht beim Laden, sondern beim ersten Klick.

`.ogg` oder `.m4a` gehen genauso — dann den Dateinamen oben im Skript bei
`const MUSIK = {…}` anpassen.

---

## Was passt

Airline Tycoon (1998) hat Michael Hoenig geschrieben: aufgeräumter
Nineties-Bürojazz, Fusion mit viel Rhodes-Piano, gezupftem Bass, weichen
Bläsersätzen und einer Prise Bossa — freundlich, geschäftig, nie
aufdringlich. Genau die Machart, die man stundenlang laufen lassen kann,
ohne dass sie sich in den Vordergrund drängt.

**Wonach du suchst.** Die brauchbarsten Schlagworte bei
Bibliotheken für freie Musik: *lounge jazz*, *smooth jazz*, *jazz funk*,
*bossa nova*, *elevator music*, *corporate retro*, *90s business* und
*Rhodes*. Für die drei Spuren würde ich staffeln:

- **Menü** — ruhig und schleifenfest, 80–95 bpm, Rhodes und Bass, kaum
  Melodie. Es läuft, während du liest.
- **Gespräch** — mittleres Tempo, 95–110 bpm, leichte Perkussion, eine
  wiederkehrende Figur. Es soll Betrieb suggerieren, ohne zu drängen.
- **Verkauf** — dichter und eine Spur schneller, 110–125 bpm, Bläser oder
  eine Bassline mit Zug. Hier steht etwas auf dem Spiel.

**Wo du suchst.** Freie Musik mit klarer Lizenz gibt es unter anderem bei
Free Music Archive, Incompetech (Kevin MacLeod), Pixabay Music und
Uppbeat. Achte auf die Lizenz und darauf, ob eine Namensnennung verlangt
wird — bei einem Spiel, das du weitergibst, ist das der Unterschied
zwischen „darf ich" und „darf ich nicht".

**Selbst erzeugen** geht auch: Suno oder Udio nehmen einen Prompt wie
*„instrumental 90s lounge jazz, Fender Rhodes, walking bass, soft brass
stabs, light bossa groove, loopable, no vocals, warm and businesslike"*.
Das trifft die Airline-Tycoon-Ecke recht gut, und die Rechtelage ist
eindeutig, weil du der Auftraggeber bist.

Was ich dir nicht liefern kann, sind die Stücke selbst — Musik erzeugen
gehört nicht zu dem, was mir hier zur Verfügung steht.
