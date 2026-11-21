/**
 * Interactive graphics for this book, opened from a question's graphic button.
 * Build them from the shared kit; house rules are in docs/03-authoring-style.md.
 */

import { C, S, T, scene, clear, readout, question, tabs } from "../../engine/widgets/kit.js";

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

const REGISTRY = { q16 };

export function hasGraphic(id) {
  return Boolean(REGISTRY[id]);
}

export function mountGraphic(id, root) {
  REGISTRY[id]?.(root);
}
