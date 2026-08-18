/* ═══════════════════════════════════════════════════════════════════
   Kai Dombrowski, Systemadministrator.

   Die fünfte Person, und die erste, die sich sorgt. Die vier anderen
   stehen alle bei minus eins oder minus zwei im Neurotizismus: kein
   Mensch in diesem Haus liegt nachts wach. Damit war die halbe Skala
   Zierde — die Deutung für ein hohes N stand in welt.js und ist nie
   ausgespielt worden. Er spielt sie aus.

   Er ist auch der Erste, bei dem irgendwo eine Null steht, und zwar
   zweimal: Extraversion und die erste Waage. Wer viermal gespielt hat,
   lernt sonst, dass die Mitte nie die Antwort ist. Bei ihm ist sie es,
   und beide Nullen sind Fallen mit Geschichte:

   Er redet zwanzig Minuten über einen Netzwerkschalter und schweigt
   danach fünf. Das ist keine Extraversion, das ist Angst mit Auslauf —
   wer das eine für das andere hält, rät zu hoch.

   Und er wollte die Freiheit, hat sie bekommen, und sie frisst ihn.
   Niemand redet ihm rein, niemand sieht hin, und beides ist dasselbe.
   Auf die Frage, ob er lieber selbst bestimmt oder lieber sicher ist,
   gibt es bei ihm keine Antwort. Er will beides, und darum kommt man
   über diese Waage nicht an ihn heran, sondern nur über seine Lage.

   Die Gesprächsregel ist neu und die eigentliche Lektion: bei ihm ist
   Trost eine Beleidigung. Wer ihn beruhigt, sagt ihm, dass seine Sorge
   albern ist. Wer ihn ernst nimmt und genau fragt, beruhigt ihn.
   Bei Vogt scheitert das Mitgefühl, weil sie es nicht braucht. Bei ihm
   scheitert es, weil es zu billig ist.
   ═══════════════════════════════════════════════════════════════════ */
PERSONEN.push({

id: `dombrowski`,
kurz: `Systemadministrator, 43. Kapuzenpulli unter dem Hemd, ein Becher
       kalter Kaffee, und ein Blick, der alle zwei Minuten zum Monitor geht.`,
theme: `kosmos`,
menubild: `personen/dombrowski/bilder/freundlich.webp`,

hero: {
  name: `Kai Dombrowski`, age: 43, job: `Systemadministrator`,
  ort: `Untergeschoss, Raum U 14, früher Kartenarchiv, kein Fenster`,
  /* Neugierig auf Werkzeug, ohne jede Ordnung, weder laut noch still,
     schnell schroff, und ständig einen Schritt weiter im Schlimmsten.

     Auf den Waagen steht er einmal genau in der Mitte: Freiheit hat er,
     Sicherheit hätte er gern, und er würde für keins von beiden das
     andere hergeben. Gesehen werden will er ein bisschen — nicht auf
     einer Bühne, sondern in einem Protokoll. */
  z: { O: 1, C: -2, E: 0, A: -1, N: 2 },
  m: { FRE: 0, GEL: 1 }
},

/* Das Klischee über Systemadministratoren: still, systematisch,
   nachtaktiv und durch nichts umzuwerfen. Drei davon sind falsch, und
   die letzte ist das genaue Gegenteil. Nur die Neugier stimmt. */
rollenprior: { E: -0.6, C: 0.7, N: -0.5, O: 0.4 },

rollentext: `Systemadministrator: das Klischee sagt still, systematisch, nachtaktiv und durch nichts aus der Ruhe zu bringen.`,

stimmungen: {
  neutral:      { t:`konzentriert`, bild:`personen/dombrowski/bilder/neutral.webp` },
  freundlich:   { t:`freundlich`,   bild:`personen/dombrowski/bilder/freundlich.webp` },
  amuesiert:    { t:`sarkastisch`,  bild:`personen/dombrowski/bilder/amuesiert.webp` },
  interessiert: { t:`hellwach`,     bild:`personen/dombrowski/bilder/interessiert.webp` },
  nachdenklich: { t:`nachdenklich`, bild:`personen/dombrowski/bilder/nachdenklich.webp` },
  skeptisch:    { t:`misstrauisch`, bild:`personen/dombrowski/bilder/skeptisch.webp` },
  gereizt:      { t:`gereizt`,      bild:`personen/dombrowski/bilder/gereizt.webp` },
  verschlossen: { t:`verschlossen`, bild:`personen/dombrowski/bilder/verschlossen.webp` },
  geruehrt:     { t:`getroffen`,    bild:`personen/dombrowski/bilder/geruehrt.webp` },
  abweisend:    { t:`abweisend`,    bild:`personen/dombrowski/bilder/abweisend.webp` }
},

raumbild: ``,

/* --- Ankunft. Der Empfang läuft ab, dann hast du genau eine Frage. -- */

baum: {
  start: {
    regie: `Die Treppe in den Keller, letzte Tür, kein Schild. Dahinter ist es kalt und laut: zwei Reihen schwarze Schränke, dazwischen ein Gang von achtzig Zentimetern. Er sitzt am Ende auf einem Rollwagen, den Laptop auf den Knien.`,
    er: `Zwei Minuten. Wenn ich jetzt aufstehe, fängt der wieder von vorn an.`,
    wie: `laut, gegen das Rauschen, ohne aufzusehen`, stimmung: `neutral`,
    erRegie: `Irgendwo hört ein Ton auf. Er atmet aus, klappt den Laptop zu und dreht sich auf dem Wagen zu dir herum.`,
    er2: `So. Sie sind der Termin. Setzen Sie sich — nicht auf den Karton, da ist was drin.`,
    wie2: `schneller, als er selbst erwartet hat`,
    nachRegie: `Er schiebt dir einen Bürostuhl ohne Lehne zu und bleibt selbst auf dem Rollwagen sitzen. Die Lüfter rauschen so gleichmäßig, dass man es nach zwei Minuten nicht mehr hört. Ihr habt vierzig Minuten, und du hast dir vorgenommen, dein Anliegen bis zum Schluss zurückzuhalten.`,
    frage: true
  },

  schraenke: {
    er: `Vierzehn. Zwölf laufen, einer ist leer, einer ist von 2006 und darf nicht ausgehen.`,
    erRegie: `Er zeigt mit dem Kinn auf den zweiten von links, an dem ein handgeschriebener Zettel klebt.`,
    er2: `Da hängt seit neun Jahren ein Zettel dran mit NICHT AUSSCHALTEN. Ich habe den nicht geschrieben. Ich traue mich nur nicht, ihn abzumachen.`,
    wie: `sachlich`, wie2: `trocken, und es ist kein Witz`, stimmung: `amuesiert`,
    fakt: `an einem Schrank von 2006 hängt ein Zettel, den er nicht abzunehmen wagt`, spur: `altzettel`, ende: true
  },
  kalt: {
    er: `Achtzehn Grad, und das ist zu warm.`,
    erRegie: `Er sieht kurz nach oben, wo ein Lüftungsgitter sitzt.`,
    er2: `Ich sitze hier seit elf Jahren im Pulli. Manchmal gehe ich raus auf den Gang, nur um zu merken, wie sich normale Luft anfühlt.`,
    wie: `beiläufig`, wie2: `beiläufig, und dann eine Spur zu lang still`, stimmung: `neutral`,
    fakt: `sitzt seit elf Jahren bei achtzehn Grad im Pulli`, ende: true
  },
  zettel: {
    er: `Das sind Sachen, die ich noch machen muss.`,
    erRegie: `Am Monitorrahmen kleben Haftzettel in drei Farben, dicht an dicht, manche übereinander.`,
    er2: `Vierundvierzig Stück. Ich habe sie mal gezählt, das war ein Fehler. Seitdem weiß ich, dass es vierundvierzig sind.`,
    wie: `knapp`, wie2: `mit einem kurzen, freudlosen Lachen`, stimmung: `nachdenklich`,
    fakt: `hat vierundvierzig unerledigte Haftzettel am Monitor und weiß die Zahl`, spur: `zettel`, ende: true
  }
},

kennenfrage: [
  { t: `Wie viele von diesen Schränken sind das?`, wie: `sachlich, mit einem Blick den Gang hinunter`, ziel: `schraenke` },
  { t: `Ist das hier immer so kalt?`, wie: `beiläufig, die Hände in den Taschen`, ziel: `kalt` },
  { t: `Was sind das für Zettel an Ihrem Monitor?`, wie: `neugierig, ohne Wertung`, ziel: `zettel` }
],

uebergang1: {
  duFest: `Du erzählst in zwei Sätzen, was du machst. Ein Projekt, das dir über den Kopf wächst. Davon später, sagst du.`,
  er: `Über den Kopf. Ja. Kenne ich. Erzählen Sie später, ich höre erst mal zu.`,
  erRegie: `Er stellt den Laptop auf den Boden, überlegt es sich anders und legt ihn auf die Knie zurück, zugeklappt.`,
  wie: `zu schnell zugestimmt, als hätte er das Wort erkannt`, stimmung: `freundlich`
},

/* --- Neun Fragen zur Person. l = wie stark eine Antwort für welches
       Merkmal spricht. Sein N liegt bei plus zwei und sein C bei minus
       zwei; auf beides führen mehrere Wege. Die Extraversion bleibt mit
       Absicht unentschieden — er hat Antworten in beide Richtungen und
       meint beide ernst. ------------------------------------------- */

bigfive: [
  { id:`meldung`, q:`Jemand ruft an, irgendwas geht nicht. Was machen Sie zuerst?`,
    a:[
      {id:`hin`, wie:`sofort`, stimmung:`neutral`,
       t:`Hinlaufen. Bis ich das Ticket geschrieben habe, bin ich schon oben gewesen.`,
       l:{C:-1.9, E:0.5}, fakt:`läuft hin, statt Tickets zu schreiben`},
      {id:`system`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Ticket anlegen, Priorität setzen, abarbeiten. Sonst weiß hinterher keiner, was war.`,
       l:{C:2.1}},
      {id:`schlimm`, wie:`schneller werdend`, stimmung:`nachdenklich`,
       t:`Erst mal fragen, ob es nur bei ihm ist. Wenn es nicht nur bei ihm ist, ist es was anderes, und dann wird es ein langer Tag.`,
       l:{N:2.0, C:0.3}, fakt:`fragt zuerst, ob es nur bei einem ist`},
      {id:`ruhig`, wie:`gelassen`, stimmung:`neutral`,
       t:`Warten. In der Hälfte der Fälle ruft der Nächste an und sagt, es geht wieder.`,
       l:{N:-2.0, A:-0.5}}
    ]},

  { id:`doku`, q:`Wo steht das alles aufgeschrieben, was hier läuft?`,
    a:[
      {id:`kopf`, wie:`ohne Umschweife`, stimmung:`neutral`,
       t:`Im Kopf. Ich weiß, was ich gebaut habe.`,
       l:{C:-2.1}, fakt:`hat nichts aufgeschrieben, es steht in seinem Kopf`},
      {id:`ordner`, wie:`sachlich`, stimmung:`neutral`,
       t:`Im Betriebshandbuch, Stand letzten Monat. Ich schreibe jede Änderung rein, am selben Tag.`,
       l:{C:2.2}},
      {id:`angefangen`, wie:`halb entschuldigend`, stimmung:`nachdenklich`,
       t:`Ich habe dreimal angefangen. Einmal in einem Wiki, einmal in einer Tabelle, einmal in einem Programm, das inzwischen keiner mehr betreibt.`,
       l:{C:-1.6, O:1.1}, fakt:`hat die Dokumentation dreimal angefangen und dreimal das Werkzeug gewechselt`},
      {id:`niemand`, wie:`spitz`, stimmung:`amuesiert`,
       t:`Nirgends. Wollen Sie es aufschreiben? Ich diktiere.`,
       l:{A:-1.8, C:-0.9}}
    ]},

  { id:`nacht`, q:`Können Sie abschalten, wenn Sie hier rausgehen?`,
    a:[
      {id:`nein`, wie:`ohne Zögern, fast erleichtert, dass gefragt wird`, stimmung:`nachdenklich`,
       t:`Nein. Ich wache gegen halb vier auf und gehe durch, was heute hätte kaputtgehen können. Das dauert ungefähr zwanzig Minuten, dann schlafe ich wieder ein.`,
       l:{N:2.3}, fakt:`wacht gegen halb vier auf und geht durch, was kaputtgehen könnte`},
      {id:`sofort`, wie:`achselzuckend`, stimmung:`neutral`,
       t:`Sofort. Tür zu, Kopf aus. Es ist ja nur Arbeit.`,
       l:{N:-2.2}},
      {id:`telefon`, wie:`sachlich`, stimmung:`neutral`,
       t:`Das Diensthandy liegt neben dem Bett, aber es klingelt selten. Zweimal im Jahr vielleicht.`,
       l:{N:0.4, C:0.9}},
      {id:`weiter`, wie:`interessiert, plötzlich schneller`, stimmung:`interessiert`,
       t:`Abschalten nicht, aber anders. Abends probiere ich Sachen aus, die hier keiner haben will.`,
       l:{O:2.0, N:0.4}}
    ]},

  { id:`neues`, q:`Es gibt ein neues Werkzeug für das, was Sie machen. Was passiert?`,
    a:[
      {id:`sofortprobieren`, wie:`schon halb beim Laptop`, stimmung:`interessiert`,
       t:`Ich installiere es am selben Abend. Auf einer Testmaschine, meistens.`,
       l:{O:2.1, C:-0.8}, fakt:`probiert neue Werkzeuge noch am selben Abend aus`},
      {id:`pruefen`, wie:`bedächtig`, stimmung:`neutral`,
       t:`Ich lese, wer es betreibt und wie lange es das schon gibt. Dann in einem Jahr noch mal.`,
       l:{C:1.6, O:-0.6}},
      {id:`bleibt`, wie:`abwehrend`, stimmung:`skeptisch`,
       t:`Nichts. Was läuft, läuft. Jede Umstellung ist eine Gelegenheit für einen Ausfall.`,
       l:{O:-2.0, N:0.8}},
      {id:`unterschied`, wie:`trocken`, stimmung:`amuesiert`,
       t:`Ich sehe mir an, was es besser kann, und meistens ist die Antwort: das Logo.`,
       l:{A:-1.3, O:0.5}}
    ]},

  { id:`nutzer`, q:`Wie ist das mit den Leuten hier im Haus?`,
    a:[
      {id:`geduldig`, wie:`freundlich`, stimmung:`freundlich`,
       t:`Die können ja nichts dafür. Ich erkläre es lieber dreimal, als dass einer sich nicht traut zu fragen.`,
       l:{A:2.0}},
      {id:`kurz`, wie:`knapp, ohne Bosheit`, stimmung:`neutral`,
       t:`Ich mache es und rede nicht lange. Die wollen, dass es geht, nicht warum.`,
       l:{A:-1.4, E:-0.6}},
      {id:`aerger`, wie:`hörbar gereizt`, stimmung:`gereizt`,
       t:`Manche schreiben mir dreimal am Tag und nie, was tatsächlich auf dem Bildschirm steht. Nach elf Jahren nervt das.`,
       l:{A:-2.0, N:0.6}, fakt:`ärgert sich, dass ihm niemand schreibt, was auf dem Bildschirm steht`},
      {id:`gerne`, wie:`lebhafter, als du erwartet hättest`, stimmung:`freundlich`,
       t:`Ich gehe ganz gern hoch. Da redet wenigstens jemand mit mir, und sei es über einen Drucker.`,
       l:{E:2.0, A:0.6}}
    ]},

  { id:`feierabend`, q:`Wann sind Sie hier abends raus?`,
    a:[
      {id:`spaet`, wie:`gleichmütig`, stimmung:`neutral`,
       t:`Wenn nichts mehr blinkt. Manchmal um sechs, manchmal um neun.`,
       l:{C:-1.0, N:0.7}},
      {id:`punkt`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Halb fünf. Ich habe mir das angewöhnt, weil ich sonst nicht aufhöre.`,
       l:{C:1.8}},
      {id:`leute`, wie:`aufgeräumt`, stimmung:`freundlich`,
       t:`Kommt drauf an. Freitags steht unten manchmal einer am Automaten, dann bleibe ich hängen.`,
       l:{E:2.0}},
      {id:`allein`, wie:`ruhig`, stimmung:`neutral`,
       t:`Wenn das Haus leer ist. Dann kann ich Sachen anfassen, ohne dass gleich einer schreit.`,
       l:{E:-1.9, O:0.4}}
    ]},

  { id:`fehler`, q:`Sie haben mal was kaputt gemacht. Was passiert dann?`,
    a:[
      {id:`tagelang`, wie:`sehr genau, als hätte er es oft erzählt`, stimmung:`nachdenklich`,
       t:`Dann sitze ich das noch drei Wochen aus. Nicht die Sache, die ist nach zwei Stunden erledigt. Ich meine mich.`,
       l:{N:2.2}, fakt:`trägt eigene Fehler wochenlang mit sich herum`},
      {id:`melden`, wie:`sachlich`, stimmung:`neutral`,
       t:`Ich sage es und schreibe auf, was ich gemacht habe. Dann kann es nachher jeder nachlesen.`,
       l:{C:1.9, E:0.5}},
      {id:`still`, wie:`beiläufig, zu beiläufig`, stimmung:`neutral`,
       t:`Ich richte es, bevor es einer merkt. Kommt selten vor, dass es einer merkt.`,
       l:{C:-1.2, A:-0.8, N:0.5}},
      {id:`egal`, wie:`achselzuckend`, stimmung:`neutral`,
       t:`Nichts. Passiert. Das ist ein Beruf, in dem man Sachen kaputt macht.`,
       l:{N:-2.1, A:-0.4}}
    ]},

  { id:`vorgabe`, q:`Von oben kommt eine Vorgabe, die Sie für falsch halten.`,
    a:[
      {id:`sagen`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Ich schreibe hin, warum das nicht geht. Ausführlich. Meistens antwortet keiner.`,
       l:{A:-1.0, C:0.7, N:0.6}, fakt:`schreibt ausführliche Einwände, auf die niemand antwortet`},
      {id:`umgehen`, wie:`trocken`, stimmung:`amuesiert`,
       t:`Ich mache es so, dass es aussieht wie die Vorgabe und funktioniert wie vorher.`,
       l:{A:-1.6, O:1.0}},
      {id:`machen`, wie:`ergeben`, stimmung:`nachdenklich`,
       t:`Ich mache es. Und rechne damit, dass ich es in einem Jahr wieder zurückbaue.`,
       l:{A:1.6, N:0.5}},
      {id:`nachfragen`, wie:`sachlich`, stimmung:`neutral`,
       t:`Ich frage nach, was der Zweck ist. Manchmal ist der Zweck vernünftig und der Weg nur schlecht beschrieben.`,
       l:{A:1.4, O:1.0}}
    ]},

  { id:`elfjahre`, q:`Elf Jahre in einem Raum ohne Fenster. Warum noch?`,
    a:[
      {id:`kenntes`, wie:`ruhig`, stimmung:`neutral`,
       t:`Weil ich weiß, wo hier alles liegt. Woanders wäre ich wieder der Neue, und ich bin gern nicht der Neue.`,
       l:{O:-1.6, N:0.9}},
      {id:`fastweg`, wie:`schneller`, stimmung:`nachdenklich`,
       t:`Zweimal war ich fast weg. Beide Male habe ich am Ende doch abgesagt, und beide Male habe ich mir hinterher Gründe dafür gesucht.`,
       l:{N:1.8, C:-1.0}, fakt:`hat zweimal eine andere Stelle abgesagt und sich hinterher Gründe gesucht`},
      {id:`gefaellt`, wie:`fast fröhlich`, stimmung:`freundlich`,
       t:`Weil es hier vierzehn Schränke gibt, an denen ich machen kann, was ich für richtig halte. Das kriegen Sie sonst nirgends.`,
       l:{O:1.4, A:-0.5}},
      {id:`plan`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Weil ich hier in vier Jahren fertig bin mit dem, was ich mir vorgenommen habe. Dann sehen wir weiter.`,
       l:{C:2.0, N:-0.8}}
    ]}
],

/* --- Sieben Fragen auf zwei Waagen. Bei ihm ist die erste Waage die
       schwierigste im ganzen Spiel: er hat auf Freiheit und auf
       Sicherheit ehrliche Antworten und meint beide. Wer ihn dort auf
       einen Pol festnagelt, liegt daneben — die Mitte ist die richtige
       Antwort, und sie ist keine Ausrede. ---------------------------- */

motivfragen: [
  { id:`wechsel`, q:`Was müsste eine andere Stelle haben, damit Sie wechseln?`,
    a:[
      {id:`freihand`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Dass mir keiner reinredet. Ich will nicht vier Wochen auf eine Freigabe warten für etwas, das ich in zwanzig Minuten mache.`,
       aff:{FRE:2.0}},
      {id:`sicher`, wie:`ebenso bestimmt`, stimmung:`neutral`,
       t:`Dass es eine zweite Person gibt. Damit nicht alles an einem hängt, wenn der krank wird.`,
       aff:{FRE:-2.0}, fakt:`will vor allem, dass nicht alles an einer Person hängt`},
      {id:`sichtbar`, wie:`etwas leiser`, stimmung:`nachdenklich`,
       t:`Dass irgendwo steht, was ich mache. Ein Satz im Bericht würde reichen.`,
       aff:{GEL:2.1}},
      {id:`team`, wie:`sachlich`, stimmung:`neutral`,
       t:`Dass ich mittags nicht allein esse. Klingt albern, ist es aber nicht.`,
       aff:{GEL:-2.0}}
    ]},

  { id:`guterTag`, q:`Woran merken Sie, dass ein Tag gut war?`,
    an:{ 'wechsel:sicher': `Sie sagten, es müsste eine zweite Person geben. Woran merken Sie denn, dass ein Tag gut war?` },
    a:[
      {id:`selbst`, wie:`zufrieden`, stimmung:`freundlich`,
       t:`Wenn ich etwas so bauen konnte, wie ich es für richtig halte, und keiner hat gefragt, warum.`,
       aff:{FRE:1.9}},
      {id:`nichts`, wie:`nüchtern`, stimmung:`neutral`,
       t:`Wenn nichts passiert ist. Kein Anruf, kein Alarm, nichts rot. Das ist der beste Tag, den es in meinem Beruf gibt.`,
       aff:{FRE:-2.0}, fakt:`hält den Tag für gut, an dem nichts passiert ist`},
      {id:`gemerkt`, wie:`ohne Nachdruck`, stimmung:`nachdenklich`,
       t:`Wenn einer sagt: gut, dass Sie das vorher gesehen haben. Das ist mir zweimal passiert, und ich weiß beide Male noch.`,
       aff:{GEL:2.0}, fakt:`weiß beide Male noch, als jemand seine Vorwarnung anerkannt hat`},
      {id:`kaffee`, wie:`beiläufig`, stimmung:`freundlich`,
       t:`Wenn ich unten am Automaten zehn Minuten gestanden habe und einer wollte was von mir, was nicht kaputt war.`,
       aff:{GEL:-2.0}}
    ]},

  { id:`nervt`, q:`Was ärgert Sie hier am meisten?`,
    a:[
      {id:`freigabe`, wie:`hörbar aufgebracht`, stimmung:`gereizt`,
       t:`Dass ich für ein Bauteil für vierzig Euro drei Unterschriften brauche und für eine Umstellung, die das halbe Haus betrifft, keine.`,
       aff:{FRE:2.1}},
      {id:`allein`, wie:`ernst`, stimmung:`nachdenklich`,
       t:`Dass ich der Einzige bin. Wenn ich mir ein Bein breche, steht das Haus, und das ist keine Redensart.`,
       aff:{FRE:-2.2}, fakt:`ist der Einzige, der die Anlage bedienen kann`},
      {id:`unsichtbar`, wie:`kühl`, stimmung:`verschlossen`,
       t:`Dass man mich nur kennt, wenn was kaputt ist. Elf Jahre lang läuft alles, und im Jahresbericht steht die Kantine.`,
       aff:{GEL:2.2}},
      {id:`dritter`, wie:`leiser`, stimmung:`nachdenklich`,
       t:`Dass hier unten niemand vorbeikommt. Der Keller ist eine Sackgasse, das ist auch baulich so.`,
       aff:{GEL:-2.0}}
    ]},

  { id:`aendern`, q:`Wenn Sie hier morgen eine Sache ändern dürften — welche?`,
    an:{ 'nervt:allein': `Und wenn Sie nicht mehr der Einzige wären: was käme als Nächstes?` },
    a:[
      {id:`budget`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Ein Betrag im Jahr, über den ich allein entscheide. Dreitausend, und ich muss mit niemandem reden.`,
       aff:{FRE:2.0}},
      {id:`zweite`, wie:`sofort`, stimmung:`neutral`,
       t:`Eine zweite Stelle. Eine halbe würde reichen. Sie ist seit 2019 im Plan und seit 2019 nicht besetzt.`,
       aff:{FRE:-2.1}, fakt:`die zweite Stelle steht seit 2019 im Plan und ist nie besetzt worden`},
      {id:`bericht`, wie:`fast verlegen und trotzdem deutlich`, stimmung:`nachdenklich`,
       t:`Ein Absatz im Jahresbericht über das, was hier unten läuft. Vier Sätze. Ich würde sie sogar selbst schreiben.`,
       aff:{GEL:2.0}},
      {id:`tuer`, wie:`beiläufig`, stimmung:`freundlich`,
       t:`Ich würde hochziehen. Egal welcher Stock, Hauptsache, es geht jemand vorbei.`,
       aff:{GEL:-2.1}}
    ]},

  { id:`nichts`, q:`Und wenn sich nichts ändert?`,
    a:[
      {id:`weiter`, wie:`gleichmütig`, stimmung:`neutral`,
       t:`Dann mache ich weiter wie bisher. Es läuft ja, und es läuft, weil ich es so gebaut habe.`,
       aff:{FRE:1.8}},
      {id:`irgendwann`, wie:`sehr ruhig`, stimmung:`nachdenklich`,
       t:`Dann geht es irgendwann schief, und dann fragt mich einer, warum ich nichts gesagt habe. Ich habe es gesagt. Ich habe es siebenmal gesagt.`,
       aff:{FRE:-1.9}, fakt:`hat siebenmal gewarnt und es liegt schriftlich vor`},
      {id:`aufschreiben`, wie:`trocken`, stimmung:`skeptisch`,
       t:`Dann schreibe ich weiter Mails, die keiner liest. Ich hebe sie auf. Nicht aus Trotz — damit es sie gibt.`,
       aff:{GEL:1.9}},
      {id:`bleibt`, wie:`achselzuckend`, stimmung:`neutral`,
       t:`Dann bleibe ich trotzdem. Die Leute hier sind in Ordnung, das ist nicht nichts.`,
       aff:{GEL:-1.9}}
    ]},

  { id:`reinreden`, q:`Wer redet Ihnen rein, wenn Sie etwas anders machen wollen?`,
    a:[
      {id:`keiner`, wie:`erst zufrieden, dann eine Spur langsamer`, stimmung:`neutral`,
       t:`Niemand. Was hier unten passiert, ist meins. Ich kann heute Nachmittag das halbe Netz umbauen und keiner merkt es.`,
       aff:{FRE:1.9}, fakt:`kann hier unten alles allein entscheiden, und niemand merkt es`},
      {id:`vorschrift`, wie:`sachlich`, stimmung:`neutral`,
       t:`Bei allem, was Personaldaten anfasst, die Vorschrift. Und das ist gut so, da will ich gar nicht entscheiden dürfen.`,
       aff:{FRE:-2.0}},
      {id:`protokoll`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Ich entscheide und schreibe eine Mail an drei Leute, dass ich es entschieden habe. Damit es einen Absender hat.`,
       aff:{GEL:1.8}},
      {id:`fragen`, wie:`freundlich`, stimmung:`freundlich`,
       t:`Ich frage vorher die zwei, die davon betroffen sind. Kostet fünf Minuten und spart mir eine Woche.`,
       aff:{GEL:-1.9}}
    ]},

  { id:`entscheiden`, q:`Wie entscheiden Sie so etwas?`,
    an:{ 'reinreden:keiner': `Wenn Ihnen keiner reinredet — wie entscheiden Sie es dann?` },
    a:[
      {id:`sofort`, wie:`zügig`, stimmung:`neutral`,
       t:`Aus dem Bauch, und dann korrigiere ich unterwegs. Ich mache das seit zwanzig Jahren.`,
       aff:{FRE:1.8}},
      {id:`absichern`, wie:`bedächtig`, stimmung:`nachdenklich`,
       t:`Ich baue es nach, teste es, und mache trotzdem vorher eine Sicherung. Zweimal. Auf zwei Geräten.`,
       aff:{FRE:-2.0}, fakt:`macht vor Änderungen zwei Sicherungen auf zwei Geräten`},
      {id:`schriftlich`, wie:`sachlich`, stimmung:`neutral`,
       t:`Ich schreibe vorher auf, was ich vorhabe, und schicke es rum. Dann steht es fest, auch wenn niemand antwortet.`,
       aff:{GEL:1.9}},
      {id:`anrufen`, wie:`wärmer`, stimmung:`freundlich`,
       t:`Ich rufe Bettina in Kassel an. Wir haben zusammen gelernt, und sie hat dasselbe Problem in größer.`,
       aff:{GEL:-2.1}, fakt:`ruft bei Entscheidungen Bettina an, mit der er zusammen gelernt hat`}
    ]}
],

/* --- Was ihn privat bewegt. Dieselben vier Kennungen wie bei den
       anderen, weil die Waren darauf zeigen. ----------------------- */

privat: {
  grenze: 10,
  felder: [
    { id:`musik`,     was:`Feierabend`, wahr:`spielt seit elf Jahren mit denselben fünf Leuten, die er nie getroffen hat` },
    { id:`werkstatt`, was:`zu Hause`,   wahr:`restauriert einen Rechner von 1985 und kommt seit zwei Jahren nicht über das Netzteil hinaus` },
    { id:`tochter`,   was:`Familie`,    wahr:`sein Sohn ist neun, wohnt in Hannover und ist jedes zweite Wochenende da` },
    { id:`plan60`,    was:`Zukunft`,    wahr:`hat eine Kündigung geschrieben und schickt sie seit sieben Monaten nicht ab` }
  ]
},

privatfragen: [
  { id:`feierabend`, gibt:`musik`, auf:1,
    q:`Was machen Sie, wenn Sie hier raus sind?`,
    offen: { er:`Dienstag und Donnerstag ab neun sitze ich mit fünf Leuten zusammen. Online, eine feste Runde.`,
             erRegie:`Er sagt es erst schnell, dann langsamer.`,
             er2:`Elf Jahre. Ich weiß, wie deren Kinder heißen. Getroffen habe ich keinen von denen, nicht ein einziges Mal.`,
             wie:`beiläufig`, wie2:`nüchtern, und er sieht dabei auf den Boden`, stimmung:`nachdenklich`,
             fakt:`spielt seit elf Jahren mit fünf Leuten, die er nie getroffen hat` },
    zu:    { er:`Nach Hause.`, wie:`knapp`, stimmung:`verschlossen` } },

  { id:`zuhause`, gibt:`werkstatt`, auf:1,
    q:`Schrauben Sie zu Hause auch noch an Technik?`,
    an:{ zettel:`Vierundvierzig Zettel hier. Liegt zu Hause auch was Angefangenes?` },
    offen: { er:`Ein C64 von 1985. Steht seit zwei Jahren offen auf dem Küchentisch.`,
             erRegie:`Er lacht kurz.`,
             er2:`Das Netzteil ist das Problem. Ich habe drei Ersatzteile hier liegen und jedes Mal, wenn ich anfange, finde ich einen Grund, es an dem Abend nicht zu machen.`,
             wie:`schneller, mit sichtlichem Vergnügen`, wie2:`langsamer, ohne Vergnügen`, stimmung:`nachdenklich`,
             fakt:`der C64 steht seit zwei Jahren offen auf dem Küchentisch, wegen des Netzteils` },
    zu:    { er:`Zu Hause fasse ich nichts an, was einen Stecker hat.`, wie:`abweisend`, stimmung:`skeptisch` } },

  { id:`familie`, gibt:`tochter`, auf:2,
    q:`Und privat — gibt es da jemanden?`,
    offen: { er:`Einen Sohn. Neun. Der wohnt in Hannover bei seiner Mutter.`,
             erRegie:`Er greift nach dem Kaffeebecher, merkt, dass er kalt ist, und stellt ihn wieder hin.`,
             er2:`Jedes zweite Wochenende. Ich hole ihn freitags vom Zug und bringe ihn sonntags hin, und dazwischen sind sechsundvierzig Stunden, in denen ich versuche, nicht aufs Telefon zu sehen.`,
             wie:`sehr sachlich`, wie2:`leiser, sehr genau`, stimmung:`geruehrt`,
             fakt:`hat seinen Sohn jedes zweite Wochenende und versucht dann, nicht aufs Telefon zu sehen` },
    zu:    { er:`Das führt jetzt zu weit.`, wie:`abschließend`, stimmung:`verschlossen` } },

  { id:`weiter`, gibt:`plan60`, auf:2,
    q:`Und Sie selbst, wo wollen Sie noch hin?`,
    an:{ 'elfjahre:fastweg':`Sie sagten, zweimal fast weg. Wie steht es damit heute?` },
    offen: { er:`Die Kündigung liegt geschrieben in einem Ordner auf dem Rechner.`,
             erRegie:`Er sagt es und sieht dich zum ersten Mal in dem Gespräch ganz an.`,
             er2:`Seit sieben Monaten. Ich habe sie viermal überarbeitet. Ich weiß nicht, ob ich sie abschicken will oder ob ich nur wissen will, dass es sie gibt.`,
             wie:`ohne jede Dramatik`, wie2:`ruhig, sehr klar`, stimmung:`nachdenklich`,
             fakt:`hat seine Kündigung geschrieben, viermal überarbeitet und nie abgeschickt` },
    zu:    { er:`Ich bin dreiundvierzig. Wo soll ich denn hin.`, wie:`abwiegelnd`, stimmung:`skeptisch` } },

  /* Die plumpen Fragen. Sie liefern fast sicher, kosten aber das Dreifache. */
  { id:`direkt`, gibt:`musik`, auf:3, plump:true,
    q:`Erzählen Sie doch mal was von sich privat.`,
    offen: { er:`Ich spiele. Online, mit Leuten.`, wie:`knapp, mit einem Blick zum Monitor`, stimmung:`skeptisch`,
             nachEr:`Reicht das? Ich bin nicht besonders interessant, das ist keine Koketterie.`,
             fakt:`spielt seit elf Jahren mit fünf Leuten, die er nie getroffen hat` },
    zu:    { er:`Nein.`, erRegie:`Er klappt den Laptop auf und wieder zu, ohne hineinzusehen.`,
             er2:`Sie sind seit zwanzig Minuten hier und haben mich nach nichts gefragt, was mit mir zu tun hat. Und jetzt auf einmal alles.`,
             wie:`sofort`, wie2:`gereizt, und darunter etwas anderes`, stimmung:`gereizt` } },

  { id:`kinder`, gibt:`tochter`, auf:3, plump:true,
    q:`Sind Sie verheiratet? Kinder?`,
    offen: { er:`Geschieden. Ein Sohn, neun, in Hannover.`, wie:`sehr sachlich, in einem Zug`, stimmung:`verschlossen`,
             fakt:`hat seinen Sohn jedes zweite Wochenende und versucht dann, nicht aufs Telefon zu sehen` },
    zu:    { er:`Was hat das mit den Schränken zu tun?`,
             wie:`nicht laut, und trotzdem eine Wand`, stimmung:`gereizt` } },

  { id:`geld`, gibt:`plan60`, auf:3, plump:true,
    q:`Verdient man denn gut in dem Beruf?`,
    offen: { er:`Außerhalb ja. Hier nicht, hier bin ich eine Entgeltgruppe unter dem, was das ist.`,
             erRegie:`Er merkt selbst, wie schnell die Zahl kam.`,
             er2:`Ich habe das mal ausgerechnet. Über elf Jahre. Man sollte solche Sachen nicht ausrechnen.`,
             wie:`erst spitz, dann still`, stimmung:`nachdenklich`,
             fakt:`hat ausgerechnet, was ihn elf Jahre in dieser Entgeltgruppe gekostet haben` },
    zu:    { er:`Das fragt man nicht.`, wie:`sehr kurz`, stimmung:`gereizt` } }
],

hinausgeworfen: {
  regie: `Er steht vom Rollwagen auf, schiebt ihn mit dem Fuß an die Wand und nimmt den Laptop unter den Arm.`,
  er: `Ich muss weitermachen. Der da hinten piept, seit Sie da sind, und ich habe die ganze Zeit nur so getan, als hörte ich das nicht.`,
  wie: `hastig, unhöflich, ohne dass er es merkt`, stimmung: `abweisend`
},

/* --- Was gerade bei ihm los ist. Zehn Lagen, je drei Wege hinein.

       Bei ihm trägt das Genaue: wer nachfragt, wie schlimm es wirklich
       ist, nimmt ihn ernst. Wer beruhigt, sagt ihm, dass seine Sorge
       albern ist — und das ist bei ihm der teuerste Fehler im Spiel.
       Genauso teuer: ihm zu unterstellen, er habe das doch bestimmt
       alles ordentlich aufgeschrieben. ----------------------------- */

zustaende: [

{ id:`ausfall`, titel:`Vierzehn Stunden am Samstag`,
  regie:`An einem der Schränke klebt ein frisches Stück Kreppband mit einem handgeschriebenen Datum. Daneben steht ein Karton, aus dem Kabel hängen.`,
  er:`Samstag. Von halb sieben morgens bis abends um zehn war hier alles aus.`,
  wie:`sachlich, und einen Ton zu schnell`, stimmung:`neutral`,
  bedarf:{ id:`ausfall_gel`, was:`will, dass einer nachliest, woran es lag, statt zu fragen, warum es so lange gedauert hat`, braucht:{GEL:1.6, FRE:-0.7} },
  fragen:[
    { id:`woran`, t:`Woran hat es am Ende gelegen?`, wie:`sachlich, ohne Vorwurf im Ton`,
      liest:{N:1.0, C:-0.5, O:0.5},
      gut:{ er:`An einem Netzteil für achtzig Euro, das seit vier Jahren auf der Ersatzliste steht.`,
            erRegie:`Er zieht das Teil aus dem Karton und legt es zwischen euch auf den Boden.`,
            er2:`Ich habe vierzehn Stunden gesucht, weil ich es nicht glauben konnte. Ein Netzteil macht so was nicht halb kaputt. Dieses schon.`,
            wie:`nüchtern`, wie2:`schneller, sehr genau`, stimmung:`interessiert`,
            fakt:`der Ausfall lag an einem Netzteil für achtzig Euro, das seit vier Jahren auf der Ersatzliste stand`, bez:8 },
      zu:{ er:`Hardware.`, wie:`abschließend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`halbsoschlimm`, t:`Am Ende lief es ja wieder. So schlimm war es dann nicht.`, wie:`aufmunternd`,
      liest:{N:-1.4, A:0.6},
      gut:{ er:`Stimmt schon. Montag hat es keinen mehr interessiert.`, wie:`müde`, stimmung:`nachdenklich`, bez:2 },
      zu:{ er:`Nicht schlimm.`,
           erRegie:`Er sieht dich an und sagt eine Weile nichts.`,
           er2:`Ich habe um vier Uhr nachmittags auf dem Boden gesessen und nicht mehr gewusst, was ich noch probieren soll. Sagen Sie mir bitte nicht, dass das nicht schlimm war. Sagen Sie ruhig, dass es Ihnen egal ist, aber nicht, dass es nicht schlimm war.`,
           wie:`langsam`, wie2:`sehr ruhig, und das ist das Schlimme daran`, stimmung:`gereizt`, bez:-8 } },

    { id:`gefragt`, t:`Hat Sie hinterher jemand gefragt, was passiert ist?`, wie:`schlicht`,
      liest:{N:0.9, A:-0.5},
      gut:{ er:`Einer. Ob es sich wiederholen kann.`,
            erRegie:`Er zuckt mit einer Schulter.`,
            er2:`Ich habe drei Seiten geschrieben. Ich weiß nicht, ob die jemand gelesen hat, ich weiß nur, dass ich sie geschrieben habe.`,
            wie:`trocken`, wie2:`ohne Bitterkeit, was es schlimmer macht`, stimmung:`nachdenklich`,
            fakt:`hat nach dem Ausfall drei Seiten geschrieben und weiß nicht, ob sie jemand gelesen hat`, bez:6 },
      zu:{ er:`Wird schon jemand.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`audit`, titel:`Die Prüfung im November`,
  regie:`Auf dem Rollwagen liegt ein neuer Ordner mit Registerblättern. Er ist leer, die Blätter sind unbeschriftet.`,
  er:`Im November kommt eine Prüfung. IT-Sicherheit, extern, drei Tage.`,
  wie:`nüchtern, mit einem Blick auf den Ordner`, stimmung:`neutral`,
  bedarf:{ id:`audit_sic`, was:`soll belegen, was er nie aufgeschrieben hat`, braucht:{FRE:-1.8} },
  fragen:[
    { id:`waspruefen`, t:`Was genau wollen die sehen?`, wie:`sachlich, konkret`,
      liest:{N:1.1, C:-0.6},
      gut:{ er:`Was läuft, wer drankommt, und wann es zuletzt geprüft wurde.`,
            erRegie:`Er tippt mit dem Finger auf den leeren Ordner.`,
            er2:`Das erste weiß ich. Das zweite weiß ich auch. Das dritte gibt es nicht, weil ich es nie aufgeschrieben habe. Elf Jahre lang war es nie nötig.`,
            wie:`präzise`, wie2:`langsamer werdend`, stimmung:`interessiert`,
            fakt:`kann für die Prüfung nicht belegen, wann zuletzt geprüft wurde`, bez:8 },
      zu:{ er:`Papier.`, wie:`knapp`, stimmung:`verschlossen`, bez:-2 } },

    { id:`bestimmtalles`, t:`Sie haben das doch sicher alles sauber dokumentiert.`, wie:`anerkennend`,
      liest:{C:1.5},
      gut:{ er:`Das meiste, ja.`, wie:`vorsichtig`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Nein.`,
           erRegie:`Er sagt es sofort und ohne jeden Versuch, es abzumildern.`,
           er2:`Ich habe gar nichts sauber dokumentiert. Das ist genau das Problem, und wenn Sie mir jetzt sagen, dass das schon irgendwie passt, dann haben Sie mir nicht zugehört.`,
           wie:`hart`, wie2:`sehr direkt`, stimmung:`gereizt`, bez:-7 } },

    { id:`wasdann`, t:`Und wenn die etwas beanstanden — was passiert dann?`, wie:`ruhig, ohne Alarm im Ton`,
      liest:{N:1.2, O:0.4},
      gut:{ er:`Dann kommt eine Frist und danach eine zweite Prüfung.`,
            erRegie:`Er schiebt den Ordner ein Stück von sich weg.`,
            er2:`Das Schlimmste ist nicht die Frist. Das Schlimmste ist, dass dann jemand von außen aufschreibt, wie es hier aussieht, und dass das dann stimmt.`,
            wie:`sachlich`, wie2:`sehr leise`, stimmung:`nachdenklich`, bez:7 },
      zu:{ er:`Sehen wir dann.`, wie:`abwehrend`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`firma`, titel:`Das Angebot der Firma`,
  regie:`Auf dem Boden neben dem Rollwagen liegt eine Mappe mit einem Firmenlogo. Sie ist aufgeschlagen, an einer Seite mit den Zahlen.`,
  er:`Die wollen die Systembetreuung vergeben. Eine Firma, ab Januar, mit Rufbereitschaft und allem.`,
  wie:`nüchtern`, stimmung:`neutral`,
  bedarf:{ id:`firma_sic`, was:`weiß nicht, ob es die Stelle in einem Jahr noch gibt`, braucht:{FRE:-1.4} },
  fragen:[
    { id:`undsie`, t:`Und Sie?`, wie:`nur die zwei Worte`,
      liest:{N:1.3, A:-0.4},
      gut:{ er:`Steht da nicht.`,
            erRegie:`Er blättert eine Seite zurück und wieder vor, als könnte da doch etwas stehen.`,
            er2:`Ich habe die Mappe dreimal gelesen. In keinem Satz kommt vor, was mit dem passiert, der es bisher gemacht hat. Nicht mal negativ. Gar nicht.`,
            wie:`trocken`, wie2:`sehr genau`, stimmung:`interessiert`,
            fakt:`in der Angebotsmappe kommt er selbst in keinem Satz vor`, bez:8 },
      zu:{ er:`Das entscheiden andere.`, wie:`verschlossen`, stimmung:`verschlossen`, bez:-2 } },

    { id:`findenSieWas`, t:`Sie finden doch sofort was anderes, bei Ihrer Erfahrung.`, wie:`aufbauend`,
      liest:{N:-1.3, A:0.7},
      gut:{ er:`Vermutlich schon, ja.`, wie:`unbeteiligt`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Vielleicht.`,
           erRegie:`Er lacht kurz und ohne Freude.`,
           er2:`Ich bin dreiundvierzig und kann eine Anlage bedienen, die es nur hier gibt, weil ich sie so gebaut habe, wie es nur hier geht. Das steht in keinem Lebenslauf. Sie meinen es gut, und es hilft mir nicht.`,
           wie:`gedehnt`, wie2:`ruhig`, stimmung:`gereizt`, bez:-7 } },

    { id:`kannsdiefirma`, t:`Kann eine Firma das überhaupt übernehmen?`, wie:`sachlich interessiert`,
      liest:{N:0.8, O:0.7, C:-0.4},
      gut:{ er:`Die Hälfte ja. Die andere Hälfte ist gewachsen.`,
            erRegie:`Er zeigt den Gang hinunter auf den zweiten Schrank von links.`,
            er2:`Da drin läuft etwas, das ich 2016 an einem Wochenende gebaut habe, weil es sonst nicht ging. Es funktioniert bis heute, und außer mir versteht es kein Mensch. Das ist kein Stolz. Das ist ein Problem.`,
            wie:`sachlich`, wie2:`ohne Beschönigung`, stimmung:`interessiert`,
            fakt:`etwas, das er 2016 an einem Wochenende gebaut hat, versteht außer ihm niemand`, bez:7 },
      zu:{ er:`Werden die schon.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`altsystem`, titel:`Der Schrank, an den niemand rankommt`,
  regie:`Der zweite Schrank von links hat keine Kabel an der Vorderseite, nur an der Rückwand. Am Rahmen klebt ein vergilbter Zettel: NICHT AUSSCHALTEN.`,
  er:`Der läuft seit 2006 und ich komme nicht rein. Ich weiß das Passwort nicht.`,
  wie:`sachlich, als wäre es eine Wetterlage`, stimmung:`neutral`,
  bedarf:{ id:`alt_gel`, was:`will endlich, dass jemand außer ihm weiß, was in diesem Schrank steht`, braucht:{GEL:1.2, FRE:0.6} },
  fragen:[
    { id:`werweiss`, t:`Wer wusste es denn?`, wie:`sachlich`,
      liest:{N:1.0, C:-0.7},
      gut:{ er:`Mein Vorgänger. Der ist 2014 in Rente und 2019 gestorben.`,
            erRegie:`Er sagt es ohne Pause dazwischen.`,
            er2:`Ich habe ihn zweimal angerufen, in acht Jahren. Beim ersten Mal hat er gesagt, er sieht nach. Beim zweiten Mal war die Nummer nicht mehr vergeben.`,
            wie:`nüchtern`, wie2:`leiser`, stimmung:`nachdenklich`,
            fakt:`das Passwort kannte nur sein Vorgänger, der 2019 gestorben ist`, bez:8 },
      zu:{ er:`Keiner mehr.`, wie:`abschließend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`einfachaus`, t:`Dann machen Sie ihn doch einfach mal aus und sehen, was passiert.`, wie:`unbekümmert`,
      liest:{N:-1.5, O:0.6},
      gut:{ er:`Habe ich mir auch schon überlegt.`, wie:`gedehnt`, stimmung:`nachdenklich`, bez:1 },
      zu:{ er:`Einfach mal.`,
           erRegie:`Er lehnt sich zurück und sieht an die Decke.`,
           er2:`Ich habe elf Jahre lang nicht herausgefunden, was das Ding macht, und Sie schlagen vor, dass ich es rausziehe, um es an den Beschwerden zu erkennen. Ja. So macht man das. Aber nicht ich, nicht in diesem Haus, und nicht in diesem Leben.`,
           wie:`ungläubig`, wie2:`scharf`, stimmung:`gereizt`, bez:-7 } },

    { id:`versucht`, t:`Was haben Sie schon versucht?`, wie:`sachlich, echtes Interesse`,
      liest:{O:1.0, N:0.6, C:-0.3},
      gut:{ er:`Vieles.`,
            erRegie:`Er zieht ein Notizheft aus der Rückentasche, das an mehreren Stellen mit Ecken markiert ist.`,
            er2:`Drei Wege über das Netz, zwei über die Konsole, einmal habe ich die Platte ausgebaut und zu Hause angesehen. Steht alles hier drin. Es ist das Einzige, was ich in elf Jahren wirklich mitgeschrieben habe, und es ist ausgerechnet das, was nicht geklappt hat.`,
            wie:`knapp`, wie2:`mit einem sehr trockenen Lachen`, stimmung:`amuesiert`,
            fakt:`hat nur die gescheiterten Versuche an diesem Schrank mitgeschrieben`, bez:7 },
      zu:{ er:`Alles Mögliche.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`klima`, titel:`Neunundzwanzig Grad`,
  regie:`An einem Kabelbaum hängt ein Thermometer. Daneben steht ein privater Ventilator auf einem Karton, an eine Steckdosenleiste angeschlossen, die schon voll ist.`,
  er:`Die Kühlung läuft auf halber Kraft. Letzten Dienstag waren es hier neunundzwanzig Grad.`,
  wie:`ruhig, mit einem Blick nach oben`, stimmung:`neutral`,
  bedarf:{ id:`klima_sic`, was:`soll für etwas geradestehen, das er nicht reparieren darf`, braucht:{FRE:-1.6} },
  fragen:[
    { id:`wasdannpassiert`, t:`Was passiert bei neunundzwanzig Grad?`, wie:`sachlich`,
      liest:{N:1.2, C:-0.4},
      gut:{ er:`Ab dreiunddreißig schalten sich die Geräte selbst ab. Der Reihe nach, es gibt keine Warnung.`,
            erRegie:`Er sieht das Thermometer an, als hätte er es gerade wieder getan.`,
            er2:`Ich sehe seit Dienstag alle zwanzig Minuten drauf. Auch von zu Hause aus. Auch nachts.`,
            wie:`präzise`, wie2:`sehr sachlich, und genau deshalb schlimm`, stimmung:`interessiert`,
            fakt:`sieht seit Dienstag alle zwanzig Minuten auf das Thermometer, auch nachts`, bez:8 },
      zu:{ er:`Wärmer wird es.`, wie:`knapp`, stimmung:`verschlossen`, bez:-2 } },

    { id:`selbstrichten`, t:`Da gehen Sie doch einfach ran, oder?`, wie:`selbstverständlich`,
      liest:{N:-1.2, A:-0.6, C:0.5},
      gut:{ er:`Ich habe einmal reingesehen, ja. Mehr nicht.`, wie:`vorsichtig`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Nein.`,
           erRegie:`Er zeigt auf einen Aufkleber am Lüftungskasten.`,
           er2:`Das ist Kälteanlage, das darf ich nicht, und das ist auch richtig so. Was ich darf, ist alle zwanzig Minuten draufsehen und hoffen. Danke, dass Sie fragen, aber genau das ist es ja.`,
           wie:`sofort`, wie2:`gereizt und müde zugleich`, stimmung:`gereizt`, bez:-6 } },

    { id:`gemeldet`, t:`Wie oft haben Sie das gemeldet?`, wie:`geradeheraus`,
      liest:{N:0.9, A:-0.5, O:0.3},
      gut:{ er:`Siebenmal seit Mai.`,
            erRegie:`Er hält den Laptop hoch, ohne ihn aufzuklappen.`,
            er2:`Ich habe jede Mail aufgehoben. Nicht, damit ich hinterher recht habe. Damit hinterher überhaupt jemand weiß, dass es einer gesagt hat.`,
            wie:`sofort`, wie2:`bestimmt`, stimmung:`interessiert`,
            fakt:`hat die Kühlung seit Mai siebenmal gemeldet und jede Mail aufgehoben`, bez:7 },
      zu:{ er:`Ein paarmal.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`mails`, titel:`Sieben Mails, keine Antwort`,
  regie:`An der Innenseite der Tür hängt eine ausgedruckte Mail. Unten steht handschriftlich eine Zahl: 7.`,
  er:`Das ist die erste von sieben. Vom achtzehnten Mai.`,
  wie:`sachlich, ohne die Tür anzusehen`, stimmung:`neutral`,
  bedarf:{ id:`mails_gel`, was:`will, dass einmal jemand bestätigt, dass er es gesagt hat`, braucht:{GEL:1.9} },
  fragen:[
    { id:`warumhaengt`, t:`Warum hängt die da?`, wie:`ruhig, ohne Spott`,
      liest:{N:1.1, A:-0.4},
      gut:{ er:`Damit ich sie sehe, wenn ich rausgehe.`,
            erRegie:`Er sieht jetzt doch hin.`,
            er2:`Es geht nicht darum, dass sie es machen. Es geht darum, dass einer einmal zurückschreibt: gelesen. Ein Wort. Ich hänge hier eine Mail an die Tür, weil ich ein Wort will.`,
            wie:`knapp`, wie2:`sehr ruhig, und das ist der Punkt, an dem du merkst, wie lange das schon geht`, stimmung:`geruehrt`,
            fakt:`hängt eine unbeantwortete Mail an die Tür, weil er eine Bestätigung will`, bez:9 },
      zu:{ er:`Ist bloß Papier.`, wie:`abweisend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`nichtpersoenlich`, t:`Das ist bestimmt nichts Persönliches, die haben einfach viel zu tun.`, wie:`beschwichtigend`,
      liest:{N:-1.4, A:0.8},
      gut:{ er:`Weiß ich ja.`, wie:`müde`, stimmung:`nachdenklich`, bez:2 },
      zu:{ er:`Das weiß ich selbst.`,
           erRegie:`Er nimmt das Blatt von der Tür, sieht es an und hängt es wieder hin.`,
           er2:`Ich weiß, dass es nicht persönlich ist. Das macht es schlechter, nicht besser. Wenn es persönlich wäre, hätte wenigstens einer an mich gedacht.`,
           wie:`sofort`, wie2:`sehr klar`, stimmung:`gereizt`, bez:-7 } },

    { id:`wasstehtdrin`, t:`Was steht denn drin?`, wie:`schlicht neugierig`,
      liest:{C:-0.5, N:1.0, O:0.4},
      gut:{ er:`Dass die Kühlung nicht reicht, und was passiert, wenn sie ausfällt.`,
            erRegie:`Er zieht das Blatt gerade, obwohl es gerade hängt.`,
            er2:`Vier Absätze. Ich habe eine Stunde daran geschrieben und jeden Satz zweimal umgestellt, damit er nicht klingt, als hätte ich Angst.`,
            wie:`sachlich`, wie2:`langsamer`, stimmung:`nachdenklich`,
            fakt:`hat an der Warnmail eine Stunde geschrieben, damit sie nicht ängstlich klingt`, bez:7 },
      zu:{ er:`Das Übliche.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`halbestelle`, titel:`Der zweite Schreibtisch`,
  regie:`An der Stirnwand steht ein zweiter Schreibtisch. Er ist leer, abgestaubt, und die Steckdosenleiste darunter ist eingeschaltet.`,
  er:`Der steht da seit 2019. Die halbe Stelle ist bewilligt und nie besetzt worden.`,
  wie:`beiläufig`, stimmung:`neutral`,
  bedarf:{ id:`halb_zug`, was:`sitzt seit elf Jahren in einem Raum, in den niemand kommt`, braucht:{GEL:-1.5} },
  fragen:[
    { id:`warumnicht`, t:`Woran hängt das?`, wie:`sachlich`,
      liest:{N:0.9, C:-0.5, A:-0.3},
      gut:{ er:`Zweimal ausgeschrieben, zweimal keiner genommen.`,
            erRegie:`Er wischt mit dem Handrücken über die leere Tischplatte, ohne es zu bemerken.`,
            er2:`Beim zweiten Mal hat einer abgesagt, nachdem er den Raum gesehen hat. Ich war dabei. Ich habe ihm den Raum gezeigt.`,
            wie:`trocken`, wie2:`sehr sachlich`, stimmung:`nachdenklich`,
            fakt:`ein Bewerber hat abgesagt, nachdem Kai ihm den Raum gezeigt hatte`, bez:8 },
      zu:{ er:`Am Geld, an was sonst.`, wie:`abschließend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`lieberallein`, t:`Sie arbeiten doch bestimmt sowieso lieber allein.`, wie:`kollegial`,
      liest:{N:-1.0, A:0.6, O:0.4},
      gut:{ er:`Manches schon.`, wie:`unbestimmt`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Nein.`,
           erRegie:`Er sagt es sehr schnell und dann eine Weile nichts mehr.`,
           er2:`Ich rede an manchen Tagen mit niemandem außer mit Leuten, deren Drucker klemmt. Der Tisch steht nicht da, weil ich Platz brauche. Der Tisch steht da, weil ich ihn nicht wegräumen wollte.`,
           wie:`hart`, wie2:`leiser, sehr ehrlich`, stimmung:`geruehrt`, bez:-5 } },

    { id:`waeretanders`, t:`Was wäre anders, wenn da jemand säße?`, wie:`ruhig`,
      liest:{N:1.0, O:0.5},
      gut:{ er:`Ich könnte Urlaub nehmen.`,
            erRegie:`Er sagt es zuerst und lacht dann darüber, dass es das Erste war.`,
            er2:`Ich habe seit vier Jahren keine zwei Wochen am Stück genommen. Nicht weil es verboten wäre. Weil ich in der zweiten Woche sowieso jeden Tag hier anrufen würde.`,
            wie:`sofort`, wie2:`nüchtern`, stimmung:`nachdenklich`,
            fakt:`hat seit vier Jahren keine zwei Wochen Urlaub am Stück genommen`, bez:7 },
      zu:{ er:`Weiß ich nicht.`, wie:`abwehrend`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`beinahe`, titel:`Die Nacht im März`,
  regie:`Am unteren Rand des Monitors klebt ein Zettel, der nicht zu den anderen passt: er ist weiß, sauber geschrieben und trägt nur ein Datum und zwei Wörter.`,
  er:`Vierter März. Da habe ich um halb eins nachts fast alles gelöscht.`,
  wie:`ohne Vorwarnung, sehr ruhig`, stimmung:`neutral`,
  bedarf:{ id:`beinahe_sic`, was:`will nie wieder allein und nachts über etwas entscheiden, das sich nicht zurücknehmen lässt`, braucht:{FRE:-1.7} },
  fragen:[
    { id:`wasgenau`, t:`Was ist passiert?`, wie:`ruhig, ohne Schaudern im Ton`,
      liest:{N:1.3, C:-0.6},
      gut:{ er:`Falsches Fenster. Zwei Fenster nebeneinander, gleiche Schrift, gleiche Farbe.`,
            erRegie:`Er sieht auf seine Hände.`,
            er2:`Ich habe den Befehl abgeschickt und im selben Moment gesehen, welches Fenster oben war. Dann habe ich die Stromleiste rausgerissen. Mit der Hand, aus der Wand. Das war die richtige Entscheidung, und ich habe sie nicht getroffen, ich habe sie gemacht.`,
            wie:`sachlich`, wie2:`sehr genau, fast langsam`, stimmung:`interessiert`,
            fakt:`hat im März die Stromleiste aus der Wand gerissen, um einen Löschbefehl zu stoppen`, bez:9 },
      zu:{ er:`Ein Fehler halt.`, wie:`abweisend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`passiertjeder`, t:`So was passiert jedem mal, machen Sie sich nichts draus.`, wie:`großzügig`,
      liest:{N:-1.5, A:0.7},
      gut:{ er:`Vermutlich.`, wie:`knapp`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Nein.`,
           erRegie:`Er tippt zweimal auf den weißen Zettel.`,
           er2:`Das passiert nicht jedem. Das passiert Leuten, die um halb eins nachts allein an einem System arbeiten, das seit elf Jahren keiner außer ihnen anfasst. Ich mache mir daraus was. Ich habe mir den Zettel hingeklebt, damit ich mir daraus was mache.`,
           wie:`schneidend`, wie2:`ruhig`, stimmung:`gereizt`, bez:-8 } },

    { id:`seitdem`, t:`Was machen Sie seitdem anders?`, wie:`sachlich, praktisch`,
      liest:{N:1.1, C:-0.4, O:0.5},
      gut:{ er:`Nach zehn nichts mehr, was sich nicht zurücknehmen lässt.`,
            erRegie:`Er zeigt auf die beiden Wörter unter dem Datum.`,
            er2:`Das steht da. Es hat vier Monate gehalten, dann war wieder eine Nacht, in der es nicht anders ging. Der Zettel hängt trotzdem noch.`,
            wie:`bestimmt`, wie2:`ohne Selbstmitleid`, stimmung:`nachdenklich`, bez:7 },
      zu:{ er:`Aufpassen.`, wie:`knapp`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`umstellung`, titel:`Die Umstellung, die im Frühjahr kommt`,
  regie:`Auf dem zweiten Schreibtisch liegt ein gedruckter Projektplan mit einem Balkendiagramm. Auf der ersten Seite steht ein fremder Name als Projektleitung.`,
  er:`Im Frühjahr wird alles umgestellt. Neue Plattform, von oben entschieden, Termin steht.`,
  wie:`gleichmäßig, mit einem Blick auf das Deckblatt`, stimmung:`neutral`,
  bedarf:{ id:`umstell_fre`, was:`soll in einem halben Jahr nach fremdem Plan bauen, was er sonst selbst entscheidet`, braucht:{FRE:1.5} },
  fragen:[
    { id:`gefragtworden`, t:`Hat man Sie vorher gefragt?`, wie:`direkt`,
      liest:{N:0.9, A:-0.6},
      gut:{ er:`Ich stehe auf Seite elf. Als Ressource.`,
            erRegie:`Er blättert hin und dreht dir die Seite zu.`,
            er2:`Da steht: Ressource Systembetreuung, 0,4. Das bin ich. Ich bin in dem Plan eine Zahl mit einem Komma.`,
            wie:`trocken`, wie2:`sehr ruhig`, stimmung:`amuesiert`,
            fakt:`steht im Projektplan als Ressource Systembetreuung 0,4`, bez:8 },
      zu:{ er:`Wird schon seinen Grund haben.`, wie:`abwiegelnd`, stimmung:`verschlossen`, bez:-2 } },

    { id:`freuensiesich`, t:`Endlich was Neues, das muss Ihnen doch entgegenkommen.`, wie:`munter`,
      liest:{N:-1.1, O:0.9, A:0.4},
      gut:{ er:`Der Sache nach schon.`, wie:`eingeschränkt`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Neu ist nicht das Problem.`,
           erRegie:`Er legt den Plan zurück auf den leeren Tisch.`,
           er2:`Ich probiere jeden Monat was Neues aus, freiwillig, abends. Das Problem ist ein Termin, den einer gesetzt hat, der nicht weiß, was in diesen vierzehn Schränken steht. Neues macht mir nichts. Fremde Termine machen mir was.`,
           wie:`rasch`, wie2:`bestimmt`, stimmung:`gereizt`, bez:-6 } },

    { id:`schaffbar`, t:`Ist der Termin zu halten?`, wie:`nüchtern`,
      liest:{N:1.2, C:-0.5},
      gut:{ er:`Nein.`,
            erRegie:`Er sagt es ohne Pause und ohne Einschränkung, was bei ihm selten ist.`,
            er2:`Und ich habe es geschrieben, mit Begründung, drei Seiten. Die Antwort war, dass der Termin gesetzt ist. Das ist keine Antwort auf die Frage, ob er zu halten ist.`,
            wie:`sofort`, wie2:`klar`, stimmung:`interessiert`,
            fakt:`hat auf drei Seiten begründet, dass der Termin nicht zu halten ist`, bez:7 },
      zu:{ er:`Mal sehen.`, wie:`ausweichend`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`beschwerde`, titel:`Der Ausdruck in der Schublade`,
  regie:`Er zieht eine Schublade auf, um etwas anderes herauszuholen, und schiebt sie zu schnell wieder zu. Obenauf lag ein Ausdruck mit einer Fußzeile aus der Verwaltung.`,
  er:`Nichts Wichtiges. Eine Beschwerde.`,
  wie:`zu beiläufig`, stimmung:`skeptisch`,
  bedarf:{ id:`besch_gel`, was:`will, dass danebensteht, was er in derselben Woche geleistet hat`, braucht:{GEL:1.3, FRE:-0.5} },
  fragen:[
    { id:`worumgeht`, t:`Worum geht es darin?`, wie:`ruhig, ohne Neugierlust`,
      liest:{N:1.2, A:-0.4},
      gut:{ er:`Dass ich unfreundlich war und drei Tage nicht geantwortet habe.`,
            erRegie:`Er zieht die Schublade wieder auf und legt den Ausdruck hin.`,
            er2:`Beides stimmt. In denselben drei Tagen war der Ausfall am Samstag. Das steht nicht drin, und es muss auch nicht drinstehen. Es steht nur nirgendwo sonst.`,
            wie:`sachlich`, wie2:`ohne Verteidigung`, stimmung:`interessiert`,
            fakt:`die Beschwerde fällt in dieselben Tage wie der Ausfall, was nirgends vermerkt ist`, bez:8 },
      zu:{ er:`Nichts, worüber man reden müsste.`, wie:`abweisend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`nichternstnehmen`, t:`Das würde ich nicht so ernst nehmen.`, wie:`wegwerfend, gut gemeint`,
      liest:{N:-1.4, A:0.5},
      gut:{ er:`Nehme ich auch nicht.`, wie:`schnell`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Ich habe sie ausgedruckt.`,
           erRegie:`Er sieht auf den Ausdruck und dann auf dich.`,
           er2:`Sie liegt digital vor. Ich habe sie trotzdem ausgedruckt und in eine Schublade gelegt, in die ich zwanzigmal am Tag greife. Nach Ihrer Einschätzung nehme ich sie also nicht ernst.`,
           wie:`langsam`, wie2:`sehr trocken`, stimmung:`gereizt`, bez:-7 } },

    { id:`geantwortet`, t:`Haben Sie darauf geantwortet?`, wie:`sachlich`,
      liest:{N:1.0, C:-0.6, O:0.3},
      gut:{ er:`Viermal angefangen.`,
            erRegie:`Er hebt eine Hand und lässt sie wieder sinken.`,
            er2:`Die erste Antwort war zu lang, die zweite zu kurz, die dritte klang nach Ausrede. Die vierte liegt im Entwurfsordner neben der Kündigung. Ich sammle da inzwischen einiges.`,
            wie:`knapp`, wie2:`mit einem sehr kleinen Lachen`, stimmung:`nachdenklich`,
            fakt:`sammelt im Entwurfsordner Antworten, die er nie abschickt`, bez:7 },
      zu:{ er:`Noch nicht.`, wie:`kurz`, stimmung:`neutral`, bez:-1 } }
  ] }
],

/* --- Was er sagt, wenn du dich festlegst. ------------------------- */

reaktion: {
  z: {
    O: { genau:{ er:`Kommt hin. Ich probiere gern was aus, aber ich bin kein Erfinder. Ich sehe mir an, was andere schon gebaut haben.`, wie:`sachlich` },
         zuHoch:{ er:`So neugierig bin ich nicht.`, erRegie:`Er zeigt den Gang hinunter.`, er2:`Hier steht Technik von 2006, 2011 und 2016 nebeneinander, weil ich mich nie getraut habe, etwas wegzunehmen.`, wie:`einschränkend`, wie2:`trocken` },
         zuTief:{ er:`Von gestern bin ich nicht. Ich probiere jeden Monat etwas Neues aus, abends, freiwillig, und meistens fliegt es nach zwei Wochen wieder raus.`, wie:`richtigstellend` } },
    C: { genau:{ er:`Ja.`, erRegie:`Er sieht auf die vierundvierzig Zettel am Monitorrahmen und dann wieder zu dir.`, er2:`Ich fange mehr an, als ich zu Ende bringe. Das ist mir bewusst, und es ist mir bewusst, seit ich siebzehn bin.`, wie:`ohne Widerspruch`, wie2:`nüchtern` },
         zuHoch:{ er:`Ordentlich.`, erRegie:`Er lacht einmal, kurz und ehrlich überrascht.`, er2:`Ich habe die Dokumentation dreimal angefangen und keine einzige zu Ende gebracht. Im November kommt deswegen eine Prüfung. Sagen Sie das noch mal.`, wie:`ungläubig`, wie2:`sehr direkt` },
         zuTief:{ er:`Ganz so schlimm ist es nicht. Was läuft, läuft, seit elf Jahren, und das ist nicht von allein passiert.`, wie:`einschränkend` } },
    E: { genau:{ er:`Das trifft es. Ich kann eine Stunde über einen Netzwerkschalter reden und danach drei Tage mit niemandem. Beides ist mir recht, und keins von beidem ist eine Anstrengung.`, wie:`überrascht, dass es jemand so sagt` },
         zuHoch:{ er:`Gesellig.`, erRegie:`Er sieht sich in dem fensterlosen Raum um.`, er2:`Ich sitze seit elf Jahren allein in einem Raum, in den niemand kommt, und ich habe mich nie darum bemüht, dass sich das ändert.`, wie:`gedehnt`, wie2:`sachlich` },
         zuTief:{ er:`So still bin ich auch wieder nicht. Sie sind seit einer halben Stunde hier, und ich habe deutlich mehr geredet als Sie.`, wie:`richtigstellend, fast amüsiert` } },
    A: { genau:{ er:`Ja, ich bin kurz angebunden. Nicht aus Bosheit — ich habe meistens gerade etwas im Kopf, das gleich kaputtgeht.`, wie:`sachlich, ohne Entschuldigung` },
         zuHoch:{ er:`Nachgiebig.`, erRegie:`Er zieht eine Augenbraue hoch.`, er2:`Fragen Sie mal im zweiten Stock, wie das war, als ich zum vierten Mal dieselbe Frage bekommen habe. Ich war nicht nachgiebig, ich war ein Idiot.`, wie:`trocken`, wie2:`ohne Reue` },
         zuTief:{ er:`So hart bin ich nicht. Ich erkläre es dreimal, wenn einer sich nicht traut zu fragen. Nur beim vierten Mal wird es schwierig.`, wie:`einschränkend` } },
    N: { genau:{ er:`Ja.`, erRegie:`Er nickt und sieht dabei nicht weg, was er sonst tut.`, er2:`Das sagt mir sonst keiner. Die meisten halten mich für ruhig, weil ich leise bin. Ich bin nicht ruhig, ich bin nur leise.`, wie:`sofort`, wie2:`sehr klar` },
         zuHoch:{ er:`Ganz so schlimm ist es nicht. Ich funktioniere. Ich habe elf Jahre lang funktioniert.`, wie:`einschränkend, und nicht sehr überzeugend` },
         zuTief:{ er:`Robust.`, erRegie:`Er sieht auf den weißen Zettel am Monitorrand.`, er2:`Ich wache um halb vier auf und gehe durch, was heute hätte kaputtgehen können. Jede Nacht. Sagen Sie mir bitte nicht, dass mich wenig umwirft.`, wie:`gedehnt`, wie2:`ruhig, sehr bestimmt` } }
  },
  m: {
    FRE: { genau:{ er:`Das ist die ehrlichste Antwort, die ich dazu gehört habe.`, erRegie:`Er lehnt sich zurück.`, er2:`Ich habe hier alle Freiheit der Welt, und die halbe Zeit wünsche ich mir, es sagt mir einer, wie es gemacht wird. Beides gleichzeitig. Das kann ich niemandem erklären, und Sie haben nicht mal gefragt.`, wie:`überrascht`, wie2:`sehr direkt` },
           zuHoch:{ er:`Ich will nicht frei sein.`, erRegie:`Er sagt es schnell und dann langsamer.`, er2:`Ich bin frei. Es redet mir hier unten kein Mensch rein, ich könnte heute Nachmittag das halbe Netz umbauen. Genau davon wache ich nachts auf. Wer frei sein will, hat noch keine gehabt.`, wie:`richtigstellend`, wie2:`ernst` },
           zuTief:{ er:`Sicherheit ist nicht alles. Wenn mir hier einer vorschreiben würde, wie ich diese Schränke zu betreiben habe, wäre ich in einem halben Jahr weg. Ich weiß, dass das nicht zusammenpasst. Es ist trotzdem so.`, wie:`abwägend` } },
    GEL: { genau:{ er:`Ein bisschen, ja.`, erRegie:`Er zeigt mit dem Daumen zur Tür, an der die ausgedruckte Mail hängt.`, er2:`Nicht auf eine Bühne. Es würde reichen, wenn irgendwo steht, dass es einer gesagt hat. Ein Wort. Deshalb hängt das Blatt da.`, wie:`ohne Ausflucht`, wie2:`ruhig` },
           zuHoch:{ er:`So wichtig ist mir das nicht. Ich will nicht vorne stehen, mir ist es sogar unangenehm. Mir wäre nur lieb, dass es mich in einem Papier überhaupt gibt.`, wie:`einschränkend` },
           zuTief:{ er:`Doch, ein bisschen schon.`, erRegie:`Er sieht zur Tür.`, er2:`Ich hänge eine unbeantwortete Mail an die Innenseite meiner Tür, damit ich sie jedes Mal sehe, wenn ich rausgehe. Das macht keiner, dem das egal ist.`, wie:`langsamer`, wie2:`sehr ehrlich` } }
  }
},

/* --- Wiedersehen und Abschied. ------------------------------------ */

wiedersehen: [
  { ab:70, regie:`Er hat die Tür angelehnt gelassen und steht auf, bevor du klopfst.`,
    er:`Gut. Ich habe heute Morgen an etwas gedacht, das ich Ihnen erzählen wollte.`, wie:`ehrlich erfreut, ein bisschen zu schnell`, stimmung:`freundlich` },
  { ab:50, regie:`Er dreht sich auf dem Rollwagen um und schiebt dir den Stuhl ohne Lehne zu.`,
    er:`Setzen Sie sich. Ich muss dabei weiterschauen, das ist nichts gegen Sie.`, wie:`freundlich, halb bei der Sache`, stimmung:`neutral` },
  { ab:30, regie:`Er sieht kurz auf und dann wieder auf den Bildschirm.`,
    er:`Ja? Ich habe gerade nicht so viel Zeit.`, wie:`knapp`, stimmung:`skeptisch` },
  { ab:-999, regie:`Er klappt den Laptop zu und legt die Hände darauf, was bei ihm mehr heißt als eine verschränkte Armhaltung.`,
    er:`Sie sind das.`, wie:`höflich, ohne einen Rest von Wärme`, stimmung:`verschlossen` }
],

abschied: [
  { ab:70, regie:`Er geht mit dir bis zum Treppenabsatz, obwohl das dreißig Meter sind.`,
    er:`Kommen Sie wieder. Und wenn Sie hier unten sind: die Tür ist offen, ich höre das Rauschen sowieso nicht mehr.`,
    wie:`warm, ein wenig unbeholfen`, stimmung:`freundlich`, bez:3 },
  { ab:50, regie:`Er steht auf und hält die Tür auf.`,
    er:`War gut. Melden Sie sich, wenn Sie mal wieder in dem Stock sind.`, wie:`freundlich`, stimmung:`neutral`, bez:2 },
  { ab:30, regie:`Er nickt und ist mit den Augen schon wieder beim Monitor.`,
    er:`Ja. Machen Sie es gut.`, wie:`kurz`, stimmung:`neutral`, bez:1 },
  { ab:-999, regie:`Er bleibt sitzen und zeigt mit dem Kinn Richtung Tür.`,
    er:`Wiedersehen.`, wie:`höflich und leer`, stimmung:`verschlossen`, bez:0 }
],

abfuhr: {
  regie:`Du stellst den Koffer auf den zweiten Schreibtisch, den leeren. Er sieht ihn an und rührt sich eine Weile nicht.`,
  er:`Ach so.`,
  erRegie:`Er schiebt den Koffer nicht weg. Er sieht ihn nur an und dreht dabei den kalten Kaffeebecher in der Hand.`,
  er2:`Ich habe Ihnen von einer Nacht erzählt, in der ich eine Steckdosenleiste aus der Wand gerissen habe. Das habe ich noch keinem erzählt, der hier arbeitet. Und Sie haben zugehört, weil Sie wissen wollten, was ich kaufe. Ich bin nicht mal böse. Ich hätte es besser wissen müssen.`,
  wie:`leise`, wie2:`sehr ruhig, und das ist schlimmer als laut`, stimmung:`abweisend` },

/* --- Der Verkauf. Bei ihm ist der Bedarf fast alles: über seine
       Motive kommst du kaum an ihn heran, weil er auf der ersten Waage
       in der Mitte steht. Was er braucht, hängt daran, was diese Woche
       bei ihm los ist — und ob du danach gefragt hast. ------------- */

verkauf: {
  aufschlag: `Achtundzwanzig Minuten sind um. Du hebst den Koffer auf den leeren zweiten Schreibtisch, drehst ihn zu ihm und klappst ihn auf. Drei Dinge liegen darin, jedes in seiner Mulde.`,
  reaktionRegie: `Er steht vom Rollwagen auf, kommt zwei Schritte näher und bleibt dann stehen, statt sich zu setzen.`,
  reaktion: `Sie verkaufen was. Gut. Dann hatte das hier einen Grund, das ist mir fast lieber.`,
  reaktionWie: `nüchtern, mit einem Rest von Erleichterung, den er selbst nicht bemerkt`,
  start: 30,
  zuege: [
    { frage: `Warum zeigen Sie mir ausgerechnet das?`, wie:`sachlich, ohne Schärfe`, stimmung:`neutral`,
      opt: [
        { id:`alle`, t:`Weil das jeder brauchen kann.`,
          wie:`allgemein, ein wenig auswendig`, auto:0, aff:{},
          er:`Jeder.`, erRegie:`Er tritt einen halben Schritt zurück.`,
          er2:`Dann hätten Sie sich die halbe Stunde sparen können. Ich hätte Ihnen am Telefon gesagt, dass ich nichts brauche, was jeder braucht.`,
          wie2:`trocken`, stimmung:`skeptisch` },
        { id:`zugehoert`, t:`Weil Sie mir eine halbe Stunde lang erzählt haben, was hier schiefgeht und wie oft Sie es gesagt haben. Wenn ich falsch liege, sagen Sie es, und ich packe ein.`,
          wie:`ruhig, ohne Druck`, auto:2, aff:{GEL:1.3, FRE:0.4},
          an:{ plan60:`Sie haben eine Kündigung geschrieben und schicken sie seit sieben Monaten nicht ab. Ich glaube, das hier gehört in dieselbe Richtung. Wenn nicht, packe ich ein.`,
               musik:`Sie sitzen elf Jahre mit fünf Leuten zusammen, die Sie nie getroffen haben. Sie halten Sachen lange durch. Dafür ist das hier.`,
               werkstatt:`Auf Ihrem Küchentisch steht seit zwei Jahren ein offener Rechner. Ich glaube, ich weiß, warum das hier passen könnte.` },
          erRegieVor:`Er sieht auf den offenen Koffer und dann auf dich, und diesmal sieht er nicht gleich wieder weg.`,
          er:`Weiter.`, wie2:`langsamer, aufmerksam`, stimmung:`interessiert` },
        { id:`beste`, t:`Weil es das Beste ist, was ich dabei habe.`,
          wie:`bestimmt`, auto:0, aff:{GEL:1.0},
          er:`Das Beste wofür?`, erRegie:`Er nimmt es nicht in die Hand.`,
          er2:`Ich habe seit elf Jahren die beste Lösung für Probleme, die keiner hat. Sagen Sie mir das Problem, dann reden wir über das Beste.`,
          wie2:`trocken, nicht unfreundlich`, stimmung:`neutral` }
      ]},

    { frage: `Wo ist der Haken?`, wie:`sofort, ohne Umweg`, stimmung:`skeptisch`,
      opt: [
        { id:`keiner`, t:`Es gibt keinen.`,
          wie:`glatt`, auto:-1, aff:{},
          er:`Es gibt immer einen.`, erRegie:`Er legt es zurück in die Mulde, ohne es angesehen zu haben.`,
          er2:`Ich betreibe seit elf Jahren Sachen, bei denen im Prospekt kein Haken stand. Ich weiß inzwischen, wo er dann stattdessen sitzt: bei mir, nachts.`,
          wie2:`bestimmt`, stimmung:`gereizt` },
        { id:`nennen`, t:`__HAKEN__`,
          wie:`ruhig, ohne Beschönigung`, auto:2, aff:{FRE:0.5, GEL:0.7},
          erRegieVor:`Er hört auf, in den Koffer zu sehen.`,
          er:`Sie haben es mir gesagt, bevor ich es gemerkt habe.`, erRegie:`Er nickt einmal, sehr knapp.`,
          er2:`Das ist mir in diesem Haus zuletzt vor vier Jahren passiert. Erzählen Sie weiter, ich höre jetzt richtig zu.`,
          wie2:`ernst, ein wenig überrascht`, stimmung:`interessiert` },
        { id:`spaeter`, t:`Darüber reden wir, wenn Sie sich entschieden haben.`,
          wie:`ausweichend`, auto:-2, aff:{},
          er:`Nein.`, erRegie:`Er klappt seinen Laptop auf.`,
          er2:`Genau so ist die Sache von 2016 hier reingekommen. Über den Haken reden wir jetzt, oder wir reden über etwas anderes.`,
          wie2:`hart`, stimmung:`gereizt` }
      ]},

    { frage: `Und woher weiß ich, dass das stimmt?`, wie:`prüfend`, stimmung:`skeptisch`,
      opt: [
        { id:`probieren`, t:`Sie behalten es zwei Wochen. Wenn es nicht tut, was ich gesagt habe, hole ich es ab, und Sie müssen kein Wort dazu sagen.`,
          wie:`konkret, ohne Bedingung`, auto:2, aff:{FRE:1.0, GEL:0.5},
          an:{ werkstatt:`Zwei Wochen. Wenn es bei Ihnen zu Hause neben dem offenen Rechner liegen bleibt, hole ich es ab und Sie müssen sich nicht erklären.` },
          er:`Zwei Wochen.`, erRegie:`Er sieht auf einen der Haftzettel und wieder auf dich.`,
          er2:`Ohne dass ich etwas unterschreibe und ohne dass mich in zwei Wochen jemand anruft und fragt, wie ich mich entschieden habe.`,
          wie2:`prüfend, dann zustimmend`, stimmung:`interessiert` },
        { id:`referenzen`, t:`Ich habe Referenzen. Drei Häuser arbeiten schon damit.`,
          wie:`routiniert`, auto:0, aff:{GEL:0.7, FRE:-0.7},
          er:`Welche drei?`, erRegie:`Er fragt es sofort.`,
          er2:`Wenn Sie mir einen Namen und eine Nummer geben, rufe ich morgen an. Sonst ist es eine Zahl, und Zahlen habe ich selbst genug.`,
          wie2:`direkt`, stimmung:`neutral` },
        { id:`glauben`, t:`An dieser Stelle müssen Sie mir einfach glauben.`,
          wie:`beschwörend`, auto:-1.5, aff:{},
          er:`Müssen.`, erRegie:`Er lacht kurz und ohne jedes Vergnügen.`,
          er2:`Das stand auch in der Mappe von 2011. Danach habe ich vier Jahre lang jeden zweiten Monat einen Abend damit verbracht.`,
          wie2:`schneidend`, stimmung:`gereizt` }
      ]},

    { regie: `Er sieht in den offenen Koffer und dann auf den Bildschirm, auf dem seit einer Weile nichts passiert.`,
      opt: [
        { id:`neinistnein`, t:`Lassen Sie sich Zeit. Wenn Sie Nein sagen, ist das ein Nein und kein Zwischenstand.`,
          wie:`ruhig, ohne Nachdruck`, auto:2, aff:{FRE:0.9, GEL:0.5},
          an:{ plan60:`Sie haben eine Kündigung, die seit sieben Monaten liegt. Ich weiß, wie das ist mit Entscheidungen. Wenn es ein Nein wird, ist es ein Nein und kein Zwischenstand.`,
               tochter:`Entscheiden Sie das am Wochenende, wenn Ihr Sohn da ist, oder gar nicht. Und wenn es ein Nein wird, ist es ein Nein.` },
          er:`Ein Nein, das ein Nein sein darf.`, erRegie:`Er sieht dich lange genug an, dass es unangenehm wird.`,
          er2:`Ich habe hier unten elf Jahre lang keine Entscheidung getroffen, bei der mir das jemand zugestanden hätte. Das ist der erste Satz heute, bei dem ich Ihnen glaube.`,
          wie2:`leise`, stimmung:`geruehrt` },
        { id:`verpassen`, t:`Wenn Sie jetzt Nein sagen, verpassen Sie etwas.`,
          wie:`drängend`, auto:-1.5, aff:{},
          er:`Ich verpasse dauernd was.`, erRegie:`Er zeigt auf die vierundvierzig Zettel.`,
          er2:`Sehen Sie sich das an. Ich lebe davon, Sachen zu verpassen. Damit kriegen Sie mich nicht.`,
          wie2:`gleichmütig`, stimmung:`verschlossen` },
        { id:`freitag`, t:`Der Preis gilt nur bis Freitag.`,
          wie:`geschäftsmäßig, mit einem Blick auf die Uhr`, auto:-2, aff:{},
          er:`Freitag.`, erRegie:`Er klappt den Koffer von seiner Seite aus zu.`,
          er2:`Ich habe drei Wochen, um für eine Prüfung zu belegen, was ich in elf Jahren nicht aufgeschrieben habe. Und Sie kommen mir mit Freitag. Nein.`,
          wie2:`sehr ruhig, endgültig`, stimmung:`gereizt` }
      ]}
  ],
  ausgang: [
    { ab:72, titel:`Er kauft.`, stimmung:`freundlich`,
      regie:`Er steht eine Weile davor, dann greift er zu und hält es fest, als könnte es ihm jemand wieder abnehmen.`,
      er:`Gut. Ich nehme es. Und ich rufe in zwei Wochen an — auch wenn es nichts geworden ist, gerade dann.`,
      wie:`fest, für seine Verhältnisse laut`,
      nachRegie:`Er bringt dich bis zum Treppenabsatz und erklärt dir dabei, welcher Stock welchen Aufzug hat und warum der linke schneller ist.` },
    { ab:48, titel:`Er lässt es offen.`, stimmung:`nachdenklich`,
      er:`Lassen Sie mir was da. Ich sage nichts zu. Aber ich werfe es nicht weg, das mache ich nie.`,
      wie:`vorsichtig`,
      nachRegie:`Er legt es auf den leeren zweiten Schreibtisch, nicht in die Schublade.` },
    { ab:-999, titel:`Er kauft nicht.`, stimmung:`verschlossen`,
      regie:`Er klappt den Koffer zu und schiebt ihn über den leeren Tisch zurück.`,
      er:`Nein. Und damit Sie nicht raten müssen, woran es lag: Sie haben mir eine halbe Stunde zugehört und dann etwas hingelegt, das zu jemandem gehört, der weniger Angst hat als ich. Ich hätte gern gesagt, dass Sie danebenlagen. Sie lagen daneben.`,
      wie:`leise, sehr genau, ohne Bosheit` }
  ]
},
});
