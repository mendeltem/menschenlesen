# -*- coding: utf-8 -*-
"""Zerlegt einen Kontaktbogen in die zehn Stimmungsbilder einer Person.

   Aufruf aus dem Wurzelverzeichnis des Projekts:

       python werkzeug/kontaktbogen_schneiden.py bogen.png reuter

   Daraus werden personen/reuter/bilder/neutral.webp bis abweisend.webp,
   in der Reihenfolge, in der die Felder im Prompt stehen. Die Kennung
   ist der Ordnername der Person; ein Praefix im Dateinamen braucht es
   nicht, der Ordner sagt schon, wer gemeint ist.

   Die Trennlinien findet das Skript selbst: es sucht die Spalten und
   Zeilen, die ueber die ganze Breite beziehungsweise Hoehe dunkel sind,
   und schneidet dort. Findet es keine, teilt es gleichmaessig — das
   passt fuer Boegen ohne sichtbare Stege.

       --spalten / --reihen   Raster erzwingen (Standard 5 und 2)
       --senkrecht a,b,c      Schnittkanten selbst angeben. Noetig,
       --waagerecht a,b       wenn der Generator Beschriftungen mit
                              aufs Blatt gezeichnet hat: dann liegt
                              zwischen den Reihen kein Steg, sondern
                              Text, und die Stegsuche schneidet
                              mitten hinein. Je Feld zwei Zahlen,
                              also linke und rechte Kante:
                                --senkrecht 30,555,587,1113,...
                                --waagerecht 72,675,812,1452
       --rand N               N Pixel je Seite zusaetzlich wegschneiden
       --pruefen              nur anzeigen, wo geschnitten wuerde
"""
import argparse, os, sys
from PIL import Image

STIMMUNGEN = ["neutral", "freundlich", "amuesiert", "interessiert", "nachdenklich",
              "skeptisch", "gereizt", "verschlossen", "geruehrt", "abweisend"]


def stege(werte, anzahl, laenge):
    """Sucht die Mitten der dunklen Streifen, die die Felder trennen.

       werte  Helligkeit je Spalte beziehungsweise Zeile
       anzahl wie viele Felder es in dieser Richtung gibt

       Zurueck kommen die anzahl+1 Schnittstellen, oder None, wenn sich
       nicht genau anzahl-1 Stege finden lassen."""
    if anzahl < 2:
        return [0, laenge]
    schwelle = min(werte) + (sum(werte) / len(werte) - min(werte)) * 0.35
    dunkel = [i for i, v in enumerate(werte) if v < schwelle]
    if not dunkel:
        return None
    # benachbarte dunkle Spalten zu Gruppen zusammenfassen
    gruppen, lauf = [], [dunkel[0]]
    for i in dunkel[1:]:
        if i - lauf[-1] <= 2:
            lauf.append(i)
        else:
            gruppen.append(lauf); lauf = [i]
    gruppen.append(lauf)
    # Stege am Rand zaehlen nicht mit
    innen = [g for g in gruppen if 0.02 * laenge < sum(g) / len(g) < 0.98 * laenge]
    if len(innen) != anzahl - 1:
        return None
    mitten = [sum(g) / len(g) for g in innen]
    schnitte = [0] + [int(round(m)) for m in mitten] + [laenge]
    # Gegenprobe: ein Kontaktbogen hat gleich grosse Felder. Sind die
    # gefundenen sehr verschieden, war das kein Steg, sondern Bildinhalt —
    # dann lieber gleichmaessig teilen als still falsch schneiden.
    breiten = [schnitte[i+1] - schnitte[i] for i in range(anzahl)]
    if min(breiten) < 0.85 * (laenge / anzahl):
        return None
    return schnitte


def helligkeit(bild, richtung):
    """Mittlere Helligkeit je Spalte (0) oder je Zeile (1)."""
    grau = bild.convert("L")
    b, h = grau.size
    px = grau.load()
    if richtung == 0:
        return [sum(px[x, y] for y in range(0, h, max(1, h // 200))) /
                len(range(0, h, max(1, h // 200))) for x in range(b)]
    return [sum(px[x, y] for x in range(0, b, max(1, b // 200))) /
            len(range(0, b, max(1, b // 200))) for y in range(h)]


def gleichmaessig(laenge, anzahl):
    return [round(i * laenge / anzahl) for i in range(anzahl + 1)]


def main():
    p = argparse.ArgumentParser(description="Kontaktbogen in Stimmungsbilder zerlegen")
    p.add_argument("bogen", help="die erzeugte Rasterdatei")
    p.add_argument("kennung", help="Ordnername der Person, etwa reuter")
    p.add_argument("--spalten", type=int, default=5)
    p.add_argument("--reihen", type=int, default=2)
    p.add_argument("--rand", type=int, default=6, help="Pixel je Seite zusätzlich wegschneiden")
    p.add_argument("--senkrecht", help="Kantenpaare je Spalte, mit Komma getrennt")
    p.add_argument("--waagerecht", help="Kantenpaare je Reihe, mit Komma getrennt")
    p.add_argument("--ziel", default=None, help="Standard: personen/<kennung>/bilder")
    p.add_argument("--pruefen", action="store_true", help="nur anzeigen, nichts schreiben")
    a = p.parse_args()
    if a.ziel is None:
        a.ziel = os.path.join("personen", a.kennung, "bilder")

    if not os.path.exists(a.bogen):
        sys.exit("Datei nicht gefunden: " + a.bogen)
    bild = Image.open(a.bogen).convert("RGB")
    b, h = bild.size
    felder = a.spalten * a.reihen
    if felder != len(STIMMUNGEN):
        print("Achtung: %d Felder, aber %d Stimmungen — es werden nur die ersten %d benannt."
              % (felder, len(STIMMUNGEN), min(felder, len(STIMMUNGEN))))

    print("Bogen %dx%d, Raster %dx%d" % (b, h, a.spalten, a.reihen))
    def kanten(text, anzahl, name):
        z = [int(v) for v in text.split(",")]
        if len(z) != 2 * anzahl:
            sys.exit("%s: %d Zahlen erwartet (zwei je Feld), %d bekommen"
                     % (name, 2 * anzahl, len(z)))
        return list(zip(z[0::2], z[1::2]))

    if a.senkrecht or a.waagerecht:
        if not (a.senkrecht and a.waagerecht):
            sys.exit("--senkrecht und --waagerecht gehören zusammen")
        sx = kanten(a.senkrecht, a.spalten, "--senkrecht")
        sy = kanten(a.waagerecht, a.reihen, "--waagerecht")
        print("  Kanten von Hand:", sx, sy)
        kaesten = [(sx[c][0], sy[r][0], sx[c][1], sy[r][1])
                   for r in range(a.reihen) for c in range(a.spalten)]
    else:
        x = stege(helligkeit(bild, 0), a.spalten, b) or gleichmaessig(b, a.spalten)
        y = stege(helligkeit(bild, 1), a.reihen, h) or gleichmaessig(h, a.reihen)
        print("  Schnitte senkrecht:", x)
        print("  Schnitte waagerecht:", y)
        kaesten = [(x[c], y[r], x[c+1], y[r+1])
                   for r in range(a.reihen) for c in range(a.spalten)]

    os.makedirs(a.ziel, exist_ok=True)
    for n, roh in enumerate(kaesten):
        if n >= len(STIMMUNGEN):
            break
        kasten = (roh[0] + a.rand, roh[1] + a.rand, roh[2] - a.rand, roh[3] - a.rand)
        name = os.path.join(a.ziel, "%s.webp" % STIMMUNGEN[n])
        if a.pruefen:
            print("  %-42s %s  %dx%d" % (name, kasten,
                                         kasten[2]-kasten[0], kasten[3]-kasten[1]))
        else:
            bild.crop(kasten).save(name, "WEBP", quality=88, method=6)
            print("  %-42s %d KB" % (name, os.path.getsize(name) // 1024))
    if not a.pruefen:
        print("Fertig. In der Personendatei unter stimmungen eintragen:")
        for s in STIMMUNGEN:
            print("  %-13s bild:`%s/%s.webp`" % (s + ":", a.ziel.replace(os.sep, "/"), s))


if __name__ == "__main__":
    main()
