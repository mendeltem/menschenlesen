# -*- coding: utf-8 -*-
"""Prueft eine Personendatei, bevor sie ins Spiel geht.

       python werkzeug/person_pruefen.py reuter

   Drei Fragen, die man sonst erst im Spiel merkt:

   1. Ist alles da? Fehlt ein Abschnitt, faellt das Spiel spaeter an
      einer unverstaendlichen Stelle um.
   2. Zeigen die Bilder ins Leere? Fehlende Dateien sind erlaubt — das
      Spiel faellt auf das Grundportraet zurueck —, aber man will es
      wissen.
   3. Laesst sich die Person ueberhaupt lesen? Wenn ein Merkmal nie
      getroffen wird, ist das keine Schwierigkeit, sondern eine kaputte
      Rueckmeldung. Und traegt in jedem Zustand genau ein Weg, ist einer
      eine Mine und einer ein Muenzwurf?"""
import io, os, re, subprocess, sys

PFLICHT = ["id", "kurz", "theme", "hero", "rollenprior", "stimmungen", "raumbild",
           "baum", "kennenfrage", "uebergang1", "bigfive", "motivfragen", "privat",
           "privatfragen", "hinausgeworfen", "zustaende", "reaktion",
           "wiedersehen", "abschied", "abfuhr", "verkauf"]
STIMMUNGEN = ["neutral", "freundlich", "amuesiert", "interessiert", "nachdenklich",
              "skeptisch", "gereizt", "verschlossen", "geruehrt", "abweisend"]


def main():
    if len(sys.argv) < 2:
        sys.exit("Aufruf: python werkzeug/person_pruefen.py <kennung>")
    wer = sys.argv[1]
    # Jede Person hat einen Ordner; wie die Datei darin heisst, ist egal.
    ordner = os.path.join("personen", wer)
    if not os.path.isdir(ordner):
        sys.exit("Kein Ordner personen/%s" % wer)
    dateien = sorted(f for f in os.listdir(ordner) if f.endswith(".js"))
    if not dateien:
        sys.exit("Keine Personendatei in " + ordner)
    datei = os.path.join(ordner, dateien[0])
    s = io.open(datei, encoding="utf-8").read()
    fehler = []

    print("=== %s ===" % datei)

    # 1 · Vollstaendigkeit
    fehlt = [k for k in PFLICHT if not re.search(r"^%s:" % k, s, re.M)]
    print("Abschnitte  %s" % ("alle da" if not fehlt else "FEHLEN: " + ", ".join(fehlt)))
    if fehlt: fehler.append("Abschnitte fehlen")

    # Die Wege innerhalb eines Zustands duerfen nicht als Zustaende zaehlen:
    # sie stehen eingerueckt, die Zustaende selbst am Zeilenanfang.
    for k, erwartet, muster in (("bigfive", 9, r"\n  \{ id:`"),
                                ("motivfragen", 7, r"\n  \{ id:`"),
                                ("zustaende", 10, r"\n\{ id:`\w+`, titel:")):
        m = re.search(r"^%s: \[(.*?)^\],?$" % k, s, re.S | re.M)
        n = len(re.findall(muster, m.group(1))) if m else 0
        print("%-11s %d gefunden%s" % (k, n, "" if n >= erwartet else "  (üblich sind %d)" % erwartet))

    fehlende_stimmung = [x for x in STIMMUNGEN if not re.search(r"\b%s:\s*\{" % x, s)]
    if fehlende_stimmung:
        print("Stimmungen  FEHLEN: " + ", ".join(fehlende_stimmung))
        fehler.append("Stimmungen fehlen")
    else:
        print("Stimmungen  alle zehn belegt")

    # 2 · Bilder
    wege = sorted(set(re.findall(r"`(bilder/[^`]+)`", s)))
    fehlt_b = [w for w in wege if not os.path.exists(w)]
    print("Bilder      %d genannt, %d vorhanden%s"
          % (len(wege), len(wege) - len(fehlt_b),
             "" if not fehlt_b else "\n            fehlen: " + ", ".join(fehlt_b)))

    # 3 · Lesbarkeit und Lage, gemessen
    print("\n--- gemessen ---")
    code = (
        "import random, numpy as np, collections, re, sys\n"
        "sys.argv = ['x', '__WER__']\n"
        "import balance as B\n"
        "random.seed(4); np.random.seed(4)\n"
        "def q(dims, LIKS, ROH, wahr, kurve, n, raumn, laeufe=400):\n"
        "    t = collections.Counter()\n"
        "    for _ in range(laeufe):\n"
        "        pr = B.prior(dims, B.ROLLE if raumn==5 else {}, kurve)\n"
        "        offen = list(range(len(LIKS)))\n"
        "        for _ in range(min(n, len(offen))):\n"
        "            i = max(offen, key=lambda j: B.eig(pr, LIKS[j])); offen.remove(i)\n"
        "            a = B.antwort_ziehen(ROH[i], wahr, dims); pr = LIKS[i][a]*pr; pr /= pr.sum()\n"
        "        for d, nm in enumerate(dims): t[(nm, B.modus(pr,d,raumn)-int(wahr[nm]))] += 1\n"
        "    return {nm: t[(nm,0)]/laeufe for nm in dims}\n"
        "r = q(B.T, B.LIK_BF, B.BF, B.HZ, B.GLOCKE, 6, 5)\n"
        "print('Merkmale nach sechs Fragen  ' + '  '.join('%s(%+d) %3.0f%%' % (nm, B.HZ[nm], 100*r[nm]) for nm in B.T))\n"
        "schwach = [nm for nm in B.T if r[nm] < 0.15]\n"
        "if schwach: print('  schwer lesbar: ' + ', '.join(schwach) + '  — dort trifft man fast nie')\n"
        "r = q(B.M, B.LIK_MO, B.MO, B.HM, B.MGLOCKE, 5, 2)\n"
        "print('Waagen nach fünf Fragen     ' + '  '.join('%s(%+d) %3.0f%%' % (nm, B.HM[nm], 100*r[nm]) for nm in B.M))\n"
        "print('\\nWaren gegen diese Person    ' + '  '.join('%s %+.1f' % (p['id'], sum(p['passt'].get(m,0)*B.HM[m] for m in B.HM)) for p in B.PROD))\n"
        "if not any(sum(p['passt'].get(m,0)*B.HM[m] for m in B.HM) > 0.8 for p in B.PROD):\n"
        "    print('  ACHTUNG: keine Ware passt — diese Person kann nichts kaufen')\n"
        "blok = B.QUELLE[B.QUELLE.index('zustaende: ['):B.QUELLE.index('reaktion: {')]\n"
        "zids = [(m.start(), m.group(1)) for m in re.finditer(r'\\{ id:`(\\w+)`, titel:', blok)]\n"
        "print('\\nLage: Wert je Weg (ein Treffer, eine Mine, ein Münzwurf wären ideal)')\n"
        "akt = None\n"
        "for m in re.finditer(r'\\{ id:`(\\w+)`, t:.*?liest:\\{([^}]*)\\}', blok, re.S):\n"
        "    z = [n for p, n in zids if p < m.start()][-1]\n"
        "    v = sum(float(x)*B.HZ[k] for k, x in re.findall(r'([A-Z]+):(-?[\\d.]+)', m.group(2)) if k in B.HZ)\n"
        "    if z != akt: print(); print('  %-12s' % z, end=''); akt = z\n"
        "    print(' %s %+.1f ' % (m.group(1), v), end='')\n"
        "print()\n").replace("__WER__", wer)
    subprocess.run([sys.executable, "-c", code])

    print("\n--- Balance ---")
    subprocess.run([sys.executable, "balance.py", wer, "n=200"])

    if fehler:
        print("\nNicht spielbereit: " + "; ".join(fehler))
        sys.exit(1)
    print("\nVollständig.")


if __name__ == "__main__":
    main()
