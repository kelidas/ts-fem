import { BeamElementLoad } from "./BeamElementLoad";
import { Domain } from "./Domain";
import { LabelType } from ".";
/**
 * Implementation of Beam2D concentrated (imposed) relative deformation - a prescribed
 * discontinuity in axial displacement, transverse displacement or rotation at an internal
 * point of the element (a "dislocation") -- "Member Imposed Deformation".
 *
 * Unlike a concentrated force/moment (which produces a jump in internal forces but a
 * continuous deflection), an imposed deformation produces a jump in the deflection curve
 * while internal forces (N, V, M) stay continuous. This makes it the standard tool for
 * computing influence lines by the Müller-Breslau principle: release the DOF dual to the
 * desired action (N, V or M) and impose a unit relative deformation of the matching type;
 * the resulting deflected shape is the influence line for that action.
 */
export declare class BeamConcentratedDeformation extends BeamElementLoad {
    /** Below this fraction of the element length a sub-beam counts as having no length at all. */
    private static readonly MIN_SEGMENT_RATIO;
    values: number[];
    lcs: boolean;
    constructor(elem: LabelType, domain: Domain, values: number[], lcs: boolean);
    change(elem: LabelType, values: number[], lcs: boolean): void;
    getLocalIntensities(): {
        du: number;
        dw: number;
        dphi: number;
    };
    /**
     * Splits the element into two sub-beams (length a and b=l-a) at the imposed deformation
     * point and solves for the end displacements r_C1 (end of segment a) and r_C2 (start of
     * segment b) that satisfy internal equilibrium for a clamped-clamped (r_A=r_B=0) beam
     * with the prescribed relative jump r_C2-r_C1 = [Du, Dw, Dphi] enforced at the cut.
     */
    private getSegmentEndDisplacements;
    getLoadVectorForClampedBeam(): Array<number>;
    getLocationArray(): number[];
    getLoadVector(): number[];
    computeBeamDeflectionContrib(xl: number): {
        u: number;
        w: number;
    };
    /**
     * The derivative of the deflection above, taken within whichever sub-beam the point falls in.
     *
     * Each sub-beam has its own normalized coordinate, so each brings its own length out of the
     * derivative. A sub-beam of no length is the degenerate case the deflection already guards: there
     * is no interval to differentiate over, and the slope belongs to the other one.
     */
    computeBeamSlopeContrib(xl: number): number;
    computeBeamNContrib(_x: number): number;
    computeBeamVContrib(_x: number): number;
    computeBeamMContrib(_x: number): number;
}
