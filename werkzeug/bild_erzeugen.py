# -*- coding: utf-8 -*-
"""Erzeugt Bilder ueber die Gemini-Schnittstelle.

   Damit laesst sich der ganze Weg ohne Handarbeit gehen:

       python werkzeug/bild_erzeugen.py --prompt-datei bogen.txt --aus bogen.png
       python werkzeug/kontaktbogen_schneiden.py bogen.png annika

   Und mit einem vorhandenen Portraet als Vorlage, was aehnlicher wird:

       python werkzeug/bild_erzeugen.py --vorlage bilder/annika_neutral.webp \\
              --prompt-datei bogen.txt --aus bogen.png

   Der Schluessel steht in der Umgebungsvariablen GEMINI_API_KEY und
   niemals in einer Datei im Projekt. Wer ihn dauerhaft setzen will:

       setx GEMINI_API_KEY "..."      (Windows, danach neue Konsole)
       export GEMINI_API_KEY="..."    (bash)

   Ohne Schluessel sagt das Skript das und tut sonst nichts. Es haengt
   nur an der Standardbibliothek, es ist also nichts zu installieren."""
import argparse, base64, io, json, mimetypes, os, sys, urllib.error, urllib.request

DIENST = "https://generativelanguage.googleapis.com/v1beta/models/%s:generateContent"
STANDARDMODELL = "gemini-2.5-flash-image"


def schluessel():
    k = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if not k:
        sys.exit("Kein Schlüssel gefunden. Setze GEMINI_API_KEY in der Umgebung.\n"
                 "  Windows:  setx GEMINI_API_KEY \"...\"   (danach neue Konsole öffnen)\n"
                 "  bash:     export GEMINI_API_KEY=\"...\"")
    return k


def teile(prompt, vorlagen):
    """Der Textteil, davor jede Vorlage als eingebettetes Bild."""
    p = []
    for weg in vorlagen:
        art = mimetypes.guess_type(weg)[0] or "image/png"
        with open(weg, "rb") as f:
            p.append({"inline_data": {"mime_type": art,
                                      "data": base64.b64encode(f.read()).decode("ascii")}})
    p.append({"text": prompt})
    return p


def erzeuge(prompt, vorlagen, modell):
    rumpf = json.dumps({"contents": [{"parts": teile(prompt, vorlagen)}]}).encode("utf-8")
    anfrage = urllib.request.Request(
        DIENST % modell + "?key=" + schluessel(), data=rumpf,
        headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(anfrage, timeout=180) as antwort:
            daten = json.load(antwort)
    except urllib.error.HTTPError as e:
        text = e.read().decode("utf-8", "replace")[:600]
        sys.exit("Die Schnittstelle antwortet mit %s:\n%s" % (e.code, text))
    except urllib.error.URLError as e:
        sys.exit("Keine Verbindung: %s" % e.reason)

    kandidaten = daten.get("candidates") or []
    if not kandidaten:
        sys.exit("Kein Ergebnis. Vollständige Antwort:\n" + json.dumps(daten, indent=1)[:800])
    bilder, text = [], []
    for teil in kandidaten[0].get("content", {}).get("parts", []):
        eingebettet = teil.get("inlineData") or teil.get("inline_data")
        if eingebettet:
            bilder.append(base64.b64decode(eingebettet["data"]))
        elif teil.get("text"):
            text.append(teil["text"])
    if not bilder:
        grund = kandidaten[0].get("finishReason", "")
        sys.exit("Es kam kein Bild zurück%s.%s"
                 % (" (%s)" % grund if grund else "",
                    ("\nStattdessen Text:\n" + "\n".join(text)[:600]) if text else ""))
    return bilder, "\n".join(text)


def main():
    p = argparse.ArgumentParser(description="Bild über die Gemini-Schnittstelle erzeugen")
    q = p.add_mutually_exclusive_group(required=True)
    q.add_argument("--prompt", help="der Prompt als Text")
    q.add_argument("--prompt-datei", help="Datei, in der der Prompt steht")
    p.add_argument("--vorlage", action="append", default=[],
                   help="vorhandenes Bild als Vorlage, mehrfach möglich")
    p.add_argument("--aus", default="bogen.png", help="wohin das Ergebnis geht")
    p.add_argument("--modell", default=STANDARDMODELL)
    a = p.parse_args()

    prompt = (io.open(a.prompt_datei, encoding="utf-8").read() if a.prompt_datei else a.prompt)
    for v in a.vorlage:
        if not os.path.exists(v):
            sys.exit("Vorlage nicht gefunden: " + v)

    print("Modell   %s" % a.modell)
    print("Vorlagen %s" % (", ".join(a.vorlage) if a.vorlage else "keine"))
    print("Prompt   %d Zeichen" % len(prompt))
    bilder, text = erzeuge(prompt, a.vorlage, a.modell)

    wurzel, endung = os.path.splitext(a.aus)
    for i, b in enumerate(bilder):
        weg = a.aus if i == 0 else "%s_%d%s" % (wurzel, i + 1, endung)
        with open(weg, "wb") as f:
            f.write(b)
        print("geschrieben  %-24s %d KB" % (weg, len(b) // 1024))
    if text:
        print("Anmerkung des Modells:\n" + text[:400])


if __name__ == "__main__":
    main()
