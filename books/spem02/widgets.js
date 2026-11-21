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

const REGISTRY = { q2, q3, q16 };

export function hasGraphic(id) {
  return Boolean(REGISTRY[id]);
}

export function mountGraphic(id, root) {
  REGISTRY[id]?.(root);
}
