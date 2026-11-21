/**
 * Interactive graphics for this book, opened from a question's graphic button.
 * Build them from the shared kit; house rules are in docs/03-authoring-style.md.
 * books/jm26b/widgets.js has many worked examples (sliders, number lines,
 * bar models, MC checkers).
 *
 * Nothing is registered yet: the template's marble example (from the mathematics
 * template) was shipped by mistake and showed an inequality question inside a
 * moment-of-force book. A real q1 graphic — tau = F d, with the moment arm
 * measured perpendicular to the force — belongs here.
 */

import { C, T, scene, clear, bar, slider, readout, question, buttonRow } from "../../engine/widgets/kit.js";

const REGISTRY = {};

export function hasGraphic(id) {
  return Boolean(REGISTRY[id]);
}

export function mountGraphic(id, root) {
  REGISTRY[id]?.(root);
}
