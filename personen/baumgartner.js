/* ═══════════════════════════════════════════════════════════════════
   Eine Person. Kopiere die Datei, ändere id, name und die Texte, lege
   die Bilder daneben — fertig ist die nächste.

   Rede und Regie sind getrennte Felder, und in keinem Textfeld steht
   ein Anführungszeichen: die Anzeige setzt sie.

     regie    Beschreibung, kursiv, ohne Anführungszeichen
     er       was er oder sie sagt
     erRegie  Beschreibung mitten in der Rede
     er2      was danach weiter gesagt wird
     du / t   was du sagst
     wie      wie es gesagt wird, Vorlage für die Stimme
     stimmung welches Bild danach im Rahmen steht
   ═══════════════════════════════════════════════════════════════════ */
PERSONEN.push({

id: `baumgartner`,
/* Womit die Person im Menü steht und welches Farbschema sie mitbringt. */
kurz: `Statistiker, 52. Wilder grauer Schopf, Kopfhörer um den Hals,
       ein Schreibtisch, der seit Jahren nicht aufgeräumt wurde.`,
theme: `tinte`,
menubild: `bilder/tobias_freundlich.webp`,

hero: {
  name: `Tobias Baumgartner`, age: 52, job: `Statistiker`,
  ort: `Vierter Stock, letzte Tür, Blick in den Innenhof`,
  /* Die wahre Ausprägung, −2 bis +2. Danach antwortet er, und das ist
     die Lösung, die am Ende aufgedeckt wird. */
  z: { O: 2, C: -1, E: 2, A: 1, N: -2 },
  m: { AUT: 2, EFF: 2, SIC: -1, ZUG: -1, STA: -2 }
},

rollenprior: { C: 0.55, O: 0.2, E: -0.45 },

rollentext: `Statistiker: das Klischee sagt gründlich, eher still, mäßig neugierig.`,

stimmungen: {
  neutral:      { t:`sachlich`,     bild:`bilder/tobias_neutral.webp` },
  freundlich:   { t:`freundlich`,   bild:`bilder/tobias_freundlich.webp` },
  amuesiert:    { t:`amüsiert`,     bild:`bilder/tobias_amuesiert.webp` },
  interessiert: { t:`interessiert`, bild:`bilder/tobias_interessiert.webp` },
  nachdenklich: { t:`nachdenklich`, bild:`bilder/tobias_nachdenklich.webp` },
  skeptisch:    { t:`skeptisch`,    bild:`bilder/tobias_skeptisch.webp` },
  gereizt:      { t:`gereizt`,      bild:`bilder/tobias_gereizt.webp` },
  verschlossen: { t:`verschlossen`, bild:`bilder/tobias_verschlossen.webp` },
  geruehrt:     { t:`berührt`,      bild:`bilder/tobias_geruehrt.webp` },
  abweisend:    { t:`abweisend`,    bild:`bilder/tobias_abweisend.webp` }
},

raumbild: `bilder/raum.webp`,

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
    regie: `Vierter Stock, letzte Tür. Sie geht auf, bevor du klopfen kannst. Kopfhörer um den Hals, Blazer über einem Shirt, das schon einen Tag gesehen hat.`,
    er: `Sie sind der Grund, warum mein Kalender heute rot ist. Kommen Sie rein, ich muss nur eben —`,
    wie: `schnell, im Gehen gesprochen`, stimmung: `neutral`,
    erRegie: `Er schiebt einen Stapel Ausdrucke vom Besucherstuhl auf den Boden.`,
    er2: `So. Setzen.`, wie2: `kurz, endgültig`,
    nachRegie: `Er stellt zwei Tassen hin, ohne zu fragen, und schiebt dir eine zu. Die Maschine dahinter ist von 2009 und klingt danach. Ihr habt vierzig Minuten, und du hast dir vorgenommen, dein Anliegen bis zum Schluss zurückzuhalten.`,
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
  duFest: `Du erzählst in zwei Sätzen, was du machst. Ein Projekt, das dir über den Kopf wächst. Davon später, sagst du.`,
  er: `Aha, davon später. Gut, ich merke es mir — dann reden wir solange über etwas anderes.`,
  erRegie: `Er lehnt sich zurück und legt die Kopfhörer auf den Tisch.`,
  wie: `amüsiert, ein wenig lauernd`, stimmung: `interessiert`
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

/* --- Akt 3: sieben Fragen zum Antrieb, du stellst vier. ----------- */

motivfragen: [
  { id:`zusage`, q:`Was müsste ein Projekt haben, damit Sie zusagen?`,
    an:{ 'allein:laut': `Sie brauchen jemanden, der widerspricht. Was müsste ein Projekt sonst noch haben, damit Sie zusagen?`,
         'methode:neugier': `Wenn Neugier reicht, um ein Verfahren zu probieren: was müsste ein ganzes Projekt haben, damit Sie zusagen?` },
    a:[
      {id:`freihand`, wie:`langsam, jedes Wort gewogen`, stimmung:`interessiert`, t:`Dass mir keiner reinredet, wie ich es rechne. Über das Was kann man streiten, über das Wie nicht.`, aff:{AUT:2.2}, fakt:`will über das Wie allein entscheiden`},
      {id:`kurz`, wie:`schnell, ungeduldig`, stimmung:`gereizt`,     t:`Dass nicht sechs Monate Vorlauf sind, bevor der erste Datensatz da ist.`, aff:{EFF:2.0}, fakt:`erträgt keinen Vorlauf ohne Daten`},
      {id:`sichtbar`, wie:`halb im Scherz, halb nicht`, stimmung:`freundlich`, t:`Dass am Ende mein Name draufsteht.`, aff:{STA:2.2}},
      {id:`leute`, wie:`warm, unangestrengt`, stimmung:`freundlich`,    t:`Dass ich die Leute mag. Alles andere findet sich.`, aff:{ZUG:2.0}},
      {id:`bestand`, wie:`vorsichtig, gedämpft`, stimmung:`nachdenklich`,  t:`Dass es nicht nach einem Jahr eingestellt wird.`, aff:{SIC:2.0}}
    ]},

  { id:`lohnt`, q:`Woran merken Sie am Ende, dass es sich gelohnt hat?`,
    an:{ 'zusage:freihand': `Angenommen, keiner redet Ihnen rein. Woran merken Sie dann am Ende, dass es sich gelohnt hat?` },
    a:[
      {id:`verstanden`, wie:`erst zögernd, dann fest`, stimmung:`nachdenklich`, t:`Wenn ich hinterher etwas verstanden habe, das ich vorher nicht wusste. Klingt banal, ist der ganze Punkt.`, aff:{AUT:1.6,EFF:0.4}, fakt:`misst Erfolg daran, ob er etwas verstanden hat`},
      {id:`weniger`, wie:`knapp, mit Nachdruck auf dem letzten Wort`, stimmung:`interessiert`,    t:`Wenn die Sache danach weniger Arbeit macht als vorher. Nicht mehr.`, aff:{EFF:2.2}, fakt:`Erfolg heißt für ihn: danach weniger Arbeit`},
      {id:`zitiert`, wie:`leichthin, fast verlegen`, stimmung:`freundlich`,    t:`Wenn es zitiert wird.`, aff:{STA:2.0}},
      {id:`benutzt`, wie:`ruhig, zufrieden`, stimmung:`freundlich`,    t:`Wenn die Leute im Haus es benutzen, ohne dass ich danebenstehe.`, aff:{ZUG:1.2,EFF:0.8}}
    ]},

  { id:`nervt`, q:`Was nervt Sie hier am meisten?`,
    an:{ 'schreibtisch:such': `Zehn Sekunden für ein Blatt. Was dauert hier zu lange? Was nervt Sie am meisten?`,
         'schlampig:hin':     `Sie sagen so etwas direkt. Dann sagen Sie es mir auch: was nervt Sie hier am meisten?` },
    a:[
      {id:`gremien`, wie:`hörbar aufgebracht, die Zahl betont`, stimmung:`gereizt`,    t:`Dass ich für eine Methodenänderung drei Unterschriften brauche. Drei. Für etwas, das ich besser beurteilen kann als alle drei zusammen.`, aff:{AUT:2.4}, fakt:`braucht drei Unterschriften für eine Methodenänderung`, nachEr:`Eine davon von jemandem, der mich einmal im Jahr sieht.`},
      {id:`doppelt`, wie:`müde, wie oft gesagt`, stimmung:`gereizt`,    t:`Dass ich dieselbe Zahl viermal im Jahr in vier Formaten liefere.`, aff:{EFF:2.2}, fakt:`liefert dieselbe Zahl viermal im Jahr in vier Formaten`},
      {id:`uebersehen`, wie:`kühl, verletzt darunter`, stimmung:`verschlossen`, t:`Dass Leute Entscheidungen treffen und mich hinterher fragen.`, aff:{STA:1.4,AUT:0.8}},
      {id:`mittag`, wie:`leise, unerwartet weich`, stimmung:`nachdenklich`,     t:`Dass keiner mehr zusammen Mittag isst.`, aff:{ZUG:2.0}}
    ]},

  { id:`aendern`, q:`Wenn Sie hier morgen eine Sache ändern dürften — welche?`,
    an:{ 'nervt:gremien': `Und wenn Sie die drei Unterschriften abschaffen dürften: was käme als Nächstes?`,
         'nervt:doppelt': `Und wenn die vier Formate wegfielen: was käme als Nächstes?` },
    a:[
      {id:`entscheiden`, wie:`langsam, sehr bestimmt`, stimmung:`interessiert`, t:`Ich würde entscheiden dürfen, welche Fragen ich rechne. Nicht was dabei herauskommt, sondern welche.`, aff:{AUT:2.2}, fakt:`will entscheiden, welche Fragen er rechnet`},
      {id:`pipeline`, wie:`nüchtern, wie eine abgelesene Zahl`, stimmung:`nachdenklich`,    t:`Eine ordentliche Datenleitung. Ich verbringe sechzig Prozent meiner Zeit mit Putzen, nicht mit Rechnen.`, aff:{EFF:2.4}, fakt:`sechzig Prozent seiner Zeit gehen fürs Datenputzen drauf`, nachRegie:`Er sagt die Zahl ohne Bitterkeit, so wie man eine Zahl abliest.`},
      {id:`titel`, wie:`mit einem schiefen Grinsen`, stimmung:`amuesiert`,       t:`Einen anderen Titel an der Tür.`, aff:{STA:2.2}},
      {id:`umbau`, wie:`müde, gedehnt`, stimmung:`verschlossen`,       t:`Weniger Umbau. Alle zwei Jahre eine neue Struktur, das hält niemand aus.`, aff:{SIC:2.2}}
    ]},

  { id:`nichtstun`, q:`Und wenn Sie gar nichts ändern?`,
    an:{ 'aendern:pipeline': `Und wenn die Datenleitung nie kommt?` },
    a:[
      {id:`hochrechnung`, wie:`trocken, ohne Bitterkeit`, stimmung:`nachdenklich`, t:`Dann verbrenne ich weiter zwei Tage die Woche mit Formatierung, bis ich in Rente gehe. Das ist keine Drohung, das ist eine Hochrechnung.`, aff:{EFF:2.2,AUT:0.6}, fakt:`rechnet hoch, was ihn Nichtstun kostet`},
      {id:`auszuhalten`, wie:`achselzuckend, gleichgültig`, stimmung:`verschlossen`,  t:`Dann bleibt es, wie es ist. Ist auszuhalten.`, aff:{SIC:1.8}},
      {id:`weg`, wie:`ruhig, ohne Drohung, gerade deshalb ernst`, stimmung:`neutral`,          t:`Dann bin ich in zwei Jahren woanders.`, aff:{AUT:1.6,STA:0.6}}
    ]},

  { id:`zustimmung`, q:`Wer muss zustimmen, wenn Sie ein Verfahren wechseln wollen?`,
    an:{ 'schlampig:hin':   `Unter vier Augen, ohne Publikum. Und wer muss zustimmen, wenn Sie ein Verfahren wechseln wollen?`,
         'schlampig:chef':  `Sie gehen zur Leitung. Muss die auch zustimmen, wenn Sie ein Verfahren wechseln wollen?` },
    a:[
      {id:`formalweg`, wie:`gerade heraus, ein wenig stolz`, stimmung:`interessiert`, t:`Formal die Leitung. Faktisch keiner, wenn ich es nicht aufschreibe. Ich schreibe es aber auf, weil ich kein Feigling bin.`, aff:{AUT:2.0,SIC:-0.4}, fakt:`geht den formalen Weg, obwohl er ihn umgehen könnte`},
      {id:`betroffene`, wie:`bedächtig`, stimmung:`neutral`,t:`Alle, die betroffen sind. Sonst gibt es Ärger.`, aff:{ZUG:1.8,SIC:0.8}},
      {id:`keiner`, wie:`knapp, mit Betonung auf mein`, stimmung:`skeptisch`,    t:`Keiner. Das ist mein Bereich.`, aff:{AUT:1.8,STA:1.0}}
    ]},

  { id:`entscheidung`, q:`Wie treffen Sie eine Entscheidung dieser Größenordnung?`,
    an:{ 'frist:spaet':  `Spät anfangen und trotzdem fertig werden: wie treffen Sie dann eine Entscheidung dieser Größenordnung?`,
         'frist:puffer': `Puffer von hinten. Wie treffen Sie eine Entscheidung dieser Größenordnung?` },
    a:[
      {id:`schnell`, wie:`zügig, sehr sicher`, stimmung:`interessiert`,  t:`Schnell. Ich habe die Erfahrung gemacht, dass die zweite Woche Nachdenken nichts hinzufügt.`, aff:{EFF:2.0,AUT:0.8}, fakt:`entscheidet schnell, hält lange Bedenkzeit für verschwendet`},
      {id:`vertraute`, wie:`wärmer`, stimmung:`freundlich`,t:`Ich rede mit drei Leuten, denen ich vertraue.`, aff:{ZUG:1.8}},
      {id:`rechnen`, wie:`sachlich`, stimmung:`neutral`,  t:`Ich rechne es durch.`, aff:{EFF:1.2,SIC:0.8}},
      {id:`schlafen`, wie:`langsam, bedacht`, stimmung:`nachdenklich`, t:`Ich schlafe zwei Nächte drüber. Mindestens.`, aff:{SIC:1.8}}
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
    offen: { t:`Ich spiele Kontrabass. Keller, vier Leute, seit dreißig Jahren dieselben. Wir sind nicht gut, aber wir sind pünktlich.`,
             wie:`erst zögernd, dann schneller, mit Wärme`, stimmung:`freundlich`,
             fakt:`spielt Kontrabass in einer Kellerband, seit dreißig Jahren` },
    zu:    { t:`Rausgehen. Interessantes Konzept.`, wie:`ausweichend, mit einem Blick auf den Bildschirm`, stimmung:`verschlossen` } },

  { id:`haende`, gibt:`werkstatt`, auf:1,
    q:`Sie haben Werkstatthände. Schrauben Sie an etwas?`,
    an:{ such:`Wer in zehn Sekunden alles findet, hat das geübt. Woran denn?` },
    offen: { t:`Eine Brunsviga von 1954. Mechanische Rechenmaschine, Kurbel, Zahnräder. Sie lag in Teilen im Keller meines Schwiegervaters. Ich weiß noch nicht, ob ich sie wieder zusammenkriege.`,
             wie:`begeistert, deutlich schneller`, stimmung:`interessiert`,
             fakt:`zerlegt eine mechanische Rechenmaschine von 1954` },
    zu:    { t:`Ich habe Hände wie jeder andere.`, wie:`abweisend, kurz`, stimmung:`skeptisch` } },

  { id:`sonntag`, gibt:`tochter`, auf:2,
    q:`Haben Sie sonntags auch schon mal frei?`,
    offen: { t:`Sonntags telefoniere ich mit meiner Tochter. Die studiert in Lissabon und ruft nie an, also rufe ich an. Elf Uhr, jede Woche.`,
             wie:`weicher, langsamer`, stimmung:`geruehrt`,
             fakt:`Tochter studiert in Lissabon, telefoniert sonntags` },
    zu:    { t:`Sonntag ist Sonntag.`, wie:`knapp, mit einer Handbewegung, die das Thema wegwischt`, stimmung:`verschlossen` } },

  { id:`weiter`, gibt:`plan60`, auf:2,
    q:`Sehen Sie sich hier noch in zehn Jahren?`,
    an:{ hochrechnung:`Sie haben vorhin hochgerechnet, bis zur Rente. Ist die Zahl, die dabei rauskommt, eine, die Ihnen gefällt?` },
    offen: { t:`In zehn Jahren bin ich zweiundsechzig. Ich will ab sechzig auf vier Tage. Das habe ich hier noch niemandem gesagt, also behalten Sie es bitte für sich.`,
             wie:`leise, sehr direkt`, stimmung:`nachdenklich`,
             fakt:`will ab sechzig auf vier Tage runter` },
    zu:    { t:`Ich sehe mich schon Freitag kaum.`, wie:`ausweichend, mit einem halben Lachen`, stimmung:`skeptisch` } },

  /* Die plumpen Fragen. Sie liefern fast sicher, kosten aber das Dreifache. */
  { id:`direkt`, gibt:`musik`, auf:3, plump:true,
    q:`Erzählen Sie doch mal was von sich privat.`,
    offen: { t:`Privat.`, wie:`gedehnt, sehr kühl`, stimmung:`gereizt`,
             nachEr:`Kontrabass. Reicht das?`, fakt:`spielt Kontrabass in einer Kellerband, seit dreißig Jahren` },
    zu:    { t:`Privat heißt privat. Deshalb heißt es so.`, wie:`hart, ohne Pause`, stimmung:`gereizt` } },

  { id:`familie`, gibt:`tochter`, auf:3, plump:true,
    q:`Sind Sie verheiratet? Kinder?`,
    offen: { t:`Eine Tochter. Lissabon.`, wie:`knapp, abschließend`, stimmung:`verschlossen`,
             fakt:`Tochter studiert in Lissabon, telefoniert sonntags` },
    zu:    { t:`Wir kennen uns seit vierzig Minuten.`, wie:`scharf`, stimmung:`gereizt` } },

  { id:`geld`, gibt:`plan60`, auf:3, plump:true,
    q:`Verdient man hier eigentlich genug?`,
    offen: { t:`Genug wofür? Für vier Tage die Woche ab sechzig reicht es. Gerade so.`,
             wie:`überrascht, dann offen`, stimmung:`nachdenklich`,
             fakt:`will ab sechzig auf vier Tage runter` },
    zu:    { t:`Das fragt man nicht, und Sie wissen das.`, wie:`sehr kühl`, stimmung:`gereizt` } }
],

hinausgeworfen: {
  regie: `Er steht auf, bevor du zu Ende gesprochen hast, und nimmt die Kopfhörer vom Tisch.`,
  er: `Wissen Sie, ich habe vierzig Minuten geblockt, nicht meine Biografie. Schicken Sie mir per Mail, was Sie eigentlich wollten.`,
  wie: `ruhig, endgültig, ohne jede Lautstärke`, stimmung: `abweisend`
},

/* --- Akt 5: der Verkauf. Erst das Was, dann das Wie. --------------
   passt   = an welche Motive das Produkt selbst ruehrt
   spricht = welche privaten Funde es zusaetzlich treffen             */

/* --- Der Koffer. Drei Waren, die zu jedem Gespräch passen, nicht nur
       zu diesem. Was du anbietest, entscheidest du nach dem, was du
       über den Menschen gelernt hast.
       passt   = an welche Motive die Ware selbst rührt
       spricht = welche privaten Funde sie zusätzlich trifft
       haken   = der ehrliche Nachteil, den zu nennen ein Zug ist ----- */

verkauf: {
  aufschlag: `Achtundzwanzig Minuten sind um. Du hebst den Koffer auf den Tisch, drehst ihn zu ihm und klappst ihn auf. Drei Dinge liegen darin, jedes in seiner Mulde.`,
  reaktionRegie: `Er sieht in den Koffer, dann dich an. Vorbeugen tut er sich nicht.`,
  reaktion: `Sie sind Vertreter. Die ganze Zeit über.`,
  reaktionWie: `ruhig, ohne Vorwurf, nur festgestellt`,
  start: 30,
  zuege: [
    { frage: `Warum zeigen Sie mir ausgerechnet das?`, wie:`sachlich, abwartend`, stimmung:`neutral`,
      opt: [
        { id:`alle`, t:`Weil das jeder brauchen kann.`,
          wie:`allgemein, ein wenig auswendig`, auto:0, aff:{},
          er:`Jeder.`, erRegie:`Er lehnt sich zurück.`,
          er2:`Dann sind Sie hier falsch. Ich bin nicht jeder, dafür sitzen Sie zu lange hier.`,
          wie2:`trocken`, stimmung:`skeptisch` },
        { id:`zugehoert`, t:`Weil Sie mir vierzig Minuten lang gesagt haben, was Ihnen fehlt. Wenn ich falsch liege, sagen Sie es, und ich packe wieder ein.`,
          wie:`ruhig, ohne Druck`, auto:2, aff:{AUT:1.6},
          an:{ plan60:`Sie wollen ab sechzig auf vier Tage. Das hier ist der einzige Weg, den ich kenne, wie das geht, ohne dass jemand anders Ihre Arbeit macht. Wenn ich falsch liege, sagen Sie es, und ich packe ein.`,
               pipeline:`Sie sagten, sechzig Prozent Ihrer Zeit gehen fürs Putzen drauf. Deshalb dieses und nichts anderes. Wenn ich falsch liege, packe ich ein.`,
               werkstatt:`Wer eine Brunsviga in Teilen im Keller hat, verliert ungern eine Notiz. Deshalb dieses hier. Wenn ich falsch liege, sagen Sie es.`,
               musik:`Sie haben eine Band, die pünktlich ist. Dafür braucht man Abende. Deshalb dieses. Wenn ich falsch liege, packe ich ein.` },
          erRegieVor:`Er sagt eine Sekunde lang nichts.`,
          er:`Das ist der erste ehrliche Satz seit dem Kaffee. Weiter.`, wie2:`langsamer`, stimmung:`interessiert` },
        { id:`beste`, t:`Weil es das Beste ist, was ich dabei habe.`,
          wie:`bestimmt, ein wenig zu glatt`, auto:0, aff:{STA:1.2},
          er:`Das Beste, was Sie dabei haben, ist eine Aussage über Ihren Koffer, nicht über mich.`,
          wie2:`freundlich, aber unnachgiebig`, stimmung:`skeptisch` }
      ]},

    { frage: `Wo ist der Haken?`, wie:`direkt, ohne Umschweife`, stimmung:`skeptisch`,
      opt: [
        { id:`keiner`, t:`Es gibt keinen.`,
          wie:`glatt`, auto:-1, aff:{},
          er:`Es gibt immer einen. Dass Sie ihn nicht nennen, heißt nur, dass ich ihn allein finden muss.`,
          wie2:`kühl`, stimmung:`gereizt` },
        { id:`nennen`, t:`__HAKEN__`,
          wie:`ruhig, ohne Beschönigung`, auto:2, aff:{AUT:1.2},
          erRegieVor:`Er sieht dich zum ersten Mal länger an.`,
          er:`Das hätten Sie mir nicht sagen müssen.`, erRegie:`Er nickt einmal.`,
          er2:`Genau deshalb glaube ich Ihnen den Rest.`, wie2:`langsam, ernst`, stimmung:`interessiert` },
        { id:`spaeter`, t:`Darüber reden wir, wenn Sie sich entschieden haben.`,
          wie:`ausweichend`, auto:-2, aff:{SIC:0.6},
          er:`Nein. Darüber reden wir jetzt, oder wir reden gar nicht mehr.`,
          wie2:`hart`, stimmung:`gereizt` }
      ]},

    { frage: `Und woher weiß ich, dass das stimmt?`, wie:`prüfend`, stimmung:`skeptisch`,
      opt: [
        { id:`probieren`, t:`Sie behalten es zwei Wochen. Wenn es nicht tut, was ich gesagt habe, hole ich es ab, und Sie sagen kein Wort dazu.`,
          wie:`konkret, ohne Bedingung`, auto:2, aff:{AUT:1.4,EFF:0.6},
          an:{ schnell:`Sie sagten, die zweite Woche Nachdenken bringt nichts. Also nehmen Sie es zwei Wochen mit. Danach entscheiden Sie in fünf Minuten, und wenn es Nein wird, hole ich es ab.`,
               komma:`Sie haben 2019 wegen eines Kommas eine Mail an alle geschrieben. Dann prüfen Sie es selbst: zwei Wochen, und wenn es nicht tut, was ich gesagt habe, hole ich es ab.` },
          er:`Zwei Wochen.`, erRegie:`Er zieht den Block heran und schreibt ein Datum an den Rand.`,
          er2:`Das ist ein Angebot, bei dem ich nichts verlieren kann. Das ist selten.`,
          wie2:`arbeitsbereit`, stimmung:`interessiert` },
        { id:`referenzen`, t:`Ich habe Referenzen. Drei Häuser arbeiten schon damit.`,
          wie:`routiniert`, auto:0, aff:{SIC:1.0,STA:0.8},
          er:`Drei Häuser.`, erRegie:`Er zuckt kaum merklich mit einer Schulter.`,
          er2:`Ich kenne die Häuser nicht und weiß nicht, wie sorgfältig sie prüfen. Das ist kein Argument, das ist ein Gefühl.`,
          wie2:`sachlich`, stimmung:`skeptisch` },
        { id:`glauben`, t:`An dieser Stelle müssen Sie mir einfach glauben.`,
          wie:`beschwörend`, auto:-1.5, aff:{},
          er:`Müssen.`, erRegie:`Er lacht kurz, ohne Freude.`,
          er2:`Ich muss gar nichts, und Sie wissen das.`, wie2:`schneidend`, stimmung:`gereizt` }
      ]},

    { regie: `Er sieht in den offenen Koffer und dann auf die Uhr an der Wand.`,
      opt: [
        { id:`neinistnein`, t:`Überlegen Sie es sich. Wenn Sie Nein sagen, ist das ein Nein und kein Zwischenstand.`,
          wie:`ruhig, ohne Nachdruck`, auto:2, aff:{AUT:1.4},
          an:{ sagen:`Sie sagen so etwas am ersten Tag und nicht am letzten. Also sagen Sie mir, wann Sie so weit sind — und wenn es ein Nein wird, ist es ein Nein und kein Zwischenstand.`,
               musik:`Schlafen Sie eine Nacht drüber, oder spielen Sie eine. Und wenn es ein Nein wird, ist es ein Nein und kein Zwischenstand.` },
          er:`Ein Nein, das ein Nein sein darf.`, erRegie:`Er nickt.`,
          er2:`Selten geworden.`, wie2:`leiser`, stimmung:`freundlich` },
        { id:`verpassen`, t:`Wenn Sie Nein sagen, verpassen Sie etwas.`,
          wie:`drängend`, auto:-1.5, aff:{},
          er:`Ich verpasse jeden Tag etwas. Bisher hat es mich nicht umgebracht.`,
          wie2:`gleichmütig`, stimmung:`verschlossen` },
        { id:`freitag`, t:`Der Preis gilt nur bis Freitag.`,
          wie:`geschäftsmäßig, mit Blick auf die Uhr`, auto:-2, aff:{},
          er:`Freitag.`, erRegie:`Er klappt den Koffer von seiner Seite aus zu.`,
          er2:`Warum sagen Sie mir das jetzt und nicht am Anfang?`, wie2:`enttäuscht`, stimmung:`gereizt` }
      ]}
  ],
  ausgang: [
    { ab:72, titel:`Er kauft.`, stimmung:`freundlich`,
      regie:`Er schiebt den Block zur Seite und steht auf.`,
      er:`Ich nehme es. Zwei Wochen, dann melde ich mich — so oder so.`,
      wie:`fest, eine Hand schon an der Türklinke`,
      nachRegie:`Er gibt dir die Hand. Die Kopfhörer liegen noch auf dem Tisch, der Koffer ist leichter geworden.` },
    { ab:48, titel:`Er lässt es offen.`, stimmung:`nachdenklich`,
      er:`Lassen Sie mir eine Karte da. Ich sage nichts zu.`,
      wie:`gleichmäßig, weder warm noch kalt`,
      nachRegie:`Er sagt es ohne Wärme, aber er schiebt den Koffer auch nicht weg.` },
    { ab:-999, titel:`Er kauft nicht.`, stimmung:`verschlossen`,
      regie:`Er klappt den Koffer zu und schiebt ihn dir über den Tisch zurück.`,
      er:`Nein. Ich glaube, Sie verkaufen lieber, als Sie zuhören. Das merkt man leider auch dann, wenn die Ware gut ist.`,
      wie:`ruhig, fast freundlich, und genau deshalb endgültig` }
  ]
},
});
