import * as math from "mathjs";
import { Beam2D } from "./Beam2D";
import { BeamElementLoad } from "./BeamElementLoad";
import { Domain } from "./Domain";
import { LabelType } from ".";
import { deflectionShape, rotationShape, shearParameter, slopeShape } from "./TimoshenkoShape";

// Local Timoshenko beam stiffness matrix for an arbitrary sub-length, used to
// split the element at the imposed deformation point (see getSegmentEndDisplacements).
function computeLocalStiffness(l: number, e: number, g: number, area: number, iy: number, k: number): math.Matrix {
  const l2 = l * l;
  const l3 = l2 * l;
  const fi = shearParameter(l, e, g, area, iy, k);
  const fi1 = 1 + fi;
  return math.matrix([
    [(e * area) / l, 0, 0, -(e * area) / l, 0, 0],
    [0, (12 * e * iy) / l3 / fi1, (-6 * e * iy) / l2 / fi1, 0, (-12 * e * iy) / l3 / fi1, (-6 * e * iy) / l2 / fi1],
    [
      0,
      (-6 * e * iy) / l2 / fi1,
      ((4 + fi) * e * iy) / l / fi1,
      0,
      (6 * e * iy) / l2 / fi1,
      ((2 - fi) * e * iy) / l / fi1,
    ],
    [-(e * area) / l, 0, 0, (e * area) / l, 0, 0],
    [0, (-12 * e * iy) / l3 / fi1, (6 * e * iy) / l2 / fi1, 0, (12 * e * iy) / l3 / fi1, (6 * e * iy) / l2 / fi1],
    [
      0,
      (-6 * e * iy) / l2 / fi1,
      ((2 - fi) * e * iy) / l / fi1,
      0,
      (6 * e * iy) / l2 / fi1,
      ((4 + fi) * e * iy) / l / fi1,
    ],
  ]);
}

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
export class BeamConcentratedDeformation extends BeamElementLoad {
  /** Below this fraction of the element length a sub-beam counts as having no length at all. */
  private static readonly MIN_SEGMENT_RATIO = 1e-9;

  values: number[]; // Du, Dw, Dphi, distance x
  lcs: boolean;

  constructor(elem: LabelType, domain: Domain, values: number[], lcs: boolean) {
    super(elem, domain);
    this.values = values;
    this.lcs = lcs;
  }
  change(elem: LabelType, values: number[], lcs: boolean) {
    this.target = elem.toString();
    this.values = values;
    this.lcs = lcs;
  }

  getLocalIntensities() {
    const du = this.values[0];
    const dw = this.values[1];
    const dphi = this.values[2];
    if (!this.lcs) {
      const geo = this.domain.getElement(this.target).computeGeo();
      const cos = geo.dx / geo.l;
      const sin = geo.dz / geo.l;
      return { du: du * cos + dw * sin, dw: -du * sin + dw * cos, dphi };
    } else {
      return { du, dw, dphi };
    }
  }

  /**
   * Splits the element into two sub-beams (length a and b=l-a) at the imposed deformation
   * point and solves for the end displacements r_C1 (end of segment a) and r_C2 (start of
   * segment b) that satisfy internal equilibrium for a clamped-clamped (r_A=r_B=0) beam
   * with the prescribed relative jump r_C2-r_C1 = [Du, Dw, Dphi] enforced at the cut.
   */
  private getSegmentEndDisplacements() {
    const elem = this.domain.getElement(this.target);
    const geo = elem.computeGeo();
    const l = geo.l;
    const mat = elem.getMaterial();
    const cs = elem.getCS();
    const d = this.getLocalIntensities();

    const a = this.values[3];
    const b = l - a;
    const d0 = [d.du, d.dw, d.dphi];

    // A point at either node leaves a zero length segment, whose stiffness is infinite, so the
    // split below would be all NaN. Both cases are just the element itself with one end displaced
    // by the imposed jump.
    const tol = l * BeamConcentratedDeformation.MIN_SEGMENT_RATIO;

    if (a <= tol || b <= tol) {
      const k = computeLocalStiffness(l, mat.e, mat.g, cs.a, cs.iy, cs.k);

      if (a <= tol) {
        // the jump sits at the first node, so the element starts displaced by it
        return {
          a: 0,
          b: l,
          l,
          kacEnd: k.subset(math.index([0, 1, 2], [0, 1, 2])),
          kbcStart: k.subset(math.index([3, 4, 5], [0, 1, 2])),
          rC1: d0,
          rC2: d0,
        };
      }

      // the jump sits at the second node, so the element ends displaced by minus the jump
      const rEnd = d0.map((v) => -v);

      return {
        a: l,
        b: 0,
        l,
        kacEnd: k.subset(math.index([0, 1, 2], [3, 4, 5])),
        kbcStart: k.subset(math.index([3, 4, 5], [3, 4, 5])),
        rC1: rEnd,
        rC2: rEnd,
      };
    }

    const ka = computeLocalStiffness(a, mat.e, mat.g, cs.a, cs.iy, cs.k);
    const kb = computeLocalStiffness(b, mat.e, mat.g, cs.a, cs.iy, cs.k);

    const kacEnd = ka.subset(math.index([0, 1, 2], [3, 4, 5]));
    const kccA = ka.subset(math.index([3, 4, 5], [3, 4, 5]));
    const kccB = kb.subset(math.index([0, 1, 2], [0, 1, 2]));
    const kbcStart = kb.subset(math.index([3, 4, 5], [0, 1, 2]));

    // Each side gets its own expression rather than rC2 = rC1 + d0: close to a node the two are
    // nearly equal and opposite, and the sum loses every significant digit of the smaller one.
    const kSumInv = math.inv(math.add(kccA, kccB));

    const rC1 = (math.multiply(math.multiply(kSumInv, kccB), d0).valueOf() as number[]).map((v) => -v);
    const rC2 = math.multiply(math.multiply(kSumInv, kccA), d0).valueOf() as number[];

    return { a, b, l, kacEnd, kbcStart, rC1, rC2 };
  }

  getLoadVectorForClampedBeam(): Array<number> {
    const { kacEnd, kbcStart, rC1, rC2 } = this.getSegmentEndDisplacements();

    const fA = math.multiply(kacEnd, rC1).valueOf() as number[];
    const fB = math.multiply(kbcStart, rC2).valueOf() as number[];

    return [fA[0], fA[1], fA[2], fB[0], fB[1], fB[2]];
  }

  getLocationArray(): number[] {
    return this.domain.getElement(this.target).getLocationArray();
  }

  getLoadVector(): number[] {
    const elem = <Beam2D>this.domain.getElement(this.target);
    const t = elem.computeT();
    const f = this.getLoadVectorForClampedBeam();
    if (elem.hasHinges()) {
      const stiffrec = elem.computeLocalStiffnessMtrx(true);
      const a = stiffrec.a!;
      const b = stiffrec.b!;
      const kab = stiffrec.kab!;
      const kbb = stiffrec.kbb!;
      let ans = [0, 0, 0, 0, 0, 0];

      const h1 = math.multiply(kab, math.inv(kbb));
      if (b.length == 1) {
        const flv = f[b[0]];
        for (let i = 0; i < a.length; i++) {
          ans[a[i]] = f[a[i]] - h1.get([i, 0]) * flv;
        }

        return math.multiply(math.multiply(math.transpose(t), ans), -1.0).toArray() as number[];
      } else {
        const help = math.subtract(math.subset(f, math.index(a)), math.multiply(h1, math.subset(f, math.index(b))));
        ans = math.subset(ans, math.index(a), help);
        return math.multiply(math.multiply(math.transpose(t), ans), -1.0).toArray() as number[];
      }
    } else {
      return math.multiply(math.multiply(math.transpose(t), f), -1.0).toArray() as number[];
    }
  }

  /**
   * The sub-beam a normalized position falls in, and what the shape functions of a Timoshenko beam
   * need of it: where the point is along it, its length, its shear parameter, and its end
   * displacements (w1, phi1, w2, phi2). Sub-beam a starts at the clamped first node, sub-beam b
   * ends at the clamped second one.
   */
  private subBeamAt(xl: number) {
    const { a, b, l, rC1, rC2 } = this.getSegmentEndDisplacements();
    const elem = this.domain.getElement(this.target);
    const mat = elem.getMaterial();
    const cs = elem.getCS();
    // a sub-beam of no length has no field to interpolate, and a shear parameter that is infinite
    const fi = (length: number) => (length === 0 ? 0 : shearParameter(length, mat.e, mat.g, cs.a, cs.iy, cs.k));
    const x = xl * l;

    if (x <= a) {
      return { first: true, xi: a === 0 ? 0 : x / a, length: a, fi: fi(a), ends: [0, 0, rC1[1], rC1[2]], u: rC1[0] };
    }

    return {
      first: false,
      xi: b === 0 ? 0 : (x - a) / b,
      length: b,
      fi: fi(b),
      ends: [rC2[1], rC2[2], 0, 0],
      u: rC2[0],
    };
  }

  private static dot(shape: number[], ends: number[]): number {
    return shape[0] * ends[0] + shape[1] * ends[1] + shape[2] * ends[2] + shape[3] * ends[3];
  }

  // Deflection of the clamped-clamped primary structure (r_A=r_B=0), interpolated on each side of
  // the imposed deformation point with the shape functions of a Timoshenko beam of that length.
  computeBeamDeflectionContrib(xl: number): { u: number; w: number } {
    const s = this.subBeamAt(xl);
    const u = (s.first ? s.xi : 1 - s.xi) * s.u;
    const w = BeamConcentratedDeformation.dot(deflectionShape(s.xi, s.length, s.fi), s.ends);

    return { u, w };
  }

  /**
   * The derivative of the deflection above, taken within whichever sub-beam the point falls in.
   *
   * A sub-beam of no length is the degenerate case the deflection already guards: there is no
   * interval to differentiate over, and the slope belongs to the other one.
   */
  computeBeamSlopeContrib(xl: number): number {
    const s = this.subBeamAt(xl);
    if (s.length === 0) return 0;

    return BeamConcentratedDeformation.dot(slopeShape(s.xi, s.length, s.fi), s.ends);
  }

  /** The rotation of the cross section, from the same sub-beam - minus the slope only without shear. */
  computeBeamRotationContrib(xl: number): number {
    const s = this.subBeamAt(xl);
    if (s.length === 0) return 0;

    return BeamConcentratedDeformation.dot(rotationShape(s.xi, s.length, s.fi), s.ends);
  }

  // An imposed deformation is a "dislocation": it produces a jump in displacement, not
  // in internal forces, so N, V and M stay continuous (no contribution to add here).
  computeBeamNContrib(_x: number): number {
    return 0;
  }
  computeBeamVContrib(_x: number): number {
    return 0;
  }
  computeBeamMContrib(_x: number): number {
    return 0;
  }
}
