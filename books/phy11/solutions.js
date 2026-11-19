/**
 * Worked solutions for PHY CH11 Projectile Motion (S4).
 * Method follows the teacher's red-boxed working in the ANS key
 * (reference/ans_pages/). House style: docs/03-authoring-style.md.
 */

import { m, t, h, note, lk } from "../../engine/authoring.js";

export const SOLUTIONS = [
  // ---------------------------------------------------------------- q1
  {
    id: "q1",
    letter: "C",
    boxes: [{
      steps: [
        m("t = \\frac{2}{5} = 0.4\\ \\text{s}", "horizontal speed is constant"),
        t("The height of the table is"),
        m("s = ut + \\frac{1}{2}at^2"),
        m("s_y = \\frac{1}{2}(-9.8)(0.4)^2", "take upward as +ve"),
        m("= -0.784\\ \\text{m}"),
        m("\\therefore \\text{The height of the table is } \\underline{0.784\\ \\text{m}} \\approx \\underline{0.78\\ \\text{m}}"),
        m("\\therefore \\text{The answer is C.}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q2
  {
    id: "q2",
    letter: "C",
    links: [{ key: "h", color: "blue", note: "the building is 50 m tall", q: ["50 m tall"] }],
    boxes: [{
      steps: [
        t("Consider vertical motion,"),
        lk("h", m("50 = \\frac{1}{2}gt^2 \\Rightarrow t = \\sqrt{\\frac{100}{g}}\\ \\text{s}")),
        t("Consider horizontal motion,"),
        m("d = vt = 10\\times\\sqrt{\\frac{100}{g}}"),
        m("\\therefore d = \\underline{31.9\\ \\text{m}}"),
        m("\\therefore \\text{The answer is C.}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q3
  {
    id: "q3",
    letter: "B",
    boxes: [{
      steps: [
        m("v_x = u_x = 12\\ \\text{m s}^{-1}"),
        m("v_y^2 = v^2 - v_x^2"),
        m("= 16^2 - 12^2"),
        m("v_y = \\sqrt{112}\\ \\text{m s}^{-1}"),
        t("In the vertical direction, by $v = u + at$,"),
        m("v_y = 0 + gt"),
        m("t = \\frac{v_y}{g} = \\frac{\\sqrt{112}}{9.81}"),
        m("\\therefore t = \\underline{1.08\\ \\text{s}}"),
        m("\\therefore \\text{The answer is B.}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q4
  {
    id: "q4",
    letter: "B",
    links: [
      { key: "x0", color: "blue", note: "hits the wall 1.0 m away", q: ["At what speed is it projected"] },
      { key: "y0", color: "pink", note: "0.8 m below the projection", q: ["vertically below its point of projection"] },
    ],
    boxes: [{
      steps: [
        t("Vertical component:"),
        m("y = \\frac{1}{2}gt^2"),
        lk("y0", m("\\therefore (0.8) = \\frac{1}{2}(9.81)t^2")),
        m("\\therefore t = 0.404\\ \\text{s}"),
        t("Horizontal component:"),
        m("x = ut"),
        lk("x0", m("\\therefore (1.0) = u(0.404)")),
        m("\\therefore u = \\underline{2.5\\ \\text{m s}^{-1}}"),
        m("\\therefore \\text{The answer is B.}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q5
  {
    id: "q5",
    links: [{ key: "drop", color: "amber", note: "1 m below the nozzle", q: ["1 m below the nozzle"] }],
    boxes: [{
      steps: [
        m("s = ut + \\frac{1}{2}at^2"),
        lk("drop", m("s_y = \\frac{1}{2}(9.81)(t^2) = 1")),
        m("t = 0.45\\ \\text{s}"),
        t("Velocity (magnitude and direction) of the water when it enters the pond:"),
        m("v = u + at \\Rightarrow v_y = 0 + (9.81)(0.45) = 4.41\\ \\text{m s}^{-1}"),
        m("v^2 = v_x^2 + v_y^2 = 3^2 + (4.41)^2"),
        m("v = 5.33\\ \\text{m s}^{-1}"),
        m("\\tan\\theta = \\frac{v_y}{v_x} = \\frac{4.41}{3}"),
        m("\\theta = \\underline{55.8^\\circ} \\text{ below the horizontal}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q6
  {
    id: "q6",
    letter: "C",
    boxes: [{
      steps: [
        t("$Q$ has the same vertical motion as $P$. Therefore, they reach the ground at the same time."),
        m("\\therefore \\text{(1) is correct.}"),
        t("Although the vertical speeds of $P$ and $Q$ are the same, their horizontal speeds are not the same. Therefore their speeds on reaching the ground are not the same."),
        m("\\therefore \\text{(2) is incorrect.}"),
        t("$P$ and $Q$ are uniformly accelerated under gravity and the acceleration due to gravity is the same for all objects regardless of their masses."),
        m("\\therefore \\text{(3) is correct.}"),
        m("\\therefore \\text{The answer is C.}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q7
  {
    id: "q7",
    boxes: [{
      steps: [
        h("(a)"),
        t("In the vertical direction,"),
        m("\\text{By } s_y = \\frac{1}{2}gt^2,"),
        m("t = \\sqrt{\\frac{2s_y}{g}}"),
        m("= \\sqrt{\\frac{2\\times 0.1}{9.81}}"),
        m("= 0.143\\ \\text{s}"),
        m("\\therefore \\text{The time of flight of the dart is } \\underline{0.143\\ \\text{s}}."),
        h("(b)"),
        t("In the horizontal direction,"),
        m("\\text{initial velocity of the dart} = \\frac{s_x}{t}"),
        m("= \\frac{2}{0.143}"),
        m("= \\underline{14.0\\ \\text{m s}^{-1}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q8
  {
    id: "q8",
    links: [{ key: "t08", color: "blue", note: "$t = 0.8$ s", q: ["0.8 s after"] }],
    boxes: [{
      steps: [
        m("u_x = 20\\cos 45^\\circ = 14.14\\ \\text{m s}^{-1}"),
        m("u_y = 20\\sin 45^\\circ = 14.14\\ \\text{m s}^{-1}"),
        lk("t08", m("t = 0.8\\ \\text{s}")),
        t("Horizontal displacement:"),
        m("s_x = u_x t = 14.14(0.8)"),
        m("= \\underline{11.3\\ \\text{m}}"),
        t("Vertical displacement:"),
        m("s = ut + \\frac{1}{2}at^2"),
        m("s_y = 14.14(0.8) - \\frac{1}{2}(9.81)(0.8)^2"),
        m("= \\underline{8.17\\ \\text{m}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q9
  {
    id: "q9",
    letter: "B",
    boxes: [{
      steps: [
        m("u_x = v_x = 15\\cos 30^\\circ"),
        m("u_y = 15\\sin 30^\\circ, \\quad s_y = -20, \\quad a_y = -9.81"),
        m("s = ut + \\frac{1}{2}at^2"),
        m("-20 = 15\\sin 30^\\circ(t) - \\frac{1}{2}(9.81)t^2"),
        m("t = -1.29\\ \\text{s (reject) or } 2.92\\ \\text{s}"),
        m("\\therefore t = \\underline{2.92\\ \\text{s}}"),
        m("\\therefore \\text{The answer is B.}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q10
  {
    id: "q10",
    links: [{ key: "target", color: "amber", note: "the throw must reach 18 m", q: ["18 m away from him"] }],
    boxes: [{
      steps: [
        h("(a)"),
        m("\\text{By } s_y = u_y t - \\frac{1}{2}gt^2"),
        m("-1.5 = 13\\sin 30^\\circ \\times t - \\frac{1}{2}\\times 9.81\\times t^2"),
        m("4.905t^2 - 6.5t - 1.5 = 0"),
        m("t = 1.53\\ \\text{s or } -0.200\\ \\text{s (rejected)}"),
        m("\\therefore \\text{The time of flight of the shot is } \\underline{1.53\\ \\text{s}}."),
        h("(b)"),
        t("In the horizontal direction,"),
        m("s_x = u_x t"),
        m("= 13\\cos 30^\\circ \\times 1.53"),
        lk("target", m("= 17.2\\ \\text{m} < 18\\ \\text{m}")),
        m("\\therefore \\text{Charles will not win with this throw.}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q11
  {
    id: "q11",
    links: [{ key: "hoop", color: "blue", note: "the hoop is 3.05 m high", q: ["3.05 m high"] }],
    boxes: [{
      steps: [
        h("(a)"),
        m("\\text{By } s_y = u_y t - \\frac{1}{2}gt^2,"),
        lk("hoop", m("3.05 - 1.9 = 6\\cos 20^\\circ t - \\frac{1}{2}(9.81)t^2")),
        m("1.15 = 5.638t - 4.905t^2"),
        m("4.905t^2 - 5.638t + 1.15 = 0"),
        m("t = 0.884\\ \\text{s or } 0.265\\ \\text{s (rejected)}"),
        m("\\therefore \\text{The time needed for the ball to reach the hoop is } \\underline{0.884\\ \\text{s}}."),
        h("(b)"),
        t("The horizontal distance"),
        m("= u_x t"),
        m("= 6\\sin 20^\\circ \\times 0.884"),
        m("= \\underline{1.81\\ \\text{m}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q12
  {
    id: "q12",
    links: [{ key: "h14", color: "pink", note: "released 1.4 m above the ground", q: ["height of 1.4 m"] }],
    boxes: [{
      steps: [
        t("Let $v$ be the projecting velocity of the ball and $t$ be the time of flight."),
        h("(a)"),
        t("Consider the horizontal displacement,"),
        m("vt\\cos 30^\\circ = 18"),
        m("v = \\frac{18}{t\\cos 30^\\circ} \\quad \\cdots (1)"),
        t("Consider the vertical displacement,"),
        lk("h14", m("-1.4 = vt\\sin 30^\\circ - \\frac{1}{2}(9.81)t^2 \\quad \\cdots (2)")),
        t("Substitute (1) into (2),"),
        m("-1.4 = \\left(\\frac{18}{t\\cos 30^\\circ}\\right)t\\sin 30^\\circ - \\frac{1}{2}(9.81)t^2"),
        m("-1.4 = 18\\tan 30^\\circ - 4.905t^2"),
        m("4.905t^2 = 18\\tan 30^\\circ + 1.4"),
        m("t = 1.55\\ \\text{s}"),
        m("\\therefore \\text{The time of flight is } \\underline{1.55\\ \\text{s}}."),
        h("(b)"),
        t("The projecting velocity is"),
        m("v = \\frac{18}{1.55\\times\\cos 30^\\circ}"),
        m("= 13.4\\ \\text{m s}^{-1}"),
        m("\\therefore \\text{The projecting velocity is } \\underline{13.4\\ \\text{m s}^{-1}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q13
  {
    id: "q13",
    links: [{ key: "d210", color: "blue", note: "lands 21.0 m away", q: ["21.0 m away"] }],
    boxes: [{
      steps: [
        t("Take the downward direction as positive."),
        h("(a)"),
        t("In the vertical direction:"),
        m("\\text{By } s_y = u_y t + \\frac{1}{2}gt^2,"),
        m("2.5 = 0 + \\frac{1}{2}(9.81)t^2"),
        m("t = \\underline{0.714\\ \\text{s}}"),
        h("(b)"),
        t("In the horizontal direction:"),
        m("v = \\frac{s_x}{t}"),
        lk("d210", m("= \\frac{21.0}{0.714}")),
        m("= \\underline{29.4\\ \\text{m s}^{-1}}"),
        h("(c)"),
        t("In the vertical direction:"),
        m("\\text{By } v_y = u_y + gt,"),
        m("v_y = 0 + 9.81\\times 0.714"),
        m("= 7.00\\ \\text{m s}^{-1}"),
        m("\\therefore \\text{The vertical component is } \\underline{7.00\\ \\text{m s}^{-1}}."),
        h("(d)"),
        m("\\text{The horizontal component is } \\underline{29.4\\ \\text{m s}^{-1}}.", "u_x = v_x = constant"),
        h("(e)"),
        m("v = \\sqrt{v_x^2 + v_y^2}"),
        m("= \\sqrt{7^2 + 29.4^2} = 30.2\\ \\text{m s}^{-1}"),
        m("\\tan\\theta = \\frac{v_y}{v_x} = \\frac{7}{29.4}"),
        m("\\theta = 13.4^\\circ"),
        m("\\therefore \\text{The velocity of the ball is } \\underline{30.2\\ \\text{m s}^{-1}} \\text{ at } \\underline{13.4^\\circ} \\text{ below the horizontal.}"),
        h("(f)"),
        t("The velocity will make a larger angle with the horizontal."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q14
  {
    id: "q14",
    letter: "B",
    boxes: [{
      steps: [
        m("R = \\frac{u^2\\sin 2\\theta}{g}"),
        m("= \\frac{20^2\\sin(2\\times 30^\\circ)}{g}"),
        m("= \\frac{400\\sin 60^\\circ}{g}"),
        m("\\therefore \\text{The answer is B.}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q15
  {
    id: "q15",
    letter: "B",
    links: [{ key: "r5", color: "amber", note: "the range is 5 m", q: ["5 m away from the pool side"] }],
    boxes: [{
      steps: [
        m("\\text{Range} = \\frac{u^2\\sin 2\\theta}{g}"),
        lk("r5", m("5 = \\frac{v^2\\sin 2(30^\\circ)}{9.81}")),
        m("v = \\sqrt{\\frac{5\\times 9.81}{\\sin 60^\\circ}}"),
        m("v = \\underline{7.53\\ \\text{m s}^{-1}}"),
        m("\\therefore \\text{The answer is B.}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q16
  {
    id: "q16",
    letter: "B",
    links: [{ key: "a42", color: "blue", note: "angle to the horizontal", q: ["angle 42o"] }],
    boxes: [{
      steps: [
        lk("a42", m("u_y = 40\\sin 42^\\circ,\\ v_y = -40\\sin 42^\\circ")),
        m("a = -9.81\\ \\text{m s}^{-2}", "take upward as +ve"),
        m("v_y = u_y + at \\Rightarrow t = 5.46\\ \\text{s}"),
        m("R = 40\\cos 42^\\circ \\times 5.46 = \\underline{162\\ \\text{m}}"),
        m("\\therefore \\text{The answer is B.}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q17
  {
    id: "q17",
    boxes: [{
      steps: [
        h("(b)"),
        h("(i)"),
        m("d = v\\cos 20^\\circ t"),
        m("60 = 45\\cos 20^\\circ t"),
        m("t = \\underline{1.42\\ \\text{s}}"),
        note("Accept 1.40 s to 1.42 s."),
        h("(ii)"),
        m("h = 25 - \\frac{1}{2}gt^2"),
        m("= 25 - \\frac{1}{2}(9.81)(1.42)^2"),
        m("= \\underline{15.1\\ \\text{m}}"),
        note("[or $h = 14.9$ m; accept 14.9 m to 15.4 m]"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q18
  {
    id: "q18",
    boxes: [{
      steps: [
        h("(a)(1)"),
        t("On Figure 4.2, mark the projected bearing with circles (O) every 0.05 s: equal horizontal steps of $1\\times 0.05 = 0.05$ m, with the vertical spacing of the bearing released from rest."),
        h("(2)"),
        m("v_x = 1\\ \\text{m s}^{-1}"),
        m("v_y = u_y + gt = 0 + 9.78\\times(0.05\\times 3)"),
        m("= 1.47\\ \\text{m s}^{-1}"),
        m("v = \\sqrt{v_x^2 + v_y^2}"),
        m("= \\sqrt{1^2 + 1.47^2}"),
        m("= \\underline{1.78\\ \\text{m s}^{-1}}"),
        h("(b)"),
        t("The air resistance acting on the ball increases as its speed increases."),
        t("When the air resistance equals the weight of the ball,"),
        t("net force acting on the ball becomes zero, by Newton's first law of motion,"),
        t("the ball travels with constant speed."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q19
  {
    id: "q19",
    links: [{ key: "u15", color: "blue", note: "$u_x = 15$ m s$^{-1}$", q: ["15 ms-1"] }],
    boxes: [{
      steps: [
        t("Take the downward direction as positive."),
        h("(a)"),
        lk("u15", t("Horizontal motion: $u_x = 15$ m s$^{-1}$ (constant)")),
        t("Vertical motion: $u_y = 0$ m s$^{-1}$, $a_y = 9.81$ m s$^{-2}$"),
        m("\\text{Apply } v_y = u_y + a_y t,"),
        m("v_y = 0 + (9.81)(1)"),
        m("= 9.81\\ \\text{m s}^{-1}"),
        m("\\therefore \\text{Horizontal speed } \\underline{15\\ \\text{m s}^{-1}}, \\text{ vertical speed } \\underline{9.81\\ \\text{m s}^{-1}}."),
        h("(b)"),
        t("Horizontal motion: $u_x = 15$ m s$^{-1}$ (constant)"),
        m("\\text{Apply } s_x = u_x t,"),
        m("s_x = (15)(4)"),
        m("= \\underline{60\\ \\text{m}}"),
        t("Vertical motion: $u_y = 0$ m s$^{-1}$, $a_y = 9.81$ m s$^{-2}$"),
        m("\\text{Apply } s_y = u_y t + \\frac{1}{2}a_y t^2,"),
        m("s_y = 0 + \\frac{1}{2}(9.81)(4)^2"),
        m("= \\underline{78.48\\ \\text{m}}"),
        h("(c)"),
        t("Horizontal motion: $u_x = 15$ m s$^{-1}$ (constant)"),
        t("Vertical motion: $u_y = 0$ m s$^{-1}$, $a_y = 9.81$ m s$^{-2}$"),
        m("\\text{Apply } v_y = u_y + a_y t,"),
        m("= 0 + (9.81)(4)"),
        m("= 39.24\\ \\text{m s}^{-1}"),
        m("\\text{Hence the velocity } v = \\sqrt{15^2 + 39.24^2}"),
        m("= \\underline{42.0\\ \\text{m s}^{-1}}"),
        h("(d)"),
        m("\\tan\\theta = \\frac{39.24}{15}"),
        m("\\theta = \\underline{69.1^\\circ}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q20
  {
    id: "q20",
    links: [{ key: "h100", color: "pink", note: "the tower is 100 m high", q: ["height 100 m"] }],
    boxes: [{
      steps: [
        t("Take the downward direction as positive."),
        h("(a)"),
        t("Horizontal motion: $u_x = u\\cos 30^\\circ$ (constant)"),
        m("s_x = u_x t"),
        m("120 = (u\\cos 30^\\circ)t"),
        m("u = \\frac{120}{t\\cos 30^\\circ} \\quad \\cdots (1)"),
        lk("h100", t("Vertical motion: $u_y = -u\\sin 30^\\circ$, $a_y = 9.81$ m s$^{-2}$, $s_y = 100$ m")),
        m("s_y = u_y t + \\frac{1}{2}at^2"),
        m("100 = (-u\\sin 30^\\circ)t + \\frac{1}{2}(9.81)t^2 \\quad \\cdots (2)"),
        t("Substitute (1) into (2),"),
        m("100 = -120\\tan 30^\\circ + \\frac{1}{2}(9.81)t^2"),
        m("t = \\underline{5.87\\ \\text{s}}"),
        h("(b)"),
        t("Substitute the result of (a) into (1),"),
        m("u = \\frac{120}{t\\cos 30^\\circ}"),
        m("= \\underline{23.6\\ \\text{m s}^{-1}}"),
        h("(c)"),
        t("By the law of conservation of energy,"),
        m("\\frac{1}{2}mv^2 = \\frac{1}{2}mu^2 + mgh"),
        m("v^2 = u^2 + 2gh"),
        m("v = \\sqrt{23.6^2 + 2(9.81)(100)}"),
        m("= \\underline{50.2\\ \\text{m s}^{-1}}"),
      ],
    }],
  },
];
