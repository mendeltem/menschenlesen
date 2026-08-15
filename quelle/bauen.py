# -*- coding: utf-8 -*-
"""Baut index.html aus der Quelle.

   Aufruf aus dem Wurzelverzeichnis des Projekts:

       python quelle/bauen.py

   Was hineingeht:

       quelle/spiel.html   die Vorlage: Menue, Mechanik, Anzeige.
                           Zwei Platzhalter, sonst fertig.
       quelle/themes.css   die fuenfzehn Farbschemata
       personen/*.js       je Datei eine Person; alle werden per
                           script-Tag eingebunden

   Was herauskommt: index.html im Wurzelverzeichnis. Sonst nichts —
   welt.js und personen/ liegen daneben und werden nicht angefasst.

   Absichtlich kein fetch und kein Bundler: auf file:// verbietet der
   Browser fetch, und das Spiel soll sich auch per Doppelklick oeffnen
   lassen. Deshalb ist index.html eine einzige Datei plus drei
   script-Tags auf Nachbardateien.

   Bearbeitet wird immer quelle/spiel.html, nie index.html — die wird
   beim naechsten Bauen ueberschrieben."""
import io, os, re

HIER = os.path.dirname(os.path.abspath(__file__))
WURZEL = os.path.dirname(HIER)

vorlage = io.open(os.path.join(HIER, "spiel.html"), encoding="utf-8").read()
themes = io.open(os.path.join(HIER, "themes.css"), encoding="utf-8").read()

personen = sorted(f for f in os.listdir(os.path.join(WURZEL, "personen"))
                  if f.endswith(".js"))
tags = "\n".join('<script src="personen/%s"></script>' % f for f in personen)

for platz in ("/*__THEMES__*/", "/*__PERSONEN__*/"):
    assert platz in vorlage, "Platzhalter fehlt in spiel.html: " + platz

fertig = (vorlage.replace("/*__THEMES__*/", themes)
                 .replace("/*__PERSONEN__*/", tags))

ziel = os.path.join(WURZEL, "index.html")
io.open(ziel, "w", encoding="utf-8", newline="\n").write(fertig)

print("index.html   %5d KB" % (os.path.getsize(ziel) // 1024))
print("Farbschemata %5d" % len(re.findall(r'body\[data-theme="', fertig)))
for f in personen:
    print("Person       %s" % f)
