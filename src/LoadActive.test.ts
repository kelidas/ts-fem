import { expect, test } from "vitest";
import * as math from "mathjs";
import { Beam2D } from "./Beam2D";
import { LinearStaticSolver } from "./LinearStaticSolver";
import { DofID } from ".";

/**
 * A load can be switched off.
 *
 * It stays in the model with its values, and every number that follows from it goes: the load
 * vector, the reactions, the internal forces along the element. Switched back on, they return -
 * nothing about the load itself was touched.
 */
const simplySupported = () => {
  const solver = new LinearStaticSolver();
  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz]);
  solver.domain.createNode(2, [4, 0, 0], [DofID.Dz]);
  solver.domain.createBeam2D("1", [1, 2], 1, 1, [true, true]);
  solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  return solver;
};

const midspanMoment = (solver: LinearStaticSolver) => {
  const beam = solver.domain.getElement("1") as Beam2D;

  return (beam.computeBendingMoment(solver.loadCases[0], 2).M as number[])[1];
};

const verticalReaction = (solver: LinearStaticSolver) => {
  const reactions = solver.domain.getNode(1).getReactions(solver.loadCases[0]).values as math.Matrix;

  return reactions.get([1]);
};

test("An element load switched off carries nothing, and carries again when switched on", () => {
  const solver = simplySupported();
  const load = solver.loadCases[0].createBeamElementUniformEdgeLoad("1", [0, 1000], true);

  solver.solve();
  const moment = midspanMoment(solver);
  const reaction = verticalReaction(solver);

  expect(moment).not.toBeCloseTo(0);

  load.active = false;
  solver.codeNumberGenerated = false;
  solver.solve();

  expect(midspanMoment(solver)).toBeCloseTo(0);
  expect(verticalReaction(solver)).toBeCloseTo(0);
  // the load still holds what it was given
  expect(load.values).toEqual([0, 1000]);

  load.active = true;
  solver.codeNumberGenerated = false;
  solver.solve();

  expect(midspanMoment(solver)).toBeCloseTo(moment);
  expect(verticalReaction(solver)).toBeCloseTo(reaction);
});

test("A nodal load switched off leaves no reaction behind", () => {
  // a cantilever, so the load at the free end has to travel to the support to be seen
  const solver = new LinearStaticSolver();
  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  solver.domain.createNode(2, [4, 0, 0], []);
  solver.domain.createBeam2D("1", [1, 2], 1, 1);
  solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  const load = solver.loadCases[0].createNodalLoad(2, { [DofID.Dz]: 1000 });

  solver.solve();
  expect(Math.abs(verticalReaction(solver))).toBeGreaterThan(1);

  load.active = false;
  solver.codeNumberGenerated = false;
  solver.solve();

  expect(verticalReaction(solver)).toBeCloseTo(0);
});

/**
 * The support is the node's own; the prescribed displacement only says how far it is moved. Switched
 * off, the degree of freedom stays held and what it is held at is zero.
 */
test("A prescribed displacement switched off keeps the support and drops the movement", () => {
  // the structure the library checks prescribed displacements on, pulled at the same node
  const solver = new LinearStaticSolver();
  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  solver.domain.createNode(2, [3, 0, 0], [DofID.Dx, DofID.Dz]);
  solver.domain.createNode(3, [3, 2, 0], [DofID.Dx, DofID.Dz, DofID.Ry]);
  solver.domain.createBeam2D("1", [1, 2], 1, 1, [false, true]);
  solver.domain.createBeam2D("2", [2, 3], 1, 1, [true, false]);
  solver.domain.createMaterial("1", { e: 1000e6, g: 87500e6, alpha: 1.0, d: 4000 });
  solver.domain.createCrossSection("1", { a: 0.48, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });

  const prescribed = solver.loadCases[0].createPrescribedDisplacement(2, { [DofID.Dx]: 0.001 });

  const axialReaction = () =>
    (solver.domain.getNode(1).getReactions(solver.loadCases[0]).values as math.Matrix).get([0]);

  solver.solve();

  expect(axialReaction()).toBeCloseTo((-1000e6 * 0.48 * 0.001) / 3);

  prescribed.active = false;
  solver.codeNumberGenerated = false;
  solver.solve();

  expect(axialReaction()).toBeCloseTo(0);
  // and it is still the support it was: the node has not been let go
  expect(solver.domain.getNode(2).bcs).toContain(DofID.Dx);
});

test("Every load starts switched on and nameless", () => {
  const solver = simplySupported();
  const load = solver.loadCases[0].createBeamElementUniformEdgeLoad("1", [0, 1000], true);

  expect(load.active).toBe(true);
  expect(load.label).toBe("");

  load.label = "snow";
  expect(load.label).toBe("snow");
});
