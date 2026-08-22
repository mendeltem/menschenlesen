/* ═══════════════════════════════════════════════════════════════════
   Petra Kettner, Empfang.

   Die sechste Person und die erste Tür des Hauses. Zusammen mit Angela
   bildet sie das Erdgeschoss: die zwei, an denen niemand vorbeikommt.

   Sie füllt das größte Loch, das der Besetzung geblieben war. Von den
   fünf anderen ist keiner wirklich hart — Angela und Kai stehen bei
   minus eins und sind im Kern beide zugewandt, die anderen drei liegen
   im Plus. Jeder von ihnen lässt sich über Wärme ein Stück weit
   gewinnen. Sie nicht. Bei ihr ist Wärme das, was nicht funktioniert.

   Das ist keine Bosheit und sie ist nie unhöflich. Sie war acht Jahre
   lang freundlich, und dann hat die Freundlichkeit sie einmal sehr viel
   gekostet. Seitdem tut sie genau das, was ihre Aufgabe ist, und
   keinen Handschlag mehr. Wer sie mag, bekommt davon nichts zurück.
   Wer sie nach der Sache fragt — nach dem Ablauf, der Vorschrift, dem
   Formular —, sitzt plötzlich einer Fachfrau gegenüber, die zwanzig
   Minuten am Stück reden kann.

   Das ist die Lektion des Erdgeschosses, und sie steht absichtlich
   ganz vorn: Angela erreicht man über den Menschen, Petra nur über die
   Arbeit. Wer das eine Verfahren beim anderen anwendet, verliert. Und
   das Klischee hilft bei keiner von beiden — beim Empfang verspricht
   es freundlich, hilfsbereit und immer für einen Gefallen zu haben.
   Drei Fehler in einer Zeile.

   Nebenbei bringt sie fünf Ausprägungen mit, die es noch nicht gab:
   O −2, E +1, A −2, N 0 und GEL −1.
   ═══════════════════════════════════════════════════════════════════ */
PERSONEN.push({

id: `kettner`,
/* In welcher Etage diese Person sitzt. Dorthin kommst du erst, wenn dich
   jemand aus der Etage darunter weiterschickt. */
etage: 1,
/* An welcher Stelle der Route sie steht, und was an ihrer Tür
   hängt. Vor der eigenen Nummer sieht man nur die Tür. */
route: 1,
tuer: { schild: `Empfang`, bild: `bilder/tuer-empfang.webp` },
kurz: `Empfang, 56. Weinroter Strickmantel hinter einer Glasscheibe,
       ein aufgeschlagenes Besucherbuch, und ein Lächeln, das angeht und ausgeht.`,
theme: `ozean`,
menubild: `personen/kettner/bilder/freundlich.webp`,

hero: {
  name: `Petra Kettner`, age: 56, job: `Empfang`,
  ort: `Erdgeschoss, Empfang, hinter einer Glasscheibe mit Sprechschlitz`,
  /* Nichts Neues, alles nach Vorschrift, redet den ganzen Tag und sagt
     nichts, hart im Umgang, und aus der Ruhe zu bringen ist sie weder
     leicht noch schwer — sie ist einfach nicht so weit beteiligt.

     Sie will Verlässlichkeit, und zwar als Schutz: was in der
     Vorschrift steht, kann ihr niemand vorwerfen. Und sie hätte ganz
     gern dazugehört. Ein bisschen. Das ist der Riss. */
  z: { O: -2, C: 2, E: 1, A: -2, N: 0 },
  m: { FRE: -2, GEL: -1 }
},

/* Das Klischee über den Empfang: freundlich, hilfsbereit, gesprächig
   und immer für einen Gefallen zu haben. Das Gesprächige stimmt
   ungefähr. Die anderen drei sind falsch, und das Hilfsbereite ist das
   genaue Gegenteil — sie hilft exakt so weit, wie es ihre Aufgabe ist. */
rollenprior: { A: 0.5, E: 0.6, C: -0.3, O: 0.4 },

rollentext: `Empfang: das Klischee sagt freundlich, hilfsbereit, gesprächig und immer für einen Gefallen zu haben.`,

/* Die Anzeige spricht über sie in der weiblichen Form. */
anrede: {
  er:`sie`,  Er:`Sie`,  ihn:`sie`,   Ihn:`Sie`,   ihm:`ihr`,
  sein:`ihr`, Sein:`Ihr`, seine:`ihre`, Seine:`Ihre`, seiner:`ihrer`
},

/* Bei ihr heißt gereizt nicht laut. Es heißt höflicher. Das steht
   absichtlich so in der Anzeige — wer den Namen der Stimmung liest,
   muss erst lernen, was er bedeutet. */
stimmungen: {
  neutral:      { t:`sachlich`,          bild:`personen/kettner/bilder/neutral.webp` },
  freundlich:   { t:`verbindlich`,       bild:`personen/kettner/bilder/freundlich.webp` },
  amuesiert:    { t:`trocken`,           bild:`personen/kettner/bilder/amuesiert.webp` },
  interessiert: { t:`aufmerksam`,        bild:`personen/kettner/bilder/interessiert.webp` },
  nachdenklich: { t:`nachdenklich`,      bild:`personen/kettner/bilder/nachdenklich.webp` },
  skeptisch:    { t:`prüfend`,           bild:`personen/kettner/bilder/skeptisch.webp` },
  gereizt:      { t:`sehr höflich`,      bild:`personen/kettner/bilder/gereizt.webp` },
  verschlossen: { t:`verschlossen`,      bild:`personen/kettner/bilder/verschlossen.webp` },
  geruehrt:     { t:`kurz durchlässig`,  bild:`personen/kettner/bilder/geruehrt.webp` },
  abweisend:    { t:`abweisend`,         bild:`personen/kettner/bilder/abweisend.webp` }
},

raumbild: `personen/kettner/bilder/raum.webp`,

/* --- Ankunft. Der Empfang läuft ab, dann hast du genau eine Frage. -- */

baum: {
  start: {
    regie: `Erdgeschoss, gleich hinter der Drehtür. Ein Tresen mit einer Glasscheibe darüber, unten ein Sprechschlitz. Dahinter sitzt sie sehr gerade vor einem aufgeschlagenen Buch und schreibt zu Ende, bevor sie aufsieht.`,
    er: `Einen Moment. — So. Ihr Name?`,
    wie: `freundlich, ohne dass darin Wärme wäre`, stimmung: `neutral`,
    erRegie: `Du sagst ihn. Sie trägt ihn ein, dreht das Buch um und schiebt dir einen Stift durch den Schlitz, ohne den Kopf zu heben.`,
    er2: `Unterschrift hier. Der Ausweis kommt zurück, wenn Sie gehen. Und Sie sind heute der Erste, der sich erst mal umsieht — die anderen wissen alle, wo sie hinwollen.`,
    wie2: `zügig, sehr geübt, eine Spur zu schnell für ein Gespräch`, klang: `eintragen`,
    nachRegie: `Sie schiebt dir einen Besucherausweis zu, Nummer 14, und sieht dich zum ersten Mal an. Hinter ihr klingelt ein Telefon zweimal und hört wieder auf. Ihr habt vierzig Minuten, und du hast eine Frage frei, bevor du sagst, warum du gekommen bist.`,
    frage: true
  },

  buch: {
    er: `Seit 2003. Das ist das neunzehnte.`,
    erRegie: `Sie legt die flache Hand auf das aufgeschlagene Buch, ohne es zuzuklappen.`,
    er2: `Jeder, der dieses Haus betreten hat, steht in einem von neunzehn Büchern, mit Uhrzeit. Ich könnte Ihnen sagen, wann Sie das letzte Mal hier waren, wenn Sie es wissen wollten.`,
    wie: `sachlich`, wie2: `nicht als Drohung, nur als Feststellung`, stimmung: `neutral`,
    fakt: `führt seit 2003 dasselbe Besucherbuch, inzwischen das neunzehnte`, spur: `buch`, ende: true
  },
  scheibe: {
    er: `Die ist von 2011.`,
    erRegie: `Sie klopft mit dem Fingerknöchel einmal seitlich gegen das Glas.`,
    er2: `Davor saß ich offen. Es gab einen Vorfall, danach war die Scheibe da. Und jetzt soll sie wieder weg, weil offen freundlicher aussieht.`,
    wie: `knapp`, wie2: `vollkommen gleichmäßig`, stimmung: `neutral`,
    fakt: `die Scheibe kam 2011 nach einem Vorfall und soll wieder verschwinden`, spur: `scheibe`, ende: true
  },
  ausweis: {
    er: `Vierzehn. Ich habe vierzig Stück.`,
    erRegie: `Sie zieht eine flache Schublade auf, in der die Ausweise in Reihen liegen. Drei Fächer sind leer.`,
    er2: `Drei sind draußen und kommen nicht wieder. Einer seit 2019. Das steht in einer Liste, die ich einmal im Jahr abgebe und die niemand liest.`,
    wie: `sachlich`, wie2: `trocken, fast belustigt`, stimmung: `amuesiert`,
    fakt: `drei Besucherausweise fehlen, einer seit 2019`, ende: true
  }
},

kennenfrage: [
  { t: `Führen Sie das Buch schon lange so?`, wie: `sachlich, mit einem Blick auf die Seite`, ziel: `buch` },
  { t: `Sitzen Sie immer hinter der Scheibe?`, wie: `neugierig, ohne Wertung`, ziel: `scheibe` },
  { t: `Vierzehn — wie viele Ausweise gibt es denn?`, wie: `beiläufig`, ziel: `ausweis` }
],

uebergang1: {
  duFest: `Du sagst, warum du da bist: du brauchst den Antrag A38. Drei Wochen läuft das jetzt, vier Stellen haben dich weitergeschickt, und die letzte hat gesagt, in diesem Haus sitze jemand, der ihn ausstellen darf — R. Melzer, Zimmer 1.14. Wie oft du das inzwischen gehört hast, sagst du nicht.`,
  er: `A38. Melzer, Zimmer 1.14.`,
  erRegie: `Sie sagt beides, ohne nachzusehen, und legt den Stift genau parallel zur Kante des Buches.`,
  er2: `Der hat das Haus im März verlassen. Den Ausweis hat er nicht abgegeben, das steht bei mir bis heute als offen. Sie sind der Vierte, der deswegen kommt. Sie können trotzdem sitzen bleiben — angemeldet ist bis halb zwölf ohnehin niemand.`,
  wie: `verbindlich, ohne jede Überraschung`, wie2: `sachlich`, stimmung: `neutral`
},

/* --- Fuenf Einstiege. Beim Wiederkommen faengt es hier an, nicht bei
       den Merkmalen. Bei ihr sind es lauter Dienstsachen, und genau das
       ist der Punkt: ueber die Arbeit kommt man an sie heran. ------ */

einstieg: [
  { id:`eintragen`, t:`Muss ich mich wieder eintragen?`, wie:`schon nach dem Stift greifend`,
    er:`Jedes Mal.`,
    erRegie:`Sie dreht das Buch um, ohne aufzusehen, und schiebt den Stift durch den Schlitz.`,
    er2:`Auch die Frau, die hier seit achtzehn Jahren putzt. Die findet das albern und trägt sich trotzdem ein.`,
    wie:`freundlich, ohne Verhandlungsspielraum`, wie2:`trocken`, stimmung:`neutral`,
    fakt:`lässt jeden eintragen, auch die Reinigungskraft von achtzehn Jahren` },

  { id:`stapel`, t:`Der Paketstapel ist gewachsen.`, wie:`beiläufig, mit einem Blick nach rechts`,
    er:`Zwei mehr als gestern.`,
    erRegie:`Sie sieht nicht hin. Sie weiß es.`,
    er2:`Ich zähle sie morgens. Nicht weil es jemand verlangt, sondern damit ich sagen kann, wie viele es waren, wenn eines fehlt.`,
    wie:`sachlich`, wie2:`nüchtern`, stimmung:`neutral`,
    fakt:`zählt die Pakete jeden Morgen, für den Fall, dass eines fehlt` },

  { id:`telefon`, t:`Klingelt das den ganzen Tag so?`, wie:`nach dem zweiten Klingeln`,
    er:`Vierzig- bis sechzigmal.`,
    erRegie:`Es klingelt wieder. Sie lässt es zweimal klingeln und geht dann ran, sagt zwei Sätze, legt auf.`,
    er2:`So. Die Hälfte davon will die Nummer von jemandem, die im Telefonbuch steht.`,
    wie:`ohne Klage`, wie2:`trocken`, stimmung:`neutral`,
    fakt:`bekommt vierzig bis sechzig Anrufe am Tag, die Hälfte davon überflüssig` },

  { id:`wetter`, t:`Draußen ist es ekelhaft.`, wie:`während du dir den Mantel abklopfst`,
    er:`Sehe ich am Boden.`,
    erRegie:`Sie zeigt mit dem Stift auf den Steinboden vor dem Tresen, auf dem zwei nasse Streifen liegen.`,
    er2:`Bis mittags ist das eine Rutschbahn, und wer hinfällt, fällt hier vorn hin. Ich habe dreimal um eine Matte gebeten.`,
    wie:`sachlich`, wie2:`gleichmäßig`, stimmung:`neutral`,
    fakt:`hat dreimal um eine Fußmatte gebeten, weil der Boden vorn rutschig wird` },

  { id:`ruhe`, t:`Es ist heute erstaunlich ruhig hier.`, wie:`ehrlich`,
    er:`Ferien.`,
    erRegie:`Sie legt den Stift genau parallel zur Kante, was er schon war.`,
    er2:`Zwei Wochen. In der ersten ist es angenehm, in der zweiten sitze ich hier und höre die Uhr.`,
    wie:`knapp`, wie2:`sachlich, und einen Ton zu ehrlich`, stimmung:`nachdenklich`,
    fakt:`hört in der zweiten Ferienwoche die Uhr` },


  { id:`hausmeisterin`, t:`Unten hat mir jemand die Tür aufgehalten, mit einem Schlüsselbund wie ein Gefängniswärter.`, wie:`erheitert`,
    er:`Frau Vogt.`,
    erRegie:`Sie sagt den Namen, ohne zu lächeln, und trägt etwas ein.`,
    er2:`Die Einzige in diesem Haus, die mir etwas bringt, ohne dass ich darum bitte. Im Winter Streusalz, und einmal eine Fußmatte, die sie irgendwo aufgetrieben hat. Die durfte nicht liegen bleiben, Brandschutz. Sie hat sie trotzdem gebracht.`,
    wie:`sachlich`, wie2:`gleichmäßig, und irgendwo darin steckt etwas`, stimmung:`neutral`,
    fakt:`Angela Vogt hat ihr einmal eine Fußmatte gebracht, die nicht liegen bleiben durfte` }
],

/* --- Die Frage nach Arbeit. Sie ist die Erste, die man fragt, und die
       Letzte, die etwas verraet, solange man ihr fremd ist: Auskunft
       gibt sie ueber das Haus, nicht ueber Menschen. ------------- */

antrag: {
  frage: `Wo bekomme ich den A38?`,
  wie: `beiläufig, als wäre es dir gerade eingefallen`,
  zu: { er:`Da kann ich Ihnen nicht weiterhelfen. Formulare liegen im Regal rechts neben dem Aufzug, alphabetisch, A bis C im obersten Fach.`,
        erRegie:`Sie zeigt mit dem Stift in die Richtung, ohne hinzusehen.`,
        er2:`Was nicht dort liegt, gibt es nicht. Jedenfalls nicht für Besucher.`,
        wie:`freundlich, vollständig, und ohne einen Krümel Inhalt`,
        wie2:`sachlich`, stimmung:`neutral` },
  offen: { er:`Ich weiß es nicht.`,
           erRegie:`Sie legt den Stift hin und sieht dich zum ersten Mal an, ohne dabei etwas einzutragen.`,
           er2:`Aber ich gebe es weiter. An die Hausmeisterin — Frau Vogt weiß über dieses Haus mehr als ich. Den Gang hinunter, letzte Tür. Sie steht offen, das tut sie immer.`,
           wie:`trocken`, wie2:`nüchtern, und darin liegt zum ersten Mal etwas`, stimmung:`interessiert`,
           fakt:`gibt deinen Namen an Angela Vogt weiter` }
},

/* --- Neun Fragen zur Person. l = wie stark eine Antwort für welches
       Merkmal spricht. Ihr Neurotizismus liegt genau in der Mitte: sie
       ist nicht robust wie Angela, sie ist nur nicht weit genug
       beteiligt, um erschüttert zu werden. Auf N wird sie deshalb keine
       Antwort geben, die in eine Richtung zieht — das ist Absicht und
       nicht Faulheit beim Schreiben. --------------------------------- */

bigfive: [
  { id:`gefallen`, q:`Jemand bittet Sie um etwas, das nicht Ihre Aufgabe ist.`,
    a:[
      {id:`nein`, wie:`freundlich und sofort`, stimmung:`neutral`,
       t:`Dann sage ich, dass das nicht mein Aufgabenbereich ist, und wer zuständig ist. Das ist keine Unfreundlichkeit, das ist eine Auskunft.`,
       l:{A:-2.2}, fakt:`sagt Bitten ab, die nicht ihre Aufgabe sind, und nennt die Zuständigen`},
      {id:`gern`, wie:`warm`, stimmung:`freundlich`,
       t:`Meistens mache ich es. Es dauert ja selten lange, und die Leute freuen sich.`,
       l:{A:2.1}},
      {id:`ordnung`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Ich frage, ob es angemeldet ist. Wenn es angemeldet ist, mache ich es, sonst nicht.`,
       l:{C:1.5}},
      {id:`sofortweg`, wie:`knapp, schon beim Telefon`, stimmung:`neutral`,
       t:`Ich habe zwei Leitungen und eine Schlange. Was nicht meins ist, halte ich hier auf.`,
       l:{A:-1.2, E:0.9}}
    ]},

  { id:`neuerung`, q:`Hier soll etwas umgestellt werden. Was denken Sie zuerst?`,
    a:[
      {id:`wieder`, wie:`ohne Bewegung im Gesicht`, stimmung:`neutral`,
       t:`Dass ich das jetzt zum sechsten Mal höre. Fünfmal ist danach etwas weggefallen, was ich gebraucht habe.`,
       l:{O:-2.2}, fakt:`hat fünf Umstellungen erlebt und nach jeder etwas verloren`},
      {id:`neugierig`, wie:`interessiert`, stimmung:`interessiert`,
       t:`Dass ich es mir ansehen sollte. Vielleicht ist es ja besser als das, was wir haben.`,
       l:{O:2.0, A:0.5}},
      {id:`liste`, wie:`sachlich`, stimmung:`neutral`,
       t:`Dass ich aufschreiben muss, was sich für mich ändert. Sonst merkt es niemand rechtzeitig.`,
       l:{C:2.0, O:-0.4}},
      {id:`egal`, wie:`gleichmütig`, stimmung:`neutral`,
       t:`Nicht viel. Sie stellen um, ich mache weiter. So oder so sitze ich hier.`,
       l:{N:-1.4, A:-0.8}}
    ]},

  { id:`streit`, q:`Jemand wird am Tresen laut. Was passiert dann?`,
    a:[
      {id:`hoeflicher`, wie:`ruhiger, als die Frage war`, stimmung:`neutral`,
       t:`Dann werde ich höflicher. Das ist das Einzige, was hilft, und es ärgert die Leute mehr als alles andere.`,
       l:{A:-2.0}, fakt:`wird höflicher, je lauter jemand wird`},
      {id:`zurueck`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Dann sage ich ihm, dass er das lassen soll. Deutlich.`,
       l:{E:1.7, A:-0.5}},
      {id:`nachgeben`, wie:`besänftigend`, stimmung:`freundlich`,
       t:`Dann suche ich einen Weg. Meistens will jemand nur, dass ihm einer zuhört.`,
       l:{A:2.0}},
      {id:`aufregen`, wie:`leiser`, stimmung:`nachdenklich`,
       t:`Dann sitzt mir das den Rest des Tages im Nacken.`,
       l:{N:2.0, A:0.4}}
    ]},

  { id:`tresen`, q:`Sieht bei Ihnen immer so aus?`,
    a:[
      {id:`immer`, wie:`ohne Stolz, als wäre es das Normale`, stimmung:`neutral`,
       t:`Ja. Das Buch links, der Stift parallel, die Ausweise nach Nummern. Ich könnte das im Dunkeln.`,
       l:{C:2.1}, fakt:`hält den Tresen so, dass sie ihn im Dunkeln bedienen könnte`},
      {id:`durcheinander`, wie:`achselzuckend`, stimmung:`neutral`,
       t:`Nein, heute ist ausnahmsweise Ordnung. Sonst liegt hier alles.`,
       l:{C:-2.0, E:0.5}},
      {id:`neuerdings`, wie:`aufgeräumt`, stimmung:`interessiert`,
       t:`Ich stelle gerade um. Ich habe gesehen, wie das in einem anderen Haus gemacht wird, und probiere es aus.`,
       l:{O:2.0, C:0.4}},
      {id:`praktisch`, wie:`sachlich`, stimmung:`neutral`,
       t:`So weit, wie ich es brauche. Was ich nicht brauche, räume ich auch nicht auf.`,
       l:{C:-0.9, A:-0.6}}
    ]},

  { id:`leute`, q:`Sie sehen hier jeden Tag hundert Leute.`,
    a:[
      {id:`namen`, wie:`nüchtern`, stimmung:`neutral`,
       t:`Zweihundertvierzig sind im Haus. Ich kenne alle Namen und von den meisten die Uhrzeit, zu der sie kommen. Kennen tue ich niemanden davon.`,
       l:{A:-2.0, C:0.5}, fakt:`kennt zweihundertvierzig Namen und keinen einzigen Menschen`},
      {id:`gern`, wie:`wärmer`, stimmung:`freundlich`,
       t:`Und mit den meisten wechsele ich zwei Sätze. Das ist das Schöne an der Stelle.`,
       l:{A:1.8, E:0.6}},
      {id:`anstrengend`, wie:`beiläufig`, stimmung:`neutral`,
       t:`Reden kostet mich nichts. Ich rede den ganzen Tag und gehe abends raus, als hätte ich geschwiegen.`,
       l:{E:1.9}},
      {id:`still`, wie:`gedämpft`, stimmung:`verschlossen`,
       t:`Zu viele. Ich bin froh, wenn zwischen zwölf und eins niemand kommt.`,
       l:{E:-1.9}}
    ]},

  { id:`feierabend`, q:`Wann sind Sie hier abends raus?`,
    a:[
      {id:`punkt`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Sechzehn Uhr dreißig. Nicht sechzehn Uhr fünfunddreißig. Ich habe eine Ablösung, und wenn sie da ist, gehe ich.`,
       l:{C:1.9}, fakt:`geht auf die Minute, sobald die Ablösung da ist`},
      {id:`laenger`, wie:`ergeben`, stimmung:`neutral`,
       t:`Wenn noch jemand im Haus ist, bleibe ich. Man kann ja nicht zusperren, wenn oben noch Licht brennt.`,
       l:{A:1.7, C:0.5}},
      {id:`kollegen`, wie:`lebhafter`, stimmung:`freundlich`,
       t:`Manchmal steht man noch zehn Minuten an der Tür und redet. Das ist der beste Teil vom Tag.`,
       l:{E:2.0}},
      {id:`sofort`, wie:`trocken`, stimmung:`amuesiert`,
       t:`Ich stehe um sechzehn Uhr neunundzwanzig mit dem Mantel da. Das wissen hier alle, und es hat noch nie jemand etwas gesagt.`,
       l:{A:-1.9, C:0.5}}
    ]},

  { id:`fehler`, q:`Sie haben mal etwas übersehen. Was passiert dann?`,
    a:[
      {id:`nachweis`, wie:`sofort`, stimmung:`neutral`,
       t:`Dann sehe ich nach, was ich eingetragen habe, und wenn es drinsteht, war es nicht mein Fehler. Deshalb trage ich alles ein.`,
       l:{C:1.6, A:-0.9}, fakt:`trägt alles ein, damit sich hinterher nachweisen lässt, was sie getan hat`},
      {id:`grübeln`, wie:`leiser`, stimmung:`nachdenklich`,
       t:`Dann liegt mir das nachts im Magen. Ich gehe es dann durch, mehrmals.`,
       l:{N:2.1}},
      {id:`achsel`, wie:`gleichmütig`, stimmung:`neutral`,
       t:`Nicht viel. Es ist ein Empfang, kein Operationssaal.`,
       l:{N:-2.0, A:-0.5}},
      {id:`entschuldigen`, wie:`zugewandt`, stimmung:`freundlich`,
       t:`Dann gehe ich hin und sage es. Lieber einmal zu viel als einmal zu wenig.`,
       l:{A:1.8}}
    ]},

  { id:`zweiundzwanzig`, q:`Zweiundzwanzig Jahre an einem Tresen. Wollten Sie nie etwas anderes?`,
    a:[
      {id:`nie`, wie:`ohne Zögern`, stimmung:`neutral`,
       t:`Nein. Ich weiß, was ich hier zu tun habe, und ich weiß es seit zweiundzwanzig Jahren genau.`,
       l:{O:-2.1, C:0.6}},
      {id:`fast`, wie:`kürzer`, stimmung:`nachdenklich`,
       t:`Einmal. 2011. Danach nicht mehr.`,
       l:{O:-1.0, N:0.6, A:-0.4}, fakt:`hat 2011 einmal daran gedacht zu gehen und danach nie wieder`, spur:`elf`},
      {id:`gerne`, wie:`interessiert`, stimmung:`interessiert`,
       t:`Doch, öfter. Ich habe mich zweimal woanders beworben, einfach um zu sehen, was es sonst gibt.`,
       l:{O:1.9, E:0.5}},
      {id:`egalwo`, wie:`achselzuckend`, stimmung:`neutral`,
       t:`Arbeit ist Arbeit. Hier ist es trocken und warm und der Weg ist kurz.`,
       l:{O:-1.5, N:-1.0}}
    ]},

  { id:`vorschrift`, q:`Wie halten Sie es mit Vorschriften, die keinen Sinn ergeben?`,
    a:[
      {id:`trotzdem`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Ich halte mich daran. Eine Vorschrift, die keinen Sinn ergibt, ist immer noch etwas, hinter dem ich stehen kann, wenn es schiefgeht.`,
       l:{C:2.0, O:-1.0}, fakt:`hält sich an jede Vorschrift, weil sie hinterher dahinter stehen kann`},
      {id:`umgehen`, wie:`trocken`, stimmung:`amuesiert`,
       t:`Ich mache es so, dass es aussieht wie die Vorschrift. Nach zweiundzwanzig Jahren weiß man, wie.`,
       l:{A:-1.2, O:1.2}},
      {id:`ansprechen`, wie:`sachlich`, stimmung:`neutral`,
       t:`Ich schreibe hin, warum das nicht geht. Einmal. Danach halte ich mich daran.`,
       l:{E:1.4, C:0.7}},
      {id:`ausnahme`, wie:`freundlich`, stimmung:`freundlich`,
       t:`Bei manchen Leuten drücke ich ein Auge zu. Das muss man auch können.`,
       l:{A:2.0, C:-1.2}}
    ]}
],

/* --- Sieben Fragen auf zwei Waagen. Sie will Verlässlichkeit, und
       zwar nicht aus Liebe zur Ordnung, sondern als Deckung: was in
       der Vorschrift steht, kann ihr niemand vorwerfen. Und sie will
       ein wenig dazugehören — nicht viel, aber es ist das Einzige,
       was bei ihr eine Tür ist. -------------------------------------- */

motivfragen: [
  { id:`wechsel`, q:`Was müsste eine andere Stelle haben, damit Sie wechseln?`,
    a:[
      {id:`freihand`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Dass ich selbst entscheide, wen ich hereinlasse und wen nicht. Ohne dass mir jemand hinterher erklärt, wie ich es hätte machen sollen.`,
       aff:{FRE:2.0}},
      {id:`geregelt`, wie:`sofort`, stimmung:`neutral`,
       t:`Dass geschrieben steht, was ich zu tun habe. Vollständig. Nicht die Hälfte und den Rest nach Gefühl.`,
       aff:{FRE:-2.2}, fakt:`will vollständig geschrieben haben, was ihre Aufgabe ist`},
      {id:`gesehen`, wie:`kühl`, stimmung:`neutral`,
       t:`Dass mein Name irgendwo steht. Auf einer Tür würde reichen. Hier steht Empfang.`,
       aff:{GEL:2.0}},
      {id:`zuzweit`, wie:`eine Spur weniger fest`, stimmung:`nachdenklich`,
       t:`Dass ich nicht allein sitze. Zu zweit an einem Tresen ist ein anderer Beruf.`,
       aff:{GEL:-2.1}, fakt:`säße lieber zu zweit am Tresen`}
    ]},

  { id:`guterTag`, q:`Woran merken Sie, dass ein Tag gut war?`,
    an:{ 'wechsel:geregelt': `Wenn geschrieben stünde, was Sie zu tun haben: woran merken Sie dann, dass ein Tag gut war?` },
    a:[
      {id:`selbst`, wie:`sachlich`, stimmung:`neutral`,
       t:`Wenn ich einmal entschieden habe, ohne oben zu fragen, und es hat gestimmt.`,
       aff:{FRE:1.8}},
      {id:`nichts`, wie:`nüchtern`, stimmung:`neutral`,
       t:`Wenn nichts vorgefallen ist. Kein Fehleintrag, keine Rückfrage, niemand im Haus, der nicht im Buch steht.`,
       aff:{FRE:-2.0}, fakt:`hält den Tag für gut, an dem niemand im Haus ist, der nicht im Buch steht`},
      {id:`gedankt`, wie:`trocken`, stimmung:`neutral`,
       t:`Wenn einer sagt, dass ich etwas gefunden habe, was er selbst nicht gefunden hätte. Das kommt vielleicht dreimal im Jahr vor.`,
       aff:{GEL:1.9}},
      {id:`kaffee`, wie:`einen Ton weicher`, stimmung:`freundlich`,
       t:`Wenn jemand auf dem Weg nach draußen stehen bleibt und zwei Sätze sagt, die nichts mit dem Haus zu tun haben.`,
       aff:{GEL:-2.0}}
    ]},

  { id:`nervt`, q:`Was ärgert Sie hier am meisten?`,
    a:[
      {id:`hineinregieren`, wie:`sehr gleichmäßig`, stimmung:`neutral`,
       t:`Dass drei Leute mir sagen, wie der Empfang zu laufen hat, und keiner von den dreien hier je gesessen hat.`,
       aff:{FRE:1.9}},
      {id:`unklar`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Dass nirgends steht, was ich darf. Wenn ich jemanden hereinlasse, war ich zu lasch, und wenn nicht, war ich unfreundlich. Beides erfahre ich hinterher.`,
       aff:{FRE:-2.2}, fakt:`erfährt immer erst hinterher, ob sie richtig entschieden hat`},
      {id:`unsichtbar`, wie:`kühl, ohne Klage`, stimmung:`verschlossen`,
       t:`Dass zweihundertvierzig Leute an mir vorbeigehen und ungefähr vierzig grüßen.`,
       aff:{GEL:2.0}},
      {id:`allein`, wie:`leiser`, stimmung:`nachdenklich`,
       t:`Dass ich hier vorne sitze und die anderen alle irgendwo zusammen sind. In der Kantine, in den Büros, im Hof.`,
       aff:{GEL:-2.1}, fakt:`sitzt vorn, während alle anderen irgendwo zusammen sind`}
    ]},

  { id:`aendern`, q:`Wenn Sie hier morgen eine Sache ändern dürften — welche?`,
    an:{ 'nervt:unklar': `Und wenn schriftlich stünde, was Sie dürfen: was käme als Nächstes?` },
    a:[
      {id:`hausrecht`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Dass ich jemanden hinausbitten darf, ohne vorher anzurufen. Ich sehe an der Tür in zwei Sekunden, was ich oben in zehn Minuten erkläre.`,
       aff:{FRE:2.0}},
      {id:`dienstanweisung`, wie:`sofort`, stimmung:`neutral`,
       t:`Eine Dienstanweisung für den Empfang. Es gibt keine. Es hat nie eine gegeben, und das erfährt man immer nur, wenn etwas passiert ist.`,
       aff:{FRE:-2.1}, fakt:`für den Empfang gibt es keine Dienstanweisung und hat es nie gegeben`},
      {id:`schild`, wie:`trocken`, stimmung:`neutral`,
       t:`Ein Schild mit meinem Namen. Nicht aus Eitelkeit — damit die Leute wissen, mit wem sie reden.`,
       aff:{GEL:1.8}},
      {id:`ablösung`, wie:`ruhig`, stimmung:`neutral`,
       t:`Eine zweite Kraft für die Mittagszeit. Dann könnte ich einmal am Tag dort essen, wo die anderen essen.`,
       aff:{GEL:-2.0}}
    ]},

  { id:`nichts`, q:`Und wenn sich nichts ändert?`,
    a:[
      {id:`weiter`, wie:`gleichmütig`, stimmung:`neutral`,
       t:`Dann mache ich weiter wie bisher und entscheide es eben selbst. Fragen kann ich hinterher immer noch.`,
       aff:{FRE:1.7}},
      {id:`absichern`, wie:`sachlich`, stimmung:`neutral`,
       t:`Dann trage ich weiter alles ein. Mit Uhrzeit. Das ist keine Ordnungsliebe, das ist meine Rückendeckung.`,
       aff:{FRE:-2.0}, fakt:`trägt alles mit Uhrzeit ein, als Rückendeckung`},
      {id:`aktenkundig`, wie:`kühl`, stimmung:`neutral`,
       t:`Dann schreibe ich es einmal im Jahr in den Bericht. Er wird nicht gelesen, aber er liegt.`,
       aff:{GEL:1.8}},
      {id:`bleiben`, wie:`ruhig`, stimmung:`neutral`,
       t:`Dann bleibt es so. Ich habe noch tausendsechshundertvierzig Arbeitstage, das geht.`,
       aff:{GEL:-1.8}, fakt:`hat sich ausgerechnet, dass sie noch tausendsechshundertvierzig Arbeitstage hat`}
    ]},

  { id:`reinreden`, q:`Wer redet Ihnen rein, wenn Sie etwas anders machen wollen?`,
    a:[
      {id:`keiner`, wie:`trocken`, stimmung:`amuesiert`,
       t:`Hier vorne keiner. Zwischen Drehtür und Treppe bin ich das Haus.`,
       aff:{FRE:1.9}},
      {id:`alle`, wie:`sachlich, ohne Groll`, stimmung:`neutral`,
       t:`Alle. Und weil alle es dürfen, mache ich nur, was schriftlich vorliegt. Dann ist es nicht meine Entscheidung.`,
       aff:{FRE:-2.1}},
      {id:`protokoll`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Ich mache es und trage ein, dass ich es war. Mit Namen. Sonst schreibt es sich hinterher jemand anders zu.`,
       aff:{GEL:1.9}},
      {id:`absprechen`, wie:`ruhig`, stimmung:`neutral`,
       t:`Ich frage die Kollegin vom Nachmittag. Wir haben zusammen achtunddreißig Jahre an diesem Tresen.`,
       aff:{GEL:-2.0}, fakt:`bespricht Änderungen mit der Kollegin vom Nachmittag`}
    ]},

  { id:`entscheiden`, q:`Jemand steht vor Ihnen, der nicht angemeldet ist. Wie entscheiden Sie?`,
    an:{ 'reinreden:alle': `Sie sagten, Sie machen nur, was schriftlich vorliegt. Und wenn jemand vor Ihnen steht, der nicht angemeldet ist?` },
    a:[
      {id:`selbst`, wie:`zügig`, stimmung:`neutral`,
       t:`Nach Gefühl, in zwei Sekunden. Ich sitze hier seit zweiundzwanzig Jahren, ich sehe das.`,
       aff:{FRE:1.8}},
      {id:`anrufen`, wie:`bestimmt`, stimmung:`neutral`,
       t:`Ich rufe oben an. Jedes Mal, auch wenn ich weiß, was gesagt wird. Dann hat es jemand gesagt.`,
       aff:{FRE:-2.1}},
      {id:`vermerk`, wie:`sachlich`, stimmung:`neutral`,
       t:`Ich lasse ihn warten und schreibe einen Vermerk. Der geht am selben Tag raus, mit meinem Kürzel.`,
       aff:{GEL:1.7}},
      {id:`kollegin`, wie:`beiläufig`, stimmung:`neutral`,
       t:`Ich sehe nach, ob die Kollegin ihn kennt. Sie kennt fast immer jemanden.`,
       aff:{GEL:-2.0}}
    ]}
],

/* --- Was sie privat bewegt. Dieselben vier Kennungen wie bei den
       anderen — die Kennungen sind Fächer, kein Inhalt. --------------------- */

privat: {
  grenze: 10,
  felder: [
    { id:`musik`,     was:`Feierabend`, wahr:`läuft abends zwei Stunden mit ihrem Hund und redet dabei laut mit ihm` },
    { id:`werkstatt`, was:`zu Hause`,   wahr:`repariert Nähmaschinen, die Leute ihr bringen, und nimmt nichts dafür` },
    { id:`tochter`,   was:`Familie`,    wahr:`ihr Bruder wohnt vier Straßen weiter, gesprochen haben sie seit elf Jahren nicht` },
    { id:`plan60`,    was:`Zukunft`,    wahr:`weiß auswendig, dass sie noch tausendsechshundertvierzig Arbeitstage hat` }
  ]
},

privatfragen: [
  { id:`feierabend`, gibt:`musik`, auf:1,
    q:`Was machen Sie, wenn Sie hier raus sind?`,
    offen: { er:`Ich laufe. Zwei Stunden, mit dem Hund, immer dieselbe Runde.`,
             erRegie:`Sie sagt es sachlich und dann kommt noch etwas hinterher, was sie offenbar nicht vorhatte.`,
             er2:`Und ich rede dabei mit ihm. Laut. Wenn mir jemand entgegenkommt, höre ich auf, und danach fange ich wieder an.`,
             wie:`knapp`, wie2:`nüchtern, als läse sie es ab`, stimmung:`nachdenklich`,
             fakt:`läuft abends zwei Stunden mit ihrem Hund und redet laut mit ihm` },
    zu:    { er:`Nach Hause.`, wie:`abschließend`, stimmung:`verschlossen` } },

  { id:`zuhause`, gibt:`werkstatt`, auf:1,
    q:`Machen Sie zu Hause auch etwas mit den Händen?`,
    an:{ buch:`Sie führen hier ein Buch seit 2003. Gibt es zu Hause auch so etwas, das Sie machen?` },
    offen: { er:`Nähmaschinen. Alte, mit Fußantrieb und mit Motor.`,
             erRegie:`Zum ersten Mal wird sie schneller.`,
             er2:`Die Leute bringen sie mir, weil sonst niemand sie mehr repariert. Ich nehme nichts dafür. Wenn ich etwas nähme, müsste ich einen Termin machen und garantieren, dass sie läuft. So bringen sie sie und holen sie ab.`,
             wie:`sachlich`, wie2:`schnell, mit erkennbarem Vergnügen`, stimmung:`interessiert`,
             fakt:`repariert Nähmaschinen und nimmt nichts dafür, damit sie nichts garantieren muss` },
    zu:    { er:`Nichts Besonderes.`, wie:`abweisend`, stimmung:`skeptisch` } },

  { id:`familie`, gibt:`tochter`, auf:2,
    q:`Haben Sie Familie hier in der Stadt?`,
    offen: { er:`Einen Bruder. Vier Straßen weiter.`,
             erRegie:`Sie richtet den Stift, der schon gerade liegt.`,
             er2:`Wir haben seit elf Jahren nicht gesprochen. Es gibt keinen großen Grund dafür. Es hat einmal aufgehört, und danach war jeder Tag ein Tag, an dem man wieder anfangen müsste.`,
             wie:`sehr sachlich`, wie2:`gleichmäßig, und genau deshalb hörst du es`, stimmung:`geruehrt`,
             fakt:`spricht seit elf Jahren nicht mit ihrem Bruder, der vier Straßen weiter wohnt` },
    zu:    { er:`Das gehört nicht hierher.`, wie:`freundlich und endgültig`, stimmung:`verschlossen` } },

  { id:`weiter`, gibt:`plan60`, auf:2,
    q:`Und wie lange noch, bis Sie hier aufhören?`,
    an:{ elf:`Sie sagten, 2011 einmal und danach nie wieder. Wie lange bleiben Sie denn noch?` },
    offen: { er:`Tausendsechshundertvierzig Arbeitstage.`,
             erRegie:`Sie sagt die Zahl ohne nachzudenken.`,
             er2:`Ich habe das einmal ausgerechnet, vor vier Jahren, und seitdem ziehe ich morgens einen ab. Das klingt schlimmer, als es ist. Es ist auch ein Weg, einen Tag zu Ende zu bringen.`,
             wie:`nüchtern`, wie2:`ruhig, ohne Selbstmitleid`, stimmung:`nachdenklich`,
             fakt:`zieht jeden Morgen einen von tausendsechshundertvierzig Arbeitstagen ab` },
    zu:    { er:`Bis ich kann.`, wie:`kurz`, stimmung:`skeptisch` } },

  /* Die plumpen Fragen. Sie liefern fast sicher, kosten aber das Dreifache. */
  { id:`direkt`, gibt:`musik`, auf:3, plump:true,
    q:`Erzählen Sie doch mal was von sich privat.`,
    offen: { er:`Ich habe einen Hund.`, wie:`sehr knapp`, stimmung:`skeptisch`,
             nachEr:`Genügt das, oder soll ich die Rasse dazusagen?`,
             fakt:`läuft abends zwei Stunden mit ihrem Hund und redet laut mit ihm` },
    zu:    { er:`Nein.`, erRegie:`Sie lächelt dabei, und das Lächeln geht sofort wieder aus.`,
             er2:`Sie sind Besucher vierzehn. Ich gebe Auskunft über das Haus. Über mich gebe ich keine Auskunft, und das ist keine Laune, das ist die Regel, die ich mir gegeben habe.`,
             wie:`freundlich`, wie2:`sehr höflich, und komplett zu`, stimmung:`gereizt` } },

  { id:`kinder`, gibt:`tochter`, auf:3, plump:true,
    q:`Sind Sie verheiratet? Kinder?`,
    offen: { er:`Nein und nein. Einen Bruder, mit dem ich nicht rede.`, wie:`in einem Zug, ohne Betonung`, stimmung:`verschlossen`,
             fakt:`spricht seit elf Jahren nicht mit ihrem Bruder, der vier Straßen weiter wohnt` },
    zu:    { er:`Was hat das mit Ihrem Termin zu tun?`,
             wie:`ausgesucht freundlich`, stimmung:`gereizt` } },

  { id:`geld`, gibt:`plan60`, auf:3, plump:true,
    q:`Verdient man denn genug am Empfang?`,
    offen: { er:`Nein. Aber es sind nur noch tausendsechshundertvierzig Tage.`,
             erRegie:`Sie merkt, dass sie die Zahl gesagt hat, und sagt nichts weiter.`,
             wie:`erst trocken, dann still`, stimmung:`nachdenklich`,
             fakt:`zieht jeden Morgen einen von tausendsechshundertvierzig Arbeitstagen ab` },
    zu:    { er:`Das fragt man nicht, und Sie wissen das.`, wie:`freundlich, mit einem Blick zum nächsten Wartenden`, stimmung:`gereizt` } }
],

hinausgeworfen: {
  regie: `Sie zieht das Buch zu sich heran, dreht es um und schiebt dir den Stift durch den Schlitz.`,
  er: `Ich trage Sie jetzt aus. Der Ausweis bitte — Nummer vierzehn.`,
  wie: `verbindlich, freundlich, und vollkommen endgültig`, stimmung: `abweisend`
},

/* --- Was gerade bei ihr los ist. Zehn Lagen, je drei Wege hinein.

       Bei ihr trägt die Sache und nur die Sache: Ablauf, Vorschrift,
       Formular, Zuständigkeit. Jeder Weg, der über den Menschen geht —
       Mitgefühl, Vertraulichkeit, gemeinsames Schimpfen —, geht daneben,
       und zwar auch dann, wenn er gut gemeint ist. Das ist genau
       umgekehrt zu Angela, die einen Gang weiter hinten sitzt: die
       erreicht man nur über den Menschen. --------------------------- */

zustaende: [

{ id:`karten`, titel:`Das Buch soll abgeschafft werden`,
  regie:`Neben dem Besucherbuch liegt ein Prospekt mit einem schwarzen Kartenleser darauf. Jemand hat mit Kugelschreiber ein Fragezeichen an den Rand gesetzt, sehr klein.`,
  er:`Ab Januar soll das elektronisch laufen. Das Buch fällt weg.`,
  wie:`sachlich, ohne den Prospekt anzusehen`, stimmung:`neutral`,
  bedarf:{ id:`kart_sic`, was:`verliert den einzigen Nachweis dafür, was sie getan hat`, braucht:{FRE:-1.8} },
  fragen:[
    { id:`wasfaellt`, t:`Was steht im Buch, das im System nicht steht?`, wie:`sachlich, sehr konkret`,
      liest:{C:1.2, E:0.4},
      gut:{ er:`Die Uhrzeit, zu der jemand wieder gegangen ist.`,
            erRegie:`Sie schlägt das Buch eine Seite zurück und dreht es zu dir.`,
            er2:`Und der Grund, warum ich jemanden nicht hereingelassen habe. Das System kennt nur, wer drin war. Es kennt nicht, wen ich abgewiesen habe und weshalb. Genau danach hat mich 2011 jemand gefragt. Frau Vogt unten hat denselben Prospekt bekommen — ihr nehmen sie die Schlüssel weg. Wir sind offenbar dasselbe Vorhaben.`,
            wie:`sofort`, wie2:`sehr genau`, stimmung:`interessiert`,
            fakt:`nur das Buch verzeichnet, wen sie abgewiesen hat und warum`, bez:8 },
      zu:{ er:`Papier eben.`, wie:`knapp`, stimmung:`verschlossen`, bez:-2 } },

    { id:`modern`, t:`So ein System ist doch praktisch, das nimmt Ihnen Arbeit ab.`, wie:`munter`,
      liest:{O:1.3, A:0.5},
      gut:{ er:`Für die Verwaltung sicher.`, wie:`trocken`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Arbeit abnehmen.`,
           erRegie:`Sie legt den Prospekt mit dem Bild nach unten.`,
           er2:`Ich habe fünf Umstellungen erlebt. Nach jeder war etwas weg, was ich gebraucht habe, und dazugekommen ist eine Eingabemaske. Sie können mir gern erklären, warum die sechste anders wird. Ich höre zu.`,
           wie:`gedehnt`, wie2:`ausgesucht freundlich`, stimmung:`gereizt`, bez:-7 } },

    { id:`gefragtworden`, t:`Hat man Sie gefragt, bevor das entschieden wurde?`, wie:`geradeheraus`,
      liest:{C:0.9, A:-0.5},
      gut:{ er:`Nein. Ich habe den Prospekt aus dem Fach genommen, in dem die Post liegt.`,
            erRegie:`Sie zeigt mit dem Stift auf ein Fach hinter sich, ohne hinzusehen.`,
            er2:`Er war nicht an mich adressiert. Er lag zwischen zwei Rundschreiben, und ich lese alles, was hier liegt. So erfahre ich Sachen.`,
            wie:`nüchtern`, wie2:`ohne jede Empörung`, stimmung:`amuesiert`,
            fakt:`hat vom Kartensystem aus einem Prospekt erfahren, der nicht an sie adressiert war`, bez:7 },
      zu:{ er:`Das entscheiden andere.`, wie:`abschließend`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`vorfall`, titel:`Jemand war im Haus, der nicht im Buch steht`,
  regie:`Auf dem Tresen liegt ein ausgefülltes Formular mit dem Wort Vorkommnis. Es ist unterschrieben und nicht abgegeben.`,
  er:`Am Donnerstag war jemand im ersten Stock, der hier nicht vorbeigekommen ist.`,
  wie:`sehr gleichmäßig`, stimmung:`neutral`,
  bedarf:{ id:`vorf_sic`, was:`soll für einen Weg geradestehen, den sie gar nicht kontrollieren kann`, braucht:{FRE:-1.7} },
  fragen:[
    { id:`wieherein`, t:`Wie kommt jemand an Ihnen vorbei?`, wie:`sachlich`,
      liest:{C:1.1, O:-0.4},
      gut:{ er:`Durch die Anlieferung. Die Tür schließt nicht, seit die Feder hin ist.`,
            erRegie:`Sie tippt zweimal auf das Formular.`,
            er2:`Das habe ich viermal gemeldet. Das Formular hier ist das fünfte Mal. Ich gebe es nicht ab, weil hinterher steht, dass der Empfang etwas nicht bemerkt hat.`,
            wie:`sofort`, wie2:`nüchtern`, stimmung:`interessiert`,
            fakt:`die Anliefertür schließt nicht, viermal gemeldet, das fünfte Formular liegt ungeschickt`, bez:8 },
      zu:{ er:`Es gibt Wege.`, wie:`abweisend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`nichtihreschuld`, t:`Das kann Ihnen doch niemand vorwerfen.`, wie:`beruhigend`,
      liest:{A:1.2, N:0.6},
      gut:{ er:`Vermutlich nicht.`, wie:`knapp`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Doch.`,
           erRegie:`Sie sieht dich an und lächelt kurz.`,
           er2:`2011 hat mir das jemand vorgeworfen, und danach war eine Scheibe zwischen mir und der Tür. Sie sind sehr freundlich. Aber Sie wissen nicht, wovon Sie reden, und das hilft mir nicht.`,
           wie:`ruhig`, wie2:`ausgesucht höflich`, stimmung:`gereizt`, bez:-8 } },

    { id:`waspassiertjetzt`, t:`Was passiert jetzt damit?`, wie:`praktisch`,
      liest:{C:1.0, A:-0.4},
      gut:{ er:`Nichts, solange ich es nicht abgebe.`,
            erRegie:`Sie legt das Formular in eine Mappe und die Mappe an ihren Platz.`,
            er2:`Ich hebe es auf. Wenn noch einmal etwas ist, gebe ich alle fünf zusammen ab. Einzeln ist es eine Beschwerde, fünf zusammen sind ein Befund.`,
            wie:`sachlich`, wie2:`sehr bestimmt`, stimmung:`interessiert`,
            fakt:`sammelt die Meldungen, um sie einmal gemeinsam abzugeben`, bez:7 },
      zu:{ er:`Es wird abgelegt.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`glas`, titel:`Die Scheibe soll weg`,
  regie:`An der Glasscheibe klebt außen ein gelber Zettel mit einer Skizze: derselbe Tresen, ohne Glas, mit einem Blumenkübel daneben.`,
  er:`Offener Empfang, heißt das. Im Oktober kommt die Scheibe raus.`,
  wie:`ruhig, mit einem Blick auf den Zettel`, stimmung:`neutral`,
  bedarf:{ id:`glas_sic`, was:`soll die Deckung hergeben, die sie nach dem Vorfall bekommen hat`, braucht:{FRE:-1.5} },
  fragen:[
    { id:`warumkam`, t:`Warum kam die Scheibe damals?`, wie:`sachlich, ohne Mitleid im Ton`,
      liest:{C:1.0, A:-0.5, O:-0.3},
      gut:{ er:`Weil jemand über den Tresen gekommen ist.`,
            erRegie:`Sie sagt es so gleichmäßig wie alles andere.`,
            er2:`Es ist mir nichts passiert. Es ging um einen Bescheid, mit dem ich nichts zu tun hatte, und ich saß da, wo man ankommt. Vier Wochen später war die Scheibe da, und ich war damit einverstanden.`,
            wie:`nüchtern`, wie2:`sachlich`, stimmung:`interessiert`,
            fakt:`jemand kam 2011 über den Tresen, vier Wochen später hing die Scheibe`, spur:`elf`, bez:8 },
      zu:{ er:`Das ist lange her.`, wie:`abschließend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`schoener`, t:`Ohne Glas wirkt das doch viel freundlicher.`, wie:`aufgeräumt`,
      liest:{O:1.4, A:0.6},
      gut:{ er:`Das ist ja der Zweck.`, wie:`trocken`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Freundlicher.`,
           erRegie:`Sie sieht auf die Skizze mit dem Blumenkübel.`,
           er2:`Freundlich sieht es aus für die, die hereinkommen und wieder gehen. Ich sitze acht Stunden dahinter. Das ist kein Einwand gegen Ihren Geschmack, das ist ein anderer Standpunkt, und meiner steht in keinem Entwurf.`,
           wie:`sehr ruhig`, wie2:`ausgesucht freundlich`, stimmung:`gereizt`, bez:-7 } },

    { id:`gesagt`, t:`Was haben Sie dazu gesagt?`, wie:`schlicht`,
      liest:{C:0.9, E:0.5},
      gut:{ er:`Eine Seite. Mit drei Punkten und einem Vorschlag.`,
            erRegie:`Sie zieht eine Mappe heran und lässt sie zu.`,
            er2:`Der Vorschlag war ein niedriger Tresen mit einer Kante, über die man nicht so leicht kommt. Das kostet weniger als der Umbau. Antwort steht aus, seit Februar.`,
            wie:`sachlich`, wie2:`ohne Bitterkeit`, stimmung:`interessiert`,
            fakt:`hat einen billigeren Gegenvorschlag geschrieben und seit Februar keine Antwort`, bez:7 },
      zu:{ er:`Es fragt ja keiner.`, wie:`resigniert`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`pakete`, titel:`Die Pakete für das ganze Haus`,
  regie:`Rechts neben dem Tresen stapeln sich Pakete, drei Reihen hoch. Auf dem obersten klebt ein Zettel mit einem Datum von vor neun Tagen.`,
  er:`Die nehme ich an. Für zweihundertvierzig Leute. Das steht in keiner Aufgabenbeschreibung.`,
  wie:`beiläufig`, stimmung:`neutral`,
  bedarf:{ id:`pak_fre`, was:`macht seit Jahren eine Arbeit, die ihr niemand aufgetragen hat und die niemand abnimmt`, braucht:{FRE:1.1, GEL:-0.5} },
  fragen:[
    { id:`seitwann`, t:`Wie ist das denn Ihre Aufgabe geworden?`, wie:`sachlich`,
      liest:{C:1.0, E:0.5, A:-0.3},
      gut:{ er:`Gar nicht. Ich habe 2014 einmal eines angenommen, weil der Bote sonst wieder weggefahren wäre.`,
            erRegie:`Sie sieht den Stapel an, ohne die Miene zu verziehen.`,
            er2:`Danach war es meine Aufgabe. Niemand hat das entschieden. Es hat einfach niemand widersprochen, ich am wenigsten.`,
            wie:`trocken`, wie2:`sehr klar`, stimmung:`amuesiert`,
            fakt:`nimmt seit einem angenommenen Paket 2014 die Post für das ganze Haus an`, bez:7 },
      zu:{ er:`Irgendwer muss es machen.`, wie:`abschließend`, stimmung:`neutral`, bez:-1 } },

    { id:`nettvonihnen`, t:`Das ist doch nett von Ihnen, dass Sie das machen.`, wie:`anerkennend`,
      liest:{A:1.4},
      gut:{ er:`Es ist praktischer, ja.`, wie:`knapp`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Nett ist es nicht.`,
           erRegie:`Sie legt die Hand flach auf den Tresen, was bei ihr das Ende eines Satzes bedeutet.`,
           er2:`Ich hafte für die Dinger. Neun Tage steht das oberste hier, und wenn es wegkommt, erkläre ich das. Nett wäre, wenn es jemand abholte.`,
           wie:`freundlich`, wie2:`sehr höflich`, stimmung:`gereizt`, bez:-6 } },

    { id:`neuntage`, t:`Neun Tage — holt das keiner ab?`, wie:`praktisch`,
      liest:{C:1.1, O:-0.3},
      gut:{ er:`Der Empfänger ist in Elternzeit. Seit August.`,
            erRegie:`Sie hebt das oberste Paket an und stellt es wieder hin.`,
            er2:`Ich habe zweimal gemailt und einmal angerufen. Ich könnte es zurückgehen lassen, dann wäre es weg. Mache ich aber nicht, weil in dem Karton vermutlich etwas ist, das jemand braucht, wenn er wiederkommt.`,
            wie:`nüchtern`, wie2:`sachlich, und irgendwo darin steckt etwas anderes`, stimmung:`interessiert`,
            fakt:`hebt ein Paket für jemanden in Elternzeit auf, statt es zurückgehen zu lassen`, bez:8 },
      zu:{ er:`Wird schon einer kommen.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`mittag`, titel:`Zweiundzwanzig Jahre am Tresen gegessen`,
  regie:`Unter dem Tresen steht eine Brotdose auf einem Küchentuch. Daneben liegt der Speiseplan der Kantine, gefaltet, offenbar gelesen.`,
  er:`Zwölf bis halb eins. Ich esse hier, der Tresen darf nicht unbesetzt sein.`,
  wie:`sachlich`, stimmung:`neutral`,
  bedarf:{ id:`mit_zug`, was:`ist seit zweiundzwanzig Jahren bei nichts dabei, was hier zusammen passiert`, braucht:{GEL:-1.6} },
  fragen:[
    { id:`nievertreten`, t:`Es gibt niemanden, der Sie eine halbe Stunde ablöst?`, wie:`sachlich`,
      liest:{C:1.0, E:0.5},
      gut:{ er:`Auf dem Papier ja. In der Praxis nein.`,
            erRegie:`Sie faltet den Speiseplan auf und wieder zu.`,
            er2:`Es gibt eine Liste mit zwei Namen für die Mittagsvertretung. Beide arbeiten hier nicht mehr. Ich habe das gemeldet, und seitdem steht auf der Liste ein Name.`,
            wie:`nüchtern`, wie2:`trocken`, stimmung:`interessiert`,
            fakt:`auf der Mittagsvertretungsliste steht nur noch ihr eigener Name`, bez:8 },
      zu:{ er:`Es geht schon.`, wie:`abwiegelnd`, stimmung:`verschlossen`, bez:-2 } },

    { id:`einsam`, t:`Das ist doch einsam, so allein zu essen.`, wie:`mitfühlend`,
      liest:{A:1.3, N:0.7},
      gut:{ er:`Man gewöhnt sich.`, wie:`kurz`, stimmung:`nachdenklich`, bez:3 },
      zu:{ er:`Einsam.`,
           erRegie:`Sie sieht dich an, und diesmal geht das Lächeln gar nicht erst an.`,
           er2:`Ich lese den Speiseplan jeden Tag. Ich weiß, was es gibt. Was ich davon halte, ist meine Sache und nicht Ihre, und wenn Sie es freundlich sagen, wird es nicht Ihre.`,
           wie:`sehr ruhig`, wie2:`ausgesucht höflich`, stimmung:`gereizt`, bez:-8 } },

    { id:`speiseplan`, t:`Warum lesen Sie den Plan, wenn Sie nicht hingehen?`, wie:`schlicht neugierig, ohne Spott`,
      liest:{C:0.7, A:-0.4, O:-0.4},
      gut:{ er:`Weil die Leute davon reden, wenn sie zurückkommen.`,
            erRegie:`Sie legt den Plan zurück an seinen Platz, mit der Falz nach oben.`,
            er2:`Wenn einer sagt, der Auflauf war nichts, kann ich antworten. Zwei Sätze. Anders komme ich an so ein Gespräch nicht heran.`,
            wie:`sachlich`, wie2:`sehr nüchtern, und es ist der ehrlichste Satz seit einer halben Stunde`, stimmung:`geruehrt`,
            fakt:`liest den Speiseplan, um bei Gesprächen über das Essen mitreden zu können`, bez:9 },
      zu:{ er:`Gewohnheit.`, wie:`knapp`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`nachfolge`, titel:`Die Zweiundzwanzigjährige`,
  regie:`Neben ihr steht ein zweiter Stuhl, der sonst nicht da steht. Auf dem Tresen liegt ein zweiter Block, in dem eine fremde Handschrift Notizen gemacht hat.`,
  er:`Seit Montag arbeite ich jemanden ein. Zweiundzwanzig, für die Nachmittage.`,
  wie:`neutral, mit einem Blick auf den Block`, stimmung:`neutral`,
  bedarf:{ id:`nachf_zug`, was:`soll zum ersten Mal jemanden anlernen und weiß nicht, wie man das anfängt`, braucht:{GEL:-1.2, FRE:-0.7} },
  fragen:[
    { id:`wasbringenSieihr`, t:`Was bringen Sie ihr zuerst bei?`, wie:`sachlich`,
      liest:{C:1.2, O:-0.3},
      gut:{ er:`Wie man Nein sagt, ohne dass es nach Nein klingt.`,
            erRegie:`Sie dreht den fremden Block so, dass er gerade liegt.`,
            er2:`Alles andere steht in einer Maske. Das nicht. Sie ist freundlich, und das wird ihr in den ersten Monaten mehr Arbeit machen, als sie sich vorstellen kann.`,
            wie:`sofort`, wie2:`bestimmt`, stimmung:`interessiert`,
            fakt:`bringt der Neuen zuerst bei, Nein zu sagen, ohne dass es nach Nein klingt`, bez:8 },
      zu:{ er:`Was gerade anliegt.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } },

    { id:`stolz`, t:`Da sind Sie bestimmt froh, endlich Gesellschaft zu haben.`, wie:`herzlich`,
      liest:{A:1.2, E:0.5},
      gut:{ er:`Es ist angenehmer, ja.`, wie:`zurückhaltend`, stimmung:`neutral`, bez:2 },
      zu:{ er:`Froh.`,
           erRegie:`Sie nimmt den zweiten Block und legt ihn auf die andere Seite.`,
           er2:`Sie ist für die Nachmittage. Ich bin vormittags hier. Wir sehen uns eine Viertelstunde bei der Übergabe. Und in zwei Jahren macht sie meinen Vormittag mit, dann ist eine Stelle frei geworden, ohne dass jemand entlassen wurde.`,
           wie:`ruhig`, wie2:`sehr sachlich, und das ist das Kälteste, was sie heute sagt`, stimmung:`gereizt`, bez:-7 } },

    { id:`taugtsie`, t:`Und? Macht sie es gut?`, wie:`direkt, ohne Floskel`,
      liest:{A:-0.6, C:0.9, E:0.4},
      gut:{ er:`Sie ist schnell und sie fragt zu wenig.`,
            erRegie:`Sie tippt auf eine Zeile in der fremden Handschrift.`,
            er2:`Da steht ein Name ohne Uhrzeit. Das ist der Fehler, wegen dem ich 2011 nichts in der Hand hatte. Ich habe es ihr zweimal gesagt und werde es ein drittes Mal sagen.`,
            wie:`nüchtern`, wie2:`bestimmt`, stimmung:`interessiert`, spur:`elf`, bez:7 },
      zu:{ er:`Sie lernt.`, wie:`knapp`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`krank`, titel:`Sechs Jahre nicht krank`,
  regie:`Am Rand des Tresens steht eine Packung Halstabletten, offen, fast leer. Sie schiebt sie beiläufig hinter das Telefon, als du hereinkommst.`,
  er:`Ich bin seit 2019 nicht krankgeschrieben gewesen.`,
  wie:`sachlich, mit belegter Stimme`, stimmung:`neutral`,
  bedarf:{ id:`kra_sic`, was:`kann nicht ausfallen, weil niemand den Tresen übernimmt`, braucht:{FRE:-1.4} },
  fragen:[
    { id:`wenndoch`, t:`Und wenn Sie es doch mal wären?`, wie:`sachlich, ohne Sorge im Ton`,
      liest:{C:1.1, A:-0.4},
      gut:{ er:`Dann bleibt der Tresen zu und die Tür steht offen.`,
            erRegie:`Sie zeigt mit dem Stift auf die Drehtür.`,
            er2:`Das ist einmal passiert, 2019. Es hat drei Tage niemanden gestört, und am vierten hat jemand gefragt, ob wir eigentlich noch einen Empfang haben. Seitdem komme ich.`,
            wie:`trocken`, wie2:`ohne Selbstmitleid`, stimmung:`interessiert`,
            fakt:`ihr letzter Krankheitsfall 2019 fiel drei Tage lang niemandem auf`, bez:8 },
      zu:{ er:`Bin ich aber nicht.`, wie:`abschließend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`schonen`, t:`Sie sollten sich wirklich mal schonen.`, wie:`besorgt`,
      liest:{A:1.3, N:0.8},
      gut:{ er:`Sagt meine Ärztin auch.`, wie:`knapp`, stimmung:`nachdenklich`, bez:2 },
      zu:{ er:`Danke.`,
           erRegie:`Sie zieht die Halstabletten wieder hervor und legt sie sichtbar hin.`,
           er2:`Das ist der Satz, den ich in sechs Jahren am häufigsten gehört habe, und er hat noch nie jemanden dazu gebracht, hier zu sitzen. Wenn Sie am Donnerstag von acht bis sechzehn Uhr Zeit haben, sagen Sie es. Sonst lieber nicht.`,
           wie:`freundlich`, wie2:`sehr höflich, und sehr scharf`, stimmung:`gereizt`, bez:-8 } },

    { id:`gemeldet`, t:`Steht das irgendwo, dass es keine Vertretung gibt?`, wie:`praktisch`,
      liest:{C:1.2, E:0.4},
      gut:{ er:`In meinem Jahresbericht, dreimal. 2021, 2023, 2024.`,
            erRegie:`Sie zieht eine Mappe heran, ohne sie zu öffnen.`,
            er2:`Wortgleich, absichtlich. Wenn dreimal derselbe Satz dasteht, kann hinterher niemand sagen, es sei unklar gewesen.`,
            wie:`sofort`, wie2:`sehr bestimmt`, stimmung:`interessiert`,
            fakt:`hat dreimal wortgleich in den Jahresbericht geschrieben, dass es keine Vertretung gibt`, bez:7 },
      zu:{ er:`Das weiß man.`, wie:`gleichgültig`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`name`, titel:`Frau Ketterer`,
  regie:`An der Innenseite der Scheibe klebt ein kleines Schild mit ihrem Namen, offenbar selbst ausgedruckt, an einer Ecke abgerissen und wieder festgeklebt.`,
  er:`Es gibt hier jemanden, der sagt seit vier Jahren Ketterer zu mir.`,
  wie:`beiläufig, fast heiter`, stimmung:`neutral`,
  bedarf:{ id:`nam_gel`, was:`will von den Leuten, die täglich vorbeigehen, beim richtigen Namen genannt werden`, braucht:{GEL:1.3} },
  fragen:[
    { id:`gesagt`, t:`Haben Sie es ihm gesagt?`, wie:`schlicht`,
      liest:{A:-0.5, C:0.8, E:0.5},
      gut:{ er:`Zweimal. Im ersten Jahr.`,
            erRegie:`Sie sieht das Schild an der Scheibe an.`,
            er2:`Beim dritten Mal wäre ich die gewesen, die ein Problem macht. Also habe ich das Schild aufgehängt. Er geht jeden Morgen daran vorbei und sagt Ketterer.`,
            wie:`trocken`, wie2:`gleichmäßig`, stimmung:`amuesiert`,
            fakt:`hat das Namensschild aufgehängt, nachdem zweimal Sagen nichts genützt hat`, bez:8 },
      zu:{ er:`Es ist nur ein Name.`, wie:`abweisend`, stimmung:`verschlossen`, bez:-2 } },

    { id:`kleinigkeit`, t:`Na, so schlimm ist das doch nicht.`, wie:`leichthin`,
      liest:{A:1.1, N:-0.5, O:0.4},
      gut:{ er:`Nein, schlimm nicht.`, wie:`knapp`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Nein, schlimm ist es nicht.`,
           erRegie:`Sie drückt die abgerissene Ecke des Schildes wieder an.`,
           er2:`Es sind viertausend Mal Ketterer in vier Jahren. Jedes einzelne Mal nicht schlimm. Ich habe es Ihnen erzählt, damit Sie es wissen, nicht damit Sie es kleinreden — das kann ich selbst besser, ich mache es seit vier Jahren.`,
           wie:`ruhig`, wie2:`sehr höflich`, stimmung:`gereizt`, bez:-7 } },

    { id:`grüßen`, t:`Wie viele grüßen Sie eigentlich mit Namen?`, wie:`sachlich`,
      liest:{C:0.9, E:0.5, A:-0.3},
      gut:{ er:`Vierzig ungefähr. Von zweihundertvierzig.`,
            erRegie:`Sie sagt die Zahl, als hätte sie sie nicht gerade nachgeschlagen, und das hat sie auch nicht.`,
            er2:`Ich kenne alle zweihundertvierzig. Ich sage jedem Guten Morgen. Vierzig sagen ihn zurück und benutzen dabei meinen Namen.`,
            wie:`nüchtern`, wie2:`sachlich`, stimmung:`interessiert`,
            fakt:`von zweihundertvierzig Leuten im Haus nennen sie vierzig beim Namen`, bez:7 },
      zu:{ er:`Die meisten.`, wie:`abschließend`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`kamera`, titel:`Die Kamera über dem Tresen`,
  regie:`Über der Drehtür sitzt eine kleine schwarze Halbkugel an der Decke. Sie ist nicht auf den Eingang gerichtet, sondern auf den Tresen.`,
  er:`Die ist seit April da. Sie sehen selbst, wohin sie zeigt.`,
  wie:`sachlich, ohne hinzusehen`, stimmung:`neutral`,
  bedarf:{ id:`kam_sic`, was:`wird gefilmt und weiß nicht, wer zusieht und weshalb`, braucht:{FRE:-1.2, GEL:-0.6} },
  fragen:[
    { id:`werschaut`, t:`Wer sieht sich das an?`, wie:`sachlich`,
      liest:{C:1.1, A:-0.4},
      gut:{ er:`Das konnte mir bisher niemand sagen.`,
            erRegie:`Sie sieht jetzt doch nach oben, einmal, kurz.`,
            er2:`Ich habe gefragt, wer Zugriff hat und wie lange es gespeichert wird. Die Antwort war, dass sie der Sicherheit dient. Das ist keine Antwort auf keine von beiden Fragen.`,
            wie:`nüchtern`, wie2:`sehr genau`, stimmung:`interessiert`,
            fakt:`hat zur Kamera zweimal gefragt und beide Male keine Antwort bekommen`, bez:8 },
      zu:{ er:`Irgendwer wird schon.`, wie:`abwiegelnd`, stimmung:`neutral`, bez:-1 } },

    { id:`nichtszuverbergen`, t:`Sie haben doch nichts zu verbergen.`, wie:`aufmunternd`,
      liest:{A:1.0, N:-0.6, O:0.5},
      gut:{ er:`Nein, habe ich nicht.`, wie:`knapp`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Nein.`,
           erRegie:`Sie legt beide Hände flach auf den Tresen.`,
           er2:`Ich habe nichts zu verbergen und sitze acht Stunden am Tag im Bild. Das eine folgt nicht aus dem anderen. Wenn ich morgen zehn Minuten den Kopf auf die Arme lege, weil mir schlecht ist, liegt das irgendwo auf einem Gerät, von dem mir niemand sagt, wo es steht.`,
           wie:`sehr ruhig`, wie2:`ausgesucht höflich`, stimmung:`gereizt`, bez:-7 } },

    { id:`geaendert`, t:`Hat sich dadurch etwas an Ihrer Arbeit geändert?`, wie:`schlicht`,
      liest:{C:1.0, O:-0.4, E:0.3},
      gut:{ er:`Ich stehe seltener auf.`,
            erRegie:`Sie sagt es und merkt hörbar erst dabei, dass es stimmt.`,
            er2:`Früher bin ich zwischendurch aufgestanden und habe mich gestreckt. Das mache ich nicht mehr. Nicht, weil es verboten wäre. Weil ich nicht weiß, wer es sieht.`,
            wie:`sachlich`, wie2:`langsamer`, stimmung:`nachdenklich`,
            fakt:`steht seit der Kamera seltener auf, ohne dass es jemand verboten hätte`, bez:8 },
      zu:{ er:`Nein.`, wie:`kurz`, stimmung:`neutral`, bez:-1 } }
  ] },

{ id:`schluessel`, titel:`Vierzig Schlüssel und eine Unterschrift`,
  regie:`Hinter ihr hängt ein Schlüsselbrett mit vierzig Haken. An zwei Haken hängen kleine Zettel statt Schlüsseln. Daneben ein Ordner mit Unterschriften.`,
  er:`Ich gebe die Schlüssel aus und nehme sie zurück. Unterschrift beim Ausgeben, Unterschrift beim Zurückgeben.`,
  wie:`sachlich`, stimmung:`neutral`,
  bedarf:{ id:`schl_sic`, was:`haftet für vierzig Schlüssel und darf keinen einzigen verweigern`, braucht:{FRE:-1.6} },
  fragen:[
    { id:`zweizettel`, t:`Was sind die zwei Zettel an den leeren Haken?`, wie:`sachlich, sehr konkret`,
      liest:{C:1.2, A:-0.3},
      gut:{ er:`Zwei Schlüssel, die nicht zurückgekommen sind.`,
            erRegie:`Sie nimmt einen der Zettel ab und hält ihn hoch, ohne ihn dir zu geben.`,
            er2:`Name, Datum, Unterschrift. Beide von Leuten, die nicht mehr hier arbeiten. Solange die Zettel hängen, hänge ich nicht.`,
            wie:`sofort`, wie2:`sehr bestimmt`, stimmung:`interessiert`,
            fakt:`hängt für fehlende Schlüssel Zettel mit Namen und Unterschrift auf`, bez:8 },
      zu:{ er:`Fehlbestand.`, wie:`knapp`, stimmung:`neutral`, bez:-1 } },

    { id:`vertrauen`, t:`Sie kennen die Leute doch, da braucht es doch keine Unterschrift.`, wie:`kollegial`,
      liest:{A:1.3, O:0.4},
      gut:{ er:`Manchmal geht es auch ohne.`, wie:`vorsichtig`, stimmung:`neutral`, bez:1 },
      zu:{ er:`Doch.`,
           erRegie:`Sie klappt den Ordner auf und dreht ihn zu dir, so dass du die Spalten siehst.`,
           er2:`Ich kenne die Leute. Was ich nicht kenne, ist der Tag, an dem einer sagt, er habe den Schlüssel nie bekommen. Die Unterschrift ist nicht gegen die Leute. Sie ist für mich.`,
           wie:`freundlich`, wie2:`sehr höflich`, stimmung:`gereizt`, bez:-6 } },

    { id:`verweigern`, t:`Können Sie einen Schlüssel auch verweigern?`, wie:`geradeheraus`,
      liest:{C:1.0, A:-0.5, E:0.4},
      gut:{ er:`Nein.`,
            erRegie:`Sie sagt es ohne Pause.`,
            er2:`Wer auf der Liste steht, bekommt seinen Schlüssel, auch der, von dem ich weiß, dass er ihn dreimal verloren hat. Ich hafte für den Bestand und entscheide über nichts davon. So ist die Stelle gebaut.`,
            wie:`sofort`, wie2:`klar, ohne Klage`, stimmung:`interessiert`,
            fakt:`haftet für die Schlüssel und darf keinen verweigern`, bez:7 },
      zu:{ er:`Das kommt nicht vor.`, wie:`abschließend`, stimmung:`neutral`, bez:-1 } }
  ] }
],

/* --- Was sie sagt, wenn du dich festlegst. ------------------------- */

reaktion: {
  z: {
    O: { genau:{ er:`Ja. Ich will nichts Neues. Ich habe fünf Umstellungen erlebt und weiß nach jeder etwas weniger über meine eigene Arbeit.`, wie:`sachlich, ohne Rechtfertigung` },
         zuHoch:{ er:`Neugierig.`, erRegie:`Sie legt die Hand auf das aufgeschlagene Buch.`, er2:`Das hier ist von 2003, und ich verteidige es gegen ein System, das noch gar nicht da ist. Neugierig sieht anders aus.`, wie:`trocken`, wie2:`bestimmt` },
         zuTief:{ er:`So verbohrt bin ich nicht. Ich habe einen Gegenvorschlag für den Umbau geschrieben, mit einer Zeichnung. Das war nicht verlangt.`, wie:`richtigstellend` } },
    C: { genau:{ er:`Ja.`, erRegie:`Sie rückt den Stift, der schon parallel liegt, einen Millimeter.`, er2:`Buch links, Stift parallel, Ausweise nach Nummern. Das ist nicht Pedanterie, das ist der Grund, warum mir in zweiundzwanzig Jahren zweimal etwas vorgeworfen wurde und beide Male nichts hängengeblieben ist.`, wie:`ohne Umschweife`, wie2:`sehr bestimmt` },
         zuHoch:{ er:`Ganz so genau nehme ich es auch nicht. Was ich nicht brauche, räume ich nicht auf, und meine Ablage zu Hause würden Sie nicht sehen wollen.`, wie:`einschränkend` },
         zuTief:{ er:`Nachlässig.`, erRegie:`Sie schlägt das Buch auf einer beliebigen Seite auf und dreht es zu dir.`, er2:`Jede Zeile mit Uhrzeit, seit zweiundzwanzig Jahren, ohne Lücke. Sagen Sie das noch einmal.`, wie:`gedehnt`, wie2:`ausgesucht freundlich` } },
    E: { genau:{ er:`Das trifft es ungefähr. Ich rede den ganzen Tag und es kostet mich nichts. Aber ich suche es auch nicht — wenn zwischen zwölf und eins niemand kommt, ist das kein schlechter Tag.`, wie:`abwägend` },
         zuHoch:{ er:`So gesellig bin ich nicht. Ich rede viel, weil es meine Arbeit ist. Danach laufe ich zwei Stunden allein.`, wie:`richtigstellend` },
         zuTief:{ er:`Schüchtern.`, erRegie:`Sie sieht kurz auf das Telefon mit den zwei Leitungen.`, er2:`Ich spreche an einem Vormittag mit sechzig Leuten und sage dreißigmal Nein. Zurückhaltend ist etwas anderes.`, wie:`trocken`, wie2:`sachlich` } },
    A: { genau:{ er:`Ja.`, erRegie:`Sie sagt es ohne die kleinste Verlegenheit.`, er2:`Das sagt mir sonst niemand ins Gesicht, weil ich dabei freundlich bleibe. Ich bin nicht warm. Ich bin korrekt, und das ist etwas anderes, auch wenn es sich acht Sekunden lang gleich anfühlt.`, wie:`sofort`, wie2:`sehr klar` },
         zuHoch:{ er:`Herzlich.`, erRegie:`Das Lächeln geht an und sofort wieder aus.`, er2:`Ich habe heute Morgen einer Kollegin gesagt, dass ihr Paket nicht mein Problem ist. Sie hat mich vorher gemocht.`, wie:`gedehnt`, wie2:`freundlich, und darin nichts` },
         zuTief:{ er:`So kalt bin ich auch wieder nicht. Ich hebe seit neun Tagen ein Paket für jemanden auf, den ich nicht kenne, weil er es brauchen wird, wenn er wiederkommt.`, wie:`einschränkend` } },
    N: { genau:{ er:`Das ist die genaueste Antwort, die man dazu geben kann.`, erRegie:`Sie legt beide Hände flach hin.`, er2:`Ich bin nicht unerschütterlich. Ich bin nur nicht weit genug beteiligt, um erschüttert zu werden. Das habe ich mir angewöhnt, und es hat vier Jahre gedauert.`, wie:`überrascht`, wie2:`nüchtern` },
         zuHoch:{ er:`Nervös bin ich nicht. Ich schlafe. Ich nehme das hier nicht mit nach Hause, das ist der ganze Trick an dieser Stelle.`, wie:`richtigstellend` },
         zuTief:{ er:`Unerschütterlich auch nicht.`, erRegie:`Sie sieht kurz zur Scheibe.`, er2:`Ich habe vier Wochen gebraucht, bis ich 2011 wieder ohne Umweg durch die Drehtür gegangen bin. Umwerfen kann man mich schon. Es dauert nur länger, weil weniger dransteht.`, wie:`langsamer`, wie2:`sachlich` } }
  },
  m: {
    FRE: { genau:{ er:`Ja, und ich weiß, wie das klingt.`, erRegie:`Sie tippt auf den Ordner mit den Unterschriften.`, er2:`Ich will nicht frei entscheiden. Ich will, dass geschrieben steht, was ich zu tun habe — dann kann ich es machen, und dann ist es hinterher nicht meine Schuld. Wer das für Unselbstständigkeit hält, hat noch nie allein an einer Tür gesessen.`, wie:`ohne Ausflucht`, wie2:`sehr bestimmt` },
           zuHoch:{ er:`Ich will nichts entscheiden.`, erRegie:`Sie sagt es schneller als alles andere.`, er2:`Ich rufe oben an, jedes Mal, auch wenn ich die Antwort schon weiß. Nicht weil ich es nicht könnte. Damit es jemand gesagt hat.`, wie:`richtigstellend`, wie2:`klar` },
           zuTief:{ er:`Ganz so unselbstständig bin ich nicht. Zwischen Drehtür und Treppe entscheide ich vierzigmal am Tag, und niemand merkt es, weil es dann keinen Vorfall gibt.`, wie:`einschränkend` } },
    GEL: { genau:{ er:`Ein bisschen, ja.`, erRegie:`Sie sieht auf den gefalteten Speiseplan.`, er2:`Nicht auf eine Bühne. Ich hätte gern einmal am Tag dort gesessen, wo die anderen sitzen, und über einen Auflauf geredet. Mehr ist es nicht, und mehr wird es auch nicht.`, wie:`ruhig`, wie2:`leiser` },
           zuHoch:{ er:`Gesehen werden will ich nicht. Mir wäre lieb, dass die Leute meinen Namen richtig sagen, und das ist etwas anderes als Anerkennung.`, wie:`einschränkend` },
           zuTief:{ er:`Doch, ein wenig.`, erRegie:`Sie zeigt auf das selbst ausgedruckte Schild an der Scheibe.`, er2:`Das habe ich aufgehängt, nachdem zweimal Sagen nichts genützt hat. Das macht keine, der es gleich ist.`, wie:`langsamer`, wie2:`sehr ehrlich` } }
  }
},

/* --- Wiedersehen und Abschied. ------------------------------------ */

wiedersehen: [
  { ab:70, regie:`Sie hat den Besucherausweis schon herausgelegt, bevor du am Tresen bist.`,
    er:`Vierzehn. Ich habe Sie eingetragen, Sie brauchen nichts zu unterschreiben.`, wie:`verbindlich, und dahinter etwas Echtes`, stimmung:`freundlich` },
  { ab:50, regie:`Sie sieht auf, nickt und dreht das Buch schon um.`,
    er:`Sie waren schon mal da. Unterschrift bitte, dann können wir reden.`, wie:`freundlich, sachlich`, stimmung:`neutral` },
  { ab:30, regie:`Sie schreibt zu Ende und sieht erst danach auf.`,
    er:`Ihr Name?`, wie:`höflich, als hätte sie ihn nicht`, stimmung:`skeptisch` },
  { ab:-999, regie:`Sie schiebt dir Buch und Stift durch den Schlitz, ohne ein Wort, und wartet.`,
    er:`Bitte sehr.`, wie:`ausgesucht höflich, und das ist bei ihr das schlechteste Zeichen`, stimmung:`verschlossen` }
],

abschied: [
  { ab:70, regie:`Sie nimmt den Ausweis zurück, trägt die Uhrzeit ein und legt den Stift hin.`,
    er:`Kommen Sie wieder. Und wenn Sie anrufen: verlangen Sie nicht den Empfang, verlangen Sie mich.`,
    wie:`sachlich, und für ihre Verhältnisse ist das viel`, stimmung:`freundlich`, bez:3 },
  { ab:50, regie:`Sie trägt die Uhrzeit ein und dreht das Buch zurück.`,
    er:`War in Ordnung. Den Ausweis, bitte.`, wie:`verbindlich`, stimmung:`neutral`, bez:2 },
  { ab:30, regie:`Sie streicht deinen Eintrag durch und sieht schon am nächsten Wartenden vorbei.`,
    er:`Ausweis. Danke.`, wie:`kurz`, stimmung:`neutral`, bez:1 },
  { ab:-999, regie:`Sie hält die Hand durch den Sprechschlitz und sagt erst etwas, als der Ausweis darin liegt.`,
    er:`Wiedersehen.`, wie:`höflich und leer`, stimmung:`verschlossen`, bez:0 }
],


});
