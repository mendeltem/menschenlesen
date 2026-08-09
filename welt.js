/* ═══════════════════════════════════════════════════════════════════
   Die Welt: was für jede Person gleich ist.

   Die fünf Achsen der Persönlichkeit und der Motive, was eine
   Ausprägung für dich bedeutet, dein Koffer und die Belege. Wer eine
   Person ergänzt, fasst diese Datei nicht an.
   ═══════════════════════════════════════════════════════════════════ */
const WELT = {

traits: [`O`,`C`,`E`,`A`,`N`],

tlabels: { O:`Offenheit`, C:`Gewissenhaftigkeit`, E:`Extraversion`, A:`Verträglichkeit`, N:`Neurotizismus` },

tpoles: {
  O: [`vertraut, konkret`, `neugierig, quer`],
  C: [`spontan, lose`, `planvoll, gründlich`],
  E: [`zurückhaltend, still`, `zugewandt, laut`],
  A: [`hart, direkt`, `warm, nachgiebig`],
  N: [`ruhig, robust`, `dünnhäutig, grüblerisch`]
},

motives: [`AUT`,`SIC`,`STA`,`ZUG`,`EFF`],

mlabels: { AUT:`Autonomie`, SIC:`Sicherheit`, STA:`Status`, ZUG:`Zugehörigkeit`, EFF:`Effizienz` },

mpoles: {
  AUT: [`egal, wer bestimmt`, `will selbst bestimmen`],
  SIC: [`Risiko stört nicht`, `will Verlässlichkeit`],
  STA: [`Sichtbarkeit egal`, `will gesehen werden`],
  ZUG: [`kommt allein klar`, `will dazugehören`],
  EFF: [`Aufwand egal`, `will Aufwand senken`]
},

/* Startbild vor dem ersten Wort: ein Rollenklischee, keine Messung.
   Zwei der drei Annahmen sind bei ihm falsch. Das ist Absicht. */

/* --- Was die Stimmung mit deinen Zügen macht. Ein Zug in gereizter
       Lage wiegt nur gut die Hälfte; einer, wenn er vorgebeugt sitzt,
       ein Fünftel mehr. Fehlgriffe wirken umgekehrt: in schlechter
       Stimmung tun sie mehr weh.
       Die Namen sind dieselben wie in stimmungen bei der Person. ----- */
stimmungswirkung: {
  geruehrt: 1.3, interessiert: 1.2, freundlich: 1.15, amuesiert: 1.1,
  neutral: 1.0, nachdenklich: 1.0,
  skeptisch: 0.85, verschlossen: 0.7, gereizt: 0.55, abweisend: 0.4
},

sharpness: 1.15,

/* --- Was die wahren Werte für dich bedeuten. Wird nach jedem
       Festlegen gezeigt, zur Stufe, die wirklich stimmt. ------------ */

deutung: {
  O: { hoch: `Neues zieht ihn an. Ein Gedanke, den er noch nicht kennt, wirkt bei ihm besser als ein bewährter.`,
       mitte:`Neues zieht ihn weder an noch ab. Argumentiere über die Sache, nicht über die Neuheit.`,
       tief: `Er will Bewährtes. Neuheit ist für ihn ein Risiko und kein Reiz.` },
  C: { hoch: `Er plant. Ein klarer Ablauf mit Terminen beruhigt ihn mehr als jedes Versprechen.`,
       mitte:`Struktur hilft, ist aber kein Verkaufsargument.`,
       tief: `Pläne langweilen ihn. Er entscheidet früh und korrigiert unterwegs — gib ihm etwas zum Anfangen, keinen Fahrplan.` },
  E: { hoch: `Er denkt im Reden. Lass ihn ausreden, widersprich ruhig; Stille und Monologe verlieren ihn.`,
       mitte:`Er redet, wenn es etwas zu sagen gibt. Weder Schweigen noch Lautstärke bringen dich weiter.`,
       tief: `Er braucht Pausen. Wer ihn zutextet, verliert ihn — frag und warte.` },
  A: { hoch: `Er ist zugewandt und sagt ungern Nein. Genau deshalb ist ein Ja von ihm wenig wert, solange du ihm keinen echten Ausweg lässt.`,
       mitte:`Er ist weder besonders nachgiebig noch besonders hart.`,
       tief: `Er ist hart im Ton. Nimm Widerspruch nicht persönlich, er meint die Sache und nicht dich.` },
  N: { hoch: `Er grübelt. Nimm ihm Risiken ab, bevor er sie selbst findet, sonst findet er sie nachts.`,
       mitte:`Sorgen hat er wie jeder. Sie treiben ihn nicht.`,
       tief: `Er ist robust. Warnungen und Zeitdruck perlen ab und kosten dich nur Glaubwürdigkeit.` }
},

mdeutung: {
  AUT: { hoch: `Er will selbst bestimmen. Jede Vorgabe, wie er etwas zu tun hat, kostet dich mehr, als dein Angebot einbringt.`,
         mitte:`Wer entscheidet, ist ihm weder wichtig noch gleich.`,
         tief: `Wer entscheidet, ist ihm gleich. Führung nimmt er an, wenn sie ihm Arbeit spart.` },
  SIC: { hoch: `Er will Verlässlichkeit. Referenzen, Garantien und Bestand wirken bei ihm.`,
         mitte:`Sicherheiten nimmt er mit, sucht sie aber nicht.`,
         tief: `Sicherheiten interessieren ihn nicht. Garantien klingen für ihn nach Füllmaterial.` },
  STA: { hoch: `Er will gesehen werden. Sichtbarkeit, Titel und Namen ziehen.`,
         mitte:`Sichtbarkeit nimmt er hin.`,
         tief: `Schmeichelei kostet dich. Wer ihn heraushebt, klingt für ihn unehrlich.` },
  ZUG: { hoch: `Er will dazugehören. Wer sonst noch mitmacht, ist ein Argument.`,
         mitte:`Das Team zählt, entscheidet aber nicht.`,
         tief: `Das Team ist kein Argument. Er kommt allein klar und weiß das.` },
  EFF: { hoch: `Er will Aufwand senken. Rechne ihm vor, was er spart, nicht was er gewinnt.`,
         mitte:`Aufwand ist ein Faktor unter mehreren.`,
         tief: `Aufwand ist ihm gleich. Zeitersparnis zieht bei ihm nicht.` }
},


/* --- Akt 1: Ankunft. Fest geschrieben, trägt null bit. ------------- */

/* --- Stimmungen. Jede zeigt ein anderes Bild aus bilder/. Fehlt eine
       Datei, bleibt das Grundporträt stehen und nur der Text wechselt.
       Neue Stimmung: hier eine Zeile, Bild danebenlegen, fertig. ------ */

produkte: [
  { id:`uhr`, ek:340, preis:900, bestand:3, name:`Die Uhr`,
    kurz:`Eine Stunde daran gedreht, und du hast einen Tag mehr, den nur du erlebst.`,
    text:`Eine Taschenuhr, Messing, abgegriffen. Wer die Krone einmal ganz herumdreht, bekommt vierundzwanzig Stunden, in denen die Welt stillsteht und er allein weiterarbeitet. Danach geht es weiter, als wäre nichts gewesen. Niemand außer ihm merkt etwas.`,
    haken:`Die Stunden, die Sie gewinnen, altern Sie mit. Ein Tag ist ein Tag, auch wenn ihn keiner sieht.`,
    passt:{ EFF:1.5, AUT:0.8 }, spricht:[`plan60`,`musik`],
    erRegieVor:`Er nimmt sie aus der Mulde und wiegt sie in der Hand, ohne zu fragen, ob er darf.`,
    er:`Zeit.`, erRegie:`Er dreht die Krone eine halbe Umdrehung und hält an.`,
    er2:`Zeigen Sie mir, wie sie geht.`, wie:`leise, sehr aufmerksam`, wie2:`fordernd`, stimmung:`interessiert` },

  { id:`stift`, ek:150, preis:400, bestand:3, name:`Der Stift`,
    kurz:`Was du damit schreibst, vergisst du nie wieder.`,
    text:`Ein Füllhalter, schwarz, ohne Aufschrift. Jeder Satz, den man damit auf Papier bringt, bleibt vollständig im Gedächtnis — Wortlaut, Seite, Tag. Kein Nachschlagen mehr, kein Suchen, kein zweites Mal lesen.`,
    haken:`Sie vergessen auch das nie wieder, was Sie lieber vergessen würden. Schreiben Sie nichts damit auf, was Sie loswerden wollen.`,
    passt:{ AUT:0.7, SIC:0.8, ZUG:0.3 }, spricht:[`werkstatt`],
    er:`Ein Stift.`, erRegie:`Er nimmt ihn, dreht ihn einmal und legt ihn zurück in die Mulde.`,
    er2:`Ich schreibe wenig. Ich rechne.`, wie:`trocken`, wie2:`abschließend`, stimmung:`skeptisch` },

  { id:`brille`, ek:250, preis:650, bestand:3, name:`Die Brille`,
    kurz:`Wer sie aufsetzt, sieht jedem Text an, wo er nicht stimmt.`,
    text:`Ein schmales Gestell mit klaren Gläsern. Wer sie trägt, sieht in jedem geschriebenen Text die Stellen aufleuchten, an denen etwas falsch ist — der Rechenfehler, die geschönte Zahl, der Satz, den jemand gegen besseres Wissen geschrieben hat.`,
    haken:`Sie sehen die Fehler auch in dem, was Sie selbst geschrieben haben. Alle davon.`,
    passt:{ SIC:1.2, STA:1.2 }, spricht:[],
    er:`Eine Brille, die Fehler zeigt.`,
    erRegie:`Er setzt sie auf, sieht auf den obersten Ausdruck seines Stapels und nimmt sie wieder ab.`,
    er2:`Meine Fehler finde ich selbst. Das ist der Job.`, wie:`gedehnt`, wie2:`kühl`, stimmung:`skeptisch` }
],

belege: {
  A: `Autonomieunterstützung: Meta-Analyse über 74 Interventionsstudien, 80 Prozent randomisiert. Wahrgenommene Autonomieunterstützung g = 0,84, autonome Motivation g = 0,41 (Gillison, Rouse, Standage, Sebire & Ryan, Health Psychology Review 13, 2019). Die Studien stammen aus dem Gesundheitsbereich, die Übertragung auf Verhandlungen ist Extrapolation.`,
  C: `Motivpassung: Meta-Analyse über 41 Studien, r = 0,11 über die Gesamtliteratur, in sauber kontrollierten Designs 9 von 11 Effekten nicht signifikant (Perla u. a., Psychology & Marketing, 2026). Der Befund stammt aus digitaler Werbung mit geschätzten Profilen, nicht aus Gesprächen.`,
  asym: `Deshalb rechnet dieses Spiel den Fehlgriff doppelt so schwer wie den Treffer: wer einem autonomiebetonten Gegenüber mit Status oder Gremien kommt, verliert vermutlich mehr, als der passende Appell einbringt. Das ist eine Vermutung, keine Messung — für die Asymmetrie kenne ich keine Studie.`,
  items: `Keines der Items hier ist validiert. Die Zahlen in den Ladungen sind meine Einschätzungen, in Kommastellen gegossen. Was trotzdem stimmt: welche Frage mehr trennt als eine andere, hängt an der Struktur der Matrix, nicht an ihrer Richtigkeit.`
}
};
