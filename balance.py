# -*- coding: utf-8 -*-
"""Spielt das Gespraech tausendfach durch, mit drei Spielweisen.
   Die Zahlen kommen aus daten.js, die Rechenwege sind dieselben wie in
   spiel.html — hier nachgebaut, damit sich Gewichte durchprobieren
   lassen, ohne jedes Mal im Browser zu klicken.

   Ziel: Zufall gewinnt fast nie, gutes Zuhoeren gewinnt meistens,
   dazwischen bleibt es offen."""
import io, re, math, random, sys
import numpy as np
from itertools import product as kartesisch

QUELLE = io.open("daten.js", encoding="utf-8").read()

def block(key):
    a = QUELLE.index("\n" + key + ":")
    m = re.search(r"\n(?=[a-zA-Z_][a-zA-Z_0-9]*:)", QUELLE[a+len(key):])
    return QUELLE[a: a+len(key)+m.start()]

def gewichte(text):
    return {k: float(v) for k, v in re.findall(r"([A-Z]{1,3})\s*:\s*(-?\d+(?:\.\d+)?)", text)}

def fragen(key, feld):
    aus = []
    for roh in re.findall(r"\{\s*id:`[^`]+`,(.*?)\n\s*\]\}", block(key), re.S):
        antworten = [gewichte(m) for m in re.findall(feld + r":\s*\{([^}]*)\}", roh)]
        if antworten: aus.append(antworten)
    return aus

T = ["O","C","E","A","N"]; M = ["AUT","SIC","STA","ZUG","EFF"]
BF, MO = fragen("bigfive", "l"), fragen("motivfragen", "aff")
SHARP = float(re.search(r"sharpness:\s*([\d.]+)", QUELLE).group(1))
HZ = gewichte(re.search(r"z:\s*\{([^}]*)\}", QUELLE).group(1))
HM = gewichte(re.search(r"m:\s*\{([^}]*)\}", QUELLE).group(1))
ROLLE = gewichte(re.search(r"rollenprior:\s*\{([^}]*)\}", QUELLE).group(1))

PROD = []
for roh in re.split(r"\n  \{ id:`", block("produkte"))[1:]:
    PROD.append({"id": roh.split("`")[0],
                 "passt": gewichte(re.search(r"passt:\s*\{([^}]*)\}", roh).group(1)),
                 "spricht": re.findall(r"`(\w+)`", re.search(r"spricht:\[([^\]]*)\]", roh).group(1))})

ZUEGE = []
for zug in re.split(r"\n    \{ (?:frage|regie):", block("verkauf"))[1:]:
    opts = []
    for o in re.split(r"\n        \{ id:`", zug)[1:]:
        opts.append({"auto": float(re.search(r"auto:(-?\d+(?:\.\d+)?)", o).group(1)),
                     "aff": gewichte(re.search(r"aff:\s*\{([^}]*)\}", o).group(1)),
                     "an": "an:{" in o})
    if opts: ZUEGE.append(opts)

# ---------- Gewichte, die zur Debatte stehen ----------
G = dict(auto=2.5, treffer=0.35, fehlgriff=0.7, rueckgriff=1, produkt=2.5, privat=1.5,
         rtreffer=4, rnah=1, rdaneben=-3.5, frage=-1.5, frageauf=0.25)
START, JA, OFFEN = 30, 72, 48

STUFEN = np.array([-2,-1,0,1,2])
GLOCKE = {-2:0.10, -1:0.22, 0:0.36, 1:0.22, 2:0.10}
STATES = np.array(list(kartesisch(STUFEN, repeat=5)))     # (3125, 5)

def prior(dims, shift):
    p = np.ones(len(STATES))
    for d in range(5):
        g = np.array([GLOCKE[int(v)] for v in STATES[:, d]])
        p *= g * np.exp(shift.get(dims[d], 0.0) * STATES[:, d])
    return p / p.sum()

def lik(antworten, dims):
    lad = np.array([[a.get(d, 0.0) for d in dims] for a in antworten])   # (A,5)
    sc = SHARP * STATES @ lad.T                                          # (3125,A)
    sc -= sc.max(axis=1, keepdims=True)
    e = np.exp(sc)
    return (e / e.sum(axis=1, keepdims=True)).T                          # (A,3125)

LIK_BF = [lik(f, T) for f in BF]
LIK_MO = [lik(f, M) for f in MO]

def H(p):
    q = p[p > 0]; return float(-(q*np.log2(q)).sum())
def eig(pr, L):
    pa = L @ pr
    post = L * pr
    s = post.sum(axis=1, keepdims=True); s[s == 0] = 1
    post = post / s
    hp = float((pa * np.array([H(r) for r in post])).sum())
    return H(pr) - hp
def antwort_ziehen(antworten, wahr, dims):
    sc = np.array([SHARP*sum(wahr[d]*a.get(d,0.0) for d in dims) for a in antworten])
    e = np.exp(sc - sc.max()); pr = e/e.sum()
    return int(np.random.choice(len(pr), p=pr))
def modus(pr, d):
    m = np.array([pr[STATES[:, d] == v].sum() for v in STUFEN])
    return int(STUFEN[m.argmax()])

def partie(art):
    bereit = float(START); auf = 0.0
    for LIKS, ROH, wahr, dims in ((LIK_BF, BF, HZ, T), (LIK_MO, MO, HM, M)):
        pr = prior(dims, ROLLE if dims is T else {})
        offen = list(range(len(LIKS)))
        n = {"zufall": random.randint(0, 4), "mittel": 3, "gut": 6 if dims is T else 5, "perfekt": len(LIKS)}[art]
        n = min(n, len(offen))
        for _ in range(n):
            i = max(offen, key=lambda j: eig(pr, LIKS[j])) if art in ("gut","perfekt") else random.choice(offen)
            offen.remove(i)
            a = antwort_ziehen(ROH[i], wahr, dims)
            pr = LIKS[i][a] * pr; pr = pr / pr.sum()
            bereit += G["frage"]; auf += G["frageauf"]
        for d in range(5):
            tipp = random.choice(list(STUFEN)) if art == "zufall" else modus(pr, d)
            dist = abs(int(tipp) - int(wahr[dims[d]]))
            bereit += G["rtreffer"] if dist == 0 else (G["rnah"] if dist == 1 else G["rdaneben"])

    # Privater Teil: man fragt, solange man es sich leisten kann.
    # Preis je Fund haengt davon ab, wie gut man anknuepft.
    preis = {"perfekt": 1.0, "gut": 1.2, "mittel": 1.9, "zufall": 2.6}[art]
    grenze_vorsicht = {"perfekt": 9.0, "gut": 8.5, "mittel": 8.0, "zufall": 11.0}[art]
    fakten = 0
    while fakten < 4 and auf + preis <= grenze_vorsicht:
        auf += preis
        # Nicht jede Frage sitzt
        if random.random() < {"perfekt": 1.0, "gut": 0.85, "mittel": 0.6, "zufall": 0.35}[art]:
            fakten += 1
        else:
            auf += 1.0
        if auf >= 10: return -999      # rausgeworfen, kein Verkauf

    GUETE = {"zufall": 0.0, "mittel": 0.5, "gut": 0.85, "perfekt": 1.0}[art]
    best = max(PROD, key=lambda q: sum(q["passt"].get(m,0)*HM[m] for m in HM))
    p = best if random.random() < GUETE else random.choice(PROD)
    passung = sum(p["passt"].get(m,0)*HM[m] for m in HM)
    treffer = min(len(p["spricht"]), fakten)
    bereit += G["produkt"]*passung + G["privat"]*treffer*2

    for opts in ZUEGE:
        o = max(opts, key=lambda x: x["auto"]) if random.random() < GUETE else random.choice(opts)
        s = sum(o["aff"].get(m,0)*HM[m] for m in HM)
        bereit += G["auto"]*o["auto"] + (G["treffer"]*s if s >= 0 else G["fehlgriff"]*s)
        if o["an"] and fakten >= 2 and random.random() < GUETE: bereit += G["rueckgriff"]
    return bereit

def lauf(art, n):
    w = np.array([partie(art) for _ in range(n)])
    return (w >= JA).mean(), ((w >= OFFEN) & (w < JA)).mean(), w.mean()

if __name__ == "__main__":
    N = 400
    for arg in sys.argv[1:]:
        k, v = arg.split("=")
        if k == "n": N = int(v)
        else: G[k] = float(v)
    random.seed(7); np.random.seed(7)
    print("geparst: %d BF, %d Motiv, %d Waren, %d Zuege" % (len(BF), len(MO), len(PROD), len(ZUEGE)))
    print("Gewichte:", G, " n =", N)
    print("%-8s %7s %7s %8s" % ("", "kauft", "offen", "Mittel"))
    for art in ("zufall", "mittel", "gut", "perfekt"):
        ja, off, mi = lauf(art, N)
        print("%-8s %6.1f%% %6.1f%% %8.1f" % (art, 100*ja, 100*off, mi))
