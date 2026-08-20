/* ═══════════════════════════════════════════════════════════════════
   Annika Reuter, Papierrestauratorin.

   Die zweite Person, und in fast allem die Gegenprobe zu Baumgartner:
   wo er laut, offen und schlampig ist, ist sie eher still, sehr genau
   und sehr zugewandt. Ruhig sind beide, nur aus verschiedenen Gründen:
   ihn wirft nichts um, und sie arbeitet mit Dingen, die schon
   vierhundert Jahre überstanden haben. Der Unterschied liegt bei ihr in
   der Verträglichkeit — wer ihr widerspricht, bekommt keinen Streit,
   sondern ein sehr höfliches Ende.

   Ihre vier privaten Felder tragen dieselben Kennungen wie seine
   (musik, werkstatt, tochter, plan60), weil die Waren in welt.js
   darauf zeigen. Die Kennungen sind Fächer, kein Inhalt: bei ihm
   steht unter musik ein Kontrabass, bei ihr ein Kirchenchor.
   ═══════════════════════════════════════════════════════════════════ */
PERSONEN.push({

id: `reuter`,
/* In welcher Etage diese Person sitzt. Dorthin kommst du erst, wenn dich
   jemand aus der Etage darunter weiterschickt. */
etage: 2,
kurz: `Papierrestauratorin, 38. Dunkler Bob und Kittel über dem Pullover,
       ein Tisch, auf dem jedes Werkzeug parallel liegt.`,
theme: `blaupause`,
menubild: `personen/reuter/bilder/freundlich.webp`,

hero: {
  name: `Annika Reuter`, age: 38, job: `Papierrestauratorin`,
  ort: `Erster Stock, Zimmer sieben, Werkstatt ohne Fenster`,
  /* Eher still, sehr gewissenhaft, sehr verträglich, robust, mäßig
     neugierig. Sie will Verlässlichkeit und Nähe, nicht Freiheit und
     nicht Geltung.

     Robust heißt bei ihr nicht gleichgültig: sie arbeitet mit Dingen,
     die vierhundert Jahre überstanden haben, und das nimmt vielem die
     Dringlichkeit. Der ungeöffnete Umschlag bleibt trotzdem liegen. */
  z: { O: 1, C: 2, E: -1, A: 2, N: -1 },
  m: { FRE: -2, GEL: -2 }
},

/* Das Klischee über Restauratorinnen: gründlich, still, altmodisch, und
   die Ruhe selbst. Bei ihr trifft es weitgehend — nur die Neugier
   unterschätzt es. Damit ist sie von Anfang an leichter zu lesen als
   er, bei dem das Klischee überwiegend danebenliegt. */
rollenprior: { C: 0.6, E: -0.5, N: -0.4, O: -0.3 },

/* Die Anzeige spricht über sie in der weiblichen Form. */
anrede: {
  er:`sie`,  Er:`Sie`,  ihn:`sie`,   Ihn:`Sie`,   ihm:`ihr`,
  sein:`ihr`, Sein:`Ihr`, seine:`ihre`, Seine:`Ihre`, seiner:`ihrer`
},

rollentext: `Restauratorin: das Klischee sagt gründlich, still, eher altmodisch und nervlich unerschütterlich.`,

stimmungen: {
  neutral:      { t:`sachlich`,     bild:`personen/reuter/bilder/neutral.webp` },
  freundlich:   { t:`freundlich`,   bild:`personen/reuter/bilder/freundlich.webp` },
  amuesiert:    { t:`amüsiert`,     bild:`personen/reuter/bilder/amuesiert.webp` },
  interessiert: { t:`interessiert`, bild:`personen/reuter/bilder/interessiert.webp` },
  nachdenklich: { t:`nachdenklich`, bild:`personen/reuter/bilder/nachdenklich.webp` },
  skeptisch:    { t:`skeptisch`,    bild:`personen/reuter/bilder/skeptisch.webp` },
  gereizt:      { t:`sehr höflich`, bild:`personen/reuter/bilder/gereizt.webp` },
  verschlossen: { t:`verschlossen`, bild:`personen/reuter/bilder/verschlossen.webp` },
  geruehrt:     { t:`berührt`,      bild:`personen/reuter/bilder/geruehrt.webp` },
  abweisend:    { t:`abweisend`,    bild:`personen/reuter/bilder/abweisend.webp` }
},

/* Ihr Zimmer ist noch nicht gezeichnet. Ohne Datei bleibt der
   Streifen oben einfach leer, das Spiel läuft trotzdem. */
raumbild: ``,

/* --- Ankunft. Bei ihr steht keine Tür offen: du klopfst, es dauert,
       dann macht sie auf und bleibt erst einmal im Rahmen stehen. ---- */

baum: {
  start: {
    regie: `Erster Stock, Gang ohne Fenster, dritte Tür. Du klopfst. Es dauert, dann geht sie auf, einen Spalt weit, und sie steht im Rahmen und sieht dich an.`,
    er: `Entschuldigung. Ich hatte den Termin im Kopf und trotzdem vergessen.`,
    wie: `leise, sofort entschuldigend`, stimmung: `neutral`,
    erRegie: `Sie tritt zur Seite, nimmt einen Stapel Kartons vom Besucherstuhl und stellt ihn ordentlich neben die Tür.`,
    er2: `Setzen Sie sich. Möchten Sie Tee? Ich habe nur Tee.`, wie2: `freundlich, ein wenig zu schnell`,
    nachRegie: `Der Raum ist kühl und sehr aufgeräumt. Auf dem Tisch liegt ein einzelnes stockfleckiges Blatt unter sechs Messinggewichten. Ihr habt vierzig Minuten, und du hast dir vorgenommen, nicht sofort nach der Stelle zu fragen.`,
    frage: true
  },

  beruf: {
    er: `Papier. Alles, was auf Papier steht und kaputtgeht. Schimmel, Tinte, die sich durchfrisst, Klebeband von 1970, das jemand gut gemeint hat.`,
    erRegie: `Sie schiebt das Blatt eine Handbreit zu dir herüber, ohne es loszulassen.`,
    er2: `Das hier ist von 1804 und war bis Dienstag in vier Teilen.`,
    wie: `ruhig, deutlich sicherer als eben`, wie2: `mit unüberhörbarem Stolz`,
    stimmung: `interessiert`, fakt: `hat ein Blatt von 1804 aus vier Teilen zusammengesetzt`, ende: true
  },
  brett: {
    er: `Das Werkzeugbrett. Jedes Werkzeug hat einen Umriss, damit man sieht, was fehlt.`,
    erRegie: `Sie sieht selbst hin. Ein Umriss ist leer.`,
    er2: `Das Falzbein ist seit Montag weg. Es macht mich wahnsinnig, und ich sage es niemandem, weil es albern ist.`,
    wie: `sachlich`, wie2: `leiser, halb belustigt über sich`, stimmung: `nachdenklich`,
    fakt: `vermisst seit Montag ein Falzbein und sagt es niemandem`, spur: `brett`, ende: true
  },
  pflanze: {
    er: `Die kriegt hier unten kein Licht. Ich weiß das, und ich nehme sie trotzdem nicht mit nach Hause.`,
    erRegie: `Sie dreht den Topf ein Stück, sodass die kahle Seite nach hinten zeigt.`,
    er2: `Sie war von einer Kollegin.`, wie: `beiläufig`, wie2: `kürzer, abschließend`,
    stimmung: `verschlossen`, spur: `pflanze`, ende: true
  }
},

kennenfrage: [
  { t: `Was machen Sie hier eigentlich genau?`, wie: `interessiert`, ziel: `beruf` },
  { t: `Da fehlt ein Werkzeug an Ihrem Brett.`, wie: `beiläufig, mit einem Blick zur Wand`, ziel: `brett` },
  { t: `Die Pflanze hat es schwer hier unten.`, wie: `leicht, fast nebenbei`, ziel: `pflanze` }
],

uebergang1: {
  duFest: `Du sagst, warum du da bist: eine Anzeige, drei Zeilen, jemand in diesem Haus sucht Hilfe. Unterschrieben mit R. Melzer, Zimmer 2.14. Wie dringend du sie brauchst, sagst du nicht.`,
  er: `Die Anzeige hing bei uns am Brett. Ich habe sie zweimal gelesen.`,
  erRegie: `Sie setzt sich auf die Kante ihres Arbeitshockers, nicht ganz darauf.`,
  er2: `Ich habe ihm auch geschrieben, zweimal, und nie eine Antwort bekommen. Dann war das Zimmer leer. Aber Sie sind ja jetzt hier — reden wir erst über etwas anderes, ich bin sowieso schlecht darin, gleich zur Sache zu kommen.`,
  wie: `vorsichtig`, wie2: `entschuldigend, aber wärmer als vorher`, stimmung: `freundlich`
},

/* --- Fuenf Einstiege. Beim Wiederkommen faengt es hier an. Bei ihr
       liegt immer etwas auf dem Tisch, und man darf es ansehen, aber
       nicht anfassen. ---------------------------------------------- */

einstieg: [
  { id:`stoere`, t:`Störe ich mitten in etwas?`, wie:`leise, in der Tür`,
    er:`Ich bin in einer Pause zwischen zwei Schichten Leim.`,
    erRegie:`Sie legt den Pinsel quer über das Glas, nicht hinein.`,
    er2:`Zwanzig Minuten. Danach muss ich weiter, sonst zieht es sich krumm. Bis dahin gehöre ich Ihnen.`,
    wie:`ruhig`, wie2:`freundlich, sehr genau`, stimmung:`freundlich`,
    fakt:`arbeitet in Fenstern von zwanzig Minuten, zwischen zwei Schichten Leim` },

  { id:`tisch`, t:`Was liegt da?`, wie:`mit einem Blick auf den Tisch, ohne hinzugreifen`,
    er:`Ein Gemeinderatsprotokoll von 1911. Wasserschaden von 1994.`,
    erRegie:`Sie dreht das Blatt einen Zentimeter, damit du es besser siehst, und behält die Hand darauf.`,
    er2:`Dreiundachtzig Jahre lag es trocken und heil, und dann ist ein Rohr geplatzt. Das ist meistens die Geschichte.`,
    wie:`sachlich`, wie2:`ruhig`, stimmung:`interessiert`,
    fakt:`arbeitet an einem Protokoll von 1911 mit einem Wasserschaden von 1994` },

  { id:`licht`, t:`Sie haben die Lampe umgestellt.`, wie:`beiläufig`,
    er:`Sie ist zwei Zentimeter weiter links.`,
    erRegie:`Sie sieht dich an, kurz und aufmerksam, so als hätte sie etwas nachgeprüft.`,
    er2:`Das ist noch niemandem aufgefallen, der hier hereinkommt. Meiner Kollegin auch nicht, und die kommt jeden Tag.`,
    wie:`überrascht`, wie2:`fast erfreut`, stimmung:`interessiert`,
    fakt:`hat gemerkt, dass dir die verschobene Lampe aufgefallen ist` },

  { id:`kalt`, t:`Es ist kühl hier.`, wie:`die Hände in den Taschen`,
    er:`Achtzehn Grad und fünfzig Prozent. Das ist keine Sparsamkeit, das ist die Vorgabe.`,
    erRegie:`Sie zeigt auf ein kleines Gerät am Regal, das zwei Zahlen anzeigt.`,
    er2:`Papier hat es lieber kühl als ich. Ich habe drei Pullover hier hängen.`,
    wie:`sachlich`, wie2:`mit einem kleinen Lächeln`, stimmung:`freundlich`,
    fakt:`hält achtzehn Grad und fünfzig Prozent, mit drei Pullovern zum Ausgleich` },

  { id:`leise`, t:`Man hört hier gar nichts.`, wie:`nach einer Pause`,
    er:`Doch. Die Lüftung, und alle vier Minuten den Aufzug.`,
    erRegie:`Sie hebt einen Finger und wartet. Nach ein paar Sekunden fährt der Aufzug an.`,
    er2:`Wenn er zwei Wochen stillsteht, arbeite ich schlechter. Das ist mir selbst unangenehm.`,
    wie:`ruhig`, wie2:`leiser`, stimmung:`nachdenklich`,
    fakt:`arbeitet schlechter, wenn der Aufzug stillsteht` }
],

/* --- Die Frage nach Arbeit. Sie ist selbst befristet, und deshalb ist
       das die einzige Frage, bei der sie zuerst an sich denkt. ----- */

arbeit: {
  frage: `Sucht hier eigentlich jemand jemanden?`,
  wie: `vorsichtig`,
  zu: { er:`Das müsste im Intranet stehen.`,
        erRegie:`Sie sieht kurz auf und dann wieder auf das Blatt vor sich.`,
        er2:`Ich habe da lange nicht nachgesehen.`,
        wie:`leise`, wie2:`abschließend`, stimmung:`verschlossen` },
  offen: { er:`Ich habe da sehr oft nachgesehen.`,
           erRegie:`Sie legt den Pinsel quer über das Glas und lässt die Hände liegen.`,
           er2:`Ich bin seit neun Jahren befristet, ich sehe jeden Montag nach. Deshalb weiß ich auch, was nicht drinsteht: die halben Stellen. Die werden zusammengelegt und weitergesagt, und wer davon erfährt, hat mit den richtigen Leuten geredet.`,
           wie:`ruhig`, wie2:`sehr genau, und zum ersten Mal über sich`, stimmung:`nachdenklich`,
           fakt:`sieht seit neun Jahren jeden Montag nach offenen Stellen` }
},

/* --- Akt 2: neun Fragen zu ihr. Jede bietet eine starke und eine
       gemäßigte Antwort auf demselben Merkmal — nur so lässt sich eine
       Zwei von einer Eins unterscheiden. ---------------------------- */

bigfive: [
  { id:`wochenende`, q:`Was haben Sie am Wochenende gemacht?`,
    a:[
      {id:`liste`, wie:`gleichmäßig, ohne Klage`, stimmung:`neutral`,
       t:`Die Materialliste fürs nächste Halbjahr. Freitagabend, weil ich sie sonst mit ins Wochenende nehme und dann das ganze Wochenende daran denke.`,
       l:{C:2.4, N:0.6}, fakt:`erledigt Freitagabend, was ihr sonst das Wochenende verdirbt`},
      {id:`aufgeraeumt`, wie:`beiläufig`, stimmung:`neutral`,
       t:`Ein bisschen aufgeräumt, eingekauft. Nichts Besonderes.`, l:{C:1.1}},
      {id:`ausstellung`, wie:`schneller, sichtlich gern`, stimmung:`interessiert`,
       t:`Ich war in einer Ausstellung über japanische Papierschöpfung. Zwei Stunden Zugfahrt für elf Vitrinen, und es hat sich gelohnt.`,
       l:{O:1.6, E:0.3}, fakt:`fährt zwei Stunden Zug für elf Vitrinen`},
      {id:`daheim`, wie:`leise, fast entschuldigend`, stimmung:`verschlossen`,
       t:`Zu Hause geblieben. Ich habe zwei Tage lang mit niemandem gesprochen, und es war sehr schön.`,
       l:{E:-2.0, A:0.3}, fakt:`spricht am Wochenende gern zwei Tage mit niemandem`},
      {id:`gegruebelt`, wie:`gedämpft`, stimmung:`nachdenklich`,
       t:`Über eine Sache von Freitag nachgedacht. Länger, als sie es wert war.`, l:{N:1.6}}
    ]},

  { id:`fehler`, q:`Was passiert, wenn Ihnen ein Fehler unterläuft?`,
    an:{ 'wochenende:gegruebelt': `Und wenn es kein Gedanke ist, sondern ein Fehler — was passiert dann?` },
    a:[
      {id:`nacht`, wie:`ohne Umschweife, sehr direkt`, stimmung:`nachdenklich`,
       t:`Ich liege wach. Das ist nicht bildlich gemeint, ich liege wirklich wach und gehe es durch.`,
       l:{N:2.4}, fakt:`liegt nach Fehlern wach und geht sie durch`},
      {id:`aerger`, wie:`achselzuckend`, stimmung:`neutral`,
       t:`Ich ärgere mich kurz und mache weiter.`, l:{N:1.0}},
      {id:`heft`, wie:`sachlich, ohne Scham`, stimmung:`neutral`,
       t:`Ich schreibe ihn auf. Es gibt ein Heft dafür, seit elf Jahren, und ich lese es einmal im Jahr durch.`,
       l:{C:2.2}, fakt:`führt seit elf Jahren ein Fehlerheft und liest es jährlich`},
      {id:`melden`, wie:`fest, obwohl es sie sichtlich Mühe kostet`, stimmung:`nachdenklich`,
       t:`Ich sage es sofort jemandem. Auch die, die niemand gemerkt hätte. Vor allem die.`,
       l:{A:2.2}, fakt:`meldet auch Fehler, die niemand bemerkt hätte`}
    ]},

  { id:`streit`, q:`Wie ist das hier, wenn zwei sich uneinig sind?`,
    an:{ 'fehler:melden': `Und wenn Sie es melden und jemand anderer Meinung ist — was dann?` },
    a:[
      {id:`nachgeben`, wie:`leise, mit einem halben Lächeln über sich selbst`, stimmung:`nachdenklich`,
       t:`Meistens gebe ich nach. Nicht weil ich überzeugt bin. Weil ich es nicht aushalte, wenn jemand böse auf mich ist.`,
       l:{A:2.4, E:-0.4}, fakt:`gibt nach, weil sie Streit schlecht aushält, nicht aus Überzeugung`},
      {id:`vermitteln`, wie:`bedächtig`, stimmung:`neutral`,
       t:`Ich versuche zu vermitteln. Meistens geht es dann.`, l:{A:1.1}},
      {id:`raus`, wie:`knapp`, stimmung:`verschlossen`,
       t:`Ich gehe raus, bis es vorbei ist. Das ist keine gute Angewohnheit.`, l:{E:-1.6, N:0.8}},
      {id:`sache`, wie:`fester als erwartet`, stimmung:`neutral`,
       t:`Wenn es um das Objekt geht, sage ich, was richtig ist. Da bin ich unangenehm.`,
       l:{A:-1.0, C:1.0}, fakt:`wird beim Objekt selbst unnachgiebig`}
    ]},

  { id:`neues`, q:`Es kommt ein neues Verfahren auf. Was machen Sie damit?`,
    a:[
      {id:`lesen`, wie:`nüchtern`, stimmung:`interessiert`,
       t:`Ich lese darüber, bevor jemand fragt. Meistens liegt der Aufsatz schon ein halbes Jahr bei mir.`,
       l:{O:1.5, C:0.6}, fakt:`liest neue Verfahren nach, bevor jemand fragt`},
      {id:`sofort`, wie:`schnell, ein wenig übermütig`, stimmung:`amuesiert`,
       t:`Ich probiere es sofort aus. An etwas Wertlosem natürlich, aber sofort.`,
       l:{O:2.4, C:-0.8}},
      {id:`abwarten`, wie:`vorsichtig`, stimmung:`neutral`,
       t:`Ich warte, bis es jemand anders zweimal gemacht hat.`, l:{O:-1.4, C:0.8}},
      {id:`nein`, wie:`bestimmt`, stimmung:`skeptisch`,
       t:`Wir haben ein Verfahren, und es funktioniert seit dreißig Jahren.`, l:{O:-2.2}}
    ]},

  { id:`mittag`, q:`Wo essen Sie mittags?`,
    an:{ 'wochenende:daheim': `Zwei Tage ohne Sprechen am Wochenende. Und mittags hier — wo essen Sie da?` },
    a:[
      {id:`hier`, wie:`ohne jede Verlegenheit`, stimmung:`neutral`,
       t:`Hier. An dem kleinen Tisch, mit dem Rücken zur Tür. Das ist die ruhigste halbe Stunde am Tag.`,
       l:{E:-2.2}, fakt:`isst allein in der Werkstatt, mit dem Rücken zur Tür`},
      {id:`kueche`, wie:`freundlich`, stimmung:`freundlich`,
       t:`Oben in der Teeküche, da ist immer jemand.`, l:{E:1.4, A:0.6}},
      {id:`mit`, wie:`weich, und einen Ton zu beiläufig`, stimmung:`nachdenklich`,
       t:`Wenn mich jemand fragt, gehe ich mit. Es fragt selten jemand, das liegt aber an mir.`,
       l:{A:1.6, E:-0.8}, fakt:`geht mit, wenn man sie fragt, und fragt selbst nie`},
      {id:`nichts`, wie:`abwinkend`, stimmung:`neutral`,
       t:`Oft gar nicht. Dann merke ich es um vier und ärgere mich.`, l:{N:1.2, C:0.4}}
    ]},

  { id:`termin`, q:`Wie halten Sie Termine?`,
    a:[
      {id:`frueh`, wie:`sehr trocken`, stimmung:`amuesiert`,
       t:`Ich bin immer zu früh. Immer. Das ist keine Tugend, das ist Angst mit Kalender.`,
       l:{C:2.4, N:0.4}, fakt:`ist grundsätzlich zu früh und nennt das Angst mit Kalender`},
      {id:`puffer`, wie:`sachlich`, stimmung:`neutral`,
       t:`Mit Puffer. Der reicht meistens.`, l:{C:1.2}},
      {id:`knapp`, wie:`leichthin`, stimmung:`neutral`,
       t:`Ich fange spät an und werde trotzdem fertig.`, l:{C:-1.8}},
      {id:`fremd`, wie:`selbstverständlich`, stimmung:`freundlich`,
       t:`Wenn es eng wird, verschiebe ich meins und nicht das von anderen.`,
       l:{A:1.6, C:-0.5}, fakt:`verschiebt im Zweifel ihre eigenen Termine`}
    ]},

  { id:`lob`, q:`Was machen Sie, wenn jemand Ihre Arbeit lobt?`,
    an:{ 'beruf:x': `` },
    a:[
      {id:`papier`, wie:`schnell, fast reflexhaft`, stimmung:`verschlossen`,
       t:`Ich sage, dass das Papier gut war. Das stimmt sogar meistens, und trotzdem sage ich es aus dem falschen Grund.`,
       l:{A:0.8, E:-0.9, N:0.4}, fakt:`schiebt Lob auf das Material statt auf sich`},
      {id:`freude`, wie:`offen`, stimmung:`freundlich`,
       t:`Ich freue mich und sage es auch.`, l:{E:1.2, A:0.8}},
      {id:`weiter`, wie:`knapp`, stimmung:`neutral`,
       t:`Ich nicke und mache weiter.`, l:{A:-0.6, C:0.9}},
      {id:`zweifel`, wie:`leise, sehr ehrlich`, stimmung:`nachdenklich`,
       t:`Ich denke, sie haben die Stelle nicht gesehen, die nicht gelungen ist. Ich sehe sie jedes Mal zuerst.`,
       l:{N:2.4}, fakt:`sieht an eigener Arbeit zuerst die misslungene Stelle`}
    ]},

  { id:`stille`, q:`Vier Stunden allein mit einem Blatt. Wird das lang?`,
    an:{ 'mittag:hier': `Die ruhigste halbe Stunde am Tag, sagten Sie. Und vier Stunden allein mit einem Blatt — wird das lang?` },
    a:[
      {id:`kurz`, wie:`ohne Zögern, mit Wärme`, stimmung:`interessiert`,
       t:`Vier Stunden sind kurz. Ich merke es an den Füßen, nicht an der Uhr.`,
       l:{E:-2.0, O:0.8}, fakt:`merkt lange Arbeit an den Füßen, nicht an der Uhr`},
      {id:`radio`, wie:`beiläufig`, stimmung:`neutral`,
       t:`Ich brauche Stimmen dabei. Radio, Podcast, irgendetwas.`, l:{E:1.2}},
      {id:`angenehm`, wie:`ruhig`, stimmung:`freundlich`,
       t:`Es ist angenehm. Ruhig, und niemand will etwas.`, l:{E:-1.2, N:-0.5}},
      {id:`zuviel`, wie:`gedämpft`, stimmung:`nachdenklich`,
       t:`Manchmal wird es zu still. Dann denke ich zu viel, und nicht über das Blatt.`, l:{N:1.5, E:0.3}}
    ]},

  { id:`frage`, q:`Was ist die schwierigste Frage in Ihrem Beruf?`,
    a:[
      {id:`unumkehrbar`, wie:`langsam, jedes Wort geprüft`, stimmung:`nachdenklich`,
       t:`Ob man etwas tut, das man nicht rückgängig machen kann. Es ist immer dieselbe Frage und jedes Mal eine neue.`,
       l:{N:2.0, C:0.5}, fakt:`fürchtet vor allem das Unumkehrbare`},
      {id:`wieviel`, wie:`schneller, sichtlich gern`, stimmung:`interessiert`,
       t:`Wie viel Alter man stehen lässt. Ein Blatt von 1804 darf aussehen wie von 1804. Das vergessen die Leute.`,
       l:{O:1.6}, fakt:`lässt Alter bewusst stehen`},
      {id:`zeit`, wie:`nüchtern`, stimmung:`neutral`,
       t:`Wie lange etwas dauern darf, wenn oben jemand wartet.`, l:{C:1.4, A:-0.3}},
      {id:`wem`, wie:`weich`, stimmung:`geruehrt`,
       t:`Wem es eigentlich gehört. Ich arbeite an Dingen, an denen Menschen hängen, und die stehen nicht daneben.`,
       l:{A:2.0, E:-0.4}, fakt:`denkt bei jedem Stück an die Menschen, denen es gehört`}
    ]}
],

/* --- Akt 3: sieben Fragen auf zwei Waagen, vier Antworten je Pol. --- */

motivfragen: [
  { id:`zusage`, q:`Was müsste eine Aufgabe haben, damit Sie zusagen?`,
    an:{ 'frage:unumkehrbar': `Wenn das Unumkehrbare die schwerste Frage ist: was müsste eine Aufgabe haben, damit Sie trotzdem zusagen?` },
    a:[
      {id:`klar`, wie:`bestimmt, ungewohnt schnell`, stimmung:`interessiert`,
       t:`Dass klar ist, was am Ende dastehen soll. Ich kann fast alles, wenn ich weiß, worauf es hinausläuft.`,
       nachEr:`Was ich nicht kann, ist raten, was jemand gemeint hat, und dann die Schuld dafür tragen.`,
       aff:{FRE:-2.3}, fakt:`braucht ein klares Ziel und keine Auslegung`},
      {id:`frei`, wie:`vorsichtig`, stimmung:`neutral`,
       t:`Dass mir niemand vorschreibt, wie ich vorgehe.`, aff:{FRE:2.1}},
      {id:`name`, wie:`halb im Scherz`, stimmung:`freundlich`,
       t:`Dass am Ende mein Name im Bericht steht.`, aff:{GEL:2.1}},
      {id:`zusammen`, wie:`leise, sehr direkt`, stimmung:`nachdenklich`,
       t:`Dass ich nicht allein damit sitze. Nicht wegen der Arbeit — wegen der Fragen abends um sechs, wenn keiner mehr da ist.`,
       aff:{GEL:-2.3}, fakt:`fürchtet nicht die Arbeit, sondern das Alleinsein mit den Fragen`}
    ]},

  { id:`lohnt`, q:`Woran merken Sie, dass es sich gelohnt hat?`,
    an:{ 'zusage:klar': `Angenommen, das Ziel ist klar. Woran merken Sie dann am Ende, dass es sich gelohnt hat?` },
    a:[
      {id:`haelt`, wie:`ruhig, mit einer langen Pause davor`, stimmung:`nachdenklich`,
       t:`Wenn es in fünfzig Jahren noch hält. Das ist die einzige Prüfung, die zählt, und ich erlebe sie nicht.`,
       aff:{FRE:-2.2}, fakt:`misst ihre Arbeit an fünfzig Jahren, die sie nicht erlebt`},
      {id:`selbst`, wie:`zurückhaltend`, stimmung:`neutral`,
       t:`Wenn ich es auf meine Art gelöst habe und nicht nach Vorschrift.`, aff:{FRE:2.0}},
      {id:`vitrine`, wie:`verlegen`, stimmung:`freundlich`,
       t:`Wenn es in der Vitrine liegt und auf dem Schild mein Name steht.`, aff:{GEL:2.0}},
      {id:`dank`, wie:`warm`, stimmung:`geruehrt`,
       t:`Wenn die Kollegin, für die ich es gemacht habe, es sieht und nichts sagen muss.`,
       aff:{GEL:-2.1}, fakt:`arbeitet für bestimmte Menschen, nicht für die Sache allein`}
    ]},

  { id:`nervt`, q:`Was macht Ihnen hier am meisten zu schaffen?`,
    an:{ 'brett:x': `` },
    a:[
      {id:`unklar`, wie:`gedämpft, und es kostet sie etwas`, stimmung:`nachdenklich`,
       t:`Wenn niemand sagt, woran ich bin. Ich fülle das dann selbst aus, und meistens zu meinen Ungunsten.`,
       aff:{FRE:-2.4}, fakt:`legt Ungewissheit gegen sich selbst aus`},
      {id:`vorschrift`, wie:`ungewohnt scharf`, stimmung:`skeptisch`,
       t:`Vorschriften, die niemand begründen kann.`, aff:{FRE:2.0}},
      {id:`uebersehen`, wie:`kühl`, stimmung:`verschlossen`,
       t:`Dass drei Häuser mit einem Verfahren arbeiten, das von mir ist, und niemand das weiß.`,
       aff:{GEL:1.9}},
      {id:`unten`, wie:`sehr leise`, stimmung:`nachdenklich`,
       t:`Dass ich hier unten sitze und oben Dinge entschieden werden, bei denen ich nicht dabei bin. Man vergisst mich nicht aus Bosheit. Man vergisst mich einfach.`,
       aff:{GEL:-2.4}, fakt:`wird bei Entscheidungen schlicht vergessen`}
    ]},

  { id:`aendern`, q:`Wenn Sie hier morgen eine Sache ändern dürften — welche?`,
    an:{ 'nervt:unklar': `Und wenn Sie immer wüssten, woran Sie sind: was käme als Nächstes?`,
         'nervt:unten':  `Und wenn man Sie nicht mehr vergäße: was käme als Nächstes?` },
    a:[
      {id:`stelle`, wie:`nüchtern, wie eine abgelesene Zahl`, stimmung:`nachdenklich`,
       t:`Eine feste Stelle statt Verlängerung um Verlängerung. Ich bin seit neun Jahren befristet, das ist der neunte Vertrag.`,
       nachRegie:`Sie sagt es ohne Bitterkeit, so wie man eine Zahl abliest.`,
       aff:{FRE:-2.3}, fakt:`ist seit neun Jahren befristet, neunter Vertrag`},
      {id:`budget`, wie:`vorsichtig`, stimmung:`neutral`,
       t:`Ein eigenes Budget, über das ich allein entscheide.`, aff:{FRE:2.1}},
      {id:`schild`, wie:`mit einem schiefen Lächeln`, stimmung:`amuesiert`,
       t:`Ein Schild an der Tür, auf dem steht, was hier unten gemacht wird. Da steht Werkstatt drei.`,
       aff:{GEL:2.1}, fakt:`an ihrer Tür steht nur Werkstatt drei`},
      {id:`zweiter`, wie:`ohne Umschweife`, stimmung:`nachdenklich`,
       t:`Einen zweiten Menschen in diesem Raum. Irgendeinen. Ich rede sonst mit dem Papier, und das ist kein Scherz.`,
       aff:{GEL:-2.2}, fakt:`arbeitet allein und redet mit dem Material`}
    ]},

  { id:`nichtstun`, q:`Und wenn nichts davon kommt?`,
    an:{ 'aendern:stelle': `Und wenn der zehnte Vertrag auch wieder befristet ist?` },
    a:[
      {id:`bleibt`, wie:`gefasst`, stimmung:`neutral`,
       t:`Dann bleibt es, wie es ist. Ich habe Schlimmeres ausgehalten und bin geblieben.`, aff:{FRE:-2.0}},
      {id:`ohnehin`, wie:`fester als erwartet`, stimmung:`skeptisch`,
       t:`Dann mache ich es eben ohne Erlaubnis. Es hat bisher nie jemand gemerkt.`, aff:{FRE:2.0}},
      {id:`weg`, wie:`ruhig, ohne Drohung`, stimmung:`neutral`,
       t:`Dann gehe ich irgendwann dorthin, wo man es merkt.`, aff:{GEL:1.8}},
      {id:`zweileute`, wie:`weich, ein wenig resigniert`, stimmung:`geruehrt`,
       t:`Dann bleibe ich. Nicht wegen der Arbeit. Wegen der zwei Menschen hier, die morgens Guten Morgen sagen und meinen Namen dabei benutzen.`,
       aff:{GEL:-2.3}, fakt:`bleibt wegen zweier Menschen, die ihren Namen benutzen`}
    ]},

  { id:`zustimmung`, q:`Wer muss zustimmen, wenn Sie ein Verfahren wechseln wollen?`,
    a:[
      {id:`leitung`, wie:`selbstverständlich`, stimmung:`neutral`,
       t:`Die Leitung. Und ich frage lieber einmal zu viel als einmal zu wenig.`,
       aff:{FRE:-2.2}, fakt:`fragt im Zweifel einmal zu viel`},
      {id:`keiner`, wie:`leise, fast verschwörerisch`, stimmung:`amuesiert`,
       t:`Hier unten fragt keiner nach.`, aff:{FRE:1.9}},
      {id:`vorlegen`, wie:`sachlich`, stimmung:`neutral`,
       t:`Ich lege es vor, damit man sieht, dass es von mir kommt.`, aff:{GEL:1.8}},
      {id:`alle`, wie:`bedächtig`, stimmung:`freundlich`,
       t:`Ich gehe herum und frage alle, die es angeht. Und noch zwei, die es nichts angeht, damit sie sich nicht übergangen fühlen.`,
       aff:{GEL:-2.2}, fakt:`fragt vorsichtshalber auch die, die es nichts angeht`}
    ]},

  { id:`entscheidung`, q:`Wie treffen Sie eine schwere Entscheidung?`,
    an:{ 'termin:frueh': `Angst mit Kalender, sagten Sie. Und wie treffen Sie dann eine schwere Entscheidung?` },
    a:[
      {id:`regelwerk`, wie:`ohne Verlegenheit`, stimmung:`neutral`,
       t:`Ich schlage nach. Es gibt Richtlinien, und die sind besser als mein Bauchgefühl um halb sechs.`,
       aff:{FRE:-2.2}, fakt:`traut Richtlinien mehr als dem eigenen Bauchgefühl am Abend`},
      {id:`selberso`, wie:`fest`, stimmung:`neutral`,
       t:`Ich entscheide und stehe dazu.`, aff:{FRE:1.9}},
      {id:`notiz`, wie:`sachlich`, stimmung:`neutral`,
       t:`Ich halte fest, wer wann was entschieden hat.`, aff:{GEL:1.7}},
      {id:`anrufen`, wie:`wärmer`, stimmung:`freundlich`,
       t:`Ich rufe jemanden an. Meistens dieselbe Person, seit dem Studium, und die sagt meistens dasselbe.`,
       aff:{GEL:-2.2}, fakt:`ruft seit dem Studium bei schweren Entscheidungen dieselbe Person an`}
    ]}
],

/* --- Was sie privat bewegt. Die Kennungen sind dieselben Fächer wie
       bei Baumgartner, damit die Waren aus welt.js darauf zeigen —
       der Inhalt ist ihrer. ---------------------------------------- */

privat: {
  grenze: 10,
  felder: [
    { id:`musik`,     was:`Feierabend`, wahr:`singt seit zwölf Jahren im Kirchenchor, ohne gläubig zu sein` },
    { id:`werkstatt`, was:`zu Hause`,   wahr:`repariert ein Puppenhaus von 1910, das ihr niemand aufgetragen hat` },
    { id:`tochter`,   was:`Familie`,    wahr:`fährt zwei Wochenenden im Monat zweihundert Kilometer zu ihrer Mutter` },
    { id:`plan60`,    was:`Zukunft`,    wahr:`der neunte befristete Vertrag läuft im März aus` }
  ]
},

privatfragen: [
  { id:`feierabend`, gibt:`musik`, auf:1,
    q:`Was machen Sie eigentlich, wenn Sie hier rausgehen?`,
    an:{ pflanze:`Die Pflanze war von einer Kollegin, sagten Sie. Haben Sie außerhalb von hier auch Leute?` },
    offen: { t:`Ich singe. Kirchenchor, Mittwoch und Sonntag, seit zwölf Jahren. Ich bin nicht gläubig, das ist beiden Seiten bekannt und stört keinen.`,
             wie:`erst zögernd, dann schneller, mit Wärme`, stimmung:`freundlich`,
             fakt:`singt seit zwölf Jahren im Kirchenchor, ohne gläubig zu sein` },
    zu:    { t:`Rausgehen. Meistens nach Hause.`, wie:`ausweichend, mit einem Blick auf den Tisch`, stimmung:`verschlossen` } },

  { id:`haende`, gibt:`werkstatt`, auf:1,
    q:`Sie haben einen Splitter im Daumen. Von hier?`,
    an:{ brett:`Ein Falzbein aus Knochen macht keine Splitter. Woher haben Sie den im Daumen?` },
    offen: { t:`Von einem Puppenhaus. 1910, Fachwerk, das halbe Dach fehlt. Es gehört niemandem, es hat mich niemand darum gebeten, und ich sitze seit einem Jahr daran.`,
             wie:`begeistert, deutlich schneller`, stimmung:`interessiert`,
             fakt:`repariert ein Puppenhaus von 1910, das ihr niemand aufgetragen hat` },
    zu:    { t:`Von hier, ja. Das kommt vor.`, wie:`knapp, die Hand verschwindet unter dem Tisch`, stimmung:`skeptisch` } },

  { id:`sonntag`, gibt:`tochter`, auf:2,
    q:`Haben Sie an den Wochenenden eigentlich frei?`,
    an:{ 'wochenende:daheim':`Zwei Tage ohne Sprechen — sind alle Wochenenden so?` },
    offen: { t:`Zwei im Monat fahre ich zu meiner Mutter. Zweihundert Kilometer, Freitagabend hin, Sonntagnachmittag zurück. Sie erkennt mich noch, meistens.`,
             wie:`weicher, langsamer, am Ende sehr leise`, stimmung:`geruehrt`,
             fakt:`fährt zwei Wochenenden im Monat zweihundert Kilometer zu ihrer Mutter` },
    zu:    { t:`Wochenende ist Wochenende.`, wie:`knapp, mit einer Handbewegung, die das Thema wegschiebt`, stimmung:`verschlossen` } },

  { id:`weiter`, gibt:`plan60`, auf:2,
    q:`Sehen Sie sich hier noch in fünf Jahren?`,
    an:{ 'aendern:stelle':`Neunter Vertrag, sagten Sie. Wann läuft der aus?` },
    offen: { t:`Der Vertrag läuft im März aus. Es ist der neunte. Man hat mir gesagt, es werde schon werden, und man hat mir das achtmal gesagt.`,
             wie:`leise, sehr direkt`, stimmung:`nachdenklich`,
             fakt:`der neunte befristete Vertrag läuft im März aus` },
    zu:    { t:`Ich plane nicht so weit.`, wie:`ausweichend, mit einem halben Lächeln`, stimmung:`skeptisch` } },

  /* Die plumpen Fragen. Sie liefern fast sicher, kosten aber das
     Dreifache — und bei ihr schlägt das nicht in Wut um, sondern in
     eine Höflichkeit, aus der man nicht mehr herauskommt. */
  { id:`direkt`, gibt:`musik`, auf:3, plump:true,
    q:`Erzählen Sie doch mal was von sich privat.`,
    offen: { t:`Privat.`, wie:`gedehnt, sehr kühl`, stimmung:`gereizt`,
             nachEr:`Ich singe im Chor. Reicht das?`,
             fakt:`singt seit zwölf Jahren im Kirchenchor, ohne gläubig zu sein` },
    zu:    { t:`Da gibt es wenig zu erzählen, ehrlich gesagt.`, wie:`freundlich und vollkommen verschlossen`, stimmung:`gereizt` } },

  { id:`familie`, gibt:`tochter`, auf:3, plump:true,
    q:`Sind Sie verheiratet? Kinder?`,
    offen: { t:`Nein und nein.`, wie:`knapp`, stimmung:`verschlossen`,
             nachEr:`Eine Mutter, zweihundert Kilometer weit. Das ist die Familie.`,
             fakt:`fährt zwei Wochenenden im Monat zweihundert Kilometer zu ihrer Mutter` },
    zu:    { t:`Wir kennen uns seit vierzig Minuten.`, wie:`sehr freundlich, und deshalb umso endgültiger`, stimmung:`gereizt` } },

  { id:`geld`, gibt:`plan60`, auf:3, plump:true,
    q:`Verdient man hier eigentlich genug?`,
    offen: { t:`Genug wofür?`, wie:`überrascht, dann offen`, stimmung:`nachdenklich`,
             nachEr:`Für neun befristete Verträge hintereinander reicht es. Gerade so.`,
             fakt:`der neunte befristete Vertrag läuft im März aus` },
    zu:    { t:`Das fragt man nicht, und Sie wissen das.`, wie:`sehr höflich, sehr kühl`, stimmung:`gereizt` } }
],

hinausgeworfen: {
  regie: `Sie steht auf, bevor du zu Ende gesprochen hast, und legt beide Hände flach auf den Tisch.`,
  er: `Ich glaube, ich habe gleich noch einen Termin. Schicken Sie mir das, was Sie eigentlich wollten, bitte per Mail.`,
  wie: `ausgesucht höflich, ohne jede Lautstärke, und genau deshalb endgültig`, stimmung: `abweisend`
},

/* --- Was gerade bei ihr los ist. Bei ihm trugen die kühlen, direkten
       Wege; bei ihr tragen die teilnehmenden. Wer die Gewohnheit aus
       dem ersten Gespräch mitbringt, greift hier reihenweise daneben. */

zustaende: [

{ id:`vertrag`, titel:`Der neunte Vertrag`,
  regie:`Auf dem Tisch liegt ein Umschlag der Personalstelle, ungeöffnet, mit einem Messinggewicht beschwert.`,
  er:`Ich muss den heute noch aufmachen. Seit Dienstag liegt er da.`,
  wie:`beiläufig, und es gelingt ihr nicht`, stimmung:`neutral`,
  bedarf:{ id:`vertrag_sic`, was:`hält seit Jahren keine Zusage in der Hand`, braucht:{FRE:-1.6} },
  fragen:[
    { id:`schwer`, t:`Das ist kein Umschlag, den man einfach aufmacht.`, wie:`ruhig, ohne Frage am Ende`,
      liest:{A:0.9, N:0.7},
      gut:{ er:`Nein.`, erRegie:`Sie sieht den Umschlag an, nicht dich.`,
            er2:`Ich habe achtmal gehört, es werde schon werden. Achtmal ist es auch geworden. Und trotzdem mache ich ihn seit Dienstag nicht auf.`,
            wie:`sofort, sehr leise`, wie2:`fest, fast erleichtert`, stimmung:`geruehrt`,
            fakt:`hat achtmal gehört, es werde schon werden`, bez:8 },
      zu:{ er:`Es ist ein Umschlag.`, wie:`abweisend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`aufmachen`, t:`Machen Sie ihn doch auf, dann wissen Sie es.`, wie:`munter, gut gemeint`,
      liest:{E:0.9, N:-0.7, C:-0.3},
      gut:{ er:`Sie haben recht.`, erRegie:`Sie schiebt das Gewicht weg.`, er2:`Gleich. Nach Ihnen.`,
            wie:`entschlossen`, wie2:`kleinlaut`, stimmung:`nachdenklich`, bez:3 },
      zu:{ er:`Ja.`, erRegie:`Sie lächelt und rührt sich nicht.`,
           er2:`Sie haben natürlich recht. Es ist nur nicht so einfach, wie es von Ihrer Seite des Tisches aussieht.`,
           wie:`sehr freundlich`, wie2:`höflich, und darunter verletzt`, stimmung:`gereizt`, bez:-7 } },

    { id:`wielange`, t:`Wie viele waren es bisher?`, wie:`sachlich, ohne Mitleid`,
      liest:{C:0.8, E:0.5, N:-0.4},
      gut:{ er:`Neun. Der erste war 2016, drei Jahre, dann zweimal zwei, dann jedes Jahr einer.`,
            erRegie:`Sie sagt die Jahre, ohne nachzudenken.`,
            er2:`Ich weiß die Daten auswendig. Das sollte einem zu denken geben.`,
            wie:`präzise`, wie2:`trocken`, stimmung:`nachdenklich`,
            fakt:`kennt alle neun Vertragsdaten auswendig`, bez:5 },
      zu:{ er:`Einige.`, wie:`knapp`, stimmung:`verschlossen`, bez:-1 } }
  ] },

{ id:`wasser`, titel:`Der Wasserschaden im Magazin`,
  regie:`Neben dem Tisch stehen vier flache Kisten mit Löschpapier zwischen den Lagen. Es riecht nach nassem Karton.`,
  er:`Am Freitag ist im Magazin eine Leitung geplatzt. Vierhundert Blatt. Ich habe seit Samstag zweihundert.`,
  wie:`schnell, übermüdet`, stimmung:`neutral`,
  bedarf:{ id:`wasser_sic`, was:`arbeitet seit Tagen gegen den Schimmel`, braucht:{FRE:-1.2, GEL:-0.6} },
  fragen:[
    { id:`allein`, t:`Machen Sie das allein?`, wie:`ruhig`,
      liest:{A:0.8, GEL:0, N:0.6, E:-0.3},
      gut:{ er:`Bis Montag ja.`, erRegie:`Sie sieht zu den Kisten.`,
            er2:`Seit Montag kommt eine Kollegin aus der Fotostelle nachmittags runter. Sie kann es nicht, und sie kommt trotzdem. Das war der beste Moment der Woche.`,
            wie:`sachlich`, wie2:`weich, und sie merkt es selbst`, stimmung:`geruehrt`,
            fakt:`eine Kollegin aus der Fotostelle hilft ihr, obwohl sie es nicht kann`, bez:8 },
      zu:{ er:`Es geht schon.`, wie:`abwiegelnd`, stimmung:`verschlossen`, bez:-2 } },

    { id:`schnell`, t:`Kann man da nicht schneller vorgehen?`, wie:`pragmatisch, lösungsorientiert`,
      liest:{E:0.7, C:-0.9, O:0.3},
      gut:{ er:`Man kann. Ich habe am Sonntag zwei Lagen gleichzeitig gemacht.`, wie:`leichthin`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Schneller.`, erRegie:`Sie legt das Löschpapier, das sie in der Hand hält, sehr genau zurück.`,
           er2:`Schimmel wächst schneller als ich arbeite, das ist mir bekannt. Wenn ich schneller mache, verliere ich Blätter. Welche soll ich nehmen?`,
           wie:`gedehnt`, wie2:`sehr höflich, und darunter dünn`, stimmung:`gereizt`, bez:-6 } },

    { id:`schlaf`, t:`Haben Sie am Wochenende überhaupt geschlafen?`, wie:`direkt, ohne Umschweife`,
      liest:{A:0.5, N:0.4, E:0.6, C:-0.5},
      gut:{ er:`Samstag vier Stunden, Sonntag fünf.`,
            erRegie:`Sie sagt es, als läse sie es ab.`,
            er2:`Ich weiß, dass das nicht klug ist. Es liegt nicht daran, dass ich es nicht weiß.`,
            wie:`nüchtern`, wie2:`leiser`, stimmung:`nachdenklich`,
            fakt:`hat am Wochenende vier und fünf Stunden geschlafen`, bez:6 },
      zu:{ er:`Genug.`, wie:`kurz`, stimmung:`skeptisch`, bez:-2 } }
  ] },

{ id:`praktikum`, titel:`Die Praktikantin`,
  regie:`Ein zweiter Hocker steht am Tisch. Er ist abgestaubt, was hier unten auffällt.`,
  er:`Ab Oktober bekomme ich eine Praktikantin. Sechs Monate, jeden Tag.`,
  wie:`neutral, mit einer winzigen Pause vor jeden Tag`, stimmung:`neutral`,
  bedarf:{ id:`prakt_zug`, was:`bekommt zum ersten Mal jemanden dauerhaft an den Tisch`, braucht:{GEL:-1.4} },
  fragen:[
    { id:`freude`, t:`Freuen Sie sich?`, wie:`schlicht`,
      liest:{A:0.8, N:0.5, E:-0.2},
      gut:{ er:`Sehr. Und ich habe furchtbare Angst davor.`,
            erRegie:`Sie lacht kurz und hält sich dabei die Hand vor den Mund.`,
            er2:`Sechs Monate lang wird jemand sehen, wie ich arbeite. Das hat seit dem Studium niemand mehr.`,
            wie:`sofort und ehrlich`, wie2:`offen`, stimmung:`geruehrt`,
            fakt:`niemand hat ihr seit dem Studium bei der Arbeit zugesehen`, bez:8 },
      zu:{ er:`Das ist keine Frage von Freude.`, wie:`abweisend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`erfahren`, t:`Sie haben doch bestimmt schon viele angelernt.`, wie:`anerkennend`,
      liest:{E:0.6, GEL:0, A:-0.5, C:0.3},
      gut:{ er:`Drei. Zwei sind in dem Beruf geblieben.`, wie:`ruhig`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Nein.`, erRegie:`Sie sagt es ohne jede Schärfe, was es schlimmer macht.`,
           er2:`Zum ersten Mal, mit achtunddreißig. Sie können sich denken, was das über die letzten Jahre sagt.`,
           wie:`knapp`, wie2:`sehr leise`, stimmung:`verschlossen`,
           fakt:`bekommt mit achtunddreißig ihre erste Praktikantin`, bez:-5 } },

    { id:`beibringen`, t:`Was werden Sie ihr als Erstes zeigen?`, wie:`neugierig`,
      liest:{O:0.9, C:0.3, E:0.5, N:-0.5},
      gut:{ er:`Wie man ein Blatt anfasst.`,
            erRegie:`Sie hebt beide Hände und dreht die Handflächen nach oben.`,
            er2:`Nicht wie man klebt. Wie man anfasst. Das dauert drei Wochen und danach kann man alles andere lernen.`,
            wie:`sofort, mit Wärme`, wie2:`bestimmt`, stimmung:`interessiert`,
            fakt:`bringt zuerst drei Wochen lang das Anfassen bei`, bez:7 },
      zu:{ er:`Das ergibt sich.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`vitrine`, titel:`Die Ausstellung`,
  regie:`An der Pinnwand hängt ein Ausdruck: ein Vitrinenplan mit gelben Markierungen. Er hängt gerade.`,
  er:`Drei Sachen von mir kommen im Frühjahr in die Ausstellung. Mit Schild.`,
  wie:`sachlich, und sie sieht dabei den Plan an`, stimmung:`neutral`,
  bedarf:{ id:`vitrine_zug`, was:`soll herausgestellt werden und will es nicht allein`, braucht:{GEL:-1.2} },
  fragen:[
    { id:`schild`, t:`Steht Ihr Name auf dem Schild?`, wie:`beiläufig`,
      liest:{A:0.7, N:0.5},
      gut:{ er:`Meiner allein. Deshalb hänge ich seit zwei Wochen davor und weiß nicht, was ich sagen soll.`,
            erRegie:`Sie nimmt den Plan ab und legt ihn hin.`,
            er2:`Die Vorarbeit ist von einer Kollegin, die inzwischen weg ist. Ich habe gefragt, ob sie mit drauf kann. Es ging nicht, sagt man mir.`,
            wie:`unbehaglich`, wie2:`ruhig, sehr klar`, stimmung:`nachdenklich`,
            fakt:`will den Namen einer ehemaligen Kollegin mit auf das Schild`, bez:7 },
      zu:{ er:`So ist es üblich.`, wie:`abwiegelnd`, stimmung:`verschlossen`, bez:-2 } },

    { id:`glueckwunsch`, t:`Glückwunsch, das ist doch großartig.`, wie:`herzlich, mit Nachdruck`,
      liest:{E:0.8, GEL:0, N:-0.6},
      gut:{ er:`Danke. Es freut mich tatsächlich mehr, als ich zugebe.`, wie:`verlegen`, stimmung:`freundlich`, bez:3 },
      zu:{ er:`Danke.`, erRegie:`Sie lächelt, und das Lächeln hält einen Moment zu lang.`,
           er2:`Entschuldigung. Ich freue mich schon. Es ist nur nicht so eindeutig, wie es von außen aussieht, und ich schaffe es gerade nicht, das zu erklären.`,
           wie:`sofort und höflich`, wie2:`gequält`, stimmung:`gereizt`, bez:-6 } },

    { id:`welche`, t:`Welche drei?`, wie:`schlicht neugierig`,
      liest:{O:0.9, E:0.3, C:-0.1},
      gut:{ er:`Ein Stadtplan von 1804, ein Herbarium und ein Brief.`,
            erRegie:`Sie zählt sie an drei Fingern ab.`,
            er2:`Der Brief ist der schwierigste und der kleinste. Den werden alle übersehen, und das ist in Ordnung.`,
            wie:`sachlich`, wie2:`zufrieden`, stimmung:`interessiert`, bez:5 },
      zu:{ er:`Drei Papiere. Das führt jetzt zu weit.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`absaugung`, titel:`Die ausgefallene Absaugung`,
  regie:`Am Abzug hängt ein handgeschriebener Zettel: außer Betrieb. Darunter, kleiner, ein Datum von vor sechs Wochen.`,
  er:`Die Absaugung ist seit sechs Wochen kaputt. Ich arbeite so lange ohne Lösungsmittel.`,
  wie:`sachlich, mit einem Blick zum Zettel`, stimmung:`neutral`,
  bedarf:{ id:`absaug_sic`, was:`arbeitet seit Wochen mit halbem Werkzeug`, braucht:{FRE:-1.4} },
  fragen:[
    { id:`gemeldet`, t:`Haben Sie es gemeldet?`, wie:`nüchtern`,
      liest:{C:1.0, A:0.5},
      gut:{ er:`Dreimal. Schriftlich, mit Datum, und ich habe die Durchschriften.`,
            erRegie:`Sie öffnet eine Schublade und schließt sie wieder, ohne etwas herauszunehmen.`,
            er2:`Ich weiß, wie das klingt. Aber wenn im Herbst jemand fragt, warum nichts fertig ist, dann habe ich die drei Zettel.`,
            wie:`präzise`, wie2:`ruhig, mit einer Spur Trotz`, stimmung:`nachdenklich`,
            fakt:`hat den Ausfall dreimal schriftlich gemeldet und die Durchschriften`, bez:7 },
      zu:{ er:`Das ist gemeldet, ja.`, wie:`knapp`, stimmung:`verschlossen`, bez:-1 } },

    { id:`egal`, t:`Machen Sie es doch trotzdem, einmal Fenster auf.`, wie:`kumpelhaft`,
      liest:{E:0.8, C:-1.0},
      gut:{ er:`Hier unten gibt es kein Fenster.`, erRegie:`Sie lacht kurz in die Hand.`,
            er2:`Das ist der Witz, den ich seit sechs Wochen mache.`, wie:`trocken`, wie2:`amüsiert`, stimmung:`amuesiert`, bez:3 },
      zu:{ er:`Nein.`, erRegie:`Zum ersten Mal antwortet sie sofort und ohne Höflichkeit davor.`,
           er2:`Das ist der Teil meines Berufs, bei dem ich nicht verhandle. Es tut mir leid, wenn das schroff klingt.`,
           wie:`sofort`, wie2:`sofort wieder entschuldigend`, stimmung:`gereizt`, bez:-6 } },

    { id:`solange`, t:`Und was machen Sie stattdessen sechs Wochen lang?`, wie:`sachlich interessiert`,
      liest:{O:0.9, E:0.3, N:-0.2},
      gut:{ er:`Alles Trockene. Risse, Fehlstellen, Japanpapier.`,
            erRegie:`Sie zeigt auf die Kisten neben dem Tisch.`,
            er2:`Ich habe die Reihenfolge des ganzen Halbjahrs umgedreht. Es sieht keiner, und es hat mich zwei Abende gekostet.`,
            wie:`sachlich`, wie2:`mit stillem Stolz`, stimmung:`interessiert`,
            fakt:`hat die Reihenfolge eines halben Jahres umgeplant, damit nichts stillsteht`, bez:6 },
      zu:{ er:`Ich komme zurecht.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`digital`, titel:`Erst scannen, dann nichts mehr`,
  regie:`Auf dem Tisch liegt ein Ausdruck mit dem Titel Digitalisierungsstrategie. Eine Zeile ist mit Bleistift unterstrichen.`,
  er:`Alles soll gescannt werden. Und was gescannt ist, wird nicht mehr restauriert.`,
  wie:`sehr gleichmäßig, was bei ihr etwas heißt`, stimmung:`neutral`,
  bedarf:{ id:`digital_sic`, was:`sieht ihr Fach abgeschafft werden`, braucht:{FRE:-1.5} },
  fragen:[
    { id:`unterstrichen`, t:`Sie haben eine Zeile unterstrichen.`, wie:`ruhig, keine Frage`,
      liest:{C:0.9, A:0.5, O:0.4},
      gut:{ er:`Satz vier auf Seite elf.`,
            erRegie:`Sie dreht das Blatt zu dir, ohne es loszulassen.`,
            er2:`Der Scan ersetzt das Original in der Benutzung. Das ist nicht falsch. Es steht nur nicht dabei, dass das Original dann in einer Kiste liegt und weiter zerfällt.`,
            wie:`präzise`, wie2:`sehr klar, ohne Klage`, stimmung:`interessiert`,
            fakt:`der Scan ersetzt die Benutzung, das Original zerfällt weiter`, bez:7 },
      zu:{ er:`Das ist nur eine Anmerkung.`, wie:`abwiegelnd`, stimmung:`verschlossen`, bez:-2 } },

    { id:`fortschritt`, t:`Ist das nicht auch ein Fortschritt?`, wie:`munter, ein wenig herausfordernd`,
      /* Der Widerspruch prallt nicht an ihrer Ruhe ab, sondern an ihrer
         Verträglichkeit: sie streitet nicht, sie gibt nach und macht zu.
         Vorher hing das an ihrem Neurotizismus und wäre mit ihm gekippt. */
      liest:{E:0.8, O:0.4, A:-0.9},
      gut:{ er:`Doch. Ich bin nicht gegen Scanner, ich habe selbst zwei bedient.`, wie:`sachlich`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Ja, natürlich.`, erRegie:`Sie legt das Blatt hin und streicht es glatt.`,
           er2:`Sie haben ganz recht, und ich möchte darüber gerade nicht diskutieren. Entschuldigen Sie.`,
           wie:`sofort zustimmend`, wie2:`ausgesucht höflich und vollkommen zu`, stimmung:`gereizt`, bez:-7 } },

    { id:`ihrestelle`, t:`Was heißt das für Ihre Stelle?`, wie:`geradeheraus`,
      /* Die ruhige, ernste Frage an eine gründliche und zugewandte
         Person — nicht an eine ängstliche. */
      liest:{A:0.7, C:0.5, E:-0.3},
      gut:{ er:`Das ist die Frage, die im Umschlag steht.`,
            erRegie:`Sie sieht zu dem Umschlag auf dem Tisch, ohne den Kopf zu drehen.`,
            er2:`Ich habe es noch niemandem gesagt. Es ist mir auch unangenehm, dass ich es Ihnen sage.`,
            wie:`leise`, wie2:`sehr leise`, stimmung:`geruehrt`,
            fakt:`bringt die Digitalisierung mit ihrer eigenen Stelle in Verbindung`, bez:8 },
      zu:{ er:`Das wird sich zeigen.`, wie:`abschließend`, stimmung:`verschlossen`, bez:-2 } }
  ] },

{ id:`kennzahlen`, titel:`Blatt pro Woche`,
  regie:`Neben dem Rechner klebt ein Zettel mit einer Tabelle. Es sind Zahlen, in ihrer Handschrift, und sie sind klein geschrieben.`,
  er:`Die neue Leitung will wissen, wie viele Blatt ich pro Woche schaffe.`,
  wie:`ruhig, mit Betonung auf Blatt`, stimmung:`neutral`,
  bedarf:{ id:`kenn_sic`, was:`soll ihre Arbeit in eine Zahl bringen, die es nicht gibt`, braucht:{FRE:-1.2, GEL:-0.5} },
  fragen:[
    { id:`zahl`, t:`Und, wie viele sind es?`, wie:`sachlich, ohne Ironie`,
      liest:{C:1.0, O:0.4},
      gut:{ er:`Zwischen einem und vierzig.`,
            erRegie:`Sie tippt auf den Zettel.`,
            er2:`Ein Stadtplan von 1804 ist ein Blatt und dauert drei Wochen. Vierzig Karteikarten sind vierzig Blatt und dauern einen Vormittag. Ich führe die Tabelle trotzdem, weil sie sie will.`,
            wie:`sofort`, wie2:`trocken, ohne Klage`, stimmung:`amuesiert`,
            fakt:`ein Blatt kann drei Wochen dauern oder vierzig einen Vormittag`, bez:7 },
      zu:{ er:`Unterschiedlich.`, wie:`knapp`, stimmung:`verschlossen`, bez:-1 } },

    { id:`wehren`, t:`Da müssen Sie sich wehren.`, wie:`bestimmt, gut gemeint`,
      liest:{E:0.9, A:-0.6, N:-0.5},
      gut:{ er:`Sie haben recht. Ich weiß.`, wie:`einsichtig`, stimmung:`nachdenklich`, bez:2 },
      zu:{ er:`Wehren.`, erRegie:`Sie richtet den Zettel gerade, der schon gerade war.`,
           er2:`Ich habe einen befristeten Vertrag und eine Leitung, die seit April da ist. Sagen Sie mir bitte genau, wogegen ich mich wehren soll und wie das ausgeht.`,
           wie:`gedehnt`, wie2:`sehr höflich, sehr scharf`, stimmung:`gereizt`, bez:-8 } },

    { id:`wasfehlt`, t:`Was müsste stattdessen in der Tabelle stehen?`, wie:`interessiert, ernst gemeint`,
      liest:{O:0.9, C:0.4, E:0.5, N:-0.4},
      gut:{ er:`Stunden am Objekt. Und was danach anders ist.`,
            erRegie:`Sie zieht den Bleistift hinter dem Ohr hervor und schreibt zwei Wörter an den Rand des Zettels.`,
            er2:`Das habe ich noch nie jemandem gesagt, weil noch nie jemand gefragt hat.`,
            wie:`sofort, sehr klar`, wie2:`überrascht über sich selbst`, stimmung:`interessiert`,
            fakt:`will Stunden am Objekt messen, nicht Blätter`, bez:8 },
      zu:{ er:`Das ist nicht meine Entscheidung.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`elternzeit`, titel:`Die Kollegin geht in Elternzeit`,
  regie:`Auf der Ablage steht eine Karte mit einem Storch darauf, sehr kitschig, und sie steht vorn.`,
  er:`Die Kollegin aus der Fotostelle bekommt ein Kind. Ab November ist sie weg, für ein Jahr.`,
  wie:`freundlich, und der Satz endet tiefer, als er anfing`, stimmung:`freundlich`,
  bedarf:{ id:`eltern_zug`, was:`verliert den einzigen Menschen, mit dem sie hier redet`, braucht:{GEL:-1.7} },
  fragen:[
    { id:`wermitihr`, t:`Und mit wem reden Sie dann hier unten?`, wie:`ruhig, ohne Ironie`,
      liest:{A:0.9, N:0.6, E:-0.3},
      gut:{ er:`Das ist genau die Frage.`,
            erRegie:`Sie stellt die Storchenkarte einen Zentimeter weiter nach vorn.`,
            er2:`Ich habe hier vierzig Kolleginnen und Kollegen, die freundlich sind, und eine, die runterkommt. Die geht jetzt. Das ist der Verlust, nicht die Stelle.`,
            wie:`langsam`, wie2:`sehr direkt`, stimmung:`geruehrt`,
            fakt:`verliert die einzige Kollegin, die zu ihr herunterkommt`, bez:9 },
      zu:{ er:`Es sind genug Leute im Haus.`, wie:`abwiegelnd`, stimmung:`verschlossen`, bez:-2 } },

    { id:`freuen`, t:`Da freuen Sie sich doch bestimmt für sie.`, wie:`herzlich`,
      liest:{E:0.9, N:-0.8, A:-0.2},
      gut:{ er:`Sehr. Und ich habe geheult, als sie es mir gesagt hat, und sie dachte, aus Freude.`,
            wie:`offen, mit einem schiefen Lächeln`, stimmung:`geruehrt`,
            fakt:`hat geweint, als die Kollegin es ihr sagte`, bez:6 },
      zu:{ er:`Natürlich freue ich mich.`, wie:`schnell und dünn`, stimmung:`verschlossen`, bez:-6 } },

    { id:`ersatz`, t:`Gibt es eine Vertretung?`, wie:`sachlich`,
      liest:{C:0.8, E:0.5, N:-0.4},
      gut:{ er:`Ausgeschrieben ist sie. Besetzt wird sie im März, sagt man.`, wie:`nüchtern`, stimmung:`neutral`, bez:3 },
      zu:{ er:`Vermutlich nicht.`, erRegie:`Sie zuckt kaum merklich mit einer Schulter.`,
           er2:`Für ein Jahr findet man niemanden, der herzieht.`, wie:`resigniert`, wie2:`sachlich`, stimmung:`nachdenklich`, bez:-1 } }
  ] },

{ id:`brieffund`, titel:`Der Brief, der nicht dazugehört`,
  regie:`Unter dem obersten Blatt liegt ein kleiner Umschlag, halb verdeckt, in einer anderen Handschrift als alles andere auf dem Tisch.`,
  er:`In einem Konvolut lag ein Brief, der da nicht hingehört. Privat, 1943, und niemand weiß, wie er hineingekommen ist.`,
  wie:`gedämpft, sichtlich beschäftigt damit`, stimmung:`nachdenklich`,
  bedarf:{ id:`brief_zug`, was:`sucht jemanden, mit dem sie den Fund teilen kann`, braucht:{GEL:-1.0, FRE:-0.7} },
  fragen:[
    { id:`gelesen`, t:`Haben Sie ihn gelesen?`, wie:`leise, ohne Vorwurf`,
      liest:{A:0.7, N:0.6, O:0.5},
      gut:{ er:`Ja. Und ich weiß nicht, ob ich das durfte.`,
            erRegie:`Sie legt zwei Finger auf den Umschlag, ohne ihn zu bewegen.`,
            er2:`Ich habe ihn dreimal gelesen und danach eine Nacht schlecht geschlafen. Ich habe es niemandem gesagt, bis eben.`,
            wie:`sofort, sehr leise`, wie2:`unsicher`, stimmung:`geruehrt`,
            fakt:`hat den Brief gelesen und es bis jetzt niemandem gesagt`, bez:9 },
      zu:{ er:`Das gehört sich nicht.`, wie:`abwehrend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`wegwerfen`, t:`Dann tun Sie ihn doch einfach zurück und gut.`, wie:`pragmatisch`,
      liest:{E:0.7, C:-1.0, A:-0.4},
      gut:{ er:`Vermutlich läuft es darauf hinaus.`, wie:`resigniert`, stimmung:`nachdenklich`, bez:1 },
      zu:{ er:`Zurück wohin?`, erRegie:`Sie sieht dich an, und diesmal weicht sie nicht aus.`,
           er2:`Er gehört in kein Konvolut, er hat keine Signatur, und es gibt vermutlich jemanden, für den er wichtig wäre. Einfach ist daran nichts.`,
           wie:`schärfer als alles vorher`, wie2:`fest`, stimmung:`gereizt`, bez:-7 } },

    { id:`wemgehoert`, t:`Und wem gehört er?`, wie:`ernst`,
      liest:{A:0.6, O:0.5, E:0.4, C:-0.3},
      gut:{ er:`Das versuche ich seit zwei Wochen herauszufinden.`,
            erRegie:`Sie zieht ein Blatt hervor, auf dem eine Namensliste steht, mit Häkchen.`,
            er2:`Ich mache das in meiner Zeit. Es steht in keinem Auftrag, und ich höre nicht auf, bis ich es weiß.`,
            wie:`ruhig`, wie2:`sehr bestimmt`, stimmung:`interessiert`,
            fakt:`sucht in ihrer Freizeit die Empfänger eines Briefs von 1943`, bez:8 },
      zu:{ er:`Vermutlich niemandem mehr.`, wie:`abschließend`, stimmung:`nachdenklich`, bez:-1 } }
  ] },

{ id:`zweifel`, titel:`Die angezweifelte Arbeit`,
  regie:`Auf dem Tisch liegt ein aufgeschlagener Zeitschriftenband. Eine Passage ist mit Bleistift eingeklammert, sehr dünn.`,
  er:`Da hat jemand eine Methode kritisiert, mit der ich zwei Jahre gearbeitet habe. Nicht mich. Die Methode.`,
  wie:`sehr sachlich, und die Sachlichkeit ist eine Anstrengung`, stimmung:`neutral`,
  bedarf:{ id:`zweifel_sic`, was:`braucht Gewissheit über zwei Jahre eigener Arbeit`, braucht:{FRE:-1.5} },
  fragen:[
    { id:`stimmts`, t:`Hat die Person recht?`, wie:`geradeheraus, ohne Schonung`,
      liest:{C:0.9, O:0.7, A:0.3},
      gut:{ er:`In zwei von vier Punkten ja.`,
            erRegie:`Sie zeigt auf die Klammer.`,
            er2:`Ich habe es nachgerechnet, bevor ich beleidigt war. In dieser Reihenfolge, und das ist das Einzige, worauf ich diese Woche stolz bin.`,
            wie:`nüchtern`, wie2:`mit einem kleinen, festen Lächeln`, stimmung:`interessiert`,
            fakt:`hat die Kritik nachgeprüft, bevor sie beleidigt war`, bez:8 },
      zu:{ er:`Das ist eine lange Diskussion.`, wie:`ausweichend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`egalwas`, t:`Ach, lassen Sie die reden.`, wie:`aufmunternd, wegwischend`,
      liest:{E:0.8, N:-0.9, A:-0.3},
      gut:{ er:`Sie haben ja recht.`, wie:`dankbar, ein wenig zu schnell`, stimmung:`freundlich`, bez:2 },
      zu:{ er:`Das kann ich nicht.`, erRegie:`Sie schließt den Band nicht, sondern legt die Hand darauf.`,
           er2:`Wenn zwei von vier Punkten stimmen, dann liegen in zwei Magazinen Blätter, bei denen ich etwas falsch gemacht habe. Das lässt sich nicht wegreden, das muss man nachsehen.`,
           wie:`sofort`, wie2:`fest und sehr unglücklich`, stimmung:`gereizt`, bez:-7 } },

    { id:`wasjetzt`, t:`Was machen Sie jetzt damit?`, wie:`praktisch`,
      liest:{C:0.8, A:0.3, E:0.5, N:-0.4},
      gut:{ er:`Eine Liste. Vierundzwanzig Objekte, die betroffen sein könnten.`,
            erRegie:`Sie zieht ein Blatt unter dem Band hervor. Es sind vierundzwanzig Zeilen, sechs sind abgehakt.`,
            er2:`Sechs habe ich nachgesehen. Bei einem muss ich noch mal ran. Danach schreibe ich der Person und bedanke mich, und das wird mich Überwindung kosten.`,
            wie:`präzise`, wie2:`trocken`, stimmung:`nachdenklich`,
            fakt:`prüft vierundzwanzig betroffene Objekte nach und will sich beim Kritiker bedanken`, bez:8 },
      zu:{ er:`Ich sehe es mir an.`, wie:`knapp`, stimmung:`neutral`, bez:-1 } }
  ] }
],

/* --- Was sie sagt, wenn du dich festlegst. Widersprechen fällt ihr
       schwer; sie tut es entschuldigend, aber sie tut es. ----------- */

reaktion: {
  z: {
    O: { genau:{ er:`Neugierig schon. Nicht abenteuerlustig. Ich lese über Neues, bevor ich es anfasse — das ist der Unterschied.`, wie:`bedächtig` },
         zuHoch:{ er:`So verspielt bin ich nicht.`, erRegie:`Sie sieht auf das Blatt unter den Gewichten.`, er2:`An diesem Tisch probiert man nichts aus. Neugierig bin ich vorher, in der Bibliothek.`, wie:`einschränkend`, wie2:`bestimmt` },
         zuTief:{ er:`Altmodisch bin ich nicht. Ich bin zweimal zweihundert Kilometer für ein Verfahren gefahren, von dem hier niemand wissen wollte.`, wie:`ungewohnt fest` } },
    C: { genau:{ er:`Ja. Ich weiß, wie das auf andere wirkt, und ich kann es trotzdem nicht anders.`, wie:`ohne Scham` },
         zuHoch:{ er:`So genau nun auch wieder nicht. Zu Hause sieht es anders aus als hier.`, wie:`einschränkend, verlegen` },
         zuTief:{ er:`Nachlässig.`, erRegie:`Sie sieht zum Werkzeugbrett mit den Umrissen.`, er2:`Ich merke, wenn ein Falzbein fehlt, seit Montag. Sagen Sie das noch mal.`, wie:`gedehnt`, wie2:`trocken` } },
    E: { genau:{ er:`Ungefähr. Ich kann Menschen gut, ich brauche danach nur länger als andere, bis ich wieder ich bin.`, wie:`ruhig, ohne Entschuldigung` },
         zuHoch:{ er:`Gesellig.`, erRegie:`Sie lacht einmal kurz in die Hand.`, er2:`Ich sitze am Ende des Gangs mit dem Rücken zur Tür. Das ist keine Übergangslösung.`, wie:`ungläubig`, wie2:`vergnügt` },
         zuTief:{ er:`Ganz so schlimm ist es nicht. Ich singe mittwochs mit vierzig Leuten in einem Raum.`, wie:`richtigstellend` } },
    A: { genau:{ er:`Das stimmt, und es ist nicht nur eine gute Eigenschaft. Ich gebe auch nach, wenn ich recht habe.`, wie:`selbstkritisch` },
         zuHoch:{ er:`Nachgiebig bin ich nicht überall. Beim Objekt bin ich unangenehm, fragen Sie oben nach.`, wie:`fester als erwartet` },
         zuTief:{ er:`Hart.`, erRegie:`Sie sieht ehrlich überrascht aus.`, er2:`Entschuldigung, aber das hat noch nie jemand über mich gesagt.`, wie:`verblüfft`, wie2:`leise` } },
    N: { genau:{ er:`Ja.`, erRegie:`Sie legt die Hand flach auf das Blatt unter den Gewichten.`, er2:`Ich arbeite mit Sachen, die vierhundert Jahre überstanden haben, davon die Hälfte im Feuchten. Das nimmt einer Umstrukturierung viel von ihrer Dringlichkeit.`, wie:`ruhig`, wie2:`trocken, fast heiter` },
         zuHoch:{ er:`So dünnhäutig bin ich auch nicht. Ich habe neun befristete Verträge überstanden und arbeite immer noch.`, wie:`einschränkend` },
         zuTief:{ er:`Ganz kalt lässt mich auch nicht alles.`, erRegie:`Sie sieht auf den ungeöffneten Umschlag.`, er2:`Der liegt seit Dienstag da. So gleichgültig bin ich also auch wieder nicht.`, wie:`sehr leise`, wie2:`ohne Vorwurf` } }
  },
  m: {
    FRE: { genau:{ er:`Ja. Sagen Sie mir, worauf es hinauslaufen soll, und ich mache den Rest allein. Umgekehrt geht es bei mir nicht.`, wie:`erleichtert, gehört zu werden` },
           zuHoch:{ er:`Freiheit.`, erRegie:`Sie zieht die Schublade mit den Durchschriften einen Spalt auf und schiebt sie zu.`, er2:`Ich hebe Durchschriften auf. Menschen, die Freiheit wollen, tun das nicht.`, wie:`trocken`, wie2:`sachlich` },
           zuTief:{ er:`Ganz ohne eigenen Kopf bin ich nicht. Die Reihenfolge des halben Jahres habe ich umgeworfen, ohne zu fragen.`, wie:`richtigstellend` } },
    GEL: { genau:{ er:`Stimmt.`, erRegie:`Sie nickt, ohne zu zögern.`, er2:`Ich brauche keine Vitrine. Ich brauche einen zweiten Hocker, auf dem jemand sitzt.`, wie:`sofort`, wie2:`sehr klar` },
           zuHoch:{ er:`Wenn Sie mir schmeicheln wollen, sparen Sie es sich. An meiner Tür steht Werkstatt drei, und ich habe nie beantragt, dass da etwas anderes steht.`, wie:`sehr trocken` },
           zuTief:{ er:`Ganz ohne Eitelkeit bin ich auch nicht. Ich habe nachgesehen, ob mein Name auf dem Schild steht.`, wie:`leiser, ertappt` } }
  }
},

/* --- Wiedersehen und Abschied. ------------------------------------ */

wiedersehen: [
  { ab:70, regie:`Die Tür steht angelehnt, und auf dem Besucherstuhl liegt nichts. Es stehen zwei Tassen bereit.`,
    er:`Ich habe schon aufgegossen. Setzen Sie sich, ich bin gleich fertig.`, wie:`aufrichtig erfreut`, stimmung:`freundlich` },
  { ab:50, regie:`Sie macht auf, nachdem du einmal geklopft hast, und räumt den Stuhl frei, bevor du fragst.`,
    er:`Sie sind das. Kommen Sie rein, ich habe eine halbe Stunde.`, wie:`freundlich, ein wenig beschäftigt`, stimmung:`neutral` },
  { ab:30, regie:`Es dauert, bis sie öffnet, und sie bleibt im Rahmen stehen.`,
    er:`Ich habe leider nicht viel Zeit heute. Aber bitte.`, wie:`höflich und deutlich reserviert`, stimmung:`skeptisch` },
  { ab:-999, regie:`Sie öffnet mit der Hand am Türblatt und lässt sie dort. Hinter ihr liegt der Besucherstuhl voll Kartons.`,
    er:`Ich weiß ehrlich gesagt nicht, was wir beide noch besprechen sollen. Aber bitte, kommen Sie.`,
    wie:`ausgesucht höflich, was bei ihr das Schlimmste ist`, stimmung:`verschlossen` }
],

abschied: [
  { ab:70, regie:`Sie steht auf und bringt dich bis zum Treppenabsatz, was sie sonst nicht tut.`,
    er:`Kommen Sie wieder. Und bringen Sie mit, wovon Sie beim letzten Mal angefangen haben.`,
    wie:`warm`, stimmung:`freundlich`, bez:3 },
  { ab:50, regie:`Sie bleibt am Tisch sitzen und dreht sich auf dem Hocker zu dir um.`,
    er:`Das war schön. Melden Sie sich, wenn Sie wieder im Haus sind.`,
    wie:`gleichmäßig freundlich`, stimmung:`neutral`, bez:2 },
  { ab:30, regie:`Sie nickt und legt schon wieder die Hand auf das Blatt unter den Gewichten.`,
    er:`Ja. Auf Wiedersehen.`, wie:`kurz`, stimmung:`neutral`, bez:1 },
  { ab:-999, regie:`Sie antwortet nicht sofort und sieht auf den Tisch.`,
    er:`Machen Sie es gut.`, wie:`höflich und ohne jeden Inhalt`, stimmung:`verschlossen`, bez:0 }
],



});
