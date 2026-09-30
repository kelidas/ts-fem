import { BeamElementLoad } from "./BeamElementLoad";
import { Domain } from "./Domain";
import { LabelType } from ".";
/**
 * Implementation of Beam2d trapezoidal (linearly varying) load
 */
export declare class BeamElementTrapezoidalEdgeLoad extends BeamElementLoad {
    startValues: [number, number];
    endValues: [number, number];
    lcs: boolean;
    /**
     * Where the load sits on the element, as distances from its first node.
     *
     * Left alone it covers the whole element, which is what a trapezoidal load used to be and what
     * the closed forms below were written for. Given a position, it covers that part of it and the
     * intensities belong to the ends of the load rather than to the ends of the element.
     */
    from?: number;
    to?: number;
    constructor(elem: LabelType, domain: Domain, startValues: [number, number], endValues: [number, number], lcs: boolean, from?: number, to?: number);
    change(elem: LabelType, startValues: [number, number], endValues: [number, number], lcs: boolean, from?: number, to?: number): void;
    /** The length of the element this load is on. */
    private elementLength;
    /**
     * Whether the load covers the whole element.
     *
     * The answer decides which arithmetic is used: over the whole element the original closed forms
     * stand untouched, and only a load given a position goes the other way.
     */
    partial(): boolean;
    /** Where the load sits and what it carries there, in the element's own length units. */
    private span;
    getGlobalIntensities(): {
        start: {
            fx: number;
            fz: number;
        };
        end: {
            fx: number;
            fz: number;
        };
    };
    getLocalIntensities(): {
        start: {
            fx: number;
            fz: number;
        };
        end: {
            fx: number;
            fz: number;
        };
    };
    getLoadVectorForClampedBeam(): Array<number>;
    getLocationArray(): number[];
    getLoadVector(): number[];
    computeBeamDeflectionContrib(xl: number): {
        u: number;
        w: number;
    };
    /** The derivative of the two polynomials above, in x rather than in x/l. */
    computeBeamSlopeContrib(xl: number): number;
    computeBeamNContrib(x: number): number;
    computeBeamVContrib(x: number): number;
    computeBeamMContrib(x: number): number;
}
