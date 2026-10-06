import { Beam2D } from "./Beam2D";

import { describe, expect, test } from "vitest";
import { LinearStaticSolver } from "./LinearStaticSolver";
import { DofID } from ".";
import { deflectionShape, rotationShape, slopeShape } from "./TimoshenkoShape";

/**
 * The field between the ends of a beam whose shear is deformable, held against cases that have an
 * exact answer: a cantilever with a load at its tip, and a cantilever whose free part is displaced
 * or turned as a rigid body by a dislocation - the influence line of the shear force or the bending
 * moment, which has to be straight however stiff or soft the section is in shear.
 */

const E = 30e9;
const G = 12.5e9;
const A = 0.06;
const I = 4.5e-4;
const k = 5 / 6;
const L = 4;

/** A cantilever clamped at x = 0, with a deep enough section for shear to matter. */
const cantilever = () => {
  const solver = new LinearStaticSolver();

  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  solver.domain.createNode(2, [L, 0, 0], []);
  solver.domain.createBeam2D("1", [1, 2], 1, 1);
  solver.domain.createMaterial("1", { e: E, g: G, alpha: 12e-6, d: 2500 });
  solver.domain.createCrossSection("1", { a: A, iy: I, iz: 1.0, dyz: 999991.0, h: 0.3, k, j: 99999.0 });

  return solver;
};

const element = (solver: LinearStaticSolver) => solver.domain.getElement("1") as Beam2D;
const along = Array.from({ length: 17 }, (_, i) => (L * i) / 16);

describe("shape functions", () => {
  test("reduce to the Hermite polynomials without shear", () => {
    for (const xi of [0, 0.2, 0.5, 0.9, 1]) {
      const hermite = [
        1 - 3 * xi ** 2 + 2 * xi ** 3,
        L * (-xi + 2 * xi ** 2 - xi ** 3),
        3 * xi ** 2 - 2 * xi ** 3,
        L * (xi ** 2 - xi ** 3),
      ];

      deflectionShape(xi, L, 0).forEach((n, i) => expect(n).toBeCloseTo(hermite[i], 12));
      rotationShape(xi, L, 0).forEach((n, i) => expect(n).toBeCloseTo(-slopeShape(xi, L, 0)[i], 12));
    }
  });

  test("take the end values at the ends", () => {
    for (const fi of [0, 0.3, 5]) {
      expect(deflectionShape(0, L, fi)).toEqual([1, 0, 0, 0].map((v) => expect.closeTo(v, 12)));
      expect(deflectionShape(1, L, fi)).toEqual([0, 0, 1, 0].map((v) => expect.closeTo(v, 12)));
      expect(rotationShape(0, L, fi)).toEqual([0, 1, 0, 0].map((v) => expect.closeTo(v, 12)));
      expect(rotationShape(1, L, fi)).toEqual([0, 0, 0, 1].map((v) => expect.closeTo(v, 12)));
    }
  });

  test("give a slope that is the derivative of the deflection", () => {
    const fi = 0.7;
    const h = 1e-6;

    for (const xi of [0.1, 0.4, 0.75]) {
      const ahead = deflectionShape(xi + h, L, fi);
      const behind = deflectionShape(xi - h, L, fi);

      slopeShape(xi, L, fi).forEach((n, i) => expect(n).toBeCloseTo((ahead[i] - behind[i]) / (2 * h * L), 6));
    }
  });
});

describe("a cantilever with shear deformable", () => {
  test("bends under a tip load as the exact Timoshenko solution", () => {
    const P = 10e3;
    const solver = cantilever();

    solver.loadCases[0].createNodalLoad(2, { [DofID.Dz]: P });
    solver.solve();

    const el = element(solver);

    for (const x of along) {
      const w = (P / (E * I)) * ((L * x * x) / 2 - (x * x * x) / 6) + (P * x) / (k * G * A);
      const phi = (-P / (E * I)) * (L * x - (x * x) / 2);

      expect(el.computeLocalDeflAt(solver.loadCases[0], x).w).toBeCloseTo(w, 12);
      expect(el.computeLocalRotationAt(solver.loadCases[0], x)).toBeCloseTo(phi, 12);
    }
  });

  test("moves the part beyond a unit Dw dislocation as a rigid body", () => {
    const solver = cantilever();

    solver.loadCases[0].createBeamConcentratedDeformation("1", [0, 1, 0, L / 2], true);
    solver.solve();

    const el = element(solver);

    for (const x of along) {
      const expected = x < L / 2 ? 0 : x > L / 2 ? 1 : undefined;
      if (expected === undefined) continue;

      expect(el.computeLocalDeflAt(solver.loadCases[0], x).w, `x = ${x}`).toBeCloseTo(expected, 10);
      expect(el.computeLocalRotationAt(solver.loadCases[0], x), `x = ${x}`).toBeCloseTo(0, 10);
    }
  });

  test("turns the part beyond a unit Dphi dislocation as a rigid body", () => {
    const solver = cantilever();
    const a = L / 4;

    solver.loadCases[0].createBeamConcentratedDeformation("1", [0, 0, 1, a], true);
    solver.solve();

    const el = element(solver);

    for (const x of along) {
      if (x === a) continue;
      const turned = x > a;

      expect(el.computeLocalDeflAt(solver.loadCases[0], x).w, `x = ${x}`).toBeCloseTo(turned ? -(x - a) : 0, 10);
      expect(el.computeLocalRotationAt(solver.loadCases[0], x), `x = ${x}`).toBeCloseTo(turned ? 1 : 0, 10);
    }
  });
});
