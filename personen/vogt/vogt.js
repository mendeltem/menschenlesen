/* ═══════════════════════════════════════════════════════════════════
   Angela Vogt, Hausmeisterin und Betriebselektrikerin.

   Die vierte Person und die erste, bei der Direktheit sofort trägt.
   Baumgartner redet viel, aber laut nach außen ist hier bisher niemand
   gewesen: sie ruft über den Hof, lacht mit offenem Mund und sagt
   Dinge, die andere für unhöflich halten und die einfach nur stimmen.

   Sie ist auch die erste auf der anderen Seite der zweiten Waage. Die
   drei bisherigen wollen alle Nähe und keine Bühne; sie will, dass
   jemand mitschreibt, wer recht hatte. Das ist keine Eitelkeit, das
   sind neunzehn Jahre, in denen ihr niemand geglaubt hat, bis das Rohr
   geplatzt ist. Damit ist die zweite Waage zum ersten Mal eine Frage
   mit zwei möglichen Antworten und nicht eine mit einer.

   Und sie ist die Erste, zu der die Brille passt. Damit hat jede der
   drei Waren ihren Menschen.
   ═══════════════════════════════════════════════════════════════════ */
PERSONEN.push({

id: `vogt`,
/* In welcher Etage diese Person sitzt. Dorthin kommst du erst, wenn dich
   jemand aus der Etage darunter weiterschickt. */
etage: 1,
/* An welcher Stelle der Route sie steht, und was an ihrer Tür
   hängt. Vor der eigenen Nummer sieht man nur die Tür. */
route: 2,
tuer: { schild: `Hausmeisterei`, bild: `bilder/tuer-werkstatt.webp` },
kurz: `Hausmeisterin, 47. Grauer Zopf und orangefarbene Arbeitsjacke,
       ein Schlüsselbund am Gürtel, an dem einundvierzig Schlüssel hängen.`,
theme: `terminal`,
menubild: `personen/vogt/bilder/freundlich.webp`,

hero: {
  name: `Angela Vogt`, age: 47, job: `Hausmeisterin und Betriebselektrikerin`,
  ort: `Erdgeschoss, Werkstatt hinter dem Treppenhaus, Tür immer offen`,
  /* Bodenständig, laut, direkt, unerschütterlich, wenig neugierig auf
     Neues und ordentlich in dem, was zählt.

     Sie will selbst machen statt beantragen, und sie will, dass es
     hinterher jemand weiß. Das Zweite ist neu in diesem Haus: die
     anderen drei wollen alle dazugehören und keiner gesehen werden. */
  z: { O: -1, C: 1, E: 2, A: -1, N: -2 },
  m: { FRE: 1, GEL: 2 }
},

/* Das Klischee über Hausmeisterinnen: mürrisch, wortkarg, pedantisch,
   und dünnhäutig, wenn man ihr ins Handwerk pfuscht. Drei davon sind
   falsch — sie ist laut, gesprächig und nicht umzuwerfen. Nur die
   Ordnung stimmt, und die auch nur da, wo Strom fließt. */
rollenprior: { E: -0.5, A: -0.3, C: 0.5, N: 0.4 },

rollentext: `Hausmeisterin: das Klischee sagt mürrisch, wortkarg, pedantisch und leicht auf die Palme zu bringen.`,

/* Die Anzeige spricht über sie in der weiblichen Form. */
anrede: {
  er:`sie`,  Er:`Sie`,  ihn:`sie`,   Ihn:`Sie`,   ihm:`ihr`,
  sein:`ihr`, Sein:`Ihr`, seine:`ihre`, Seine:`Ihre`, seiner:`ihrer`
},

stimmungen: {
  neutral:      { t:`sachlich`,     bild:`personen/vogt/bilder/neutral.webp` },
  freundlich:   { t:`freundlich`,   bild:`personen/vogt/bilder/freundlich.webp` },
  amuesiert:    { t:`amüsiert`,     bild:`personen/vogt/bilder/amuesiert.webp` },
  interessiert: { t:`interessiert`, bild:`personen/vogt/bilder/interessiert.webp` },
  nachdenklich: { t:`nachdenklich`, bild:`personen/vogt/bilder/nachdenklich.webp` },
  skeptisch:    { t:`skeptisch`,    bild:`personen/vogt/bilder/skeptisch.webp` },
  gereizt:      { t:`gereizt`,      bild:`personen/vogt/bilder/gereizt.webp` },
  verschlossen: { t:`verschlossen`, bild:`personen/vogt/bilder/verschlossen.webp` },
  geruehrt:     { t:`berührt`,      bild:`personen/vogt/bilder/geruehrt.webp` },
  abweisend:    { t:`abweisend`,    bild:`personen/vogt/bilder/abweisend.webp` }
},

raumbild: ``,

/* --- Ankunft. Der Empfang läuft ab, dann hast du genau eine Frage. -- */

baum: {
  start: {
    regie: `Erdgeschoss, hinter dem Treppenhaus, letzte Tür, und die steht offen. Sie liegt halb unter einem Waschbecken, nur die Beine schauen heraus. Orangefarbene Jacke, Schlüsselbund am Gürtel.`,
    er: `Moment. Wenn ich jetzt loslasse, haben wir hier gleich ein Schwimmbad.`,
    wie: `laut, aus dem Schrank heraus`, stimmung: `neutral`,
    erRegie: `Es klackt zweimal, dann kommt sie heraus, steht auf und wischt sich die Hände an der Hose ab.`,
    er2: `So. Sie sind der Termin. Setzen Sie sich, aber nicht auf den Stuhl da, der ist gestrichen.`,
    wie2: `schnell, freundlich, ohne Punkt und Komma`,
    nachRegie: `Sie schiebt einen Hocker mit dem Fuß herüber und setzt sich auf die Werkbank. Irgendwo im Raum läuft ein Radio, sehr leise. Ihr habt vierzig Minuten, und du hast eine Frage frei, bevor du sagst, warum du gekommen bist.`,
    frage: true
  },

  schluessel: {
    er: `Einundvierzig.`,
    erRegie: `Sie hebt den Bund an und lässt ihn wieder fallen, das Geräusch füllt den Raum.`,
    er2: `Ich könnte in jedes Zimmer in diesem Haus. In vierzehn davon war ich nachts, weil jemand vergessen hat, dass Wasser bergab läuft.`,
    wie: `knapp`, wie2: `laut, mit sichtlichem Vergnügen`, stimmung: `amuesiert`,
    fakt: `hat Schlüssel zu jedem Zimmer im Haus, einundvierzig Stück`, ende: true
  },
  becken: {
    er: `Das Becken ist von 1994 und hat seit 1994 dieselbe Dichtung.`,
    erRegie: `Sie zeigt mit dem Kinn darauf.`,
    er2: `Ich habe das dreimal gemeldet. Beim vierten Mal habe ich es einfach gemacht und das Teil selbst bezahlt. Zwei Euro achtzig.`,
    wie: `sachlich`, wie2: `ohne jede Klage, wie eine Rechnung`, stimmung: `neutral`,
    fakt: `hat eine Dichtung dreimal gemeldet und dann selbst gekauft`, spur: `selbst`, ende: true
  },
  radio: {
    er: `Das läuft seit halb sechs und bleibt an.`,
    erRegie: `Sie sagt es, ohne sich zu entschuldigen, und dreht es keinen Millimeter leiser.`,
    er2: `Wenn im Haus keiner mehr ist, ist es sonst so still, dass man das Haus arbeiten hört. Und dann sucht man Geräusche. Das mache ich nicht mehr, ich bin siebenundvierzig.`,
    wie: `laut`, wie2: `trocken, fast heiter`, stimmung: `amuesiert`,
    fakt: `lässt das Radio laufen, um das Haus nicht arbeiten zu hören`, ende: true
  }
},

kennenfrage: [
  { t: `Wie viele Schlüssel sind das eigentlich?`, wie: `beeindruckt, mit einem Blick auf den Gürtel`, ziel: `schluessel` },
  { t: `Was war denn mit dem Becken?`, wie: `sachlich`, ziel: `becken` },
  { t: `Läuft das Radio den ganzen Tag?`, wie: `leicht, nebenbei`, ziel: `radio` }
],

uebergang1: {
  duFest: `Du sagst, warum du da bist: du brauchst den Antrag A38. Drei Wochen läuft das jetzt, vier Stellen haben dich weitergeschickt, und die letzte hat gesagt, in diesem Haus sitze jemand, der ihn ausstellen darf — R. Melzer, Zimmer 1.14. Wie oft du das inzwischen gehört hast, sagst du nicht.`,
  er: `A38. Melzer.`,
  erRegie: `Sie greift hinter sich, nimmt einen Schraubenzieher und fängt an, ihn zu putzen, ohne hinzusehen.`,
  er2: `Dessen Zimmer habe ich im April ausgeräumt. Zwei Kisten, die stehen immer noch bei mir, weil sie keiner abholt. Ob da Ihr Formular drin ist, weiß ich nicht — nachgesehen habe ich nicht, das steht mir nicht zu. Setzen Sie sich und erzählen Sie mir bis dahin was Vernünftiges, ich habe die Hände frei.`,
  wie: `sofort, ohne nachzudenken`, wie2: `aufgeräumt, sehr direkt`, stimmung: `freundlich`
},

/* --- Fuenf Einstiege. Beim Wiederkommen faengt es hier an. Bei ihr
       reicht ein Blick in den Raum: es liegt immer etwas herum, das
       gerade kaputt war. ------------------------------------------ */

einstieg: [
  { id:`kaputt`, t:`Was ist heute kaputt?`, wie:`geradeheraus, schon in der Tür`,
    er:`Heizung im ersten, Türschließer im Treppenhaus, und einer hat den Schlüssel im Schloss abgebrochen.`,
    erRegie:`Sie zählt es an drei Fingern ab, ohne aufzusehen.`,
    er2:`Halb elf. Das ist ein normaler Vormittag.`,
    wie:`schnell, ohne Klage`, wie2:`trocken, fast vergnügt`, stimmung:`amuesiert`,
    fakt:`drei Störungen bis halb elf sind für sie ein normaler Vormittag` },

  { id:`farbe`, t:`Es riecht nach frischer Farbe.`, wie:`schnuppernd`,
    er:`Der Stuhl. Sagte ich beim letzten Mal.`,
    erRegie:`Sie zeigt mit dem Kinn auf einen Hocker in der Ecke, an dem ein Zettel hängt.`,
    er2:`Ich streiche ihn zum vierten Mal. Nicht weil er es braucht — weil ich dann zwanzig Minuten nichts anderes machen muss.`,
    wie:`beiläufig`, wie2:`unerwartet offen`, stimmung:`freundlich`,
    fakt:`streicht denselben Hocker zum vierten Mal, um zwanzig Minuten Ruhe zu haben` },

  { id:`hand`, t:`Sie haben sich die Hand aufgerissen.`, wie:`sachlich, ohne Aufregung`,
    er:`Kantenschutz vom Aufzug. Scharf wie ein Messer.`,
    erRegie:`Sie sieht auf ihren Handrücken, als hätte sie es noch nicht bemerkt, und wischt einmal darüber.`,
    er2:`Ist nichts. Wenn ich für so was aufhören würde, hätte ich nie angefangen.`,
    wie:`knapp`, wie2:`achselzuckend`, stimmung:`neutral`,
    fakt:`hat sich am Kantenschutz des Aufzugs die Hand aufgerissen und es nicht bemerkt` },

  { id:`radio`, t:`Was läuft da gerade?`, wie:`mit einem Nicken zum Radio`,
    er:`Weiß ich nicht. Nachrichten waren es vorhin.`,
    erRegie:`Sie dreht es nicht lauter und nicht leiser.`,
    er2:`Ich höre gar nicht hin. Ich höre nur, wenn es aufhört.`,
    wie:`beiläufig`, wie2:`sachlich`, stimmung:`neutral`,
    fakt:`hört das Radio nicht, merkt aber sofort, wenn es aufhört` },

  { id:`schluessel`, t:`Sie sind schon unterwegs gewesen.`, wie:`mit einem Blick auf den Schlüsselbund`,
    er:`Seit halb sechs.`,
    erRegie:`Sie hebt den Bund an und lässt ihn fallen.`,
    er2:`Zwei Stockwerke, den Keller, alle Fenster im Treppenhaus, und den Müllraum. Danach weiß ich, was für ein Tag wird.`,
    wie:`sachlich`, wie2:`bestimmt`, stimmung:`neutral`,
    fakt:`geht jeden Morgen ab halb sechs das ganze Haus ab` },


  { id:`empfang`, t:`Ich musste mich vorne wieder eintragen.`, wie:`beiläufig`,
    er:`Natürlich mussten Sie.`,
    erRegie:`Sie lacht einmal, kurz und laut.`,
    er2:`Die Kettner trägt ihre eigene Mutter ein, wenn die vorbeikommt. Wissen Sie was: das ist mir lieber als die Hälfte hier oben. Bei ihr weiß ich, woran ich bin, und das kann ich von wenigen sagen.`,
    wie:`sofort`, wie2:`laut, anerkennend`, stimmung:`amuesiert`,
    fakt:`hält Petra Kettner für berechenbar, und das ist bei ihr ein Lob` }
],

/* --- Die Frage nach Arbeit. Bei ihr ist sie keine heikle Frage,
       sondern eine praktische — sie beantwortet sie wie eine
       Stoerungsmeldung. ------------------------------------------ */

antrag: {
  frage: `Wo bekomme ich den A38?`,
  wie: `geradeheraus`,
  zu: { er:`Tut mir leid, da bin ich raus. Weiß ich nicht.`,
        erRegie:`Sie sagt es, ohne von der Schraube aufzusehen.`,
        er2:`Fragen Sie in der Verwaltung. Die sitzen zwei Straßen weiter und wissen sowas.`,
        wie:`knapp`, wie2:`freundlich und vollkommen nutzlos`, stimmung:`neutral` },
  offen: { er:`Ich auch nicht.`,
           erRegie:`Sie legt den Schraubenzieher hin und sieht zur Decke, als könnte sie hindurchsehen.`,
           er2:`Aber ich sage Ihren Namen weiter, und zwar oben. Erster Stock, die Zimmer am Ende. Da sitzt einer, der mich im Frühjahr zweimal gefragt hat, ob ich jemanden weiß. Ich wusste niemanden. Jetzt weiß ich jemanden.`,
           wie:`direkt`, wie2:`laut, ohne Umschweife`, stimmung:`freundlich`,
           fakt:`sagt deinen Namen im ersten Stock weiter` }
},

/* --- Neun Fragen zur Person. l = wie stark eine Antwort für welches
       Merkmal spricht. ---------------------------------------------- */

bigfive: [
  { id:`meldung`, q:`Was machen Sie, wenn etwas kaputt ist und keiner zuständig?`,
    a:[
      {id:`selbst`, wie:`selbstverständlich`, stimmung:`neutral`,
       t:`Reparieren. Zuständigkeit klärt man hinterher, das Wasser wartet nicht.`,
       l:{A:-1.2, C:0.8, N:-0.6}, fakt:`repariert erst und klärt die Zuständigkeit hinterher`},
      {id:`melden`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Melden, schriftlich, mit Datum. Sonst heißt es hinterher, ich hätte nichts gesagt.`,
       l:{C:2.0, N:0.5}},
      {id:`laut`, wie:`laut, schon halb im Gehen`, stimmung:`amuesiert`,
       t:`Ich gehe hoch und sage es. Persönlich, nicht per Mail. Mails kann man wegklicken, mich nicht.`,
       l:{E:2.0, A:-0.6}, fakt:`geht lieber hoch als eine Mail zu schreiben`},
      {id:`warten`, wie:`achselzuckend`, stimmung:`neutral`,
       t:`Warten. Irgendwann merkt es einer, der dafür bezahlt wird.`,
       l:{A:0.6, E:-1.4}}
    ]},

  { id:`neuerchef`, q:`Neue Leitung, neue Regeln. Wie gehen Sie damit um?`,
    a:[
      {id:`abwarten`, wie:`trocken`, stimmung:`amuesiert`,
       t:`Ich habe vier gehabt. Man wartet ab, macht weiter wie vorher, und nach zwei Jahren ist die Regel wieder weg.`,
       l:{O:-1.8, N:-0.8}, fakt:`hat vier Leitungen erlebt und wartet Regeln aus`},
      {id:`ansprechen`, wie:`sofort`, stimmung:`neutral`,
       t:`Ich gehe hin und sage, was daran nicht geht. Am ersten Tag, sonst glaubt es später keiner.`,
       l:{E:1.8, A:-1.0}},
      {id:`einarbeiten`, wie:`sachlich`, stimmung:`neutral`,
       t:`Ich lese die Regel und mache eine Liste, was sich ändert. Man muss ja wissen, woran man ist.`,
       l:{C:2.0}},
      {id:`neugierig`, wie:`interessiert`, stimmung:`interessiert`,
       t:`Erst mal zuhören. Vielleicht ist ja was dabei, was besser ist als das, was wir machen.`,
       l:{O:1.9, A:0.5}}
    ]},

  { id:`streit`, q:`Wie ist es, wenn Sie mit jemandem aneinandergeraten?`,
    a:[
      {id:`direkt`, wie:`ohne Umschweife`, stimmung:`neutral`,
       t:`Dann sage ich es ihm. Laut, wenn es sein muss, und danach ist es erledigt. Ich trage nichts nach, dafür ist mir die Zeit zu schade.`,
       l:{A:-1.6, E:1.2, N:-0.8}, fakt:`streitet laut und trägt nichts nach`},
      {id:`ruhig`, wie:`gelassen`, stimmung:`neutral`,
       t:`Meistens gar nicht. Ich bin schwer aus der Ruhe zu bringen, das war schon als Kind so.`,
       l:{N:-2.0, A:0.6}},
      {id:`vermeiden`, wie:`gedämpft`, stimmung:`verschlossen`,
       t:`Ich gehe dem aus dem Weg. Bringt ja nichts.`,
       l:{A:1.6, E:-1.0}},
      {id:`nachdenken`, wie:`leiser`, stimmung:`nachdenklich`,
       t:`Danach überlege ich noch eine Weile, ob ich zu weit gegangen bin.`,
       l:{N:1.8, A:0.8}}
    ]},

  { id:`werkstatt`, q:`Sieht bei Ihnen immer so aus?`,
    a:[
      {id:`ordnung`, wie:`stolz, ohne es zu verbergen`, stimmung:`freundlich`,
       t:`Bei den Werkzeugen ja. Da hat jedes seinen Platz, und wenn eines fehlt, sehe ich das von der Tür aus. Beim Rest ist es mir egal.`,
       l:{C:1.9, A:-0.3}, fakt:`sieht an der Werkzeugwand von der Tür aus, was fehlt`},
      {id:`chaos`, wie:`lachend`, stimmung:`amuesiert`,
       t:`Nein, sonst ist es schlimmer. Heute habe ich aufgeräumt, weil Sie kommen.`,
       l:{C:-1.8, E:0.8}},
      {id:`neu`, wie:`aufgeräumt`, stimmung:`interessiert`,
       t:`Ich baue gerade um. Ich habe irgendwo gelesen, wie die das in Werkstätten in Japan machen, und probiere das aus.`,
       l:{O:2.0, C:0.5}},
      {id:`gleich`, wie:`achselzuckend`, stimmung:`neutral`,
       t:`Seit neunzehn Jahren genau so. Warum sollte ich das ändern.`,
       l:{O:-2.0, C:0.6}}
    ]},

  { id:`feierabend`, q:`Wann sind Sie hier abends raus?`,
    a:[
      {id:`puenktlich`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Halb vier, und wenn das Haus brennt, halb vier. Ich habe siebzehn Jahre lang immer Ja gesagt, das ist vorbei.`,
       l:{A:-1.4, C:0.8}, fakt:`geht seit einiger Zeit strikt um halb vier`},
      {id:`spaet`, wie:`gleichmütig`, stimmung:`neutral`,
       t:`Wenn ich fertig bin. Manchmal um acht.`,
       l:{A:1.2, C:0.6}},
      {id:`leute`, wie:`lebhaft`, stimmung:`freundlich`,
       t:`Kommt drauf an, wer noch da ist. Manchmal steht man noch eine halbe Stunde am Hof und redet.`,
       l:{E:2.0, A:0.4}},
      {id:`allein`, wie:`ruhig`, stimmung:`neutral`,
       t:`Sobald es leer ist. Dann mache ich noch das, wozu ich tagsüber nicht komme.`,
       l:{E:-1.8}}
    ]},

  { id:`fehler`, q:`Sie haben mal etwas falsch gemacht. Was passiert dann?`,
    a:[
      {id:`sofortsagen`, wie:`ohne Zögern`, stimmung:`neutral`,
       t:`Dann sage ich es. Sofort und laut, bevor es jemand anders findet. Alles andere wird nur teurer.`,
       l:{E:1.4, A:-0.6, N:-1.0}, fakt:`meldet eigene Fehler sofort und laut`},
      {id:`stillrichten`, wie:`trocken`, stimmung:`amuesiert`,
       t:`Ich richte es, bevor es einer merkt. Ist das schlimm?`,
       l:{A:-1.0, C:0.8, O:0.4}},
      {id:`grübeln`, wie:`leiser`, stimmung:`nachdenklich`,
       t:`Dann liegt mir das ein paar Tage im Magen.`,
       l:{N:2.0}},
      {id:`unauffaellig`, wie:`gleichmütig`, stimmung:`neutral`,
       t:`Nichts. Ich mache seit neunundzwanzig Jahren dasselbe, da passiert wenig.`,
       l:{N:-1.8, O:-0.6}}
    ]},

  { id:`hof`, q:`Sie kennen hier ziemlich viele Leute.`,
    a:[
      {id:`alle`, wie:`laut, mit einem Lachen`, stimmung:`amuesiert`,
       t:`Alle. Ich kenne auch die, die glauben, dass ich sie nicht kenne. Der aus 1.12 wirft seit zwei Jahren Kaffeesatz ins Waschbecken.`,
       l:{E:2.2}, fakt:`kennt jeden im Haus, auch die, die das nicht wissen`},
      {id:`arbeit`, wie:`sachlich`, stimmung:`neutral`,
       t:`So weit man muss. Ich brauche die Namen für die Zettel.`,
       l:{E:-1.4, C:0.8}},
      {id:`wenige`, wie:`warm`, stimmung:`freundlich`,
       t:`Ein paar wirklich. Der Rest sind Leute, denen ich die Tür aufmache.`,
       l:{E:-1.0, A:1.0}},
      {id:`meiden`, wie:`trocken`, stimmung:`skeptisch`,
       t:`Zu viele. Manche würde ich lieber nicht kennen.`,
       l:{A:-1.8, E:0.6}}
    ]},

  { id:`nachts`, q:`Sie werden nachts gerufen. Wie ist das?`,
    a:[
      {id:`egal`, wie:`achselzuckend`, stimmung:`neutral`,
       t:`Ich stehe auf, fahre hin, mache es. Danach schlafe ich weiter. Immer.`,
       l:{N:-2.2}, fakt:`schläft nach nächtlichen Einsätzen sofort weiter`},
      {id:`wach`, wie:`gedämpft`, stimmung:`nachdenklich`,
       t:`Danach liege ich wach und gehe im Kopf durch, was noch kaputtgehen könnte.`,
       l:{N:2.0}},
      {id:`aerger`, wie:`hörbar ungehalten`, stimmung:`gereizt`,
       t:`Ich ärgere mich, dass mich einer um drei anruft, der um zehn den Hahn zugedreht hätte.`,
       l:{A:-1.6, E:0.8}},
      {id:`gern`, wie:`fast vergnügt`, stimmung:`amuesiert`,
       t:`Ehrlich? Ganz gern. Nachts ist das Haus leer und man kommt an alles ran.`,
       l:{E:-0.8, O:0.6, N:-1.0}}
    ]},

  { id:`meister`, q:`Wollten Sie nie was anderes machen?`,
    a:[
      {id:`nie`, wie:`sofort`, stimmung:`neutral`,
       t:`Nein. Ich mache das seit ich neunzehn bin und würde es wieder machen.`,
       l:{O:-2.0, N:-0.5}},
      {id:`meisterin`, wie:`bestimmt, mit einem Blick zur Tür`, stimmung:`interessiert`,
       t:`Den Meister will ich noch machen. Mit siebenundvierzig, ja, ich weiß, wie das klingt.`,
       l:{C:1.4, O:0.8, E:0.4}, fakt:`will mit siebenundvierzig noch die Meisterprüfung machen`},
      {id:`raus`, wie:`trocken`, stimmung:`skeptisch`,
       t:`Doch. Zweimal fast. Beide Male haben mich die Leute hier gehalten und nicht die Arbeit.`,
       l:{A:0.8, E:0.6}},
      {id:`egalwas`, wie:`gleichmütig`, stimmung:`neutral`,
       t:`Arbeit ist Arbeit. Hauptsache, abends ist etwas heil, was morgens kaputt war.`,
       l:{O:-1.4, C:1.0}}
    ]}
],
/* --- Sieben Fragen auf zwei Waagen. Vier Antworten je Frage, eine je
       Pol. Bei ihr ist die zweite Waage zum ersten Mal spannend: sie
       will gesehen werden, und zwar nicht aus Eitelkeit, sondern weil
       ihr neunzehn Jahre lang niemand geglaubt hat. ----------------- */

motivfragen: [
  { id:`zusage`, q:`Was müsste eine Stelle haben, damit Sie wechseln?`,
    an:{ 'meldung:selbst': `Sie reparieren erst und klären hinterher. Was müsste woanders sein, damit Sie überhaupt wechseln?`,
         'neuerchef:abwarten': `Vier Leitungen ausgesessen — was müsste kommen, damit Sie doch gehen?` },
    a:[
      {id:`freihand`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Dass ich machen darf, ohne für jede Schraube ein Formular. Ich weiß, was das Haus braucht, besser als jeder Plan.`,
       aff:{FRE:2.2}, fakt:`will ohne Formular für jede Schraube arbeiten`},
      {id:`sicher`, wie:`nüchtern`, stimmung:`neutral`,
       t:`Dass die Stelle in fünf Jahren noch da ist. Ich habe zwei Häuser gesehen, die an eine Firma gegangen sind.`,
       aff:{FRE:-2.0}},
      {id:`gefragt`, wie:`sehr direkt, ohne Verlegenheit`, stimmung:`interessiert`,
       t:`Dass man mich fragt, bevor gebaut wird, und nicht danach. Zweimal habe ich vorher gesagt, wo das Problem sitzt. Zweimal hat es hinterher genau da geknallt.`,
       aff:{GEL:2.2}, fakt:`hat zweimal vorher gewarnt und zweimal recht behalten`},
      {id:`leute`, wie:`wärmer`, stimmung:`freundlich`,
       t:`Dass die Leute in Ordnung sind. Alles andere lernt man.`,
       aff:{GEL:-2.0}}
    ]},

  { id:`lohnt`, q:`Woran merken Sie, dass ein Tag gut war?`,
    an:{ 'zusage:gefragt': `Angenommen, man fragt Sie vorher. Woran merken Sie dann, dass der Tag gut war?` },
    a:[
      {id:`selbstgemacht`, wie:`zufrieden`, stimmung:`freundlich`,
       t:`Wenn ich etwas so gemacht habe, wie ich es für richtig halte, und keiner reingeredet hat.`,
       aff:{FRE:2.0}},
      {id:`nichtskaputt`, wie:`sachlich`, stimmung:`neutral`,
       t:`Wenn abends nichts offen ist. Keine Meldung, kein Zettel, nichts tropft.`,
       aff:{FRE:-1.9}},
      {id:`gesehen`, wie:`ohne jede Scheu`, stimmung:`interessiert`,
       t:`Wenn einer sagt: gut, dass Sie das gesehen haben. Kommt selten, und dann fahre ich mit einem anderen Gefühl nach Hause.`,
       aff:{GEL:2.1}, fakt:`fährt anders nach Hause, wenn jemand ihre Arbeit benennt`},
      {id:`zusammen`, wie:`warm`, stimmung:`freundlich`,
       t:`Wenn wir zu dritt was hingekriegt haben, was einer allein nicht schafft.`,
       aff:{GEL:-2.0}}
    ]},

  { id:`nervt`, q:`Was ärgert Sie hier am meisten?`,
    an:{ 'streit:direkt': `Sie sagen es den Leuten ins Gesicht. Was ärgert Sie denn hier am meisten?`,
         'becken:*':      `Dreimal gemeldet, dann selbst gekauft. Was ärgert Sie hier am meisten?` },
    a:[
      {id:`genehmigung`, wie:`hörbar aufgebracht`, stimmung:`gereizt`,
       t:`Dass ich für eine Dichtung für zwei Euro achtzig drei Unterschriften brauche und sie deshalb selbst kaufe.`,
       aff:{FRE:2.2}, fakt:`kauft Kleinteile selbst, weil die Genehmigung länger dauert`},
      {id:`sparen`, wie:`ernst`, stimmung:`nachdenklich`,
       t:`Dass immer erst repariert wird, wenn es kaputt ist. Wartung kostet weniger und steht in keinem Bericht.`,
       aff:{FRE:-2.0}},
      {id:`unsichtbar`, wie:`kühl, und darunter deutlich gekränkt`, stimmung:`verschlossen`,
       t:`Dass es im Jahresbericht heißt, der Umbau lief reibungslos. Reibungslos heißt, dass ich vier Wochenenden hier war.`,
       aff:{GEL:2.2}, fakt:`war bei einem Umbau vier Wochenenden da und kam im Bericht nicht vor`},
      {id:`durchlauf`, wie:`gedämpft`, stimmung:`nachdenklich`,
       t:`Dass die Leute so schnell wechseln. Kaum kennt man einen, ist er weg.`,
       aff:{GEL:-1.9}}
    ]},

  { id:`aendern`, q:`Wenn Sie hier morgen eine Sache ändern dürften — welche?`,
    an:{ 'nervt:genehmigung': `Und wenn die drei Unterschriften wegfielen: was käme als Nächstes?` },
    a:[
      {id:`budget`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Ein kleines Budget, über das ich allein entscheide. Zweitausend im Jahr, und ich brauche mit keinem mehr zu reden.`,
       aff:{FRE:2.1}},
      {id:`wartung`, wie:`sachlich`, stimmung:`neutral`,
       t:`Einen Wartungsplan, der eingehalten wird. Steht schon geschrieben, seit 2019, unterschrieben und nie gemacht.`,
       aff:{FRE:-2.0}, fakt:`hat einen unterschriebenen Wartungsplan von 2019, der nie umgesetzt wurde`},
      {id:`sitzung`, wie:`sehr direkt`, stimmung:`interessiert`,
       t:`Ich säße bei der Bauplanung mit am Tisch. Nicht als Gast. Mit Stimme.`,
       aff:{GEL:2.2}},
      {id:`kaffee`, wie:`beiläufig`, stimmung:`freundlich`,
       t:`Der Automat im Hof müsste wieder aufgestellt werden. Da haben früher alle gestanden, quer durchs Haus.`,
       aff:{GEL:-2.0}}
    ]},

  { id:`nichtstun`, q:`Und wenn sich nichts ändert?`,
    a:[
      {id:`weitermachen`, wie:`gleichmütig`, stimmung:`neutral`,
       t:`Dann mache ich weiter wie bisher und kaufe die Dichtungen weiter selbst. Ist ja nicht so, dass es ohne mich läuft.`,
       aff:{FRE:1.9}},
      {id:`aushalten`, wie:`achselzuckend`, stimmung:`neutral`,
       t:`Dann bleibt es. Ich habe vier Leitungen ausgesessen, ich sitze auch die fünfte aus.`,
       aff:{FRE:-1.8}},
      {id:`schriftlich`, wie:`trocken, mit einem Nicken zum Ordner`, stimmung:`skeptisch`,
       t:`Dann schreibe ich es weiter auf. Mit Datum. Damit hinterher niemand sagen kann, es hätte es keiner gewusst.`,
       aff:{GEL:2.0}, fakt:`schreibt alles mit Datum auf, damit hinterher niemand behaupten kann, es habe keiner gewusst`},
      {id:`bleiben`, wie:`warm`, stimmung:`freundlich`,
       t:`Dann bleibe ich trotzdem. Wegen der Leute, nicht wegen des Hauses.`,
       aff:{GEL:-2.0}}
    ]},

  { id:`zustimmung`, q:`Wer redet Ihnen rein, wenn Sie etwas anders machen wollen?`,
    a:[
      {id:`keiner`, wie:`bestimmt`, stimmung:`neutral`,
       t:`In der Werkstatt keiner. Was zwischen Dach und Fundament passiert, ist meins.`,
       aff:{FRE:2.0}},
      {id:`vorschrift`, wie:`sachlich, ohne Groll`, stimmung:`neutral`,
       t:`Die Vorschrift, und das ist auch gut so. Bei Strom hört der Spaß auf, da halte ich mich an jeden Buchstaben.`,
       aff:{FRE:-2.1}, fakt:`hält sich bei Elektrik strikt an die Vorschrift, sonst nicht`},
      {id:`aktenlage`, wie:`trocken`, stimmung:`amuesiert`,
       t:`Ich mache es und schreibe hinterher, dass ich es war. Dann kann sich keiner damit schmücken.`,
       aff:{GEL:1.9}},
      {id:`absprechen`, wie:`sachlich`, stimmung:`neutral`,
       t:`Ich frage die zwei, die es betrifft. Dauert fünf Minuten.`,
       aff:{GEL:-1.9}}
    ]},

  { id:`entscheidung`, q:`Wie entscheiden Sie so etwas?`,
    a:[
      {id:`bauch`, wie:`zügig`, stimmung:`neutral`,
       t:`Im Stehen. Ich mache das seit neunundzwanzig Jahren, ich muss nicht überlegen, ob eine Leitung alt ist.`,
       aff:{FRE:1.9}},
      {id:`nachrechnen`, wie:`bedächtig`, stimmung:`neutral`,
       t:`Ich rechne es durch und hole ein zweites Angebot. Bei allem über hundert Euro.`,
       aff:{FRE:-1.9}},
      {id:`protokoll`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Ich entscheide und schreibe es in den Ordner, mit Datum und meinem Namen darunter.`,
       aff:{GEL:1.8}},
      {id:`kollege`, wie:`wärmer`, stimmung:`freundlich`,
       t:`Ich rufe Ralf an. Der ist in Rente und weiß trotzdem mehr über dieses Haus als die ganze Verwaltung.`,
       aff:{GEL:-2.1}, fakt:`ruft bei Entscheidungen Ralf an, der längst in Rente ist`}
    ]}
],

/* --- Was sie privat bewegt. Dieselben vier Kennungen wie bei den
       anderen — die Kennungen sind Fächer, kein Inhalt. ----------------------- */

privat: {
  grenze: 10,
  felder: [
    { id:`musik`,     was:`Feierabend`, wahr:`trainiert die F-Jugend, seit ihre Tochter mit dem Fußball aufgehört hat` },
    { id:`werkstatt`, was:`zu Hause`,   wahr:`baut eine Zündapp von 1961 in der Garage wieder auf` },
    { id:`tochter`,   was:`Familie`,    wahr:`ihre Tochter studiert Maschinenbau und fragt sie nie um Rat` },
    { id:`plan60`,    was:`Zukunft`,    wahr:`hat sich für die Meisterprüfung angemeldet und es niemandem gesagt` }
  ]
},

privatfragen: [
  { id:`feierabend`, gibt:`musik`, auf:1,
    q:`Was machen Sie, wenn Sie hier raus sind?`,
    offen: { er:`Dienstag und Donnerstag stehe ich auf dem Platz. F-Jugend, sechs bis acht Jahre, vierzehn Stück.`,
             erRegie:`Sie lacht kurz und laut.`,
             er2:`Meine Tochter hat mit zwölf aufgehört. Ich bin geblieben.`,
             wie:`aufgeräumt`, wie2:`trocken, und dahinter etwas anderes`, stimmung:`amuesiert`,
             fakt:`trainiert die F-Jugend, seit ihre Tochter aufgehört hat` },
    zu:    { er:`Nach Hause, wie jeder.`, wie:`knapp`, stimmung:`verschlossen` } },

  { id:`garage`, gibt:`werkstatt`, auf:1,
    q:`Schrauben Sie zu Hause auch noch?`,
    an:{ selbst:`Sie machen das lieber selbst, das habe ich gemerkt. Auch zu Hause?` },
    offen: { er:`Eine Zündapp von 1961. Stand fünfzehn Jahre in der Scheune meines Onkels.`,
             erRegie:`Sie greift hinter sich und legt ein Bauteil auf die Werkbank, das sie offenbar dabeihat.`,
             er2:`Das ist der Vergaser. Den habe ich jetzt zum vierten Mal auseinander. Beim fünften läuft sie.`,
             wie:`sofort schneller`, wie2:`vergnügt, sehr bestimmt`, stimmung:`interessiert`,
             fakt:`baut eine Zündapp von 1961 auf, der Vergaser ist zum vierten Mal auseinander` },
    zu:    { er:`Zu Hause mache ich gar nichts.`, wie:`abweisend`, stimmung:`skeptisch` } },

  { id:`familie`, gibt:`tochter`, auf:2,
    q:`Und Ihre Tochter — was macht die?`,
    offen: { er:`Maschinenbau, viertes Semester.`,
             erRegie:`Sie sagt es sehr gerade und sieht dabei zur Tür.`,
             er2:`Sie fragt mich nie. Nicht einmal, als sie das erste Mal einen Motor aufhatte. Ich hätte es ihr zeigen können.`,
             wie:`stolz`, wie2:`leiser, ohne Anklage`, stimmung:`geruehrt`,
             fakt:`ihre Tochter studiert Maschinenbau und fragt sie nie um Rat` },
    zu:    { er:`Der geht es gut.`, wie:`abschließend`, stimmung:`verschlossen` } },

  { id:`weiter`, gibt:`plan60`, auf:2,
    q:`Und Sie, wo wollen Sie noch hin?`,
    an:{ 'meister:meisterin':`Sie sagten, den Meister wollen Sie noch machen. Ist das schon mehr als eine Idee?` },
    offen: { er:`Ich bin angemeldet. Seit März.`,
             erRegie:`Sie sagt es leiser als alles davor.`,
             er2:`Das weiß hier keiner, und das soll auch so bleiben, bis ich bestanden habe. Wenn ich durchfalle, will ich das mit mir allein ausmachen.`,
             wie:`kurz`, wie2:`sehr direkt`, stimmung:`nachdenklich`,
             fakt:`ist seit März für die Meisterprüfung angemeldet und hat es niemandem gesagt` },
    zu:    { er:`Ich bin siebenundvierzig. Wo soll ich noch hin.`, wie:`abwiegelnd`, stimmung:`skeptisch` } },

  /* Die plumpen Fragen. Sie liefern fast sicher, kosten aber das Dreifache. */
  { id:`direkt`, gibt:`musik`, auf:3, plump:true,
    q:`Erzählen Sie doch mal was von sich privat.`,
    offen: { er:`Fußball. F-Jugend.`, wie:`knapp, mit einem prüfenden Blick`, stimmung:`skeptisch`,
             nachEr:`Reicht das, oder wollen Sie meine Blutgruppe?`,
             fakt:`trainiert die F-Jugend, seit ihre Tochter aufgehört hat` },
    zu:    { er:`Nein.`, erRegie:`Sie sagt es freundlich und ohne jede Pause.`,
             er2:`Sie sind seit zwanzig Minuten hier. Fragen Sie was Vernünftiges.`,
             wie:`sofort`, wie2:`laut, nicht böse`, stimmung:`gereizt` } },

  { id:`kinder`, gibt:`tochter`, auf:3, plump:true,
    q:`Haben Sie Familie? Mann, Kinder?`,
    offen: { er:`Eine Tochter. Kein Mann, nicht mehr.`, wie:`sehr sachlich`, stimmung:`verschlossen`,
             fakt:`ihre Tochter studiert Maschinenbau und fragt sie nie um Rat` },
    zu:    { er:`Was hat das mit dem Waschbecken zu tun?`,
             wie:`freundlich gesagt und trotzdem eine Wand`, stimmung:`gereizt` } },

  { id:`geld`, gibt:`plan60`, auf:3, plump:true,
    q:`Verdient man denn genug in dem Beruf?`,
    offen: { er:`Genug wofür? Für die Meisterschule reicht es. Gerade so.`,
             erRegie:`Sie merkt selbst, was sie gerade gesagt hat, und sagt nichts weiter.`,
             wie:`erst trocken, dann still`, stimmung:`nachdenklich`,
             fakt:`ist seit März für die Meisterprüfung angemeldet und hat es niemandem gesagt` },
    zu:    { er:`Das fragt man nicht, und Sie wissen das.`, wie:`sehr direkt`, stimmung:`gereizt` } }
],

hinausgeworfen: {
  regie: `Sie steht von der Werkbank auf, nimmt den Schlüsselbund und lässt ihn einmal auf der Hand aufschlagen.`,
  er: `So. Ich habe um vier noch einen Aufzug, der seit gestern steht. Sie finden raus, die Tür ist ja offen.`,
  wie: `laut, freundlich, und vollkommen endgültig`, stimmung: `abweisend`
},
/* --- Was gerade bei ihr los ist. Zehn Lagen, je drei Wege hinein.
       Bei ihr trägt das Direkte und das Nüchterne; wer behutsam wird
       oder sich sorgt, greift daneben. Genau umgekehrt zu Reuter. --- */

zustaende: [

{ id:`rohr`, titel:`Das Rohr, vor dem sie gewarnt hat`,
  regie:`Auf der Werkbank liegt ein Rohrstück, aufgeschnitten, die Innenwand fast zugewachsen. Daneben ein Zettel mit zwei Datumsangaben.`,
  er:`Samstagnacht. Erster Stock, Steigleitung. Vier Büros unter Wasser.`,
  wie:`sachlich, ohne jede Aufregung`, stimmung:`neutral`,
  bedarf:{ id:`rohr_gel`, was:`hat zweimal gewarnt und will es endlich belegt haben`, braucht:{GEL:1.8} },
  fragen:[
    { id:`gewarnt`, t:`Die zwei Daten auf dem Zettel — was ist das?`, wie:`sachlich, ohne Mitleid`,
      liest:{E:0.9, C:0.6, N:-0.5},
      gut:{ er:`Das sind die zwei Male, die ich es gemeldet habe. März und September.`,
            erRegie:`Sie schiebt das Rohrstück zu dir herüber, damit du hineinsehen kannst.`,
            er2:`Ich hebe das auf. Nicht aus Trotz. Beim nächsten Mal lege ich das auf den Tisch, bevor ich rede.`,
            wie:`nüchtern`, wie2:`sehr bestimmt`, stimmung:`interessiert`,
            fakt:`hebt das aufgeschnittene Rohr als Beleg für zwei Meldungen auf`, bez:8 },
      zu:{ er:`Notizen.`, wie:`knapp`, stimmung:`verschlossen`, bez:-2 } },

    { id:`schlimm`, t:`Das muss ja furchtbar für Sie gewesen sein.`, wie:`mitfühlend`,
      liest:{A:1.2, N:0.9},
      gut:{ er:`Es war eine lange Nacht, ja.`, wie:`ruhig`, stimmung:`nachdenklich`, bez:3 },
      zu:{ er:`Furchtbar.`,
           erRegie:`Sie sieht dich an, als hätte sie sich verhört.`,
           er2:`Es ist Wasser. Ich habe abgestellt, ausgepumpt und um sechs war Kaffee. Furchtbar ist, dass es zweimal auf dem Tisch lag und keiner hingesehen hat.`,
           wie:`gedehnt`, wie2:`laut, sehr klar`, stimmung:`gereizt`, bez:-7 } },

    { id:`wersnun`, t:`Und wer zahlt das jetzt?`, wie:`geradeheraus`,
      liest:{E:0.7, A:-0.5, C:0.4},
      gut:{ er:`Das Haus. Vierzigtausend, schätze ich.`,
            erRegie:`Sie sagt die Zahl, als läse sie einen Zählerstand ab.`,
            er2:`Die Dichtung hätte zweihundert gekostet. Aber die stand nicht im Plan, und vierzigtausend stehen jetzt drin.`,
            wie:`trocken`, wie2:`beinahe vergnügt vor Bitterkeit`, stimmung:`amuesiert`, bez:6 },
      zu:{ er:`Nicht ich.`, wie:`abschließend`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`bericht`, titel:`Reibungslos, steht da`,
  regie:`An der Wand hängt eine ausgedruckte Seite aus dem Jahresbericht. Ein Satz ist mit Textmarker angestrichen.`,
  er:`Der Umbau im Erdgeschoss lief reibungslos. So steht es da.`,
  wie:`ruhig, mit einem Nicken zur Wand`, stimmung:`neutral`,
  bedarf:{ id:`bericht_gel`, was:`will, dass ihre Arbeit einen Namen bekommt`, braucht:{GEL:1.9} },
  fragen:[
    { id:`wievieleWochenenden`, t:`Wie viele Wochenenden waren Sie da?`, wie:`direkt`,
      liest:{E:1.0, C:0.5},
      gut:{ er:`Vier.`,
            erRegie:`Sie tippt auf den Textmarker.`,
            er2:`Reibungslos heißt: eine Frau war vier Wochenenden hier und hat den Estrich getrocknet, damit der Termin hält. Steht nicht drin. Da steht reibungslos.`,
            wie:`sofort`, wie2:`laut, ohne Selbstmitleid`, stimmung:`interessiert`,
            fakt:`war beim Umbau vier Wochenenden da und kommt im Bericht nicht vor`, bez:8 },
      zu:{ er:`Ein paar.`, wie:`abwiegelnd`, stimmung:`verschlossen`, bez:-2 } },

    { id:`egalwer`, t:`Am Ende zählt doch, dass es fertig ist.`, wie:`beschwichtigend`,
      liest:{A:1.1, O:0.5},
      gut:{ er:`Stimmt ja auch.`, wie:`knapp`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Nein.`,
           erRegie:`Sie nimmt das Blatt ab und legt es vor sich hin.`,
           er2:`Wenn nicht drinsteht, wer es fertig gemacht hat, dann steht beim nächsten Mal drin, dass es auch ohne die Hausmeisterin ging. Und dann geht es irgendwann wirklich ohne mich, nur eben nicht.`,
           wie:`sofort`, wie2:`sehr deutlich`, stimmung:`gereizt`, bez:-7 } },

    { id:`gesagt`, t:`Haben Sie das mal jemandem gesagt?`, wie:`ruhig`,
      liest:{C:0.6, E:0.5, A:-0.3},
      gut:{ er:`Einmal, der Leitung. Sie hat gesagt, sie nimmt es mit.`,
            wie:`trocken`, stimmung:`skeptisch`,
            fakt:`hat sich einmal beschwert, es wurde mitgenommen und nie wiedergesehen`, bez:5 },
      zu:{ er:`Wem denn.`, wie:`resigniert`, stimmung:`verschlossen`, bez:-1 } }
  ] },

{ id:`firma`, titel:`Die Haustechnik soll vergeben werden`,
  regie:`Auf der Werkbank liegt ein Umschlag der Verwaltung, aufgerissen, daneben ein aufgeschlagener Kalender.`,
  er:`Sie schreiben die Haustechnik aus. Eine Firma soll das machen ab Januar.`,
  wie:`nüchtern`, stimmung:`neutral`,
  bedarf:{ id:`firma_sic`, was:`weiß nicht, ob es die Stelle in einem Jahr noch gibt`, braucht:{FRE:-1.6} },
  fragen:[
    { id:`undsie`, t:`Und Sie?`, wie:`nur die zwei Worte`,
      liest:{E:0.8, A:-0.4, N:-0.6},
      gut:{ er:`Übernahme, heißt es. Zu deren Bedingungen.`,
            erRegie:`Sie schlägt den Kalender zu.`,
            er2:`Ich habe mir angesehen, was die zahlen und wie viele Häuser einer betreut. Sieben. Ich mache eins und komme kaum nach.`,
            wie:`knapp`, wie2:`sachlich, sehr klar`, stimmung:`interessiert`,
            fakt:`bei der Fremdfirma betreut einer sieben Häuser, sie macht eins`, bez:7 },
      zu:{ er:`Das entscheiden andere.`, wie:`verschlossen`, stimmung:`verschlossen`, bez:-2 } },

    { id:`sorge`, t:`Sie machen sich bestimmt große Sorgen.`, wie:`teilnehmend`,
      liest:{N:1.3, A:0.6},
      gut:{ er:`Ein bisschen schon.`, wie:`zugewandt`, stimmung:`nachdenklich`, bez:3 },
      zu:{ er:`Sorgen.`,
           erRegie:`Sie lacht einmal, kurz und laut.`,
           er2:`Ich bin Elektrikerin. Wenn die mich nicht wollen, nimmt mich morgen jeder Betrieb in dieser Stadt. Ich mache mir Sorgen um das Haus, nicht um mich.`,
           wie:`gedehnt`, wie2:`fest`, stimmung:`gereizt`, bez:-6 } },

    { id:`waswird`, t:`Was passiert dann mit dem Haus?`, wie:`sachlich`,
      liest:{C:0.9, E:0.4, O:-0.4},
      gut:{ er:`Nichts, ein halbes Jahr lang. Danach fällt auf, dass keiner mehr weiß, wo die Absperrhähne sind.`,
            erRegie:`Sie zeigt mit dem Daumen über die Schulter auf einen handgezeichneten Plan an der Wand.`,
            er2:`Der da hängt hier, seit ich hier bin. Es gibt ihn sonst nirgends.`,
            wie:`nüchtern`, wie2:`bestimmt`, stimmung:`interessiert`,
            fakt:`der einzige Plan der Absperrhähne hängt handgezeichnet in ihrer Werkstatt`, bez:7 },
      zu:{ er:`Wird schon.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`schluessel`, titel:`Die Schlüssel werden elektronisch`,
  regie:`Neben dem Schlüsselbrett liegt ein Prospekt mit einem schwarzen Kartenleser darauf. Jemand hat ein Fragezeichen an den Rand gemalt.`,
  er:`Ab Januar alles auf Karte. Die Schlüssel kommen weg, alle.`,
  wie:`sachlich, mit einem Blick auf den Gürtel`, stimmung:`neutral`,
  bedarf:{ id:`schl_fre`, was:`verliert den Zugang, mit dem sie tut, was nötig ist`, braucht:{FRE:1.5} },
  fragen:[
    { id:`kommenSieRein`, t:`Kommen Sie damit nachts noch überall rein?`, wie:`sachlich, sehr konkret`,
      liest:{C:0.9, E:0.6, N:-0.4},
      gut:{ er:`Genau das ist die Frage, und niemand konnte sie mir beantworten.`,
            erRegie:`Sie hebt den Schlüsselbund an.`,
            er2:`Wenn der Strom weg ist, geht die Karte nicht. Und wenn der Strom weg ist, bin ich der Mensch, der reinmuss. Vorne am Empfang nehmen sie der Kettner im selben Aufwasch das Buch weg. Dasselbe Papier, dieselbe Unterschrift.`,
            wie:`sofort`, wie2:`sehr klar`, stimmung:`interessiert`,
            fakt:`bei Stromausfall funktioniert das Kartensystem nicht, ausgerechnet dann muss sie rein`, bez:8 },
      zu:{ er:`Wird man sehen.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } },

    { id:`modern`, t:`Ist doch praktisch, so ein System.`, wie:`munter`,
      liest:{O:1.4, A:0.5},
      gut:{ er:`Für die Verwaltung schon.`, wie:`trocken`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Praktisch.`,
           erRegie:`Sie legt den Prospekt mit dem Bild nach unten hin.`,
           er2:`Praktisch ist, wenn ich um drei nachts an den Hahn komme. Alles andere ist ein Prospekt.`,
           wie:`gedehnt`, wie2:`laut`, stimmung:`gereizt`, bez:-6 } },

    { id:`einundvierzig`, t:`Was machen Sie mit einundvierzig Schlüsseln?`, wie:`halb im Scherz`,
      liest:{E:0.9, O:-0.3},
      gut:{ er:`Behalten.`,
            erRegie:`Sie grinst breit.`,
            er2:`Steht nirgends geschrieben, dass ich sie abgeben muss. Und in zwei Jahren, wenn die Karte klemmt, ruft mich einer an.`,
            wie:`sofort`, wie2:`vergnügt`, stimmung:`amuesiert`, bez:5 },
      zu:{ er:`Abgeben, was sonst.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`ralf`, titel:`Ralf geht nicht mehr ans Telefon`,
  regie:`Auf der Werkbank liegt ein Handy mit dem Bildschirm nach oben. Dreimal derselbe Name, dreimal ohne Antwort.`,
  er:`Ralf. War vor mir hier, seit sechs Jahren in Rente. Ich rufe ihn an, wenn ich nicht weiterweiß.`,
  wie:`sachlich, eine Spur zu sachlich`, stimmung:`neutral`,
  bedarf:{ id:`ralf_zug`, was:`verliert den Einzigen, der das Haus kennt wie sie`, braucht:{GEL:-1.5} },
  fragen:[
    { id:`seitwann`, t:`Seit wann geht er nicht mehr ran?`, wie:`ruhig, direkt`,
      liest:{E:0.8, C:0.5, N:-0.4},
      gut:{ er:`Drei Wochen.`,
            erRegie:`Sie dreht das Handy um, sodass der Bildschirm nach unten liegt.`,
            er2:`Seine Frau sagt, es geht ihm nicht gut, mehr sagt sie nicht. Ich fahre am Samstag hin. Ich habe zwei Jahre nicht daran gedacht, ihn zu besuchen, solange er ans Telefon ging.`,
            wie:`knapp`, wie2:`sehr leise, für ihre Verhältnisse`, stimmung:`geruehrt`,
            fakt:`fährt zu Ralf, nachdem sie ihn zwei Jahre nur angerufen hat`, bez:8 },
      zu:{ er:`Er wird beschäftigt sein.`, wie:`abwehrend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`traurig`, t:`Das nimmt Sie mit, das sieht man.`, wie:`einfühlsam`,
      liest:{A:1.3, N:0.7},
      gut:{ er:`Ja. Ja, das tut es.`, wie:`überraschend leise`, stimmung:`nachdenklich`, bez:4 },
      zu:{ er:`Man sieht bei mir gar nichts.`,
           erRegie:`Sie greift nach dem Schraubenzieher und fängt wieder an zu putzen.`,
           er2:`Und ich hätte gern, dass das so bleibt.`,
           wie:`sofort`, wie2:`freundlich und komplett zu`, stimmung:`verschlossen`, bez:-6 } },

    { id:`werjetzt`, t:`Wen rufen Sie jetzt an?`, wie:`praktisch`,
      liest:{C:0.8, E:0.5, A:-0.3},
      gut:{ er:`Niemanden.`,
            erRegie:`Sie sagt es ohne Pathos, wie eine Bestandsaufnahme.`,
            er2:`Es gibt keinen zweiten Ralf. Deshalb schreibe ich jetzt alles auf, was er mir gesagt hat. Vierzig Seiten bisher.`,
            wie:`nüchtern`, wie2:`bestimmt`, stimmung:`interessiert`,
            fakt:`schreibt auf vierzig Seiten mit, was Ralf über das Haus weiß`, bez:7 },
      zu:{ er:`Findet sich schon einer.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`azubi`, titel:`Der Siebzehnjährige`,
  regie:`An der Werkzeugwand fehlen zwei Umrisse. Die Werkzeuge liegen daneben auf der Bank, quer.`,
  er:`Ich habe seit August einen Azubi. Ersten in neunundzwanzig Jahren.`,
  wie:`neutral, mit einem Blick auf die Bank`, stimmung:`neutral`,
  bedarf:{ id:`azubi_gel`, was:`soll zum ersten Mal ausbilden und weiß nicht, ob sie es kann`, braucht:{GEL:1.1} },
  fragen:[
    { id:`undwie`, t:`Und? Taugt er was?`, wie:`direkt, ohne Höflichkeitsfloskel`,
      liest:{E:1.0, A:-0.6},
      gut:{ er:`Er ist nicht dumm, er ist nur langsam, und das ist etwas anderes.`,
            erRegie:`Sie legt die zwei Werkzeuge zurück an ihre Umrisse.`,
            er2:`Ich habe ihn dreimal angeschrien in der ersten Woche. Danach habe ich mir überlegt, wie ich mit siebzehn behandelt worden wäre, und seitdem geht es.`,
            wie:`sofort`, wie2:`selbstkritisch, ohne Umschweife`, stimmung:`nachdenklich`,
            fakt:`hat den Azubi in der ersten Woche dreimal angeschrien und es sich abgewöhnt`, bez:7 },
      zu:{ er:`Er lernt.`, wie:`knapp`, stimmung:`neutral`, bez:-1 } },

    { id:`geduld`, t:`Da braucht man viel Geduld, gerade bei jungen Leuten.`, wie:`verständnisvoll`,
      liest:{A:1.2, O:0.4, N:0.4},
      gut:{ er:`Die habe ich mir zulegen müssen, ja.`, wie:`zugewandt`, stimmung:`freundlich`, bez:3 },
      zu:{ er:`Geduld.`,
           erRegie:`Sie sieht auf die Werkzeugwand.`,
           er2:`Ich brauche keine Geduld, ich brauche einen, der zusieht, wo er hinlangt. Das eine kann ich ihm beibringen, das andere nicht.`,
           wie:`trocken`, wie2:`bestimmt`, stimmung:`skeptisch`, bez:-5 } },

    { id:`waszuerst`, t:`Was zeigen Sie ihm zuerst?`, wie:`sachlich neugierig`,
      liest:{C:1.1, E:0.4, O:-0.4},
      gut:{ er:`Wo der Hauptschalter ist und wie man ihn ausschaltet.`,
            erRegie:`Sie sagt es, als wäre es das Selbstverständlichste der Welt, und es ist ihr sichtlich nicht selbstverständlich.`,
            er2:`Am zweiten Tag. Alles andere kommt später, das hier kann man nicht später lernen.`,
            wie:`bestimmt`, wie2:`ernst`, stimmung:`interessiert`, bez:6 },
      zu:{ er:`Was gerade anliegt.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`aufzug`, titel:`Der Aufzug steht seit gestern`,
  regie:`Am Türrahmen lehnt ein Schild mit der Aufschrift AUSSER BETRIEB. Es ist abgegriffen und hat offensichtlich schon oft gehangen.`,
  er:`Aufzug steht. Seit gestern zehn Uhr, das dritte Mal dieses Jahr.`,
  wie:`sachlich, ohne Klage`, stimmung:`neutral`,
  bedarf:{ id:`aufzug_sic`, was:`kann nicht dafür geradestehen, was sie nicht warten darf`, braucht:{FRE:-1.4} },
  fragen:[
    { id:`duerfenSie`, t:`Dürfen Sie da überhaupt ran?`, wie:`geradeheraus`,
      liest:{C:1.0, E:0.5, A:-0.3},
      gut:{ er:`Nein. Aufzug ist Fremdfirma, das ist auch richtig so.`,
            erRegie:`Sie klopft mit dem Fingerknöchel gegen das Schild.`,
            er2:`Was ich darf, ist das Schild hinhängen und es der Verwaltung erklären, die zwei Straßen weiter sitzt und den Aufzug noch nie gesehen hat. Beides mache ich seit gestern.`,
            wie:`sofort`, wie2:`trocken`, stimmung:`interessiert`,
            fakt:`darf an den Aufzug nicht ran und muss ihn trotzdem den Leuten erklären`, bez:7 },
      zu:{ er:`Das macht die Firma.`, wie:`knapp`, stimmung:`neutral`, bez:-1 } },

    { id:`aergerlich`, t:`Das ist bestimmt ärgerlich für Sie.`, wie:`mitfühlend`,
      liest:{A:1.2, N:0.8},
      gut:{ er:`Nicht schön, nein.`, wie:`freundlich`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Für mich?`,
           erRegie:`Sie zeigt mit dem Kinn nach oben.`,
           er2:`Oben sitzt eine Kollegin mit Rollator. Ärgerlich ist es für die. Ich laufe die Treppe sowieso.`,
           wie:`ungläubig`, wie2:`laut`, stimmung:`gereizt`, bez:-6 } },

    { id:`dreimal`, t:`Dreimal im Jahr — woran liegt das?`, wie:`sachlich`,
      liest:{C:0.9, O:-0.4, E:0.4},
      gut:{ er:`An der Steuerung von 1998, und das steht in jedem Prüfbericht seit sechs Jahren.`,
            erRegie:`Sie zieht einen Ordner heran, ohne ihn zu öffnen.`,
            er2:`Neu wäre einmal teuer. So ist es dreimal im Jahr billig, und in zehn Jahren hat es das Doppelte gekostet.`,
            wie:`präzise`, wie2:`nüchtern`, stimmung:`interessiert`,
            fakt:`die Aufzugssteuerung von 1998 steht seit sechs Jahren in jedem Prüfbericht`, bez:6 },
      zu:{ er:`Alte Technik eben.`, wie:`achselzuckend`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`umbau`, titel:`Gebaut wird ohne sie`,
  regie:`Auf der Bank liegt ein zusammengefalteter Bauplan. Er ist an mehreren Stellen mit Bleistift durchgestrichen.`,
  er:`Sie bauen im ersten Stock um. Der Plan lag drei Wochen bei mir im Fach, ungeöffnet — von denen, nicht von mir.`,
  wie:`trocken`, stimmung:`neutral`,
  bedarf:{ id:`umbau_gel`, was:`will vor dem Bauen gefragt werden, nicht danach`, braucht:{GEL:1.7} },
  fragen:[
    { id:`wasstimmtnicht`, t:`Was stimmt an dem Plan nicht?`, wie:`direkt`,
      liest:{E:0.9, C:0.7},
      gut:{ er:`Vier Sachen.`,
            erRegie:`Sie faltet den Plan auf und zeigt der Reihe nach auf die Kreuze.`,
            er2:`Steigleitung, Brandschutztür, ein Fenster, das nicht aufgeht, und eine Steckdose, wo die Tür hinkommt. Habe ich alles angezeichnet und hingeschickt. Antwort steht aus. Da oben sitzen zwei Leute, die davon noch gar nichts wissen, und einer von beiden verliert sein Fenster.`,
            wie:`sofort`, wie2:`rasch, sehr sicher`, stimmung:`interessiert`,
            fakt:`hat vier Fehler im Bauplan angezeichnet und keine Antwort bekommen`, bez:8 },
      zu:{ er:`Es ist nicht mein Plan.`, wie:`abweisend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`nichtsagen`, t:`Vielleicht sollten Sie sich da raushalten.`, wie:`gut gemeint`,
      liest:{A:1.0, O:0.5, N:0.4},
      gut:{ er:`Wäre einfacher, ja.`, wie:`trocken`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Raushalten.`,
           erRegie:`Sie legt die flache Hand auf den Plan.`,
           er2:`In zwei Jahren steht einer hier und fragt, warum die Tür an der Steckdose klemmt. Und dann bin ich es, die es richtet. Raushalten kann sich, wer nicht hinterherräumt.`,
           wie:`gedehnt`, wie2:`sehr deutlich`, stimmung:`gereizt`, bez:-7 } },

    { id:`wenfragen`, t:`Wen müsste man fragen, damit Sie am Tisch sitzen?`, wie:`praktisch`,
      liest:{C:0.7, E:0.6, A:-0.3},
      gut:{ er:`Die Bauabteilung. Ich habe zweimal gefragt.`,
            erRegie:`Sie zuckt mit einer Schulter, aber es sieht nicht gleichgültig aus.`,
            er2:`Beim dritten Mal bringe ich das Rohrstück mit. Mal sehen, ob das hilft.`,
            wie:`sachlich`, wie2:`grimmig vergnügt`, stimmung:`amuesiert`, bez:6 },
      zu:{ er:`Niemanden. So läuft das nicht.`, wie:`resigniert`, stimmung:`verschlossen`, bez:-1 } }
  ] },

{ id:`nachtdienst`, titel:`Dreimal in einer Woche`,
  regie:`Neben dem Radio liegt ein Notizblock, drei Zeilen mit Uhrzeiten: 2:40, 3:15, 4:05. Alle aus dieser Woche.`,
  er:`Drei Nächte diese Woche. Einmal Alarm, zweimal Wasser.`,
  wie:`ohne Klage, fast beiläufig`, stimmung:`neutral`,
  bedarf:{ id:`nacht_sic`, was:`fängt allein ab, was eine Rufbereitschaft abfangen müsste`, braucht:{FRE:-1.3} },
  fragen:[
    { id:`wieoft`, t:`Wer hat noch Rufbereitschaft außer Ihnen?`, wie:`sachlich`,
      liest:{C:0.9, E:0.6, A:-0.4},
      gut:{ er:`Niemand.`,
            erRegie:`Sie sagt es und lässt es einen Moment stehen.`,
            er2:`Es gibt eine Liste mit drei Namen. Zwei davon arbeiten hier seit vier Jahren nicht mehr. Ich habe das gemeldet, und jetzt steht mein Name dreimal drauf.`,
            wie:`knapp`, wie2:`trocken`, stimmung:`interessiert`,
            fakt:`auf der Rufbereitschaftsliste stehen zwei Leute, die längst weg sind`, bez:8 },
      zu:{ er:`Wir teilen uns das.`, wie:`abwiegelnd`, stimmung:`verschlossen`, bez:-2 } },

    { id:`schlafen`, t:`Da kommen Sie doch gar nicht zum Schlafen.`, wie:`besorgt`,
      liest:{N:1.2, A:0.7},
      gut:{ er:`Diese Woche war es knapp, ja.`, wie:`einsichtig`, stimmung:`nachdenklich`, bez:3 },
      zu:{ er:`Doch.`,
           erRegie:`Sie lacht.`,
           er2:`Ich schlafe im Auto vor der Tür, wenn es sein muss, und morgens um sechs bin ich hier. Das ist nicht das Problem. Das Problem ist, dass es niemandem auffällt.`,
           wie:`sofort`, wie2:`laut, dann eine Spur leiser`, stimmung:`skeptisch`, bez:-5 } },

    { id:`bezahlt`, t:`Wird das wenigstens bezahlt?`, wie:`geradeheraus`,
      liest:{E:0.8, A:-0.5, C:0.4},
      gut:{ er:`Pauschale. Achtzig im Monat.`,
            erRegie:`Sie tippt auf den Block mit den drei Uhrzeiten.`,
            er2:`Diese Woche waren das keine acht Euro die Stunde. Ich sage es Ihnen nicht, weil ich mehr will. Ich sage es, damit es einer weiß.`,
            wie:`nüchtern`, wie2:`sehr direkt`, stimmung:`interessiert`, bez:7 },
      zu:{ er:`Geht schon.`, wie:`abschließend`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`pruefung`, titel:`Im Herbst ist die Prüfung`,
  regie:`Unter dem Ordner schaut ein Heft hervor, an dessen Rand Formeln stehen. Sie schiebt es weiter darunter, als du hereinkommst.`,
  er:`Nichts Besonderes. Papierkram.`,
  wie:`zu schnell für ihre Verhältnisse`, stimmung:`skeptisch`,
  bedarf:{ id:`pruef_fre`, was:`will es aus eigener Kraft schaffen und niemandem erklären müssen`, braucht:{FRE:-0.9, GEL:1.0} },
  fragen:[
    { id:`formeln`, t:`Das sind Formeln, kein Papierkram.`, wie:`ruhig, keine Frage`,
      liest:{E:0.8, C:0.6, A:-0.4},
      gut:{ er:`Sie sehen genau hin, das gefällt mir.`,
            erRegie:`Sie zieht das Heft wieder hervor und legt es offen hin.`,
            er2:`Meisterprüfung, Teil drei, im Herbst. Ich lerne seit März abends. Und bevor Sie fragen: nein, hier weiß es keiner, und so bleibt es, bis ich bestanden habe.`,
            wie:`überrascht, anerkennend`, wie2:`sehr bestimmt`, stimmung:`interessiert`,
            fakt:`lernt seit März abends für die Meisterprüfung im Herbst`, bez:8 },
      zu:{ er:`Papierkram.`, wie:`abschließend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`schaffensie`, t:`Das schaffen Sie doch mit links.`, wie:`aufmunternd`,
      liest:{A:0.9, O:0.5, N:0.3},
      gut:{ er:`Mal sehen.`, wie:`knapp`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Mit links.`,
           erRegie:`Sie klappt das Heft zu.`,
           er2:`Ich bin siebenundvierzig und sitze abends über Sachen, die zwanzigjährige Kerle im Schlaf können. Sagen Sie so etwas bitte nicht, das macht es nicht leichter.`,
           wie:`gedehnt`, wie2:`ruhig, sehr ernst`, stimmung:`gereizt`, bez:-6 } },

    { id:`warumjetzt`, t:`Warum jetzt noch?`, wie:`schlicht neugierig, ohne Zweifel im Ton`,
      liest:{E:0.6, C:0.5, O:-0.3},
      gut:{ er:`Weil ich es kann und es keiner auf dem Papier sieht.`,
            erRegie:`Sie sagt es ohne jede Verlegenheit.`,
            er2:`Ich mache seit neunundzwanzig Jahren Meisterarbeit und werde als Hausmeisterin geführt. Das ist der ganze Grund.`,
            wie:`sofort`, wie2:`klar`, stimmung:`geruehrt`,
            fakt:`macht den Meister, weil ihre Arbeit auf dem Papier nicht vorkommt`, bez:8 },
      zu:{ er:`Warum nicht.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } }
  ] }
],

/* --- Was sie sagt, wenn du dich festlegst. ------------------------- */

reaktion: {
  z: {
    O: { genau:{ er:`Stimmt. Ich probiere nicht gern. Was seit zwanzig Jahren hält, hält auch das nächste.`, wie:`ohne Entschuldigung` },
         zuHoch:{ er:`Neugierig.`, erRegie:`Sie zeigt auf die Werkzeugwand mit den aufgemalten Umrissen.`, er2:`Das hängt seit neunzehn Jahren genau so da. Ich bin gründlich, nicht neugierig.`, wie:`trocken`, wie2:`bestimmt` },
         zuTief:{ er:`So von gestern bin ich nicht. Ich habe die halbe Elektrik hier umgebaut, bevor es einer verlangt hat.`, wie:`richtigstellend` } },
    C: { genau:{ er:`Da, wo es zählt, ja. Bei den Werkzeugen und beim Strom. Der Rest darf liegen.`, wie:`sachlich` },
         zuHoch:{ er:`Pedantisch bin ich nicht. Sehen Sie sich meinen Schreibtisch an, aber nicht zu lange.`, wie:`lachend` },
         zuTief:{ er:`Schlampig.`, erRegie:`Sie tippt auf die zwei leeren Umrisse an der Wand.`, er2:`Ich sehe von der Tür aus, dass zwei Sachen fehlen. Sagen Sie das noch mal.`, wie:`gedehnt`, wie2:`sehr trocken` } },
    E: { genau:{ er:`Ja.`, erRegie:`Sie lacht laut.`, er2:`Ich rede mit jedem hier, und mit den meisten mehr, als ihnen lieb ist.`, wie:`sofort`, wie2:`vergnügt` },
         zuHoch:{ er:`So laut bin ich auch wieder nicht. Nachts arbeite ich am liebsten, da ist keiner da.`, wie:`einschränkend` },
         zuTief:{ er:`Zurückhaltend.`, erRegie:`Sie sieht dich an und wartet einen Moment zu lang.`, er2:`Sie sind seit einer halben Stunde hier. Wie viel habe ich geredet und wie viel Sie?`, wie:`ungläubig`, wie2:`laut, freundlich` } },
    A: { genau:{ er:`Ich bin nicht unfreundlich. Ich sage es nur direkt, und das halten manche für dasselbe.`, wie:`sachlich` },
         zuHoch:{ er:`Nachgiebig.`, erRegie:`Sie zieht eine Augenbraue hoch.`, er2:`Fragen Sie mal oben, wie das war, als ich die Bauabteilung zusammengefaltet habe.`, wie:`gedehnt`, wie2:`trocken` },
         zuTief:{ er:`Ganz so hart bin ich nicht. Ich trage nichts nach, das ist mehr, als die meisten von sich sagen können.`, wie:`einschränkend` } },
    N: { genau:{ er:`Umwerfen tut mich wenig. Ich stehe nachts um drei im Wasser und schlafe danach weiter.`, wie:`gelassen` },
         zuHoch:{ er:`Dünnhäutig.`, erRegie:`Sie lacht kurz.`, er2:`Ich habe zwei Wasserschäden, einen Brand und vier Leitungen überstanden. Was soll mich denn umwerfen?`, wie:`ungläubig`, wie2:`fest` },
         zuTief:{ er:`Ganz kalt lässt mich auch nicht alles. Ralf geht seit drei Wochen nicht ans Telefon.`, wie:`leiser` } }
  },
  m: {
    FRE: { genau:{ er:`Ungefähr. Ich mache lieber, als ich beantrage — aber bei Strom halte ich mich an jeden Buchstaben, da ist die Vorschrift klüger als ich.`, wie:`abwägend` },
           zuHoch:{ er:`So eigenmächtig bin ich nicht. Ich melde alles, und zwar schriftlich, damit es hinterher jemand nachlesen kann.`, wie:`richtigstellend` },
           zuTief:{ er:`Verlässlichkeit.`, erRegie:`Sie zieht eine Dichtung aus der Kitteltasche und legt sie auf den Tisch.`, er2:`Zwei Euro achtzig, selbst gekauft, weil das Formular drei Wochen gedauert hätte. So verlässlich bin ich.`, wie:`trocken`, wie2:`sehr bestimmt` } },
    GEL: { genau:{ er:`Ja.`, erRegie:`Sie nickt sofort, ohne eine Spur von Verlegenheit.`, er2:`Und das ist keine Eitelkeit. Ich habe zweimal vorher gesagt, wo es knallt, und beide Male hat es genau da geknallt. Ich will nicht bewundert werden, ich will beim nächsten Mal gefragt werden.`, wie:`sofort`, wie2:`laut und sehr klar` },
           zuHoch:{ er:`Auf eine Bühne muss ich nicht. Mir reicht, dass mein Name unter dem steht, was ich gemacht habe.`, wie:`einschränkend` },
           zuTief:{ er:`Dazugehören.`, erRegie:`Sie zeigt auf den angestrichenen Satz aus dem Jahresbericht an der Wand.`, er2:`Da steht reibungslos. Vier Wochenenden, und da steht reibungslos. Wenn mir das gleich wäre, hinge das Blatt nicht da.`, wie:`gedehnt`, wie2:`sehr deutlich` } }
  }
},

/* --- Wiedersehen und Abschied. ------------------------------------ */

wiedersehen: [
  { ab:70, regie:`Sie hört dich auf dem Gang und ruft, bevor du in der Tür stehst.`,
    er:`Da sind Sie ja. Kommen Sie rein, ich habe Kaffee und zwanzig Minuten.`, wie:`laut, ehrlich erfreut`, stimmung:`freundlich` },
  { ab:50, regie:`Sie sieht auf, nickt und schiebt den Hocker mit dem Fuß zu dir herüber.`,
    er:`Setzen Sie sich. Ich mache dabei weiter, das stört Sie hoffentlich nicht.`, wie:`freundlich, beschäftigt`, stimmung:`neutral` },
  { ab:30, regie:`Sie arbeitet weiter und sieht nicht auf.`,
    er:`Was gibt es denn?`, wie:`knapp, nicht unfreundlich`, stimmung:`skeptisch` },
  { ab:-999, regie:`Sie legt das Werkzeug hin, dreht sich ganz zu dir um und verschränkt die Arme.`,
    er:`Ja?`, wie:`sehr höflich, und das ist bei ihr das schlechteste Zeichen`, stimmung:`verschlossen` }
],

abschied: [
  { ab:70, regie:`Sie bringt dich bis zum Ende des Gangs und hält dir die Tür auf.`,
    er:`Kommen Sie wieder. Und sagen Sie mir dann, was aus der Sache geworden ist, ich merke mir so was.`,
    wie:`laut, warm`, stimmung:`freundlich`, bez:3 },
  { ab:50, regie:`Sie steht auf und wischt sich die Hände ab.`,
    er:`War gut. Sie wissen ja, wo ich bin — Tür ist immer offen.`, wie:`freundlich`, stimmung:`neutral`, bez:2 },
  { ab:30, regie:`Sie nickt und greift wieder nach dem Schraubenzieher.`,
    er:`Ja. Machen Sie es gut.`, wie:`kurz`, stimmung:`neutral`, bez:1 },
  { ab:-999, regie:`Sie sagt nichts und hält dir nur die Tür auf, die ohnehin offen steht.`,
    er:`Wiedersehen.`, wie:`höflich und leer`, stimmung:`verschlossen`, bez:0 }
],


});
