import * as math from "mathjs";
import { Domain } from "./Domain";
import { LoadCase } from "./LoadCase";
import { DofID, LabelType } from ".";
import { Element } from "./Element";
/**
 * Implementation of Timoshenko beam element in 2D (xz plane)
 */
export declare class Beam2D extends Element {
    hinges: [boolean, boolean];
    diagonalMassMatrix: boolean;
    /**
     * Constructor
     * @param label element label (num)
     * @param nodes element nodes
     * @param mat element material (num)
     * @param cs element cross section (num)
     * @param hinges array of two boolean values indicating if hinge is present at start or end
     */
    constructor(label: LabelType, domain: Domain, nodes: Array<LabelType>, mat: LabelType, cs: LabelType, hinges?: [boolean, boolean]);
    getNodeDofs(node: LabelType): Array<DofID>;
    getLocationArray(): number[];
    /**
     * Returns Beam2D geometry object containing l: length, dx: element projection in to x axis, dz: element projection in z axis
     */
    computeGeo(): {
        l: number;
        dx: number;
        dz: number;
    };
    /**
     * Returns tru if element has start or end hinge (or both)
     */
    hasHinges(): boolean;
    /**
     * Computes element transformation matrix from local to global (nodal) c.s.
     */
    computeT(): math.Matrix;
    /**
     * Computes Beam2D local stifness matrix
     * @param retCondenseSubMats when true, extended info on condensed DOFs is provided
     */
    computeLocalStiffnessMtrx(retCondenseSubMats?: boolean): {
        answer: math.MathCollection;
        a: number[];
        b: number[];
        kaa: math.Matrix;
        kab: math.Matrix;
        kbb: math.Matrix;
    } | {
        answer: math.MathCollection;
        a?: undefined;
        b?: undefined;
        kaa?: undefined;
        kab?: undefined;
        kbb?: undefined;
    };
    /**
     * Computes local initial stress matrix
     * @param N normal force
     */
    computeLocalInitialStressMtrx(N: number): math.MathCollection;
    /**
     * Computes Beam2D local stifness matrix
     * @param retCondenseSubMats when true, extended info on condensed DOFs is provided
     */
    computeLocalMassMatrix(retCondenseSubMats?: boolean): math.Matrix;
    /**
     * Evaluate element stiffness matrix in global c.s.
     */
    computeStiffness(): math.Matrix;
    /**
     * Evaluate element mass matrix in global c.s.
     */
    computeMassMatrix(): math.Matrix;
    /**
     * Evaluates initial stress matrix in global c.s.
     * @param N Element normal force
     */
    computeInitialStressMatrix(N: number): math.Matrix;
    /**
     * Computes element end displacement vector (in element local c.s.)
     * @param r global vector of unknowns
     */
    computeEndDisplacement(lc: LoadCase): math.Matrix;
    /**
     * Computes element end forces (in element local c.s.)
     * @param lc load case reference
     */
    computeEndForces(lc: LoadCase): math.Matrix;
    private evalLocalDeflAt;
    private toGlobalDefl;
    /**
     * Computes nseg+1 values of local deflections
     * @param lc reference to load case
     * @param nseg deflection will be evaluated in nseg+1 points generated along the element
     */
    computeLocalDefl(lc: LoadCase, nseg: number): {
        u: number[];
        w: number[];
    };
    /**
     * Computes nseg+1 values of global deflections
     * @param lc reference to load case
     * @param nseg deflection will be evaluated in nseg+1 points generated along the element
     */
    computeGlobalDefl(lc: LoadCase, nseg: number): {
        u: number[];
        w: number[];
    };
    /**
     * Computes local deflection at a single point along the element
     * @param lc reference to load case
     * @param x distance from element start (in local c.s.)
     */
    computeLocalDeflAt(lc: LoadCase, x: number): {
        u: number;
        w: number;
    };
    /**
     * The slope of the deflection curve, dw/dx, at a normalized position.
     *
     * The Hermite polynomials of `evalLocalDeflAt` differentiated term by term. They are written in
     * x/l, so each brings a factor of the length out with it - which is why the two translation terms
     * are divided by it and the two rotation terms are not.
     */
    private evalLocalSlopeAt;
    /**
     * Computes the rotation of the cross section at a single point along the element
     *
     * The rotation is minus the slope of the deflection curve, which is the convention the end
     * displacement vector already uses: asked at either end, this returns the nodal rotation the
     * solver found there.
     *
     * A rotation about y is the same number in the element's axes and in the global ones - turning
     * the plane does not turn the section within it - so there is no global counterpart to this.
     *
     * @param lc reference to load case
     * @param x distance from element start (in local c.s.)
     */
    computeLocalRotationAt(lc: LoadCase, x: number): number;
    /**
     * Computes nseg+1 values of the cross section rotation
     * @param lc reference to load case
     * @param nseg rotation will be evaluated in nseg+1 points generated along the element
     */
    computeLocalRotation(lc: LoadCase, nseg: number): number[];
    /**
     * Computes global deflection at a single point along the element
     * @param lc reference to load case
     * @param x distance from element start (in local c.s.)
     */
    computeGlobalDeflAt(lc: LoadCase, x: number): {
        u: number;
        w: number;
    };
    /**
     * Computes element end displacement vector (in element local c.s.)
     * @param r global vector of unknowns
     */
    computeEndDisplacementEigenMode(lc: LoadCase, ntheig: number): math.Matrix;
    /**
     * Computes nseg+1 values of local deflections
     * @param lc reference to load case
     * @param nseg deflection will be evaluated in nseg+1 points generated along the element
     */
    computeLocalEigenMode(lc: LoadCase, ntheig: number, nseg: number): {
        u: number[];
        w: number[];
    };
    /**
     * Computes nseg+1 values of global deflections
     * @param lc reference to load case
     * @param ntheig n-th eigen value
     * @param nseg deflection will be evaluated in nseg+1 points generated along the element
     */
    computeGlobalEigenMode(lc: LoadCase, ntheig: number, nseg: number): {
        u: number[];
        w: number[];
    };
    /**
     * Computes the values of normal force along element
     * @param lc load case reference
     * @param nseg number of points-1
     */
    computeNormalForce(lc: LoadCase, nseg: number): {
        x: number[];
        N: number[];
    };
    computeNormalForceAt(lc: LoadCase, xi: number): number;
    /**
     * Computes the values of shear force along element
     * @param lc load case reference
     * @param nseg number of points-1
     */
    computeShearForce(lc: LoadCase, nseg: number): {
        x: number[];
        V: number[];
    };
    computeShearForceAt(lc: LoadCase, xi: number): number;
    /**
     * Computes the values of bending moment along element
     * @param lc load case reference
     * @param nseg number of points-1
     */
    computeBendingMoment(lc: LoadCase, nseg: number): {
        x: number[];
        M: number[];
    };
    computeBendingMomentAt(lc: LoadCase, xi: number): number;
}
