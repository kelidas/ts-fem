import { expect, test } from "vitest";
import {
  clampedDeflection,
  clampedSlope,
  forceUpTo,
  loadMoment,
  momentUpTo,
  shapeFunctionIntegrals,
  type PartialSpan,
} from "./partialTrapezoid";

/**
 * The closed forms are checked against the integral they came from.
 *
 * A trapezoid is simple enough that a sum over a few thousand strips is right to ten figures, so
 * the sum is the oracle: it knows nothing of the algebra it is checking.
 */
const strip = (f: (x: number) => number, a: number, b: number, strips = 20000) => {
  const h = (b - a) / strips;
  let total = 0;

  for (let i = 0; i < strips; i++) total += f(a + (i + 0.5) * h) * h;

  return total;
};

/**
 * The sum is split where the load switches on and off: a midpoint rule reads a jump as half a
 * strip of nonsense, and the whole point of the oracle is that it is right to more figures than
 * the thing it checks.
 */
const integrate = (f: (x: number) => number, a: number, b: number, breaks: number[] = []) => {
  const edges = [a, ...breaks.filter((x) => x > a && x < b), b].sort((x, y) => x - y);

  return edges.slice(0, -1).reduce((total, from, i) => total + strip(f, from, edges[i + 1]), 0);
};

/** The oracle is a sum, so the comparison is relative: an absolute tolerance would ask it to be exact. */
const closeTo = (value: number, oracle: number, digits = 7) => {
  if (Math.abs(oracle) < 1e-9) return expect(value).toBeCloseTo(oracle, 9);

  return expect(value / oracle).toBeCloseTo(1, digits);
};

const L = 6;
const intensity = (span: PartialSpan) => (x: number) =>
  x < span.a || x > span.b ? 0 : span.q0 + ((span.q1 - span.q0) * (x - span.a)) / (span.b - span.a);

const whole: PartialSpan = { a: 0, b: L, q0: 1000, q1: 1000 };
const part: PartialSpan = { a: 1.5, b: 4.5, q0: 800, q1: 2000 };

test("the integrals of the load are the integrals of the load", () => {
  for (const span of [whole, part]) {
    const q = intensity(span);

    for (const n of [0, 1, 2, 3]) {
      closeTo(
        loadMoment(span, n),
        integrate((x) => Math.pow(x, n) * q(x), 0, L, [span.a, span.b])
      );
    }
  }
});

test("what a section carries, and the moment of it", () => {
  const q = intensity(part);

  for (const x of [0, 1, 1.5, 2.5, 4.5, 5, L]) {
    const breaks = [part.a, part.b];

    closeTo(forceUpTo(part, x), integrate(q, 0, Math.max(x, 1e-9), breaks));
    closeTo(
      momentUpTo(part, x),
      integrate((s) => (x - s) * q(s), 0, Math.max(x, 1e-9), breaks)
    );
  }
});

test("the work-equivalent nodal loads are the classic ones for a load over the whole span", () => {
  const q = whole.q0;
  const nodal = shapeFunctionIntegrals(whole, L);

  expect(nodal.w1).toBeCloseTo((q * L) / 2, 9);
  expect(nodal.w2).toBeCloseTo((q * L) / 2, 9);
  expect(nodal.r1).toBeCloseTo((q * L * L) / 12, 9);
  expect(nodal.r2).toBeCloseTo((-q * L * L) / 12, 9);
  expect(nodal.u1).toBeCloseTo((q * L) / 2, 9);
  expect(nodal.u2).toBeCloseTo((q * L) / 2, 9);
});

/** The table value every textbook carries: a uniform load over half the span of a fixed beam. */
test("and the classic ones for a uniform load over the left half", () => {
  const q = 1000;
  const half: PartialSpan = { a: 0, b: L / 2, q0: q, q1: q };
  const nodal = shapeFunctionIntegrals(half, L);

  expect(nodal.r1).toBeCloseTo((11 * q * L * L) / 192, 6);
  expect(-nodal.r2).toBeCloseTo((5 * q * L * L) / 192, 6);
  expect(nodal.w1).toBeCloseTo((13 * q * L) / 32, 6);
  expect(nodal.w2).toBeCloseTo((3 * q * L) / 32, 6);
});

test("the clamped beam is held at both ends", () => {
  for (const span of [whole, part]) {
    expect(clampedDeflection(span, L, 0)).toBeCloseTo(0, 9);
    expect(clampedDeflection(span, L, L)).toBeCloseTo(0, 9);
    expect(clampedSlope(span, L, 0)).toBeCloseTo(0, 9);
    expect(clampedSlope(span, L, L)).toBeCloseTo(0, 9);
  }
});

test("a load over the whole span gives back the classic clamped deflection", () => {
  const q = whole.q0;

  for (const x of [0.5, 1.5, 3, 4.5, 5.5]) {
    expect(clampedDeflection(whole, L, x)).toBeCloseTo((q * x * x * (L - x) * (L - x)) / 24, 6);
  }
});

test("the slope is the derivative of the deflection", () => {
  const h = 1e-6;

  for (const x of [0.7, 2, 3.4, 4.9]) {
    const numeric = (clampedDeflection(part, L, x + h) - clampedDeflection(part, L, x - h)) / (2 * h);

    expect(clampedSlope(part, L, x)).toBeCloseTo(numeric, 3);
  }
});

test("a load symmetric about midspan deflects symmetrically", () => {
  const symmetric: PartialSpan = { a: 2, b: 4, q0: 1500, q1: 1500 };

  for (const x of [0.5, 1.5, 2.5]) {
    expect(clampedDeflection(symmetric, L, x)).toBeCloseTo(clampedDeflection(symmetric, L, L - x), 6);
  }
});

test("a load of no length carries nothing", () => {
  const none: PartialSpan = { a: 3, b: 3, q0: 1000, q1: 1000 };

  expect(loadMoment(none, 0)).toBe(0);
  expect(forceUpTo(none, L)).toBe(0);
  expect(clampedDeflection(none, L, L / 2)).toBe(0);
});
