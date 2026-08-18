/* ═══════════════════════════════════════════════════════════════════
   Luigi Sartori, Kantinenkoch.

   Die dritte Person, und die erste, bei der Wärme kein Umweg ist,
   sondern der Weg. Er ist zugewandt wie sonst niemand im Haus und
   trotzdem lieber allein: er kocht für zweihundert Leute und geht nie
   in den Speisesaal. Wer ihn für den lauten, herzlichen Koch hält, den
   das Klischee verspricht, redet an ihm vorbei.

   Er ist auch der Prüfstein für die Ware. Bei Baumgartner trägt die
   Uhr, bei Reuter der Stift, bei ihm ebenfalls der Stift — aus einem
   anderen Grund: sie will nichts verlieren, er will nichts vergessen.
   Wer die Ware nach dem Menschen wählt und nicht nach dem letzten Mal,
   merkt den Unterschied nicht einmal. Wer nach Gewohnheit wählt, schon.

   Seine vier privaten Felder tragen dieselben Kennungen wie bei den
   anderen (musik, werkstatt, tochter, plan60), weil die Waren in
   welt.js darauf zeigen. Die Kennungen sind Fächer, kein Inhalt.
   ═══════════════════════════════════════════════════════════════════ */
PERSONEN.push({

id: `sartori`,
/* In welcher Etage sie sitzt. Ohne den Schlüssel dafür kommst du nicht hin. */
etage: 2,
kurz: `Kantinenkoch, 61. Grauer Schopf und grünes Halstuch,
       ein Wachstuchheft unter der Kasse, das seit vierunddreißig Jahren mitgeht.`,
theme: `dschungel`,
menubild: `personen/sartori/bilder/freundlich.webp`,

hero: {
  name: `Luigi Sartori`, age: 61, job: `Kantinenkoch`,
  ort: `Erdgeschoss, Mensa, hinter der Ausgabe, Tür ohne Schild`,
  /* Eher still, ordentlich, wenig neugierig, sehr zugewandt, ruhig. Er
     will dazugehören, mehr als alles andere, und Sicherheit nur so
     weit, wie sie ihm die Leute erhält.

     Zugewandt und still zugleich ist kein Widerspruch: er kennt jeden
     Namen und jede Unverträglichkeit im Haus und spricht trotzdem am
     liebsten durch die Klappe. */
  z: { O: -1, C: 1, E: -1, A: 2, N: -1 },
  m: { FRE: -1, GEL: -2 }
},

/* Das Klischee über Kantinenköche: laut, herzlich, gesellig, und mit
   der Ordnung nimmt er es nicht so genau. Zwei Annahmen stimmen nicht:
   er ist weder laut noch gesellig, und seine Küche ist aufgeräumter
   als jedes Büro im Haus. Die Wärme dagegen stimmt, und wie. */
rollenprior: { E: 0.6, A: 0.4, C: -0.4, O: -0.2 },

rollentext: `Kantinenkoch: das Klischee sagt laut, herzlich, gesellig — und mit der Ordnung nicht so streng.`,

stimmungen: {
  neutral:      { t:`ruhig`,        bild:`personen/sartori/bilder/neutral.webp` },
  freundlich:   { t:`freundlich`,   bild:`personen/sartori/bilder/freundlich.webp` },
  amuesiert:    { t:`amüsiert`,     bild:`personen/sartori/bilder/amuesiert.webp` },
  interessiert: { t:`interessiert`, bild:`personen/sartori/bilder/interessiert.webp` },
  nachdenklich: { t:`nachdenklich`, bild:`personen/sartori/bilder/nachdenklich.webp` },
  skeptisch:    { t:`skeptisch`,    bild:`personen/sartori/bilder/skeptisch.webp` },
  gereizt:      { t:`bekümmert`,    bild:`personen/sartori/bilder/gereizt.webp` },
  verschlossen: { t:`verschlossen`, bild:`personen/sartori/bilder/verschlossen.webp` },
  geruehrt:     { t:`berührt`,      bild:`personen/sartori/bilder/geruehrt.webp` },
  abweisend:    { t:`abweisend`,    bild:`personen/sartori/bilder/abweisend.webp` }
},

raumbild: `personen/sartori/bilder/raum.webp`,

/* --- Ankunft. Der Empfang läuft ab, dann hast du genau eine Frage. -- */

baum: {
  start: {
    regie: `Halb drei, die Ausgabe ist zu. Er steht am Spülbecken und wäscht Sellerie, obwohl niemand mehr kommt. Schürze, Küchenjacke, ein Handtuch über der Schulter, das er nie ablegt.`,
    er: `Setzen Sie sich, ich bin gleich fertig. Nehmen Sie den Stuhl da, der andere wackelt.`,
    wie: `warm, ohne aufzusehen`, stimmung: `freundlich`,
    erRegie: `Er trocknet sich die Hände, stellt einen Teller mit zwei Stück Kuchen zwischen euch und schiebt ihn dir zu, ohne zu fragen.`,
    er2: `Vom Mittag übrig. Sonst wirft man ihn weg, und das mache ich nicht.`, wie2: `beiläufig, endgültig`,
    nachRegie: `Er setzt sich, die Hände auf den Knien. Draußen läuft die Spülmaschine. Ihr habt vierzig Minuten, und du hast dir vorgenommen, dein Anliegen bis zum Schluss zurückzuhalten.`,
    frage: true
  },

  jahre: {
    er: `Vierunddreißig Jahre. Ich habe hier angefangen, da war der Speisesaal noch braun.`,
    erRegie: `Er sieht kurz zur Klappe, als könnte er von hier aus hineinsehen.`,
    er2: `Zwei Direktoren, drei Umbauten, ein Brand. Ich stehe immer noch am selben Herd.`,
    wie: `ruhig, mit leisem Stolz`, wie2: `sachlich`, stimmung: `freundlich`,
    fakt: `steht seit vierunddreißig Jahren an demselben Herd`, ende: true
  },
  heft: {
    er: `Das ist mein Heft.`,
    erRegie: `Er legt die Hand darauf, ohne es aufzuschlagen. Wachstuch, an den Ecken durchgescheuert, ein Gummiband darum.`,
    er2: `Da steht alles drin. Was wir kochen, wer was nicht verträgt, und wer wen nicht neben sich sitzen hat.`,
    wie: `als spräche er über einen Menschen`, wie2: `leiser`, stimmung: `interessiert`,
    spur: `heft`, ende: true
  },
  saal: {
    er: `Nein, ich gehe da nicht rüber.`,
    erRegie: `Er sagt es ohne Schärfe, so wie man ein Wetter beschreibt.`,
    er2: `Zweihundert Leute, die alle etwas von mir wollen, und zwei davon meinen es ernst. Ich bleibe hier und höre durch die Klappe, wer wie redet. Das reicht mir.`,
    wie: `freundlich, aber unumstößlich`, wie2: `ruhig`, stimmung: `verschlossen`,
    fakt: `geht nie in den Speisesaal, hört durch die Klappe`, ende: true
  }
},

kennenfrage: [
  { t: `Wie lange machen Sie das hier schon?`, wie: `freundlich`, ziel: `jahre` },
  { t: `Was ist das für ein Heft da unter der Kasse?`, wie: `neugierig, mit einem Nicken darauf`, ziel: `heft` },
  { t: `Gehen Sie mittags auch mal rüber und essen mit?`, wie: `leicht, nebenbei`, ziel: `saal` }
],

uebergang1: {
  duFest: `Du sagst, dass du neu bist und dich im Haus umsehen sollst: wer hier arbeitet, was hier läuft. Warum ausgerechnet du, sagst du nicht. Davon später.`,
  er: `Später ist gut. Essen Sie erst mal.`,
  erRegie: `Er schiebt den Teller einen Zentimeter näher.`,
  wie: `warm, unaufdringlich`, stimmung: `freundlich`
},

/* --- Akt 2: neun Fragen zur Person, du stellst so viele du willst. --
   l = wie stark eine Antwort für welches Merkmal spricht.
       O Offenheit, C Gewissenhaftigkeit, E Extraversion,
       A Verträglichkeit, N Neurotizismus.                             */

bigfive: [
  { id:`karte`, q:`Wie oft ändern Sie den Speiseplan?`,
    a:[
      {id:`zwoelf`, wie:`ruhig, ohne Rechtfertigung`, stimmung:`neutral`,
       t:`Wir haben zwölf Gerichte. Die kann ich im Schlaf, und im Schlaf schmecken sie besser als etwas Neues bei vollem Bewusstsein.`,
       l:{O:-1.8, C:0.6}, fakt:`kocht zwölf Gerichte im Wechsel, seit Jahren dieselben`},
      {id:`probieren`, wie:`aufgeräumt`, stimmung:`interessiert`,
       t:`Alle vier Wochen etwas Neues. Man muss ja sehen, ob es geht.`,
       l:{O:1.8, E:0.4}},
      {id:`nachfrage`, wie:`sachlich, mit einem Blick ins Heft`, stimmung:`neutral`,
       t:`Ich schreibe auf, was übrig bleibt, und danach ändere ich. Nicht nach Gefühl.`,
       l:{C:2.0, O:0.3}, fakt:`ändert den Plan nach dem, was übrig bleibt, nicht nach Gefühl`},
      {id:`wuensche`, wie:`weich`, stimmung:`freundlich`,
       t:`Wenn jemand mich fragt, koche ich es. Frau Özdemir aus dem zweiten mag Linsen, also gibt es dienstags Linsen.`,
       l:{A:2.0, E:-0.2}, fakt:`kocht dienstags Linsen, weil eine Kollegin sie mag`}
    ]},

  { id:`fehler`, q:`Was passiert, wenn beim Essen etwas schiefgeht?`,
    a:[
      {id:`neukochen`, wie:`ohne Aufhebens`, stimmung:`neutral`,
       t:`Dann koche ich es neu. Zweimal war es die ganze Charge, einmal um halb elf. Ist nicht schön, aber es ist nur Essen.`,
       l:{N:-1.6, C:1.0}, fakt:`hat zweimal die ganze Charge neu gekocht`},
      {id:`nachtragen`, wie:`gedämpft`, stimmung:`nachdenklich`,
       t:`Dann denke ich abends noch daran. Manchmal auch am nächsten Tag.`,
       l:{N:1.8}},
      {id:`suchen`, wie:`präzise`, stimmung:`neutral`,
       t:`Dann suche ich, woran es lag, und schreibe es dazu. Bei der Sauce war es die neue Brühe.`,
       l:{C:1.9, O:0.4}},
      {id:`entschuldigen`, wie:`sofort`, stimmung:`freundlich`,
       t:`Dann gehe ich raus und sage es. Einmal. Danach ist es erledigt.`,
       l:{A:1.6, E:0.6}}
    ]},

  { id:`ruhe`, q:`Wann ist Ihnen hier am wohlsten?`,
    a:[
      {id:`morgens`, wie:`leiser, fast heiter`, stimmung:`geruehrt`,
       t:`Halb sechs. Da bin ich allein, das Licht ist an, und eine Stunde lang gehört das hier mir.`,
       l:{E:-2.2}, fakt:`kommt um halb sechs, um eine Stunde allein zu haben`},
      {id:`andrang`, wie:`aufgeräumt, schneller`, stimmung:`amuesiert`,
       t:`Zwölf Uhr zehn. Wenn alle gleichzeitig kommen und es trotzdem läuft.`,
       l:{E:2.0, N:-0.6}},
      {id:`fertig`, wie:`zufrieden`, stimmung:`freundlich`,
       t:`Wenn alles abgeräumt ist und die Bleche stehen, wo sie hingehören.`,
       l:{C:1.8, E:-0.4}},
      {id:`kaffee`, wie:`warm`, stimmung:`freundlich`,
       t:`Um drei, wenn die Reinigungsleute kommen und wir zusammen einen trinken. Vier Leute, immer dieselben.`,
       l:{A:1.6, E:-0.5}, fakt:`trinkt um drei Kaffee mit den Reinigungsleuten, immer denselben vieren`}
    ]},

  { id:`neuling`, q:`Es kommt jemand Neues in die Küche. Was machen Sie zuerst?`,
    a:[
      {id:`zusehen`, wie:`bedächtig`, stimmung:`neutral`,
       t:`Erst mal zusehen. Man merkt in zwei Tagen, ob einer die Messer richtig hinlegt.`,
       l:{C:1.4, E:-0.8}},
      {id:`essen`, wie:`selbstverständlich`, stimmung:`freundlich`,
       t:`Ich koche ihm etwas und setze mich dazu. Reden kann man nachher.`,
       l:{A:2.0, O:-0.3}},
      {id:`ablauf`, wie:`nüchtern`, stimmung:`neutral`,
       t:`Ich zeige ihm den Ablauf. Der steht an der Tür, seit zwölf Jahren derselbe.`,
       l:{C:1.8, O:-0.9}},
      {id:`fragen`, wie:`interessiert`, stimmung:`interessiert`,
       t:`Ich frage, wo er vorher war und was er dort gemacht hat, das wir nicht machen.`,
       l:{O:1.9, E:0.5}}
    ]},

  { id:`aerger`, q:`Und wenn Ihnen jemand blöd kommt?`,
    a:[
      {id:`schlucken`, wie:`ruhig, mit einem Zug ins Traurige`, stimmung:`nachdenklich`,
       t:`Dann sage ich nichts. Später ärgert mich, dass ich nichts gesagt habe, aber im Moment sage ich nichts.`,
       l:{A:2.0, E:-0.6}, fakt:`sagt im Streit nichts und ärgert sich hinterher darüber`},
      {id:`sofort`, wie:`fest`, stimmung:`neutral`,
       t:`Dann sage ich es. Hier drin bestimme ich, was auf den Herd kommt.`,
       l:{A:-1.8, E:0.6}},
      {id:`egal`, wie:`gleichmütig`, stimmung:`neutral`,
       t:`Nichts. Ich koche zweihundert Essen am Tag, da bleibt keine Zeit, jemandem etwas nachzutragen.`,
       l:{N:-1.8, A:0.4}},
      {id:`grübeln`, wie:`leise`, stimmung:`nachdenklich`,
       t:`Dann liegt es mir eine Woche im Magen und ich überlege, was ich falsch gemacht habe.`,
       l:{N:2.0, A:0.5}}
    ]},

  { id:`umbau`, q:`Sie hatten drei Umbauten. Wie war das jedes Mal?`,
    a:[
      {id:`ausgehalten`, wie:`gelassen`, stimmung:`neutral`,
       t:`Man kocht dann eben auf zwei Platten in einem Container. Geht auch. Die Leute haben trotzdem gegessen.`,
       l:{N:-2.0, O:0.3}, fakt:`hat einen Umbau lang auf zwei Platten in einem Container gekocht`},
      {id:`schlimm`, wie:`gedrückt`, stimmung:`nachdenklich`,
       t:`Schlecht. Beim zweiten habe ich zwei Monate schlecht geschlafen.`,
       l:{N:1.9}},
      {id:`besser`, wie:`aufgeräumt`, stimmung:`interessiert`,
       t:`Jedes Mal ein bisschen besser. Die Absaugung von 2011 war ein Segen.`,
       l:{O:1.4, C:0.6}},
      {id:`vermisst`, wie:`weich`, stimmung:`geruehrt`,
       t:`Am schlimmsten war, dass die alten Kollegen dabei nach und nach weg waren. Der Umbau war nicht das Problem.`,
       l:{A:1.4, E:-0.4}, fakt:`vermisst weniger die alte Küche als die alten Kollegen`}
    ]},

  { id:`heftfrage`, q:`Warum schreiben Sie alles auf?`,
    a:[
      {id:`vergessen`, wie:`sehr direkt`, stimmung:`nachdenklich`,
       t:`Weil ich es sonst vergesse. Ich habe ein schlechtes Gedächtnis für Namen und ein sehr gutes für Gesichter, und beides zusammen hilft mir nichts.`,
       l:{C:1.6, N:0.4}, fakt:`schreibt auf, weil er sich Namen nicht merken kann`},
      {id:`ordnung`, wie:`nüchtern`, stimmung:`neutral`,
       t:`Weil es sonst niemand weiß, wenn ich mal nicht da bin.`,
       l:{C:2.0, A:0.6}},
      {id:`leute`, wie:`warm`, stimmung:`freundlich`,
       t:`Weil da nicht nur Rezepte drinstehen. Auf Seite vierzig steht, wer im Haus keine Nüsse verträgt. Neun Leute.`,
       l:{A:2.0}, fakt:`führt eine Liste der neun Leute im Haus, die keine Nüsse vertragen`},
      {id:`immer`, wie:`achselzuckend`, stimmung:`neutral`,
       t:`Weil ich es immer so gemacht habe.`,
       l:{O:-2.0, C:0.5}}
    ]},

  { id:`frei`, q:`Was machen Sie an einem freien Tag?`,
    a:[
      {id:`gleich`, wie:`schlicht`, stimmung:`neutral`,
       t:`Dasselbe wie sonst, nur ohne Wecker. Einkaufen, kochen, hinsetzen.`,
       l:{O:-1.9, N:-0.5}},
      {id:`weg`, wie:`lebhafter`, stimmung:`interessiert`,
       t:`Ich fahre irgendwohin, wo ich noch nicht war. Muss nicht weit sein.`,
       l:{O:2.0, E:0.5}},
      {id:`leutefrei`, wie:`warm`, stimmung:`freundlich`,
       t:`Ich koche für Leute. Sonntags sitzen bei mir meistens sechs bis elf am Tisch, ich weiß vorher nie, wie viele.`,
       l:{A:1.8, E:0.4}, fakt:`kocht sonntags für sechs bis elf Leute, ohne vorher zu wissen wie viele`},
      {id:`nichts`, wie:`ruhig`, stimmung:`neutral`,
       t:`Nichts. Und das ist keine Klage.`,
       l:{E:-2.0, N:-0.4}}
    ]},

  { id:`rente`, q:`Denken Sie manchmal ans Aufhören?`,
    a:[
      {id:`nie`, wie:`sofort`, stimmung:`verschlossen`,
       t:`Nein.`, l:{O:-1.4, N:0.5},
       nachEr:`Und bitte fragen Sie nicht weiter.`},
      {id:`ruhig`, wie:`gelassen`, stimmung:`neutral`,
       t:`Irgendwann hört jeder auf. Ich mache mir darüber keine Sorgen, ich mache mir Sorgen um den Freitag.`,
       l:{N:-1.9, C:0.4}},
      {id:`geordnet`, wie:`sachlich`, stimmung:`nachdenklich`,
       t:`Ich habe es ausgerechnet. Es geht sich aus, wenn nichts Besonderes passiert.`,
       l:{C:1.8, N:0.3}},
      {id:`leutedann`, wie:`sehr leise`, stimmung:`geruehrt`,
       t:`Das Kochen fehlt mir nicht. Die Leute schon. Ich weiß nicht, wen ich dann noch jeden Tag sehe.`,
       l:{A:1.6, E:-0.6}, fakt:`fürchtet an der Rente nicht das Ende der Arbeit, sondern das Ende der Leute`}
    ]}
],
/* --- Akt 3: sieben Fragen auf zwei Waagen. Vier Antworten je Frage,
       eine je Pol: selbst bestimmen, sicher sein, gesehen werden,
       dazugehören. ------------------------------------------------- */

motivfragen: [
  { id:`zusage`, q:`Was müsste eine Stelle haben, damit Sie wechseln würden?`,
    an:{ 'ruhe:morgens': `Eine Stunde für sich am Morgen — was müsste eine andere Stelle sonst noch haben, damit Sie wechseln?`,
         'karte:zwoelf': `Zwölf Gerichte, die sitzen. Was müsste woanders sein, damit Sie das aufgeben?` },
    a:[
      {id:`meinekueche`, wie:`bestimmt, für seine Verhältnisse fast scharf`, stimmung:`neutral`,
       t:`Dass mir keiner in den Topf redet. Was gekocht wird, kann man besprechen. Wie, nicht.`,
       aff:{FRE:2.2}},
      {id:`bleibt`, wie:`ruhig`, stimmung:`neutral`,
       t:`Dass es die Küche in zehn Jahren noch gibt. Ich habe drei Kantinen in der Stadt zumachen sehen.`,
       aff:{FRE:-2.0}, fakt:`hat drei Kantinen in der Stadt zumachen sehen`},
      {id:`name`, wie:`halb im Scherz`, stimmung:`amuesiert`,
       t:`Dass mein Name auf der Karte steht. Küche Sartori.`,
       aff:{GEL:2.2}},
      {id:`dieselben`, wie:`sehr einfach`, stimmung:`freundlich`,
       t:`Dass dieselben Leute kommen. Wenn ich weiß, wer was isst, koche ich besser. Das ist keine Redensart, das ist so.`,
       aff:{GEL:-2.2}, fakt:`kocht nach eigener Aussage besser, wenn er die Esser kennt`}
    ]},

  { id:`lohnt`, q:`Woran merken Sie am Abend, dass der Tag gut war?`,
    an:{ 'zusage:dieselben': `Angenommen, es sind alle da, die Sie kennen. Woran merken Sie dann, dass der Tag gut war?` },
    a:[
      {id:`selbst`, wie:`zufrieden`, stimmung:`freundlich`,
       t:`Wenn ich etwas gekocht habe, wie ich es wollte, und nicht, wie es vorgeschrieben war.`,
       aff:{FRE:2.0}},
      {id:`nichtsuebrig`, wie:`nüchtern`, stimmung:`neutral`,
       t:`Wenn nichts übrig ist und nichts gefehlt hat. Beides zusammen kriegt man selten hin.`,
       aff:{FRE:-1.8}},
      {id:`gelobt`, wie:`verlegen`, stimmung:`freundlich`,
       t:`Wenn einer an die Klappe kommt und es ausdrücklich sagt. Kommt zweimal im Jahr vor.`,
       aff:{GEL:1.9}},
      {id:`sitzen`, wie:`weich, langsamer`, stimmung:`geruehrt`,
       t:`Wenn ich durch die Klappe sehe und die Leute sitzen länger, als sie müssten. Dann war es gut.`,
       aff:{GEL:-2.1}, fakt:`misst den Tag daran, ob die Leute länger sitzen bleiben als nötig`}
    ]},

  { id:`nervt`, q:`Was ärgert Sie hier am meisten?`,
    an:{ 'aerger:schlucken': `Sie sagen im Moment nichts. Aber was ärgert Sie hier am meisten?` },
    a:[
      {id:`vorschrift`, wie:`hörbar unwillig`, stimmung:`gereizt`,
       t:`Dass mir jemand vorschreibt, wie lange ich Nudeln koche. Auf einem Blatt, von jemandem, der noch nie zweihundert Portionen gemacht hat.`,
       aff:{FRE:2.2}, fakt:`bekommt vorgeschrieben, wie lange er Nudeln kocht`},
      {id:`befristet`, wie:`ruhig, aber schwer`, stimmung:`nachdenklich`,
       t:`Dass die Hilfskräfte alle sechs Monate wechseln. Kaum kann einer was, ist er weg.`,
       aff:{FRE:-2.0}, fakt:`verliert seine Hilfskräfte alle sechs Monate`},
      {id:`unsichtbar`, wie:`kühl, und darunter gekränkt`, stimmung:`verschlossen`,
       t:`Dass im Jahresbericht die Kantine unter Sonstiges steht.`,
       aff:{GEL:1.8}},
      {id:`allein`, wie:`sehr leise`, stimmung:`nachdenklich`,
       t:`Dass ab halb drei niemand mehr da ist. Die Küche ist dann sehr groß.`,
       aff:{GEL:-2.0}, fakt:`empfindet die Küche ab halb drei als zu groß`}
    ]},

  { id:`aendern`, q:`Wenn Sie hier morgen eine Sache ändern dürften — welche?`,
    an:{ 'nervt:vorschrift': `Und wenn das Blatt mit den Nudelzeiten verschwindet: was käme als Nächstes?`,
         'nervt:allein':     `Und wenn ab halb drei jemand da wäre: was käme als Nächstes?` },
    a:[
      {id:`einkauf`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Ich würde selbst einkaufen. Nicht über die Liste. Ich weiß, wer gutes Gemüse hat, und das steht in keiner Rahmenvereinbarung.`,
       aff:{FRE:2.1}, fakt:`würde lieber selbst einkaufen als über die Rahmenvereinbarung`},
      {id:`unbefristet`, wie:`ruhig`, stimmung:`neutral`,
       t:`Die beiden Hilfskräfte fest anstellen. Dann muss ich nicht jedes halbe Jahr von vorn anfangen.`,
       aff:{FRE:-2.1}},
      {id:`schild`, wie:`mit einem schiefen Lächeln`, stimmung:`amuesiert`,
       t:`Ein Schild an meine Tür. Da steht nichts drauf, seit vierunddreißig Jahren.`,
       aff:{GEL:2.0}, fakt:`hat seit vierunddreißig Jahren kein Schild an der Tür`},
      {id:`tischhoch`, wie:`warm`, stimmung:`freundlich`,
       t:`Einen langen Tisch statt der kleinen. Dann setzen sich Leute zusammen, die sich sonst nur nicken.`,
       aff:{GEL:-2.0}}
    ]},

  { id:`nichtstun`, q:`Und wenn sich gar nichts ändert?`,
    an:{ 'aendern:unbefristet': `Und wenn die Stellen nie fest werden?` },
    a:[
      {id:`trotzdem`, wie:`gelassen`, stimmung:`neutral`,
       t:`Dann koche ich weiter, wie ich es für richtig halte, und schreibe die Vorschrift ins Heft, damit sie jemand hat.`,
       aff:{FRE:1.8}},
      {id:`hinnehmen`, wie:`achselzuckend`, stimmung:`neutral`,
       t:`Dann bleibt es. Ich bin einundsechzig, ich fange nicht mehr an, mich aufzuregen.`,
       aff:{FRE:-1.9}},
      {id:`merken`, wie:`trocken`, stimmung:`skeptisch`,
       t:`Dann merkt man es spätestens, wenn ich weg bin. Vorher nicht.`,
       aff:{GEL:1.6}},
      {id:`bleibenwegen`, wie:`sehr einfach`, stimmung:`geruehrt`,
       t:`Dann bleibe ich trotzdem. Nicht wegen der Küche. Wegen der Leute, die jeden Tag durch die Klappe gucken.`,
       aff:{GEL:-2.2}, fakt:`bleibt wegen der Leute, nicht wegen der Küche`}
    ]},

  { id:`zustimmung`, q:`Wer redet Ihnen rein, wenn Sie etwas anders machen wollen?`,
    a:[
      {id:`keiner`, wie:`ruhig, mit Betonung auf hier`, stimmung:`neutral`,
       t:`Hier drin keiner. Draußen alle.`,
       aff:{FRE:1.9}},
      {id:`verwaltung`, wie:`sachlich, ohne Groll`, stimmung:`neutral`,
       t:`Die Verwaltung, und das ist in Ordnung. Es hängen Vorschriften dran, und wenn ich die breche, ist am Ende jemand krank.`,
       aff:{FRE:-2.1}, fakt:`hält die Vorschriften für richtig, auch wenn sie ihn stören`},
      {id:`nachweis`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Ich mache es und schreibe hinterher, dass ich es war. Dann kann sich keiner damit schmücken und keiner davonstehlen.`,
       aff:{GEL:1.7}},
      {id:`fragen`, wie:`selbstverständlich`, stimmung:`freundlich`,
       t:`Ich frage vorher die zwei, die es ausbaden müssten. Dauert fünf Minuten und spart mir ein halbes Jahr.`,
       aff:{GEL:-1.9}, fakt:`fragt vor jeder Änderung die beiden, die sie ausbaden müssten`}
    ]},

  { id:`entscheidung`, q:`Wie entscheiden Sie so etwas?`,
    an:{ 'fehler:suchen': `Sie suchen erst die Ursache. Und wie entscheiden Sie dann?` },
    a:[
      {id:`bauch`, wie:`zügig`, stimmung:`neutral`,
       t:`Im Stehen. Ich koche seit vierzig Jahren, ich muss darüber nicht nachdenken.`,
       aff:{FRE:1.8}},
      {id:`ausprobieren`, wie:`bedächtig`, stimmung:`neutral`,
       t:`Ich probiere es erst einmal klein. Zwanzig Portionen, nicht zweihundert.`,
       aff:{FRE:-1.8}, fakt:`probiert Neues erst an zwanzig Portionen aus`},
      {id:`aufschreiben`, wie:`sachlich, mit einem Blick aufs Heft`, stimmung:`neutral`,
       t:`Ich schreibe es auf, mit Datum. Dann weiß ich nächstes Jahr noch, warum.`,
       aff:{GEL:1.4}},
      {id:`besprechen`, wie:`wärmer`, stimmung:`freundlich`,
       t:`Ich rede mit Marek. Der spült seit neunzehn Jahren neben mir und hat noch nie etwas Dummes gesagt.`,
       aff:{GEL:-2.1}, fakt:`bespricht alles mit Marek, der seit neunzehn Jahren neben ihm spült`}
    ]}
],

/* --- Was ihn privat bewegt. Dieselben vier Kennungen wie bei den
       anderen, weil die Waren darauf zeigen. ----------------------- */

privat: {
  grenze: 10,
  felder: [
    { id:`musik`,     was:`Feierabend`, wahr:`spielt Boccia in einem Verein, in dem er mit einundsechzig der Jüngste ist` },
    { id:`werkstatt`, was:`zu Hause`,   wahr:`schreibt seit vierunddreißig Jahren jedes Rezept in dasselbe Wachstuchheft` },
    { id:`tochter`,   was:`Familie`,    wahr:`sein Sohn kocht in Mailand und ruft zweimal im Jahr an` },
    { id:`plan60`,    was:`Zukunft`,    wahr:`soll im Herbst aufhören und hat es noch niemandem gesagt` }
  ]
},

privatfragen: [
  { id:`feierabend`, gibt:`musik`, auf:1,
    q:`Was machen Sie, wenn Sie hier rausgehen?`,
    offen: { er:`Boccia. Dienstag und Freitag, ein Verein mit lauter alten Herren. Ich bin mit einundsechzig der Jüngste und werde entsprechend behandelt.`,
             wie:`amüsiert, warm`, stimmung:`amuesiert`,
             fakt:`spielt Boccia in einem Verein, in dem er der Jüngste ist` },
    zu:    { er:`Nach Hause.`, wie:`freundlich, aber zu`, stimmung:`verschlossen` } },

  { id:`heftinhalt`, gibt:`werkstatt`, auf:1,
    q:`Darf ich einmal in das Heft sehen?`,
    an:{ heft:`Sie sagten, in dem Heft steht alles. Darf ich?` },
    offen: { er:`Bitte.`,
             erRegie:`Er schiebt es dir hin, ohne das Gummiband abzunehmen, und nimmt die Hand wieder weg.`,
             er2:`Vierunddreißig Jahre, dasselbe Heft. Ich habe es dreimal neu einbinden lassen. Rezepte, Namen, wer keine Nüsse verträgt, wer wen nicht neben sich hat. Wenn das wegkommt, kann ich hier nicht mehr arbeiten.`,
             wie:`ruhig`, wie2:`sehr ernst`, stimmung:`interessiert`,
             fakt:`führt seit vierunddreißig Jahren dasselbe Wachstuchheft, dreimal neu eingebunden` },
    zu:    { er:`Lieber nicht. Da steht auch Privates von anderen drin.`, wie:`freundlich, aber unbeweglich`, stimmung:`verschlossen` } },

  { id:`sonntag`, gibt:`tochter`, auf:2,
    q:`Kocht sonst noch jemand in der Familie?`,
    offen: { er:`Mein Sohn. In Mailand, in einer Küche mit einem Stern.`,
             erRegie:`Er sagt den Stern ohne jede Betonung.`,
             er2:`Er ruft zweimal im Jahr an. Weihnachten und wenn etwas kaputt ist.`,
             wie:`stolz`, wie2:`leiser, ohne Vorwurf`, stimmung:`geruehrt`,
             fakt:`sein Sohn kocht in Mailand und ruft zweimal im Jahr an` },
    zu:    { er:`Es hat mal jemand gekocht.`, wie:`kurz`, stimmung:`verschlossen` } },

  { id:`weiter`, gibt:`plan60`, auf:2,
    q:`Wie lange machen Sie noch?`,
    an:{ 'rente:leutedann':`Sie sagten, die Leute fehlen Ihnen dann. Wie lange machen Sie denn noch?` },
    offen: { er:`Bis Oktober.`,
             erRegie:`Er sieht auf seine Hände.`,
             er2:`Das weiß hier noch niemand, und ich wäre froh, wenn das erst mal so bliebe. Ich weiß nämlich noch nicht, wie ich es sagen soll.`,
             wie:`sehr leise`, wie2:`ohne Selbstmitleid`, stimmung:`nachdenklich`,
             fakt:`hört im Oktober auf und hat es noch niemandem gesagt` },
    zu:    { er:`Solange sie mich lassen.`, wie:`ausweichend, mit einem halben Lächeln`, stimmung:`skeptisch` } },

  /* Die plumpen Fragen. Sie liefern fast sicher, kosten aber das Dreifache. */
  { id:`direkt`, gibt:`musik`, auf:3, plump:true,
    q:`Erzählen Sie doch mal was von sich privat.`,
    offen: { er:`Von mir.`, wie:`gedehnt, verlegen`, stimmung:`verschlossen`,
             nachEr:`Boccia. Sonst nichts, was sich zu erzählen lohnt.`,
             fakt:`spielt Boccia in einem Verein, in dem er der Jüngste ist` },
    zu:    { er:`Ach, wissen Sie.`, erRegie:`Er steht auf und stellt zwei Teller ineinander, die schon ineinander standen.`,
             er2:`Da gibt es nicht viel.`, wie:`freundlich, ausweichend`, wie2:`abschließend`, stimmung:`verschlossen` } },

  { id:`familie`, gibt:`tochter`, auf:3, plump:true,
    q:`Sind Sie verheiratet? Kinder?`,
    offen: { er:`Ein Sohn. Mailand.`, wie:`knapp`, stimmung:`nachdenklich`,
             fakt:`sein Sohn kocht in Mailand und ruft zweimal im Jahr an` },
    zu:    { er:`Das gehört jetzt nicht hierher, oder?`,
             wie:`sehr freundlich gesagt, und genau deshalb deutlich`, stimmung:`gereizt` } },

  { id:`geld`, gibt:`plan60`, auf:3, plump:true,
    q:`Reicht denn die Rente?`,
    offen: { er:`Sie wird reichen. Ab Oktober weiß ich es genau.`,
             erRegie:`Er merkt selbst, dass er zu viel gesagt hat.`,
             wie:`erst sachlich, dann zögernd`, stimmung:`nachdenklich`,
             fakt:`hört im Oktober auf und hat es noch niemandem gesagt` },
    zu:    { er:`Das fragt man nicht.`, erRegie:`Er sagt es freundlich und sieht dabei auf den Tisch.`,
             er2:`Nehmen Sie noch ein Stück Kuchen.`, wie:`leise`, wie2:`abschließend`, stimmung:`gereizt` } }
],

hinausgeworfen: {
  regie: `Er steht auf, nimmt das Handtuch von der Schulter und legt es zusammen, sehr genau.`,
  er: `Ich glaube, ich muss weitermachen. Es war nett, dass Sie da waren.`,
  wie: `warm, freundlich, und vollkommen endgültig`, stimmung: `abweisend`
},
/* --- Was gerade bei ihm los ist. Zehn Zustände, je drei Wege hinein.
       liest = welche Persönlichkeit der Zug unterstellt, verrechnet mit
       seiner wahren. Bei ihm tragen Wärme, Ordnung und Ruhe; wer ihn
       für den lauten Koch hält und ihn munter herausfordert, greift
       daneben. ------------------------------------------------------ */

zustaende: [

{ id:`auslagerung`, titel:`Die Küche soll vergeben werden`,
  regie:`Auf der Ablage liegt ein Umschlag mit dem Wappen der Verwaltung. Er ist geöffnet und wieder zugeklappt.`,
  er:`Sie prüfen, ob ein Anbieter die Küche übernimmt. Ausschreibung heißt das.`,
  wie:`sehr ruhig, was bei ihm etwas heißt`, stimmung:`neutral`,
  bedarf:{ id:`ausl_sic`, was:`weiß nicht, ob es die Küche in einem Jahr noch gibt`, braucht:{FRE:-1.5} },
  fragen:[
    { id:`waswirdaus`, t:`Und was wird aus den Leuten hier?`, wie:`ruhig, ohne Hast`,
      liest:{A:1.2, C:0.4, E:-0.4},
      gut:{ er:`Das ist die Frage, die ich gestellt habe.`,
            erRegie:`Er faltet den Umschlag einmal in der Mitte und wieder auseinander.`,
            er2:`Marek ist neunundfünfzig. Der findet nichts mehr. Um mich geht es nicht, ich höre sowieso bald auf — das habe ich jetzt gesagt, und ich hätte es nicht sagen sollen.`,
            wie:`ernst`, wie2:`leiser, ertappt`, stimmung:`geruehrt`,
            fakt:`sorgt sich bei der Ausschreibung um Marek, nicht um sich`, bez:8 },
      zu:{ er:`Das entscheidet nicht ich.`, wie:`abweisend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`chance`, t:`Vielleicht ist das auch eine Chance für etwas Neues.`, wie:`munter, aufmunternd gemeint`,
      liest:{O:1.3, E:0.7},
      gut:{ er:`Kann sein. Ich habe schon Schlimmeres überstanden.`, wie:`gelassen`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Eine Chance.`,
           erRegie:`Er sieht dich an, sehr freundlich, und sagt eine Weile nichts.`,
           er2:`Ich koche hier seit vierunddreißig Jahren. Verzeihen Sie, aber ich weiß nicht, was daran eine Chance sein soll.`,
           wie:`wiederholend`, wie2:`ohne jede Schärfe, und genau deshalb schwer`, stimmung:`gereizt`, bez:-7 } },

    { id:`wannklar`, t:`Wann wissen Sie Bescheid?`, wie:`sachlich`,
      liest:{C:0.9, O:-0.4},
      gut:{ er:`Im März. Bis dahin koche ich, als bliebe alles.`,
            wie:`nüchtern`, stimmung:`neutral`, bez:3 },
      zu:{ er:`Irgendwann.`, wie:`gleichgültig`, stimmung:`verschlossen`, bez:-1 } }
  ] },

{ id:`marek`, titel:`Marek geht zurück`,
  regie:`Am Spülbecken hängt eine zweite Schürze, sauber und zusammengelegt. Sie wird gerade nicht gebraucht.`,
  er:`Marek geht im Sommer zurück nach Stettin. Seine Mutter ist neunzig.`,
  wie:`ruhig, mit einer Pause davor`, stimmung:`nachdenklich`,
  bedarf:{ id:`marek_zug`, was:`verliert den Einzigen, mit dem er redet`, braucht:{GEL:-1.7} },
  fragen:[
    { id:`neunzehn`, t:`Neunzehn Jahre nebeneinander. Was macht man da am letzten Tag?`, wie:`leise, ohne Neugier im Ton`,
      liest:{A:1.3, E:-0.5, N:-0.3},
      gut:{ er:`Das habe ich mich auch gefragt.`,
            erRegie:`Er sieht zu der Schürze.`,
            er2:`Wir haben in neunzehn Jahren nie zusammen gegessen. Immer nur nebeneinander gearbeitet. Ich glaube, ich koche ihm etwas, und dann sitzen wir das erste Mal an einem Tisch.`,
            wie:`langsam`, wie2:`sehr leise`, stimmung:`geruehrt`,
            fakt:`hat in neunzehn Jahren nie mit Marek an einem Tisch gesessen`, bez:8 },
      zu:{ er:`Man arbeitet, und dann ist Feierabend.`, wie:`abwehrend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`ersatz`, t:`Bekommen Sie Ersatz?`, wie:`praktisch`,
      liest:{C:0.8, A:0.3, O:-0.3},
      gut:{ er:`Eine halbe Stelle, befristet. Das ist kein Ersatz, das ist eine Zahl.`,
            wie:`trocken`, stimmung:`neutral`, bez:4 },
      zu:{ er:`Das wird sich finden.`, wie:`ausweichend`, stimmung:`neutral`, bez:-1 } },

    { id:`gutfuerihn`, t:`Für ihn ist das doch schön.`, wie:`aufgeräumt, gut gemeint`,
      liest:{E:0.9, O:0.5, A:-0.5},
      gut:{ er:`Ja. Das sage ich mir auch.`, wie:`gefasst`, stimmung:`nachdenklich`, bez:2 },
      zu:{ er:`Ja, natürlich ist das schön für ihn.`,
           erRegie:`Er steht auf und wischt die Ablage ab, die sauber ist.`,
           er2:`Entschuldigen Sie, ich muss noch etwas fertig machen.`,
           wie:`sofort zustimmend`, wie2:`ausgesucht freundlich und ganz weg`, stimmung:`gereizt`, bez:-7 } }
  ] },

{ id:`vegan`, titel:`Vierzig Prozent bis zum Herbst`,
  regie:`An der Pinnwand hängt ein Ausdruck mit einem Tortendiagramm. Jemand hat mit Bleistift ein Fragezeichen danebengesetzt.`,
  er:`Vierzig Prozent der Gerichte sollen bis zum Herbst pflanzlich sein. Steht so im Papier.`,
  wie:`sachlich, ohne erkennbare Meinung`, stimmung:`neutral`,
  bedarf:{ id:`vegan_fre`, was:`soll kochen, was er nie gekocht hat, nach fremder Vorgabe`, braucht:{FRE:1.2} },
  fragen:[
    { id:`koennenSie`, t:`Können Sie das denn?`, wie:`geradeheraus, ohne Häme`,
      liest:{C:1.0, A:0.5, O:-0.5},
      gut:{ er:`Kochen kann ich es. Gut kochen muss ich erst lernen.`,
            erRegie:`Er zieht das Heft heran, ohne es aufzuschlagen.`,
            er2:`Ich habe im Januar angefangen, dienstags eines auszuprobieren. Zwanzig Portionen, nicht zweihundert. Bisher sind vier gut.`,
            wie:`ehrlich`, wie2:`sachlich, ein wenig stolz`, stimmung:`interessiert`,
            fakt:`probiert seit Januar dienstags pflanzliche Gerichte an zwanzig Portionen aus`, bez:7 },
      zu:{ er:`Ich koche, was verlangt wird.`, wie:`knapp`, stimmung:`verschlossen`, bez:-2 } },

    { id:`endlich`, t:`Wird auch Zeit, oder?`, wie:`schwungvoll, ein wenig herausfordernd`,
      liest:{O:1.4, E:0.6},
      gut:{ er:`Vielleicht. Ich bin da nicht der Richtige zum Fragen.`, wie:`vorsichtig`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Wird Zeit.`,
           erRegie:`Er nickt und sieht auf das Blatt.`,
           er2:`Ich habe vierunddreißig Jahre lang gekocht, was die Leute gern gegessen haben. Jetzt ist es offenbar das Falsche gewesen. Gut.`,
           wie:`zustimmend`, wie2:`sehr ruhig, sehr verletzt`, stimmung:`gereizt`, bez:-7 } },

    { id:`werbestimmt`, t:`Wer hat sich die vierzig Prozent ausgedacht?`, wie:`ruhig, aber genau`,
      liest:{A:0.6, C:0.6, E:-0.3},
      gut:{ er:`Eine Arbeitsgruppe, in der niemand kocht.`,
            erRegie:`Er tippt auf das Fragezeichen am Rand.`,
            er2:`Ich bin nicht dagegen. Ich hätte nur gern einmal gesagt, was an einem Dienstag machbar ist und was nicht. Gefragt hat mich keiner.`,
            wie:`trocken`, wie2:`klar`, stimmung:`nachdenklich`,
            fakt:`stört sich nicht an der Vorgabe, sondern daran, nicht gefragt worden zu sein`, bez:6 },
      zu:{ er:`Jemand über mir.`, wie:`gleichmütig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`spuelmaschine`, titel:`Die Spülmaschine seit drei Wochen`,
  regie:`Auf der großen Spülmaschine klebt ein Zettel mit dem Wort DEFEKT und einem Datum von vor drei Wochen. Daneben stapeln sich Wannen.`,
  er:`Die Große ist seit dem Achtzehnten kaputt. Wir spülen zu zweit von Hand.`,
  wie:`ohne Klage, als läse er einen Wetterbericht`, stimmung:`neutral`,
  bedarf:{ id:`spuel_sic`, was:`arbeitet seit drei Wochen mit halbem Werkzeug`, braucht:{FRE:-1.3} },
  fragen:[
    { id:`wielange`, t:`Und wie lange geht das noch so?`, wie:`sachlich`,
      liest:{C:1.0, A:0.4},
      gut:{ er:`Das Ersatzteil kommt aus Italien. Vierte Woche.`,
            erRegie:`Er zeigt auf einen zweiten Zettel unter dem ersten.`,
            er2:`Ich habe angerufen. Sechsmal. Ich schreibe jedes Mal Datum und Uhrzeit dazu, sonst glaubt es mir hinterher niemand.`,
            wie:`nüchtern`, wie2:`ruhig, sehr bestimmt`, stimmung:`interessiert`,
            fakt:`hat sechsmal wegen des Ersatzteils angerufen und jedes Gespräch notiert`, bez:6 },
      zu:{ er:`Bis sie kommt.`, wie:`gleichmütig`, stimmung:`neutral`, bez:-1 } },

    { id:`beschweren`, t:`Da müssten Sie mal richtig auf den Tisch hauen.`, wie:`anfeuernd`,
      liest:{E:1.0, A:-0.9},
      gut:{ er:`Vielleicht haben Sie recht.`, wie:`unschlüssig`, stimmung:`nachdenklich`, bez:1 },
      zu:{ er:`Auf den Tisch hauen.`,
           erRegie:`Er lächelt, und es erreicht die Augen nicht.`,
           er2:`Dann ärgert sich der Mann in der Haustechnik, der auch nichts dafür kann, und die Maschine ist immer noch kaputt. Nein.`,
           wie:`wiederholend`, wie2:`freundlich und vollkommen fest`, stimmung:`skeptisch`, bez:-6 } },

    { id:`haende`, t:`Zweihundert Essen von Hand — wie schaffen Sie das?`, wie:`aufrichtig verwundert`,
      liest:{A:1.1, N:-0.6, E:-0.3},
      gut:{ er:`Man fängt eine Stunde früher an.`,
            erRegie:`Er dreht die Hände um und sieht sie an, als gehörten sie jemand anderem.`,
            er2:`Marek und ich machen das im Wechsel. Er sagt nichts, ich sage nichts, und um vier sind wir fertig. So geht das.`,
            wie:`schlicht`, wie2:`warm`, stimmung:`geruehrt`, bez:7 },
      zu:{ er:`Man schafft es eben.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`saal`, titel:`Acht Wochen ohne Klappe`,
  regie:`Im Speisesaal stehen die Tische auf den Kopf gestellt. Durch die Klappe sieht man nur Folie.`,
  er:`Der Saal wird gemacht. Acht Wochen Lunchpakete, keine Ausgabe, keine Klappe.`,
  wie:`ruhig, mit einem Blick zur Folie`, stimmung:`nachdenklich`,
  bedarf:{ id:`saal_zug`, was:`sieht acht Wochen lang niemanden, für den er kocht`, braucht:{GEL:-1.5} },
  fragen:[
    { id:`fehlt`, t:`Dann sehen Sie acht Wochen niemanden.`, wie:`keine Frage, eine Feststellung`,
      liest:{A:1.2, E:-0.6},
      gut:{ er:`Sie sind der Erste, dem das auffällt.`,
            erRegie:`Er sieht dich einen Moment länger an als vorher.`,
            er2:`Ich stehe zwar hinten, aber ich sehe alle. Wer allein sitzt, wer mit wem, wer schlecht aussieht. Acht Wochen Tüten, und ich weiß von keinem mehr was.`,
            wie:`überrascht`, wie2:`sehr offen`, stimmung:`geruehrt`,
            fakt:`sieht durch die Klappe, wie es den Leuten geht, und verliert das acht Wochen lang`, bez:8 },
      zu:{ er:`Ist ja nicht für immer.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-2 } },

    { id:`endlichruhe`, t:`Da haben Sie doch mal Ruhe.`, wie:`aufmunternd`,
      liest:{E:0.8, O:0.6, A:-0.4},
      gut:{ er:`Ruhe habe ich hier immer.`, wie:`freundlich`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Ruhe.`,
           erRegie:`Er nimmt das Handtuch von der Schulter und legt es über die Stuhllehne.`,
           er2:`Ich koche in Tüten, die jemand mitnimmt, den ich nicht sehe. Das ist keine Ruhe, das ist eine Fabrik.`,
           wie:`gedehnt`, wie2:`ohne Lautstärke`, stimmung:`gereizt`, bez:-7 } },

    { id:`tueten`, t:`Was kommt denn in so eine Tüte?`, wie:`schlicht neugierig`,
      liest:{C:0.9, A:0.4, O:-0.4},
      gut:{ er:`Belegtes, Obst, etwas Warmes in der Dose, wenn es geht.`,
            erRegie:`Er zieht das Heft heran.`,
            er2:`Ich mache neun Tüten anders als die übrigen. Wegen der Nüsse. Das steht hier drin, sonst würde ich es vergessen.`,
            wie:`sachlich`, wie2:`selbstverständlich`, stimmung:`freundlich`,
            fakt:`packt neun Tüten anders, wegen der Nussallergien im Haus`, bez:6 },
      zu:{ er:`Das Übliche.`, wie:`knapp`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`nuss`, titel:`Der Zwischenfall am Donnerstag`,
  regie:`Neben dem Heft liegt ein Formular mit dem Wort Vorkommnis. Es ist ausgefüllt, aber nicht abgegeben.`,
  er:`Am Donnerstag ist jemandem schlecht geworden. Nüsse in der Sauce, die da nicht hingehörten.`,
  wie:`sehr gleichmäßig`, stimmung:`nachdenklich`,
  bedarf:{ id:`nuss_sic`, was:`will sicher sein, dass ihm das nie wieder passiert`, braucht:{FRE:-1.6} },
  fragen:[
    { id:`ihrefehler`, t:`War es Ihr Fehler?`, wie:`direkt, ohne Vorwurf im Ton`,
      liest:{A:1.0, C:0.7, N:-0.4},
      gut:{ er:`Nein. Der Lieferant hat die Rezeptur geändert und es nicht dazugeschrieben.`,
            erRegie:`Er legt die Hand auf das Formular.`,
            er2:`Es war trotzdem meine Sauce. Ich habe das Formular am Freitag ausgefüllt und noch nicht abgegeben, weil dann der Einkäufer Ärger bekommt, und der kann auch nichts dafür.`,
            wie:`klar`, wie2:`leiser`, stimmung:`nachdenklich`,
            fakt:`hält das Vorkommnisformular zurück, um den Einkäufer zu schonen`, bez:7 },
      zu:{ er:`Das wird geprüft.`, wie:`verschlossen`, stimmung:`verschlossen`, bez:-2 } },

    { id:`passiert`, t:`So etwas passiert. Machen Sie sich nichts draus.`, wie:`beruhigend gemeint`,
      liest:{N:1.2, O:0.4, E:0.3},
      gut:{ er:`Danke. Ich weiß.`, wie:`freundlich`, stimmung:`freundlich`, bez:2 },
      zu:{ er:`Ich mache mir nichts draus.`,
           erRegie:`Er schiebt das Formular unter das Heft.`,
           er2:`Ich habe neun Namen auf einer Liste, damit so etwas nicht passiert. Am Donnerstag hat die Liste nicht gereicht. Darüber mache ich mir sehr wohl etwas.`,
           wie:`richtigstellend`, wie2:`sehr ruhig`, stimmung:`gereizt`, bez:-6 } },

    { id:`wiejetzt`, t:`Was machen Sie jetzt anders?`, wie:`praktisch`,
      liest:{C:1.2, A:0.4},
      gut:{ er:`Jede Lieferung wird aufgeschnitten und gelesen, auch wenn wir sie seit Jahren haben.`,
            wie:`bestimmt`, stimmung:`interessiert`,
            fakt:`liest seit dem Zwischenfall jede Lieferung neu durch`, bez:5 },
      zu:{ er:`Ich passe auf.`, wie:`kurz`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`knie`, titel:`Das Knie`,
  regie:`Hinter der Anrichte steht ein Hocker, der dort nicht hingehört. Er ist abgewetzt.`,
  er:`Setzen Sie sich ruhig. Ich stehe, das geht schneller wieder rein als raus.`,
  wie:`beiläufig, eine Hand am Knie`, stimmung:`neutral`,
  bedarf:{ id:`knie_sic`, was:`weiß nicht, wie lange die Knie noch mitmachen`, braucht:{FRE:-1.2} },
  fragen:[
    { id:`wieoft`, t:`Wie lange stehen Sie am Tag?`, wie:`sachlich`,
      liest:{C:0.9, A:0.5, N:-0.3},
      gut:{ er:`Neun Stunden. Halb sechs bis halb drei, den Hocker nehme ich beim Gemüse.`,
            erRegie:`Er sagt es wie eine Bestellung.`,
            er2:`Der Arzt sagt sechs. Der Arzt hat noch nie zweihundert Essen gemacht.`,
            wie:`nüchtern`, wie2:`trocken`, stimmung:`amuesiert`,
            fakt:`steht neun Stunden am Tag, der Arzt hat sechs gesagt`, bez:6 },
      zu:{ er:`Lange genug.`, wie:`knapp`, stimmung:`verschlossen`, bez:-1 } },

    { id:`schonen`, t:`Sie müssen sich schonen, so geht das nicht weiter.`, wie:`besorgt, bestimmt`,
      liest:{N:1.1, E:0.6, O:-0.3},
      gut:{ er:`Sie haben ja recht.`, wie:`einsichtig`, stimmung:`nachdenklich`, bez:2 },
      zu:{ er:`Ja.`,
           erRegie:`Er sieht auf den Hocker und dann auf die Uhr über der Tür.`,
           er2:`Wenn ich mich schone, macht es jemand anders, und dann sitzt Marek allein da drüben. Verzeihen Sie, das klingt jetzt nach Selbstmitleid, ist es aber nicht.`,
           wie:`freundlich`, wie2:`leiser`, stimmung:`skeptisch`, bez:-5 } },

    { id:`hocker`, t:`Der Hocker ist ja schon gut eingesessen.`, wie:`beiläufig, fast heiter`,
      liest:{A:0.8, E:-0.4, O:-0.3},
      gut:{ er:`Den hat mir Marek hingestellt, vor zwei Jahren, ohne etwas zu sagen.`,
            erRegie:`Er sieht ihn an, als wäre er ein Möbel mit Vorgeschichte.`,
            er2:`Er hat ihn einfach dahingestellt. Ich habe mich nie bedankt, das wäre uns beiden peinlich gewesen.`,
            wie:`warm`, wie2:`sehr leise`, stimmung:`geruehrt`,
            fakt:`Marek hat ihm den Hocker wortlos hingestellt`, bez:7 },
      zu:{ er:`Ist ein Hocker.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`app`, titel:`Der Speiseplan mit Bildern`,
  regie:`Auf dem Tisch liegt ein Ausdruck: ein Handybildschirm mit einem Foto von Gulasch, das nicht seines ist.`,
  er:`Es soll eine Anwendung geben. Speiseplan aufs Telefon, mit Bildern von jedem Gericht.`,
  wie:`vorsichtig, als könnte das Blatt beißen`, stimmung:`neutral`,
  bedarf:{ id:`app_zug`, was:`soll sein Essen zeigen, ohne dabei zu sein`, braucht:{GEL:-0.9, FRE:0.7} },
  fragen:[
    { id:`fotos`, t:`Wer soll die Bilder machen?`, wie:`praktisch`,
      liest:{C:1.0, A:0.4, O:-0.4},
      gut:{ er:`Ein Fotograf, einmal. Danach steht dasselbe Bild dreißig Wochen lang da.`,
            erRegie:`Er tippt auf das fremde Gulasch.`,
            er2:`Das da hat nie in meiner Küche gestanden. Wenn jemand danach kommt und es sieht anders aus, ist er enttäuscht, und ich habe ihn enttäuscht, nicht der Fotograf.`,
            wie:`nüchtern`, wie2:`sehr klar`, stimmung:`interessiert`,
            fakt:`fürchtet, dass ein Werbefoto die Leute enttäuscht und man es ihm anlastet`, bez:7 },
      zu:{ er:`Das machen andere.`, wie:`abweisend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`modern`, t:`Ein bisschen Moderne täte der Kantine gut.`, wie:`munter`,
      liest:{O:1.5, E:0.5},
      gut:{ er:`Mag sein. Ich bin da altmodisch.`, wie:`freundlich`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Der Kantine.`,
           erRegie:`Er streicht das Blatt glatt.`,
           er2:`Die Leute kommen nicht wegen der Bilder. Sie kommen, weil um zwölf jemand da ist, der weiß, dass sie keine Nüsse vertragen. Dafür gibt es keine Anwendung.`,
           wie:`ruhig`, wie2:`fest`, stimmung:`gereizt`, bez:-7 } },

    { id:`stehtnamedrauf`, t:`Steht Ihr Name dann darunter?`, wie:`neugierig`,
      liest:{A:0.5, O:0.3, E:0.4},
      gut:{ er:`Hoffentlich nicht.`, wie:`sofort`, stimmung:`amuesiert`,
            nachEr:`Was soll ich denn mit meinem Namen unter einem Bild.`, bez:3 },
      zu:{ er:`Wird schon jemand draufschreiben.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`praktikant`, titel:`Der Siebzehnjährige`,
  regie:`Am Brett hängt ein zweiter Dienstplan, mit Bleistift geschrieben, mit vielen Streichungen.`,
  er:`Seit Montag habe ich einen Praktikanten. Siebzehn.`,
  wie:`neutral, mit einer winzigen Pause`, stimmung:`neutral`,
  bedarf:{ id:`prakt_zug`, was:`soll zum ersten Mal jemanden anlernen, den er nicht erreicht`, braucht:{GEL:-1.1} },
  fragen:[
    { id:`wieist`, t:`Und? Wie ist er?`, wie:`einfach`,
      liest:{A:1.1, E:-0.3},
      gut:{ er:`Freundlich. Und er hört nichts.`,
            erRegie:`Er zeigt aufs Ohr.`,
            er2:`Er hat immer einen Stöpsel drin. Ich habe es zweimal gesagt, dann habe ich es gelassen, weil ich nicht der Mann sein wollte, der ihm etwas verbietet. Jetzt merke ich, dass ich ihm damit nichts Gutes tue.`,
            wie:`freundlich`, wie2:`nachdenklich, selbstkritisch`, stimmung:`nachdenklich`,
            fakt:`traut sich nicht, dem Praktikanten die Kopfhörer zu verbieten`, bez:7 },
      zu:{ er:`Er lernt.`, wie:`knapp`, stimmung:`neutral`, bez:-1 } },

    { id:`durchgreifen`, t:`Da müssen Sie durchgreifen, sonst tanzt er Ihnen auf der Nase herum.`, wie:`bestimmt, gut gemeint`,
      liest:{E:0.9, A:-1.0},
      gut:{ er:`Wahrscheinlich haben Sie recht.`, wie:`unschlüssig`, stimmung:`nachdenklich`, bez:1 },
      zu:{ er:`Durchgreifen.`,
           erRegie:`Er sieht auf den Dienstplan mit den Streichungen.`,
           er2:`Bei mir wurde damals durchgegriffen. Ich habe drei Jahre gebraucht, bis ich einen Chef ansehen konnte. So einer werde ich nicht mit einundsechzig.`,
           wie:`wiederholend`, wie2:`sehr ruhig`, stimmung:`gereizt`, bez:-7 } },

    { id:`waszeigen`, t:`Was zeigen Sie ihm zuerst?`, wie:`sachlich neugierig`,
      liest:{C:1.1, O:-0.4, A:0.3},
      gut:{ er:`Wie man ein Messer hinlegt und wie man einen Lappen auswäscht.`,
            erRegie:`Er sagt es, als wäre es das Wichtigste der Welt.`,
            er2:`Kochen kann man später beibringen. Das andere merkt man einem sein Leben lang an.`,
            wie:`bestimmt`, wie2:`ruhig`, stimmung:`interessiert`, bez:5 },
      zu:{ er:`Das, was gerade anliegt.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`hygiene`, titel:`Die neue Dokumentation`,
  regie:`Auf der Anrichte liegt ein Ordner mit Registerblättern, dazu ein Stapel unausgefüllter Formulare.`,
  er:`Ab April muss jede Temperatur aufgeschrieben werden. Dreimal am Tag, je Gerät.`,
  wie:`ruhig, mit einem Blick auf den Stapel`, stimmung:`neutral`,
  bedarf:{ id:`hyg_sic`, was:`muss belegen, was er seit vierunddreißig Jahren im Kopf hat`, braucht:{FRE:-1.4} },
  fragen:[
    { id:`schonimmer`, t:`Sie schreiben doch sowieso alles auf.`, wie:`ruhig, mit einem Nicken zum Heft`,
      liest:{C:1.2, A:0.4, O:-0.3},
      gut:{ er:`Das schon.`,
            erRegie:`Er legt die Hand aufs Heft.`,
            er2:`Nur steht es hier drin und nicht in deren Ordner. Was hier steht, gilt nichts, weil kein Formular drum herum ist. Vierunddreißig Jahre, und es gilt nichts.`,
            wie:`sachlich`, wie2:`ohne Bitterkeit, was es schlimmer macht`, stimmung:`nachdenklich`,
            fakt:`sein Heft gilt der Verwaltung nichts, weil kein Formular darum herum ist`, bez:7 },
      zu:{ er:`Dann schreibe ich es eben zweimal.`, wie:`gleichmütig`, stimmung:`neutral`, bez:-1 } },

    { id:`buerokratie`, t:`So ein Papierkram, das ist doch Unsinn.`, wie:`kumpelhaft, empört`,
      liest:{E:0.8, A:-0.8, O:0.4},
      gut:{ er:`Ein bisschen ist es das.`, wie:`vorsichtig zustimmend`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Unsinn ist es nicht.`,
           erRegie:`Er richtet den Stapel, bis die Kanten stimmen.`,
           er2:`Wenn ich einmal nicht aufpasse, liegt jemand im Krankenhaus. Das Formular ist lästig, und es hat trotzdem recht.`,
           wie:`bestimmt`, wie2:`ruhig`, stimmung:`skeptisch`, bez:-6 } },

    { id:`werliest`, t:`Liest das eigentlich jemand?`, wie:`trocken`,
      liest:{A:0.4, C:0.5, E:0.2},
      gut:{ er:`Einmal im Jahr, eine Viertelstunde.`, wie:`trocken`, stimmung:`amuesiert`, bez:3 },
      zu:{ er:`Das weiß ich nicht.`, wie:`neutral`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`abschiedsessen`, titel:`Das Essen zum Abschied`,
  regie:`Auf dem Tisch liegt eine handgeschriebene Liste mit elf Namen. Zwei sind durchgestrichen.`,
  er:`Frau Özdemir hört auf. Achtundzwanzig Jahre. Sie wollen ein Essen machen, und ich soll kochen.`,
  wie:`ruhig, mit der Liste unter der Hand`, stimmung:`neutral`,
  bedarf:{ id:`abess_zug`, was:`richtet den anderen ihre Feste aus und sitzt nie mit`, braucht:{GEL:-1.6} },
  fragen:[
    { id:`sitzensie`, t:`Sitzen Sie mit am Tisch?`, wie:`ruhig, ohne Nachdruck`,
      liest:{A:1.2, E:-0.5},
      gut:{ er:`Nein.`,
            erRegie:`Er sagt es sofort, und dann sagt er eine Weile nichts mehr.`,
            er2:`Ich koche, trage auf, räume ab. So war es bei allen. Bei achtundzwanzig Abschieden in vierunddreißig Jahren habe ich einmal gesessen, und da war ich krank.`,
            wie:`knapp`, wie2:`sehr leise`, stimmung:`geruehrt`,
            fakt:`hat bei achtundzwanzig Abschieden nur einmal mitgesessen`, bez:8 },
      zu:{ er:`Ich habe da hinten zu tun.`, wie:`abwiegelnd`, stimmung:`verschlossen`, bez:-2 } },

    { id:`waskochen`, t:`Was kochen Sie ihr?`, wie:`interessiert`,
      liest:{C:0.9, A:0.6, O:-0.4},
      gut:{ er:`Linsen.`,
            erRegie:`Er lächelt zum ersten Mal richtig.`,
            er2:`Sie isst seit achtundzwanzig Jahren dienstags Linsen. Sie hat nie gesagt, dass sie sie mag. Man sieht es.`,
            wie:`schlicht`, wie2:`warm`, stimmung:`freundlich`,
            fakt:`kocht ihr Linsen, weil er es ihr angesehen hat`, bez:7 },
      zu:{ er:`Was auf der Karte steht.`, wie:`knapp`, stimmung:`neutral`, bez:-1 } },

    { id:`reden`, t:`Halten Sie auch eine Rede?`, wie:`aufgeräumt, halb im Scherz`,
      liest:{E:1.2, O:0.4},
      gut:{ er:`Zwei Sätze, wenn es sein muss.`, wie:`unbehaglich`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Eine Rede.`,
           erRegie:`Er wird eine Spur blasser und lächelt sehr höflich.`,
           er2:`Nein. Ich mache das Essen, das ist meine Rede.`,
           wie:`erschrocken`, wie2:`bestimmt, ein wenig zu schnell`, stimmung:`gereizt`, bez:-6 } }
  ] }
],

/* --- Was er sagt, wenn du dich festlegst. -------------------------- */

reaktion: {
  z: {
    O: { genau:{ er:`Stimmt. Ich probiere nicht gern. Was ich kann, kann ich, und davon lebt hier ein ganzes Haus.`, wie:`ohne Entschuldigung` },
         zuHoch:{ er:`Neugierig.`, erRegie:`Er sieht auf die zwölf Zettel am Brett, alle in derselben Handschrift.`, er2:`Ich koche zwölf Gerichte, seit ich hier bin. Neu heißt bei mir seit zwölf Jahren.`, wie:`gedehnt`, wie2:`trocken` },
         zuTief:{ er:`Ganz von gestern bin ich auch nicht. Ich probiere seit Januar jeden Dienstag etwas aus, das ich nie gekocht habe.`, wie:`richtigstellend` } },
    C: { genau:{ er:`Ordentlich, ja. Nicht pingelig. Der Unterschied ist, dass ich weiß, wo etwas liegt, und nicht, dass es gerade liegt.`, wie:`bedächtig` },
         zuHoch:{ er:`So genau bin ich nicht. Sehen Sie in den unteren Schrank, aber tun Sie es lieber nicht.`, wie:`verlegen, amüsiert` },
         zuTief:{ er:`Nachlässig.`, erRegie:`Er zieht das Heft unter der Kasse hervor und legt es zwischen euch.`, er2:`Vierunddreißig Jahre, jeden Tag eine Zeile. Sagen Sie das noch einmal.`, wie:`ruhig`, wie2:`ohne Schärfe, aber sehr deutlich` } },
    E: { genau:{ er:`Ja. Ich rede gern mit einem und ungern mit zwanzig. Deshalb stehe ich hier und nicht da drüben.`, wie:`schlicht` },
         zuHoch:{ er:`Gesellig.`, erRegie:`Er lacht kurz und leise, eine Hand vor dem Mund.`, er2:`Ich gehe seit vierunddreißig Jahren nicht in den Speisesaal. Das fällt nur keinem auf, weil ich immer freundlich bin.`, wie:`ungläubig`, wie2:`vergnügt` },
         zuTief:{ er:`So ein Einsiedler bin ich nicht. Ich stehe zweimal die Woche mit acht alten Herren auf einem Bocciaplatz.`, wie:`einschränkend` } },
    A: { genau:{ er:`Ja.`, erRegie:`Er nickt, ohne darüber nachzudenken.`, er2:`Und es ist nicht nur schön. Ich sage zu selten Nein, und dann ärgere ich mich abends über mich und nicht über den anderen.`, wie:`sofort`, wie2:`selbstkritisch` },
         zuHoch:{ er:`Ein Heiliger bin ich nicht. Es gibt zwei Leute im Haus, denen koche ich nichts extra, und die wissen auch, warum.`, wie:`trocken` },
         zuTief:{ er:`Hart.`, erRegie:`Er sieht ehrlich betroffen aus.`, er2:`Das tut mir leid, wenn ich so wirke. So wollte ich nie sein.`, wie:`überrascht`, wie2:`leise` } },
    N: { genau:{ er:`Umwerfen tut mich wenig. Ich habe hier einen Brand erlebt und zwei Wochen später wieder gekocht.`, wie:`gelassen` },
         zuHoch:{ er:`Dünnhäutig.`, erRegie:`Er schüttelt einmal langsam den Kopf.`, er2:`Ich mache mir Sorgen um Leute. Um mich nicht, dafür habe ich keine Zeit.`, wie:`ruhig`, wie2:`bestimmt` },
         zuTief:{ er:`Ganz gleichgültig bin ich nicht. Am Donnerstag ist jemandem schlecht geworden von meiner Sauce, und daran denke ich jeden Morgen.`, wie:`leiser` } }
  },
  m: {
    FRE: { genau:{ er:`Ungefähr. In meinem Topf bestimme ich, aber ich brauche nicht die ganze Welt zu bestimmen. Mir reicht, dass es die Küche nächstes Jahr noch gibt.`, wie:`abwägend` },
           zuHoch:{ er:`Freiheit.`, erRegie:`Er zeigt mit dem Kinn auf das Blatt mit den Nudelzeiten.`, er2:`Ich halte mich seit vierunddreißig Jahren an fremde Vorschriften und finde die meisten davon richtig. So frei bin ich nicht.`, wie:`trocken`, wie2:`sachlich` },
           zuTief:{ er:`Ganz ohne eigenen Kopf geht es auch nicht. Wie lange meine Nudeln kochen, entscheide ich, und da kann schreiben wer will.`, wie:`fester als erwartet` } },
    GEL: { genau:{ er:`Ja.`, erRegie:`Er sieht zur Klappe, hinter der niemand mehr steht.`, er2:`Ich brauche keine Karte mit meinem Namen. Ich brauche, dass um zwölf jemand kommt, den ich kenne, und dass er wiederkommt.`, wie:`sofort`, wie2:`sehr klar` },
           zuHoch:{ er:`Wenn Sie mir schmeicheln wollen, lassen Sie es. An meiner Tür ist kein Schild, und ich habe nie eines beantragt.`, wie:`freundlich, aber abschließend` },
           zuTief:{ er:`Ganz gleich ist es mir nicht. Im Jahresbericht steht die Küche unter Sonstiges, und das habe ich gelesen und gemerkt.`, wie:`leiser, ertappt` } }
  }
},

/* --- Wiedersehen und Abschied. ------------------------------------ */

wiedersehen: [
  { ab:70, regie:`Die Tür steht offen, und auf dem Tisch stehen zwei Tassen, bevor du etwas gesagt hast.`,
    er:`Da sind Sie. Ich habe Kaffee gemacht, setzen Sie sich.`, wie:`aufrichtig erfreut`, stimmung:`freundlich` },
  { ab:50, regie:`Er trocknet sich die Hände ab und schiebt dir den Stuhl zu, der nicht wackelt.`,
    er:`Schön. Ich habe eine halbe Stunde, dann kommt die Lieferung.`, wie:`freundlich, beschäftigt`, stimmung:`neutral` },
  { ab:30, regie:`Er sieht auf, nickt und arbeitet weiter. Der Stuhl bleibt, wo er steht.`,
    er:`Setzen Sie sich, wenn Sie mögen. Ich muss dabei weitermachen.`, wie:`höflich, mit Abstand`, stimmung:`skeptisch` },
  { ab:-999, regie:`Er wischt eine Fläche ab, die sauber ist, und sieht dich dabei nicht an.`,
    er:`Ja bitte?`, wie:`ausgesucht freundlich, und genau deshalb schlimm`, stimmung:`verschlossen` }
],

abschied: [
  { ab:70, regie:`Er packt dir zwei Stück Kuchen in Papier, ohne zu fragen, und bringt dich bis zur Tür.`,
    er:`Kommen Sie wieder. Und erzählen Sie mir dann, was aus der Sache geworden ist.`,
    wie:`warm`, stimmung:`freundlich`, bez:3 },
  { ab:50, regie:`Er steht auf und stellt die Tassen ineinander.`,
    er:`War schön. Sie wissen ja, wo ich bin.`, wie:`freundlich`, stimmung:`neutral`, bez:2 },
  { ab:30, regie:`Er nickt und wendet sich wieder dem Becken zu.`,
    er:`Ja. Machen Sie es gut.`, wie:`kurz, aber nicht unfreundlich`, stimmung:`neutral`, bez:1 },
  { ab:-999, regie:`Er trocknet sich die Hände und legt das Handtuch über die Schulter.`,
    er:`Wiedersehen.`, wie:`höflich und ohne jeden Inhalt`, stimmung:`verschlossen`, bez:0 }
],


});
