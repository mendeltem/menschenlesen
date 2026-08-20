/* ═══════════════════════════════════════════════════════════════════
   Eine Person. Kopiere die Datei, ändere id, name und die Texte, lege
   die Bilder daneben — fertig ist die nächste.

   Rede und Regie sind getrennte Felder, und in keinem Textfeld steht
   ein Anführungszeichen: die Anzeige setzt sie.

     regie    Beschreibung, kursiv, ohne Anführungszeichen
     er       was er oder sie sagt
     erRegie  Beschreibung mitten in der Rede
     er2      was danach weiter gesagt wird
     du / t   was du sagst — seine Rede steht immer unter er,
              auch in offen und zu
     wie      wie es gesagt wird, Vorlage für die Stimme
     stimmung welches Bild danach im Rahmen steht
   ═══════════════════════════════════════════════════════════════════ */
PERSONEN.push({

id: `baumgartner`,
/* In welcher Etage diese Person sitzt. Dorthin kommst du erst, wenn dich
   jemand aus der Etage darunter weiterschickt. */
etage: 2,
/* Womit die Person im Menü steht und welches Farbschema sie mitbringt. */
kurz: `Statistiker, 52. Wilder grauer Schopf und Kopfhörer um den Hals,
       ein Schreibtisch, der seit Jahren nicht aufgeräumt wurde.`,
theme: `tinte`,
menubild: `personen/baumgartner/bilder/freundlich.webp`,

hero: {
  name: `Tobias Baumgartner`, age: 52, job: `Statistiker`,
  ort: `Erster Stock, letzte Tür, Blick in den Innenhof`,
  /* Die wahre Ausprägung, −2 bis +2. Danach antwortet er, und das ist
     die Lösung, die am Ende aufgedeckt wird. */
  z: { O: 2, C: -1, E: 2, A: 1, N: -2 },
  m: { FRE: 2, GEL: -2 }
},

rollenprior: { C: 0.55, O: 0.2, E: -0.45 },

rollentext: `Statistiker: das Klischee sagt gründlich, eher still, mäßig neugierig.`,

stimmungen: {
  neutral:      { t:`sachlich`,     bild:`personen/baumgartner/bilder/neutral.webp` },
  freundlich:   { t:`freundlich`,   bild:`personen/baumgartner/bilder/freundlich.webp` },
  amuesiert:    { t:`amüsiert`,     bild:`personen/baumgartner/bilder/amuesiert.webp` },
  interessiert: { t:`interessiert`, bild:`personen/baumgartner/bilder/interessiert.webp` },
  nachdenklich: { t:`nachdenklich`, bild:`personen/baumgartner/bilder/nachdenklich.webp` },
  skeptisch:    { t:`skeptisch`,    bild:`personen/baumgartner/bilder/skeptisch.webp` },
  gereizt:      { t:`gereizt`,      bild:`personen/baumgartner/bilder/gereizt.webp` },
  verschlossen: { t:`verschlossen`, bild:`personen/baumgartner/bilder/verschlossen.webp` },
  geruehrt:     { t:`berührt`,      bild:`personen/baumgartner/bilder/geruehrt.webp` },
  abweisend:    { t:`abweisend`,    bild:`personen/baumgartner/bilder/abweisend.webp` }
},

raumbild: `personen/baumgartner/bilder/raum.webp`,

/* --- Akt 1: Ankunft als Baum. Höchstens drei Wortwechsel, dann geht es
       weiter. Jede Wahl führt auf einen anderen Knoten, deshalb ist der
       Einstieg bei jedem Durchgang ein anderer. Ein Knoten mit ende:true
       schließt die Phase ab. ---------------------------------------- */

/* --- Akt 1: Ankunft. Der Empfang laeuft ab, dann hast du genau eine
       Frage. Welche du nimmst, entscheidet, womit ihr anfangt — und
       die Frage nach den Kopfhörern legt eine Spur, die in Akt vier
       billiger wird. ------------------------------------------------ */

baum: {
  start: {
    regie: `Erster Stock. An der vorletzten Tür steht 1.14 und darunter ein Namensschild, aus dem jemand den Namen herausgezogen hat; der helle Streifen ist noch da. Die letzte Tür geht auf, bevor du klopfen kannst. Kopfhörer um den Hals, Blazer über einem Shirt, das schon einen Tag gesehen hat.`,
    er: `Sie sind der Grund, warum mein Kalender heute rot ist. Kommen Sie rein, ich muss nur eben —`,
    wie: `schnell, im Gehen gesprochen`, stimmung: `neutral`,
    erRegie: `Er schiebt einen Stapel Ausdrucke vom Besucherstuhl auf den Boden.`,
    er2: `So. Setzen.`, wie2: `kurz, endgültig`,
    nachRegie: `Er stellt zwei Tassen hin, ohne zu fragen, und schiebt dir eine zu. Die Maschine dahinter ist von 2009 und klingt danach. Ihr habt vierzig Minuten, und du hast dir vorgenommen, nicht sofort nach der Stelle zu fragen.`,
    frage: true
  },

  beruf: {
    er: `Statistiker. Das heißt: Leute kommen mit Daten zu mir, die sie längst erhoben haben, und fragen, was drinsteht. Meistens lautet die Antwort: weniger, als Sie hoffen. Manchmal steht etwas drin, an das keiner gedacht hat. Für den zweiten Fall mache ich den Job.`,
    wie: `flüssig, oft gesagt, aber nicht müde`, stimmung: `freundlich`, ende: true
  },
  tafel: {
    er: `Die steht da seit einem Streit im März. Ein Kollege und ich sind uns über eine Korrektur nicht einig geworden. Ich wische das nicht weg, bevor einer von uns recht hat.`,
    wie: `amüsiert, mit einem Kopfnicken zur Wand`, stimmung: `amuesiert`,
    fakt: `wischt eine strittige Tafel nicht ab, bevor sie geklärt ist`, ende: true
  },
  musik: {
    er: `Bei der Arbeit? Nein. Danach.`,
    erRegie: `Er legt die Hand auf die Kopfhörer, wie um sie zu prüfen, und lässt sie wieder sinken.`,
    er2: `Das ist eine andere Baustelle.`, wie2: `kürzer, abschließend`,
    wie: `zunächst offen, dann zugeknöpft`, stimmung: `verschlossen`,
    spur: `musik`, ende: true
  }
},

/* Die eine Frage, die du im Empfang hast. */

kennenfrage: [
  { t: `Was machen Sie hier eigentlich genau?`, wie: `interessiert`, ziel: `beruf` },
  { t: `Die Tafel da hinten — arbeiten Sie noch dran?`, wie: `beiläufig, mit einem Blick über die Schulter`, ziel: `tafel` },
  { t: `Sie hören Musik bei der Arbeit?`, wie: `leicht, fast nebenbei`, ziel: `musik` }
],

/* Nach dem Empfang: ein Satz, dann geht es los. Dein Vorsatz, das
   Anliegen zurückzuhalten, wird hier gesetzt — er zahlt sich im
   letzten Akt aus. */

uebergang1: {
  duFest: `Du sagst, warum du da bist: eine Anzeige, drei Zeilen, jemand in diesem Haus sucht Hilfe. Unterschrieben mit R. Melzer, Zimmer 1.14. Wie dringend du sie brauchst, sagst du nicht.`,
  er: `Melzer. Ja. Nebenan, die Tür, an der Sie eben vorbeigekommen sind.`,
  erRegie: `Er lehnt sich zurück und legt die Kopfhörer auf den Tisch.`,
  er2: `Die Anzeige war eigentlich meine Idee. Wir wollten die Stelle teilen — er die eine Hälfte, ich die andere. Dann war er weg, und mit ihm die Hälfte, die er bezahlt hätte. Davon später. Erst reden wir über etwas anderes, sonst wird das hier ein Bewerbungsgespräch, und darin bin ich furchtbar.`,
  wie: `amüsiert, ein wenig lauernd`, wie2: `schneller, offener`, stimmung: `interessiert`
},

/* --- Fuenf Einstiege. Beim Wiederkommen faengt es hier an. Bei ihm
       muss man nichts tun: er redet los. ------------------------- */

einstieg: [
  { id:`geklopft`, t:`Ich habe geklopft.`, wie:`halb entschuldigend`,
    er:`Habe ich gehört. Ich habe nur gerade eine Zahl im Kopf gehabt, die ich nicht verlieren wollte.`,
    erRegie:`Er zeigt auf einen Zettel, auf dem eine einzelne Zahl steht, sonst nichts.`,
    er2:`Da ist sie. Jetzt kann sie weg. Setzen Sie sich irgendwo hin, wo nichts liegt — viel Auswahl haben Sie nicht.`,
    wie:`schnell`, wie2:`vergnügt`, stimmung:`freundlich`,
    fakt:`schreibt Zahlen auf Zettel, um sie aus dem Kopf zu bekommen` },

  { id:`kopfhoerer`, t:`Was hören Sie da?`, wie:`neugierig`,
    er:`Nichts. Die sind aus.`,
    erRegie:`Er nimmt sie vom Hals und legt sie auf den Tisch.`,
    er2:`Sie sind seit halb neun aus. Ich habe sie um, damit die Leute auf dem Gang mich nicht ansprechen. Das funktioniert seit vier Jahren.`,
    wie:`trocken`, wie2:`ohne jede Reue`, stimmung:`amuesiert`,
    fakt:`trägt ausgeschaltete Kopfhörer, damit ihn auf dem Gang niemand anspricht` },

  { id:`stapel`, t:`Der Stapel ist gewachsen.`, wie:`mit einem Blick auf den Schreibtisch`,
    er:`Der wächst und schrumpft, das ist ein Prozess.`,
    erRegie:`Er legt eine Hand darauf, ohne hinzusehen.`,
    er2:`Und ich finde alles darin in unter zehn Sekunden. Wenn jemand aufräumt, finde ich zwei Wochen lang nichts. Das ist einmal passiert.`,
    wie:`gut gelaunt`, wie2:`bestimmt`, stimmung:`amuesiert`,
    fakt:`hat nach einem fremden Aufräumen zwei Wochen lang nichts gefunden` },

  { id:`fenster`, t:`Draußen wird gebaut.`, wie:`mit einem Blick in den Innenhof`,
    er:`Seit März. Presslufthammer immer um Viertel nach zehn, als hätten sie einen Plan.`,
    erRegie:`Er sieht auf die Uhr, dann aus dem Fenster.`,
    er2:`Ich habe angefangen, meine schwierigen Sachen auf halb acht zu legen. Das war die beste Änderung dieses Jahres, und ich verdanke sie einem Bagger.`,
    wie:`lebhaft`, wie2:`sehr vergnügt`, stimmung:`amuesiert`,
    fakt:`arbeitet seit dem Baulärm ab halb acht und hält das für eine Verbesserung` },

  { id:`kaffee`, t:`Sie haben zwei Tassen hier stehen.`, wie:`beiläufig`,
    er:`Drei. Die dritte steht hinter dem Monitor.`,
    erRegie:`Er stellt sie dazu, ohne Verlegenheit.`,
    er2:`Ich mache eine, vergesse sie, mache eine neue. Am Nachmittag räume ich alle drei zusammen weg und finde das jedes Mal komisch.`,
    wie:`sachlich`, wie2:`vergnügt`, stimmung:`amuesiert`,
    fakt:`vergisst angefangene Tassen und räumt nachmittags drei auf einmal weg` },


  { id:`nachbarin`, t:`Auf dem Gang riecht es nach Leim.`, wie:`schnuppernd`,
    er:`Das ist Frau Reuter, dritte Tür.`,
    erRegie:`Er zeigt mit dem Daumen über die Schulter, ohne hinzusehen.`,
    er2:`Wir sitzen seit sechs Jahren an demselben Gang, und ich weiß bis heute nicht, ob sie mich mag. Sie klopft immer an, bevor sie hereinkommt. Ich klopfe nie. Das sagt vermutlich mehr über mich als über sie.`,
    wie:`sofort`, wie2:`gut gelaunt, und dann eine Spur nachdenklich`, stimmung:`amuesiert`,
    fakt:`sitzt seit sechs Jahren am selben Gang wie Annika Reuter und weiß nicht, ob sie ihn mag` }
],

/* --- Die Frage nach Arbeit. Er ist der, der sucht — nur weiss er das
       selbst nicht so genau, bevor ihn jemand danach fragt. ------- */

arbeit: {
  frage: `Sucht hier eigentlich jemand jemanden?`,
  wie: `beiläufig`,
  zu: { er:`Puh. Bei uns läuft gerade eine Ausschreibung, glaube ich.`,
        erRegie:`Er sieht auf den Stapel, als könnte die Antwort darin liegen, und sucht nicht.`,
        er2:`Oder sie ist durch. Ich müsste nachsehen, und ich sehe garantiert nicht nach.`,
        wie:`gut gelaunt`, wie2:`entwaffnend ehrlich und völlig unbrauchbar`, stimmung:`amuesiert` },
  offen: { er:`Ich habe im Frühjahr zweimal unten gefragt, ob jemand jemanden weiß.`,
           erRegie:`Er schiebt den Stapel zur Seite, was du ihn noch nie hast tun sehen.`,
           er2:`Nicht für eine Stelle — dafür reicht das Geld nicht. Für die Sachen, die niemand macht, weil sie zwischen drei Abteilungen liegen. Genau die Art Arbeit, für die man niemanden findet, weil sie in keiner Ausschreibung steht.`,
           wie:`schneller`, wie2:`sehr direkt`, stimmung:`interessiert`,
           fakt:`hat im Frühjahr zweimal gefragt, ob jemand jemanden für die Arbeit zwischen den Abteilungen weiß` }
},

zwischen: {
  bf: {
    3: { regie: `Er dreht den Stuhl eine Vierteldrehung, sodass er dich direkt ansieht.`,
         er: `Sie fragen sehr geordnet für jemanden, der noch nicht gesagt hat, was er eigentlich will.`,
         du: [
           { t: `Ertappt. Ich will erst wissen, mit wem ich rede.`,
             er: `Ehrlich. Machen Sie weiter, ich sage Bescheid, wenn es mir zu bunt wird.` },
           { t: `Ich bin neugierig, mehr nicht.`,
             erRegieVor: `Er zieht einen Mundwinkel hoch.`,
             er: `Neugier kenne ich. Die ist selten nur neugierig. Weiter.` }
         ] }
  },
  mo: {
    2: { regie: `Er steht auf, füllt zwei Gläser mit Wasser und stellt eines vor dich hin, ohne zu fragen.`,
         er: `Jetzt Sie. Was treibt Sie an? Und sagen Sie bitte nicht Ergebnisse.`,
         du: [
           { t: `Dass am Ende etwas dasteht, das ohne mich nicht da wäre.`,
             er: `Das ist eine ordentliche Antwort. Die schreibe ich mir auf.` },
           { t: `Ehrlich gesagt: dass es weitergeht.`,
             erRegieVor: `Er setzt sich wieder, langsamer als vorher.`,
             er: `Auch ehrlich. Und seltener.` }
         ] }
  }
},

/* --- Akt 2: neun Fragen zur Person, du stellst sechs. -------------- */

bigfive: [
  { id:`wochenende`, q:`Was haben Sie am Wochenende gemacht?`,
    a:[
      {id:`losgefahren`, wie:`aufgeräumt schnell, mit einem Lachen am Ende`, stimmung:`amuesiert`, t:`Samstag früh losgefahren, ohne Ziel, abends war ich in Halberstadt. Kennen Sie Halberstadt? Muss man nicht.`, l:{O:1.3,C:-0.8,E:0.3}, fakt:`fährt los, ohne ein Ziel zu haben`},
      {id:`plan`, wie:`gleichmäßig, fast pedantisch`, stimmung:`neutral`,       t:`Samstag Einkauf, Sonntag die Steuer. Ich mag es, wenn die Woche aufgeräumt anfängt.`, l:{C:1.3,O:-0.7}},
      {id:`balkon`, wie:`laut, sichtlich zufrieden`, stimmung:`amuesiert`,     t:`Zwölf Leute auf meinem Balkon. Eingeladen hatte ich vier.`, l:{E:1.4,A:0.5}, fakt:`aus vier Gästen werden bei ihm zwölf`},
      {id:`paper`, wie:`trocken, achselzuckend`, stimmung:`freundlich`,      t:`Ich wollte ein Paper zu Ende lesen. Ich habe stattdessen drei andere angefangen.`, l:{O:1.0,C:-0.9}, fakt:`fängt mehr an, als er beendet`},
      {id:`muede`, wie:`leise, kurz angebunden`, stimmung:`verschlossen`,      t:`Nichts Erwähnenswertes. Ich war müde.`, l:{E:-0.9,N:0.5}}
    ]},

  { id:`schreibtisch`, q:`Ihr Schreibtisch sieht bewohnt aus.`,
    an:{ 'wochenende:paper': `Drei angefangene Paper — liegen die alle hier auf dem Tisch?` },
    a:[
      {id:`such`, wie:`schnell, fordernd, halb Herausforderung`, stimmung:`interessiert`,    t:`Ordnung ist ein Suchproblem, kein Schönheitsproblem. Ich finde alles in unter zehn Sekunden. Wollen Sie mich testen?`, l:{C:-1.1,O:0.6,E:0.5}, fakt:`nennt Ordnung ein Suchproblem, kein Schönheitsproblem`, nachRegie:`Er greift ohne hinzusehen in den zweiten Stapel und zieht ein einzelnes Blatt heraus.`},
      {id:`quartal`, wie:`sachlich, ein wenig stolz`, stimmung:`neutral`, t:`Einmal im Quartal räume ich auf. Steht im Kalender, mit Erinnerung zwei Tage vorher.`, l:{C:1.4}},
      {id:`stoert`, wie:`leiser, unangenehm berührt`, stimmung:`nachdenklich`,  t:`Ja. Das stört mich selbst am meisten, ehrlich gesagt.`, l:{N:0.9,C:0.4}},
      {id:`egal`, wie:`beiläufig, ohne hinzusehen`, stimmung:`neutral`,    t:`Ist mir nie aufgefallen.`, l:{C:-0.8,N:-0.6}}
    ]},

  { id:`schief`, q:`Erzählen Sie mir von einer Auswertung, die schiefgegangen ist.`,
    an:{ 'schreibtisch:such': `Zehn Sekunden. Erzählen Sie mir trotzdem von einer Auswertung, die schiefgegangen ist.`,
         'frist:spaet':       `Und wenn es doch mal nicht aufgeht — erzählen Sie mir von einer Auswertung, die schiefging.` },
    a:[
      {id:`komma`, wie:`ruhig, ohne jede Verlegenheit`, stimmung:`freundlich`,      t:`2019. Ein verschobenes Komma, drei Wochen lang in einem Bericht. Ich habe es selbst gefunden, eine Mail an alle geschrieben, fertig. Peinlich war es ungefähr zehn Minuten.`, l:{N:-1.4,C:-0.3,A:0.3}, fakt:`hat einen eigenen Fehler öffentlich korrigiert, ohne Drama`, nachEr:`Übelgenommen hat mir die Mail übrigens niemand. Das war die eigentliche Lehre.`},
      {id:`wachliegen`, wie:`stockend, deutlich langsamer`, stimmung:`nachdenklich`, t:`Es gibt eine, an die denke ich heute noch nachts.`, l:{N:1.4}},
      {id:`kaputt`, wie:`scharf, mit einem Seitenhieb`, stimmung:`skeptisch`,     t:`Schiefgegangen ist wenig. Meistens waren die Daten schon kaputt, als sie bei mir ankamen.`, l:{A:-0.7,N:-0.4}},
      {id:`protokoll`, wie:`bestimmt, fast trotzig`, stimmung:`neutral`,  t:`Seitdem habe ich ein Protokoll, das jeden Schritt festhält. Passiert mir nicht nochmal.`, l:{C:1.3,N:0.4}}
    ]},

  { id:`methode`, q:`Woran entscheiden Sie, welches Verfahren das richtige ist?`,
    an:{ 'schreibtisch:such': `Und bei der Methode — auch ein Suchproblem?`,
         'schief:komma':      `Nach so einer Sache: woran entscheiden Sie, welches Verfahren das richtige ist?` },
    a:[
      {id:`neugier`, wie:`schnell, dann eine Pause vor dem letzten Satz`, stimmung:`interessiert`,   t:`Meistens am Datensatz. Manchmal, weil ich etwas gelesen habe und wissen will, ob es hält. Das ist kein guter Grund, aber ein ehrlicher.`, l:{O:1.4,C:-0.5}, fakt:`probiert Verfahren aus, weil er neugierig ist`},
      {id:`bewaehrt`, wie:`knapp, endgültig`, stimmung:`neutral`,  t:`Was sich bewährt hat. Neue Verfahren haben eine hohe Sterblichkeit.`, l:{O:-1.3,C:0.6}},
      {id:`leitfaden`, wie:`neutral, ohne Wärme`, stimmung:`neutral`, t:`Es gibt einen Leitfaden im Haus. Der ist gut.`, l:{C:1.0,O:-0.9}},
      {id:`frage`, wie:`betont, jedes Wort einzeln gesetzt`, stimmung:`interessiert`,     t:`An der Frage. Erst die Frage, dann das Verfahren, in der Reihenfolge und nie andersrum.`, l:{O:0.6,C:0.7}}
    ]},

  { id:`allein`, q:`Arbeiten Sie lieber allein oder mit Leuten?`,
    an:{ 'wochenende:balkon': `Zwölf Leute auf dem Balkon. Und bei der Arbeit, lieber allein oder mit Leuten?`,
         'wochenende:muede':  `Klingt nach wenig Leuten. Arbeiten Sie auch lieber allein?` },
    a:[
      {id:`laut`, wie:`lauter werdend, mit den Händen`, stimmung:`amuesiert`,     t:`Mit Leuten, und zwar laut. Ich denke schlecht im Stillen. Meine besten Sachen sind an einer Tafel entstanden, mit jemandem, der widersprochen hat.`, l:{E:1.5,O:0.5}, fakt:`denkt an der Tafel, im Widerspruch`, nachRegie:`Er zeigt hinter dich. Dort hängt eine Tafel, halb abgewischt, mit drei Zeilen, die niemand weggewischt hat.`},
      {id:`tuer`, wie:`leise, bestimmt`, stimmung:`verschlossen`,     t:`Allein, Tür zu, Kopfhörer auf. Sonst komme ich zu nichts.`, l:{E:-1.3}},
      {id:`beides`, wie:`sachlich abwägend`, stimmung:`neutral`,   t:`Vormittags allein, nachmittags Leute. Anders geht beides nicht.`, l:{C:0.6,E:0.2}},
      {id:`aufleute`, wie:`trocken, mit einer kleinen Pause vor dem Schluss`, stimmung:`skeptisch`, t:`Kommt auf die Leute an. Bei den meisten: allein.`, l:{E:-0.7,A:-0.8}}
    ]},

  { id:`widerspruch`, q:`Was passiert, wenn jemand Ihr Ergebnis anzweifelt?`,
    an:{ 'allein:laut':  `Sie sagten, jemand muss widersprechen. Und wenn jemand Ihr Ergebnis anzweifelt?`,
         'schief:komma': `Und wenn der Fehler nicht Ihnen auffällt, sondern jemand anderem?` },
    a:[
      {id:`freude`, wie:`schneller, hörbar aufgeräumt`, stimmung:`interessiert`,      t:`Dann wird es interessant. Ich frage nach der Stelle, an der er es für falsch hält. Entweder hat er recht, oder er lernt etwas. Beides ist ein guter Tag.`, l:{N:-1.3,O:0.8,A:0.6,E:0.4}, fakt:`freut sich über Widerspruch`},
      {id:`verteidigen`, wie:`hart, ohne Pause`, stimmung:`gereizt`, t:`Dann verteidige ich es. Ich habe es nicht geraten.`, l:{A:-1.0,N:0.3}},
      {id:`nachrechnen`, wie:`leiser, gegen Ende fast tonlos`, stimmung:`nachdenklich`, t:`Dann rechne ich es nachts nochmal nach. Meistens stimmt es. Beruhigt mich trotzdem nicht.`, l:{N:1.4}},
      {id:`formal`, wie:`kühl, geschäftlich`, stimmung:`verschlossen`,      t:`Dann soll er es schriftlich einreichen. Dafür gibt es ein Verfahren.`, l:{C:1.0,A:-0.6}}
    ]},

  { id:`frist`, q:`Was machen Sie mit einer Frist, die zu knapp ist?`,
    an:{ 'wochenende:paper': `Sie fangen viel an. Was machen Sie mit einer Frist, die zu knapp ist?`,
         'schreibtisch:quartal': `Sie planen also. Was machen Sie mit einer Frist, die trotzdem zu knapp ist?` },
    a:[
      {id:`sagen`, wie:`ruhig, sehr klar`, stimmung:`neutral`,  t:`Ich sage, dass sie zu knapp ist. Am ersten Tag, nicht am letzten.`, l:{N:-1.0,A:-0.3,C:0.4}, fakt:`sagt früh, wenn etwas nicht geht`},
      {id:`nachts`, wie:`achselzuckend, ergeben`, stimmung:`nachdenklich`, t:`Ich mache sie trotzdem. Dann eben nachts.`, l:{C:0.7,A:0.9,N:0.5}},
      {id:`spaet`, wie:`amüsiert, mit einem kurzen Auflachen`, stimmung:`amuesiert`,  t:`Ich fange spät an und werde trotzdem fertig. Fragen Sie mich nicht, wie.`, l:{C:-1.2,N:-0.9,E:0.4}, fakt:`fängt spät an und wird trotzdem fertig`},
      {id:`puffer`, wie:`zügig, zufrieden mit sich`, stimmung:`neutral`, t:`Kommt bei mir nicht vor. Ich rechne von hinten und lege Puffer drauf.`, l:{C:1.5,N:-0.3}}
    ]},

  { id:`lesen`, q:`Was lesen Sie gerade, das nichts mit Arbeit zu tun hat?`,
    an:{ 'methode:neugier':  `Diese Neugier: hört die auf, wenn Sie das Haus verlassen? Was lesen Sie gerade?`,
         'wochenende:losgefahren': `Halberstadt also. Was lesen Sie gerade, das nichts mit Arbeit zu tun hat?` },
    a:[
      {id:`drei`, wie:`begeistert, schneller werdend`, stimmung:`interessiert`,  t:`Drei Sachen parallel. Etwas über Glockenguss, einen Roman, den ich nicht mag, aber zu Ende lese, und die Bedienungsanleitung meiner Waschmaschine. Die ist erstaunlich gut geschrieben.`, l:{O:1.5,C:-0.4,E:0.3}, fakt:`liest drei Sachen parallel, alles quer`, nachEr:`Das mit der Waschmaschine ist kein Witz. Der Absatz über Unwucht ist besser als die meisten Methodenteile, die ich lese.`},
      {id:`krimi`, wie:`gleichmütig`, stimmung:`neutral`, t:`Krimis. Immer derselbe Autor. Ich weiß, was ich kriege.`, l:{O:-1.2}},
      {id:`nix`, wie:`kurz, abschließend`, stimmung:`verschlossen`,   t:`Komme ich nicht zu.`, l:{O:-0.6,C:0.3}},
      {id:`fach`, wie:`leiser, ein Eingeständnis`, stimmung:`nachdenklich`,  t:`Ehrlich? Auch Fachsachen. Ich kann schlecht abschalten.`, l:{O:0.5,N:0.5,C:0.4}}
    ]},

  { id:`schlampig`, q:`Ein Kollege arbeitet konsequent schlampig. Was tun Sie?`,
    an:{ 'widerspruch:freude': `Sie mögen Widerspruch. Und wenn jemand einfach nur schlampig arbeitet?` },
    a:[
      {id:`hin`, wie:`fest, ohne Schärfe`, stimmung:`neutral`,    t:`Ich gehe hin und sage es ihm. Unter vier Augen, einmal, ohne Publikum. Danach ist es sein Problem.`, l:{A:0.6,E:0.7,N:-0.9}, fakt:`spricht Dinge direkt an, ohne Publikum`},
      {id:`chef`, wie:`sachlich, ein wenig steif`, stimmung:`neutral`,   t:`Ich sage es der Leitung. Dafür ist sie da.`, l:{A:-0.7,C:0.7}},
      {id:`selber`, wie:`beiläufig, resigniert`, stimmung:`nachdenklich`, t:`Ich mache es stillschweigend nach. Geht schneller als die Diskussion.`, l:{A:0.9,E:-0.6}},
      {id:`zirkus`, wie:`trocken, mit hochgezogener Braue`, stimmung:`skeptisch`, t:`Nichts. Nicht mein Zirkus, nicht meine Affen.`, l:{A:-0.9,C:-0.5}}
    ]}
],

/* --- Akt 3: sieben Fragen auf zwei Waagen.

       Jede Frage bietet vier Antworten, eine je Pol: selbst bestimmen,
       sicher sein, gesehen werden, dazugehören. Dadurch trennt jede
       Frage beide Waagen auf einmal, und man braucht weniger davon.

       Die Antworten sind absichtlich lang. Sie sollen nicht nur einen
       Wert setzen, sondern einen Menschen zeigen: eine Zahl, ein Jahr,
       ein Name — irgendetwas, das man sich merkt und worauf man im
       Verkauf zurückgreifen kann. ---------------------------------- */

motivfragen: [
  { id:`zusage`, q:`Was müsste ein Projekt haben, damit Sie zusagen?`,
    an:{ 'allein:laut': `Sie brauchen jemanden, der widerspricht. Was müsste ein Projekt sonst noch haben, damit Sie zusagen?`,
         'methode:neugier': `Wenn Neugier reicht, um ein Verfahren zu probieren: was müsste ein ganzes Projekt haben, damit Sie zusagen?` },
    a:[
      {id:`freihand`, wie:`langsam, jedes Wort gewogen`, stimmung:`interessiert`,
       t:`Dass mir keiner reinredet, wie ich es rechne. Über das Was können wir streiten, gern lange. Über das Wie nicht.`,
       nachRegie:`Er legt beide Hände flach auf den Tisch, als wäre damit etwas abgeschlossen.`,
       nachEr:`Ich habe zweimal Projekte abgesagt, bei denen die Methode im Antrag schon feststand. Beide sind gescheitert. Das ist kein Beweis, aber es hilft mir beim Schlafen.`,
       aff:{FRE:2.4}, fakt:`hat zwei Projekte abgesagt, weil die Methode schon feststand`},
      {id:`bestand`, wie:`vorsichtig, gedämpft`, stimmung:`nachdenklich`,
       t:`Dass es nicht nach einem Jahr eingestellt wird. Ich habe hier vier Vorhaben begraben, die gut waren und trotzdem weg sind.`,
       nachEr:`Man gewöhnt sich das Anfangen ab, wenn das Aufhören immer von woanders kommt.`,
       aff:{FRE:-2.2}, fakt:`hat vier gute Vorhaben einstellen sehen und ist seither vorsichtig`},
      {id:`sichtbar`, wie:`halb im Scherz, halb nicht`, stimmung:`freundlich`,
       t:`Dass am Ende mein Name draufsteht. An erster Stelle, wenn wir schon ehrlich sind.`,
       aff:{GEL:2.2}},
      {id:`leute`, wie:`warm, unangestrengt`, stimmung:`freundlich`,
       t:`Dass ich die Leute mag. Klingt weich, ist es nicht: mit jemandem, den ich nicht leiden kann, rechne ich schlechter. Das habe ich an mir gemessen.`,
       aff:{GEL:-2.0}, fakt:`rechnet nach eigener Messung schlechter mit Leuten, die er nicht mag`}
    ]},

  { id:`lohnt`, q:`Woran merken Sie am Ende, dass es sich gelohnt hat?`,
    an:{ 'zusage:freihand': `Angenommen, keiner redet Ihnen rein. Woran merken Sie dann am Ende, dass es sich gelohnt hat?`,
         'zusage:bestand':  `Angenommen, es wird nicht eingestellt. Woran merken Sie dann, dass es sich gelohnt hat?` },
    a:[
      {id:`verstanden`, wie:`erst zögernd, dann fest`, stimmung:`nachdenklich`,
       t:`Wenn ich hinterher etwas verstanden habe, das ich vorher nicht wusste. Klingt banal. Ist der ganze Punkt.`,
       nachEr:`Zweimal in dreißig Jahren ist mir das richtig passiert. Beide Male stand nichts davon im Abschlussbericht.`,
       aff:{FRE:2.0}, fakt:`hat zweimal in dreißig Jahren wirklich etwas verstanden, beides steht in keinem Bericht`},
      {id:`belastbar`, wie:`nüchtern, sehr bestimmt`, stimmung:`neutral`,
       t:`Wenn die Zahl in fünf Jahren noch stimmt. Alles andere ist Tagesgeschäft.`,
       nachEr:`Ich habe eine Schätzung von 2013, die hält bis heute. Die ist mir lieber als alles, was ich seither veröffentlicht habe.`,
       aff:{FRE:-1.9}, fakt:`ist auf eine Schätzung von 2013 stolz, weil sie bis heute hält`},
      {id:`zitiert`, wie:`leichthin, fast verlegen`, stimmung:`freundlich`,
       t:`Wenn es zitiert wird. Und ja, ich schaue nach. Nicht täglich.`,
       aff:{GEL:2.0}},
      {id:`benutzt`, wie:`ruhig, zufrieden`, stimmung:`freundlich`,
       t:`Wenn die Leute im Haus es benutzen, ohne dass ich danebenstehe. Am besten, ohne dass sie wissen, dass es von mir ist.`,
       aff:{GEL:-1.9}, fakt:`will, dass seine Verfahren benutzt werden, ohne dass sein Name dransteht`}
    ]},

  { id:`nervt`, q:`Was nervt Sie hier am meisten?`,
    an:{ 'schreibtisch:such': `Zehn Sekunden für ein Blatt. Was dauert hier zu lange? Was nervt Sie am meisten?`,
         'schlampig:hin':     `Sie sagen so etwas direkt. Dann sagen Sie es mir auch: was nervt Sie hier am meisten?` },
    a:[
      {id:`gremien`, wie:`hörbar aufgebracht, die Zahl betont`, stimmung:`gereizt`,
       t:`Dass ich für eine Methodenänderung drei Unterschriften brauche. Drei. Für etwas, das ich besser beurteilen kann als alle drei zusammen.`,
       nachEr:`Eine davon von jemandem, der mich einmal im Jahr sieht und mich beim Vornamen meiner Vorgängerin nennt.`,
       aff:{FRE:2.4}, fakt:`braucht drei Unterschriften für eine Methodenänderung`},
      {id:`umbau`, wie:`müde, gedehnt`, stimmung:`verschlossen`,
       t:`Der Umbau. Alle zwei Jahre eine neue Struktur, ein neues Kürzel, ein neues Formular. Ich sitze seit neunzehn Jahren im selben Zimmer und war in sechs verschiedenen Abteilungen.`,
       aff:{FRE:-2.1}, fakt:`war in neunzehn Jahren im selben Zimmer in sechs Abteilungen`},
      {id:`uebersehen`, wie:`kühl, und darunter verletzt`, stimmung:`verschlossen`,
       t:`Dass Leute entscheiden und mich hinterher fragen. Nicht weil sie mich ärgern wollen. Sie denken einfach nicht an mich.`,
       aff:{GEL:1.8}},
      {id:`mittag`, wie:`leise, unerwartet weich`, stimmung:`nachdenklich`,
       t:`Dass keiner mehr zusammen Mittag isst. Wir waren mal neun. Jetzt bringt jeder etwas mit und isst vor dem Bildschirm.`,
       nachRegie:`Er sagt es und wischt es im selben Atemzug mit der Hand weg, als wäre es nichts.`,
       aff:{GEL:-2.1}, fakt:`vermisst, dass die Abteilung zusammen Mittag gegessen hat`}
    ]},

  { id:`aendern`, q:`Wenn Sie hier morgen eine Sache ändern dürften — welche?`,
    an:{ 'nervt:gremien': `Und wenn Sie die drei Unterschriften abschaffen dürften: was käme als Nächstes?`,
         'nervt:umbau':   `Und wenn zwei Jahre lang niemand umbaut: was käme als Nächstes?` },
    a:[
      {id:`pipeline`, wie:`nüchtern, wie eine abgelesene Zahl`, stimmung:`nachdenklich`,
       t:`Eine ordentliche Datenleitung. Ich verbringe sechzig Prozent meiner Zeit mit Putzen, nicht mit Rechnen.`,
       nachRegie:`Er sagt die Zahl ohne Bitterkeit, so wie man eine Zahl abliest.`,
       nachEr:`Das sind, auf ein Berufsleben hochgerechnet, elf Jahre. Ich habe es einmal ausgerechnet und danach nie wieder.`,
       aff:{FRE:2.0}, fakt:`sechzig Prozent seiner Zeit gehen fürs Datenputzen drauf, hochgerechnet elf Jahre`},
      {id:`ruhe`, wie:`bestimmt, ohne Klage`, stimmung:`neutral`,
       t:`Zwei Jahre, in denen niemand etwas umbaut. Kein neues System, keine neue Struktur, kein neuer Name für dieselbe Abteilung.`,
       aff:{FRE:-2.2}},
      {id:`titel`, wie:`mit einem schiefen Grinsen`, stimmung:`amuesiert`,
       t:`Einen anderen Titel an der Tür. Da steht Sachbearbeitung Methoden. Ich mache seit zwölf Jahren etwas anderes.`,
       aff:{GEL:2.2}, fakt:`stört sich am Türschild Sachbearbeitung Methoden`},
      {id:`tueren`, wie:`beiläufig, aber ernst gemeint`, stimmung:`freundlich`,
       t:`Dass die Türen wieder aufbleiben dürfen. Brandschutz, sagt man mir. Seitdem redet keiner mehr im Gehen miteinander.`,
       aff:{GEL:-1.9}}
    ]},

  { id:`nichtstun`, q:`Und wenn Sie gar nichts ändern?`,
    an:{ 'aendern:pipeline': `Und wenn die Datenleitung nie kommt?`,
         'aendern:ruhe':     `Und wenn stattdessen nächstes Jahr wieder umgebaut wird?` },
    a:[
      {id:`hochrechnung`, wie:`trocken, ohne Bitterkeit`, stimmung:`nachdenklich`,
       t:`Dann verbrenne ich weiter zwei Tage die Woche mit Formatierung, bis ich in Rente gehe. Das ist keine Drohung, das ist eine Hochrechnung.`,
       aff:{FRE:1.9}, fakt:`rechnet hoch, was ihn Nichtstun kostet`},
      {id:`auszuhalten`, wie:`achselzuckend, gleichgültig`, stimmung:`verschlossen`,
       t:`Dann bleibt es, wie es ist. Ist auszuhalten. Ich habe Schlimmeres ausgehalten und dabei zugenommen.`,
       aff:{FRE:-2.0}},
      {id:`weg`, wie:`ruhig, ohne Drohung, und gerade deshalb ernst`, stimmung:`neutral`,
       t:`Dann bin ich in zwei Jahren woanders. Ich bekomme dreimal im Jahr Anrufe. Bisher habe ich immer abgelehnt.`,
       aff:{GEL:1.3, FRE:1.0}, fakt:`bekommt dreimal im Jahr Angebote und lehnt bisher ab`},
      {id:`bleiben`, wie:`warm, ein wenig resigniert`, stimmung:`nachdenklich`,
       t:`Dann bleibe ich. Wegen der Leute, nicht wegen der Arbeit. Das ist ein schlechter Grund und der einzige, der bisher gehalten hat.`,
       aff:{GEL:-1.8}, fakt:`bleibt wegen der Leute, nicht wegen der Arbeit`}
    ]},

  { id:`zustimmung`, q:`Wer muss zustimmen, wenn Sie ein Verfahren wechseln wollen?`,
    an:{ 'schlampig:hin':   `Unter vier Augen, ohne Publikum. Und wer muss zustimmen, wenn Sie ein Verfahren wechseln wollen?`,
         'schlampig:chef':  `Sie gehen zur Leitung. Muss die auch zustimmen, wenn Sie ein Verfahren wechseln wollen?` },
    a:[
      {id:`formalweg`, wie:`gerade heraus, ein wenig stolz`, stimmung:`interessiert`,
       t:`Formal die Leitung. Faktisch keiner, wenn ich es nicht aufschreibe. Ich schreibe es aber auf, weil ich kein Feigling bin.`,
       aff:{FRE:2.0}, fakt:`geht den formalen Weg, obwohl er ihn umgehen könnte`},
      {id:`leitung`, wie:`sachlich, ohne Groll`, stimmung:`neutral`,
       t:`Die Leitung, und das ist auch richtig so. Wenn jeder wechselt, wie er will, vergleicht hinterher keiner mehr etwas mit irgendwas.`,
       aff:{FRE:-2.0}},
      {id:`keiner`, wie:`knapp, mit Betonung auf mein`, stimmung:`skeptisch`,
       t:`Keiner. Das ist mein Bereich.`,
       nachEr:`Das sage ich seit elf Jahren, und seit elf Jahren hat es niemand geprüft.`,
       aff:{FRE:1.5, GEL:1.2}},
      {id:`betroffene`, wie:`bedächtig`, stimmung:`neutral`,
       t:`Alle, die betroffen sind. Ich gehe die vier Zimmer ab und frage. Dauert einen Vormittag und spart mir ein halbes Jahr.`,
       aff:{GEL:-1.9, FRE:-0.6}, fakt:`geht vor jeder Änderung die betroffenen Zimmer ab`}
    ]},

  { id:`entscheidung`, q:`Wie treffen Sie eine Entscheidung dieser Größenordnung?`,
    an:{ 'frist:spaet':  `Spät anfangen und trotzdem fertig werden: wie treffen Sie dann eine Entscheidung dieser Größenordnung?`,
         'frist:puffer': `Puffer von hinten. Wie treffen Sie eine Entscheidung dieser Größenordnung?` },
    a:[
      {id:`schnell`, wie:`zügig, sehr sicher`, stimmung:`interessiert`,
       t:`Schnell. Ich habe die Erfahrung gemacht, dass die zweite Woche Nachdenken nichts hinzufügt außer der Möglichkeit, es sich anders zu überlegen.`,
       aff:{FRE:2.0}, fakt:`entscheidet schnell, hält lange Bedenkzeit für verschwendet`},
      {id:`schlafen`, wie:`langsam, bedacht`, stimmung:`nachdenklich`,
       t:`Ich schlafe zwei Nächte drüber. Mindestens. Was nach zwei Nächten noch gut aussieht, ist meistens gut.`,
       aff:{FRE:-1.9}},
      {id:`notiz`, wie:`sachlich, mit einem Blick auf den Block`, stimmung:`neutral`,
       t:`Ich schreibe auf, wer wann was entschieden hat. Nicht aus Misstrauen. Weil hinterher immer gefragt wird, und weil ich dann derjenige bin, der es weiß.`,
       aff:{GEL:1.5}, fakt:`führt Buch darüber, wer wann was entschieden hat`},
      {id:`vertraute`, wie:`wärmer`, stimmung:`freundlich`,
       t:`Ich rede mit drei Leuten, denen ich vertraue. Zwei davon arbeiten hier nicht mehr, und ich rufe sie trotzdem an.`,
       aff:{GEL:-2.0}, fakt:`fragt bei Entscheidungen zwei ehemalige Kollegen an`}
    ]}
],

/* --- Akt 4: das Anliegen. Fünf Züge, drei Möglichkeiten je Zug. ----
   auto = Autonomieunterstützung, −2 bis +2. Der am besten belegte
          Hebel, zählt hier am schwersten.
   aff  = an welches Motiv der Zug appelliert. Passung zählt wenig,
          Fehlgriff kostet doppelt (siehe belege.asym).
   an   = Rückgriff auf einen Fakt aus dem Gespräch. Ist der Fakt
          gefallen, ersetzt der Rückgriff den Satz und bringt Bonus. */

/* --- Akt 4: was ihn privat bewegt. Vier verborgene Dinge, die du
       herausbekommen kannst, ohne dass es nach Ausfragen aussieht.
       Jede Frage hat einen Preis in Auffälligkeit. Bei zehn steht er
       auf und das Gespräch ist vorbei. ------------------------------ */

privat: {
  grenze: 10,
  felder: [
    { id:`musik`,     was:`Feierabend`, wahr:`spielt Kontrabass in einer Kellerband, seit dreißig Jahren` },
    { id:`werkstatt`, was:`zu Hause`,   wahr:`zerlegt eine mechanische Rechenmaschine von 1954` },
    { id:`tochter`,   was:`Familie`,    wahr:`Tochter studiert in Lissabon, telefoniert sonntags` },
    { id:`plan60`,    was:`Zukunft`,    wahr:`will ab sechzig auf vier Tage runter` }
  ]
},

privatfragen: [
  { id:`feierabend`, gibt:`musik`, auf:1,
    q:`Was machen Sie eigentlich, wenn Sie hier rausgehen?`,
    an:{ musik:`Sie sagten, die Kopfhörer sind eine andere Baustelle. Was für eine?` },
    offen: { er:`Ich spiele Kontrabass. Keller, vier Leute, seit dreißig Jahren dieselben. Wir sind nicht gut, aber wir sind pünktlich.`,
             wie:`erst zögernd, dann schneller, mit Wärme`, stimmung:`freundlich`,
             fakt:`spielt Kontrabass in einer Kellerband, seit dreißig Jahren` },
    zu:    { er:`Rausgehen. Interessantes Konzept.`, wie:`ausweichend, mit einem Blick auf den Bildschirm`, stimmung:`verschlossen` } },

  { id:`haende`, gibt:`werkstatt`, auf:1,
    q:`Sie haben Werkstatthände. Schrauben Sie an etwas?`,
    an:{ such:`Wer in zehn Sekunden alles findet, hat das geübt. Woran denn?` },
    offen: { er:`Eine Brunsviga von 1954. Mechanische Rechenmaschine, Kurbel, Zahnräder. Sie lag in Teilen im Keller meines Schwiegervaters. Ich weiß noch nicht, ob ich sie wieder zusammenkriege.`,
             wie:`begeistert, deutlich schneller`, stimmung:`interessiert`,
             fakt:`zerlegt eine mechanische Rechenmaschine von 1954` },
    zu:    { er:`Ich habe Hände wie jeder andere.`, wie:`abweisend, kurz`, stimmung:`skeptisch` } },

  { id:`sonntag`, gibt:`tochter`, auf:2,
    q:`Haben Sie sonntags auch schon mal frei?`,
    offen: { er:`Sonntags telefoniere ich mit meiner Tochter. Die studiert in Lissabon und ruft nie an, also rufe ich an. Elf Uhr, jede Woche.`,
             wie:`weicher, langsamer`, stimmung:`geruehrt`,
             fakt:`Tochter studiert in Lissabon, telefoniert sonntags` },
    zu:    { er:`Sonntag ist Sonntag.`, wie:`knapp, mit einer Handbewegung, die das Thema wegwischt`, stimmung:`verschlossen` } },

  { id:`weiter`, gibt:`plan60`, auf:2,
    q:`Sehen Sie sich hier noch in zehn Jahren?`,
    an:{ hochrechnung:`Sie haben vorhin hochgerechnet, bis zur Rente. Ist die Zahl, die dabei rauskommt, eine, die Ihnen gefällt?` },
    offen: { er:`In zehn Jahren bin ich zweiundsechzig. Ich will ab sechzig auf vier Tage. Das habe ich hier noch niemandem gesagt, also behalten Sie es bitte für sich.`,
             wie:`leise, sehr direkt`, stimmung:`nachdenklich`,
             fakt:`will ab sechzig auf vier Tage runter` },
    zu:    { er:`Ich sehe mich schon Freitag kaum.`, wie:`ausweichend, mit einem halben Lachen`, stimmung:`skeptisch` } },

  /* Die plumpen Fragen. Sie liefern fast sicher, kosten aber das Dreifache. */
  { id:`direkt`, gibt:`musik`, auf:3, plump:true,
    q:`Erzählen Sie doch mal was von sich privat.`,
    offen: { er:`Privat.`, wie:`gedehnt, sehr kühl`, stimmung:`gereizt`,
             nachEr:`Kontrabass. Reicht das?`, fakt:`spielt Kontrabass in einer Kellerband, seit dreißig Jahren` },
    zu:    { er:`Privat heißt privat. Deshalb heißt es so.`, wie:`hart, ohne Pause`, stimmung:`gereizt` } },

  { id:`familie`, gibt:`tochter`, auf:3, plump:true,
    q:`Sind Sie verheiratet? Kinder?`,
    offen: { er:`Eine Tochter. Lissabon.`, wie:`knapp, abschließend`, stimmung:`verschlossen`,
             fakt:`Tochter studiert in Lissabon, telefoniert sonntags` },
    zu:    { er:`Wir kennen uns seit vierzig Minuten.`, wie:`scharf`, stimmung:`gereizt` } },

  { id:`geld`, gibt:`plan60`, auf:3, plump:true,
    q:`Verdient man hier eigentlich genug?`,
    offen: { er:`Genug wofür? Für vier Tage die Woche ab sechzig reicht es. Gerade so.`,
             wie:`überrascht, dann offen`, stimmung:`nachdenklich`,
             fakt:`will ab sechzig auf vier Tage runter` },
    zu:    { er:`Das fragt man nicht, und Sie wissen das.`, wie:`sehr kühl`, stimmung:`gereizt` } }
],

hinausgeworfen: {
  regie: `Er steht auf, bevor du zu Ende gesprochen hast, und nimmt die Kopfhörer vom Tisch.`,
  er: `Wissen Sie, ich habe vierzig Minuten geblockt, nicht meine Biografie. Schicken Sie mir per Mail, was Sie eigentlich wollten.`,
  wie: `ruhig, endgültig, ohne jede Lautstärke`, stimmung: `abweisend`
},

/* --- Akt 5: der Verkauf. Erst das Was, dann das Wie. --------------
   passt   = an welche Motive das Produkt selbst ruehrt
   spricht = welche privaten Funde es zusaetzlich treffen             */

/* ═══════════════════════════════════════════════════════════════════
   Was seit dem letzten Mal passiert ist.

   Bei jedem Besuch wird einer dieser Zustände gezogen, mit Vorrang für
   die, die du noch nicht erlebt hast. Jeder hat drei Wege hinein.

     liest    welche Persönlichkeit dein Zug unterstellt. Verrechnet mit
              seiner wahren Ausprägung: über null trifft er, unter null
              greifst du daneben. Das Spiel zeigt dir vorher nur, was
              dein eigenes Bild von ihm erwarten lässt.
     gut/zu   was daraus wird. bez ist, was es die Beziehung wert ist.
     gibt     der Bedarf, den du damit aufdeckst. Ohne ihn weißt du,
              was los ist, aber nicht, was er deshalb braucht.
   ═══════════════════════════════════════════════════════════════════ */

zustaende: [

{ id:`umzug`, titel:`Der Umzug in den Neubau`,
  regie:`Neben dem Regal stehen drei gefaltete Umzugskisten, Banderole noch dran.`,
  er:`Wir ziehen. Neubau, dritter Stock, Glas, offene Fläche. Im Februar.`,
  wie:`beiläufig, ohne jede Freude`, stimmung:`neutral`,
  bedarf:{ id:`umzug_aut`, was:`will im Neubau nicht verplant werden`, braucht:{FRE:1.2} },
  fragen:[
    { id:`tafel`, t:`Offene Fläche. Wo stellen Sie da Ihre Tafel hin?`, wie:`trocken, mit einem Blick zur Wand`,
      liest:{O:0.8, C:-0.6, E:0.5},
      gut:{ er:`Genau die Frage habe ich in der Sitzung gestellt. Es kam keine Antwort.`,
            erRegie:`Er dreht sich halb zur Tafel um.`,
            er2:`Die kommt mit. Notfalls trage ich sie nachts selbst rüber.`,
            wie:`erst trocken, dann deutlich schneller`, wie2:`entschieden`, stimmung:`amuesiert`,
            fakt:`nimmt die Tafel in den Neubau mit, ob geplant oder nicht`, bez:5 },
      zu:{ er:`Die Tafel ist ein Möbelstück. Darüber mache ich mir keine Gedanken.`,
           wie:`abweisend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`sorge`, t:`So ein Umzug macht vielen zu schaffen. Wie geht es Ihnen damit?`, wie:`vorsichtig, mitfühlend`,
      liest:{N:1.2, A:0.6, E:-0.4},
      gut:{ er:`Ehrlich gesagt schlecht. Ich hänge an dem Zimmer.`,
            wie:`leise`, stimmung:`nachdenklich`, bez:4 },
      zu:{ er:`Zu schaffen.`, erRegie:`Er sieht dich an, als hätte er sich verhört.`,
           er2:`Es ist ein Umzug, kein Trauerfall. Ich packe Kisten und stelle sie woanders hin.`,
           wie:`gedehnt`, wie2:`kühl, endgültig`, stimmung:`skeptisch`, bez:-7 } },

    { id:`plan`, t:`Gibt es schon einen Sitzplan?`, wie:`sachlich`,
      liest:{C:1.0, O:-0.3},
      gut:{ er:`Seite vier, Variante B. Ich sitze am Fenster, wenn nichts dazwischenkommt.`,
            wie:`präzise`, stimmung:`neutral`, bez:3 },
      zu:{ er:`Es gibt bestimmt einen. Ich habe ihn nicht gelesen.`,
           erRegie:`Er zuckt mit einer Schulter.`,
           er2:`Ich erfahre im Februar, wo ich sitze, und dann sitze ich da.`,
           wie:`gleichgültig`, wie2:`abschließend`, stimmung:`verschlossen`, bez:-3 } }
  ] },

{ id:`frist`, titel:`Elf Tage bis zum Gutachten`,
  regie:`An der Wand hängt ein Kalenderblatt, auf dem elf Tage durchgestrichen sind. Der zwölfte ist rot umrandet.`,
  er:`Elf Tage. Dann muss ein Gutachten raus, für das mir die halben Daten fehlen.`,
  wie:`schnell, angespannt`, stimmung:`neutral`,
  bedarf:{ id:`frist_eff`, was:`verliert die Frist an Datenaufbereitung`, braucht:{FRE:1.4} },
  fragen:[
    { id:`wohin`, t:`Wo gehen die elf Tage hin? Rechnen oder Aufräumen?`, wie:`direkt, ohne Umschweife`,
      liest:{E:0.7, O:0.5, N:-0.5},
      gut:{ er:`Aufräumen. Neun von elf.`,
            erRegie:`Er dreht den Bildschirm zu dir, ohne zu fragen.`,
            er2:`Sehen Sie sich das an. Dreiundvierzig Dateien, vier Schreibweisen für dieselbe Gemeinde. Das ist kein Gutachten, das ist Hausarbeit.`,
            wie:`sofort, fast erleichtert`, wie2:`aufgebracht, aber gern`, stimmung:`interessiert`,
            fakt:`neun von elf Tagen gehen für Datenaufbereitung drauf`, bez:6 },
      zu:{ er:`Das rechne ich Ihnen jetzt nicht vor.`, wie:`abweisend`, stimmung:`skeptisch`, bez:-4 } },

    { id:`hilfe`, t:`Haben Sie jemanden, der Ihnen etwas abnimmt?`, wie:`fürsorglich`,
      liest:{A:0.8, N:0.6, E:-0.6},
      gut:{ er:`Zwei Leute, wenn ich frage. Ich frage zu selten.`, wie:`nachdenklich`, stimmung:`nachdenklich`, bez:3 },
      zu:{ er:`Abnehmen.`, erRegie:`Er lacht einmal, kurz und ohne Freude.`,
           er2:`Wenn ich es erkläre, dauert es länger, als wenn ich es mache. Das ist keine Klage, das ist Arithmetik.`,
           wie:`gedehnt`, wie2:`schneidend`, stimmung:`gereizt`, bez:-6 } },

    { id:`schieben`, t:`Kann man die Frist schieben?`, wie:`pragmatisch`,
      liest:{C:-0.5, O:0.3},
      gut:{ er:`Könnte man. Ich habe es noch nie versucht und werde es auch diesmal nicht.`,
            wie:`trocken`, stimmung:`amuesiert`, bez:2 },
      zu:{ er:`Fristen sind der einzige Grund, warum hier überhaupt etwas fertig wird.`,
           wie:`bestimmt`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`chef`, titel:`Die neue Leitung`,
  regie:`Auf dem Tisch liegt ein Formular mit dem Titel Wochenbericht. Es ist leer und hat einen Kaffeering.`,
  er:`Wir haben seit April eine neue Leitung. Vierunddreißig. Sie will Wochenberichte.`,
  wie:`sehr gleichmäßig, was schon etwas heißt`, stimmung:`neutral`,
  bedarf:{ id:`chef_aut`, was:`erträgt keine Rechenschaft über sein Vorgehen`, braucht:{FRE:1.6} },
  fragen:[
    { id:`schreiben`, t:`Und? Schreiben Sie sie?`, wie:`beiläufig, aber genau hinsehend`,
      liest:{E:0.6, O:0.6, C:-0.7},
      gut:{ er:`Ich habe im April einen geschrieben und ihn seither jede Woche neu datiert.`,
            erRegie:`Er sieht dich an, ohne mit der Wimper zu zucken.`,
            er2:`Es hat noch niemand gemerkt. Das ist der eigentliche Befund.`,
            wie:`vollkommen sachlich`, wie2:`sehr zufrieden`, stimmung:`amuesiert`,
            fakt:`datiert seit April denselben Wochenbericht um`, bez:6 },
      zu:{ er:`Ich schreibe, was verlangt wird.`, wie:`knapp`, stimmung:`verschlossen`, bez:-2 } },

    { id:`jung`, t:`Vierunddreißig. Fällt Ihnen das schwer?`, wie:`vorsichtig`,
      liest:{N:1.0, A:-0.5},
      gut:{ er:`Ein wenig, ja. Nicht das Alter. Der Ton.`, wie:`offen`, stimmung:`nachdenklich`, bez:3 },
      zu:{ er:`Warum sollte mir das schwerfallen? Ich war auch mal vierunddreißig und habe auch Unsinn verlangt.`,
           erRegie:`Er schiebt das Formular ein Stück von sich weg.`,
           er2:`Das Alter ist nicht das Problem. Das Formular ist das Problem.`,
           wie:`ruhig, aber sehr bestimmt`, wie2:`trocken`, stimmung:`skeptisch`, bez:-5 } },

    { id:`was`, t:`Was steht denn drin, in so einem Bericht?`, wie:`neugierig`,
      liest:{O:0.7, C:0.3},
      gut:{ er:`Woran ich arbeite, wie weit ich bin, was mich aufhält.`,
            erRegie:`Er hebt das Formular hoch und lässt es wieder fallen.`,
            er2:`Drei Fragen, auf die ich seit dreißig Jahren dieselbe Antwort gebe: an Zahlen, mittendrin, an anderen Menschen.`,
            wie:`sachlich`, wie2:`amüsiert`, stimmung:`amuesiert`, bez:4 },
      zu:{ er:`Nichts, was Sie interessieren würde.`, wie:`abweisend`, stimmung:`verschlossen`, bez:-2 } }
  ] },

{ id:`revision`, titel:`Die Revision`,
  regie:`Neben dem Bildschirm liegt ein Aktenordner mit der Jahreszahl 2021 auf dem Rücken. Er ist aufgeschlagen.`,
  er:`Eine Revision sieht sich meine Zahlen von 2021 an. Nichts Persönliches, sagt man mir.`,
  wie:`ruhig, mit einer Betonung auf dem letzten Wort`, stimmung:`neutral`,
  bedarf:{ id:`rev_sic`, was:`muss Rechenwege von vor vier Jahren belegen können`, braucht:{FRE:-1.2} },
  fragen:[
    { id:`finden`, t:`Finden die etwas?`, wie:`geradeheraus`,
      liest:{E:0.6, N:-0.8, O:0.4},
      gut:{ er:`Sie finden zwei Stellen, an denen ich anders gerundet habe als die Vorschrift.`,
            erRegie:`Er tippt zweimal auf den Ordner.`,
            er2:`Beide Male war die Vorschrift falsch. Das steht dann nicht im Bericht.`,
            wie:`vollkommen gelassen`, wie2:`beinahe fröhlich`, stimmung:`amuesiert`,
            fakt:`hat 2021 zweimal gegen die Rundungsvorschrift gerechnet, mit Absicht`, bez:6 },
      zu:{ er:`Das werden wir sehen.`, wie:`kurz`, stimmung:`skeptisch`, bez:-3 } },

    { id:`schlaf`, t:`Schlafen Sie schlecht deswegen?`, wie:`teilnehmend, leiser`,
      liest:{N:1.4, A:0.4},
      gut:{ er:`Seit drei Wochen wache ich um vier auf.`, wie:`sehr leise`, stimmung:`nachdenklich`, bez:4 },
      zu:{ er:`Nein.`, erRegie:`Er sagt es, bevor Sie ausgesprochen haben.`,
           er2:`Ich schlafe hervorragend. Wenn ich nachts wach liege, dann wegen einer Zahl, die nicht aufgeht, und nicht wegen eines Prüfers.`,
           wie:`sofort`, wie2:`fest`, stimmung:`gereizt`, bez:-6 } },

    { id:`unterlagen`, t:`Haben Sie die Unterlagen von damals noch?`, wie:`nüchtern`,
      liest:{C:0.9},
      gut:{ er:`Alles, sortiert nach Datum. Ich hole es Ihnen, wenn Sie wollen.`, wie:`bereitwillig`, stimmung:`neutral`, bez:3 },
      zu:{ er:`Irgendwo.`, erRegie:`Er sieht auf den Boden neben dem Regal, wo Papier liegt.`,
           er2:`Genau das ist der Teil, der mich vier Wochen kosten wird.`,
           wie:`ausweichend`, wie2:`ehrlich, resigniert`, stimmung:`nachdenklich`,
           fakt:`hat die Unterlagen von 2021 nicht geordnet`, bez:-1 } }
  ] },

{ id:`nachwuchs`, titel:`Die Doktorandin`,
  regie:`Ein zweiter Stuhl steht an der Schmalseite des Tisches. Er ist neu und passt nicht zum Rest.`,
  er:`Ich bekomme eine Doktorandin. Ab Oktober, halbe Stelle, mein Thema.`,
  wie:`neutral, ohne erkennbare Richtung`, stimmung:`neutral`,
  bedarf:{ id:`nach_zug`, was:`muss zum ersten Mal jemanden anlernen`, braucht:{GEL:-1.0} },
  fragen:[
    { id:`freude`, t:`Und? Freut Sie das oder nicht?`, wie:`direkt, fast herausfordernd`,
      liest:{E:0.8, A:-0.3, O:0.5},
      gut:{ er:`Beides, und zwar gleichzeitig.`,
            erRegie:`Er lehnt sich zurück.`,
            er2:`Ich freue mich auf die Fragen. Ich fürchte den Teil, in dem ich erklären muss, warum ich etwas so mache, wie ich es mache. Ich weiß es nämlich oft nicht.`,
            wie:`sofort und ehrlich`, wie2:`nachdenklich, offen`, stimmung:`interessiert`,
            fakt:`kann sein eigenes Vorgehen oft nicht begründen und weiß das`, bez:6 },
      zu:{ er:`Das ist keine Frage von Freude.`, wie:`abweisend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`erfahrung`, t:`Sie haben doch bestimmt schon oft jemanden betreut.`, wie:`anerkennend`,
      liest:{A:-0.6, C:0.5},
      gut:{ er:`Sechs oder sieben. Zwei sind noch in der Wissenschaft.`, wie:`ruhig`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Nein.`,
           erRegie:`Er sagt es ohne Schärfe, was es schlimmer macht.`,
           er2:`Zum ersten Mal, mit zweiundfünfzig. Sie können sich denken, was das über die letzten zwanzig Jahre sagt.`,
           wie:`knapp`, wie2:`leiser`, stimmung:`verschlossen`,
           fakt:`bekommt mit zweiundfünfzig die erste Doktorandin`, bez:-4 } },

    { id:`platz`, t:`Und wo soll sie sitzen?`, wie:`praktisch, mit einem Blick auf den zweiten Stuhl`,
      liest:{O:0.4, C:-0.3},
      gut:{ er:`Da.`, erRegie:`Er zeigt auf den neuen Stuhl, ohne hinzusehen.`,
            er2:`Ich weiß noch nicht, ob ich das aushalte. Ich rede laut mit mir selbst.`,
            wie:`knapp`, wie2:`selbstironisch`, stimmung:`amuesiert`, bez:4 },
      zu:{ er:`Das wird sich finden.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`ruecken`, titel:`Der Rücken`,
  regie:`Er steht, als du hereinkommst, und er setzt sich nicht. Der Stuhl ist auf die höchste Stufe gedreht.`,
  er:`Bleiben Sie sitzen. Ich stehe gerade lieber.`,
  wie:`beiläufig, mit einer Hand im Kreuz`, stimmung:`neutral`,
  bedarf:{ id:`ruecken_eff`, was:`arbeitet im Stehen und verliert dabei Zeit`, braucht:{FRE:1.0} },
  fragen:[
    { id:`seitwann`, t:`Seit wann?`, wie:`kurz, ohne Mitleid`,
      liest:{E:0.5, N:-0.7, A:-0.2},
      gut:{ er:`Seit Ostern. Bandscheibe, sagt der eine, Muskel, sagt der andere.`,
            erRegie:`Er verlagert das Gewicht.`,
            er2:`Ich arbeite jetzt im Stehen und verliere dabei täglich eine Stunde, weil ich alle zwanzig Minuten aufhöre.`,
            wie:`sachlich, fast erleichtert über die knappe Frage`, wie2:`nüchtern`, stimmung:`freundlich`,
            fakt:`arbeitet seit Ostern im Stehen, verliert täglich eine Stunde`, bez:5 },
      zu:{ er:`Lang genug.`, wie:`abschließend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`arzt`, t:`Waren Sie damit beim Arzt? Das sollte man nicht schleifen lassen.`, wie:`besorgt, gut gemeint`,
      liest:{N:1.2, A:0.5, O:-0.4},
      gut:{ er:`Sie haben recht. Ich schiebe es seit Wochen.`, wie:`einsichtig`, stimmung:`nachdenklich`, bez:3 },
      zu:{ er:`Bei dreien.`,
           erRegie:`Er richtet sich auf und sieht dich an.`,
           er2:`Und jetzt sagen Sie mir bitte nicht, was ich dagegen tun soll. Das machen schon genug Leute, die mich weniger gut kennen als Sie, und die kenne ich seit Jahren.`,
           wie:`knapp`, wie2:`ruhig und sehr deutlich`, stimmung:`gereizt`, bez:-7 } },

    { id:`stehen`, t:`Arbeitet es sich im Stehen anders?`, wie:`sachlich neugierig`,
      liest:{O:0.9, E:0.3},
      gut:{ er:`Vollkommen anders.`,
            erRegie:`Er wird auf einmal schneller.`,
            er2:`Im Stehen denke ich linearer und schlechter. Ich habe drei Wochen gebraucht, um zu merken, dass meine Modelle seit Ostern langweiliger sind.`,
            wie:`sofort`, wie2:`begeistert über den eigenen Befund`, stimmung:`interessiert`,
            fakt:`hält seine Modelle seit dem Stehen für langweiliger`, bez:6 },
      zu:{ er:`Es ist Arbeit, im Sitzen wie im Stehen.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`software`, titel:`Das neue Rechensystem`,
  regie:`Auf dem Bildschirm steht ein Fenster mit einem Fortschrittsbalken, der sich nicht bewegt.`,
  er:`Das Haus wechselt das Rechensystem. Alles, was ich in zwölf Jahren geschrieben habe, läuft nicht mehr.`,
  wie:`sehr ruhig, was hier nichts Gutes bedeutet`, stimmung:`neutral`,
  bedarf:{ id:`soft_eff`, was:`muss zwölf Jahre eigenen Code retten`, braucht:{FRE:1.4} },
  fragen:[
    { id:`selbst`, t:`Schreiben Sie es neu oder lassen Sie es liegen?`, wie:`direkt`,
      liest:{O:0.6, E:0.5, C:-0.4},
      gut:{ er:`Neu. Und zwar besser.`,
            erRegie:`Er zieht den Block heran.`,
            er2:`Ich sitze seit sechs Wochen abends daran und es macht mir mehr Spaß als alles, wofür ich bezahlt werde. Sagen Sie das nicht weiter.`,
            wie:`entschieden`, wie2:`verschwörerisch`, stimmung:`interessiert`,
            fakt:`schreibt abends zwölf Jahre Code neu, freiwillig`, bez:6 },
      zu:{ er:`Ich werde tun, was nötig ist.`, wie:`knapp`, stimmung:`verschlossen`, bez:-2 } },

    { id:`aerger`, t:`Das muss doch ärgerlich sein nach zwölf Jahren.`, wie:`verständnisvoll`,
      liest:{N:1.0, A:0.4, O:-0.5},
      gut:{ er:`Es ist ärgerlich. Zwölf Jahre.`, wie:`gedämpft`, stimmung:`nachdenklich`, bez:3 },
      zu:{ er:`Ärgerlich wäre es, wenn ich den alten Kram behalten müsste.`,
           erRegie:`Er wischt mit der Hand über den Tisch, als wäre etwas darauf.`,
           er2:`Die Hälfte davon war Murks. Ich habe nur nie einen Grund gehabt, ihn wegzuwerfen.`,
           wie:`bestimmt`, wie2:`trocken`, stimmung:`skeptisch`, bez:-4 } },

    { id:`wer`, t:`Wer hat das entschieden?`, wie:`ruhig, aber genau`,
      liest:{E:0.4, A:-0.4},
      gut:{ er:`Ein Gremium, in dem niemand sitzt, der rechnet.`,
            erRegie:`Er hebt beide Hände einen Zentimeter und lässt sie wieder fallen.`,
            er2:`Ich war nicht gefragt. Ich wäre auch nicht dagegen gewesen. Man hätte mich nur fragen müssen.`,
            wie:`sachlich`, wie2:`sehr klar`, stimmung:`nachdenklich`,
            fakt:`stört sich nicht an der Entscheidung, sondern daran, nicht gefragt worden zu sein`, bez:5 },
      zu:{ er:`Jemand über mir. Wie immer.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`preis`, titel:`Der Preis, zu dem er nicht will`,
  regie:`An der Pinnwand hängt ein Brief mit einem geprägten Kopf. Er hängt schief und halb hinter einem Zettel.`,
  er:`Man hat mich für einen Preis vorgeschlagen. Verleihung im November, Berlin, Abendgarderobe.`,
  wie:`als läse er eine fremde Meldung vor`, stimmung:`neutral`,
  bedarf:{ id:`preis_aut`, was:`will nicht herausgestellt werden`, braucht:{FRE:1.0, GEL:-0.8} },
  fragen:[
    { id:`hin`, t:`Und Sie gehen nicht hin.`, wie:`keine Frage, eine Feststellung`,
      liest:{E:0.5, O:0.5, A:-0.4},
      gut:{ er:`Woher wissen Sie das?`,
            erRegie:`Er sieht dich zum ersten Mal an diesem Tag richtig an.`,
            er2:`Nein, ich gehe nicht hin. Ich habe die Arbeit zu dritt gemacht und die beiden anderen stehen nicht auf dem Brief. Solange das so ist, hänge ich ihn schief.`,
            wie:`überrascht`, wie2:`sehr ruhig, sehr fest`, stimmung:`interessiert`,
            fakt:`lehnt den Preis ab, weil zwei Mitautoren fehlen`, bez:7 },
      zu:{ er:`Das habe ich nicht gesagt.`, wie:`abwehrend`, stimmung:`skeptisch`, bez:-3 } },

    { id:`gratulieren`, t:`Herzlichen Glückwunsch. Das ist doch eine schöne Sache.`, wie:`herzlich`,
      liest:{A:0.3, C:0.2, O:-0.6},
      gut:{ er:`Danke. Es freut mich tatsächlich mehr, als ich zugebe.`, wie:`verlegen`, stimmung:`freundlich`, bez:3 },
      zu:{ er:`Wofür?`,
           erRegie:`Er nimmt den Zettel ab, der halb davor hängt, und hängt ihn wieder davor.`,
           er2:`Für eine Arbeit, die zu dritt entstanden ist und auf der ein Name steht. Wenn Sie das eine schöne Sache nennen, haben wir unterschiedliche Vorstellungen davon.`,
           wie:`kühl`, wie2:`ohne Lautstärke, aber ohne Rest`, stimmung:`gereizt`, bez:-6 } },

    { id:`wofuer`, t:`Wofür denn?`, wie:`schlicht neugierig`,
      liest:{O:0.7},
      gut:{ er:`Ein Schätzverfahren für Erhebungen, bei denen die Hälfte der Leute nicht antwortet.`,
            erRegie:`Er zeichnet mit dem Finger eine Kurve auf die Tischplatte.`,
            er2:`Klingt trocken. Ist es auch. Es hat trotzdem drei Jahre gedauert.`,
            wie:`sachlich`, wie2:`zufrieden`, stimmung:`interessiert`, bez:4 },
      zu:{ er:`Für Statistik. Das führt jetzt zu weit.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`kollege`, titel:`Der Kollege von der Tafel`,
  regie:`Die Tafel an der Wand ist zum ersten Mal leer. Der Schwamm liegt noch auf der Ablage.`,
  er:`Der Kollege, mit dem ich mich über die Korrektur gestritten habe, geht Ende des Monats.`,
  wie:`ruhig, mit einem Blick zur leeren Tafel`, stimmung:`nachdenklich`,
  bedarf:{ id:`koll_zug`, was:`verliert seinen einzigen echten Gegenspieler`, braucht:{GEL:-1.2} },
  fragen:[
    { id:`wer`, t:`Und wer widerspricht Ihnen jetzt?`, wie:`ruhig, ohne Ironie`,
      liest:{E:0.6, O:0.7, N:-0.3},
      gut:{ er:`Das ist genau die Frage.`,
            erRegie:`Er sieht die leere Tafel an und dann dich.`,
            er2:`Ich habe hier vierzig Leute, die freundlich zu mir sind, und einen, der mir gesagt hat, wenn ich Unsinn rechne. Der geht jetzt. Das ist der Verlust, nicht die Stelle.`,
            wie:`langsam`, wie2:`sehr direkt`, stimmung:`geruehrt`,
            fakt:`verliert den einzigen Kollegen, der ihm widerspricht`, bez:8 },
      zu:{ er:`Es widerspricht mir genug.`, wie:`kurz`, stimmung:`verschlossen`, bez:-2 } },

    { id:`streit`, t:`Haben Sie sich denn vertragen am Ende?`, wie:`behutsam`,
      liest:{A:0.9, N:0.5},
      gut:{ er:`Wir haben uns nie gestritten im eigentlichen Sinne.`, wie:`milde`, stimmung:`freundlich`, bez:3 },
      zu:{ er:`Vertragen.`,
           erRegie:`Er nimmt den Schwamm und legt ihn eine Handbreit weiter.`,
           er2:`Wir waren nicht zerstritten. Wir waren uneinig. Das ist ein Unterschied, den außerhalb dieses Zimmers offenbar niemand kennt.`,
           wie:`gedehnt`, wie2:`ungeduldig`, stimmung:`skeptisch`, bez:-5 } },

    { id:`recht`, t:`Wer hatte denn nun recht?`, wie:`mit halbem Lächeln`,
      liest:{O:0.5, E:0.5, C:-0.3},
      gut:{ er:`Er.`,
            erRegie:`Er sagt es ohne jedes Zögern.`,
            er2:`Ich habe es ihm am Dienstag gesagt. Deshalb ist die Tafel leer.`,
            wie:`sofort`, wie2:`ruhig`, stimmung:`nachdenklich`,
            fakt:`hat dem Kollegen zuletzt recht gegeben und die Tafel gewischt`, bez:6 },
      zu:{ er:`Das spielt jetzt keine Rolle mehr.`, wie:`abschließend`, stimmung:`verschlossen`, bez:-2 } }
  ] },

{ id:`teilen`, titel:`Der Mitbewohner`,
  regie:`In der Ecke steht ein zweiter Schreibtisch, noch in Folie. Der Raum wirkt dadurch halb so groß.`,
  er:`Ab Mai teile ich das Zimmer. Man hat es mir per Rundmail mitgeteilt.`,
  wie:`beherrscht, mit einer Pause vor dem letzten Wort`, stimmung:`neutral`,
  bedarf:{ id:`teil_aut`, was:`verliert den einzigen Raum, über den er bestimmt`, braucht:{FRE:1.4} },
  fragen:[
    { id:`rundmail`, t:`Per Rundmail.`, wie:`nur die zwei Worte, sonst nichts`,
      liest:{E:0.5, O:0.4, A:-0.5},
      gut:{ er:`Per Rundmail.`,
            erRegie:`Er nickt langsam, zweimal.`,
            er2:`Ich hätte Ja gesagt. Es ist Platz und der Kollege ist in Ordnung. Aber man hat mich nicht gefragt, und deshalb sage ich es jetzt jedem, der hereinkommt.`,
            wie:`wiederholend`, wie2:`vollkommen offen`, stimmung:`interessiert`,
            fakt:`hätte zugestimmt, wenn man ihn gefragt hätte`, bez:7 },
      zu:{ er:`So läuft das hier.`, wie:`resigniert`, stimmung:`verschlossen`, bez:-2 } },

    { id:`schlimm`, t:`Ist das schlimm für Sie?`, wie:`mitfühlend`,
      liest:{N:1.1, A:0.5},
      gut:{ er:`Schlimmer, als ich zugeben will.`, wie:`leise`, stimmung:`nachdenklich`, bez:3 },
      zu:{ er:`Schlimm ist Krieg.`,
           erRegie:`Er sieht auf die Folie in der Ecke.`,
           er2:`Das hier ist ein zweiter Tisch. Ich hätte nur gern vorher davon gewusst.`,
           wie:`trocken`, wie2:`ruhig`, stimmung:`skeptisch`, bez:-4 } },

    { id:`wen`, t:`Wissen Sie schon, wen Sie bekommen?`, wie:`sachlich`,
      liest:{C:0.6, O:0.2},
      gut:{ er:`Einen aus der Erhebung, Mitte dreißig. Wir haben zweimal zusammen gerechnet, das ging gut.`,
            wie:`nüchtern`, stimmung:`neutral`, bez:3 },
      zu:{ er:`Nein. Ich erfahre es vermutlich wieder per Rundmail.`, wie:`trocken`, stimmung:`skeptisch`, bez:-1 } }
  ] }
],

/* ═══════════════════════════════════════════════════════════════════
   Was er sagt, wenn du dich festlegst.

   Die wahren Werte bekommst du nie zu sehen. Was du bekommst, ist er:
   Bei einem Treffer bestätigt er dich, bei einem Fehlgriff widerspricht
   er — und aus der Richtung seines Widerspruchs kannst du schließen,
   in welche Richtung du danebenlagst. Mehr Hilfe gibt es nicht.
   ═══════════════════════════════════════════════════════════════════ */

reaktion: {
  z: {
    O: { genau:{ er:`Neugierig, ja. Das ist der einzige Grund, warum ich den Job nach dreißig Jahren noch mache.`, wie:`bestätigend` },
         zuHoch:{ er:`So verspielt bin ich nicht. Am Ende muss eine Zahl dastehen, die stimmt.`, wie:`einschränkend` },
         zuTief:{ er:`Bewährt.`, erRegie:`Er zieht eine Augenbraue hoch.`, er2:`Ich habe seit zwölf Jahren keine Methode zweimal genommen.`, wie:`gedehnt`, wie2:`trocken` } },
    C: { genau:{ er:`Ordentlich bin ich nicht. Das sehen Sie ja.`, wie:`ohne jede Scham` },
         zuHoch:{ er:`Planvoll.`, erRegie:`Er zeigt auf den Papierstapel, den er vorhin vom Stuhl geschoben hat.`, er2:`Sie sitzen auf dem Beweis für das Gegenteil.`, wie:`amüsiert`, wie2:`trocken` },
         zuTief:{ er:`Ganz so schlimm ist es nicht. Was ich abgebe, stimmt bis zur letzten Stelle.`, wie:`richtigstellend` } },
    E: { genau:{ er:`Ich rede gern. Das haben Sie in der ersten Minute gemerkt.`, wie:`selbstironisch` },
         zuHoch:{ er:`Laut bin ich nicht. Ich rede viel, das ist etwas anderes.`, wie:`richtigstellend` },
         zuTief:{ er:`Zurückhaltend.`, erRegie:`Er lacht kurz.`, er2:`Sie sitzen seit einer halben Stunde hier und ich habe geredet.`, wie:`ungläubig`, wie2:`vergnügt` } },
    A: { genau:{ er:`Unfreundlich bin ich nicht. Nur ungeduldig. Das verwechseln viele.`, wie:`ruhig` },
         zuHoch:{ er:`Nachgiebig.`, erRegie:`Er sieht zur Tafel.`, er2:`Fragen Sie den Kollegen, mit dem ich mich seit März nicht einig bin.`, wie:`trocken`, wie2:`nüchtern` },
         zuTief:{ er:`So hart bin ich nicht. Ich streite über Sachen und nicht über Menschen.`, wie:`einschränkend` } },
    N: { genau:{ er:`Wenn ich nachts wach liege, dann wegen einer Zahl. Nicht wegen einer Sorge.`, wie:`gelassen` },
         zuHoch:{ er:`Dünnhäutig.`, erRegie:`Er schüttelt einmal den Kopf.`, er2:`Ich habe zwei Umstrukturierungen überstanden und dabei gut geschlafen.`, wie:`abweisend`, wie2:`fest` },
         zuTief:{ er:`Ganz kalt lässt mich auch nicht alles.`, wie:`leiser` } }
  },
  m: {
    FRE: { genau:{ er:`Richtig. Sagen Sie mir, wie ich etwas zu tun habe, und ich mache es anders. Nicht aus Trotz. Aus Gewohnheit.`, wie:`sehr klar` },
           zuHoch:{ er:`So eigen bin ich nicht. Wenn jemand einen besseren Weg kennt, nehme ich ihn. Er muss ihn nur zeigen und nicht anordnen.`, wie:`einschränkend` },
           zuTief:{ er:`Verlässlichkeit.`, erRegie:`Er zieht einen Mundwinkel hoch.`, er2:`Mein ganzer Beruf besteht darin auszurechnen, wie unsicher etwas ist. Ich weiß ziemlich genau, was eine Garantie wert ist.`, wie:`amüsiert`, wie2:`bestimmt` } },
    GEL: { genau:{ er:`Stimmt.`, erRegie:`Er nickt, ohne zu zögern.`, er2:`Ich sitze lieber mit vier Leuten in einem Keller als allein auf einer Bühne. Das ist keine Bescheidenheit, das ist Geschmack.`, wie:`sofort`, wie2:`ruhig und sehr sicher` },
           zuHoch:{ er:`Wenn Sie mir schmeicheln wollen, sparen Sie es sich.`, erRegie:`Er sieht zur Pinnwand.`, er2:`Der Brief da hängt schief, und zwar mit Absicht.`, wie:`sehr trocken`, wie2:`beiläufig` },
           zuTief:{ er:`Ganz ohne Eitelkeit bin ich auch nicht. Ich schaue nach, ob es zitiert wird.`, wie:`leiser, ertappt` } }
  }
},

/* --- Wiedersehen. Was er beim zweiten und jedem weiteren Mal sagt,
       je nachdem, wie ihr auseinandergegangen seid. ----------------- */

wiedersehen: [
  { ab:70, regie:`Die Tür steht offen. Er sieht auf, bevor du klopfst, und schiebt den Stapel selbst vom Besucherstuhl.`,
    er:`Da sind Sie ja. Setzen, ich mache Kaffee.`, wie:`aufrichtig erfreut`, stimmung:`freundlich` },
  { ab:50, regie:`Er sieht kurz auf und dann wieder auf den Bildschirm, arbeitet aber nicht weiter.`,
    er:`Sie schon wieder. Gut, ich habe zwanzig Minuten.`, wie:`freundlich, aber beschäftigt`, stimmung:`neutral` },
  { ab:30, regie:`Er lässt die Tür halb offen und bleibt hinter dem Tisch stehen.`,
    er:`Ich habe nicht viel Zeit. Was gibt es?`, wie:`sachlich, ein wenig kühl`, stimmung:`skeptisch` },
  { ab:-999, regie:`Er sieht auf die Uhr, bevor er dich ansieht. Der Besucherstuhl liegt voll Papier und bleibt es.`,
    er:`Ich weiß nicht recht, was wir beide noch besprechen sollen. Aber bitte.`, wie:`ausgesucht höflich, was das Schlimmste ist`, stimmung:`verschlossen` }
],

/* --- Abschied. Rechtzeitig zu gehen ist ein Zug, kein Aufgeben. ----- */

abschied: [
  { ab:70, regie:`Er steht auf und bringt dich bis zur Tür, was er sonst nicht tut.`,
    er:`Kommen Sie wieder. Und bringen Sie das mit, wovon Sie beim letzten Mal angefangen haben.`,
    wie:`warm`, stimmung:`freundlich`, bez:3 },
  { ab:50, regie:`Er lehnt sich zurück und lässt die Hände auf dem Tisch liegen.`,
    er:`War in Ordnung. Melden Sie sich, wenn Sie wieder in der Gegend sind.`,
    wie:`gleichmäßig freundlich`, stimmung:`neutral`, bez:2 },
  { ab:30, regie:`Er nickt und zieht die Tastatur schon wieder zu sich heran.`,
    er:`Ja. Bis dann.`, wie:`kurz`, stimmung:`neutral`, bez:1 },
  { ab:-999, regie:`Er antwortet nicht sofort und sieht auf den Bildschirm.`,
    er:`Machen Sie es gut.`, wie:`höflich und ohne jeden Inhalt`, stimmung:`verschlossen`, bez:0 }
],


});
