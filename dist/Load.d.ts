import { Domain } from "./Domain";
import { LabelType } from ".";
/**
 * Abstract class representing all loads
 */
export declare class Load {
    target: string;
    domain: Domain;
    /**
     * Whether this load is taken into account.
     *
     * A load switched off stays in the model with its values intact - it simply does not reach the
     * load vector, and the element results do not see it either. Solve again and it is as if it were
     * not there; switch it back on and the numbers it had return.
     */
    active: boolean;
    /** A name for this load, for telling several of them apart. Empty unless someone gives it one. */
    label: string;
    /**
     * Returns load vector for clamped beam
     * @param elem element number
     */
    constructor(target: LabelType, domain: Domain);
    /**
     * Evaluates the contribution to the load vector
     */
    getLoadVector(): number[];
    /**
     * Returns load code numbers
     */
    getLocationArray(): number[];
}
