import { getPatients, getPatientsSuccess, getPatientsFail } from './patients.actions';
import { createReducer, on, Action } from '@ngrx/store';
import {Patient} from "../../shared/models/patient.model";

export interface PatientsState {
  patients: Patient[]
}

export const initialState: PatientsState = {
  patients: []
};

const reducer = createReducer(
    initialState,
    on(getPatients, (state) => ({ ...state })),
    on(getPatientsSuccess, (state, { patients }) => ({ ...state, patients })),
    on(getPatientsFail, (state, payload) => ({ ...state, payload })),
);

export function patientsReducer(
    state: PatientsState | undefined,
    action: Action
): PatientsState {
  return reducer(state, action);
}
