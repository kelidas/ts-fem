import { BeamElementLoad } from "./BeamElementLoad";
import { Domain } from "./Domain";
import { LabelType } from ".";
/**
 * Implementation of Beam2d uniform load
 */
export declare class BeamElementUniformEdgeLoad extends BeamElementLoad {
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
    };
    getLoadVectorForClampedBeam(): Array<number>;
    getLocationArray(): number[];
    getLoadVector(): number[];
    computeBeamDeflectionContrib(xl: number): {
        u: number;
        w: number;
    };
    /**
     * The derivative of the deflection above, term by term: the fourth power falls to a third, and
     * the factor of the length falls with it because the polynomial is in x/l and this is in x.
     */
    computeBeamSlopeContrib(xl: number): number;
    computeBeamNContrib(x: number): number;
    computeBeamVContrib(x: number): number;
    computeBeamMContrib(x: number): number;
}
