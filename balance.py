# -*- coding: utf-8 -*-
"""Spielt die Besuche tausendfach durch, mit vier Spielweisen.

   Die Zahlen kommen aus welt.js und personen/, die Gewichte aus
   spiel.html, die Rechenwege sind dieselben wie im Spiel — hier
   nachgebaut, damit sich Gewichte durchprobieren lassen, ohne jedes
   Mal im Browser zu klicken. Weil alles aus dem Spiel selbst gelesen
   wird, koennen Messung und Wirklichkeit nicht auseinanderlaufen.

   Ziel: wer blind draufloslaeuft, kommt nie zum Abschluss; wer zuhoert,
   braucht zwei bis drei Besuche; und wer die falsche Ware hinlegt,
   verkauft sie auch dem besten Freund nicht."""
import io, re, math, random, sys
import numpy as np
from itertools import product as kartesisch

QUELLE = (io.open("welt.js", encoding="utf-8").read() + "\n"
          + io.open("personen/baumgartner.js", encoding="utf-8").read())

def block(key):
    a = QUELLE.index("\n" + key + ":")
    m = re.search(r"\n(?=[a-zA-Z_][a-zA-Z_0-9]*:)", QUELLE[a+len(key):])
    return QUELLE[a: a+len(key)+m.start()] if m else QUELLE[a:]

def gewichte(text):
    return {k: float(v) for k, v in re.findall(r"([A-Z]{1,3})\s*:\s*(-?\d+(?:\.\d+)?)", text)}

def fragen(key, feld):
    aus = []
    for roh in re.findall(r"\{\s*id:`[^`]+`,(.*?)\n\s*\]\}", block(key), re.S):
        antworten = [gewichte(m) for m in re.findall(feld + r":\s*\{([^}]*)\}", roh)]
        if antworten: aus.append(antworten)
    return aus

T = ["O","C","E","A","N"]          # fuenf Merkmale
M = ["FRE","GEL"]                  # zwei Waagen
BF, MO = fragen("bigfive", "l"), fragen("motivfragen", "aff")
SHARP = float(re.search(r"sharpness:\s*([\d.]+)", QUELLE).group(1))
HZ = gewichte(re.search(r"z:\s*\{([^}]*)\}", QUELLE).group(1))
HM = gewichte(re.search(r"m:\s*\{\s*(FRE[^}]*)\}", QUELLE).group(1))
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
        st = re.search(r"stimmung:`(\w+)`", o)
        opts.append({"auto": float(re.search(r"auto:(-?\d+(?:\.\d+)?)", o).group(1)),
                     "aff": gewichte(re.search(r"aff:\s*\{([^}]*)\}", o).group(1)),
                     "an": "an:{" in o,
                     "stimmung": st.group(1) if st else "neutral"})
    if opts: ZUEGE.append(opts)

# ---------- Was gerade bei ihm los ist ----------
ZUST = []
for roh in re.split(r"\n\{ id:`", block("zustaende"))[1:]:
    bed = re.search(r"bedarf:\{[^}]*braucht:\{([^}]*)\}", roh)
    fr = []
    for f in re.split(r"\n    \{ id:`", roh)[1:]:
        li = re.search(r"liest:\{([^}]*)\}", f)
        if not li: continue
        gut, _, zu = f.partition("\n      zu:")
        def hol(teil, was, standard):
            m = re.search(was, teil)
            return m.group(1) if m else standard
        fr.append({"liest": gewichte(li.group(1)),
                   "gut_bez": float(hol(gut, r"bez:(-?[\d.]+)", "0")),
                   "zu_bez":  float(hol(zu,  r"bez:(-?[\d.]+)", "0")),
                   "gut_st":  hol(gut, r"stimmung:`(\w+)`", "neutral"),
                   "zu_st":   hol(zu,  r"stimmung:`(\w+)`", "neutral")})
    if fr: ZUST.append({"braucht": gewichte(bed.group(1)) if bed else {}, "fragen": fr})

LAUNE = {k: float(v) for k, v in
         re.findall(r"(\w+):\s*(\d+(?:\.\d+)?)", block("stimmungswirkung"))}
def nach_laune(w, st):
    f = LAUNE.get(st, 1.0)
    return w * f if w >= 0 else w / f

FR = {k: float(v) for k, v in
      re.findall(r"(start|verkaufSchwelle|verbrannt|verkaufKosten|uebertrag|geduldUebertrag):\s*(-?[\d.]+)",
                 block("freundschaft"))}
AB = {k: float(v) for k, v in
      re.findall(r"(bedarfNoetig|vonBereit|bisBereit|ausBereit|ausFreundschaft|deckel):\s*(-?[\d.]+)",
                 block("abschluss"))}

# ---------- Gewichte: direkt aus dem Spiel gelesen ----------
SPIEL = io.open("spiel.html", encoding="utf-8").read()
GEFUNDEN = dict((k, float(v)) for k, v in
                re.findall(r"(W_[A-Z_]+)\s*=\s*(-?\d+(?:\.\d+)?)", SPIEL))
def konst(name):
    assert name in GEFUNDEN, "Konstante fehlt: " + name
    return GEFUNDEN[name]

G = dict(auto=konst("W_AUTO"), treffer=konst("W_TREFFER"), fehlgriff=konst("W_FEHLGRIFF"),
         rueckgriff=konst("W_RUECKGRIFF"), produkt=konst("W_PRODUKT"), privat=konst("W_PRIVAT"),
         bedarf=konst("W_BEDARF"), rauswurf=konst("W_RAUSWURF"),
         rtreffer=konst("W_RATE_TREFFER"), rnah=konst("W_RATE_NAH"), rdaneben=konst("W_RATE_DANEBEN"),
         frage=konst("W_FRAGE"), fragesteig=konst("W_FRAGE_STEIG"),
         gfrage=konst("W_GEDULD_FRAGE"), gprivat=konst("W_GEDULD_PRIVAT"),
         ggut=konst("W_GEDULD_GUT"), gschlecht=konst("W_GEDULD_SCHLECHT"),
         gfest=konst("W_GEDULD_FEST"))

STUFEN = np.array([-2,-1,0,1,2])
GLOCKE = {-2:0.10, -1:0.22, 0:0.36, 1:0.22, 2:0.10}
# Die zwei Waagen verteilen sich flacher als die fuenf Merkmale
MGLOCKE = {int(k): float(v) for k, v in
           re.findall(r'"(-?\d)":([\d.]+)', re.search(r"mglocke:\s*\{([^}]*)\}", QUELLE).group(1))}
_RAEUME = {}
def raum(n):
    """Der Zustandsraum je Achsenzahl: 3125 fuer die Merkmale, 25 fuer
       die zwei Waagen."""
    if n not in _RAEUME: _RAEUME[n] = np.array(list(kartesisch(STUFEN, repeat=n)))
    return _RAEUME[n]

def prior(dims, shift, kurve=None):
    ST = raum(len(dims))
    K = kurve or GLOCKE
    p = np.ones(len(ST))
    for d in range(len(dims)):
        g = np.array([K[int(v)] for v in ST[:, d]])
        p *= g * np.exp(shift.get(dims[d], 0.0) * ST[:, d])
    return p / p.sum()

def lik(antworten, dims):
    ST = raum(len(dims))
    lad = np.array([[a.get(d, 0.0) for d in dims] for a in antworten])
    sc = SHARP * ST @ lad.T
    sc -= sc.max(axis=1, keepdims=True)
    e = np.exp(sc)
    return (e / e.sum(axis=1, keepdims=True)).T

LIK_BF = [lik(f, T) for f in BF]
LIK_MO = [lik(f, M) for f in MO]

def H(p):
    q = p[p > 0]; return float(-(q*np.log2(q)).sum())
def eig(pr, L):
    pa = L @ pr
    post = L * pr
    s = post.sum(axis=1, keepdims=True); s[s == 0] = 1
    post = post / s
    return H(pr) - float((pa * np.array([H(r) for r in post])).sum())
def antwort_ziehen(antworten, wahr, dims):
    sc = np.array([SHARP*sum(wahr[d]*a.get(d,0.0) for d in dims) for a in antworten])
    e = np.exp(sc - sc.max()); pr = e/e.sum()
    return int(np.random.choice(len(pr), p=pr))
def randverteilung(pr, d, n):
    ST = raum(n)
    return np.array([pr[ST[:, d] == v].sum() for v in STUFEN])
def modus(pr, d, n):
    return int(STUFEN[randverteilung(pr, d, n).argmax()])
def erwartung(pr, d, n):
    return float((randverteilung(pr, d, n) * STUFEN).sum())

# ---------- Die Spielweisen ----------
GUETE = {"zufall":0.0, "mittel":0.5, "gut":0.85, "perfekt":1.0}

def fragenplan(art, besuch, nbf, nmo):
    if art == "perfekt": return nbf, nmo
    if art == "gut":     return (5 if besuch == 1 else 0), (4 if besuch == 2 else 0)
    if art == "mittel":  return (3 if besuch <= 2 else 0), (2 if besuch <= 2 else 0)
    return random.randint(0, 3), random.randint(0, 3)

def besuche(art, max_besuche=6):
    """Spielt eine Person ueber mehrere Besuche. Gibt zurueck, ob und im
       wievielten Besuch er kauft, und wie ihr am Ende steht."""
    frd = FR["start"]
    pr = {"bf": prior(T, ROLLE), "mo": prior(M, {}, MGLOCKE)}
    offen = {"bf": list(range(len(BF))), "mo": list(range(len(MO)))}
    stand = {"bf": 0, "mo": 0}; gefragt = {"bf": 0, "mo": 0}
    fakten = 0; geduld_weg = 0.0
    gesehen = []
    g = GUETE[art]

    for besuch in range(1, max_besuche+1):
        if frd < FR["verbrannt"]: return (False, besuch-1, frd, "verbrannt")
        geduld = 100.0 - geduld_weg * FR["geduldUebertrag"]
        heute = 0
        nbf, nmo = fragenplan(art, besuch, len(offen["bf"]), len(offen["mo"]))
        for key, wieviel, LIKS, ROH, wahr, dims in (
                ("bf", nbf, LIK_BF, BF, HZ, T), ("mo", nmo, LIK_MO, MO, HM, M)):
            for _ in range(min(wieviel, len(offen[key]))):
                if geduld <= 0: break
                i = (max(offen[key], key=lambda j: eig(pr[key], LIKS[j]))
                     if random.random() < g else random.choice(offen[key]))
                offen[key].remove(i)
                a = antwort_ziehen(ROH[i], wahr, dims)
                pr[key] = LIKS[i][a] * pr[key]; pr[key] /= pr[key].sum()
                frd += G["frage"] * (1 + heute*G["fragesteig"])
                geduld -= G["gfrage"] * (1 + heute*G["fragesteig"])
                heute += 1; gefragt[key] += 1
            if gefragt[key] > stand[key]:
                stand[key] = gefragt[key]
                punkte = 0.0
                for d in range(len(dims)):
                    tipp = (modus(pr[key], d, len(dims)) if random.random() < g
                            else int(random.choice(STUFEN)))
                    dist = abs(tipp - int(wahr[dims[d]]))
                    punkte += G["rtreffer"] if dist == 0 else (G["rnah"] if dist == 1 else G["rdaneben"])
                frd = min(100.0, max(0.0, frd + punkte))
                geduld = min(100.0, max(0.0, geduld + punkte*G["gfest"]))

        # Was gerade bei ihm los ist
        braucht = {}
        rest = [i for i in range(len(ZUST)) if i not in gesehen] or list(range(len(ZUST)))
        zi = random.choice(rest); gesehen.append(zi)
        z = ZUST[zi]; laune = "neutral"
        for f in z["fragen"]:
            if geduld <= 0: break
            erw = sum(w*erwartung(pr["bf"], T.index(d), 5) for d, w in f["liest"].items() if d in T)
            if random.random() < g:
                if erw < 0: continue
            elif random.random() < 0.5:
                continue
            trifft = sum(w*HZ[d] for d, w in f["liest"].items() if d in HZ) > 0
            frd += nach_laune(f["gut_bez"] if trifft else f["zu_bez"], laune)
            geduld += G["ggut"] if trifft else -G["gschlecht"]
            laune = f["gut_st"] if trifft else f["zu_st"]
            if trifft: braucht = z["braucht"]
        frd = min(100.0, max(0.0, frd)); geduld = min(100.0, geduld)

        # Ihn persoenlich ausfragen, solange die Geduld es zulaesst
        preis = {"perfekt":1.0, "gut":1.2, "mittel":1.9, "zufall":2.6}[art]
        polster = {"perfekt":12.0, "gut":16.0, "mittel":20.0, "zufall":0.0}[art]
        while fakten < 4 and geduld - preis*G["gprivat"] >= polster:
            geduld -= preis * G["gprivat"]
            if random.random() < {"perfekt":1.0, "gut":0.85, "mittel":0.6, "zufall":0.35}[art]:
                fakten += 1
            else:
                geduld -= G["gprivat"]
            if geduld <= 0:
                frd = max(0.0, frd + G["rauswurf"])
                break
        geduld_weg = max(0.0, 100.0 - geduld)
        if geduld <= 0: continue          # rausgeworfen, der Besuch ist vorbei

        # Der Koffer
        will = (besuch == 1) if art == "zufall" else (frd >= FR["verkaufSchwelle"])
        if not will:
            frd = min(100.0, frd + 1)
            continue
        if frd < FR["verkaufSchwelle"]:
            frd = max(0.0, frd - 2*FR["verkaufKosten"])
            continue
        frd -= FR["verkaufKosten"]
        bereit = round(frd * FR["uebertrag"])

        def wert(q):
            return (sum(q["passt"].get(m,0)*HM[m] for m in HM)
                    + G["bedarf"]/G["produkt"]*sum(q["passt"].get(m,0)*braucht.get(m,0) for m in braucht))
        best = max(PROD, key=wert)
        p = best if random.random() < g else random.choice(PROD)
        passung = sum(p["passt"].get(m,0)*HM[m] for m in HM)
        bedarf  = sum(p["passt"].get(m,0)*braucht.get(m,0) for m in braucht)
        treffer = min(len(p["spricht"]), fakten)
        bereit += G["produkt"]*passung + G["bedarf"]*bedarf + G["privat"]*treffer*2

        laune = "neutral"
        for opts in ZUEGE:
            o = max(opts, key=lambda x: x["auto"]) if random.random() < g else random.choice(opts)
            sm = sum(o["aff"].get(m,0)*HM[m] for m in HM)
            roh = G["auto"]*o["auto"] + (G["treffer"]*sm if sm >= 0 else G["fehlgriff"]*sm)
            if o["an"] and fakten >= 2 and random.random() < g: roh += G["rueckgriff"]
            bereit += nach_laune(roh, laune)
            laune = o["stimmung"]

        # Kein Schwellenwert, sondern ein Wurf. Ohne Bedarf kein Kauf.
        braucht_wert = min(1.0, (G["produkt"]*passung + G["bedarf"]*bedarf) / (4*G["produkt"]))
        spanne = max(0.0, min(1.0, (bereit - AB["vonBereit"]) / (AB["bisBereit"] - AB["vonBereit"])))
        chance = 0.0 if braucht_wert < AB["bedarfNoetig"] else min(
            AB["deckel"], AB["ausBereit"]*spanne + AB["ausFreundschaft"]*(frd/100))
        if random.random() < chance:
            return (True, besuch, min(100.0, frd+6), "kauft")
        # Ein Nein beendet den Besuch, nicht die Bekanntschaft: man kommt
        # wieder. Nur kostet jeder Versuch, und das summiert sich.
        if not (bereit >= 48 and braucht_wert >= AB["bedarfNoetig"]):
            frd = max(0.0, frd - 8)

    return (False, max_besuche, frd, "kein Versuch")

def lauf(art, n):
    r = [besuche(art) for _ in range(n)]
    kauft = np.array([x[0] for x in r])
    wann  = np.array([x[1] for x in r if x[0]])
    frd   = np.array([x[2] for x in r])
    tot   = np.array([x[3] == "verbrannt" or x[2] < FR["verbrannt"] for x in r])
    return kauft.mean(), (wann.mean() if len(wann) else float("nan")), frd.mean(), tot.mean()

if __name__ == "__main__":
    N = 400
    for arg in sys.argv[1:]:
        k, v = arg.split("=")
        if k == "n": N = int(v)
        else: G[k] = float(v)
    random.seed(7); np.random.seed(7)
    print("geparst: %d BF, %d Waagenfragen, %d Waren, %d Zuege, %d Zustaende"
          % (len(BF), len(MO), len(PROD), len(ZUEGE), len(ZUST)))
    print("Freundschaft:", FR, "\nAbschluss:", AB)
    print("Waren gegen ihn:", {q["id"]: round(sum(q["passt"].get(m,0)*HM[m] for m in HM), 2) for q in PROD})
    print("%-8s %8s %9s %12s %10s" % ("", "kauft", "im Besuch", "Freundschaft", "verbrannt"))
    for art in ("zufall", "mittel", "gut", "perfekt"):
        ja, wann, bz, tot = lauf(art, N)
        print("%-8s %7.1f%% %9.1f %12.1f %9.1f%%" % (art, 100*ja, wann, bz, 100*tot))
