import { BeamElementLoad } from "./BeamElementLoad";
import { shearParameter } from "./TimoshenkoShape";

/**
 * A load whose clamped beam solution is written for a beam that shear does not deform, corrected
 * here for one that it does.
 *
 * The correction is the same whatever the load. Both beams carry the load in equilibrium with
 * clamped ends, so their internal forces differ only by a state with no load at all: a constant
 * shear beta and a bending moment linear in x. The two ends staying clamped fix it -
 *
 *   beta = -fi / (l (1 + fi)) * integral of V over the length of the Euler-Bernoulli beam,
 *
 * and the moment it brings is beta (x - l/2). The rotation changes by the curvature of that moment,
 * the deflection by it and by the shear strain V / kGA. With fi = 0 nothing changes at all.
 *
 * A subclass supplies the Euler-Bernoulli solution and the integral of its own shear force.
 */
export abstract class ShearCorrectedBeamLoad extends BeamElementLoad {
  /** The end forces of the clamped Euler-Bernoulli beam, in local c.s. */
  protected abstract getBernoulliLoadVector(): Array<number>;
  /** The deflection of the clamped Euler-Bernoulli beam. */
  protected abstract computeBernoulliDeflection(xl: number): { u: number; w: number };
  /** Its slope, dw/dx. */
  protected abstract computeBernoulliSlope(xl: number): number;
  /**
   * The integral of computeBeamVContrib from 0 to x - which is computeBeamMContrib but for the jump
   * of a concentrated moment, since a moment does not shear the beam.
   */
  protected abstract computeBeamShearIntegral(x: number): number;

  private shearCorrection() {
    const elem = this.domain.getElement(this.target);
    const l = elem.computeGeo().l;
    const mat = elem.getMaterial();
    const cs = elem.getCS();
    const fi = shearParameter(l, mat.e, mat.g, cs.a, cs.iy, cs.k);
    const f = this.getBernoulliLoadVector();
    const beta = (-fi / (l * (1 + fi))) * (-f[1] * l + this.computeBeamShearIntegral(l));

    return { f, beta, l, ei: mat.e * cs.iy, kga: cs.k * mat.g * cs.a };
  }

  getLoadVectorForClampedBeam(): Array<number> {
    const { f, beta, l } = this.shearCorrection();

    return [f[0], f[1] - beta, f[2] + (beta * l) / 2, f[3], f[4] + beta, f[5] + (beta * l) / 2];
  }

  computeBeamDeflectionContrib(xl: number): { u: number; w: number } {
    const { f, beta, l, ei, kga } = this.shearCorrection();
    const x = xl * l;
    const bending = this.computeBernoulliDeflection(xl);
    const shear = -f[1] * x + this.computeBeamShearIntegral(x) + beta * x;

    return { u: bending.u, w: bending.w - (beta * ((x * x * x) / 6 - (l * x * x) / 4)) / ei + shear / kga };
  }

  computeBeamSlopeContrib(xl: number): number {
    const { f, beta, l, ei, kga } = this.shearCorrection();
    const x = xl * l;
    const shear = -f[1] + this.computeBeamVContrib(x) + beta;

    return this.computeBernoulliSlope(xl) - (beta * x * (x - l)) / (2 * ei) + shear / kga;
  }

  computeBeamRotationContrib(xl: number): number {
    const { beta, l, ei } = this.shearCorrection();
    const x = xl * l;

    return -this.computeBernoulliSlope(xl) + (beta * x * (x - l)) / (2 * ei);
  }
}
