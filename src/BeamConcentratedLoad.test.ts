import { Beam2D } from "./Beam2D";
import * as math from "mathjs";

import { expect, test } from "vitest";
import { LinearStaticSolver } from "./LinearStaticSolver";
import { DofID } from ".";
import { BeamConcentratedLoad } from "./BeamConcentratedLoad";

test("Simply supported beam - concentrated load", () => {
  const solver = new LinearStaticSolver();
  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz]);
  solver.domain.createNode(2, [4, 0, 0], [DofID.Dz]);

  solver.domain.createBeam2D("1", [1, 2], 1, 1, [true, true]);

  solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 /*kg/m3!!!*/ });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  solver.loadCases[0].createBeamConcentratedLoad("1", [0, 100000, 0, 1], true);

  solver.solve();

  const reactions1 = solver.domain.getNode(1).getReactions(solver.loadCases[0]).values as math.Matrix;
  const reactions2 = solver.domain.getNode(2).getReactions(solver.loadCases[0]).values as math.Matrix;

  expect(reactions1.get([0])).toBeCloseTo(0);
  expect(reactions1.get([1])).toBeCloseTo(-75000);

  // TODO: for 1 supported dof this return number
  // such mess must be removed
  expect(reactions2).toBeCloseTo(-25000);

  const beam = solver.domain.getElement("1") as Beam2D;
  const deflection = beam.computeGlobalDefl(solver.loadCases[0], 2);
  const M = beam.computeBendingMoment(solver.loadCases[0], 2);
  const N = beam.computeNormalForce(solver.loadCases[0], 2);
  const V = beam.computeShearForce(solver.loadCases[0], 2);

  expect(deflection.w[1]).toBeCloseTo(5.2239e-3);
  expect(deflection.u[1]).toBeCloseTo(0);
  expect(M.M[1]).toBeCloseTo(50000);
  expect(N.N[1]).toBeCloseTo(0);
  expect(V.V[1]).toBeCloseTo(-25000);
});

test("Simply supported beam - concentrated load - GCS", () => {
  const solver = new LinearStaticSolver();
  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz]);
  solver.domain.createNode(2, [3, 0, Math.sqrt(7)], [DofID.Dz]);

  solver.domain.createBeam2D("1", [1, 2], 1, 1, [true, true]);

  solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 /*kg/m3!!!*/ });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  solver.loadCases[0].createBeamConcentratedLoad("1", [0, 100000, 0, 2], false);

  solver.solve();

  const reactions1 = solver.domain.getNode(1).getReactions(solver.loadCases[0]).values as math.Matrix;
  const reactions2 = solver.domain.getNode(2).getReactions(solver.loadCases[0]).values as math.Matrix;

  expect(reactions1.get([0])).toBeCloseTo(0);
  expect(reactions1.get([1])).toBeCloseTo(-50000);

  // TODO: for 1 supported dof this return number
  // such mess must be removed
  expect(reactions2).toBeCloseTo(-50000);

  const beam = solver.domain.getElement("1") as Beam2D;
  const deflection = beam.computeGlobalDefl(solver.loadCases[0], 2);
  const M = beam.computeBendingMoment(solver.loadCases[0], 2);
  //const N = beam.computeNormalForce(solver.loadCases[0], 2);
  //const V = beam.computeShearForce(solver.loadCases[0], 2);

  // TODO: this may be not right because of tolerance
  expect(deflection.w[1]).toBeCloseTo(5.2239e-3);
  expect(deflection.u[1]).toBeCloseTo(0);
  expect(M.M[1]).toBeCloseTo(50000 * 1.5);

  // TODO: Check N,V
  //expect(N.N[1]).toBeCloseTo(0);
  //expect(V.V[1]).toBeCloseTo(-25000);
});

test("Concentrated moment My uses XZ beam bending conventions", () => {
  const solver = new LinearStaticSolver();
  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz]);
  solver.domain.createNode(2, [4, 0, 0], [DofID.Dz]);

  solver.domain.createBeam2D("1", [1, 2], 1, 1, [true, true]);

  solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  const load = new BeamConcentratedLoad("1", solver.domain, [0, 0, 100000, 1], true);

  expect(load.getGlobalIntensities()).toEqual({ fx: 0, fz: 0, my: 100000 });
  expect(load.getLocalIntensities()).toEqual({ fx: 0, fz: 0, my: 100000 });

  const clampedVector = load.getLoadVectorForClampedBeam();
  const expectedVector = [0, -28125, -18750, 0, 28125, 31250];

  clampedVector.forEach((value, idx) => {
    expect(value).toBeCloseTo(expectedVector[idx]);
  });

  expect(load.computeBeamMContrib(0.5)).toBeCloseTo(0);
  expect(load.computeBeamMContrib(2.0)).toBeCloseTo(-100000);

  const EI = solver.domain.getElement("1").getMaterial().e * solver.domain.getElement("1").getCS().iy;
  const expectedDeflectionAtMidspan = (-28125 * Math.pow(2, 3) / 6 - 18750 * Math.pow(2, 2) / 2 + 100000 * Math.pow(1, 2) / 2) / EI;

  expect(load.computeBeamDeflectionContrib(0.5).u).toBeCloseTo(0);
  expect(load.computeBeamDeflectionContrib(0.5).w).toBeCloseTo(expectedDeflectionAtMidspan);
});

test("Concentrated moment My is unchanged between local and global XZ beam systems", () => {
  const solver = new LinearStaticSolver();
  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz]);
  solver.domain.createNode(2, [3, 0, Math.sqrt(7)], [DofID.Dz]);

  solver.domain.createBeam2D("1", [1, 2], 1, 1, [true, true]);

  solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  const load = new BeamConcentratedLoad("1", solver.domain, [1000 * Math.sqrt(7), -3000, 5600, 2], false);
  const local = load.getLocalIntensities();
  const global = load.getGlobalIntensities();

  expect(global.my).toBeCloseTo(5600);
  expect(local.my).toBeCloseTo(5600);
  expect(local.fx).toBeCloseTo(0);
  expect(local.fz).toBeCloseTo(-4000);
});

test("Clamped-clamped 10m beam matches between 2-element nodal moment and 1-element concentrated moment", () => {
  const createFixedFixedBeam = () => {
    const solver = new LinearStaticSolver();
    solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 });
    solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });
    return solver;
  };

  const splitSolver = createFixedFixedBeam();
  splitSolver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  splitSolver.domain.createNode(2, [5, 0, 0]);
  splitSolver.domain.createNode(3, [10, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  splitSolver.domain.createBeam2D("1", [1, 2], 1, 1, [false, false]);
  splitSolver.domain.createBeam2D("2", [2, 3], 1, 1, [false, false]);
  splitSolver.loadCases[0].createNodalLoad(2, { [DofID.Ry]: 100000 });
  splitSolver.solve();

  const concentratedSolver = createFixedFixedBeam();
  concentratedSolver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  concentratedSolver.domain.createNode(2, [10, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  concentratedSolver.domain.createBeam2D("1", [1, 2], 1, 1, [false, false]);
  concentratedSolver.loadCases[0].createBeamConcentratedLoad("1", [0, 0, 100000, 5], true);
  concentratedSolver.solve();

  const splitReactions1 = splitSolver.domain.getNode(1).getReactions(splitSolver.loadCases[0]).values as math.Matrix;
  const splitReactions3 = splitSolver.domain.getNode(3).getReactions(splitSolver.loadCases[0]).values as math.Matrix;
  const concentratedReactions1 = concentratedSolver.domain.getNode(1).getReactions(concentratedSolver.loadCases[0]).values as math.Matrix;
  const concentratedReactions2 = concentratedSolver.domain.getNode(2).getReactions(concentratedSolver.loadCases[0]).values as math.Matrix;

  expect(concentratedReactions1.get([0])).toBeCloseTo(splitReactions1.get([0]));
  expect(concentratedReactions1.get([1])).toBeCloseTo(splitReactions1.get([1]));
  expect(concentratedReactions1.get([2])).toBeCloseTo(splitReactions1.get([2]));
  expect(concentratedReactions2.get([0])).toBeCloseTo(splitReactions3.get([0]));
  expect(concentratedReactions2.get([1])).toBeCloseTo(splitReactions3.get([1]));
  expect(concentratedReactions2.get([2])).toBeCloseTo(splitReactions3.get([2]));

  const splitMidUnknowns = splitSolver.domain.getNode(2).getUnknowns(splitSolver.loadCases[0], [DofID.Dx, DofID.Dz, DofID.Ry]) as math.Matrix;
  const concentratedMidDeflection = (concentratedSolver.domain.getElement("1") as Beam2D).computeGlobalDefl(concentratedSolver.loadCases[0], 2);

  expect(concentratedMidDeflection.u[1]).toBeCloseTo(splitMidUnknowns.get([0]), 8);
  expect(concentratedMidDeflection.w[1]).toBeCloseTo(splitMidUnknowns.get([1]), 8);

  const splitLeftMoment = (splitSolver.domain.getElement("1") as Beam2D).computeBendingMomentAt(splitSolver.loadCases[0], 2.5);
  const splitRightMoment = (splitSolver.domain.getElement("2") as Beam2D).computeBendingMomentAt(splitSolver.loadCases[0], 2.5);
  const concentratedBeam = concentratedSolver.domain.getElement("1") as Beam2D;
  expect(concentratedBeam.computeBendingMomentAt(concentratedSolver.loadCases[0], 2.5)).toBeCloseTo(splitLeftMoment, 8);
  expect(concentratedBeam.computeBendingMomentAt(concentratedSolver.loadCases[0], 7.5)).toBeCloseTo(splitRightMoment, 8);
});

test("Clamped beam - concentrated moment load", () => {
  const solver = new LinearStaticSolver();
  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  solver.domain.createNode(2, [10, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);

  solver.domain.createBeam2D("1", [1, 2], 1, 1, [false, false]);

  solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 /*kg/m3!!!*/ });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  solver.loadCases[0].createBeamConcentratedLoad("1", [0, 0, 100000, 5], false);

  solver.solve();

  const reactions1 = solver.domain.getNode(1).getReactions(solver.loadCases[0]).values as math.Matrix;
  const reactions2 = solver.domain.getNode(2).getReactions(solver.loadCases[0]).values as math.Matrix;

  expect(reactions1.get([1])).toBeCloseTo(-15000);
  expect(reactions2.get([1])).toBeCloseTo(15000);

  const beam = solver.domain.getElement("1") as Beam2D;
  const Mcl = beam.computeBendingMomentAt(solver.loadCases[0], 5 - 1e-12);
  const Mcr = beam.computeBendingMomentAt(solver.loadCases[0], 5 + 1e-12);

  expect(Mcl).toBeCloseTo(50000);
  expect(Mcr).toBeCloseTo(-50000);

  const unknowns = beam.computeGlobalDefl(solver.loadCases[0], 4);

  // in the middle, deflection should be zero because of symmetry, and the slope should be maximum
  expect(unknowns.w[2]).toBeCloseTo(0, 8);

  // the deflection should be symmetric, so w[1] should be the opposite of w[3]
  expect(unknowns.w[1]).toBeCloseTo(-unknowns.w[3], 8);
});
