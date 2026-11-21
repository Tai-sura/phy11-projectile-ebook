/**
 * Worked solutions for SPEM02 Electric Circuits (S5).
 * Method follows the teacher's red-boxed working in the ANS key
 * (reference/ans_pages/). Field reference: docs/02-book-format.md.
 * House style: docs/03-authoring-style.md.
 */

import { m, t, h, note, nl, L, lk } from "../../engine/authoring.js";

export const SOLUTIONS = [
  // ---------------------------------------------------------------- q1
  {
    id: "q1",
    boxes: [{
      steps: [
        t("Current is the rate of flow of charge, $I = \\dfrac{Q}{t}$, so $Q = It$."),
        m("t = 10\\ \\text{min} = 10\\times 60 = 600\\ \\text{s}"),
        m("Q = It = (0.5)(600)"),
        m("= \\underline{300\\ \\text{C}}"),
        t("The key also records the number of electrons that this charge carries:"),
        m("Q = Ne \\Rightarrow N = \\frac{Q}{e} = \\frac{300}{1.6\\times 10^{-19}}"),
        m("= \\underline{1.875\\times 10^{21}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q2
  {
    id: "q2",
    boxes: [{
      steps: [
        t("The rating $1800\\ \\text{mA h}$ is the charge the battery can deliver:"),
        m("1800\\ \\text{mA h} = 1.8\\ \\text{A h}"),
        t("The current is constant, so $Q = It$ gives"),
        m("\\text{Time} = \\frac{Q}{I} = \\frac{1.8}{0.4}"),
        m("= \\underline{4.5\\ \\text{h}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q3
  {
    id: "q3",
    boxes: [{
      steps: [
        t("The potential difference is the energy delivered per unit charge, $V = \\dfrac{E}{Q}$, so $Q = \\dfrac{E}{V}$."),
        m("Q = \\frac{E}{V} = \\frac{12}{3}"),
        m("= \\underline{4\\ \\text{C}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q4
  {
    id: "q4",
    boxes: [{
      steps: [
        h("(a)"),
        t("The slope of a straight $V$–$I$ line is the resistance."),
        m("R_X = \\frac{5}{10} = \\underline{0.5\\ \\Omega}", "at 10 A, 5 V on the line of X"),
        h("(b)"),
        m("R_Y = \\frac{1}{2}(0.5) = \\underline{0.25\\ \\Omega}"),
        t("Sketch a straight line from the origin, labelled $Y$:"),
        t("half the slope of $X$, through ($20\\ \\text{A}$, $5\\ \\text{V}$)."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q5
  {
    id: "q5",
    letter: "D",
    boxes: [{
      steps: [
        t("The device does not obey Ohm's law, but the resistance is still $R = \\dfrac{V}{I}$."),
        m("R_1 = \\frac{1}{1} = 1\\ \\Omega", "at 1 V, I = 1 A"),
        m("R_2 = \\frac{2}{5} = 0.4\\ \\Omega", "at 2 V, I = 5 A"),
        m("\\Delta R = \\frac{2}{5} - \\frac{1}{1}"),
        m("= \\underline{-0.6\\ \\Omega}"),
        t("The resistance decreases by $0.6\\ \\Omega$."),
        m("\\therefore \\text{The answer is } \\underline{\\text{D}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q6
  {
    id: "q6",
    letter: "C",
    boxes: [{
      steps: [
        t("For $V$ below 12 V the graph is a straight line through the origin, so $R$ is constant:"),
        m("R = \\frac{12}{3} = 4\\ \\Omega", "A is correct"),
        t("Above 12 V the line is steeper, so the resistance falls:"),
        m("R = \\frac{14}{7} = 2\\ \\Omega", "B and D are correct"),
        t("At $I = 5\\ \\text{A}$ the reading is on the second part of the graph:"),
        m("V = 12 + \\frac{5-3}{7-3}(14-12) = 13\\ \\text{V}"),
        m("R = \\frac{13}{5} = 2.6\\ \\Omega \\ne 0.5\\ \\Omega"),
        t("So statement C is incorrect."),
        m("\\therefore \\text{The answer is } \\underline{\\text{C}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q7
  {
    id: "q7",
    boxes: [{
      steps: [
        t("As the applied voltage $V$ increases,"),
        t("the current $I$ increases."),
        t("This raises the filament's temperature,"),
        t("so the resistance $R$ of the filament / bulb increases."),
        t("Or, in terms of the carriers: the electrons collide with"),
        t("the increasingly vibrating atoms / lattice ions of the filament,"),
        t("which impede their flow, i.e. $R$ increases."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q8
  {
    id: "q8",
    boxes: [{
      steps: [
        t("The diameter is 1 mm, so the radius is $0.5\\ \\text{mm} = 0.0005\\ \\text{m}$."),
        m("A = \\pi r^2 = \\pi(0.0005)^2"),
        m("= 7.854\\times 10^{-7}\\ \\text{m}^2"),
        m("R = \\rho\\frac{l}{A}\\ \\Rightarrow\\ 5.60\\times 10^{-4} = \\rho\\frac{2}{\\pi(0.0005)^2}"),
        m("\\rho = \\frac{(5.60\\times 10^{-4})\\pi(0.0005)^2}{2}"),
        m("= \\underline{2.20\\times 10^{-10}\\ \\Omega\\ \\text{m}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q9
  {
    id: "q9",
    boxes: [{
      steps: [
        h("(a)"),
        t("Length $l = 70\\ \\text{cm} = 0.7\\ \\text{m}$,"),
        t("radius $r = 0.5\\ \\text{mm} = 0.0005\\ \\text{m}$."),
        m("A = \\pi r^2 = \\pi(0.0005)^2 = 7.854\\times 10^{-7}\\ \\text{m}^2"),
        m("R = \\rho\\frac{l}{A}\\ \\Rightarrow\\ \\rho = \\frac{RA}{l}"),
        m("= \\frac{(0.6)\\pi(0.0005)^2}{0.7}"),
        m("= \\underline{6.73\\times 10^{-7}\\ \\Omega\\ \\text{m}}"),
        h("(b)"),
        t("Halving the length halves the resistance:"),
        m("R' = \\frac{0.6}{2} = \\underline{0.3\\ \\Omega}"),
        t("Resistivity is a property of the metal,"),
        t("so it does not change:"),
        m("\\rho = \\underline{6.73\\times 10^{-7}\\ \\Omega\\ \\text{m}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q10
  {
    id: "q10",
    boxes: [{
      steps: [
        h("(a)"),
        t("The question asks about one strand,"),
        t("so the 40 strands are not used here."),
        m("\\rho = \\frac{RA}{l}\\ \\Rightarrow\\ \\frac{R}{l} = \\frac{\\rho}{A}"),
        m("\\frac{R}{l} = \\frac{2.6\\times 10^{-8}}{1.3\\times 10^{-5}}"),
        m("= 2.0\\times 10^{-3}\\ \\Omega\\ \\text{m}^{-1}"),
        m("= \\underline{2.0\\ \\Omega\\ \\text{km}^{-1}}", "i.e. 2.0 Ω for each km"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q11
  {
    id: "q11",
    boxes: [{
      steps: [
        t("For the same length, volume $\\propto$ mass,"),
        t("so the cross-section area $A \\propto m$."),
        m("R = \\rho\\frac{l}{A}\\ \\Rightarrow\\ R \\propto \\frac{1}{A} \\propto \\frac{1}{m}"),
        m("\\frac{R_A}{R_B} = \\frac{m_B}{m_A} = \\frac{9}{4}"),
        m("\\therefore R_A : R_B = \\underline{9 : 4}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q12
  {
    id: "q12",
    boxes: [{
      steps: [
        m("\\text{(a) } 3\\,\\text{V}/8\\,\\Omega = \\underline{0.375\\ \\text{A}}"),
        m("\\text{(b) } 3\\,\\text{V}/2\\,\\Omega = \\underline{1.5\\ \\text{A}}"),
        m("\\text{(c) } 1.5\\,\\text{V}/8\\,\\Omega = \\underline{0.1875\\ \\text{A}}"),
        m("\\text{(d) } 1.5\\,\\text{V}/2\\,\\Omega = \\underline{0.75\\ \\text{A}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q13
  // The ANS page 6 carries NO answer for this question (checked at full size: the page is the
  // printed question only, no red box, no handwriting). The eight values below are from ordinary
  // series/parallel working; approved by the user on 2026-11-21 (keep the values, note that the
  // ANS page has no answer). Recorded in docs/chapters/spem02.md.
  {
    id: "q13",
    boxes: [{
      steps: [
        note("ANS page 6 has no answer — these values are from calculation."),
        m("\\text{(a) } 2+2 = \\underline{4\\ \\Omega}"),
        m("\\text{(b) } 2+4 = \\underline{6\\ \\Omega}"),
        m("\\text{(c) } 2R+2R = \\underline{4R}"),
        m("\\text{(d) } 20R+40R = \\underline{60R}"),
        m("\\text{(e) } 2\\parallel 2 = \\underline{1\\ \\Omega}"),
        m("\\text{(f) } 2R\\parallel 2R = \\underline{R}"),
        m("\\text{(g) } 5+(2\\parallel 2) = \\underline{6\\ \\Omega}"),
        m("\\text{(h) } (2\\parallel 2)+(2\\parallel 2) = \\underline{2\\ \\Omega}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q14
  {
    id: "q14",
    boxes: [{
      steps: [
        t("The two resistors are in parallel,"),
        t("so each branch has the full 6 V."),
        m("I_1 = \\frac{6}{1} = \\underline{6\\ \\text{A}}"),
        m("I_2 = \\frac{6}{2} = \\underline{3\\ \\text{A}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q15
  {
    id: "q15",
    boxes: [{
      steps: [
        t("Take the two parallel paths:"),
        m("\\text{(a) } R_{AB} = (2+2)\\parallel(2+2) = \\underline{2\\ \\Omega}"),
        m("\\text{(b) } R_{AB} = 2\\parallel(2+2+2) = \\underline{1.5\\ \\Omega}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q16
  {
    id: "q16",
    boxes: [{
      steps: [
        m("\\text{(a)(i) } 3+6 = \\underline{9\\ \\Omega}"),
        m("\\text{(ii) } I = 9/9 = 1\\ \\text{A},\\ V_6 = \\underline{6\\ \\text{V}}"),
        m("\\text{(b)(i) } \\frac{1}{1/3+1/6} = \\underline{2\\ \\Omega}"),
        m("\\text{(ii) } 9/6 = \\underline{1.5\\ \\text{A}}"),
        m("\\text{(iii) } 9/2 = \\underline{4.5\\ \\text{A}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q17
  {
    id: "q17",
    boxes: [{
      steps: [
        m("\\text{(a) } 8+(6\\parallel 12) = 8+4 = \\underline{12\\ \\Omega}"),
        m("\\text{(b) } 12/12 = \\underline{1\\ \\text{A}}"),
        m("\\text{(c) } 1\\times 8 = \\underline{8\\ \\text{V}}"),
        m("\\text{(d) } 12-8 = \\underline{4\\ \\text{V}}"),
        m("\\text{(e)(i) } 4/6 = \\underline{0.667\\ \\text{A}}"),
        m("\\text{(e)(ii) } 4/12 = \\underline{0.333\\ \\text{A}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q18
  {
    id: "q18",
    boxes: [{
      steps: [
        m("\\text{(a) } \\frac{1}{R_{ABC}} = \\frac{1}{1+2}+\\frac{1}{6}\\Rightarrow R_{ABC} = 2\\ \\Omega"),
        m("R = 2+4 = \\underline{6\\ \\Omega}"),
        m("\\text{(b) } I_D = 9/6 = 1.5\\ \\text{A}"),
        m("V_C = IR = 1.5\\times 2 = \\underline{3\\ \\text{V}}"),
        m("\\text{(c) } I_A = 3/(1+2) = \\underline{1\\ \\text{A}}"),
        t("$E$ in parallel with $C$ lowers the equivalent resistance,"),
        t("so the total resistance drops and $I_D$ increases."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q19
  {
    id: "q19",
    boxes: [{
      steps: [
        h("(a)"),
        t("$S$ is open, so $R_2$ is not connected."),
        m("R_3\\parallel R_4 = \\frac{1}{1/3+1/3} = 1.5\\ \\Omega"),
        m("R_{AD} = 3+1.5 = \\underline{4.5\\ \\Omega}"),
        h("(b)"),
        t("$S$ closed: $R_2$ is in parallel with $R_3\\parallel R_4$."),
        m("\\frac{1}{R_p} = \\frac{1}{3}+\\frac{1}{1.5}\\Rightarrow R_p = 1\\ \\Omega"),
        m("R_{AD} = 3+1 = \\underline{4\\ \\Omega}"),
        h("(c)"),
        m("I = \\frac{12}{4} = 3\\ \\text{A}"),
        m("V_{R_1} = 3\\times 3 = \\underline{9\\ \\text{V}}"),
        h("(d)"),
        t("$C$ and $D$ are on the same bottom wire,"),
        m("V_{AC} = \\underline{12\\ \\text{V}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q20
  {
    id: "q20",
    letter: "A",
    boxes: [{
      steps: [
        t("In series the current is the same in every resistor:"),
        m("I_X : I_Y : I_Z = \\underline{1 : 1 : 1}"),
        m("V_X : V_Y : V_Z = (1)(1) : (1)(2) : (1)(3)"),
        m("= \\underline{1 : 2 : 3}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{A}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q21
  {
    id: "q21",
    letter: "D",
    boxes: [{
      steps: [
        t("In parallel the p.d. is the same across every resistor:"),
        m("V_X : V_Y : V_Z = \\underline{1 : 1 : 1}"),
        m("I_X : I_Y : I_Z = \\frac{1}{2} : \\frac{1}{3} : \\frac{1}{4}"),
        m("= \\underline{6 : 4 : 3}"),
        m("\\therefore \\text{The answer is } \\underline{\\text{D}}."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q22
  {
    id: "q22",
    letter: "D",
    boxes: [{
      steps: [
        m("I_2 = \\underline{2\\ \\text{A}}"),
        m("I_3 = \\underline{3\\ \\text{A}}"),
        m("\\therefore \\underline{\\text{D}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q23
  {
    id: "q23",
    letter: "C",
    boxes: [{
      steps: [
        m("I = \\frac{10}{8+2} = \\underline{1\\ \\text{A}}"),
        m("\\therefore \\underline{\\text{C}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q24
  {
    id: "q24",
    letter: "C",
    boxes: [{
      steps: [
        m("R' = 6\\parallel 6 = 3\\ \\Omega"),
        m("I = 0.3\\times 2 = 0.6\\ \\text{A}"),
        m("V = 0.6(3+12) = \\underline{9.0\\ \\text{V}}"),
        m("\\therefore \\underline{\\text{C}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q25
  {
    id: "q25",
    letter: "B",
    boxes: [{
      steps: [
        m("I = I_1+I_2 = 1+I_2"),
        m("I_2(3)+I(6) = 12"),
        m("3I_2+(1+I_2)(6) = 12"),
        m("9I_2 = 6"),
        m("I_2 = \\underline{\\tfrac{2}{3}\\ \\text{A}}"),
        m("\\therefore \\underline{\\text{B}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q26
  {
    id: "q26",
    letter: "B",
    boxes: [{
      steps: [
        m("R = 4+\\frac{(3+1)(4)}{(3+1)+4} = 6\\ \\Omega"),
        m("I_{XY} = \\frac{6}{6}\\times\\frac{1}{2} = 0.5\\ \\text{A}"),
        m("V_{XY} = 3(0.5) = \\underline{1.5\\ \\text{V}}"),
        m("\\therefore \\underline{\\text{B}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q27
  {
    id: "q27",
    letter: "B",
    boxes: [{
      steps: [
        t("Let $r$ be the resistance of each resistor."),
        m("R_{XY} = (r^{-1}+r^{-1})^{-1} = \\frac{r}{2}"),
        m("R_{\\text{lower}} = r+\\frac{r}{2} = \\frac{3r}{2}"),
        m("I = \\frac{9}{3r/2} = \\frac{6}{r}"),
        m("V_{XY} = \\frac{6}{r}\\cdot\\frac{r}{2} = \\underline{3.0\\ \\text{V}}"),
        m("\\therefore \\underline{\\text{B}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q28
  {
    id: "q28",
    letter: "B",
    boxes: [{
      steps: [
        t("$N$ and $M$ are shorted together:"),
        m("R_{AN} = \\frac{R}{2},\\quad R_{NB} = R"),
        m("R_{\\text{total}} = 1.5R"),
        m("V_{NB} = IR = \\frac{E}{1.5R}R = \\frac{2E}{3} = 8\\ \\text{V}"),
        m("\\Rightarrow E = 12\\ \\text{V}"),
        t("(b) The voltmeter draws no current, so:"),
        m("V_N = V_A = E,\\quad V_M = \\frac{E}{2}"),
        m("V_{NM} = E-\\frac{E}{2} = \\underline{6\\ \\text{V}}"),
        m("\\therefore \\underline{\\text{B}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q29
  {
    id: "q29",
    letter: "B",
    boxes: [{
      steps: [
        t("At zero the variable resistor short-circuits the bulb:"),
        t("all the current passes through the variable resistor,"),
        t("so no current passes through the bulb and it will not light up."),
        m("\\therefore \\underline{\\text{B}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q30
  {
    id: "q30",
    letter: "B",
    boxes: [{
      steps: [
        t("$S$ open: the voltmeter is across the left resistor,"),
        m("V = 6\\times\\frac{r}{r+r} = \\underline{3\\ \\text{V}}"),
        t("$S$ closed: it reads across the battery,"),
        m("V = \\underline{6\\ \\text{V}}"),
        m("\\therefore \\underline{\\text{B}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q31
  {
    id: "q31",
    letter: "D",
    boxes: [{
      steps: [
        t("The meter reads the whole e.m.f. only if no p.d. is lost across $Q$:"),
        m("V_Q = 0\\Rightarrow Q \\text{ is short-circuited}"),
        t("$P$ cannot be short-circuited, or the meter across $P$ would read zero."),
        t("So $P$ may be burnt out (open) and $Q$ short-circuited."),
        m("\\therefore \\underline{\\text{D}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q32
  {
    id: "q32",
    letter: "C",
    boxes: [{
      steps: [
        t("An ideal meter reads 6 V (the e.m.f.) only when it is"),
        t("in series with everything else, i.e. no current flows:"),
        t("so $X$ is faulty and becomes an open circuit."),
        m("\\therefore \\underline{\\text{C}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q33
  {
    id: "q33",
    letter: "D",
    boxes: [{
      steps: [
        m("I = \\frac{3-1}{2+4} = 0.33\\ \\text{A}\\ (X\\to Y)"),
        m("V_{XY} = 4(0.33)+1 = \\underline{2.33\\ \\text{V}}"),
        m("\\therefore \\underline{\\text{D}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q33b
  {
    id: "q33b",
    boxes: [{
      steps: [
        m("R = \\frac{1\\times 4}{1+4}+\\frac{2\\times 3}{2+3}"),
        m("= 0.8+1.2 = \\underline{2\\ \\Omega}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q34
  {
    id: "q34",
    boxes: [{
      steps: [
        m("R_{3,4,5} = \\left(\\frac{1}{3+4}+\\frac{1}{5}\\right)^{-1} = 2.92\\ \\Omega"),
        m("R_{BD} = \\left(\\frac{1}{2.92}+\\frac{1}{1+2}\\right)^{-1}"),
        m("= \\underline{1.32\\ \\Omega}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q35
  {
    id: "q35",
    boxes: [{
      steps: [
        h("(a)"),
        m("R_1\\parallel R_3 = \\frac{2}{2} = 1\\ \\Omega"),
        m("R_{eq} = \\frac{(1+2)\\times 2}{(1+2)+2} = \\underline{1.2\\ \\Omega}"),
        h("(b)"),
        m("\\frac{1}{R_{eq}} = \\frac{1}{2+2}+\\frac{1}{2}+\\frac{1}{2+2}"),
        m("R_{eq} = \\underline{1\\ \\Omega}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q36
  {
    id: "q36",
    boxes: [{
      steps: [
        h("(a)"),
        t("The three 12 Ω resistors have the same potential"),
        t("at both ends, so they are all in parallel:"),
        m("R_{PQ} = \\frac{12}{3} = \\underline{4\\ \\Omega}"),
        h("(b)"),
        t("The network can be redrawn as $1\\parallel 1\\parallel 1\\parallel 2$:"),
        m("\\frac{1}{R} = \\frac{1}{1}+\\frac{1}{1}+\\frac{1}{1}+\\frac{1}{2}"),
        m("R = \\underline{\\tfrac{2}{7}\\ \\Omega}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q37
  {
    id: "q37",
    letter: "B",
    boxes: [{
      steps: [
        t("Across $a$ and $b$ the resistance is 6 Ω,"),
        t("so the rest of the network is $12\\ \\Omega$."),
        t("Replace the 12 Ω resistor by 6 Ω:"),
        m("R_{ab} = \\frac{6\\times 12}{6+12} = \\underline{4\\ \\Omega}"),
        m("\\therefore \\underline{\\text{B}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q38
  {
    id: "q38",
    letter: "A",
    boxes: [{
      steps: [
        m("R_{XY} = \\left(\\frac{1}{15}+\\frac{1}{10}\\right)^{-1} = 6\\ \\Omega", "two 10 Ω ∥ = 5, then +10"),
        m("I = \\frac{12}{6} = 2\\ \\text{A}"),
        t("By symmetry one fifth of it goes through $R$:"),
        m("I_R = \\frac{2}{5} = \\underline{0.4\\ \\text{A}}"),
        m("\\therefore \\underline{\\text{A}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q39
  {
    id: "q39",
    letter: "A",
    boxes: [{
      steps: [
        m("R_{AB} = \\frac{2\\times 2}{2+2} = 1\\ \\Omega"),
        m("R_{CD} = \\frac{2\\times 2}{2+2} = 1\\ \\Omega"),
        m("R_{PQ} = \\frac{2\\times 2}{2+2} = \\underline{1\\ \\Omega}"),
        m("\\therefore \\underline{\\text{A}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q40
  {
    id: "q40",
    boxes: [{
      steps: [
        t("Connect $A$ and $C$, so the current uses the whole wire."),
        t("(1) $A$ and $B$: move the sliding contact towards $B$."),
        t("(2) $B$ and $C$: move the sliding contact towards $A$."),
      ],
    }],
  },

  // ---------------------------------------------------------------- q41
  {
    id: "q41",
    letter: "B",
    boxes: [{
      steps: [
        m("R_{AX} = R_{XB} = 5\\ \\Omega"),
        m("R_p = \\frac{5\\times 10}{5+10} = 3.33\\ \\Omega"),
        m("V_{AX} = 10\\times\\frac{3.33}{3.33+5} = \\underline{4.0\\ \\text{V}}"),
        m("\\therefore \\underline{\\text{B}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q42
  {
    id: "q42",
    letter: "A",
    boxes: [{
      steps: [
        m("R = \\frac{12}{0.3} = 40\\ \\Omega"),
        m("R_{\\text{rheostat}} = 40-10 = 30\\ \\Omega"),
        m("\\frac{PX}{XQ} = \\frac{30}{50-30} = \\underline{3:2}"),
        m("\\therefore \\underline{\\text{A}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q43
  {
    id: "q43",
    letter: "C",
    boxes: [{
      steps: [
        t("An ideal voltmeter draws no current, so no current flows through $AS$"),
        t("and there is no p.d. across $AS$."),
        t("It always reads the battery voltage, i.e. a constant 3 V."),
        m("\\therefore \\underline{\\text{C}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q44
  {
    id: "q44",
    letter: "C",
    boxes: [{
      steps: [
        t("At $P$ or $Q$ the parallel branch has zero resistance,"),
        t("so the current is largest."),
        t("At the mid-way its resistance is non-zero, so the current is smaller."),
        t("The reading therefore decreases and then increases."),
        m("\\therefore \\underline{\\text{C}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q45
  {
    id: "q45",
    letter: "A",
    boxes: [{
      steps: [
        m("R_{12} = \\frac{R_1R_2}{R_1+R_2} = R_2\\frac{R_1}{R_1+R_2}"),
        t("$R_1$ up $\\Rightarrow R_{12}$ up $\\Rightarrow$ total $R$ up $\\Rightarrow A_3$ decreases."),
        t("The p.d. across the parallel part rises, so $A_2$ increases."),
        t("$A_1 = A_3-A_2$ falls, so $A_1$ decreases."),
        m("\\therefore \\underline{\\text{A}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q46
  {
    id: "q46",
    boxes: [{
      steps: [
        h("(a)"),
        m("I = \\frac{12}{5+2+3} = \\underline{1.2\\ \\text{A}}"),
        h("(b)"),
        m("V_D = 0-1.2\\times 3 = \\underline{-3.6\\ \\text{V}}"),
        h("(c)"),
        m("V_B = 0+1.2\\times 2 = \\underline{2.4\\ \\text{V}}"),
        h("(d)"),
        m("V_+ = 2.4+1.2\\times 5 = \\underline{8.4\\ \\text{V}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q47
  {
    id: "q47",
    letter: "D",
    boxes: [{
      steps: [
        t("$S$ open: p.d. across the 2 Ω resistor is 2 V,"),
        m("V_P = \\underline{+2\\ \\text{V}}"),
        t("$S$ closed: p.d. across the 2 Ω resistor is 3 V,"),
        m("V_P = \\underline{+3\\ \\text{V}}"),
        m("\\therefore \\underline{\\text{D}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q48
  {
    id: "q48",
    letter: "D",
    boxes: [{
      steps: [
        t("$S$ closed: $R_3$ parallel,"),
        t("total R falls,"),
        t("p.d. on $R_2$ falls,"),
        t("so its current falls."),
        t("D says it rises: wrong."),
        m("\\therefore \\underline{\\text{D}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q49
  {
    id: "q49",
    letter: "D",
    boxes: [{
      steps: [
        t("(1) wrong: the ammeter also carries the voltmeter current."),
        t("(2) correct: the voltmeter is in parallel with $R$."),
        t("(3) correct: $R = V/I$, and $I$ is too large, so it reads small."),
        m("\\therefore \\underline{\\text{D}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q50
  {
    id: "q50",
    letter: "C",
    boxes: [{
      steps: [
        t("(1) correct: the ammeter also carries the voltmeter current."),
        t("(2) correct: $V/I_{\\text{ammeter}}$ is smaller than $R$."),
        t("(3) wrong: this arrangement suits a small resistance."),
        m("\\therefore \\underline{\\text{C}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q51
  {
    id: "q51",
    letter: "A",
    boxes: [{
      steps: [
        t("0.6 A"),
        m("R = 15\\ \\Omega"),
        m("r = 15-13"),
        m("= \\underline{2\\ \\Omega}"),
        m("9(3/15)"),
        m("= \\underline{1.8\\ \\text{V}}"),
        m("\\therefore \\underline{\\text{A}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q52
  {
    id: "q52",
    letter: "B",
    boxes: [{
      steps: [
        m("R_{3,6} = (3^{-1}+6^{-1})^{-1} = 2\\ \\Omega"),
        m("V_{\\text{terminal}} = 12\\times\\frac{2}{2+2} = 6\\ \\text{V}"),
        m("I_6 = \\frac{6}{6} = \\underline{1\\ \\text{A}}"),
        m("\\therefore \\underline{\\text{B}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q53
  {
    id: "q53",
    letter: "A",
    boxes: [{
      steps: [
        m("V_9 = 0.4\\times 9 = 3.6\\ \\text{V}"),
        m("V_{15+\\text{batt}} = 12-3.6 = 8.4\\ \\text{V}"),
        m("I_{\\text{cell}} = \\frac{8.4}{15+2} = 0.494\\ \\text{A}"),
        m("I_X = 0.494-0.4 = 0.094\\ \\text{A}"),
        m("R_X = \\frac{3.6}{0.094} = \\underline{38\\ \\Omega}"),
        m("\\therefore \\underline{\\text{A}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q54
  {
    id: "q54",
    letter: "B",
    boxes: [{
      steps: [
        m("\\varepsilon = 0.214(10+r)"),
        m("\\varepsilon = 0.125(r+20)"),
        m("0.214(10+r) = 0.125(r+20)"),
        m("0.089r = 0.36"),
        m("r = \\underline{4.04\\ \\Omega}"),
        m("\\therefore \\underline{\\text{B}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q55
  {
    id: "q55",
    letter: "C",
    boxes: [{
      steps: [
        t("$S$ closed: the 3 Ω resistor is shorted,"),
        m("\\varepsilon = 3(6+r)"),
        t("$S$ open: the total resistance is $9+r$,"),
        m("\\varepsilon = I(9+r)"),
        m("3(6+r) = I(9+r)"),
        t("Only $I = 2.4$ A gives a positive $r$:"),
        m("3(6+r) = 2.4(9+r)\\Rightarrow r = 6\\ \\Omega"),
        m("\\therefore \\underline{\\text{C}}"),
      ],
    }],
  },

  // ---------------------------------------------------------------- q56
  {
    id: "q56",
    boxes: [{
      steps: [
        h("(a)"),
        m("\\varepsilon = V+Ir\\Rightarrow V = \\varepsilon-Ir"),
        h("(b)"),
        t("The graph is a straight line: intercept $\\varepsilon$, slope $-r$."),
        m("\\varepsilon = \\underline{1.6\\ \\text{V}}"),
        m("r = \\frac{1.6-0.4}{0.300} = \\underline{4\\ \\Omega}"),
      ],
    }],
  },
  // ---------------------------------------------------------------- q57
  {
    id: "q57",
    boxes: [{
      steps: [
        h("(a)"),
        m("V_6 = IR = 3.6\\times 6 = \\underline{21.6\\ \\text{V}}"),
        h("(b)"),
        m("V_A = 23.4-21.6 = 1.8\\ \\text{V}"),
        m("R_A = \\frac{1.8}{3.6} = \\underline{0.5\\ \\Omega}"),
        h("(c)(i)"),
        m("\\frac{1}{R_{eq}} = \\frac{1}{6}+\\frac{1}{R_V}"),
        m("R_{eq} = \\left(\\frac{1}{6}+\\frac{1}{R_V}\\right)^{-1}"),
        h("(ii)"),
        m("21.6 = 3.66\\left(\\frac{1}{6}+\\frac{1}{R_V}\\right)^{-1}"),
        m("R_V = \\underline{360\\ \\Omega}"),
        h("(iii)"),
        m("V_r = 24-21.6-3.66(0.5) = 0.57\\ \\text{V}"),
        m("r = \\frac{0.57}{3.66} = \\underline{0.156\\ \\Omega}"),
      ],
    }],
  },
];