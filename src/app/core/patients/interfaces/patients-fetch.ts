import {Patient} from "../../../shared/models/patient.model";

export interface PatientsFetch {
    count: number;
    patient: Patient[];
    undisplayedMatches: boolean;
    moreUncountedMatches: boolean;
}
