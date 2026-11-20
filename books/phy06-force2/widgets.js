/**
 * Interactive graphics for this book, opened from a question's graphic button.
 * Build them from the shared kit; house rules are in docs/03-authoring-style.md.
 * books/jm26b/widgets.js has many worked examples (sliders, number lines,
 * bar models, MC checkers).
 */

import { C, S, T, scene, clear, slider, readout, question, buttonRow, sector } from "../../engine/widgets/kit.js";

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

const REGISTRY = {
  q9,
};

export function hasGraphic(id) {
  return Boolean(REGISTRY[id]);
}

export function mountGraphic(id, root) {
  REGISTRY[id]?.(root);
}
