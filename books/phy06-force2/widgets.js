/**
 * Interactive graphics for this book, opened from a question's graphic button.
 * Build them from the shared kit; house rules are in docs/03-authoring-style.md.
 * books/jm26b/widgets.js has many worked examples (sliders, number lines,
 * bar models, MC checkers).
 */

import { C, H, S, T, scene, clear, slider, readout, question, buttonRow, sector, tabs } from "../../engine/widgets/kit.js";

/* ---------------- Q9: two strings hold a weight — the angles fix the tensions ----------------
 *
 * The knot is in equilibrium under T₁ (up-left, θ₁ above the horizontal), T₂ (up-right,
 * θ₂ above the horizontal) and the weight W straight down:
 *     T₁cos θ₁ = T₂cos θ₂        (horizontal)
 *     T₁sin θ₁ + T₂sin θ₂ = W    (vertical)
 * which solve to  T₁ = W cos θ₂ / sin(θ₁+θ₂),  T₂ = W cos θ₁ / sin(θ₁+θ₂).
 * Checked against the printed answer: 60°/30°, W = 100 N → 86.603 N and 50.000 N ✓, and
 * 45°/45° → 70.711 N ✓. Both tensions are recomputed on every draw; neither 86.6 nor 50
 * is written into the picture.
 *
 * The only singular case is sin(θ₁+θ₂) → 0: the two strings then lie on one straight line
 * and no finite pair of tensions can hold the weight. Near that line the tensions grow
 * without bound — the flatter the strings, the larger the tension, which is why the
 * sliders go down to 1° (1°/1°: T = 28.6W, about 2,900 N at W = 100 N) and the drawing
 * shrinks its arrow scale rather than run off the frame. sin(θ₁+θ₂) = 0 itself is kept as
 * the "no solution" branch, although the sliders cannot reach it. (At the other end, both
 * strings vertical, T₁ = T₂ = W/2, so the tensions are smallest, not largest: 80°/80°
 * gives 0.51W. The split is only undetermined at exactly 90°/90°.)
 */
const K9 = (v) => {
  if (!Number.isFinite(v)) return "—";
  const s = v.toPrecision(3);
  return s.includes("e") ? String(Number(s)) : s; // 2865 → "2860", 50 → "50.0"
};
const Q9_KMAX = 1.0; // px of arrow per newton at ordinary loads

function q9(root) {
  const CW = 620, CH = 300, KX = 310, KY = 145; // knot at the centre; W hangs below it
  const svg = scene(CW, CH);
  const uid = svg.dataset.uid;
  const defs = svg.querySelector("defs");
  const head = (name, color) => {
    const mk = S("marker", {
      id: `${name}${uid}`, viewBox: "0 0 10 10", refX: 8, refY: 5,
      markerWidth: 11, markerHeight: 11, markerUnits: "userSpaceOnUse",
      orient: "auto-start-reverse",
    }, defs);
    S("path", { d: "M0,0 L10,5 L0,10 z", fill: color }, mk);
    return `url(#${name}${uid})`;
  };
  const mT1 = head("q9a", C.blue), mT2 = head("q9b", C.amber), mW = head("q9c", C.red), mG = head("q9d", C.grey);

  const wS = slider({ label: "Weight W (N)", min: 20, max: 200, step: 5, value: 100, play: false });
  const aS = slider({ label: "θ₁ to the horizontal (°)", min: 1, max: 80, step: 1, value: 60, fmt: (v) => `${v}°`, play: false });
  const bS = slider({ label: "θ₂ to the horizontal (°)", min: 1, max: 80, step: 1, value: 30, fmt: (v) => `${v}°`, play: false });
  const r = readout();

  root.append(
    question("A 100 N weight hangs from a knot that two strings hold: T₁ at 60° and T₂ at 30° to the horizontal. Find the tensions.", [
      "Horizontally: $T_1\\cos\\theta_1 = T_2\\cos\\theta_2$",
      "Vertically: $T_1\\sin\\theta_1 + T_2\\sin\\theta_2 = W$",
    ]),
    svg, wS.el, aS.el, bS.el, r.el,
    buttonRow([
      ["60° / 30° — the question", () => { aS.set(60); bS.set(30); }],
      ["45° / 45° — symmetrical, T = W/√2", () => { aS.set(45); bS.set(45); }],
    ]),
  );

  /** A label held inside the canvas whatever the angles do. */
  const put = (x, y, text, color, weight = 700, size = 12.5) => {
    const half = (text.length * size * 0.56) / 2 + 4;
    const cx = Math.min(CW - half, Math.max(half, x));
    const cy = Math.min(CH - 8, Math.max(size, y));
    T(svg, cx, cy, text, { "text-anchor": "middle", "font-size": size, "font-weight": weight, fill: color });
  };

  const draw = (w, d1, d2) => {
    clear(svg);
    const a = (d1 * Math.PI) / 180;
    const b = (d2 * Math.PI) / 180;
    const den = Math.sin(a + b);
    const solvable = Math.abs(den) > 1e-6;
    const t1 = (w * Math.cos(b)) / den;
    const t2 = (w * Math.cos(a)) / den;

    // the two angles as wedges at the knot, then the horizontal they are measured from
    if (solvable) {
      sector(svg, KX, KY, 38, Math.PI, Math.PI + a, C.blueSoft, C.blue);
      sector(svg, KX, KY, 38, -b, 0, C.amberSoft, C.amber);
    }
    S("line", { x1: 10, y1: KY, x2: CW - 10, y2: KY, stroke: C.grey, "stroke-width": 1.2, "stroke-dasharray": "5 5" }, svg);
    put(KX - 54, KY + 16, `θ₁ = ${d1}°`, C.blue, 600, 12);
    put(KX + 54, KY + 16, `θ₂ = ${d2}°`, C.amber, 600, 12);

    if (solvable) {
      // one scale for all three arrows, so their lengths compare directly. It is
      // Q9_KMAX px/N unless an arrow would leave the frame; the key at the bottom
      // left always shows the scale actually used.
      const up = Math.max(t1 * Math.sin(a), t2 * Math.sin(b));
      const side = Math.max(t1 * Math.abs(Math.cos(a)), t2 * Math.abs(Math.cos(b)));
      const k = Math.min(Q9_KMAX, (KY - 34) / up, (CH - KY - 34) / w, (CW / 2 - 52) / side);
      const arrow = (ang, len, color, mark) => {
        const x = KX + len * Math.cos(ang), y = KY + len * Math.sin(ang);
        S("line", { x1: KX, y1: KY, x2: x, y2: y, stroke: color, "stroke-width": 3, "stroke-linecap": "round", "marker-end": mark }, svg);
        return [x, y];
      };
      const [x1, y1] = arrow(Math.PI + a, t1 * k, C.blue, mT1);
      const [x2, y2] = arrow(-b, t2 * k, C.amber, mT2);
      const [, y3] = arrow(Math.PI / 2, w * k, C.red, mW);
      // each label sits just above its tip, pushed outwards so that two steep
      // strings (80°/80°) never print their two numbers on top of each other,
      // and a nearly horizontal arrow never runs through its own number
      put(Math.min(x1, KX - 55), y1 - 11, `T₁ = ${K9(t1)} N`, C.blue);
      put(Math.max(x2, KX + 55), y2 - 11, `T₂ = ${K9(t2)} N`, C.amber);
      put(KX, Math.max(y3 + 18, KY + 46), `W = ${K9(w)} N`, C.red);
      if (100 * k >= 36) {
        S("line", { x1: 24, y1: CH - 14, x2: 24 + 100 * k, y2: CH - 14, stroke: C.grey, "stroke-width": 2.4, "marker-end": mG }, svg);
        T(svg, 34 + 100 * k, CH - 10, "= 100 N", { "font-size": 11, fill: C.grey });
      }
    } else {
      put(KX, KY - 52, "no solution", C.red, 700, 13);
      put(KX, KY - 32, "the two strings lie on one straight line", C.grey, 600, 11.5);
    }

    // the knot
    S("circle", { cx: KX, cy: KY, r: 5, fill: C.ink, stroke: "#fff", "stroke-width": 2 }, svg);

    if (!solvable) {
      r.set("T_1,\\ T_2\\ \\text{are not finite}", false,
        "With the strings in one straight line no finite tension can hold the weight up.",
        { no: "no solution" });
      return;
    }
    const big = Math.max(t1, t2) / w;
    const pair = `T_1 = ${K9(t1)}\\ \\text{N},\\quad T_2 = ${K9(t2)}\\ \\text{N}`;
    if (big >= 2.5) {
      r.set(pair, false,
        `Each tension is ${K9(big)} times the weight — the flatter the strings, the larger the tension.`,
        { no: "tensions very large" });
    } else {
      r.set(pair, true,
        `T₁ = ${K9(t1 / t2)} T₂  ·  T₁ sin θ₁ + T₂ sin θ₂ = ${K9(w)} N = W`,
        { yes: "in equilibrium" });
    }
  };

  const render = () => draw(wS.get(), aS.get(), bS.get());
  [wS, aS, bS].forEach((s) => s.on(render));
  render();
}

/* ---------------- Q35: the inclined-plane bench ----------------
 *
 * One set of live numbers behind three modes (g = 9.81, Y is the fixed 3 kg mass):
 *   free slide   a = g sin θ                                   (22.5° → 3.754)
 *   held by F    F = m g tan θ,  N = m g cos θ + F sin θ        (22.5°, 5 kg → 20.32 N, 53.09 N)
 *   pulley       a = (m_Y g − m g sin θ) / (m + m_Y),  X up    (22.5°, 5 kg → 1.332)
 * With the pulley, a goes negative once sin θ > m_Y / m, i.e. θ > 36.87° at m = 5 kg; the
 * widget then says X slides down and prints |a| with that direction, never a negative a
 * labelled "up". Independent check (Python, g = 9.81): 3.7541 / 20.3172, 53.0913 / 1.3324 /
 * −0.0000 at 36.87° / −1.6311 at 60°.
 */
const G35 = 9.81, MY35 = 3.0;
const K35 = (v) => {
  if (!Number.isFinite(v)) return "—";
  const s = Math.abs(v) < 5e-3 ? "0.00" : v.toPrecision(3);
  return s.includes("e") ? String(Number(s)) : s;
};

function q35(root) {
  const CW = 620, CH = 330;
  const svg = scene(CW, CH);
  const thS = slider({ label: "θ (degrees)", min: 0, max: 60, step: 0.1, value: 22.5, fmt: (v) => `${v}°`, play: false });
  const mS = slider({ label: "m_X (kg)", min: 1, max: 10, step: 0.5, value: 5, play: false });
  const r = readout();
  const state = { mode: 0 };

  root.append(
    question("Block X rides a smooth plane at θ; find a, and the horizontal force F that holds it, and the pulley case with Y = 3 kg.", [
      "Down the plane positive: $a = g\\sin\\theta$",
      "Held still: $F\\cos\\theta = mg\\sin\\theta$,  $N = mg\\cos\\theta + F\\sin\\theta$",
      "With Y: $(m_Y - m_X\\sin\\theta)g = (m_X + m_Y)a$",
    ]),
    svg,
    tabs(["free slide", "held by F", "pulley + 3 kg"], (i) => { state.mode = i; render(); }),
    thS.el, mS.el, r.el,
  );

  // v–t axes, fixed scale: t 0..2.5 s, v 0..10 m/s
  const PX0 = 54, PX1 = 318, PY0 = 42, PY1 = 250;
  const TX = (t) => PX0 + (t / 2.5) * (PX1 - PX0);
  const VY = (v) => PY1 - (v / 10) * (PY1 - PY0);

  const render = () => {
    clear(svg);
    const th = thS.get(), m = mS.get(), mode = state.mode;
    const rad = (th * Math.PI) / 180;
    const aFree = G35 * Math.sin(rad);
    const F = m * G35 * Math.tan(rad);
    const N = m * G35 * Math.cos(rad) + F * Math.sin(rad);
    const aPul = (MY35 * G35 - m * G35 * Math.sin(rad)) / (m + MY35);

    /* ---- v–t plot (free slide only) ---- */
    S("line", { x1: PX0, y1: PY1, x2: PX1 + 12, y2: PY1, stroke: C.line, "stroke-width": 1.5 }, svg);
    S("line", { x1: PX0, y1: PY1, x2: PX0, y2: PY0 - 10, stroke: C.line, "stroke-width": 1.5 }, svg);
    for (let t = 0; t <= 2.5; t += 0.5) {
      S("line", { x1: TX(t), y1: PY1, x2: TX(t), y2: PY1 + 5, stroke: C.line, "stroke-width": 1 }, svg);
      T(svg, TX(t), PY1 + 18, t === 0 ? "0" : String(t), { "text-anchor": "middle", "font-size": 11, fill: "#444" });
    }
    for (let v = 0; v <= 10; v += 2) {
      S("line", { x1: PX0 - 4, y1: VY(v), x2: PX0, y2: VY(v), stroke: C.line, "stroke-width": 1 }, svg);
      T(svg, PX0 - 8, VY(v) + 4, String(v), { "text-anchor": "end", "font-size": 11, fill: "#444" });
    }
    T(svg, (PX0 + PX1) / 2, PY1 + 34, "t (s)", { "text-anchor": "middle", "font-size": 12, fill: C.line });
    T(svg, PX0 - 8, PY0 - 16, "v (m/s)", { "text-anchor": "start", "font-size": 12, fill: C.line });

    if (mode === 0) {
      // the point the printed graph gives; at θ = 22.5° the line must pass through it
      S("circle", { cx: TX(2), cy: VY(7.5), r: 5, fill: "#fff", stroke: C.ink, "stroke-width": 2 }, svg);
      T(svg, TX(2) + 9, VY(7.5) - 8, "printed graph", { "font-size": 10.5, fill: C.ink });
    }

    if (mode === 0) {
      const tEnd = Math.min(2.5, 10 / Math.max(aFree, 1e-6));
      S("line", { x1: TX(0), y1: VY(0), x2: TX(tEnd), y2: VY(aFree * tEnd), stroke: C.pink, "stroke-width": 2.6 }, svg);
      T(svg, TX(Math.min(2.2, tEnd * 0.55)), VY(aFree * Math.min(2.2, tEnd * 0.55)) - 8, "v = a t",
        { "font-size": 11.5, "font-weight": 700, fill: C.pink });
    } else {
      T(svg, (PX0 + PX1) / 2, (PY0 + PY1) / 2, mode === 1 ? "held still: a = 0" : "v–t is the free-slide case",
        { "text-anchor": "middle", "font-size": 11.5, fill: C.grey });
    }

    /* ---- the bench: ramp, block, and the mode's extra piece ---- */
    const BX = 372, BY = 268, L = 196;
    const ux = Math.cos(rad), uy = -Math.sin(rad);
    const tipX = BX + L * ux, tipY = BY + L * uy;
    S("line", { x1: BX, y1: BY, x2: tipX, y2: tipY, stroke: C.line, "stroke-width": 2.2 }, svg);
    S("line", { x1: BX, y1: BY, x2: tipX, y2: BY, stroke: C.line, "stroke-width": 2.2 }, svg);
    if (th > 1) {
      S("line", { x1: tipX, y1: tipY, x2: tipX, y2: BY, stroke: C.line, "stroke-width": 2.2 }, svg);
    }
    if (th > 2) {
      sector(svg, BX, BY, 34, -rad, 0, C.amberSoft, C.amber);
      // the label sits below the base line, so it never straddles the sloping surface
      T(svg, BX + 58, BY + 18, `θ = ${th}°`,
        { "text-anchor": "start", "font-size": 11.5, "font-weight": 700, fill: C.amber });
    }
    // block X: a square turned with the plane, its lower face on the hypotenuse, and its
    // size follows m_X (same material, so the side grows as the cube root of the mass).
    // The normal has to be perpendicular to the slope direction (cos, -sin): that is
    // (-sin, -cos), pointing up and left, away from the wedge. Taking (sin, -cos) instead
    // shears the square into a rhombus (and collapses it at theta = 45).
    const side = 18 * Math.cbrt(m / 5);
    const hX = side / 2;
    const dx = Math.cos(rad), dy = -Math.sin(rad), nx = -Math.sin(rad), ny = -Math.cos(rad);
    const px = BX + 0.55 * L * ux, py = BY + 0.55 * L * uy;
    const cx = px + nx * hX, cy = py + ny * hX;
    const corner = (a, b) => [cx + dx * a + nx * b, cy + dy * a + ny * b];
    const pts = [corner(-hX, -hX), corner(hX, -hX), corner(hX, hX), corner(-hX, hX)];
    S("polygon", {
      points: pts.map((q) => q.map((v) => v.toFixed(1)).join(",")).join(" "),
      fill: C.blueSoft, stroke: C.blue, "stroke-width": 2,
    }, svg);
    const fs = Math.max(7, Math.min(12, side * 0.55));
    T(svg, cx, cy + fs * 0.36, "X", { "text-anchor": "middle", "font-size": fs, "font-weight": 700, fill: C.blue });

    if (mode === 1) {
      // F is horizontal and pushes X: the head stops at the block's downhill face and the
      // letter sits at the tail, which is how the printed Fig aj draws it
      const len = 16 + Math.min(F, 90) * 0.42;
      const faceX = cx - dx * hX;
      S("line", { x1: faceX - len, y1: cy, x2: faceX, y2: cy, stroke: C.red, "stroke-width": 2.6,
        "marker-end": `url(#arrRed-${svg.dataset.uid})` }, svg);
      T(svg, faceX - len - 7, cy + 4, "F", { "text-anchor": "end", "font-size": 12, "font-weight": 700, fill: C.red });
    }
    if (mode === 2) {
      // the rope runs up the plane to a pulley just past the apex, then hangs clear
      // of the wedge to the 3 kg mass Y
      const topX = cx + nx * hX, topY = cy + ny * hX;
      const pulX = tipX + 16, pulY = Math.min(tipY, BY - 40) - 12;
      S("line", { x1: topX, y1: topY, x2: pulX, y2: pulY, stroke: C.line, "stroke-width": 1.6 }, svg);
      S("circle", { cx: pulX, cy: pulY, r: 6, fill: "#fff", stroke: C.line, "stroke-width": 2 }, svg);
      S("line", { x1: pulX, y1: pulY + 6, x2: pulX, y2: BY - 34, stroke: C.line, "stroke-width": 1.6 }, svg);
      S("rect", { x: pulX - 15, y: BY - 34, width: 30, height: 24, fill: C.amberSoft, stroke: C.amber, "stroke-width": 2 }, svg);
      T(svg, pulX, BY - 18, "Y", { "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: C.amber });
    }

    /* ---- the fixed readout row ---- */
    const dash = "—";
    const parts = [
      mode === 2 ? `a = ${K35(Math.abs(aPul))}` : mode === 0 ? `a = ${K35(aFree)}` : `a = ${K35(0)}`,
      mode === 1 ? `F = ${K35(F)}` : `F = ${dash}`,
      mode === 1 ? `N = ${K35(N)}` : `N = ${dash}`,
    ];
    // units written explicitly, so no value can pick up the wrong one
    const aTxt = mode === 2 ? Math.abs(aPul) : mode === 0 ? aFree : 0;
    const fTxt = mode === 1 ? `${K35(F)}\\ \\text{N}` : "—";
    const nTxt = mode === 1 ? `${K35(N)}\\ \\text{N}` : "—";
    const latex = `a = ${K35(aTxt)}\\ \\text{m s}^{-2},\\quad F = ${fTxt},\\quad N = ${nTxt}`;
    const thetaCrit = (Math.asin(Math.min(1, MY35 / m)) * 180) / Math.PI;
    const balanced = mode === 2 && Math.abs(aPul) < 0.02;
    let caption, ok = true, label = "live";
    if (mode === 0) {
      caption = `Free slide: a = g sin θ = ${K35(aFree)} m s⁻², the same for any mass.`;
    } else if (mode === 1) {
      caption = `Held still by a horizontal F: F = m g tan θ, N = m g cos θ + F sin θ.`;
    } else if (balanced) {
      ok = null; label = "";
      caption = `Balanced: sin θ = m_Y / m_X = ${K35(MY35 / m)}, so θ ≈ ${K35(thetaCrit)}° and a = 0.`;
    } else if (aPul < 0) {
      caption = `θ > ${K35(thetaCrit)}°: X slides down the plane, a = ${K35(Math.abs(aPul))} m s⁻² down the plane.`;
    } else {
      caption = `X moves up the plane with a = ${K35(aPul)} m s⁻².`;
    }
    if (balanced) {
      r.set(latex.replace(/a = /, "a = "), null,
        `${caption}`, {}, );
    } else {
      r.set(latex, ok, caption, { yes: "live readings" });
    }
    // the balance chip, only while the pulley is in play
    if (mode === 2) {
      const chipText = Math.abs(th - thetaCrit) <= 1.2 ? `balanced (θ = ${K35(thetaCrit)}°)` : "";
      if (chipText) {
        const chip = svg.querySelector("#q35chip");
        if (chip) chip.remove();
        const g = S("g", {}, svg);
        S("rect", { x: 356, y: 22, width: 236, height: 24, rx: 12, fill: C.greenSoft, stroke: C.green, "stroke-width": 1.5 }, g);
        T(svg, 474, 38, chipText, { "text-anchor": "middle", "font-size": 12.5, "font-weight": 700, fill: C.green });
      }
    }
  };

  [thS, mS].forEach((s) => s.on(render));
  render();
}

/* ---------------- Q18: four forces at P, summed live ----------------
 *
 * The printed working reads each force off the 1 cm = 1 N grid and adds the components:
 *     horizontal  -1 -2 +3 +4 = +4 N (to the right)
 *     vertical    +3 -2 -3 +1 = -1 N (downwards)
 * so |R| = sqrt(17) = 4.123 N at atan(1/4) = 14.04 deg below the +x axis. The widget draws
 * the four printed arrows on a 1 N grid at P, lets the reader switch any of them off, and
 * recomputes the resultant from the components on every change — nothing is hard coded.
 */
const Q18F = [
  { name: "F₁", dx: -1, dy: 3, color: C.blue },
  { name: "F₂", dx: -2, dy: -2, color: C.pink },
  { name: "F₃", dx: 3, dy: -3, color: C.green },
  { name: "F₄", dx: 4, dy: 1, color: C.amber },
];
const K18 = (v) => {
  if (!Number.isFinite(v)) return "—";
  const s = Math.abs(v) < 5e-3 ? "0.00" : v.toPrecision(3);
  return s.includes("e") ? String(Number(s)) : s;
};

function q18(root) {
  const CW = 620, CH = 350, PX = 300, PY = 176, U = 26; // U px per newton
  const svg = scene(CW, CH);
  const on = [true, true, true, true];
  const r = readout();
  let timer = 0, step = 0;
  const stop = () => { if (timer) { clearInterval(timer); timer = 0; } };

  const view = { v: 0 }; // 0 = forces + components, 1 = x components only, 2 = y components only
  const btns = H("div", { class: "g-btns" });
  const vBtns = H("div", { class: "g-btns" });
  const vchips = ["full", "x components only", "y components only"].map((t, i) => {
    const b = H("button", { type: "button", onclick: () => { view.v = i; render(); } }, [t]);
    vBtns.append(b);
    return b;
  });
  const chips = Q18F.map((f, i) => {
    const b = H("button", { type: "button", onclick: () => { on[i] = !on[i]; stop(); render(); } }, [`${f.name} ✓`]);
    btns.append(b);
    return b;
  });
  const playBtn = H("button", { type: "button", onclick: () => {
    stop();
    step = 0;
    on.fill(false);
    render();
    timer = setInterval(() => {
      if (step >= 4) { stop(); return; }
      on[step] = true;
      step += 1;
      render();
    }, 750);
  } }, ["▶ add one by one"]);

  root.append(
    question("Four forces act at P on a 1 cm = 1 N grid. Find the horizontal and vertical components of the resultant.", [
      "Read each force off the grid: $F_1{=}(-1,3)$, $F_2{=}(-2,-2)$, $F_3{=}(3,-3)$, $F_4{=}(4,1)$",
      "Components add: $\\Sigma F_x$, $\\Sigma F_y$",
    ]),
    svg,
    H("div", {}, [btns, playBtn, vBtns]),
    r.el,
  );

  const put = (x, y, text, color, weight = 700, size = 12.5) => {
    const half = (text.length * size * 0.56) / 2 + 4;
    T(svg, Math.min(CW - half, Math.max(half, x)), Math.min(CH - 8, Math.max(size, y)), text,
      { "text-anchor": "middle", "font-size": size, "font-weight": weight, fill: color });
  };

  const render = () => {
    clear(svg);
    chips.forEach((b, i) => {
      b.textContent = `${Q18F[i].name} ${on[i] ? "✓" : "✗"}`;
      b.style.opacity = on[i] ? "1" : "0.45";
    });

    // 1 N grid, axes a shade darker
    for (let gx = -9; gx <= 11; gx++) {
      const x = PX + gx * U;
      if (x < 8 || x > CW - 8) continue;
      S("line", { x1: x, y1: 12, x2: x, y2: CH - 16, stroke: gx === 0 ? C.line : "#e6e0d4", "stroke-width": gx === 0 ? 1.4 : 1 }, svg);
    }
    for (let gy = -6; gy <= 6; gy++) {
      const y = PY + gy * U;
      if (y < 12 || y > CH - 16) continue;
      S("line", { x1: 8, y1: y, x2: CW - 8, y2: y, stroke: gy === 0 ? C.line : "#e6e0d4", "stroke-width": gy === 0 ? 1.4 : 1 }, svg);
    }
    T(svg, 14, PY - 8, "+y (up)", { "font-size": 11, fill: C.grey });
    T(svg, CW - 14, PY + 18, "+x (right)", { "text-anchor": "end", "font-size": 11, fill: C.grey });

    // the four forces, their dashed decompositions, and the component arrows
    vchips.forEach((b, i) => {
      b.style.opacity = view.v === i ? "1" : "0.5";
      b.style.fontWeight = view.v === i ? "700" : "400";
    });
    Q18F.forEach((f, i) => {
      if (!on[i]) return;
      const ix = PX + f.dx * U, iy = PY - f.dy * U;
      if (view.v === 0) {
        S("line", { x1: PX, y1: PY, x2: ix, y2: iy, stroke: f.color, "stroke-width": 3, "stroke-linecap": "round",
          "marker-end": `url(#arr-${svg.dataset.uid})` }, svg);
        // dashed guides out to both axes, in the force's own colour
        if (f.dx !== 0) {
          S("line", { x1: ix, y1: iy, x2: ix, y2: PY, stroke: f.color, "stroke-width": 1.3,
            "stroke-dasharray": "4 3", opacity: 0.75 }, svg);
        }
        if (f.dy !== 0) {
          S("line", { x1: ix, y1: iy, x2: PX, y2: iy, stroke: f.color, "stroke-width": 1.3,
            "stroke-dasharray": "4 3", opacity: 0.75 }, svg);
        }
        const len = Math.hypot(f.dx, f.dy) * U || 1;
        put(ix + (12 * (ix - PX)) / len, iy + (12 * (iy - PY)) / len - 2, f.name, f.color, 700, 12);
      }
      if (f.dx !== 0 && view.v !== 2) {
        S("line", { x1: PX, y1: PY, x2: ix, y2: PY, stroke: f.color, "stroke-width": 2.2,
          "stroke-dasharray": "6 4", "stroke-linecap": "butt",
          "marker-end": `url(#arr-${svg.dataset.uid})` }, svg);
        T(svg, ix, PY + 18 + (f.dx > 0 ? 20 : 0) + (i % 2) * 13, `${f.name}x`,
          { "text-anchor": "middle", "font-size": 10.5, "font-weight": 700, fill: f.color });
      }
      if (f.dy !== 0 && view.v !== 1) {
        S("line", { x1: PX, y1: PY, x2: PX, y2: iy, stroke: f.color, "stroke-width": 2.2,
          "stroke-dasharray": "6 4", "stroke-linecap": "butt",
          "marker-end": `url(#arr-${svg.dataset.uid})` }, svg);
        T(svg, PX - 14 - (i % 2) * 18, iy + (f.dy > 0 ? -6 : 12), `${f.name}y`,
          { "text-anchor": "end", "font-size": 10.5, "font-weight": 700, fill: f.color });
      }
    });

    // the resultant, from the same point
    const sx = Q18F.reduce((a, f, i) => a + (on[i] ? f.dx : 0), 0);
    const sy = Q18F.reduce((a, f, i) => a + (on[i] ? f.dy : 0), 0);
    const mag = Math.hypot(sx, sy);
    if (mag > 1e-9) {
      const x2 = PX + sx * U, y2 = PY - sy * U;
      S("line", { x1: PX, y1: PY, x2, y2, stroke: C.ink, "stroke-width": 4, "stroke-linecap": "round",
        "marker-end": `url(#arrInk-${svg.dataset.uid})` }, svg);
      put(x2 + 26, y2 - 6, `R = ${K18(mag)} N`, C.ink, 700, 12.5);
    }
    S("circle", { cx: PX, cy: PY, r: 4.5, fill: C.ink }, svg);
    T(svg, PX - 16, PY + 30, "P", { "text-anchor": "end", "font-size": 12, "font-weight": 700, fill: C.ink });

    // the algebra, exactly as the printed working writes it
    const sign = (v, first) => (first ? (v < 0 ? `-${Math.abs(v)}` : `${v}`) : v < 0 ? `-${Math.abs(v)}` : `+${v}`);
    const xTerms = Q18F.map((f, i) => (on[i] ? sign(f.dx, false) : "")).filter(Boolean).join("");
    const yTerms = Q18F.map((f, i) => (on[i] ? sign(f.dy, false) : "")).filter(Boolean).join("");
    const firstX = xTerms.startsWith("+") ? xTerms.slice(1) : xTerms;
    const firstY = yTerms.startsWith("+") ? yTerms.slice(1) : yTerms;
    const dirX = sx > 0 ? "to the right" : sx < 0 ? "to the left" : "";
    const dirY = sy > 0 ? "upwards" : sy < 0 ? "downwards" : "";
    const latex = sfx(`\\Sigma F_x = ${firstX || "0"} = ${sign(sx, true)}\\ \\text{N}`);
    const ang = mag > 1e-9 ? Math.abs((Math.atan2(sy, sx) * 180) / Math.PI) : 0;
    const cap = `Σ F_y = ${firstY || "0"} = ${sign(sy, true)} N ${dirY}  ·  R = ${K18(mag)} N at ${K18(ang)}° `
      + (sy < 0 ? "below" : "above") + " the +x axis";
    if (on.every(Boolean)) {
      r.set(latex, true, `${cap}  ·  horizontal ${sign(sx, true)} N ${dirX}`, { yes: "matches the printed (D)" });
    } else {
      r.set(latex, null, cap);
    }
  };

  function sfx(s) { return s; }
  render();
}

const REGISTRY = {
  q9,
  q18,
  q35,
};

export function hasGraphic(id) {
  return Boolean(REGISTRY[id]);
}

export function mountGraphic(id, root) {
  REGISTRY[id]?.(root);
}
