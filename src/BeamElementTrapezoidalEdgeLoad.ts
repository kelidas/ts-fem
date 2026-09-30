import * as math from "mathjs";
import { Beam2D } from "./Beam2D";
import { BeamElementLoad } from "./BeamElementLoad";
import {
    clampedDeflection,
    clampedSlope,
    forceUpTo,
    momentUpTo,
    shapeFunctionIntegrals,
    type PartialSpan,
} from "./partialTrapezoid";
import { Domain } from "./Domain";
import { LabelType } from ".";

/**
 * Implementation of Beam2d trapezoidal (linearly varying) load
 */
export class BeamElementTrapezoidalEdgeLoad extends BeamElementLoad {
    startValues: [number, number]; // fx, fz where the load starts
    endValues: [number, number]; // fx, fz where the load ends
    lcs: boolean; // true if values provided in element local c.s.
    /**
     * Where the load sits on the element, as distances from its first node.
     *
     * Left alone it covers the whole element, which is what a trapezoidal load used to be and what
     * the closed forms below were written for. Given a position, it covers that part of it and the
     * intensities belong to the ends of the load rather than to the ends of the element.
     */
    from?: number;
    to?: number;

    constructor(
        elem: LabelType,
        domain: Domain,
        startValues: [number, number],
        endValues: [number, number],
        lcs: boolean,
        from?: number,
        to?: number
    ) {
        super(elem, domain);
        this.startValues = startValues;
        this.endValues = endValues;
        this.lcs = lcs;
        this.from = from;
        this.to = to;
    }

    change(
        elem: LabelType,
        startValues: [number, number],
        endValues: [number, number],
        lcs: boolean,
        from?: number,
        to?: number
    ) {
        this.target = elem.toString();
        this.startValues = startValues;
        this.endValues = endValues;
        this.lcs = lcs;
        this.from = from;
        this.to = to;
    }

    /** The length of the element this load is on. */
    private elementLength(): number {
        return this.domain.getElement(this.target).computeGeo().l;
    }

    /**
     * Whether the load covers the whole element.
     *
     * The answer decides which arithmetic is used: over the whole element the original closed forms
     * stand untouched, and only a load given a position goes the other way.
     */
    partial(): boolean {
        const l = this.elementLength();
        const { a, b } = this.span(0, 0);

        return !(Math.abs(a) < 1e-12 && Math.abs(b - l) < 1e-12);
    }

    /** Where the load sits and what it carries there, in the element's own length units. */
    private span(q0: number, q1: number): PartialSpan {
        const l = this.elementLength();
        const clamp = (x: number) => Math.min(Math.max(x, 0), l);
        const first = clamp(this.from ?? 0);
        const second = clamp(this.to ?? l);

        return first <= second
            ? { a: first, b: second, q0, q1 }
            : // given back to front, it is still the same load
              { a: second, b: first, q0: q1, q1: q0 };
    }

    getGlobalIntensities() {
        const start = { fx: this.startValues[0], fz: this.startValues[1] };
        const end = { fx: this.endValues[0], fz: this.endValues[1] };
        if (this.lcs) {
            const geo = this.domain.getElement(this.target).computeGeo();
            const cos = geo.dx / geo.l;
            const sin = geo.dz / geo.l;
            return {
                start: { fx: start.fx * cos - start.fz * sin, fz: start.fx * sin + start.fz * cos },
                end: { fx: end.fx * cos - end.fz * sin, fz: end.fx * sin + end.fz * cos },
            };
        }
        return { start, end };
    }

    getLocalIntensities() {
        const start = { fx: this.startValues[0], fz: this.startValues[1] };
        const end = { fx: this.endValues[0], fz: this.endValues[1] };
        if (!this.lcs) {
            const geo = this.domain.getElement(this.target).computeGeo();
            const cos = geo.dx / geo.l;
            const sin = geo.dz / geo.l;
            return {
                start: { fx: start.fx * cos + start.fz * sin, fz: -start.fx * sin + start.fz * cos },
                end: { fx: end.fx * cos + end.fz * sin, fz: -end.fx * sin + end.fz * cos },
            };
        }
        return { start, end };
    }

    // load vector in local c.s.
    getLoadVectorForClampedBeam(): Array<number> {
        const geo = this.domain.getElement(this.target).computeGeo();
        const l = geo.l;
        const intensities = this.getLocalIntensities();

        if (this.partial()) {
            const across = shapeFunctionIntegrals(this.span(intensities.start.fz, intensities.end.fz), l);
            const along = shapeFunctionIntegrals(this.span(intensities.start.fx, intensities.end.fx), l);

            // the same signs the whole-span formulas below carry: the forces against the load, the
            // moments with the shape function that goes with them
            return [-along.u1, -across.w1, across.r1, -along.u2, -across.w2, across.r2];
        }

        const fx0 = intensities.start.fx;
        const fx1 = intensities.end.fx;
        const fz0 = intensities.start.fz;
        const fz1 = intensities.end.fz;

        const fx1Node = (-l / 6) * (2 * fx0 + fx1);
        const fx2Node = (-l / 6) * (fx0 + 2 * fx1);

        const fz1Node = (-l / 20) * (7 * fz0 + 3 * fz1);
        const fz2Node = (-l / 20) * (3 * fz0 + 7 * fz1);

        const m1Node = l * l * ((fz0 / 20) + fz1 / 30);
        const m2Node = -l * l * (fz0 / 30 + fz1 / 20);

        return [fx1Node, fz1Node, m1Node, fx2Node, fz2Node, m2Node];
    }

    getLocationArray(): number[] {
        return this.domain.getElement(this.target).getLocationArray();
    }

    getLoadVector(): number[] {
        const elem = this.domain.getElement(this.target) as Beam2D;
        const t = elem.computeT();
        const f = this.getLoadVectorForClampedBeam();
        if (elem.hasHinges()) {
            const stiffrec = elem.computeLocalStiffnessMtrx(true);
            let ans = [0, 0, 0, 0, 0, 0];

            const h1 = math.multiply(stiffrec.kab, math.inv(stiffrec.kbb));

            if (stiffrec.b.length == 1) {
                const flv = f[stiffrec.b[0]];
                for (let i = 0; i < stiffrec.a.length; i++) {
                    ans[stiffrec.a[i]] = f[stiffrec.a[i]] - h1.get([i, 0]) * flv;
                }
                return math.multiply(math.multiply(math.transpose(t), ans), -1.0).toArray() as number[];
            } else {
                const help = math.subtract(
                    math.subset(f, math.index(stiffrec.a)),
                    math.multiply(h1, math.subset(f, math.index(stiffrec.b)))
                );
                ans = math.subset(ans, math.index(stiffrec.a), help);
                return math.multiply(math.multiply(math.transpose(t), ans), -1.0).toArray() as number[];
            }
        } else {
            return math.multiply(math.multiply(math.transpose(t), f), -1.0).toArray() as number[];
        }
    }

    computeBeamDeflectionContrib(xl: number): { u: number; w: number } {
        const elem = this.domain.getElement(this.target) as Beam2D;
        const geo = elem.computeGeo();
        const l = geo.l;
        const intensities = this.getLocalIntensities();
        const fz0 = intensities.start.fz;
        const fz1 = intensities.end.fz;
        const deltaFz = fz1 - fz0;

        if (this.partial()) {
            const EI = elem.getMaterial().e * elem.getCS().iy;

            return { u: 0.0, w: clampedDeflection(this.span(fz0, fz1), l, xl * l) / EI };
        }

        const xi = xl; // normalized position along the element

        const polyUniform = (Math.pow(xi, 4) / 24 - Math.pow(xi, 3) / 12 + Math.pow(xi, 2) / 24);
        const polyLinear = Math.pow(xi, 5) / 120 - Math.pow(xi, 3) / 40 + Math.pow(xi, 2) / 60;

        const EI = elem.getMaterial().e * elem.getCS().iy;
        const w = ((l ** 4) / EI) * (fz0 * polyUniform + deltaFz * polyLinear);

        return { u: 0.0, w };
    }

    /** The derivative of the two polynomials above, in x rather than in x/l. */
    computeBeamSlopeContrib(xl: number): number {
        const elem = this.domain.getElement(this.target) as Beam2D;
        const geo = elem.computeGeo();
        const l = geo.l;
        const intensities = this.getLocalIntensities();
        const fz0 = intensities.start.fz;
        const fz1 = intensities.end.fz;
        const deltaFz = fz1 - fz0;
        const xi = xl;

        if (this.partial()) {
            const EI = elem.getMaterial().e * elem.getCS().iy;

            return clampedSlope(this.span(fz0, fz1), l, xl * l) / EI;
        }

        const slopeUniform = Math.pow(xi, 3) / 6 - Math.pow(xi, 2) / 4 + xi / 12;
        const slopeLinear = Math.pow(xi, 4) / 24 - 3 * Math.pow(xi, 2) / 40 + xi / 30;

        const EI = elem.getMaterial().e * elem.getCS().iy;

        return ((l ** 3) / EI) * (fz0 * slopeUniform + deltaFz * slopeLinear);
    }

    computeBeamNContrib(x: number): number {
        const intensities = this.getLocalIntensities();
        const geo = this.domain.getElement(this.target).computeGeo();
        const l = geo.l;
        const fx0 = intensities.start.fx;
        const fx1 = intensities.end.fx;
        const deltaFx = fx1 - fx0;

        if (this.partial()) return -forceUpTo(this.span(fx0, fx1), x);

        return -(fx0 * x + 0.5 * deltaFx * (x * x) / l);
    }

    computeBeamVContrib(x: number): number {
        const intensities = this.getLocalIntensities();
        const geo = this.domain.getElement(this.target).computeGeo();
        const l = geo.l;
        const fz0 = intensities.start.fz;
        const fz1 = intensities.end.fz;
        const deltaFz = fz1 - fz0;

        if (this.partial()) return -forceUpTo(this.span(fz0, fz1), x);

        return -(fz0 * x + 0.5 * deltaFz * (x * x) / l);
    }

    computeBeamMContrib(x: number): number {
        const intensities = this.getLocalIntensities();
        const geo = this.domain.getElement(this.target).computeGeo();
        const l = geo.l;
        const fz0 = intensities.start.fz;
        const fz1 = intensities.end.fz;
        const deltaFz = fz1 - fz0;

        if (this.partial()) return -momentUpTo(this.span(fz0, fz1), x);

        return -(0.5 * fz0 * x * x + (deltaFz / (6 * l)) * x * x * x);
    }
}
