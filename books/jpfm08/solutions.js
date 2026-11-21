/**
 * Worked solutions for JPFM08 Moment of force (S4).
 * Method follows the teacher's red-boxed working in the ANS key
 * (reference/ans/, reference/ans_pages/). Field reference: docs/02-book-format.md.
 * House style: docs/03-authoring-style.md.
 */

import { m, t, h, note, nl, L, lk } from "../../engine/authoring.js";

export const SOLUTIONS = [
  // ---------------------------------------------------------------- q1
  {
    id: "q1",
    boxes: [{
      steps: [
        t("Perpendicular distance $= 2\\sin\\theta$."),
        h("(a)"),
        m("\\tau = 20\\sin 30^\\circ(2) = \\underline{20\\ \\text{N m}}"),
        h("(b)"),
        m("\\tau = 20\\sin 45^\\circ(2) = \\underline{28.3\\ \\text{N m}}"),
        h("(c)"),
        m("\\tau = \\underline{0\\ \\text{N m}}", "no perpendicular distance"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q2
  {
    id: "q2",
    boxes: [{
      steps: [
        t("Apply $\\tau = Fd_\\perp$."),
        h("(a)"),
        m("\\tau = 30(0.4)"),
        m("= \\underline{12\\ \\text{N m}}"),
        t("anticlockwise"),
        h("(b)"),
        m("\\tau = 30(0.4)\\sin 60^\\circ"),
        m("= \\underline{10.4\\ \\text{N m}}"),
        t("clockwise"),
        h("(c)"),
        m("\\tau = 120(1.5)\\cos 40^\\circ"),
        m("= \\underline{138\\ \\text{N m}}"),
        t("clockwise"),
        h("(d)"),
        m("\\tau = 50(1)\\sin 0^\\circ"),
        m("= \\underline{0}"),
        h("(e)"),
        m("\\tau = 6(0.4)"),
        m("= \\underline{2.4\\ \\text{N m}}"),
        t("clockwise"),
        h("(f)"),
        m("20(7+3)\\sin 70^\\circ"),
        m("+\\,15(3)\\sin 60^\\circ"),
        m("= \\underline{227\\ \\text{N m}}"),
        t("anticlockwise"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q3
  {
    id: "q3",
    letter: "B",
    boxes: [{
      steps: [
        t("Taking moments about the pivot,"),
        m("600\\times 6 = F\\times 9"),
        m("\\therefore F = \\underline{400\\ \\text{N}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q4
  {
    id: "q4",
    letter: "C",
    boxes: [{
      steps: [
        t("Let $W$ be the weight of the boy."),
        t("Taking moments about the pivot,"),
        m("W(0.5) = 100(0.5)+200(1.5)"),
        m("\\therefore W = \\underline{700\\ \\text{N}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{C}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q5
  {
    id: "q5",
    letter: "D",
    boxes: [{
      steps: [
        t("Let $x$ be the distance the heavier boy moves."),
        m("500(5-x) = 300\\times 5"),
        m("\\therefore x = \\underline{2\\ \\text{m}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{D}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q6
  {
    id: "q6",
    letter: "B",
    boxes: [{
      steps: [
        m("4(1)-2(1) = \\underline{2\\ \\text{kNm}}", "anticlockwise +, clockwise −"),
        m("\\therefore \\text{The answer is } \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q7
  {
    id: "q7",
    letter: "C",
    boxes: [{
      steps: [
        t("Take moment about $P$,"),
        t("clockwise as positive:"),
        m("5(0.3) = 1.5\\ \\text{N m}"),
        m("2(0.2) = 0.4\\ \\text{N m}"),
        m("1.5-0.4 = \\underline{1.1\\ \\text{N m}}"),
        t("clockwise"),
        m("\\therefore \\underline{\\text{C}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q8
  {
    id: "q8",
    letter: "B",
    boxes: [{
      steps: [
        t("Take moment about the hand, so $F_1$ has no moment:"),
        m("(1.5)(0.35)+(2.0)(0.7) = F_2(0.1)"),
        m("\\therefore F_2 = \\underline{19.3\\ \\text{N}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q9
  {
    id: "q9",
    letter: "B",
    boxes: [{
      steps: [
        t("Take moment about the pivot,"),
        m("14\\left(\\frac{\\ell}{4}\\right) = W\\left(\\frac{\\ell}{4}\\right)+3\\left(\\frac{3\\ell}{4}\\right)"),
        m("\\therefore W = \\underline{5\\ \\text{N}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q10
  {
    id: "q10",
    letter: "D",
    boxes: [{
      steps: [
        t("Take moment about $Y$,"),
        m("R_X(0.7) = 154(0.5)"),
        m("\\therefore R_X = \\underline{110\\ \\text{N}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{D}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q11
  {
    id: "q11",
    letter: "B",
    boxes: [{
      steps: [
        t("Uniform beam: the C.G. is 30 cm from $P$."),
        h("(a)"),
        t("Take moment about $P$,"),
        m("F(20) = 10(30)"),
        m("\\therefore F = \\underline{15\\ \\text{N}}"),
        h("(b)"),
        t("Vertical forces are balanced:"),
        m("R = F+10 = 15+10"),
        m("\\therefore R = \\underline{25\\ \\text{N}}"),
        m("\\therefore \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q12
  {
    id: "q12",
    letter: "C",
    boxes: [{
      steps: [
        t("Clockwise moment = anticlockwise moment."),
        m("3.2(9.81)d = 0.4(9.81)(0.45-d)"),
        m("+\\,0.8(9.81)(0.9-d)"),
        m("\\therefore d = \\underline{0.205\\ \\text{m}}"),
        t("i.e. 20.5 cm"),
        m("\\therefore \\underline{\\text{C}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q13
  {
    id: "q13",
    letter: "B",
    boxes: [{
      steps: [
        t("Take moment at the point under $P$,"),
        m("50(0.3) = Q(0.5)"),
        m("\\therefore Q = \\underline{30\\ \\text{N}}"),
        t("Balance of forces:"),
        m("P+30 = 50"),
        m("\\therefore P = \\underline{20\\ \\text{N}}"),
        m("\\therefore \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q14
  {
    id: "q14",
    letter: "C",
    boxes: [{
      steps: [
        t("Weight of the plank $= 150+150 = 300\\ \\text{N}$."),
        t("In (b) take moment under $Q$,"),
        m("P(1-0.25) = 300(0.5)"),
        m("\\therefore P = \\underline{200\\ \\text{N}}"),
        t("Balance of forces:"),
        m("200+Q = 300"),
        m("\\therefore Q = \\underline{100\\ \\text{N}}"),
        m("\\therefore \\underline{\\text{C}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q15
  {
    id: "q15",
    letter: "B",
    boxes: [{
      steps: [
        t("Take $F_1$ as pivot,"),
        m("F_2+2W = 3W\\times 2"),
        m("\\therefore F_2 = 4W"),
        t("Take $F_2$ as pivot,"),
        m("F_1+3W = 2W\\times 2"),
        m("\\therefore F_1 = W"),
        m("\\therefore F_1:F_2 = \\underline{1:4}"),
        m("\\therefore \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q16
  {
    id: "q16",
    letter: "B",
    boxes: [{
      steps: [
        t("About to lose balance: reaction at $Q$ is 0."),
        t("Clockwise torque = anticlockwise torque:"),
        m("150\\left(\\frac{0.5+2.1+0.4}{2}-0.5\\right) ="),
        m("400(0.5-d)"),
        m("\\therefore d = \\underline{0.125\\ \\text{m}}"),
        m("\\therefore \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q17
  {
    id: "q17",
    letter: "B",
    boxes: [{
      steps: [
        t("Let $n$ be the number of packets."),
        t("At the maximum the plank just tilts,"),
        t("so $X$ loses contact with the plank."),
        t("Take moment about $Y$,"),
        m("450(2.5) = (675+6n)(1.5)"),
        m("\\therefore n = 12.5"),
        t("$n$ must be a whole number:"),
        m("\\therefore n = \\underline{12}"),
        m("\\therefore \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q18
  {
    id: "q18",
    letter: "A",
    boxes: [{
      steps: [
        t("(1) A couple: the block rotates."),
        t("(2) Balanced: no net force, stays at rest."),
        t("(3) Resultant to the right: it accelerates."),
        m("\\therefore \\underline{\\text{A}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q19
  {
    id: "q19",
    letter: "D",
    boxes: [{
      steps: [
        t("Take moment about $P$,"),
        m("Td\\sin\\theta = Wx+W_r(0.5d)"),
        m("\\therefore T = \\frac{Wx+0.5W_rd}{d\\sin\\theta}"),
        t("(1) $W$ towards $P$: $x$ falls, $T$ falls."),
        t("(2) Heavier rod: $W_r$ rises, $T$ rises."),
        t("(3) Shorter string: $\\theta$ falls,"),
        t("$\\sin\\theta$ falls, $T$ rises."),
        m("\\therefore \\underline{\\text{D}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q20
  {
    id: "q20",
    letter: "C",
    boxes: [{
      steps: [
        t("Three forces act: the tension, the weight"),
        t("and the reaction at $O$."),
        t("Their lines of action must be concurrent:"),
        t("the line $MY$ produced and the vertical through $X$"),
        t("meet below and to the right of $O$,"),
        t("so the reaction acts along $OR$ (down to the right)."),
        m("\\therefore \\underline{\\text{C}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q21
  {
    id: "q21",
    letter: "D",
    boxes: [{
      steps: [
        t("Take moment about $O$ ($OM = a$, $OX = 2a$):"),
        m("T\\sin 30^\\circ(a) = 50(2a)"),
        m("\\therefore T = 200\\ \\text{N}"),
        t("Resolve at $O$,"),
        m("R\\sin\\theta = T\\cos 30^\\circ"),
        m("R\\cos\\theta = T\\sin 30^\\circ-50"),
        m("\\therefore \\theta = 73.9^\\circ"),
        m("R = \\underline{180\\ \\text{N}}"),
        m("\\therefore \\underline{\\text{D}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q22
  {
    id: "q22",
    letter: "D",
    boxes: [{
      steps: [
        t("Take moment about $P$ initially:"),
        m("T\\sin 45^\\circ(1.5) = Mg(1)"),
        m("\\therefore T = 0.94Mg"),
        t("The C.G. stays at the mid-point; what falls is the"),
        t("horizontal distance $1.0\\cos\\theta$ from $P$."),
        t("So the moment of the weight falls and $T$ falls."),
        m("\\therefore \\underline{\\text{D}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q23
  {
    id: "q23",
    boxes: [{
      steps: [
        h("(a)"),
        t("Take moment about $X$,"),
        m("500(3) = F_Y(4)+700(1)"),
        m("\\therefore F_Y = \\underline{200\\ \\text{N}}"),
        t("Consider the vertical direction,"),
        m("F_X+F_Y = 500+700"),
        m("\\therefore F_X = \\underline{1000\\ \\text{N}}"),
        h("(b)"),
        t("As $Q$ walks towards $X$ his clockwise moment falls."),
        t("The plank stays in equilibrium, so the anticlockwise"),
        t("moment also falls; $P$'s part is unchanged,"),
        t("so the upward force at $Y$ decreases."),
        t("The total downward force is unchanged,"),
        t("so the upward force at $X$ increases."),
        h("(c)"),
        t("Just before toppling, the upward force at $Y$ is zero."),
        t("Take moment about $X$,"),
        m("500d = 700(1)"),
        m("\\therefore d = \\underline{1.4\\ \\text{m}}"),
        h("(d)"),
        t("If $Q$ leaves before $P$, there is no clockwise moment"),
        t("about $X$, so the plank would topple."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q24
  {
    id: "q24",
    boxes: [{
      steps: [
        t("(a) Rough plane: weight $W$ down from the centre,"),
        t("normal force $N$ perpendicular to the plane,"),
        t("friction $f$ up the plane. Smooth plane: only $W$ and $N$."),
        t("(b) On the smooth plane $W$ and $N$ both pass through"),
        t("the centre, so they give no moment about it:"),
        t("the ball slides without rolling."),
        t("On the rough plane the friction acts at the surface,"),
        t("so it gives a moment about the centre: the ball rolls."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q25
  {
    id: "q25",
    boxes: [{
      steps: [
        h("(a)"),
        t("On one arm draw $F_1$ at the hand, perpendicular to the arm,"),
        t("$F_2$ at the rod (the rod's force on the arm acts the other way),"),
        t("and label $L_1$, $L_2$ from the joint."),
        h("(b)"),
        t("The arm pushes the rod with $F_2$, so by Newton's third law"),
        t("the rod pushes the arm with an equal $F_2$ the other way."),
        t("Take moment about the joint:"),
        m("F_1L_1 = F_2L_2"),
        h("(c)"),
        m("L_1 < L_2 \\Rightarrow \\underline{F_1 > F_2}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q26
  {
    id: "q26",
    boxes: [{
      steps: [
        h("(a)"),
        m("x = \\sqrt{1^2-0.5^2} = 0.866\\ \\text{m}"),
        t("Take moment about $P$,"),
        m("W(0.866) = 50(0.5+0.2)"),
        m("\\therefore W = \\underline{40.4\\ \\text{N}}"),
        h("(b)"),
        t("Largest turning effect: force perpendicular, distance 2 m."),
        m("F(2) = W(0.866)"),
        m("\\therefore F = \\underline{17.5\\ \\text{N}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q27
  {
    id: "q27",
    boxes: [{
      steps: [
        h("(a)"),
        t("Take moment about the contact point,"),
        m("50(0.6)\\cos 30^\\circ = F(1.2)\\cos 30^\\circ"),
        m("\\therefore F = \\underline{25\\ \\text{N}}"),
        h("(b)"),
        t("Consider the vertical direction,"),
        m("R+25 = 50"),
        m("\\therefore R = \\underline{25\\ \\text{N}}"),
        h("(c)"),
        m("50(0.6)\\cos 50^\\circ = F(1.2)\\cos 50^\\circ"),
        m("\\therefore F = \\underline{25\\ \\text{N}}"),
        h("(d)"),
        t("At 30°,"),
        m("F(1.2) = 50(0.6)\\cos 30^\\circ"),
        m("\\therefore F = \\underline{21.7\\ \\text{N}}"),
        t("At 50°,"),
        m("F(1.2) = 50(0.6)\\cos 50^\\circ"),
        m("\\therefore F = \\underline{16.1\\ \\text{N}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q28
  {
    id: "q28",
    boxes: [{
      steps: [
        h("(a)"),
        m("x = PQ\\sin 30^\\circ = 0.5\\ \\text{m}"),
        t("Take moment about $P$,"),
        m("T(0.5) = 10(0.5)+50(1)"),
        m("\\therefore T = \\underline{110\\ \\text{N}}"),
        h("(b)"),
        m("T_y = 110\\sin 30^\\circ = \\underline{55\\ \\text{N}}"),
        h("(c)"),
        m("F = 10+50 = \\underline{60\\ \\text{N}}"),
        h("(d)"),
        t("The hinge also exerts a vertical force on the rod."),
        h("(e)"),
        m("R\\sin\\theta+110\\sin 30^\\circ = 10+50"),
        m("\\Rightarrow R\\sin\\theta = 5"),
        m("R\\cos\\theta = 110\\cos 30^\\circ = 95.2"),
        m("R = \\sqrt{5^2+95.2^2} = \\underline{95.4\\ \\text{N}}"),
        m("\\theta = \\tan^{-1}\\frac{5}{95.2} = \\underline{3^\\circ}"),
        h("(f)"),
        t("Draw: $T$ 110 N at 30°, rod weight 10 N at the centre,"),
        t("50 N at $Q$, hinge force 95.4 N at 3° to the rod."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q29
  {
    id: "q29",
    boxes: [{
      steps: [
        h("(a)"),
        t("The ball is in equilibrium, so the net force is zero:"),
        m("T_C = \\underline{3\\ \\text{N}}"),
        h("(b)"),
        t("The 40° in the figure is measured from the vertical,"),
        t("so the string makes 50° with the rod."),
        t("Take moment about $P$,"),
        m("T_B(0.24)\\sin 50^\\circ = 3(0.20)+5(0.12)"),
        m("\\therefore T_B = \\underline{6.53\\ \\text{N}}"),
        h("(c)"),
        m("T_x = 6.53\\sin 40^\\circ = \\underline{4.20\\ \\text{N}}"),
        m("T_y = W+T_C-6.53\\cos 40^\\circ"),
        m("= 5+3-5.00 = \\underline{3.0\\ \\text{N}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q30
  {
    id: "q30",
    boxes: [{
      steps: [
        h("(a)"),
        t("Take moment about $P$,"),
        m("N(4)\\sin 60^\\circ = 1000(2)\\cos 60^\\circ"),
        m("\\therefore N = \\underline{289\\ \\text{N}}"),
        h("(b)"),
        t("Horizontal forces are balanced,"),
        m("f = N = \\underline{289\\ \\text{N}}"),
        h("(c)"),
        t("Limiting case: $N' = f_{max} = 400\\ \\text{N}$."),
        t("Take moment about $P$,"),
        m("N'(4)\\sin 60^\\circ = 1000(2)\\cos 60^\\circ"),
        m("+\\,500(x)\\cos 60^\\circ"),
        m("400(3.46) = 1000+250x"),
        m("\\therefore x = \\underline{1.54\\ \\text{m}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q31
  {
    id: "q31",
    boxes: [{
      steps: [
        t("1. Use the hole punch to punch a small hole in the cardboard."),
        t("2. Hang the cardboard on the hook with the string;"),
        t("the string acts as the vertical. Wait for equilibrium."),
        t("3. Use the pencil and ruler to draw a line along the string."),
        t("4. Punch another hole and repeat; draw another line."),
        t("5. The intersection of the two lines is the centre of mass."),
        t("Source of error: punching holes may shift the centre of mass."),
      ],
    }],
  },
];
