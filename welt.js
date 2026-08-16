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

/* --- Die zwei Waagen. Frueher waren es fuenf Motive; das war genauer
       und unlesbar. Jetzt gibt es zwei Fragen, und auf jede gibt es
       nur eine Antwort mit zwei Seiten:

         Will er lieber selbst bestimmen oder lieber sicher sein?
         Will er lieber dazugehoeren oder lieber gesehen werden?

       Minus ist die linke Seite, Plus die rechte. Wer in der Mitte
       steht, will beides ein bisschen und keines sehr. ------------- */

motives: [`FRE`,`GEL`],

mlabels: { FRE:`Sicherheit ⟷ Freiheit`, GEL:`Nähe ⟷ Geltung` },

mpoles: {
  FRE: [`will Verlässlichkeit`, `will selbst bestimmen`],
  GEL: [`will dazugehören`, `will gesehen werden`]
},

/* Wie sich die Menschen auf einer Waage verteilen — flacher als bei den
   Merkmalen. Ein Merkmal ist normalverteilt, die meisten sind mittel
   verträglich. Eine Waage mit zwei Seiten ist das nicht: wer selbst
   bestimmen will, will es, und die Mitte ist der seltenere Fall.
   Mit der Merkmalsglocke landete das Modell praktisch nie auf einem
   Außenpol, und wer richtig gelesen hatte, bekam trotzdem nur ein
   Knapp. */
/* Wie sich die Menschen auf einem Merkmal verteilen. Eine Glocke, aber
   eine flachere als die ursprüngliche: mit {0.10 .. 0.36 .. 0.10} zog
   die Mitte den Modus so stark an, dass ein wahres +2 praktisch nie
   getroffen wurde — wer perfekt zuhörte, bekam bei Extraversion in null
   von hundert Durchläufen ein Getroffen. Das war keine Schwierigkeit,
   sondern eine Rückmeldung, die nicht funktioniert. */
zglocke: { "-2":0.15, "-1":0.23, "0":0.24, "1":0.23, "2":0.15 },

mglocke: { "-2":0.18, "-1":0.21, "0":0.22, "1":0.21, "2":0.18 },

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

/* --- Die Beziehung. Sie ist das einzige, was zwischen zwei Besuchen
       bleibt, und sie entscheidet alles: ob er dich hereinlässt, ob er
       den Koffer überhaupt ansieht, wie er dich begrüßt.

       Fragen kosten Geduld. Was ihr aufbaut, kommt daher, dass du ihn
       richtig liest — beim Festlegen und in dem, was gerade bei ihm
       los ist. Wer sofort verkaufen will, zahlt dafür. --------------- */
freundschaft: {
  start: 35,
  /* Darunter macht er den Koffer nicht mehr auf. */
  verkaufSchwelle: 55,
  /* Darunter lässt er dich gar nicht mehr herein. */
  verbrannt: 8,
  /* Was der Verkaufsversuch an sich kostet: du hast dich zu erkennen
     gegeben, und das lässt sich nicht zurücknehmen. */
  verkaufKosten: 6,
  /* Woraus die Bereitschaft im Verkauf startet. */
  uebertrag: 0.85,
  /* Wie viel von der verbrauchten Geduld er ins nächste Mal mitnimmt.
     Wer ihn an einem Nachmittag ausquetscht, sitzt beim nächsten
     Besuch einem Mann gegenüber, der schon weiß, wie das läuft. */
  geduldUebertrag: 0.35,
  stufen: [
    { ab:80, name:`verbündet`,
      text:`Er hält dir den Rücken frei. Was du sagst, gilt bei ihm, bis das Gegenteil bewiesen ist.` },
    { ab:60, name:`vertraut`,
      text:`Er redet mit dir über Dinge, die er anderen im Haus nicht erzählt.` },
    { ab:40, name:`bekannt`,
      text:`Er weiß, wer du bist, und nimmt sich Zeit. Mehr aber auch nicht.` },
    { ab:20, name:`fremd`,
      text:`Ein Termin unter anderen. Er ist höflich, und Höflichkeit ist hier kein gutes Zeichen.` },
    { ab:8, name:`abgekühlt`,
      text:`Er lässt dich noch herein. Viel fehlt nicht mehr, und das tut er nicht mehr.` },
    { ab:-999, name:`verbrannt`,
      text:`Er hat dich abgeschrieben. Ein Besuch mehr ändert daran nichts.` }
  ]
},

/* --- Wie die Anzeige über die Person redet. Jede Person darf das
       überschreiben; hier stehen die männlichen Formen als Vorgabe,
       weil die Anzeige sonst über jede Frau als Er spräche. ---------- */
anrede: {
  er:`er`,   Er:`Er`,   ihn:`ihn`,   Ihn:`Ihn`,   ihm:`ihm`,
  sein:`sein`, Sein:`Sein`, seine:`seine`, Seine:`Seine`, seiner:`seiner`
},

/* --- Die drei Stufen. Die ersten zwei sind reines Lesen: du fragst,
       so lange du willst, schreibst mit und legst dich fest. Es gibt
       dabei keine Balken und kein sichtbares Modell — nur deine Notizen
       und ihn.

       punkte    was eine Achse einbringt: genau getroffen, um eine
                 Stufe daneben, weiter daneben.
       bestehen  ab wie vielen Punkten die nächste Stufe aufgeht.
       ---------------------------------------------------------------- */
level: [
  { nr:1, key:`bf`, name:`Sein Wesen`,
    was:`Finde heraus, wie er tickt: fünf Merkmale, jedes von minus zwei bis plus zwei.`,
    punkte:{ genau:20, knapp:8, daneben:0 }, bestehen:50 },
  { nr:2, key:`mo`, name:`Was er braucht`,
    was:`Zwei Waagen, jede mit zwei Seiten. Sicherheit oder Freiheit, Nähe oder Geltung.`,
    punkte:{ genau:50, knapp:20, daneben:0 }, bestehen:50 },
  { nr:3, key:`koffer`, name:`Der Koffer`,
    was:`Jetzt erst geht es ums Verkaufen — mit allem, was du über ihn weißt.`,
    punkte:null, bestehen:null }
],

/* --- Aus den zwei Punktzahlen wird ein Stern-Urteil. Zweihundert sind
       das Höchste, hundert je Stufe. ------------------------------- */
sterne: [
  { ab:180, n:5, t:`Du hast ihn gelesen wie ein offenes Buch.` },
  { ab:145, n:4, t:`Sehr genau. Ein Merkmal hat dich gefoppt, mehr nicht.` },
  { ab:105, n:3, t:`Brauchbar. Du kennst ihn, aber nicht gut.` },
  { ab:60,  n:2, t:`Halb daneben. Vieles war geraten.` },
  { ab:25,  n:1, t:`Wenig getroffen. Zuhören ist etwas anderes als Fragen.` },
  { ab:-999, n:0, t:`Du hast einen anderen Menschen beschrieben als den, der dir gegenübersaß.` }
],

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
  FRE: { hoch: `Er will selbst bestimmen. Jede Vorgabe, wie er etwas zu tun hat, kostet dich mehr, als dein Angebot einbringt — auch die gut gemeinte. Gib ihm die Wahl und halt den Mund.`,
         mitte:`Er will beides und keines sehr. Freiheit nimmt er, wenn sie da ist, Sicherheit auch. Über diese Waage gewinnst du ihn nicht.`,
         tief: `Er will Verlässlichkeit. Referenzen, Garantien, ein Ding, das morgen noch da ist. Freiheit klingt für ihn nach Arbeit, die keiner abnimmt.` },
  GEL: { hoch: `Er will gesehen werden. Sein Name, sein Verdienst, sein Platz auf dem Papier. Wer ihn heraushebt, hat ihn.`,
         mitte:`Weder Bühne noch Tisch entscheiden bei ihm. Sag ihm, was die Sache kann, nicht wer sonst noch dabei ist.`,
         tief: `Er will dazugehören. Wer sonst mitmacht, ist ein Argument; Schmeichelei ist keins und kostet dich sofort.` }
},

/* --- Wann er kauft. Keine Schwelle mehr, sondern eine Wahrscheinlich-
       keit — und zwei Dinge, die sie machen:

       Der Bedarf ist die Bedingung. Was er nicht braucht, kauft er
       nicht, und zwar bei keiner Freundschaft der Welt.

       Die Freundschaft ist der Zuschlag. Wer ihm nahesteht, bekommt
       ein Ja auch dann, wenn die Sache nur halb passt — bis zu
       fuenfzehn Punkte, nie mehr. Freundschaft macht aus einem
       Vielleicht ein Ja und aus einem Nein nichts. ------------------ */

abschluss: {
  /* Darunter braucht er die Ware schlicht nicht. */
  bedarfNoetig: 0.2,
  /* Zwischen diesen Ständen steigt die Aussicht von null auf achtzig
     Prozent. */
  vonBereit: 35, bisBereit: 88, ausBereit: 0.80,
  ausFreundschaft: 0.15,
  deckel: 0.93
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
    passt:{ FRE:1.6 }, spricht:[`plan60`,`musik`],
    erRegieVor:`Er nimmt sie aus der Mulde und wiegt sie in der Hand, ohne zu fragen, ob er darf.`,
    er:`Zeit.`, erRegie:`Er dreht die Krone eine halbe Umdrehung und hält an.`,
    er2:`Zeigen Sie mir, wie sie geht.`, wie:`leise, sehr aufmerksam`, wie2:`fordernd`, stimmung:`interessiert` },

  { id:`stift`, ek:150, preis:400, bestand:3, name:`Der Stift`,
    kurz:`Was du damit schreibst, vergisst du nie wieder.`,
    text:`Ein Füllhalter, schwarz, ohne Aufschrift. Jeder Satz, den man damit auf Papier bringt, bleibt vollständig im Gedächtnis — Wortlaut, Seite, Tag. Kein Nachschlagen mehr, kein Suchen, kein zweites Mal lesen.`,
    haken:`Sie vergessen auch das nie wieder, was Sie lieber vergessen würden. Schreiben Sie nichts damit auf, was Sie loswerden wollen.`,
    passt:{ FRE:-1.0, GEL:-0.3 }, spricht:[`werkstatt`],
    er:`Ein Stift.`, erRegie:`Er nimmt ihn, dreht ihn einmal und legt ihn zurück in die Mulde.`,
    er2:`Ich schreibe wenig. Ich rechne.`, wie:`trocken`, wie2:`abschließend`, stimmung:`skeptisch` },

  { id:`brille`, ek:250, preis:650, bestand:3, name:`Die Brille`,
    kurz:`Wer sie aufsetzt, sieht jedem Text an, wo er nicht stimmt.`,
    text:`Ein schmales Gestell mit klaren Gläsern. Wer sie trägt, sieht in jedem geschriebenen Text die Stellen aufleuchten, an denen etwas falsch ist — der Rechenfehler, die geschönte Zahl, der Satz, den jemand gegen besseres Wissen geschrieben hat.`,
    haken:`Sie sehen die Fehler auch in dem, was Sie selbst geschrieben haben. Alle davon.`,
    passt:{ FRE:-0.6, GEL:1.4 }, spricht:[],
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
