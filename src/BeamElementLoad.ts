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
   * Where shear does not deform the beam, the rotation of a cross section is minus this.
   */
  computeBeamSlopeContrib(xl: number): number {
    return 0;
  }
  /**
   * The rotation of the cross section this load adds, at a normalized position.
   *
   * Minus the slope, unless the load's own field lets the shear strain differ from zero, in which
   * case the load says so by overriding this.
   */
  computeBeamRotationContrib(xl: number): number {
    return -this.computeBeamSlopeContrib(xl);
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
