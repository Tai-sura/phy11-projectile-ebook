/**
 * Interactive graphics for this book, opened from a question's graphic button.
 * Built from the shared kit; house rules are docs/03-authoring-style.md.
 */

import { C, S, T, scene, clear, slider, readout, question, buttonRow, fmt, niceStep } from "../../engine/widgets/kit.js";

const G = 9.81;

/* ---------- Q14: how the range depends on the speed and the angle ---------- */

function q14(root) {
  const W = 620, HT = 320;
  const svg = scene(W, HT);

  const su = slider({ label: "Speed u (m s⁻¹)", min: 10, max: 40, step: 1, value: 20 });
  const sa = slider({ label: "Angle θ (°)", min: 5, max: 85, step: 1, value: 30 });
  const r = readout();

  root.append(
    question(
      "A ball is projected at a speed $u$ making an angle $\\theta$ with the horizontal. How far away does it land?",
      ["$R = \\dfrac{u^2\\sin 2\\theta}{g}$", "$g = 9.81$ m s$^{-2}$"],
    ),
    svg, su.el, sa.el, r.el,
    buttonRow([
      ["θ = 45° (longest)", () => sa.set(45)],
      ["θ = 30°", () => { su.set(20); sa.set(30); }],
      ["θ = 60°", () => { su.set(20); sa.set(60); }],
    ]),
  );

  // plot frame, redrawn on every change
  const X0 = 66, Y0 = 252, PW = 522, PH = 186;

  const nice = (v) => {
    if (!(v > 0)) return 1;
    const s = niceStep(v, 6);
    return Math.ceil(v / s - 1e-9) * s;
  };
  const num = (v) => (Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : v.toFixed(0));

  const draw = () => {
    const u = su.get(), deg = sa.get();
    const th = (deg * Math.PI) / 180;
    const ux = u * Math.cos(th), uy = u * Math.sin(th);
    const flight = (2 * uy) / G;
    const R = (u * u * Math.sin(2 * th)) / G;
    const Hm = (uy * uy) / (2 * G);

    // axes follow the shot, so the curve always fills the frame
    const XMAX = nice(R * 1.08);
    const YMAX = nice(Hm * 1.25);
    const px = (x) => X0 + (x / XMAX) * PW;
    const py = (y) => Y0 - (y / YMAX) * PH;

    clear(svg);

    const xs = niceStep(XMAX, 6);
    const ys = niceStep(YMAX, 5);
    for (let x = xs; x <= XMAX + 1e-9; x += xs) {
      S("line", { x1: px(x), y1: py(0), x2: px(x), y2: py(YMAX), stroke: C.soft, "stroke-width": 1 }, svg);
      T(svg, px(x), Y0 + 17, num(x), { fill: C.grey, "font-size": 12, "text-anchor": "middle" });
    }
    for (let y = ys; y <= YMAX + 1e-9; y += ys) {
      S("line", { x1: px(0), y1: py(y), x2: px(XMAX), y2: py(y), stroke: C.soft, "stroke-width": 1 }, svg);
      T(svg, X0 - 8, py(y) + 4, num(y), { fill: C.grey, "font-size": 12, "text-anchor": "end" });
    }

    // axes
    S("line", { x1: px(0), y1: py(0), x2: px(XMAX) + 14, y2: py(0), stroke: C.line, "stroke-width": 2 }, svg);
    S("line", { x1: px(0), y1: py(0), x2: px(0), y2: py(YMAX) - 10, stroke: C.line, "stroke-width": 2 }, svg);
    T(svg, px(XMAX) + 14, Y0 + 17, "x / m", { fill: C.line, "font-size": 12, "text-anchor": "end" });
    T(svg, X0 - 8, py(YMAX) - 6, "y / m", { fill: C.line, "font-size": 12, "text-anchor": "end" });

    // the trajectory
    const pts = [];
    for (let i = 0; i <= 100; i++) {
      const tt = (flight * i) / 100;
      pts.push(`${px(ux * tt).toFixed(1)},${py(uy * tt - 0.5 * G * tt * tt).toFixed(1)}`);
    }
    S("polyline", { points: pts.join(" "), fill: "none", stroke: C.blue, "stroke-width": 3, "stroke-linejoin": "round" }, svg);

    // apex
    const xa = ux * (flight / 2);
    S("line", { x1: px(xa), y1: py(Hm), x2: px(xa), y2: py(0), stroke: C.amber, "stroke-width": 1.5, "stroke-dasharray": "4 4" }, svg);
    S("circle", { cx: px(xa), cy: py(Hm), r: 4, fill: C.amber }, svg);
    T(svg, px(xa) + 7, py(Hm) - 7, `H = ${fmt(Hm, 2)} m`, { fill: C.amber, "font-size": 12, "font-weight": 700 });

    // launch point and landing point
    S("circle", { cx: px(0), cy: py(0), r: 5, fill: C.ink }, svg);
    S("circle", { cx: px(R), cy: py(0), r: 5, fill: C.red }, svg);
    T(svg, px(R), Y0 + 36, `R = ${fmt(R, 1)} m`, { fill: C.red, "font-size": 14, "font-weight": 700, "text-anchor": "middle" });

    // the shot, printed above the frame so it never sits on the curve
    T(svg, X0, 34, `u = ${u} m s⁻¹ at θ = ${deg}°`, { fill: C.ink, "font-size": 13, "font-weight": 700 });

    r.set(
      `R = \\frac{u^2\\sin 2\\theta}{g} = \\frac{${u}^2\\sin ${2 * deg}^\\circ}{9.81} = ${fmt(R, 1)}\\ \\text{m}`,
      null,
      deg === 45
        ? "45° gives the longest range for this speed. Two angles that add to 90° give the same range."
        : "Try 45°: it is the angle of maximum range. Compare 30° with 60° — they land in the same place.",
    );
  };

  su.on(draw);
  sa.on(draw);
  draw();
}

const REGISTRY = { q14 };

export function hasGraphic(id) {
  return Boolean(REGISTRY[id]);
}

export function mountGraphic(id, root) {
  REGISTRY[id]?.(root);
}
