import { BeamElementLoad } from "./BeamElementLoad";
import { Domain } from "./Domain";
import { LabelType } from ".";
/**
 * Implementation of Beam2d concentrated load
 * Beam2D lives in the XZ plane, so the only supported point moment is My.
 */
export declare class BeamConcentratedLoad extends BeamElementLoad {
    values: number[];
    lcs: boolean;
    constructor(elem: LabelType, domain: Domain, values: number[], lcs: boolean);
    change(elem: LabelType, values: number[], lcs: boolean): void;
    getGlobalIntensities(): {
        fx: number;
        fz: number;
        my: number;
    };
    getLocalIntensities(): {
        fx: number;
        fz: number;
        my: number;
    };
    getLoadVectorForClampedBeam(): Array<number>;
    getLocationArray(): number[];
    getLoadVector(): number[];
    computeBeamDeflectionContrib(xl: number): {
        u: number;
        w: number;
    };
    /**
     * The derivative of the deflection above. It is written in x already, so this is term by term -
     * and the branch is the same one, which is what makes the slope one sided at the load: a force
     * breaks the slope of the moment, and with it the curvature, but not the slope of the deflection,
     * so the two sides agree here while the shear either side of it does not.
     */
    computeBeamSlopeContrib(xl: number): number;
    computeBeamNContrib(x: number): number;
    computeBeamVContrib(x: number): number;
    computeBeamMContrib(x: number): number;
}
