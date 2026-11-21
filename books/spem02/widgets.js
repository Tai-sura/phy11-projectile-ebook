/**
 * Interactive graphics for this book, opened from a question's graphic button.
 * Build them from the shared kit; house rules are in docs/03-authoring-style.md.
 * books/phy06-force2/widgets.js has two worked examples (q9 tension triangle,
 * q35 incline bench).
 *
 * Nothing is registered yet: the skeleton's demo widget was removed so no
 * question shows a graphic button that has nothing to do with this book.
 */

const REGISTRY = {};

export function hasGraphic(id) {
  return Boolean(REGISTRY[id]);
}

export function mountGraphic(id, root) {
  REGISTRY[id]?.(root);
}
