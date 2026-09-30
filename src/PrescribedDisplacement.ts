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
export class PrescribedDisplacement extends Load {
  prescribedValues: EnumDictionary<DofID, number>; // prescribed values of individual DOFs

  /**
   * Constructor
   */
  constructor(target: LabelType, domain: Domain, values: EnumDictionary<DofID, number>) {
    super(target, domain);
    this.prescribedValues = values;
  }
  getNodePrescribedDisplacementVector() {
    const answer = new Array<number>();
    // get node DOFs
    const dofs = this.domain.solver.getNodeDofIDs(this.target);
    // generate prescribed displacement vector
    for (const dof of dofs) {
      if (dof in this.prescribedValues) {
        answer.push(this.prescribedValues[dof]);
      } else {
        answer.push(0.0);
      }
    }
    return answer;
  }
  getLocationArray() {
    return this.domain.solver.getNodeLocationArray(this.target, this.domain.solver.getNodeDofIDs(this.target));
  }
}
