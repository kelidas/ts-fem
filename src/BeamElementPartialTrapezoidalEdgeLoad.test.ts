import { expect, test } from "vitest";
import * as math from "mathjs";
import { Beam2D } from "./Beam2D";
import { LinearStaticSolver } from "./LinearStaticSolver";
import { DofID } from ".";

/**
 * A trapezoidal load over part of an element.
 *
 * The check that decides it: the same load laid on a beam that has a node where the load stops is
 * an ordinary whole-element load, and the library already knows that case is right. Both models are
 * the same structure carrying the same thing, so every number they give has to agree - reactions,
 * moments, deflections.
 */
const L = 6;

const material = (solver: LinearStaticSolver) => {
  solver.domain.createMaterial("1", { e: 210000e6, g: 8.75e10, alpha: 12e-6, d: 4000 });
  solver.domain.createCrossSection("1", { a: 1, iy: 8.356e-5, iz: 1.0, dyz: 999991.0, h: 1, k: 1e32, j: 99999.0 });
};

/** One element, with the load sitting on the part of it between `from` and `to`. */
const onOneElement = (from: number, to: number, q0: number, q1: number) => {
  const solver = new LinearStaticSolver();
  solver.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz]);
  solver.domain.createNode(2, [L, 0, 0], [DofID.Dz]);
  solver.domain.createBeam2D("1", [1, 2], 1, 1);
  material(solver);
  solver.loadCases[0].createBeamElementTrapezoidalEdgeLoad("1", [0, q0], [0, q1], true, from, to);
  solver.solve();

  return solver;
};

/**
 * The same beam cut where the load starts and stops, so the piece that carries it carries it over
 * its whole length - which is the case the library already knew how to do.
 */
const cutAtTheLoad = (from: number, to: number, q0: number, q1: number) => {
  const solver = new LinearStaticSolver();
  const stations = [...new Set([0, from, to, L])].sort((a, b) => a - b);

  stations.forEach((x, i) => {
    const held = x === 0 ? [DofID.Dx, DofID.Dz] : x === L ? [DofID.Dz] : [];
    solver.domain.createNode(i + 1, [x, 0, 0], held);
  });

  stations.slice(0, -1).forEach((_, i) => solver.domain.createBeam2D(String(i + 1), [i + 1, i + 2], 1, 1));
  material(solver);

  const carrying = String(stations.indexOf(from) + 1);
  solver.loadCases[0].createBeamElementTrapezoidalEdgeLoad(carrying, [0, q0], [0, q1], true);
  solver.solve();

  return solver;
};

const reaction = (solver: LinearStaticSolver, node: number, dof: number) => {
  const values = solver.domain.getNode(node).getReactions(solver.loadCases[0]).values as math.Matrix;

  return values.get([dof]);
};

/** The deflection at a distance along the whole beam, wherever the elements happen to be cut. */
const deflectionAt = (solver: LinearStaticSolver, x: number) => {
  for (const element of solver.domain.elements.values()) {
    const beam = element as Beam2D;
    const start = beam.domain.getNode(beam.nodes[0]).coords[0];
    const end = beam.domain.getNode(beam.nodes[1]).coords[0];

    if (x < start - 1e-9 || x > end + 1e-9) continue;

    return beam.computeGlobalDeflAt(solver.loadCases[0], x - start).w;
  }

  throw new Error(`nothing of the beam at ${x}`);
};

const momentAt = (solver: LinearStaticSolver, x: number) => {
  for (const element of solver.domain.elements.values()) {
    const beam = element as Beam2D;
    const start = beam.domain.getNode(beam.nodes[0]).coords[0];
    const end = beam.domain.getNode(beam.nodes[1]).coords[0];

    if (x < start - 1e-9 || x > end + 1e-9) continue;

    return beam.computeBendingMomentAt(solver.loadCases[0], x - start);
  }

  throw new Error(`nothing of the beam at ${x}`);
};

const agrees = (from: number, to: number, q0: number, q1: number) => {
  const one = onOneElement(from, to, q0, q1);
  const three = cutAtTheLoad(from, to, q0, q1);

  expect(reaction(one, 1, 1)).toBeCloseTo(reaction(three, 1, 1), 6);

  for (const x of [0.5, from, (from + to) / 2, to, L - 0.5]) {
    expect(deflectionAt(one, x)).toBeCloseTo(deflectionAt(three, x), 9);
    expect(momentAt(one, x)).toBeCloseTo(momentAt(three, x), 5);
  }
};

test("a uniform load over the middle of a beam", () => {
  agrees(1.5, 4.5, 1000, 1000);
});

test("a trapezoidal load over the middle of a beam", () => {
  agrees(1.5, 4.5, 800, 2000);
});

test("a load that starts at the first node", () => {
  agrees(0, 2.5, 1200, 400);
});

test("a load that runs to the far node", () => {
  agrees(3.5, L, 500, 1500);
});

test("a load given no length carries nothing", () => {
  const solver = onOneElement(2, 2, 1000, 1000);

  expect(reaction(solver, 1, 1)).toBeCloseTo(0, 9);
  expect(deflectionAt(solver, L / 2)).toBeCloseTo(0, 12);
});

/** Told to cover the whole element, it is the load it always was, down to the last figure. */
test("over the whole element it is the original load", () => {
  const whole = onOneElement(0, L, 800, 2000);

  const plain = new LinearStaticSolver();
  plain.domain.createNode(1, [0, 0, 0], [DofID.Dx, DofID.Dz]);
  plain.domain.createNode(2, [L, 0, 0], [DofID.Dz]);
  plain.domain.createBeam2D("1", [1, 2], 1, 1);
  material(plain);
  plain.loadCases[0].createBeamElementTrapezoidalEdgeLoad("1", [0, 800], [0, 2000], true);
  plain.solve();

  expect(reaction(whole, 1, 1)).toBeCloseTo(reaction(plain, 1, 1), 12);

  for (const x of [0.5, 2, 3, 4.5, 5.5]) {
    expect(deflectionAt(whole, x)).toBeCloseTo(deflectionAt(plain, x), 12);
    expect(momentAt(whole, x)).toBeCloseTo(momentAt(plain, x), 9);
  }
});
