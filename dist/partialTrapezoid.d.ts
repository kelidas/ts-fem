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
export declare const isEmpty: (span: PartialSpan) => boolean;
/**
 * `∫ x^n q(x) dx` over the loaded part.
 *
 * The one integral everything else is built from: the resultant is n = 0, where it acts is n = 1,
 * and the work-equivalent nodal loads are the shape functions' coefficients against n = 0 to 3.
 */
export declare const loadMoment: (span: PartialSpan, n: number) => number;
/** What the load adds up to, and where it acts - useful on its own and in the tests. */
export declare const resultant: (span: PartialSpan) => {
    force: number;
    firstMoment: number;
};
/** `∫ q dx` from the first node up to x: what the section at x carries of the load. */
export declare const forceUpTo: (span: PartialSpan, x: number) => number;
/** `∫ (x - s) q(s) ds` from the first node up to x: the moment of what it carries, about x. */
export declare const momentUpTo: (span: PartialSpan, x: number) => number;
/** The intensity at a point of the loaded part; outside it, the value of the nearer end. */
export declare const intensityAt: (span: PartialSpan, x: number) => number;
/**
 * The work-equivalent nodal loads, `∫ N_i q dx`, with the beam's own shape functions.
 *
 * Transverse: the two Hermite pairs. Axial: the two linear ones. These are the integrals, with no
 * sign convention applied - the load class decides which of them it wants negated.
 */
export declare const shapeFunctionIntegrals: (span: PartialSpan, l: number) => {
    /** deflection at the first node */
    w1: number;
    /** rotation at the first node */
    r1: number;
    /** deflection at the second node */
    w2: number;
    /** rotation at the second node */
    r2: number;
    /** axial, at the first and the second node */
    u1: number;
    u2: number;
};
/** The deflection of the clamped beam at x, times EI. */
export declare const clampedDeflection: (span: PartialSpan, l: number, x: number) => number;
/** Its slope at x, times EI. */
export declare const clampedSlope: (span: PartialSpan, l: number, x: number) => number;
