import { Load } from "./Load";

/**
 * Abstract class for Beam elements extending the basic Load class to evaluate load contribution to
 * exact displacement and internal forces.
 */
export class BeamElementLoad extends Load {
  getLoadVectorForClampedBeam(): Array<number> {
    return [];
  }
  computeBeamDeflectionContrib(xl: number): { u: number; w: number } {
    return { u: 0, w: 0 };
  }
  /**
   * The slope this load adds to the deflection curve, dw/dx, at a normalized position.
   *
   * The rotation of a cross section is minus this. It is kept as a slope rather than as a rotation
   * so that the sign convention is settled once, where the terms are summed, rather than in every
   * load that contributes one.
   */
  computeBeamSlopeContrib(xl: number): number {
    return 0;
  }
  computeBeamNContrib(x: number): number {
    return 0;
  }
  computeBeamVContrib(x: number): number {
    return 0;
  }
  computeBeamMContrib(x: number): number {
    return 0;
  }
}
