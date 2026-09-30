/**
 * A trapezoidal load that covers part of an element rather than all of it.
 *
 * Everything here is exact rather than sampled: the intensity is linear, so every integral the beam
 * asks for - the work-equivalent nodal load, the shear and moment it carries at a section, the
 * deflection of the clamped beam under it - is a polynomial, and polynomials are integrated once
 * and written down.
 *
 * Positions are distances from the element's first node, in the element's own length units, and
 * the two intensities belong to the two ends of the load itself, not of the element.
 */

export interface PartialSpan {
  /** Where the load starts, measured from the first node. */
  a: number;
  /** Where it ends. */
  b: number;
  /** Intensity at `a`. */
  q0: number;
  /** Intensity at `b`. */
  q1: number;
}

/** Shorter than this and there is nothing to integrate: a load of no length carries nothing. */
const NOTHING = 1e-12;

/** `<x>`: the part of x that is positive, which is how a load that starts partway is written. */
const ramp = (value: number) => (value > 0 ? value : 0);

/** The slope of the intensity, per unit length. */
const rate = (span: PartialSpan) => (span.q1 - span.q0) / (span.b - span.a);

export const isEmpty = (span: PartialSpan) => !(span.b - span.a > NOTHING);

/**
 * `∫ x^n q(x) dx` over the loaded part.
 *
 * The one integral everything else is built from: the resultant is n = 0, where it acts is n = 1,
 * and the work-equivalent nodal loads are the shape functions' coefficients against n = 0 to 3.
 */
export const loadMoment = (span: PartialSpan, n: number): number => {
  if (isEmpty(span)) return 0;

  const k = rate(span);
  // q(x) written about the element's origin rather than about the load's start
  const constant = span.q0 - k * span.a;
  const { a, b } = span;

  return (
    (constant * (Math.pow(b, n + 1) - Math.pow(a, n + 1))) / (n + 1) +
    (k * (Math.pow(b, n + 2) - Math.pow(a, n + 2))) / (n + 2)
  );
};

/** What the load adds up to, and where it acts - useful on its own and in the tests. */
export const resultant = (span: PartialSpan) => ({
  force: loadMoment(span, 0),
  firstMoment: loadMoment(span, 1),
});

/** `∫ q dx` from the first node up to x: what the section at x carries of the load. */
export const forceUpTo = (span: PartialSpan, x: number): number => {
  if (isEmpty(span)) return 0;

  const upTo = Math.min(Math.max(x, span.a), span.b);

  return loadMoment({ ...span, b: upTo, q1: intensityAt(span, upTo) }, 0);
};

/** `∫ (x - s) q(s) ds` from the first node up to x: the moment of what it carries, about x. */
export const momentUpTo = (span: PartialSpan, x: number): number => {
  if (isEmpty(span)) return 0;

  const upTo = Math.min(Math.max(x, span.a), span.b);
  const part = { ...span, b: upTo, q1: intensityAt(span, upTo) };

  return loadMoment(part, 0) * x - loadMoment(part, 1);
};

/** The intensity at a point of the loaded part; outside it, the value of the nearer end. */
export const intensityAt = (span: PartialSpan, x: number): number => {
  if (isEmpty(span)) return 0;

  const at = Math.min(Math.max(x, span.a), span.b);

  return span.q0 + rate(span) * (at - span.a);
};

/**
 * The work-equivalent nodal loads, `∫ N_i q dx`, with the beam's own shape functions.
 *
 * Transverse: the two Hermite pairs. Axial: the two linear ones. These are the integrals, with no
 * sign convention applied - the load class decides which of them it wants negated.
 */
export const shapeFunctionIntegrals = (span: PartialSpan, l: number) => {
  const m0 = loadMoment(span, 0);
  const m1 = loadMoment(span, 1);
  const m2 = loadMoment(span, 2);
  const m3 = loadMoment(span, 3);

  return {
    /** deflection at the first node */
    w1: m0 - (3 * m2) / (l * l) + (2 * m3) / (l * l * l),
    /** rotation at the first node */
    r1: m1 - (2 * m2) / l + m3 / (l * l),
    /** deflection at the second node */
    w2: (3 * m2) / (l * l) - (2 * m3) / (l * l * l),
    /** rotation at the second node */
    r2: -m2 / l + m3 / (l * l),
    /** axial, at the first and the second node */
    u1: m0 - m1 / l,
    u2: m1 / l,
  };
};

/**
 * The beam clamped at both ends, carrying this load and nothing else.
 *
 * `EI w'''' = q` integrated four times, with the two brackets that switch the load on at `a` and
 * off again at `b`; the ends held still fix the four constants. Returned multiplied by EI, so the
 * caller divides by the stiffness it knows.
 */
const clamped = (span: PartialSpan, l: number) => {
  const k = rate(span);
  const { a, b, q0, q1 } = span;

  // the particular integral: the load switched on at a, and the same load switched off again at b
  const p = (x: number) =>
    (q0 * Math.pow(ramp(x - a), 4)) / 24 +
    (k * Math.pow(ramp(x - a), 5)) / 120 -
    (q1 * Math.pow(ramp(x - b), 4)) / 24 -
    (k * Math.pow(ramp(x - b), 5)) / 120;

  const dp = (x: number) =>
    (q0 * Math.pow(ramp(x - a), 3)) / 6 +
    (k * Math.pow(ramp(x - a), 4)) / 24 -
    (q1 * Math.pow(ramp(x - b), 3)) / 6 -
    (k * Math.pow(ramp(x - b), 4)) / 24;

  // nothing at the first node, because both brackets are still shut there; the far end fixes these
  const A = p(l);
  const B = dp(l);
  const c3 = (12 * A) / (l * l * l) - (6 * B) / (l * l);
  const c2 = (2 * B) / l - (6 * A) / (l * l);

  return { p, dp, c2, c3 };
};

/** The deflection of the clamped beam at x, times EI. */
export const clampedDeflection = (span: PartialSpan, l: number, x: number): number => {
  if (isEmpty(span)) return 0;

  const { p, c2, c3 } = clamped(span, l);

  return p(x) + (c2 * x * x) / 2 + (c3 * x * x * x) / 6;
};

/** Its slope at x, times EI. */
export const clampedSlope = (span: PartialSpan, l: number, x: number): number => {
  if (isEmpty(span)) return 0;

  const { dp, c2, c3 } = clamped(span, l);

  return dp(x) + c2 * x + (c3 * x * x) / 2;
};
