# -*- coding: utf-8 -*-
"""Die Anzeige redete ueber jede Person als Er.

   Solange es nur Baumgartner gab, fiel das nicht auf. Mit Annika Reuter
   steht in der halben Oberflaeche der falsche Satz: Sein Wesen, er
   antwortet dir darauf, er kennt dich zu wenig.

   Loesung: eine kleine Tabelle je Person in welt.js, die jede Person
   ueberschreiben kann, und ein Helfer AN(), durch den alle sichtbaren
   Formen laufen. Wo ein Satz sich ohne Fuerwort sagen laesst, wird er
   umgeschrieben statt eingesetzt — das liest sich besser als eine
   Schablone."""
import io

def t(s, alt, neu, n=1):
    assert s.count(alt) >= 1, "nicht gefunden: " + alt[:100]
    return s.replace(alt, neu, n)

# ── welt.js: die männlichen Formen als Vorgabe
p = "welt.js"; s = io.open(p, encoding="utf-8").read()
assert "anrede:" not in s
alt = "sharpness: 1.15,"
neu = """/* --- Wie die Anzeige über die Person redet. Jede Person darf das
       überschreiben; hier stehen die männlichen Formen als Vorgabe,
       weil die Anzeige sonst über jede Frau als Er spräche. ---------- */
anrede: {
  er:`er`,   Er:`Er`,   ihn:`ihn`,   Ihn:`Ihn`,   ihm:`ihm`,
  sein:`sein`, Sein:`Sein`, seine:`seine`, Seine:`Seine`, seiner:`seiner`
},

sharpness: 1.15,"""
io.open(p, "w", encoding="utf-8", newline="\n").write(t(s, alt, neu))
print("welt.js: anrede")

# ── reuter.js: die weiblichen Formen
p = "personen/reuter.js"; s = io.open(p, encoding="utf-8").read()
alt = "rollentext: `Restauratorin:"
neu = """/* Die Anzeige spricht über sie in der weiblichen Form. */
anrede: {
  er:`sie`,  Er:`Sie`,  ihn:`sie`,   Ihn:`Sie`,   ihm:`ihr`,
  sein:`ihr`, Sein:`Ihr`, seine:`ihre`, Seine:`Ihre`, seiner:`ihrer`
},

rollentext: `Restauratorin:"""
io.open(p, "w", encoding="utf-8", newline="\n").write(t(s, alt, neu))
print("reuter.js: anrede")

# ── spiel.html
p = "quelle/spiel.html"; s = io.open(p, encoding="utf-8").read()

# Der Helfer, gleich neben den anderen kleinen Formatierern
s = t(s, "const gross = s => s.charAt(0).toUpperCase()+s.slice(1);",
"""const gross = s => s.charAt(0).toUpperCase()+s.slice(1);
/* Über wen hier geredet wird, ist nicht immer ein Er. Jede sichtbare
   Form läuft durch diese Tabelle; fehlt sie, gilt die männliche. */
const AN = k => (((typeof DATA !== "undefined" && DATA && DATA.anrede) || WELT.anrede || {})[k]) || k;""")

# Die Phasenleiste
s = t(s, """const PHASEN = [
  {n:"Ankunft", t:"Wer sitzt da?"}, {n:"Sein Wesen", t:"Wie er tickt"},
  {n:"Seine Antriebe", t:"Worauf er anspringt"}, {n:"Seine Lage", t:"Was gerade ist"},
  {n:"Der Koffer", t:"Der Verkauf"}, {n:"Abschied", t:"Was bleibt"}
];""",
"""const PHASEN = () => [
  {n:"Ankunft", t:"Wer sitzt da?"}, {n:AN("Sein")+" Wesen", t:"Wie "+AN("er")+" tickt"},
  {n:AN("Seine")+" Antriebe", t:"Worauf "+AN("er")+" anspringt"}, {n:AN("Seine")+" Lage", t:"Was gerade ist"},
  {n:"Der Koffer", t:"Der Verkauf"}, {n:"Abschied", t:"Was bleibt"}
];""")
s = t(s, "  document.getElementById(\"akte\").innerHTML = PHASEN.map((a,i) =>",
          "  document.getElementById(\"akte\").innerHTML = PHASEN().map((a,i) =>")

# Der Knopf oben und das Leseband
s = t(s, '<button class="tool nurschmal" id="sideToggle">Dein Bild von ihm</button>',
         '<button class="tool nurschmal" id="sideToggle">Dein Bild</button>')
s = t(s, '    + (motiv ? "was ihn treibt" : "wer er ist");',
         '    + (motiv ? `was ${AN("ihn")} treibt` : `wer ${AN("er")} ist`);')
s = t(s, '''  knopf.title = zahl ? `Aus ${wort(zahl)} ${zahl===1?"Antwort":"Antworten"}. Er antwortet dir darauf.`
                     : `Du hast ihn noch nichts gefragt — du würdest raten.`;''',
'''  knopf.title = zahl ? `Aus ${wort(zahl)} ${zahl===1?"Antwort":"Antworten"}. ${AN("Er")} antwortet dir darauf.`
                     : `Du hast ${AN("ihn")} noch nichts gefragt — du würdest raten.`;''')

# Die Geduld
s = t(s, '''    gd > 75 ? "Er hat Zeit und zeigt es." : gd > 55 ? "Er ist noch dabei." :
    gd > 35 ? "Er sieht öfter auf den Bildschirm." :
    gd > 15 ? "Er hört zu, aber er wartet auf ein Ende." : "Gleich steht er auf.";''',
'''    gd > 75 ? `${AN("Er")} hat Zeit und zeigt es.` : gd > 55 ? `${AN("Er")} ist noch dabei.` :
    gd > 35 ? `${AN("Er")} sieht öfter auf den Bildschirm.` :
    gd > 15 ? `${AN("Er")} hört zu, aber wartet auf ein Ende.` : `Gleich steht ${AN("er")} auf.`;''')

# Wiedersehen
s = t(s, '`Er hat noch im Kopf, wie viel du letztes Mal gefragt hast · Geduld <b>${',
         '`${AN("Er")} hat noch im Kopf, wie viel du letztes Mal gefragt hast · Geduld <b>${')

# Festlegen: Beschriftung an drei Stellen
s = t(s, '  const was = k === "bf" ? `wer er ist` : `was ihn treibt`;',
         '  const was = k === "bf" ? `wer ${AN("er")} ist` : `was ${AN("ihn")} treibt`;')
s = t(s, '      rechts:`aus ${wort(zahl)} ${zahl===1?"Antwort":"Antworten"} · er antwortet dir darauf`,',
         '      rechts:`aus ${wort(zahl)} ${zahl===1?"Antwort":"Antworten"} · ${AN("er")} antwortet dir darauf`,')
s = t(s, '  [["bf", rateBF, `wer er ist`], ["mo", rateMO, `was ihn treibt`]].forEach(pa => {',
         '  [["bf", rateBF, `wer ${AN("er")} ist`], ["mo", rateMO, `was ${AN("ihn")} treibt`]].forEach(pa => {')
s = t(s, '''      rechts: !zahl ? `<i style="color:var(--STA)">du hast ihn noch nichts gefragt</i>`
        : fest && neues <= 0 ? `<i>nichts Neues gehört — er wird trotzdem antworten</i>`
        : `aus ${wort(zahl)} ${zahl===1?"Antwort":"Antworten"}${
            fest ? `, ${wort(neues)} davon neu` : ``} · er antwortet dir darauf`,''',
'''      rechts: !zahl ? `<i style="color:var(--STA)">du hast ${AN("ihn")} noch nichts gefragt</i>`
        : fest && neues <= 0 ? `<i>nichts Neues gehört — ${AN("er")} wird trotzdem antworten</i>`
        : `aus ${wort(zahl)} ${zahl===1?"Antwort":"Antworten"}${
            fest ? `, ${wort(neues)} davon neu` : ``} · ${AN("er")} antwortet dir darauf`,''')

# Die Drehscheibe
s = t(s, 'if(bfOffen) items.push({ t:`Ihn über sich selbst reden lassen`, tag:kopf,',
         'if(bfOffen) items.push({ t:`${AN("Ihn")} über sich selbst reden lassen`, tag:kopf,')
s = t(s, 'if(moOffen) items.push({ t:`Herausfinden, worauf er anspringt`, tag:kopf,',
         'if(moOffen) items.push({ t:`Herausfinden, worauf ${AN("er")} anspringt`, tag:kopf,')
s = t(s, '''    items.push({ t:`Fragen, was gerade bei ihm los ist`, tag:kopf,
      rechts: S.zAn ? esc(S.zustand.titel) : `seine Lage · du weißt noch nichts davon`,''',
'''    items.push({ t:`Fragen, was gerade bei ${AN("ihm")} los ist`, tag:kopf,
      rechts: S.zAn ? esc(S.zustand.titel) : `${AN("seine")} Lage · du weißt noch nichts davon`,''')
s = t(s, '    items.push({ t:`Ihn nach sich selbst ausfragen`, tag:kopf,',
         '    items.push({ t:`${AN("Ihn")} nach sich selbst ausfragen`, tag:kopf,')
s = t(s, ': `<i style="color:var(--STA)">er kennt dich zu wenig — ab ${B.verkaufSchwelle}</i>`,',
         ': `<i style="color:var(--STA)">${AN("er")} kennt dich zu wenig — ab ${B.verkaufSchwelle}</i>`,')

# Das Festlegen selbst
s = t(s, 'sag("regie", `Du nennst ihm fünf Sätze über ihn. Er hört zu, ohne zu unterbrechen.`);',
         'sag("regie", `Du nennst ${AN("ihm")} fünf Sätze über ${AN("ihn")}. ${AN("Er")} hört zu, ohne zu unterbrechen.`);')
s = t(s, '''  const urteil = punkte >= 20 ? "Er widerspricht kein einziges Mal."
    : punkte >= 12 ? "Er nickt öfter, als er den Kopf schüttelt."
    : punkte >= 4  ? "Er lässt das meiste stehen."
    : punkte >= -4 ? "Er hält so oft dagegen, wie er zustimmt."
    : punkte >= -10 ? "Er widerspricht dir öfter, als dir lieb ist."''',
'''  const urteil = punkte >= 20 ? `${AN("Er")} widerspricht kein einziges Mal.`
    : punkte >= 12 ? `${AN("Er")} nickt öfter, als ${AN("er")} den Kopf schüttelt.`
    : punkte >= 4  ? `${AN("Er")} lässt das meiste stehen.`
    : punkte >= -4 ? `${AN("Er")} hält so oft dagegen, wie ${AN("er")} zustimmt.`
    : punkte >= -10 ? `${AN("Er")} widerspricht dir öfter, als dir lieb ist.`''')

# Die Lage und das Private
s = t(s, '`${trifft ? "er geht darauf ein" : "du greifst daneben"} ·',
         '`${trifft ? AN("er")+" geht darauf ein" : "du greifst daneben"} ·')
s = t(s, '''    ? `er öffnet sich · Geduld''', '''    ? `${AN("er")} öffnet sich · Geduld''')
s = t(s, '''    : `er weicht aus · Geduld''', '''    : `${AN("er")} weicht aus · Geduld''')
s = t(s, '`Er macht den Koffer nicht auf · Freundschaft <b>${vzk(w)}</b>',
         '`${AN("Er")} macht den Koffer nicht auf · Freundschaft <b>${vzk(w)}</b>')

io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print("spiel.html: alle sichtbaren Formen laufen durch AN()")
