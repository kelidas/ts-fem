import { Beam2D } from "./Beam2D";
import * as math from "mathjs";

import { describe, expect, test } from "vitest";
import { LinearStaticSolver } from "./LinearStaticSolver";
import { DofID } from ".";

/**
 * The rotation of a cross section, which is minus the slope of the deflection curve.
 *
 * Every term of it is the analytic derivative of the matching term of the deflection, so the two
 * are held against each other here as well as against results that can be worked out by hand: a
 * difference quotient of the deflection is an independent answer, and one that would notice a sign
 * or a factor of the length going astray in any single load's contribution.
 */

const E = 210e9;
const I = 8.356e-5;
const L = 4;

/** A simply supported beam, to which the caller adds whatever load the case is about. */
const beam = (hinges: [boolean, boolean] = [true, true]) => {
  const solver = new LinearStaticSolver();

  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz]);
  solver.domain.createNode(2, [L, 0, 0], [DofID.Dz]);
  solver.domain.createBeam2D("1", [1, 2], 1, 1, hinges);
  solver.domain.createMaterial("1", { e: E, g: 8.75e10, alpha: 12e-6, d: 4000 });
  solver.domain.createCrossSection("1", { a: 1, iy: I, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  return solver;
};

const element = (solver: LinearStaticSolver) => solver.domain.getElement("1") as Beam2D;

/** The same quantity, read as a difference quotient of the deflection the library already gives. */
const numericalRotation = (solver: LinearStaticSolver, x: number, h = L * 1e-5) => {
  const el = element(solver);
  const w = (at: number) => el.computeLocalDeflAt(solver.loadCases[0], at).w;

  return -(w(x + h) - w(x - h)) / (2 * h);
};

const agreesWithTheDeflection = (solver: LinearStaticSolver, at: number[], tolerance = 1e-6) => {
  const el = element(solver);
  const scale = at.reduce((max, x) => Math.max(max, Math.abs(numericalRotation(solver, x))), 0);

  for (const x of at) {
    const analytic = el.computeLocalRotationAt(solver.loadCases[0], x);

    expect(Math.abs(analytic - numericalRotation(solver, x)) / Math.max(scale, 1e-30), `x = ${x}`).toBeLessThan(
      tolerance
    );
  }
};

describe("rotation of a cross section", () => {
  test("is ql³/24EI at the ends of a simply supported beam, and nothing at midspan", () => {
    const solver = beam();
    const q = 100000;

    solver.loadCases[0].createBeamElementUniformEdgeLoad("1", [0, q], true);
    solver.solve();

    const el = element(solver);
    const expected = (q * L * L * L) / (24 * E * I);

    expect(Math.abs(el.computeLocalRotationAt(solver.loadCases[0], 0))).toBeCloseTo(expected, 8);
    expect(Math.abs(el.computeLocalRotationAt(solver.loadCases[0], L))).toBeCloseTo(expected, 8);
    expect(el.computeLocalRotationAt(solver.loadCases[0], L / 2)).toBeCloseTo(0, 10);
  });

  test("is the nodal rotation the solver found, when asked at a node", () => {
    const solver = beam();

    solver.loadCases[0].createBeamElementUniformEdgeLoad("1", [0, 100000], true);
    solver.solve();

    const el = element(solver);
    const ends = el.computeEndDisplacement(solver.loadCases[0]) as math.Matrix;

    expect(el.computeLocalRotationAt(solver.loadCases[0], 0)).toBeCloseTo(ends.get([2]) as number, 10);
    expect(el.computeLocalRotationAt(solver.loadCases[0], L)).toBeCloseTo(ends.get([5]) as number, 10);
  });

  test("agrees with the deflection it is the slope of, under a uniform load", () => {
    const solver = beam();

    solver.loadCases[0].createBeamElementUniformEdgeLoad("1", [10000, 100000], true);
    solver.solve();

    agreesWithTheDeflection(solver, [0.4, 1, 2, 3, 3.6]);
  });

  test("agrees with the deflection under a trapezoidal load", () => {
    const solver = beam();

    solver.loadCases[0].createBeamElementTrapezoidalEdgeLoad("1", [0, 20000], [0, 90000], true);
    solver.solve();

    agreesWithTheDeflection(solver, [0.4, 1, 2, 3, 3.6]);
  });

  test("agrees with the deflection either side of a point force", () => {
    const solver = beam();

    solver.loadCases[0].createBeamConcentratedLoad("1", [0, 50000, 0, 1.5], true);
    solver.solve();

    // clear of the load, where a centred difference does not straddle the break in curvature
    agreesWithTheDeflection(solver, [0.4, 1, 2, 3, 3.6]);
  });

  test("agrees with the deflection either side of a concentrated moment", () => {
    const solver = beam();

    solver.loadCases[0].createBeamConcentratedLoad("1", [0, 0, 40000, 1.5], true);
    solver.solve();

    agreesWithTheDeflection(solver, [0.4, 1, 2, 3, 3.6]);
  });

  test("agrees with the deflection either side of an imposed deformation", () => {
    const solver = beam();

    solver.loadCases[0].createBeamConcentratedDeformation("1", [0, 0.01, 0, 1.5], true);
    solver.solve();

    agreesWithTheDeflection(solver, [0.4, 1, 2, 3, 3.6]);
  });

  test("stays whole across a point force, which breaks the curvature and not the slope", () => {
    const solver = beam();

    solver.loadCases[0].createBeamConcentratedLoad("1", [0, 50000, 0, 1.5], true);
    solver.solve();

    const el = element(solver);
    const before = el.computeLocalRotationAt(solver.loadCases[0], 1.5 - 1e-9);
    const after = el.computeLocalRotationAt(solver.loadCases[0], 1.5 + 1e-9);

    expect(before).toBeCloseTo(after, 10);
  });

  test("steps across an imposed rotation, by the rotation imposed", () => {
    const solver = beam();
    const jump = 0.01;

    solver.loadCases[0].createBeamConcentratedDeformation("1", [0, 0, jump, 1.5], true);
    solver.solve();

    const el = element(solver);
    const before = el.computeLocalRotationAt(solver.loadCases[0], 1.5 - 1e-9);
    const after = el.computeLocalRotationAt(solver.loadCases[0], 1.5 + 1e-9);

    expect(Math.abs(after - before)).toBeCloseTo(jump, 6);
  });

  test("stays finite where an imposed deformation sits on a node", () => {
    const solver = beam();

    solver.loadCases[0].createBeamConcentratedDeformation("1", [0, 0.01, 0, 0], true);
    solver.solve();

    const el = element(solver);

    for (const x of [0, L / 2, L]) {
      expect(Number.isFinite(el.computeLocalRotationAt(solver.loadCases[0], x)), `x = ${x}`).toBe(true);
    }
  });

  test("is read along the element the same way as at a point", () => {
    const solver = beam();

    solver.loadCases[0].createBeamElementUniformEdgeLoad("1", [0, 100000], true);
    solver.solve();

    const el = element(solver);
    const along = el.computeLocalRotation(solver.loadCases[0], 4);

    expect(along).toHaveLength(5);
    along.forEach((phi, i) => {
      expect(phi, `segment ${i}`).toBeCloseTo(el.computeLocalRotationAt(solver.loadCases[0], (L * i) / 4), 12);
    });
  });
});
