import { Beam2D } from "./Beam2D";

import { expect, test } from "vitest";
import { LinearStaticSolver } from "./LinearStaticSolver";
import { DofID } from ".";

test("Simply supported beam - bending moment influence line via unit rotation dislocation", () => {
  const solver = new LinearStaticSolver();
  const L = 4;
  const a = .1; // section where the influence line is evaluated

  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz]);
  solver.domain.createNode(2, [L, 0, 0], [DofID.Dz]);

  solver.domain.createBeam2D("1", [1, 2], 1, 1);

  solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  // unit relative rotation at x=a -> Muller-Breslau influence line for bending moment M(a)
  solver.loadCases[0].createBeamConcentratedDeformation("1", [0, 0, 1, a], true);

  solver.solve();

  const beam = solver.domain.getElement("1") as Beam2D;
  const deflection = beam.computeGlobalDefl(solver.loadCases[0], 20);

  const b = L - a;
  for (let i = 0; i <= 20; i++) {
    const x = (L * i) / 20;
    const expectedW = x <= a ? (x * b) / L : (a * (L - x)) / L;
    expect(deflection.w[i]).toBeCloseTo(expectedW, 5);
  }

  // internal forces stay continuous (no jump) since this is a "deformation" load, not a force
  const M = beam.computeBendingMoment(solver.loadCases[0], 8);
  const V = beam.computeShearForce(solver.loadCases[0], 8);
  const N = beam.computeNormalForce(solver.loadCases[0], 8);
  M.M.forEach((v) => expect(v).toBeCloseTo(0));
  V.V.forEach((v) => expect(v).toBeCloseTo(0));
  N.N.forEach((v) => expect(v).toBeCloseTo(0));
});

test("Cantilever - shear influence line via unit relative transverse displacement", () => {
  const solver = new LinearStaticSolver();
  const L = 4;
  const a = 1.5;

  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  solver.domain.createNode(2, [L, 0, 0], []);

  solver.domain.createBeam2D("1", [1, 2], 1, 1);

  solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  // unit relative transverse displacement at x=a -> influence line for shear V(a)
  solver.loadCases[0].createBeamConcentratedDeformation("1", [0, -1, 0, a], true);

  solver.solve();

  const beam = solver.domain.getElement("1") as Beam2D;
  const deflection = beam.computeGlobalDefl(solver.loadCases[0], 8);

  // fixed segment stays undeformed (V=M=0), then rigidly translates by the imposed jump
  for (let i = 0; i <= 8; i++) {
    const x = (L * i) / 8;
    const expectedW = x <= a ? 0 : -1;
    expect(deflection.w[i]).toBeCloseTo(expectedW, 5);
  }

  const M = beam.computeBendingMoment(solver.loadCases[0], 8);
  const V = beam.computeShearForce(solver.loadCases[0], 8);
  M.M.forEach((v) => expect(v).toBeCloseTo(0));
  V.V.forEach((v) => expect(v).toBeCloseTo(0));
});

test("Fixed-ended beam - bending moment influence line via unit rotation dislocation", () => {
  const solver = new LinearStaticSolver();
  const L = 10;
  const a = 4; // section where the influence line is evaluated

  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  solver.domain.createNode(2, [L, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);

  solver.domain.createBeam2D("1", [1, 2], 1, 1);

  solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  // unit relative rotation at x=a -> Muller-Breslau influence line for bending moment M(a)
  solver.loadCases[0].createBeamConcentratedDeformation("1", [0, 0, 1, a], true);

  solver.solve();

  const beam = solver.domain.getElement("1") as Beam2D;
  const deflection = beam.computeGlobalDefl(solver.loadCases[0], 20);

  const b = L - a;
  for (let i = 0; i <= 20; i++) {
    const x = (L * i) / 20;
    const expectedW = x <= a ? x * x * (-b * (x - 15) + 5 * x - 50) / 500 : (-(x * x * x) / 100 + x * x / 5 - x + a * (x * x * x - 15 * x * x + 500) / 500);
    expect(deflection.w[i]).toBeCloseTo(expectedW, 5);
  }
});

test("Fixed-ended beam - shear force influence line via unit rotation dislocation", () => {
  const solver = new LinearStaticSolver();
  const L = 10;
  const a = 4; // section where the influence line is evaluated

  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  solver.domain.createNode(2, [L, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);

  solver.domain.createBeam2D("1", [1, 2], 1, 1);

  solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  // unit relative rotation at x=a -> Muller-Breslau influence line for bending moment M(a)
  solver.loadCases[0].createBeamConcentratedDeformation("1", [0, -1, 0, a], true);

  solver.solve();

  const beam = solver.domain.getElement("1") as Beam2D;
  const deflection = beam.computeGlobalDefl(solver.loadCases[0], 20);

  const b = L - a;
  for (let i = 0; i <= 20; i++) {
    const x = (L * i) / 20;
    const expectedW = x <= a ? (1 - (2 * x * x * x - 30 * x * x + 1000) / 1000) : -(2 * x * x * x - 30 * x * x + 1000) / 1000;
    expect(deflection.w[i]).toBeCloseTo(expectedW, 5);
  }
});
const beamWithDeformationAt = (a: number) => {
  const solver = new LinearStaticSolver();
  const L = 4;

  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz]);
  solver.domain.createNode(2, [L, 0, 0], [DofID.Dz]);
  solver.domain.createBeam2D("1", [1, 2], 1, 1);
  solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });
  solver.loadCases[0].createBeamConcentratedDeformation("1", [0, -1, 0.5, a], true);

  return { solver, L };
};

const endForcesAt = (a: number) => {
  const { solver } = beamWithDeformationAt(a);
  return solver.loadCases[0].elementLoadList[0].getLoadVectorForClampedBeam();
};

test("Deformation imposed at the element ends stays finite", () => {
  const L = 4;

  for (const a of [0, L]) {
    endForcesAt(a).forEach((v) => expect(Number.isFinite(v)).toBe(true));
  }
});

test("Deformation at the first node is the limit of one just inside it", () => {
  const atNode = endForcesAt(0);
  const justInside = endForcesAt(4 * 1e-6);

  atNode.forEach((v, i) => {
    const scale = Math.max(Math.abs(justInside[i]), 1);
    expect(Math.abs(v - justInside[i]) / scale).toBeLessThan(1e-5);
  });
});

test("Simply supported beam - unit rotation at either support gives a zero influence line", () => {
  const L = 4;

  // the bending moment at a support is zero, so its Muller-Breslau influence line is zero too
  for (const a of [0, L]) {
    const solver = new LinearStaticSolver();

    solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz]);
    solver.domain.createNode(2, [L, 0, 0], [DofID.Dz]);
    solver.domain.createBeam2D("1", [1, 2], 1, 1);
    solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 });
    solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });
    solver.loadCases[0].createBeamConcentratedDeformation("1", [0, 0, 1, a], true);
    solver.solve();

    const beam = solver.domain.getElement("1") as Beam2D;
    const deflection = beam.computeGlobalDefl(solver.loadCases[0], 10);

    deflection.w.forEach((w) => expect(w).toBeCloseTo(0, 6));
  }
});
