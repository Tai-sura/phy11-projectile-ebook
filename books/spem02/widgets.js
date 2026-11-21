/**
 * Interactive graphics for this book, opened from a question's graphic button.
 * Build them from the shared kit; house rules are in docs/03-authoring-style.md.
 */

import { C, S, T, scene, clear, readout, question, tabs, slider } from "../../engine/widgets/kit.js";

/* ---------------- Q2: charge = current x time, and the mA h rating ----------------
 *
 * q2 prints a 1800 mA h battery driving a toy train that draws 0.4 A, and works
 *     1800 mA h = 1.8 A h,   time = Q / I = 1.8 / 0.4 = 4.5 h
 * The widget starts on exactly those two printed numbers and recomputes Q = I t whenever
 * the reader moves a slider. The ray from the origin IS Q = I t (its slope is the current),
 * the dashed horizontal line is the charge the battery really holds (1800 mA h — the
 * question gives no other capacity), so the crossing of the two is how long the train runs.
 *
 * Axes are fixed (t 0..9 h, Q 0..6000 mA h) so two different currents can be compared
 * directly. With I in 0.20..0.60 A and t in 0.5..9 h every reading stays inside the frame:
 * Q <= 0.60 x 9 = 5400 mA h, and the crossing is at 1800/I >= 3 h and <= 9 h.
 */
const Q2_CAP = 1800;    // mA h, the rating q2 gives; also the charge the battery holds
const Q2_I0 = 0.4;      // A, the current q2 gives
const Q2_T0 = 4.5;      // h, the time q2 answers

function q2(root) {
  const CW = 560, CH = 240;
  const svg = scene(CW, CH);
  const iS = slider({ label: "current I (A)", min: 0.2, max: 0.6, step: 0.05, value: Q2_I0,
    fmt: (v) => v.toFixed(2) + " A", play: false });
  const tS = slider({ label: "time t (h)", min: 0.5, max: 9, step: 0.1, value: Q2_T0,
    fmt: (v) => v.toFixed(1) + " h", play: false });
  const r = readout();

  root.append(
    question("A 1800 mA h battery drives a toy train that draws 0.4 A. At most, how long can the train run?", [
      "Charge, current and time: $Q = It$",
      "A mA h is a charge: $1\\ \\text{A h} = 3600\\ \\text{C}$",
      "So the running time is $t = Q/I$",
    ]),
    svg,
    iS.el, tS.el, r.el,
  );

  // fixed plot frame: t 0..9 h across, Q 0..6000 mA h up
  const X0 = 74, X1 = 470, Y0 = 40, Y1 = 200;
  const TMAX = 9, QMAX = 6000;
  const TX = (t) => X0 + (t / TMAX) * (X1 - X0);
  const QY = (q) => Y1 - (q / QMAX) * (Y1 - Y0);

  const render = () => {
    clear(svg);
    const I = iS.get(), t = tS.get();
    const q = I * 1000 * t;              // mA h delivered in that time
    const qC = I * t * 3600;             // the same charge in coulombs
    const tLife = Q2_CAP / (I * 1000);   // h, how long the battery actually lasts

    /* ---- fixed axes ---- */
    S("line", { x1: X0, y1: Y1, x2: X1 + 10, y2: Y1, stroke: C.line, "stroke-width": 1.6 }, svg);
    S("line", { x1: X0, y1: Y1, x2: X0, y2: Y0 - 12, stroke: C.line, "stroke-width": 1.6 }, svg);
    for (let h = 0; h <= TMAX; h++) {
      S("line", { x1: TX(h), y1: Y1, x2: TX(h), y2: Y1 + 5, stroke: C.line, "stroke-width": 1 }, svg);
      T(svg, TX(h), Y1 + 18, String(h), { "text-anchor": "middle", "font-size": 11, fill: "#444" });
    }
    for (let m = 0; m <= QMAX; m += 1000) {
      S("line", { x1: X0 - 4, y1: QY(m), x2: X0, y2: QY(m), stroke: C.line, "stroke-width": 1 }, svg);
      T(svg, X0 - 8, QY(m) + 4, String(m), { "text-anchor": "end", "font-size": 10.5, fill: "#444" });
    }
    T(svg, X1, Y1 + 32, "t (h)", { "text-anchor": "end", "font-size": 12, fill: C.line });
    T(svg, X0 - 8, Y0 - 18, "Q (mA h)", { "text-anchor": "start", "font-size": 12, fill: C.line });

    /* ---- what the battery holds (fixed: the question gives 1800 mA h) ---- */
    const capY = QY(Q2_CAP);
    S("line", { x1: X0, y1: capY, x2: X1, y2: capY, stroke: C.amber, "stroke-width": 1.8,
      "stroke-dasharray": "7 5" }, svg);
    // label above the line at its left end: the ray is far below there, and the crossing
    // label lives on the other side near the right, so the two can never meet
    T(svg, X0 + 4, capY - 8, "battery: 1800 mA h",
      { "font-size": 11, "font-weight": 700, fill: C.amber });

    /* ---- the live Q = I t ray, solid while the battery lasts ---- */
    const tEnd = Math.min(TMAX, tLife);
    S("line", { x1: TX(0), y1: QY(0), x2: TX(tEnd), y2: QY(I * 1000 * tEnd),
      stroke: C.blue, "stroke-width": 2.6 }, svg);
    if (tLife < TMAX) {
      S("line", { x1: TX(tEnd), y1: QY(I * 1000 * tEnd), x2: TX(TMAX), y2: QY(I * 1000 * TMAX),
        stroke: C.grey, "stroke-width": 1.8, "stroke-dasharray": "5 4" }, svg);
    }
    // the slope label sits 45% of the way along the run, which is always the same height
    // (45% of the 1800 mA h the battery holds = 810 mA h), and just BELOW the ray, the empty
    // side; above the ray it would be crossed by the ray itself at the steeper currents
    const rl = tEnd * 0.45;
    T(svg, TX(rl) + 4, QY(I * 1000 * rl) + 15, "I = " + I.toFixed(2) + " A",
      { "text-anchor": "start", "font-size": 11.5, "font-weight": 700, fill: C.blue });

    /* ---- where the ray meets the capacity line: the running time ----
     * below-right of the crossing is always empty (past the crossing the ray is above the
     * line); near the right edge the label flips to the empty side above-left. */
    const runX = TX(tEnd);
    S("circle", { cx: runX, cy: capY, r: 4, fill: C.amber, stroke: C.amber, "stroke-width": 1 }, svg);
    const flip = runX > 452;
    T(svg, flip ? runX - 8 : runX + 8, flip ? capY - 9 : capY + 18, "runs " + tLife.toFixed(2) + " h",
      { "text-anchor": flip ? "end" : "start", "font-size": 11, "font-weight": 700, fill: C.amber });

    /* ---- the live charge, in a fixed corner of the plot that nothing else reaches ---- */
    T(svg, X0 + 6, Y0 + 17, "Q = " + Math.round(q) + " mA h",
      { "font-size": 12.5, "font-weight": 700, fill: C.blue });

    /* ---- the point the two sliders choose ---- */
    S("circle", { cx: TX(t), cy: QY(q), r: 5.5, fill: "#fff", stroke: C.blue, "stroke-width": 2.4 }, svg);

    /* ---- the reading row ---- */
    const f0 = (v) => String(Math.round(v));
    const latex = "Q = It = " + I.toFixed(2) + "\\ \\text{A}\\times " + t.toFixed(2) +
      "\\ \\text{h} = " + f0(q) + "\\ \\text{mA h} = " + f0(qC) + "\\ \\text{C}";
    const over = q > Q2_CAP + 1e-9;
    const caption = over
      ? "That is more charge than the battery holds: 1800 mA h at " + I.toFixed(2) +
        " A only lasts " + tLife.toFixed(2) + " h."
      : "1800 mA h = 1.8 A h = " + f0(1800 * 3.6) + " C. At " + I.toFixed(2) + " A the train runs " +
        tLife.toFixed(2) + " h, because t = Q/I = 1.8/" + I.toFixed(2) + ".";
    r.set(latex, !over, caption, { yes: "live readings", no: "beyond the battery" });
  };

  [iS, tS].forEach((s) => s.on(render));
  render();
}

/* ---------------- Q3: potential difference = energy per unit charge ----------------
 *
 * q3 prints a 3 V battery that has delivered 12 J to a bulb and asks for the charge:
 *     V = E/Q  ->  Q = E/V = 12/3 = 4 C
 * The widget starts on those two printed numbers. The ray from the origin is every (Q, E)
 * pair the chosen battery can be at — its slope IS the potential difference, in joules per
 * coulomb, which is what makes 1 V = 1 J/C. The short amber bar at Q = 1 C is that slope
 * read off at one coulomb, so the unit identity is visible, not just stated.
 *
 * Axes are fixed (Q 0..12 C, E 0..18 J) and the slider ranges keep every reading inside
 * them: E <= 18 J always, and Q = E/V <= 18/1.5 = 12 C at the shallowest battery.
 */
const Q3_V0 = 3;     // V, the battery q3 gives
const Q3_E0 = 12;    // J, the energy q3 gives

function q3(root) {
  const CW = 560, CH = 240;
  const svg = scene(CW, CH);
  const vS = slider({ label: "battery V (V)", min: 1.5, max: 6, step: 0.5, value: Q3_V0,
    fmt: (v) => v.toFixed(1) + " V", play: false });
  const eS = slider({ label: "energy E (J)", min: 2, max: 18, step: 1, value: Q3_E0,
    fmt: (v) => v.toFixed(0) + " J", play: false });
  const r = readout();

  root.append(
    question("A light bulb is connected to a 3-V battery. If the battery has delivered 12 J of energy to the bulb, how much charge has passed through it?", [
      "Potential difference is the energy per unit charge: $V = E/Q$",
      "So the charge that flowed is $Q = E/V$",
      "$1\\ \\text{V} = 1\\ \\text{J C}^{-1}$",
    ]),
    svg,
    vS.el, eS.el, r.el,
  );

  // fixed plot frame: Q 0..12 C across, E 0..18 J up; the reading column sits clear of it
  const X0 = 74, X1 = 436, Y0 = 40, Y1 = 200, CX = 500;
  const QMAX = 12, EMAX = 18;
  const TX = (q) => X0 + (q / QMAX) * (X1 - X0);
  const QY = (e) => Y1 - (e / EMAX) * (Y1 - Y0);

  const render = () => {
    clear(svg);
    const V = vS.get(), E = eS.get();
    const Q = E / V;

    /* ---- fixed axes ---- */
    S("line", { x1: X0, y1: Y1, x2: X1 + 10, y2: Y1, stroke: C.line, "stroke-width": 1.6 }, svg);
    S("line", { x1: X0, y1: Y1, x2: X0, y2: Y0 - 12, stroke: C.line, "stroke-width": 1.6 }, svg);
    for (let q = 0; q <= QMAX; q++) {
      S("line", { x1: TX(q), y1: Y1, x2: TX(q), y2: Y1 + 5, stroke: C.line, "stroke-width": 1 }, svg);
      T(svg, TX(q), Y1 + 18, String(q), { "text-anchor": "middle", "font-size": 10.5, fill: "#444" });
    }
    for (let e = 0; e <= EMAX; e += 2) {
      S("line", { x1: X0 - 4, y1: QY(e), x2: X0, y2: QY(e), stroke: C.line, "stroke-width": 1 }, svg);
      T(svg, X0 - 8, QY(e) + 4, String(e), { "text-anchor": "end", "font-size": 10.5, fill: "#444" });
    }
    T(svg, X1, Y1 + 32, "Q (C)", { "text-anchor": "end", "font-size": 12, fill: C.line });
    T(svg, X0 - 8, Y0 - 18, "E (J)", { "text-anchor": "start", "font-size": 12, fill: C.line });

    /* ---- the ray: every (Q, E) pair for this battery, slope V ---- */
    const qEnd = Math.min(QMAX, EMAX / V);
    S("line", { x1: TX(0), y1: QY(0), x2: TX(qEnd), y2: QY(V * qEnd),
      stroke: C.blue, "stroke-width": 2.6 }, svg);

    /* ---- one coulomb carries V joules: the unit identity, drawn at Q = 1 ---- */
    S("line", { x1: TX(1), y1: QY(0), x2: TX(1), y2: QY(V), stroke: C.amber, "stroke-width": 2.2 }, svg);

    /* ---- where the two sliders sit, with guides out to both axes ---- */
    const px = TX(Q), py = QY(E);
    S("line", { x1: px, y1: py, x2: px, y2: Y1, stroke: C.grey, "stroke-width": 1, "stroke-dasharray": "3 3" }, svg);
    S("line", { x1: X0, y1: py, x2: px, y2: py, stroke: C.grey, "stroke-width": 1, "stroke-dasharray": "3 3" }, svg);
    S("circle", { cx: px, cy: py, r: 5.5, fill: "#fff", stroke: C.blue, "stroke-width": 2.4 }, svg);

    /* ---- the reading column: no text in the plot itself, so nothing can collide ---- */
    const col = (y, s, color, size) =>
      T(svg, CX, y, s, { "text-anchor": "middle", "font-size": size, "font-weight": 700, fill: color });
    col(84, "V = " + V.toFixed(1) + " V", C.blue, 13);
    col(112, "1 C \u2192 " + V.toFixed(1) + " J", C.amber, 12.5);
    col(148, "Q = " + Q.toFixed(2) + " C", C.blue, 15);
    col(176, "E = " + E.toFixed(0) + " J", C.grey, 12);

    /* ---- the reading row ---- */
    const latex = "Q = \\frac{E}{V} = \\frac{" + E.toFixed(0) + "\\ \\text{J}}{" + V.toFixed(1) +
      "\\ \\text{V}} = " + Q.toFixed(2) + "\\ \\text{C}";
    const caption = "A volt is one joule per coulomb (1 V = 1 J/C): every coulomb this " +
      V.toFixed(1) + " V battery pushes carries " + V.toFixed(1) + " J, so " + E.toFixed(0) +
      " J is " + Q.toFixed(2) + " C.";
    r.set(latex, true, caption, { yes: "live readings" });
  };

  [vS, eS].forEach((s) => s.on(render));
  render();
}

/* ---------------- Q6: the V-I line of one conductor, slope = R ----------------
 *
 * q6 reads a V-I graph and answers R = 12/3 = 4 ohm for the straight part, then notes that
 * above 12 V the line is steeper, so the resistance falls. The widget keeps the printed
 * data point (3 A, 12 V) and the single-conductor idea: one straight line through the
 * origin, slope R, and the same current I = 3 A marked on it. At R = 4 ohm the line passes
 * exactly through the printed point, which is where the printed answer comes from.
 *
 * The graph is V against I (V up, I across), which is how the printed figure is drawn, so a
 * BIGGER resistance makes the line STEEPER — the printed solution says the same in words
 * ("the line is steeper, so the resistance falls"). Axes are fixed at I 0..6 A and
 * V 0..20 V; the live point sits at I = 3 A, so it is inside the frame for every R.
 */
const Q6_R0 = 4;     // ohm, the printed R = 12/3
const Q6_I = 3;      // A, the current the printed point is read at
const Q6_V = 12;     // V, the printed point

function q6(root) {
  const CW = 560, CH = 240;
  const svg = scene(CW, CH);
  const rS = slider({ label: "resistance R (\u03A9)", min: 0.5, max: 5, step: 0.1, value: Q6_R0,
    fmt: (v) => v.toFixed(1) + " \u03A9", play: false });
  const r = readout();

  root.append(
    question("The V-I graph of a conductor is a straight line through the origin, reading 12 V at 3 A. What is its resistance?", [
      "For a fixed resistance $V = RI$, so the line through the origin has slope $R$",
      "Reading the printed point: $R = V/I = 12/3$",
      "A bigger $R$ makes the line steeper; a smaller $R$ flattens it",
    ]),
    svg,
    rS.el, r.el,
  );

  // fixed plot frame: I 0..6 A across, V 0..20 V up; the reading column sits clear of it
  const X0 = 74, X1 = 436, Y0 = 40, Y1 = 200, CX = 500;
  const IMAX = 6, VMAX = 20;
  const TX = (i) => X0 + (i / IMAX) * (X1 - X0);
  const QY = (v) => Y1 - (v / VMAX) * (Y1 - Y0);

  const render = () => {
    clear(svg);
    const R = rS.get();
    const V = R * Q6_I;

    /* ---- fixed axes ---- */
    S("line", { x1: X0, y1: Y1, x2: X1 + 10, y2: Y1, stroke: C.line, "stroke-width": 1.6 }, svg);
    S("line", { x1: X0, y1: Y1, x2: X0, y2: Y0 - 12, stroke: C.line, "stroke-width": 1.6 }, svg);
    for (let i = 0; i <= IMAX; i++) {
      S("line", { x1: TX(i), y1: Y1, x2: TX(i), y2: Y1 + 5, stroke: C.line, "stroke-width": 1 }, svg);
      T(svg, TX(i), Y1 + 18, String(i), { "text-anchor": "middle", "font-size": 10.5, fill: "#444" });
    }
    for (let v = 0; v <= VMAX; v += 5) {
      S("line", { x1: X0 - 4, y1: QY(v), x2: X0, y2: QY(v), stroke: C.line, "stroke-width": 1 }, svg);
      T(svg, X0 - 8, QY(v) + 4, String(v), { "text-anchor": "end", "font-size": 10.5, fill: "#444" });
    }
    T(svg, X1, Y1 + 32, "I (A)", { "text-anchor": "end", "font-size": 12, fill: C.line });
    T(svg, X0 - 8, Y0 - 18, "p.d. (V)", { "text-anchor": "start", "font-size": 12, fill: C.line });

    /* ---- one straight line through the origin, slope R ---- */
    const iEnd = Math.min(IMAX, VMAX / R);
    S("line", { x1: TX(0), y1: QY(0), x2: TX(iEnd), y2: QY(R * iEnd),
      stroke: C.blue, "stroke-width": 2.6 }, svg);

    /* ---- the printed reading, which is where q6's 4 ohm comes from ----
     * drawn as a box a little larger than the live dot, so at R = 4 ohm (when the two
     * coincide) the amber frame still shows around the blue dot instead of vanishing */
    const px = TX(Q6_I), py = QY(Q6_V);
    S("rect", { x: px - 7, y: py - 7, width: 14, height: 14, fill: "none", stroke: C.amber, "stroke-width": 2 }, svg);

    /* ---- the same current on this conductor, with guides to both axes ---- */
    const ly = QY(V);
    S("line", { x1: px, y1: QY(0), x2: px, y2: ly, stroke: C.grey, "stroke-width": 1, "stroke-dasharray": "3 3" }, svg);
    S("line", { x1: X0, y1: ly, x2: px, y2: ly, stroke: C.grey, "stroke-width": 1, "stroke-dasharray": "3 3" }, svg);
    S("circle", { cx: px, cy: ly, r: 5.5, fill: "#fff", stroke: C.blue, "stroke-width": 2.4 }, svg);

    /* ---- the reading column: no text in the plot itself, so nothing can collide ---- */
    const col = (y, s, color, size) =>
      T(svg, CX, y, s, { "text-anchor": "middle", "font-size": size, "font-weight": 700, fill: color });
    col(84, "R = " + R.toFixed(1) + " \u03A9", C.blue, 15);
    col(112, "V = RI", C.grey, 12);
    col(140, "at I = " + Q6_I.toFixed(1) + " A", C.grey, 11.5);
    col(168, "V = " + V.toFixed(1) + " V", C.blue, 13.5);

    /* ---- the reading row ---- */
    const latex = "R = \\frac{V}{I} = \\frac{" + V.toFixed(1) + "\\ \\text{V}}{" + Q6_I.toFixed(1) +
      "\\ \\text{A}} = " + R.toFixed(1) + "\\ \\Omega";
    const same = Math.abs(R - Q6_R0) < 0.05;
    const caption = same
      ? "This is the printed conductor: at 3.0 A the p.d. is 12.0 V, so R = 4.0 \u03A9 — the line is straight through the origin, which is what constant resistance looks like."
      : "One straight line through the origin means R does not change. At " + R.toFixed(1) +
        " \u03A9 the same 3.0 A needs " + V.toFixed(1) + " V, so the line is " +
        (R > Q6_R0 ? "steeper" : "flatter") + " than the printed 4.0 \u03A9 one.";
    r.set(latex, true, caption, { yes: "live readings" });
  };

  rS.on(render);
  render();
}

/* ---------------- Q9: resistance from the length of a wire, R = rho l / A ----------------
 *
 * q9 prints a metal wire 70 cm long, 1 mm across, R = 0.6 ohm, and gets
 *     A = pi r^2 = pi (0.0005)^2 = 7.854e-7 m^2,   rho = RA/l = 6.73e-7 ohm m
 * and part (b) halves the length: the resistance halves to 0.3 ohm, the resistivity does
 * not change. The widget keeps exactly those printed numbers — the diameter stays 1 mm and
 * rho stays the value part (a) found — and only the length is on the slider, which is the
 * thing q9 (b) varies. The wire is drawn to a fixed 0..100 cm scale, so its length on
 * screen is the length in the question.
 */
const Q9_RHO = 6.73e-7;    // ohm m, what q9 (a) finds
const Q9_D = 1e-3;         // m, the printed diameter (radius 0.5 mm)
const Q9_L0 = 70;          // cm, the printed length
const Q9_A = Math.PI * (Q9_D / 2) ** 2;   // m^2, the printed cross-section

function q9(root) {
  const CW = 560, CH = 240;
  const svg = scene(CW, CH);
  const lS = slider({ label: "length l (cm)", min: 10, max: 100, step: 5, value: Q9_L0,
    fmt: (v) => v.toFixed(0) + " cm", play: false });
  const r = readout();

  root.append(
    question("A metal wire 70 cm long has a resistance of 0.6 \u03A9; its diameter is 1 mm. Find the resistivity, then the resistance and resistivity when the length is halved.", [
      "Resistance of a wire: $R = \\rho\\dfrac{l}{A}$, so $\\rho = \\dfrac{RA}{l}$",
      "Cross-section $A = \\pi r^2$ with $r = 0.5\\ \\text{mm}$",
      "Halving the length halves $R$; $\\rho$ is a property of the metal, so it does not change",
    ]),
    svg,
    lS.el, r.el,
  );

  // fixed drawing scale: 0..100 cm across 350 px, so the wire length on screen means something
  const WX = 80, WMAX = 350, WY = 84, WH = 16, SY = 122;
  const XW = (cm) => WX + (cm / 100) * WMAX;
  const CX = 498;

  // one text element with a superscript tail, so "10^-7" is a real exponent, not a caret
  const sci = (x, y, head, sup, tail, attrs) => {
    const t = S("text", Object.assign({ x, y }, attrs), svg);
    S("tspan", {}, t).textContent = head;
    if (sup) S("tspan", { "baseline-shift": "super", "font-size": (attrs["font-size"] || 11) * 0.72 }, t).textContent = sup;
    if (tail) S("tspan", {}, t).textContent = tail;
    return t;
  };

  const render = () => {
    clear(svg);
    const l = lS.get();                 // cm
    const R = (Q9_RHO * (l / 100)) / Q9_A;

    /* ---- the wire, drawn to the fixed scale ---- */
    S("rect", { x: WX, y: WY, width: XW(l) - WX, height: WH, rx: 8,
      fill: C.amberSoft, stroke: C.amber, "stroke-width": 2 }, svg);
    // a couple of marks inside the wire, so a long wire does not read as a plain block
    for (let cm = 20; cm < l; cm += 20) {
      S("line", { x1: XW(cm), y1: WY + 2, x2: XW(cm), y2: WY + WH - 2, stroke: C.amber,
        "stroke-width": 1, "stroke-dasharray": "2 3" }, svg);
    }

    /* ---- the length scale under it ---- */
    S("line", { x1: WX, y1: SY, x2: WX + WMAX, y2: SY, stroke: C.line, "stroke-width": 1.4 }, svg);
    for (let cm = 0; cm <= 100; cm += 10) {
      const big = cm % 20 === 0;
      S("line", { x1: XW(cm), y1: SY, x2: XW(cm), y2: SY + (big ? 6 : 3), stroke: C.line, "stroke-width": 1 }, svg);
      if (big) T(svg, XW(cm), SY + 20, String(cm), { "text-anchor": "middle", "font-size": 10, fill: "#444" });
    }
    T(svg, WX + WMAX, SY + 36, "length (cm)", { "text-anchor": "end", "font-size": 10.5, fill: C.line });

    /* ---- the 1 mm diameter, drawn as the cross-section it is ---- */
    S("circle", { cx: 102, cy: 176, r: 9, fill: C.amberSoft, stroke: C.amber, "stroke-width": 2 }, svg);
    S("line", { x1: 93, y1: 176, x2: 111, y2: 176, stroke: C.amber, "stroke-width": 1.4 }, svg);
    T(svg, 120, 172, "diameter " + (Q9_D * 1000).toFixed(0) + " mm", { "font-size": 10.5, "font-weight": 700, fill: C.ink });
    sci(120, 190, "A = \u03C0r\u00B2 = 7.85 \u00D7 10", "-7", " m\u00B2", { "font-size": 10.5, fill: C.grey });

    /* ---- the reading column, clear of the wire and the scale ---- */
    const col = (y, s, color, size) =>
      T(svg, CX, y, s, { "text-anchor": "middle", "font-size": size, "font-weight": 700, fill: color });
    col(84, "l = " + l.toFixed(0) + " cm", C.grey, 12);
    sci(CX - 52, 114, "\u03C1 = 6.73 \u00D7 10", "-7", " \u03A9 m", { "font-size": 11, "font-weight": 700, fill: C.amber });
    col(152, "R = " + R.toFixed(2) + " \u03A9", C.blue, 17);

    /* ---- the reading row ---- */
    const latex = "R = \\rho\\frac{l}{A} = " + R.toFixed(2) + "\\ \\Omega,\\quad l = " + l.toFixed(0) +
      "\\ \\text{cm},\\quad \\rho = 6.73\\times10^{-7}\\ \\Omega\\,\\text{m}";
    const half = Math.abs(l - Q9_L0 / 2) < 2.6;
    const full = Math.abs(l - Q9_L0) < 2.6;
    const caption = full
      ? "The printed wire: 70 cm of 1 mm metal with \u03C1 = 6.73 \u00D7 10\u207B\u2077 \u03A9 m gives R = 0.60 \u03A9."
      : half
        ? "Halved to 35 cm: the resistance halves to 0.30 \u03A9, but \u03C1 stays 6.73 \u00D7 10\u207B\u2077 \u03A9 m — resistivity belongs to the metal, not to the piece."
        : "A and \u03C1 are fixed, so R is proportional to the length: " + l.toFixed(0) + " cm of this wire is "
          + R.toFixed(2) + " \u03A9, and half the length would be " + (R / 2).toFixed(2) + " \u03A9.";
    r.set(latex, true, caption, { yes: "live readings" });
  };

  lS.on(render);
  render();
}

/* ---------------- Q16: the same two resistors, in series and in parallel ----------------
 *
 * q16 gives 3 ohm, 6 ohm and a 9 V battery, and its answers are
 *     (a)(i) 3 + 6 = 9 ohm     (ii) I = 9/9 = 1 A, V across the 6 ohm = 6 V
 *     (b)(i) 1/(1/3 + 1/6) = 2 ohm   (ii) 9/6 = 1.5 A in the 6 ohm  (iii) 9/2 = 4.5 A total
 * Every number on screen is recomputed from R1, R2 and V below, so the widget cannot drift
 * from the printed answer.  Only the two configurations the question actually has are
 * offered: a "mixed" network would need a third resistance that q16 never gives.
 *
 * Layout: the circuit is drawn in an SVG group that is scaled up and centred, so it fills
 * the card instead of sitting in one corner; the reading column is centred on the same
 * vertical line as the circuit and R_eq is written with a real subscript.
 */
const R16_A = 3;      // ohm
const R16_B = 6;      // ohm
const V16 = 9;        // V
const f16 = (v, u) => `${v.toFixed(2)} ${u}`;

const G_SCALE = 1.55;                 // draw small, then enlarge to fill the card
const G_TX = -120.9, G_TY = -112.0;   // puts the circuit centre near (200, 124)

function q16(root) {
  const CW = 560, CH = 240;
  const svg = scene(CW, CH);
  const r = readout();
  const state = { mode: 0 };

  root.append(
    question("Two resistors, 3 Ω and 6 Ω, are connected across a 9 V battery. Compare the series and the parallel circuit.", [
      "Series: $R_{eq} = R_1 + R_2$, and the same current passes through both",
      "Parallel: $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2}$, and both have the same p.d.",
    ]),
    svg,
    tabs(["series", "parallel"], (i) => { state.mode = i; render(); }),
    r.el,
  );

  // R_eq = value as ONE text element, so the subscript and the number cannot overlap
  const reLine = (x, y, value, color, size) => {
    const t = S("text", { x, y, fill: color, "font-size": size, "font-weight": 700,
      "text-anchor": "middle" }, svg);
    S("tspan", {}, t).textContent = "R";
    S("tspan", { "baseline-shift": "sub", "font-size": size * 0.66 }, t).textContent = "eq";
    S("tspan", {}, t).textContent = " = " + value + " Ω";
  };

  const render = () => {
    clear(svg);
    const series = state.mode === 0;
    const R = series ? R16_A + R16_B : (R16_A * R16_B) / (R16_A + R16_B);
    const I = V16 / R;
    const g = S("g", { transform: "translate(" + G_TX + " " + G_TY + ") scale(" + G_SCALE + ")" }, svg);

    const wire = (...pts) => {
      const d = pts.map((p, i) => (i ? "L" : "M") + p[0] + " " + p[1]).join(" ");
      S("path", { d, fill: "none", stroke: C.line, "stroke-width": 2.4, "stroke-linejoin": "round" }, g);
    };
    const resBox = (cx, cy, label) => {
      S("rect", { x: cx - 25, y: cy - 9.5, width: 50, height: 19, rx: 2,
        fill: C.greenSoft, stroke: C.green, "stroke-width": 2.2 }, g);
      T(g, cx, cy + 4.8, label, { "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: C.ink });
    };
    const cell = (x, y) => {
      S("line", { x1: x - 12, y1: y - 6, x2: x + 12, y2: y - 6, stroke: C.line, "stroke-width": 3 }, g);
      S("line", { x1: x - 6, y1: y + 6, x2: x + 6, y2: y + 6, stroke: C.line, "stroke-width": 3 }, g);
      T(g, x - 20, y + 4, "9 V", { "text-anchor": "end", "font-size": 12.5, "font-weight": 700, fill: C.ink });
    };
    const note = (x, y, s, color, size) =>
      T(g, x, y, s, { "text-anchor": "middle", "font-size": size || 11.5, fill: color || C.grey });

    const LX = 84, RX = 330, TY = 96, BY = 214, MY = (TY + BY) / 2;

    wire([LX, BY], [LX, MY + 6]);
    wire([LX, MY - 6], [LX, TY]);
    cell(LX, MY);

    if (series) {
      wire([LX, TY], [RX, TY], [RX, BY], [LX, BY]);
      resBox(166, TY, "3 Ω");
      resBox(262, TY, "6 Ω");
      S("line", { x1: 112, y1: TY, x2: 140, y2: TY, stroke: C.red, "stroke-width": 2.6,
        "marker-end": "url(#arrRed-" + svg.dataset.uid + ")" }, g);
      T(g, 126, TY + 18, "I", { "text-anchor": "middle", "font-size": 12.5, "font-weight": 700, fill: C.red });
      note(166, TY + 32, "V = " + f16(I * R16_A, "V"), C.blue);
      note(262, TY + 32, "V = " + f16(I * R16_B, "V"), C.blue);
    } else {
      const BL = 208, BR = 300, T1 = 132, T2 = 178;
      wire([LX, TY], [BL, TY], [BL, T1]);
      wire([BL, T1], [BL, T2]);
      wire([BR, T1], [BR, T2]);
      wire([BL, T1], [BR, T1]);
      wire([BL, T2], [BR, T2]);
      wire([BR, T2], [BR, BY], [LX, BY]);
      resBox((BL + BR) / 2, T1, "3 Ω");
      resBox((BL + BR) / 2, T2, "6 Ω");
      note((BL + BR) / 2, T1 - 18, "V = " + f16(V16, "V"), C.blue);
      S("line", { x1: BL + 8, y1: T1 + 20, x2: BL + 30, y2: T1 + 20, stroke: C.red, "stroke-width": 2.6,
        "marker-end": "url(#arrRed-" + svg.dataset.uid + ")" }, g);
      T(g, BR + 16, T1 + 4.5, "I₃", { "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: C.red });
      T(g, BR + 16, T2 + 4.5, "I₆", { "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: C.red });
    }

    /* ---- the reading column, centred on the circuit's vertical centre line ---- */
    const CX = 452;
    const txt = (y, s, color, size, bold) =>
      T(svg, CX, y, s, { "text-anchor": "middle", "font-size": size, fill: color,
        "font-weight": bold ? 700 : 400 });
    if (series) {
      txt(78, "same current I", C.grey, 11.5, false);
      txt(106, "I = " + f16(I, "A"), C.red, 14, true);
      reLine(CX, 136, R.toFixed(2), C.green, 14);
      txt(168, "V₃ + V₆ = 9.00 V", C.blue, 11.5, false);
    } else {
      txt(70, "same p.d. V", C.grey, 11.5, false);
      txt(98, "I₃ = " + f16(V16 / R16_A, "A"), C.red, 13, true);
      txt(124, "I₆ = " + f16(V16 / R16_B, "A"), C.red, 13, true);
      txt(152, "I = " + f16(I, "A"), C.ink, 13, true);
      reLine(CX, 184, R.toFixed(2), C.green, 14);
    }

    const latex = series
      ? "R_{eq} = " + f16(R, "\\Omega") + ",\\quad I = " + f16(I, "\\text{A}") +
        ",\\quad V_3 = " + f16(I * R16_A, "\\text{V}") + ",\\quad V_6 = " + f16(I * R16_B, "\\text{V}")
      : "R_{eq} = " + f16(R, "\\Omega") + ",\\quad I = " + f16(I, "\\text{A}") +
        ",\\quad I_3 = " + f16(V16 / R16_A, "\\text{A}") + ",\\quad I_6 = " + f16(V16 / R16_B, "\\text{A}");
    const caption = series
      ? "Series: R_eq = R₁ + R₂, the same current through both, and the p.d. splits in proportion to the resistances."
      : "Parallel: 1/R_eq = 1/R₁ + 1/R₂, both resistors have the full 9 V, and the current splits in proportion to 1/R.";
    r.set(latex, true, caption, { yes: "live readings" });
  };

  render();
}

const REGISTRY = { q2, q3, q6, q9, q16 };

export function hasGraphic(id) {
  return Boolean(REGISTRY[id]);
}

export function mountGraphic(id, root) {
  REGISTRY[id]?.(root);
}
