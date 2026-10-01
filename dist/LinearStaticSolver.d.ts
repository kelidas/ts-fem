import * as math from "mathjs";
import { Solver } from ".";
/**
 * Class representing linear elastic solver.
 */
export declare class LinearStaticSolver extends Solver {
    assemble(): void;
    /**
     * What a prescribed equation's solved displacement couples back into the free block:
     * `K[free,prescribed] · r[prescribed]`. Zero wherever nothing is prescribed, or every
     * prescribed value is zero - the ordinary case of a plain support rather than a settlement.
     *
     * `rightHandSide()` subtracts exactly this from `f[free]` to get `b`; public so a reader can
     * see the correction on its own rather than only its effect on `b`.
     */
    prescribedCoupling(lc: number): math.Matrix;
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
    rightHandSide(lc: number): math.Matrix;
    solve(): void;
}
