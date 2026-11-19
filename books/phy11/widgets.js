/**
 * Interactive graphics for this book, opened from a question's graphic button.
 * Built from the shared kit; house rules are docs/03-authoring-style.md.
 */

import { C, S, T, H, scene, clear, slider, readout, question, buttonRow, fmt, niceStep } from "../../engine/widgets/kit.js";

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
  const X0 = 66, Y0 = 252, PW = 500, PH = 186;

  const nice = (v) => {
    if (!(v > 0)) return 1;
    const s = niceStep(v, 6);
    return Math.ceil(v / s - 1e-9) * s;
  };
  // keep as many decimals as the tick step needs, else a 0.5 m step prints "1, 1, 2"
  const tick = (v, step) => v.toFixed(String(step).split(".")[1]?.length || 0);

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
      T(svg, px(x), Y0 + 17, tick(x, xs), { fill: C.grey, "font-size": 12, "text-anchor": "middle" });
    }
    for (let y = ys; y <= YMAX + 1e-9; y += ys) {
      S("line", { x1: px(0), y1: py(y), x2: px(XMAX), y2: py(y), stroke: C.soft, "stroke-width": 1 }, svg);
      T(svg, X0 - 8, py(y) + 4, tick(y, ys), { fill: C.grey, "font-size": 12, "text-anchor": "end" });
    }

    // axes
    S("line", { x1: px(0), y1: py(0), x2: px(XMAX) + 14, y2: py(0), stroke: C.line, "stroke-width": 2 }, svg);
    S("line", { x1: px(0), y1: py(0), x2: px(0), y2: py(YMAX) - 10, stroke: C.line, "stroke-width": 2 }, svg);
    // axis names off the ends of the axes, clear of the last tick labels
    T(svg, px(XMAX) + 16, Y0 + 4, "x / m", { fill: C.line, "font-size": 12 });
    T(svg, X0 + 4, py(YMAX) - 12, "y / m", { fill: C.line, "font-size": 12 });

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

    // launch point and landing point; R is drawn as a measured span under the axis,
    // which keeps it off the tick labels
    S("circle", { cx: px(0), cy: py(0), r: 5, fill: C.ink }, svg);
    S("circle", { cx: px(R), cy: py(0), r: 5, fill: C.red }, svg);
    const yd = Y0 + 44;
    S("line", { x1: px(0), y1: yd, x2: px(R), y2: yd, stroke: C.red, "stroke-width": 1.5 }, svg);
    for (const xx of [px(0), px(R)]) {
      S("line", { x1: xx, y1: yd - 5, x2: xx, y2: yd + 5, stroke: C.red, "stroke-width": 1.5 }, svg);
    }
    T(svg, (px(0) + px(R)) / 2, yd - 7, `R = ${fmt(R, 1)} m`, {
      fill: C.red, "font-size": 13, "font-weight": 700, "text-anchor": "middle",
    });

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

/* ---------- Q6: dropping and projecting, side by side ---------- */

function q6(root) {
  const W = 660, HT = 360, G = 9.81, HM = 5;           // 5 m drop, same for both
  const TF = Math.sqrt((2 * HM) / G);                  // time to fall 5 m
  const TMAX = Math.ceil(TF * 100) / 100;              // a slider max the step can reach
  const SC = 30;                                       // px per metre, both axes
  const GROUND = 320, Y0 = GROUND - HM * SC;           // release height in px
  const XP = 150, XQ = 200;                            // XQ leaves room for u = 12 m s⁻¹

  const svg = scene(W, HT);
  const su = slider({ label: "Q's horizontal speed u (m s⁻¹)", min: 1, max: 12, step: 1, value: 8 });
  const st = slider({ label: "Time t (s)", min: 0, max: TMAX, step: 0.01, value: Math.round(TMAX * 60) / 100, fmt: (v) => fmt(v, 2) });
  const r = readout();
  const rows = H("div", { style: "font:13px/1.7 ui-sans-serif,system-ui;margin:6px 0 10px;color:#222" }, []);
  const row = (n) => H("div", { style: "display:flex;gap:8px;align-items:center" }, [
    H("span", { style: "width:16px;font-weight:700", id: `q6s${n}` }, ["·"]),
    H("span", {}, [""]),
  ]);
  const r1 = row(1), r2 = row(2), r3 = row(3);
  rows.append(r1, r2, r3);
  const mark = (el, ok, text) => {
    el.firstChild.textContent = ok ? "✓" : "✗";
    el.firstChild.style.color = ok ? "#1d8a4a" : "#c0392b";
    el.lastChild.textContent = text;
  };

  root.append(
    question(
      "Ball $P$ is released from rest while ball $Q$ is projected horizontally from the same height at the same moment. The mass of $P$ is twice the mass of $Q$. Which statements are correct?",
      ["$h = 5$ m, $g = 9.81$ m s$^{-2}$", "both fall the same $y = \\tfrac{1}{2}gt^2$"],
    ),
    svg, su.el, st.el, r.el, rows,
    buttonRow([
      ["u = 1 (a slow throw)", () => su.set(1)],
      ["u = 8 m s⁻¹", () => su.set(8)],
      ["t = 0", () => st.set(0)],
      ["t = time to fall", () => st.set(TF)],
    ]),
  );

  const draw = () => {
    const u = su.get(), t = st.get();
    const tt = Math.min(t, TF);                // the slider may sit a hundredth past the ground
    const y = 0.5 * G * tt * tt;               // fall in metres, the same for P and Q
    const vy = G * tt;
    const xq = XQ + u * t * SC;
    const pP = { x: XP, y: Y0 + y * SC };
    const pQ = { x: Math.min(xq, W - 90), y: Y0 + y * SC };

    clear(svg);
    // ground and release height
    S("line", { x1: 60, y1: GROUND, x2: W - 20, y2: GROUND, stroke: C.line, "stroke-width": 3 }, svg);
    S("line", { x1: 60, y1: Y0, x2: W - 20, y2: Y0, stroke: C.soft, "stroke-width": 1, "stroke-dasharray": "5 5" }, svg);
    T(svg, W - 150, Y0 - 8, `same height: ${HM} m`, { fill: C.grey, "font-size": 12 });
    T(svg, 64, GROUND + 18, "ground", { fill: C.grey, "font-size": 12 });

    // the height each ball has fallen, drawn under both
    for (const p of [pP, pQ]) {
      S("line", { x1: p.x, y1: p.y, x2: p.x, y2: GROUND, stroke: C.soft, "stroke-width": 1, "stroke-dasharray": "3 4" }, svg);
    }
    // the line joining them: always level, so they hit the ground together
    S("line", { x1: pP.x, y1: pP.y, x2: pQ.x, y2: pQ.y, stroke: C.green, "stroke-width": 2, "stroke-dasharray": "6 4" }, svg);
    T(svg, 70, Y0 - 26, "same height at every instant", {
      fill: C.green, "font-size": 12, "font-weight": 700,
    });

    // the balls
    S("circle", { cx: pP.x, cy: pP.y, r: 9, fill: C.amberSoft, stroke: C.amber, "stroke-width": 2 }, svg);
    T(svg, pP.x, pP.y + 4, "P", { fill: C.ink, "font-size": 12, "font-weight": 700, "text-anchor": "middle" });
    S("circle", { cx: pQ.x, cy: pQ.y, r: 9, fill: C.blueSoft, stroke: C.blue, "stroke-width": 2 }, svg);
    T(svg, pQ.x, pQ.y + 4, "Q", { fill: C.ink, "font-size": 12, "font-weight": 700, "text-anchor": "middle" });
    if (u > 0) {
      const x1 = pQ.x + 12, x2 = Math.min(x1 + Math.min(u * 5, 70), W - 8);
      S("line", { x1, y1: pQ.y, x2, y2: pQ.y, stroke: C.blue, "stroke-width": 2 }, svg);
      S("polygon", { points: `${x2},${pQ.y} ${x2 - 8},${pQ.y - 4} ${x2 - 8},${pQ.y + 4}`, fill: C.blue }, svg);
      T(svg, x1, pQ.y - 10, `u = ${u} m s⁻¹`, { fill: C.blue, "font-size": 12 });
    }
    // the fall so far, just under P and never on the floor: at landing the fall line
    // has no length left, and beside the ball it used to sit on the "ground" label
    T(svg, pP.x - 6, Math.min(pP.y + 22, GROUND - 14), `y = ${fmt(y, 2)} m`, {
      fill: C.ink, "font-size": 12, "text-anchor": "end",
    });

    const landed = t >= TF - 0.001;
    r.set(
      `t = ${fmt(tt, 2)}\\ \\text{s}:\\quad y = \\tfrac{1}{2}(9.81)(${fmt(tt, 2)})^2 = ${fmt(y, 2)}\\ \\text{m}` +
        `\\quad v_y = 9.81(${fmt(tt, 2)}) = ${fmt(vy, 2)}\\ \\text{m s}^{-1}`,
      landed ? true : null,
      landed
        ? `Both land at t = ${fmt(TF, 2)} s. Q is faster (v = ${fmt(Math.hypot(u, vy), 2)} m s⁻¹ against P's ${fmt(vy, 2)}), but the same v_y.`
        : "Drag the time: both balls keep the same height at every instant.",
    );

    mark(r1, true, `P and Q reach the ground at the same time (t = ${fmt(TF, 2)} s) — the vertical motion is the same.`);
    // (2) is false for the question as printed, whatever the slider says: Q always
    // carries the horizontal u as well. u = 0 is a special case, not the statement.
    mark(r2, false, "P and Q have the same speed on reaching the ground — false: Q also keeps the horizontal u, so it lands faster than P.");
    mark(r3, true, "P and Q have the same acceleration: g, whatever their masses.");
  };

  su.on(draw);
  st.on(draw);
  draw();
}

const REGISTRY = { q6, q14 };

export function hasGraphic(id) {
  return Boolean(REGISTRY[id]);
}

export function mountGraphic(id, root) {
  REGISTRY[id]?.(root);
}
