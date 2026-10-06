import { Beam2D } from "./Beam2D";

import { describe, expect, test } from "vitest";
import { LinearStaticSolver } from "./LinearStaticSolver";
import { LoadCase } from "./LoadCase";
import { DofID } from ".";

/**
 * Element loads on a beam that shear deforms, held against the Timoshenko equations integrated
 * here independently of the library:
 *
 *   phi' = M / EI,   w' = -phi + V / kGA,   M' = V,
 *
 * from the clamped first end, with the shear force and moment there whatever the second end needs:
 * zero deflection and rotation if it is clamped too, zero shear and moment if it is free.
 */

const E = 30e9;
const G = 12.5e9;
const A = 0.06;
const I = 4.5e-4;
const k = 5 / 6;
const L = 4;
const EI = E * I;
const kGA = k * G * A;

/** The shear force and moment a load adds from x = 0 on, with nothing at x = 0 itself. */
interface Particular {
  V: (x: number) => number;
  M: (x: number) => number;
}

const STEPS = 64000;

/** w and phi at the grid points of STEPS intervals, given the shear force and moment at x = 0. */
const integrate = (load: Particular, V0: number, M0: number) => {
  const h = L / STEPS;
  // a point load or moment sits on a grid point; reading either side of it from inside the interval
  // keeps the jump out of the trapezoid rule
  const inside = h * 1e-9;
  const V = (x: number) => V0 + load.V(x);
  const M = (x: number) => M0 + V0 * x + load.M(x);
  const w = [0];
  const phi = [0];

  for (let i = 0; i < STEPS; i++) {
    const x0 = i * h + inside;
    const x1 = (i + 1) * h - inside;
    phi.push(phi[i] + ((M(x0) + M(x1)) / EI) * (h / 2));
    w.push(w[i] + (-phi[i] + V(x0) / kGA - phi[i + 1] + V(x1) / kGA) * (h / 2));
  }

  return { w, phi };
};

/** The end forces at x = 0 that clamp the second end as well, found by superposition. */
const clampedAtBothEnds = (load: Particular) => {
  const ends = (field: { w: number[]; phi: number[] }) => [field.w[STEPS], field.phi[STEPS]];
  const [w0, p0] = ends(integrate(load, 0, 0));
  const none = { V: () => 0, M: () => 0 };
  const [wV, pV] = ends(integrate(none, 1, 0));
  const [wM, pM] = ends(integrate(none, 0, 1));
  const det = wV * pM - wM * pV;
  const V0 = (-w0 * pM + wM * p0) / det;
  const M0 = (-wV * p0 + w0 * pV) / det;

  return { V0, M0, ...integrate(load, V0, M0) };
};

/** Propped by a hinge at the second end: no deflection there and no moment. */
const proppedAtTheEnd = (load: Particular) => {
  const end = (V0: number, M0: number, particular: Particular) => integrate(particular, V0, M0).w[STEPS];
  const none = { V: () => 0, M: () => 0 };
  // w(L) is linear in V0 for M0 = -V0 L - M(L), the moment the hinge leaves at the first end
  const w0 = end(0, -load.M(L), load);
  const w1 = end(1, -L, none);
  const V0 = -w0 / w1;
  const M0 = -V0 * L - load.M(L);

  return { V0, M0, ...integrate(load, V0, M0) };
};

const freeAtTheEnd = (load: Particular) => {
  const V0 = -load.V(L);
  const M0 = -V0 * L - load.M(L);

  return { V0, M0, ...integrate(load, V0, M0) };
};

const beam = (secondEnd: DofID[], load: (lc: LoadCase) => void, hinges: [boolean, boolean] = [false, false]) => {
  const solver = new LinearStaticSolver();

  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  solver.domain.createNode(2, [L, 0, 0], secondEnd);
  solver.domain.createBeam2D("1", [1, 2], 1, 1, hinges);
  solver.domain.createMaterial("1", { e: E, g: G, alpha: 12e-6, d: 2500 });
  solver.domain.createCrossSection("1", { a: A, iy: I, iz: 1.0, dyz: 999991.0, h: 0.3, k, j: 99999.0 });
  load(solver.loadCases[0]);
  solver.solve();

  return solver;
};

const a = L / 4;
const q = 10e3;
const q0 = 5e3;
const q1 = 20e3;

const cases: Array<{ name: string; load: (lc: LoadCase) => void; particular: Particular }> = [
  {
    name: "a uniform load",
    load: (lc) => lc.createBeamElementUniformEdgeLoad("1", [0, q], true),
    particular: { V: (x) => -q * x, M: (x) => (-q * x * x) / 2 },
  },
  {
    name: "a trapezoidal load",
    load: (lc) => lc.createBeamElementTrapezoidalEdgeLoad("1", [0, q0], [0, q1], true),
    particular: {
      V: (x) => -(q0 * x + ((q1 - q0) * x * x) / (2 * L)),
      M: (x) => -((q0 * x * x) / 2 + ((q1 - q0) * x * x * x) / (6 * L)),
    },
  },
  {
    name: "a point force",
    load: (lc) => lc.createBeamConcentratedLoad("1", [0, q, 0, a], true),
    particular: { V: (x) => (x < a ? 0 : -q), M: (x) => (x < a ? 0 : -q * (x - a)) },
  },
  {
    name: "a point moment",
    load: (lc) => lc.createBeamConcentratedLoad("1", [0, 0, q, a], true),
    particular: { V: () => 0, M: (x) => (x < a ? 0 : -q) },
  },
];

const along = Array.from({ length: 17 }, (_, i) => i);

const agrees = (solver: LinearStaticSolver, exact: ReturnType<typeof integrate> & { V0: number; M0: number }) => {
  const el = solver.domain.getElement("1") as Beam2D;
  const lc = solver.loadCases[0];
  const wScale = Math.max(...exact.w.map(Math.abs));
  const phiScale = Math.max(...exact.phi.map(Math.abs));

  expect(el.computeShearForceAt(lc, 0)).toBeCloseTo(exact.V0, 3);
  expect(el.computeBendingMomentAt(lc, 0)).toBeCloseTo(exact.M0, 3);

  for (const i of along) {
    const x = (L * i) / 16;
    const grid = (STEPS * i) / 16;
    const w = el.computeLocalDeflAt(lc, x).w;
    const phi = el.computeLocalRotationAt(lc, x);

    expect(Math.abs(w - exact.w[grid]) / wScale, `w at x = ${x}`).toBeLessThan(1e-7);
    expect(Math.abs(phi - exact.phi[grid]) / phiScale, `phi at x = ${x}`).toBeLessThan(1e-7);
  }
};

describe.each(cases)("$name on a beam that shear deforms", ({ load, particular }) => {
  test("clamped at both ends", () => {
    agrees(beam([DofID.Dx, DofID.Dz, DofID.Ry], load), clampedAtBothEnds(particular));
  });

  test("propped by a hinge at the second end", () => {
    agrees(beam([DofID.Dx, DofID.Dz, DofID.Ry], load, [false, true]), proppedAtTheEnd(particular));
  });

  test("as a cantilever", () => {
    agrees(beam([], load), freeAtTheEnd(particular));
  });
});

describe("the slope", () => {
  test("is the derivative of the deflection, and differs from minus the rotation by V / kGA", () => {
    const solver = beam([DofID.Dx, DofID.Dz, DofID.Ry], cases[2].load);
    const el = solver.domain.getElement("1") as Beam2D;
    const lc = solver.loadCases[0];
    const h = 1e-5;

    for (const x of [0.4, 2, 3.3]) {
      const slope = (el.computeLocalDeflAt(lc, x + h).w - el.computeLocalDeflAt(lc, x - h).w) / (2 * h);
      const load = lc.getElementLoadsOnElement("1")[0];

      expect(load.computeBeamSlopeContrib(x / L)).toBeCloseTo(slope, 9);
      expect(slope + el.computeLocalRotationAt(lc, x)).toBeCloseTo(el.computeShearForceAt(lc, x) / kGA, 12);
    }
  });
});
