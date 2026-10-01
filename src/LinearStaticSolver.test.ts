import * as math from "mathjs";

import { expect, test } from "vitest";
import { LinearStaticSolver } from "./LinearStaticSolver";
import { Beam2D, DofID } from ".";

test("1 uknown - Cantilever-hinge", () => {
  const solver = new LinearStaticSolver();
  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  solver.domain.createNode(2, [1, 0, 0], [DofID.Dx, DofID.Dz]);

  solver.domain.createBeam2D("1", [1, 2], 1, 1, [false, false]);

  solver.domain.createMaterial("1", { e: 210000e6, g: 210000e6 / (2 * (1 + 0.2)), alpha: 1.0, d: 4000 /*kg/m3!!!*/ });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  solver.loadCases[0].createBeamElementUniformEdgeLoad(1, [0, 1000], false);

  solver.solve();

  const reactions1 = solver.domain.getNode(1).getReactions(solver.loadCases[0]).values as math.Matrix;
  const reactions2 = solver.domain.getNode(2).getReactions(solver.loadCases[0]).values as math.Matrix;

  expect(reactions1.get([1])).toBe(-1000 * 0.625);
  expect(reactions2.get([1])).toBe(-1000 * 0.375);
});

test("0 uknowns - Cantilever-Cantilever", () => {
  const solver = new LinearStaticSolver();
  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  solver.domain.createNode(2, [1, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);

  solver.domain.createBeam2D("1", [1, 2], 1, 1, [false, false]);

  solver.domain.createMaterial("1", { e: 210000e6, g: 210000e6 / (2 * (1 + 0.2)), alpha: 1.0, d: 4000 /*kg/m3!!!*/ });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  solver.loadCases[0].createBeamElementUniformEdgeLoad(1, [0, 1000], false);

  solver.solve();

  const reactions1 = solver.domain.getNode(1).getReactions(solver.loadCases[0]).values as math.Matrix;
  const reactions2 = solver.domain.getNode(2).getReactions(solver.loadCases[0]).values as math.Matrix;

  expect(reactions1.get([1])).toBe(-1000 * 0.5);
  expect(reactions2.get([1])).toBe(-1000 * 0.5);

  const defl = (solver.domain.elements.get("1") as Beam2D).computeGlobalDefl(solver.loadCases[0], 10);
  const bm = (solver.domain.elements.get("1") as Beam2D).computeBendingMoment(solver.loadCases[0], 10);

  expect(defl.w[5]).toBeCloseTo((1000 * 1 * 1 * 1 * 1) / 384 / 210000e6 / 8.356e-5);
  expect(bm.M[5]).toBeCloseTo((1000 * 1 * 1) / 24);
});

test("f splits into a direct nodal part and an element-equivalent part", () => {
  const solver = new LinearStaticSolver();
  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  solver.domain.createNode(2, [1, 0, 0], []);

  solver.domain.createBeam2D("1", [1, 2], 1, 1, [false, false]);

  solver.domain.createMaterial("1", { e: 210000e6, g: 210000e6 / (2 * (1 + 0.2)), alpha: 1.0, d: 4000 /*kg/m3!!!*/ });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  solver.loadCases[0].createNodalLoad(2, { [DofID.Dz]: -500 });
  solver.loadCases[0].createBeamElementUniformEdgeLoad(1, [0, 1000], false);

  solver.solve();

  const f = solver.f as math.Matrix;
  const fNodal = solver.fNodal as math.Matrix;
  const fElement = solver.fElement as math.Matrix;
  const atNode2Dz = solver.nodeCodeNumbers.get("2")[DofID.Dz];

  // the direct nodal load alone - the UDL's own equivalent force is not mixed into it
  expect(fNodal.get([atNode2Dz, 0])).toBe(-500);

  // the element load's own work-equivalent force at the same equation: present, and not the nodal load's value
  expect(fElement.get([atNode2Dz, 0])).not.toBe(0);
  expect(fElement.get([atNode2Dz, 0])).not.toBe(-500);

  // the two parts sum back to f exactly, for every equation
  for (let i = 0; i < solver.neq + solver.pneq; i++) {
    expect(f.get([i, 0])).toBeCloseTo((fNodal.get([i, 0]) as number) + (fElement.get([i, 0]) as number));
  }
});
