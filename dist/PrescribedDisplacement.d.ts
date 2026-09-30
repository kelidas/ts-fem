import { Domain } from "./Domain";
import { Load } from "./Load";
import { EnumDictionary, DofID, LabelType } from ".";
/**
 * Class representing prescribed displacement TBD
 *
 * It is a load like the others - it is what a load case carries, it can be switched off and it can
 * be named - and so it extends the same base, even though what it prescribes is a movement rather
 * than a force.
 */
export declare class PrescribedDisplacement extends Load {
    prescribedValues: EnumDictionary<DofID, number>;
    /**
     * Constructor
     */
    constructor(target: LabelType, domain: Domain, values: EnumDictionary<DofID, number>);
    getNodePrescribedDisplacementVector(): number[];
    getLocationArray(): any[];
}
