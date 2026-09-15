import { Load } from "./Load";
/**
 * Abstract class for Beam elements extending the basic Load class to evaluate load contribution to
 * exact displacement and internal forces.
 */
export declare class BeamElementLoad extends Load {
    getLoadVectorForClampedBeam(): Array<number>;
    computeBeamDeflectionContrib(xl: number): {
        u: number;
        w: number;
    };
    /**
     * The slope this load adds to the deflection curve, dw/dx, at a normalized position.
     *
     * The rotation of a cross section is minus this. It is kept as a slope rather than as a rotation
     * so that the sign convention is settled once, where the terms are summed, rather than in every
     * load that contributes one.
     */
    computeBeamSlopeContrib(xl: number): number;
    computeBeamNContrib(x: number): number;
    computeBeamVContrib(x: number): number;
    computeBeamMContrib(x: number): number;
}
