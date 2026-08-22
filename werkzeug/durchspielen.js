/* ═══════════════════════════════════════════════════════════════════
   Das Spiel spielt sich selbst — hundertmal, von der Drehtür bis zum
   A38.

   Gedacht ist das nicht als Test im üblichen Sinn. Es geht nicht darum,
   ob eine Funktion zurückgibt, was sie soll, sondern ob das Haus
   zusammenpasst, wenn man wirklich hindurchgeht: ob immer genau eine
   Tür offen steht, ob die Person, die weiterschickt, auch die nennt,
   die als Nächste dran ist, ob am Ende der bekommt den Antrag, der ihn
   besorgen kann — und ob irgendwo ein Platzhalter, ein „undefined“ oder
   ein falsches Geschlecht in einem Satz steht, den jemand liest.

   Gefunden wird das über die Anzeige, nicht über den Zustand: der
   Läufer klickt dieselben Knöpfe wie ein Mensch und liest denselben
   Text. Was er nicht sieht, kann auch niemand sonst sehen.

   Aufruf in der Konsole, bei laufendem Spiel:

       fetch("werkzeug/durchspielen.js").then(r=>r.text()).then(eval)
       await durchspielen(100)

   Danach liegt alles in `SIM`: `SIM.funde` sind die Widersprüche,
   `SIM.gesehen` zählt, was tatsächlich vorkam.
   ═══════════════════════════════════════════════════════════════════ */

window.SIM = {
  laeufe: 0, funde: [], gesehen: {}, enden: [], schritte: 0,
  begonnen: null
};

/* Die Zeitgeber im Spiel sind Dramaturgie, keine Rechnung: sie geben
   dem Gespräch seinen Takt. Für hundert Durchläufe drehen wir sie auf
   null und behalten die echte Fassung für unsere eigenen Pausen. */
const ECHT = window.__echtTimeout || (window.__echtTimeout = window.setTimeout.bind(window));
const KANAL = new MessageChannel();
const REIHE = [];
KANAL.port1.onmessage = () => { const f = REIHE.shift(); if(f) f(); };
const sofort = fn => { REIHE.push(fn); KANAL.port2.postMessage(0); };
const schnell = () => { window.setTimeout = (fn, ms, ...a) => { sofort(() => fn(...a)); return 0; }; };
const normal  = () => { window.setTimeout = ECHT; };
const kurz    = () => new Promise(r => sofort(r));

function fund(art, was, mehr){
  SIM.funde.push(Object.assign({lauf: SIM.laeufe + 1, art, was}, mehr || {}));
}
const zaehl = k => SIM.gesehen[k] = (SIM.gesehen[k] || 0) + 1;
/* Verglichen wird immer klein: die Anzeige setzt vieles in Versalien,
   und ein Prüfer, der das nicht weiß, findet nichts wieder. */
const klein = t => (t || "").toLowerCase();
const drin = (heu, nadel) => klein(heu).indexOf(klein(nadel)) >= 0;

/* ─── Was nie in einem Satz stehen darf, den jemand liest ───────────
   Platzhalter, die nicht ersetzt wurden, und die üblichen Unfälle aus
   einer Vorlage. `{er}` steht in welt.js absichtlich — aber nur dort;
   auf dem Bildschirm ist es ein Fehler. */
const VERBOTEN = [
  [/\{(er|Er|ihn|Ihn|ihm|sein|Sein|seine|Seine|seiner)\}/, "Platzhalter nicht ersetzt"],
  [/undefined/, "undefined"],
  [/\bNaN\b/, "NaN"],
  [/\[object /, "[object Object]"],
  [/\$\{/, "Vorlage nicht ausgerechnet"],
  [/\bnull\b/, "null"]
];

function pruefeText(wo){
  const el = typeof wo === "string" ? document.querySelector(wo) : wo;
  if(!el) return;
  const t = el.innerText || "";
  for(const [re, name] of VERBOTEN)
    if(re.test(t)){
      const m = t.match(re);
      const i = Math.max(0, t.indexOf(m[0]) - 60);
      fund("text", name, {stelle: t.slice(i, i + 160)});
      break;
    }
}
const pruefeAlles = () => { pruefeText("#talk"); pruefeText("#choices"); pruefeText(".side"); };

/* ─── Das Haus von außen ────────────────────────────────────────────
   Im Treppenhaus gilt eine einzige Regel, und sie ist die ganze
   Struktur des Spiels: offen ist, was hinter einem liegt, plus genau
   eine Tür. */
function pruefeHaus(){
  const durchZahl = PERSONEN.filter(pp => durch(akteVon(pp.id))).length;
  let offen = 0, zu = 0;
  const hoch = document.getElementById("etageHoch");
  const runter = document.getElementById("etageRunter");
  const start = etageJetzt;
  while(!hoch.disabled) hoch.click();
  for(;;){
    offen += document.querySelectorAll("#mkarten .mkarte").length;
    zu    += document.querySelectorAll("#mkarten .tuer.zu").length;
    pruefeText("#menue");
    if(runter.disabled) break;
    runter.click();
  }
  etageJetzt = start; zeichneEtage();

  /* Mitgeschrieben, damit man hinterher sieht, dass wirklich gezählt
     wurde: über einen Durchlauf muss daraus 0/1, 1/2, 2/3 … werden. */
  zaehl("Treppenhaus " + durchZahl + "/" + offen);
  if(offen + zu !== PERSONEN.length)
    fund("haus", "Türen verzählt", {offen, zu, soll: PERSONEN.length});
  const sollOffen = Math.min(PERSONEN.length, durchZahl + 1);
  if(offen !== sollOffen)
    fund("haus", "falsch viele Türen offen", {offen, sollOffen, durch: durchZahl});
}

/* ─── Ein Besuch ────────────────────────────────────────────────────
   Der Läufer nimmt, was dasteht, und bevorzugt das, was weiterführt.
   Geraten wird meistens richtig, manchmal nicht — sonst sieht man die
   Sätze nie, die auf einen Fehlgriff folgen. */
function knoepfe(){ return [...document.querySelectorAll("#choices button")].filter(b => !b.disabled); }
/* Die Knöpfe stehen in Versalien — innerText gibt sie so zurück, wie
   sie dastehen. Also wird ohne Rücksicht auf Groß und Klein gesucht. */
const passt = (b, re) => re.test(b.innerText);

async function warte(n){
  for(let i = 0; i < (n || 40); i++){
    await kurz();
    if(knoepfe().length) return true;
  }
  return knoepfe().length > 0;
}

function rate(genau){
  /* Die Wahrheit steht in der Person; der Läufer darf sie kennen, ein
     Mensch nicht. Mit `genau` trifft er, sonst greift er daneben — und
     zwar um genau eine Stufe, das ist der interessantere Fehler. */
  const cfg = R.aktiv;
  if(!cfg) return false;
  const wahr = cfg.key === "bf" ? DATA.hero.z : DATA.hero.m;
  cfg.dims.forEach((d, i) => {
    let v = wahr[d];
    if(!genau && Math.random() < 0.35) v = Math.max(-2, Math.min(2, v + (Math.random() < 0.5 ? -1 : 1)));
    R.tipps[i] = v;
  });
  zeichneRatefeld(); zeichneRateHinweis();
  const b = document.getElementById("rateFertigUnten");
  if(!b || b.disabled){ fund("raten", "Festlegen bleibt gesperrt", {stufe: cfg.key}); return false; }
  b.click();
  return true;
}

async function besuch(pp, art){
  const vorher = durch(akteVon(pp.id));
  /* Erst in das Stockwerk gehen, in dem die Tür hängt — im Treppenhaus
     sieht man immer nur eines. */
  if(etageJetzt !== (pp.etage || 1)){ etageJetzt = pp.etage || 1; zeichneEtage(); await kurz(); }
  const kartenKnopf = [...document.querySelectorAll("#mkarten [data-person]")]
    .find(b => b.dataset.person === pp.id);
  if(!kartenKnopf){ fund("haus", "Karte fehlt, obwohl offen", {person: pp.id, etage: etageJetzt}); return; }
  kartenKnopf.click();
  await warte();

  let n = 0, fragen = 0;
  while(n++ < 400){
    SIM.schritte++;
    pruefeAlles();

    if(!document.getElementById("ratefeld").hidden && R.aktiv){
      zaehl("geraten");
      if(!rate(art !== "schlampig")) return;
      await warte();
      continue;
    }

    const bs = knoepfe();
    if(!bs.length){
      await kurz();
      if(!knoepfe().length){
        fund("lauf", "keine Züge mehr", {person: pp.id, phase: S && S.phase, ende: S && S.ende,
          zuletzt: document.getElementById("talk").innerText.slice(-220),
          unten: document.getElementById("choices").innerHTML.slice(0, 200)});
        return;
      }
      continue;
    }

    const nimm = re => bs.find(b => passt(b, re));
    let b = nimm(/^Hereinkommen/i);
    if(b){ b.click(); await warte(); continue; }

    /* Zurück ins Menü heißt: der Besuch ist vorbei. */
    b = nimm(/Zurück ins Menü/i);
    if(b){
      zaehl("besuch beendet");
      pruefeText(".verdict");
      pruefeBilanz(pp, vorher);
      b.click();
      await warte(20);
      return;
    }

    b = nimm(/A38/i);
    if(b){ zaehl("A38 gefragt"); b.click(); await warte(); continue; }

    b = nimm(/Genug\. Ich lege mich fest/i);
    if(b && fragen >= 3){ b.click(); await warte(); continue; }

    /* In Stufe drei gibt es kein Festlegen mehr: dort wird gefragt,
       bis die Geduld reicht, und dann verabschiedet man sich. */
    const echte = bs.filter(x => !/Genug|reicht es|verabschieden|Zurück|Festlegen/i.test(x.innerText));
    if(echte.length && (art !== "kurz" || fragen < 6)){
      fragen++;
      echte[Math.floor(Math.random() * echte.length)].click();
      await warte();
      continue;
    }
    b = nimm(/Für heute reicht es|Dich verabschieden/i);
    if(b){ b.click(); await warte(); continue; }
    if(bs.length){ bs[0].click(); await warte(); continue; }
  }
  fund("lauf", "Besuch hört nicht auf", {person: pp.id});
}

/* ─── Was am Ende eines Besuchs dasteht ────────────────────────────
   Drei Ausgänge, und die Überschrift muss den nennen, der eingetreten
   ist. Der wichtigste Fall ist der dritte: wer weitergeschickt wurde,
   darf nicht lesen, er sei gegangen, bevor es kippte. */
function pruefeBilanz(pp, vorher){
  const v = [...document.querySelectorAll(".verdict")].pop();
  if(!v) return;
  const t = v.innerText;
  const jetztDurch = durch(akteVon(pp.id));
  const neuDurch = jetztDurch && !vorher;
  const letzte = pp.route === Math.max(...PERSONEN.map(x => x.route || 0));

  if(neuDurch){
    zaehl("weitergegeben");
    if(/gegangen, bevor es kippte/i.test(t))
      fund("bilanz", "Ziel erreicht, aber 'gegangen bevor es kippte'", {person: pp.id});
    if(letzte){
      if(!drin(t, WELT.a38.titel))
        fund("bilanz", "letzte Tür ohne A38-Titel", {person: pp.id, kopf: t.slice(0, 90)});
    } else if(!/gibt dich weiter/i.test(t)){
      fund("bilanz", "Weitergabe ohne Weitergabe-Überschrift", {person: pp.id, kopf: t.slice(0, 90)});
    }
    /* Und die Tür, die genannt wird, muss die sein, die aufgeht. */
    if(!letzte){
      const naechste = PERSONEN.slice().sort((a,b)=>(a.route||99)-(b.route||99))
        .find(x => !durch(akteVon(x.id)));
      const schild = naechste && (naechste.tuer||{}).schild;
      if(schild && !drin(t, schild))
        fund("bilanz", "falsche Tür angekündigt", {person: pp.id, erwartet: schild});
    }
  }
  const zahlen = t.match(/Freundschaft (\d+) → (\d+)/);
  if(zahlen){
    const b = +zahlen[2];
    if(b < 0 || b > 100) fund("zahlen", "Freundschaft außerhalb", {wert: b});
  }
  const g = t.match(/Geduld (\d+)\/100/);
  if(g && (+g[1] < 0 || +g[1] > 100)) fund("zahlen", "Geduld außerhalb", {wert: +g[1]});
}

/* ─── Ein Durchlauf: von der Drehtür bis zum Antrag ────────────────── */
async function einLauf(art){
  Object.keys(AKTE).forEach(k => delete AKTE[k]);
  akteSichern();
  etageJetzt = null;
  if(typeof S !== "undefined" && S) S.ende = "abgebrochen";
  zeigeMenue();
  await kurz();

  let runde = 0;
  while(runde++ < 40){
    pruefeHaus();
    const dran = PERSONEN.slice().sort((a,b)=>(a.route||99)-(b.route||99))
      .find(pp => !durch(akteVon(pp.id)));
    if(!dran) break;
    await besuch(dran, art);
    await kurz();
  }

  const fertig = PERSONEN.filter(pp => durch(akteVon(pp.id))).length;
  if(fertig !== PERSONEN.length){
    fund("lauf", "nicht durchgekommen", {fertig, runden: runde});
    return false;
  }
  /* Ganz am Ende steht im Treppenhaus der Antrag, und nichts sonst. */
  const konto = document.getElementById("mkonto").innerText;
  if(!drin(konto, WELT.a38.titel))
    fund("ende", "Treppenhaus meldet den A38 nicht", {stand: konto.slice(0, 120)});
  SIM.enden.push(konto.slice(0, 60));
  zaehl("durchgespielt");
  return true;
}

/* ─── Hundertmal ──────────────────────────────────────────────────── */
async function durchspielen(wieOft){
  wieOft = wieOft || 100;
  SIM.begonnen = SIM.begonnen || performance.now();
  const fehlerZuvor = window.onerror;
  window.onerror = (m, q, z) => { fund("absturz", String(m), {zeile: z}); return false; };
  schnell();
  const arten = ["gruendlich", "kurz", "schlampig"];
  try{
    for(let i = 0; i < wieOft; i++){
      const art = arten[i % arten.length];
      zaehl("art:" + art);
      await einLauf(art);
      SIM.laeufe++;
      if(SIM.funde.length > 300){ fund("abbruch", "zu viele Funde, gestoppt"); break; }
    }
  } finally {
    normal();
    window.onerror = fehlerZuvor;
  }
  const dauer = Math.round((performance.now() - SIM.begonnen) / 1000);
  return {laeufe: SIM.laeufe, schritte: SIM.schritte, sekunden: dauer,
          funde: SIM.funde.length, gesehen: SIM.gesehen};
}
