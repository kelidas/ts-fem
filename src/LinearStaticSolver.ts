import * as math from "mathjs";

import { Solver } from ".";

/**
 * Class representing linear elastic solver.
 */
export class LinearStaticSolver extends Solver {
  assemble() {
    this.k = math.zeros(this.neq + this.pneq, this.neq + this.pneq) as math.Matrix;

    // assemble stifness matrix
    for (const [num, el] of this.domain.elements) {
      const estiff = el.computeStiffness();
      const loc = el.getLocationArray() as [];
      const ndofs = math.size(loc)[0];

      for (let r = 0; r < ndofs; r++) {
        const rc = loc[r];
        for (let c = 0; c < ndofs; c++) {
          const cc = loc[c];
          this.k.set([rc, cc], this.k.get([rc, cc]) + estiff.get([r, c]));
        }
      }
    }
    //console.log("k=", this.k);

    this.f = math.zeros(this.neq + this.pneq, this.loadCases.length) as math.Matrix;
    for (let i = 0; i < this.loadCases.length; i++) {
      this.loadCases[i].r = math.zeros(this.neq + this.pneq) as math.Matrix;
      const lc = this.loadCases[i];
      // A load switched off is skipped here rather than removed anywhere: the model keeps it,
      // with its values, and only the vector this builds is as if it were not there.
      for (const load of lc.nodalLoadList) {
        if (!load.active) continue;
        // assemble load
        this.assembleVecLC(this.f, load.getLoadVector(), load.getLocationArray(), i);
      }

      for (const load of lc.elementLoadList) {
        if (!load.active) continue;
        this.assembleVecLC(this.f, load.getLoadVector(), load.getLocationArray(), i);
      }

      // assemble prescribed displacement vector. Switched off, the degree of freedom stays
      // prescribed - the support is still there - and what is prescribed is zero.
      for (const dbc of lc.prescribedBC) {
        if (!dbc.active) continue;
        this.assembleVec(lc.r, dbc.getNodePrescribedDisplacementVector(), dbc.getLocationArray());
      }
    }
  }

  /**
   * What the free block is actually solved against, for one load case.
   *
   * `Kr = f` holds for every equation, but only the free ones are solved for - the prescribed
   * ones already have their answer. Moved to the other side, their contribution becomes a
   * correction to the load: `b = f[free] - K[free, prescribed] · r[prescribed]`. A zero
   * prescribed displacement, the ordinary case, leaves nothing to correct, and b is f[free]
   * alone.
   *
   * Public so a reader of the assembled system - a widget showing it, say - can ask for exactly
   * what `solve()` asks `lusolve` to solve, rather than a second copy of this arithmetic agreeing
   * with the first by coincidence.
   */
  rightHandSide(lc: number): math.Matrix {
    if (this.neq === 0) return math.zeros(0) as math.Matrix;

    const unknowns = math.range(0, this.neq);
    const prescribed = math.range(this.neq, this.neq + this.pneq);

    const rp = math.subset(this.loadCases[lc].r, math.index(prescribed));
    const fp = math.multiply(math.subset(this.k, math.index(unknowns, prescribed)), rp) as math.Matrix;

    let bsolve = math.subset(this.f, math.index(unknowns, [lc]));

    if (typeof bsolve === "number") {
      bsolve = math.matrix([bsolve]);
    }

    return math.subtract(math.squeeze(bsolve), fp) as math.Matrix;
  }

  solve() {
    const startime = new Date();
    if (!this.codeNumberGenerated) {
      this.generateCodeNumbers();
    }

    const unknowns = math.range(0, this.neq);
    const prescribed = math.range(this.neq, this.neq + this.pneq);

    this.assemble();
    if (this.neq > 0) {
      for (let lc = 0; lc < this.loadCases.length; lc++) {
        this.loadCases[lc].solved = false;

        const b = this.rightHandSide(lc);

        let ksolve = math.subset(this.k, math.index(unknowns, unknowns));

        if (typeof ksolve === "number") {
          ksolve = math.matrix([[ksolve]]);
        }

        const ru = math.squeeze(math.lusolve(ksolve, b));

        this.loadCases[lc].r = math.subset(this.loadCases[lc].r, math.index(math.range(0, this.neq)), ru);

        // evaluate reactions
        //this.loadCases[lc].R = math.squeeze(math.multiply(math.subset(this.k, math.index(prescribed, unknowns)), ru));
        this.loadCases[lc].R = math.subset(math.multiply(this.k, this.loadCases[lc].r), math.index(prescribed));

        // add contributions from elements
        this.loadCases[lc].R = math.subtract(
          this.loadCases[lc].R,
          math.squeeze(math.subset(this.f, math.index(prescribed, [lc])))
        ) as math.Matrix;

        this.loadCases[lc].solved = true;
      }
    } else {
      // Special case when nothing is solved
      for (let lc = 0; lc < this.loadCases.length; lc++) {
        // evaluate reactions
        this.loadCases[lc].R = math.squeeze(math.multiply(this.k, this.loadCases[lc].r));

        // add contributions from elements
        this.loadCases[lc].R = math.subtract(
          this.loadCases[lc].R,
          math.squeeze(math.subset(this.f, math.index(prescribed, [lc])))
        ) as math.Matrix;

        this.loadCases[lc].solved = true;
      }
    }

    const endtime = new Date();
    const timediff = endtime.getTime() - startime.getTime();
    console.log("Solution took ", Math.round(timediff * 100) / 100, " [ms]");
  }
}
