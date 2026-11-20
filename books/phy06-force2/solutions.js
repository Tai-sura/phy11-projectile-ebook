/**
 * Worked solutions for PHY MECH F2 Force II (S4).
 * Method follows the teacher's red-boxed working in the ANS key
 * (reference/ans_pages/). g = 9.81 throughout (user's decision, 2026-11-20).
 */

import { m, t, h, note } from "../../engine/authoring.js";

export const SOLUTIONS = [
  // ---------------------------------------------------------------- q1
  {
    id: "q1",
    boxes: [{
      steps: [
        t("Resolve the 10 N force into two perpendicular components."),
        m("F_x = 10\\cos 30^\\circ = \\underline{8.66\\ \\text{N}}", "horizontal component"),
        m("F_y = 10\\sin 30^\\circ = \\underline{5.00\\ \\text{N}}", "vertical component"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q2
  {
    id: "q2",
    boxes: [{
      steps: [
        h("(a)"),
        m("F_x = 15\\cos 75^\\circ = \\underline{3.88\\ \\text{N}}", "75° to the horizontal"),
        m("F_y = 15\\sin 75^\\circ = \\underline{14.5\\ \\text{N}}"),
        h("(b)"),
        m("F_x = 85\\sin 75^\\circ = \\underline{82.1\\ \\text{N}}", "75° to the vertical"),
        m("F_y = 85\\cos 75^\\circ = \\underline{22.0\\ \\text{N}}"),
        h("(c)"),
        m("F_x = 300\\sin 10^\\circ = \\underline{52.1\\ \\text{N}}", "10° to the vertical"),
        m("F_y = 300\\cos 10^\\circ = \\underline{295\\ \\text{N}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q3
  {
    id: "q3",
    letter: "A",
    boxes: [{
      steps: [
        t("Consider the vertical direction."),
        m("F_1\\cos 30^\\circ = 20"),
        m("F_1 = 23.09\\ \\text{N}"),
        t("Consider the horizontal direction."),
        m("F_2 = F_1\\sin 30^\\circ = 23.09\\times\\sin 30^\\circ"),
        m("= \\underline{11.5\\ \\text{N}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{A}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q4
  {
    id: "q4",
    letter: "C",
    boxes: [{
      steps: [
        t("Consider the north-south direction. Take the direction towards the south as positive."),
        m("\\text{Resultant force} = 20\\cos(100^\\circ - 90^\\circ) - 10 = 9.696\\ \\text{N}"),
        t("Consider the east-west direction. Take the direction towards the west as positive."),
        m("\\text{Resultant force} = 15 - 20\\sin(100^\\circ - 90^\\circ) = 11.53\\ \\text{N}"),
        m("\\text{Net force} = \\sqrt{9.696^2 + 11.53^2}"),
        m("= \\underline{15.1\\ \\text{N}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{C}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q5
  {
    id: "q5",
    letter: "C",
    boxes: [{
      steps: [
        m("\\tan\\theta = \\frac{11.53}{9.696}"),
        m("\\theta = 49.9^\\circ"),
        m("\\therefore \\text{The direction of the net force is } \\underline{\\text{S } 49.9^\\circ\\ \\text{W}}."),
        m("\\therefore \\text{The answer is } \\underline{\\text{C}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q6
  {
    id: "q6",
    letter: "D",
    boxes: [{
      steps: [
        t("For two fixed forces, the resultant is largest when they point the same way and smallest when opposite."),
        m("\\text{(3) same direction: } R = 2 + 3 = 5\\ \\text{N}"),
        m("\\text{(4) opposite: } R = 3 - 2 = 1\\ \\text{N}"),
        t("(2) is obtuse and (1) is acute, so their resultants lie between 1 N and 5 N, and (1) is the larger of the two."),
        m("\\therefore (4) < (2) < (1) < (3)"),
        m("\\therefore \\text{The answer is } \\underline{\\text{D}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q7
  {
    id: "q7",
    letter: "B",
    boxes: [{
      steps: [
        t("The block stays on the smooth table, so the vertical forces balance:"),
        m("N + 100\\sin 60^\\circ = 100"),
        t("On a smooth table there is no friction, so only the horizontal pull is unbalanced."),
        m("F = 100\\cos 60^\\circ"),
        m("= \\underline{50\\ \\text{N}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q8
  {
    id: "q8",
    letter: "A",
    boxes: [{
      steps: [
        t("Take the direction of motion as positive."),
        m("80\\cos 60^\\circ - f = ma = 15(2)"),
        m("f = 80\\cos 60^\\circ - 30"),
        m("= \\underline{10\\ \\text{N}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{A}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q9
  {
    id: "q9",
    boxes: [{
      steps: [
        t("Resolve horizontally and vertically at the knot."),
        m("T_1\\cos 60^\\circ = T_2\\cos 30^\\circ \\quad \\cdots (1)"),
        m("T_1\\sin 60^\\circ + T_2\\sin 30^\\circ = 100 \\quad \\cdots (2)"),
        t("By solving (1) and (2), we get"),
        m("T_1 = \\underline{86.6\\ \\text{N}}"),
        m("T_2 = \\underline{50\\ \\text{N}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q10
  {
    id: "q10",
    boxes: [{
      steps: [
        h("(a)"),
        t("Gravitational pull = weight of the object"),
        m("W = mg = 4(9.81) = \\underline{39.24\\ \\text{N}}"),
        h("(b)"),
        m("S_1\\sin 20^\\circ = S_2\\sin 70^\\circ"),
        m("S_1\\cos 20^\\circ + S_2\\cos 70^\\circ = 39.24"),
        m("S_1 = \\underline{36.9\\ \\text{N}}"),
        m("S_2 = \\underline{13.4\\ \\text{N}}"),
        note("The key prints 40 in the second equation (rounded from 39.24 N); solving with 39.24 N gives the key's 36.9 N and 13.4 N. With 40 N the answers would be 37.6 N and 13.7 N."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q11
  {
    id: "q11",
    boxes: [{
      steps: [
        t("Balance of forces in the $x$-direction:"),
        m("T\\sin 25^\\circ = F\\cos 25^\\circ \\quad \\therefore T = \\frac{F\\cos 25^\\circ}{\\sin 25^\\circ}"),
        t("Balance of forces in the $y$-direction:"),
        m("T\\cos 25^\\circ + F\\sin 25^\\circ = 20"),
        m("\\frac{F\\cos 25^\\circ}{\\sin 25^\\circ}\\cos 25^\\circ + F\\sin 25^\\circ = 20"),
        m("\\frac{F(\\cos^2 25^\\circ + \\sin^2 25^\\circ)}{\\sin 25^\\circ} = 20"),
        m("F = 20\\sin 25^\\circ = \\underline{8.5\\ \\text{N}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q12
  {
    id: "q12",
    boxes: [{
      steps: [
        t("Each cable takes the same share of the weight, and only its vertical part lifts the cube."),
        m("T\\cos 20^\\circ \\times 4 = 600"),
        m("T = \\underline{159.6\\ \\text{N}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q13
  {
    id: "q13",
    boxes: [{
      steps: [
        t("The two 50 N tensions pull the arrow forward; only their horizontal parts add up."),
        m("\\text{Magnitude of horizontal force} = 2\\times 50\\cos 40^\\circ"),
        m("= 76.6\\ \\text{N}"),
        m("\\text{Initial acceleration} = \\frac{F}{m} = \\frac{76.6}{0.1}"),
        m("= \\underline{766\\ \\text{m s}^{-2}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q14
  {
    id: "q14",
    boxes: [{
      steps: [
        m("T\\sin 5^\\circ = ma \\quad \\cdots (1)"),
        m("T\\cos 5^\\circ = mg \\quad \\cdots (2)"),
        m("(1) \\div (2): \\quad \\tan 5^\\circ = \\frac{a}{g}"),
        m("a = g\\tan 5^\\circ = 9.81\\times\\tan 5^\\circ"),
        m("= \\underline{0.858\\ \\text{m s}^{-2}}"),
        t("The acceleration of the train is 0.858 m s$^{-2}$ towards the right."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q15
  {
    id: "q15",
    boxes: [{
      steps: [
        h("(a)"),
        t("When the car is speeding up, the air freshener tends to move at its original velocity due to inertia."),
        t("The speed of the air freshener becomes lower than the car's speed. As a result, the air freshener moves backwards relative to the car and the string becomes inclined."),
        h("(b)"),
        t("Consider the vertical direction."),
        m("T\\cos\\theta = mg \\quad \\cdots (1)"),
        t("Consider the horizontal direction. Take the direction to the left as positive."),
        m("T\\sin\\theta = ma \\quad \\cdots (2)"),
        m("(2) \\div (1): \\quad \\tan\\theta = \\frac{a}{g}"),
        m("\\tan 10^\\circ = \\frac{a}{9.81}"),
        m("a = \\underline{1.73\\ \\text{m s}^{-2}}"),
        t("The car's acceleration is 1.73 m s$^{-2}$."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q16
  {
    id: "q16",
    boxes: [{
      steps: [
        h("(a)"),
        t("On the printed grid, complete the parallelogram with the two forces as adjacent sides and draw the diagonal from the common starting point: that diagonal is the resultant."),
        t("It runs at 45° above the horizontal and is about 7.1 squares long (the tip-to-tail method gives the same arrow)."),
        h("(b)"),
        m("\\text{Magnitude of resultant force} = \\sqrt{5^2 + 5^2}"),
        m("= \\underline{7.07\\ \\text{N}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q17
  {
    id: "q17",
    letter: "B",
    boxes: [{
      steps: [
        t("Read the resultant of $F_1$ and $F_2$ from the grid: 5 squares right, 2 squares up."),
        m("\\text{Resultant of } F_1 \\text{ and } F_2: F = \\sqrt{5^2 + 2^2} = 5.4\\ \\text{N}"),
        t("The direction of $F$ is towards the upper-right."),
        t("To keep $P$ in equilibrium the net force must be zero, so $F_3$ is equal and opposite to $F$."),
        m("\\therefore F_3 = \\underline{5.4\\ \\text{N}} \\text{ towards the lower-left.}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q18
  {
    id: "q18",
    letter: "D",
    boxes: [{
      steps: [
        t("Read each force from the grid (1 cm represents 1 N), taking right and up as positive:"),
        m("F_1 = (-1,\\ +3)\\ \\text{N}"),
        m("F_2 = (-2,\\ -2)\\ \\text{N}"),
        m("F_3 = (+3,\\ -3)\\ \\text{N}"),
        m("F_4 = (+4,\\ +1)\\ \\text{N}"),
        m("\\text{Horizontal component} = -1 - 2 + 3 + 4"),
        m("= \\underline{+4\\ \\text{N}} \\text{ (to the right)}"),
        m("\\text{Vertical component} = +3 - 2 - 3 + 1"),
        m("= \\underline{-1\\ \\text{N}} \\text{ (downwards)}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{D}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q19
  {
    id: "q19",
    letter: "B",
    boxes: [{
      steps: [
        t("The system is at rest, so the forces along the incline balance."),
        m("mg\\sin 30^\\circ = 1(9.81)\\sin 30^\\circ = 4.905\\ \\text{N}"),
        t("Friction acts up the plane."),
        m("2 + f = 4.905"),
        m("f = 2.905\\ \\text{N} \\approx \\underline{2.9\\ \\text{N}}"),
        note("The key uses g = 10 m s⁻² (mg = 10 N), which gives f = 3 N — exactly option B. With g = 9.81 m s⁻², f = 2.9 N, still nearest to B (3 N); A (2 N) is 0.9 N away, so the answer stays B."),
        m("\\therefore \\text{The answer is } \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q20
  {
    id: "q20",
    letter: "A",
    boxes: [{
      steps: [
        t("Take the direction down the plane as positive."),
        m("0.5(9.81)\\sin 30^\\circ - f = 3(0.5)"),
        m("f = 0.9525\\ \\text{N} \\approx \\underline{0.95\\ \\text{N}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{A}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q21
  {
    id: "q21",
    letter: "B",
    boxes: [{
      steps: [
        t("Let $f$ be the maximum friction between the block and the plane."),
        m("\\text{Component of weight down the plane} = mg\\sin 30^\\circ"),
        m("= 4\\times 9.81\\times\\sin 30^\\circ = 19.62\\ \\text{N}"),
        t("Consider the direction parallel to the plane. Take the direction up the plane as positive."),
        t("When $F$ is 15 N, the friction $f$ points up the plane."),
        m("f + 15 = 19.62 \\quad \\therefore f = 4.62\\ \\text{N}"),
        t("When $F$ is 30 N, the friction $f$ points down the plane."),
        m("\\text{By } F_{\\text{net}} = ma,"),
        m("30 - 4.62 - 19.62 = 4a"),
        m("a = \\underline{1.44\\ \\text{m s}^{-2}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q22
  {
    id: "q22",
    letter: "B",
    boxes: [{
      steps: [
        t("Along the slope, the string makes 50° − 30° = 20° with the slope."),
        m("T\\cos 20^\\circ - 50 - mg\\sin 30^\\circ = 40(0.5)"),
        m("T\\cos 20^\\circ = 50 + 40(9.81)\\sin 30^\\circ + 20"),
        m("T = \\underline{283\\ \\text{N}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q23
  {
    id: "q23",
    letter: "B",
    boxes: [{
      steps: [
        m("\\text{The original resultant force on the block} = 10(9.81)\\sin 30^\\circ - 10"),
        m("= 39.05\\ \\text{N}"),
        m("\\text{The component horizontal to the incline is } F\\cos 30^\\circ."),
        m("39.05 = F\\cos 30^\\circ"),
        m("F = \\underline{45.1\\ \\text{N}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q24
  {
    id: "q24",
    letter: "C",
    boxes: [{
      steps: [
        t("Consider the system of $X$ and $Y$. Take the direction up the plane as positive."),
        m("F_{\\text{net}} = 50\\cos 30^\\circ - (20 + 30)\\sin 30^\\circ"),
        m("= 18.3\\ \\text{N}"),
        m("\\text{By } F_{\\text{net}} = ma: \\quad 18.3 = \\left(\\frac{20+30}{9.81}\\right)a"),
        m("a = 3.59\\ \\text{m s}^{-2}"),
        t("Consider $X$. Let $F$ be the force acting on $X$ by $Y$."),
        m("50\\cos 30^\\circ - F - 20\\sin 30^\\circ = \\left(\\frac{20}{9.81}\\right)(3.59)"),
        m("F = \\underline{26.0\\ \\text{N}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{C}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q25
  {
    id: "q25",
    letter: "B",
    boxes: [{
      steps: [
        t("Consider the net forces on blocks $A$ and $B$ respectively."),
        m("T - 1(9.81)\\sin 28^\\circ = 1a"),
        m("0.8(9.81) - T = 0.8a"),
        t("Solving, we get"),
        m("a = \\underline{1.80\\ \\text{m s}^{-2}}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{B}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q26
  {
    id: "q26",
    letter: "A",
    boxes: [{
      steps: [
        t("Let the friction between $X$ and the plane be $f$. Initially,"),
        m("m_Y g = m_X g\\sin\\theta + f"),
        m("f = m_Y g - m_X g\\sin\\theta = 2(9.81) - 1(9.81)\\sin 30^\\circ"),
        m("= 14.7\\ \\text{N}"),
        t("After the string breaks, the downward force on $X$ along the plane is"),
        m("m_X g\\sin\\theta = 4.91\\ \\text{N} < 14.7\\ \\text{N}"),
        m("\\therefore X \\text{ remains stationary.}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{A}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q28
  {
    id: "q28",
    boxes: [{
      steps: [
        h("(a)"),
        t("Take the upward direction as positive."),
        m("R + 15\\sin 30^\\circ + 20\\sin 45^\\circ = mg"),
        m("R = 27.4\\ \\text{N}"),
        m("\\therefore \\text{The normal force is } \\underline{27.4\\ \\text{N}}."),
        h("(b)"),
        t("Take the direction to the right as positive."),
        m("\\text{By } F = ma,"),
        m("20\\cos 45^\\circ - 15\\cos 30^\\circ = ma"),
        m("a = 0.230\\ \\text{m s}^{-2}"),
        m("\\therefore \\text{The acceleration is } \\underline{0.230\\ \\text{m s}^{-2}} \\text{ towards the right.}"),
        h("(c)"),
        t("In the direction perpendicular to the slope,"),
        m("R + 15\\sin 30^\\circ + 20\\sin 45^\\circ = mg\\cos 20^\\circ"),
        m("R = 24.4\\ \\text{N}"),
        m("\\therefore \\text{The normal force is } \\underline{24.4\\ \\text{N}}."),
        t("Take the direction down the slope as positive."),
        m("ma = 15\\cos 30^\\circ + mg\\sin 20^\\circ - 20\\cos 45^\\circ"),
        m("a = 3.12\\ \\text{m s}^{-2}"),
        m("\\therefore \\text{The acceleration is } \\underline{3.12\\ \\text{m s}^{-2}} \\text{ down the slope.}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q27
  {
    id: "q27",
    boxes: [{
      steps: [
        h("(a)"),
        t("Consider the free body diagrams of $A$ and $B$."),
        t("On $A$: the weight $m_Ag$ vertically downwards, the tension $T$ along the string at 18° to the horizontal, and a normal reaction $N$ perpendicular to the plane."),
        t("On $B$: the weight $m_Bg$ vertically downwards, the tension $T$ along the string at 40° to the horizontal, and a normal reaction $N$ perpendicular to the plane."),
        h("(b)"),
        t("Both $A$ and $B$ are accelerating with $a$:"),
        m("m_Ag\\sin 18^\\circ + T = m_Aa"),
        m("m_Bg\\sin 40^\\circ - T = m_Ba"),
        t("Put $m_A = 1.5$ kg, $m_B = 2$ kg and $g = 9.81$ m s$^{-2}$."),
        t("The problem is equivalent to considering the whole system:"),
        m("m_Ag\\sin 18^\\circ + m_Bg\\sin 40^\\circ = (m_A + m_B)a"),
        m("\\therefore a = \\underline{4.90\\ \\text{m s}^{-2}}"),
        h("(c)"),
        m("T = m_Aa - m_Ag\\sin 18^\\circ"),
        m("= \\underline{2.81\\ \\text{N}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q29
  {
    id: "q29",
    boxes: [{
      steps: [
        h("(a)"),
        t("On the printed figure, draw the three forces acting on the block: the normal force $R$ perpendicular to the plane (pointing away from the plane), the friction $f$ along the plane, and the weight $mg$ vertically downwards."),
        t("Label each arrow with its correct name."),
        h("(b)"),
        t("On the printed axes, draw the velocity-time graph:"),
        t("Draw two straight segments: from $(0, u)$ down to $v = 0$ at the top of the journey — the steeper one — then from $v = 0$ to $-V$ at time $T$ with the smaller constant acceleration; $V < u$."),
        h("(c)"),
        t("In the upward journey, the net force acting on the object is $f + mg\\sin\\theta$."),
        t("In the downward journey, the net force is $mg\\sin\\theta - f$, which is smaller than that during the upward journey."),
        m("\\text{By } F_{\\text{net}} = ma, \\text{ the acceleration has a smaller magnitude in the downward journey.}"),
        m("\\text{By } v^2 = u^2 + 2as, \\quad V = \\sqrt{2a_d s} \\text{ and } u = \\sqrt{2a_u s}."),
        t("Since the displacements in both journeys have the same magnitude and $a_u > a_d$,"),
        m("\\therefore \\underline{u > V}"),
      ],
    }],
  },
  // ---------------------------------------------------------------- q30
  {
    id: "q30",
    boxes: [{
      steps: [
        h("(a)"),
        t("In the upward journey the trolley moves up the runway, so the friction $f$ acts down the runway. On the trolley draw: the normal force $R$ perpendicular to the runway, the friction $f$ down the runway, and the weight $mg$ vertically downwards."),
        t("In the downward journey the trolley moves down the runway, so $f$ now acts up the runway. Draw the same three forces with the friction reversed. ($R$ and $mg$ are unchanged.)"),
        h("(b)"),
        t("Take the direction down the runway as positive."),
        t("Upward journey: the acceleration $a_1 = 0.5\\ \\text{m s}^{-2}$ also points down the runway (the trolley is slowing down). By $F_{\\text{net}} = ma$,"),
        m("mg\\sin\\theta + f = ma_1 \\quad \\cdots (1)"),
        t("Downward journey: $a_2 = 0.3\\ \\text{m s}^{-2}$ down the runway. By $F_{\\text{net}} = ma$,"),
        m("mg\\sin\\theta - f = ma_2 \\quad \\cdots (2)"),
        t("Subtracting (2) from (1) removes $mg\\sin\\theta$:"),
        m("2f = ma_1 - ma_2 = 2(0.5) - 2(0.3) = 0.4"),
        m("\\therefore \\underline{f = 0.2\\ \\text{N}}"),
      ],
    }],
  },
  // ---------------------------------------------------------------- q31
  {
    id: "q31",
    boxes: [{
      steps: [
        h("(a)"),
        t("While the block slides up $XY$, both the component of weight along the plane and the friction point down the plane. By $F_{\\text{net}} = ma$,"),
        m("mg\\sin 20^\\circ + f = ma"),
        m("a = g\\sin 20^\\circ + \\frac{f}{m} = 9.81\\sin 20^\\circ + \\frac{12}{5}"),
        m("\\therefore \\underline{a = 5.76\\ \\text{m s}^{-2}} \\text{ down the plane}"),
        h("(b)"),
        h("(i)"),
        t("With the minimum initial speed the block just reaches $Y$, i.e. it is instantaneously at rest at the top. By $v^2 = u^2 + 2as$ along $XY$ (displacement 4 m, $v = 0$),"),
        m("0 = u^2 + 2(-5.76)(4)"),
        m("\\therefore \\underline{u = 6.79\\ \\text{m s}^{-1}}"),
        h("(ii)"),
        t("On the way down $YZ$ the friction now points up the plane, so the net force down the plane is smaller. By $F_{\\text{net}} = ma$,"),
        m("mg\\sin 20^\\circ - f = ma'"),
        m("a' = 9.81\\sin 20^\\circ - \\frac{12}{5} = 0.955\\ \\text{m s}^{-2}"),
        t("Starting from rest at $Y$ and sliding 4 m down to $Z$, by $v^2 = u^2 + 2a's$,"),
        m("v^2 = 0 + 2(0.955)(4)"),
        m("\\therefore \\underline{v = 2.76\\ \\text{m s}^{-1}}"),
        note("The key works the whole question with g = 10 m s⁻² and obtains a = 5.82 m s⁻², u = 6.82 m s⁻¹ and v = 2.86 m s⁻¹; with g = 9.81 m s⁻² they are 5.76 m s⁻², 6.79 m s⁻¹ and 2.76 m s⁻¹."),
      ],
    }],
  },
  // ---------------------------------------------------------------- q32
  {
    id: "q32",
    boxes: [{
      steps: [
        h("(a)"),
        t("Box (mass 4 kg): draw the weight $m_1g = 4(9.81)$\\ N vertically downwards and the normal reaction $R_1$ perpendicular to the inclined surface. The surface between the box and the wedge is smooth, so there is no friction."),
        t("Wedge (mass 20 kg): draw the weight $m_2g = 20(9.81)$\\ N vertically downwards, the reaction from the box (equal in magnitude to $R_1$, perpendicular to the slope), the normal reaction $R_2$ from the rough surface vertically upwards, and the friction $f$ along the surface to the left (the box pushes the wedge to the right)."),
        h("(b)"),
        t("Consider the direction along the inclined surface and take the direction down the surface as positive. By $F_{\\text{net}} = ma$,"),
        m("m_1g\\sin 35^\\circ = m_1a"),
        m("a = 9.81\\sin 35^\\circ"),
        m("\\therefore \\underline{a = 5.63\\ \\text{m s}^{-2}}"),
        h("(c)"),
        t("The net force on the box in the direction perpendicular to the inclined surface is zero."),
        m("R_1 = W_1\\cos 35^\\circ = 4\\times 9.81\\times\\cos 35^\\circ = 32.1\\ \\text{N}"),
        t("By Newton's third law, the magnitude of the force acting on the wedge by the box is the same:"),
        m("\\therefore \\underline{32.1\\ \\text{N}}"),
        h("(d)"),
        t("The net force acting on the wedge is zero in the horizontal direction. The horizontal component of the force from the box is balanced by friction,"),
        m("f = F_1\\sin 35^\\circ = 32.1\\sin 35^\\circ = 18.4\\ \\text{N}"),
        m("\\therefore \\underline{f = 18.4\\ \\text{N}} \\text{ to the left}"),
        h("(e)"),
        t("The net force acting on the wedge is zero in the vertical direction."),
        m("R_2 = F_1\\cos 35^\\circ + W_2 = 32.1\\cos 35^\\circ + 20\\times 9.81 = 222\\ \\text{N}"),
        t("The magnitude of the force acting on the wedge by the rough surface is the resultant of $f$ and $R_2$:"),
        m("= \\sqrt{f^2 + R_2^2} = \\sqrt{18.4^2 + 222^2}"),
        m("\\therefore \\underline{= 223\\ \\text{N}}"),
      ],
    }],
  },
  // ---------------------------------------------------------------- q33
  {
    id: "q33",
    boxes: [{
      steps: [
        h("(a)"),
        h("(i)"),
        t("On the printed figure draw the three forces acting on the block: the normal reaction $R$ perpendicular to the smooth plane, the weight $W = Mg$ vertically downwards, and the horizontal force $F$."),
        h("(ii)"),
        t("The block is in equilibrium, so resolve along and perpendicular to the plane:"),
        m("R\\cos 30^\\circ = W = Mg \\quad \\text{and} \\quad R\\sin 30^\\circ = F"),
        m("F = Mg\\tan 30^\\circ = 10\\times 9.81\\times\\tan 30^\\circ = 56.6\\ \\text{N}"),
        m("N = R = \\frac{Mg}{\\cos 30^\\circ} = \\frac{98.1}{\\cos 30^\\circ} = 113\\ \\text{N}"),
        t("By Newton's third law, the magnitude of the force exerted by the block on the incline is also 113 N."),
        t("(Equivalently: $R = W\\cos 30^\\circ + F\\sin 30^\\circ$ together with $W\\sin 30^\\circ = F\\cos 30^\\circ$.)"),
        h("(b)"),
        h("(i)"),
        t("With $F$ removed the block slides down the smooth plane. By $F_{\\text{net}} = ma$,"),
        m("mg\\sin 30^\\circ = ma \\Rightarrow a = g\\sin 30^\\circ = 9.81\\sin 30^\\circ"),
        m("\\therefore \\underline{a = 4.91\\ \\text{m s}^{-2}}"),
        h("(ii)"),
        t("The normal reaction decreases, because the component of $F$ perpendicular to the incline no longer presses the block onto the plane; only the component of the weight remains."),
      ],
    }],
  },
  // ---------------------------------------------------------------- q34
  {
    id: "q34",
    boxes: [{
      steps: [
        h("(a)"),
        t("Consider the system of the two blocks. The component of their total weight parallel to the plane is"),
        m("W_\\parallel = (2 + 3)(9.81)\\sin 30^\\circ = 24.53\\ \\text{N}"),
        t("The maximum friction available is"),
        m("f_{\\text{max}} = 0.3\\,mg\\cos 30^\\circ = 0.3(2 + 3)(9.81)\\cos 30^\\circ = 12.74\\ \\text{N}"),
        t("Adding the two does not overcome the applied force:"),
        m("f_{\\text{max}} + W_\\parallel = 12.74 + 24.53 = 37.27\\ \\text{N} > 35\\ \\text{N}"),
        m("\\therefore \\underline{\\text{the blocks remain at rest}}"),
        h("(b)"),
        t("Consider the direction parallel to the plane and take the direction up the plane as positive. For the system, by $F_{\\text{net}} = ma$,"),
        m("40 - 37.27 = (2 + 3)a"),
        m("a = 0.546\\ \\text{m s}^{-2}"),
        t("Now consider $X$. Let $T$ be the magnitude of the force acting on $X$ by $Y$. By $F_{\\text{net}} = ma$,"),
        m("40 - 2(9.81)\\sin 30^\\circ - 0.3(2)(9.81)\\cos 30^\\circ - T = 2(0.546)"),
        m("\\therefore \\underline{T = 24.0\\ \\text{N}}"),
      ],
    }],
  },
  // ---------------------------------------------------------------- q35
  {
    id: "q35",
    boxes: [{
      steps: [
        h("(a)"),
        h("(i)"),
        t("From the printed velocity-time graph the straight line runs from $(0, 0)$ to $(2\\ \\text{s}, 7.5\\ \\text{m s}^{-1})$, so the acceleration is its gradient:"),
        m("a = \\frac{7.5 - 0}{2 - 0}"),
        m("\\therefore \\underline{a = 3.75\\ \\text{m s}^{-2}}"),
        h("(ii)"),
        t("Consider the direction parallel to the plane and take the direction down the plane as positive. The only force along the plane is the component of the weight. By $F_{\\text{net}} = ma$,"),
        m("m_Xg\\sin\\theta = m_Xa"),
        m("\\sin\\theta = \\frac{a}{g} = \\frac{3.75}{9.81}"),
        m("\\therefore \\underline{\\theta = 22.5^\\circ}"),
        h("(b)"),
        h("(i)"),
        t("$X$ is held stationary by the horizontal force $F$. Consider the direction parallel to the plane:"),
        m("F\\cos\\theta = m_Xg\\sin\\theta"),
        m("F\\cos 22.5^\\circ = (5)(9.81)\\sin 22.5^\\circ"),
        m("\\therefore \\underline{F = 20.3\\ \\text{N}}"),
        h("(ii)"),
        t("Consider the direction perpendicular to the plane. The normal force acting on $X$ by the plane is"),
        m("= m_Xg\\cos\\theta + F\\sin\\theta"),
        m("= (5)(9.81)\\cos 22.5^\\circ + (20.3)\\sin 22.5^\\circ = 53.1\\ \\text{N}"),
        t("By Newton's third law of motion, the magnitude of the force exerted by $X$ on the inclined plane is the same:"),
        m("\\therefore \\underline{53.1\\ \\text{N}}"),
        h("(iii)"),
        t("The minimum value of $F$ required to hold $X$ stationary will be smaller. On a rough plane the friction acts up the plane, i.e. against the tendency of motion of $X$ down the plane, so it helps to support $X$ and less force $F$ is needed."),
        h("(c)"),
        t("Consider the system of $X$ and $Y$. The string is inextensible and the pulley is smooth, so both blocks have the same magnitude of acceleration; $Y$ descends and $X$ moves up the plane. By $F_{\\text{net}} = ma$,"),
        m("m_Yg - m_Xg\\sin\\theta = (m_X + m_Y)a"),
        m("(3)(9.81) - (5)(9.81)\\sin 22.5^\\circ = (5 + 3)a"),
        m("\\therefore \\underline{a = 1.33\\ \\text{m s}^{-2}} \\text{, with } X \\text{ moving up the plane}"),
      ],
    }],
  },
]
