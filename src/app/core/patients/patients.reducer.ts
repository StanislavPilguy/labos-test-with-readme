import {
  getPatients,
  getPatientsSuccess,
  getPatientsFail,
  addPatientToFavorites,
  removePatientFromFavorites,
  getPatientsFavorites,
  getPatientsFavoritesSuccess,
  getPatientsFavoritesFail,
  sortPatients,
} from './patients.actions';
import { createReducer, on, Action } from '@ngrx/store';
import {Patient} from "../../shared/models/patient.model";

export interface PatientsState {
  patients: Patient[],
  patientsFavorites: Patient[];
}

export const initialState: PatientsState = {
  patients: [],
  patientsFavorites: []
};

const reducer = createReducer(
    initialState,
    on(getPatients, (state) => ({ ...state })),
    on(getPatientsSuccess, (state, { patients }) => ({ ...state, patients })),
    on(getPatientsFail, (state, payload) => ({ ...state, payload })),

    on(getPatientsFavorites, (state) => ({ ...state })),
    on(getPatientsFavoritesSuccess, (state, { patientsFavorites }) => ({ ...state, patientsFavorites })),
    on(getPatientsFavoritesFail, (state, payload) => ({ ...state, payload })),

    on(addPatientToFavorites, (state, { patient }) =>  {
       const candidate = state.patientsFavorites.find((p) => p.code === patient.code);
      if (candidate) {
        return {
          ...state,
        }
      } else {
          return {
              ...state,
              patientsFavorites: [...state.patientsFavorites, patient],
              patients: [...state.patients].map(
                  p => p.code === patient.code?{ ...patient, isFavorite: true }:p
              )
          }
      }
    }),
    on(removePatientFromFavorites, (state, { patient} ) => {
        const candidate = state.patientsFavorites.find((p) => p.code === patient.code);
        if (candidate) {
            return {
                ...state,
                patients: [...state.patients].map(
                    p => p.code === patient.code?{ ...patient, isFavorite: false }:p
                ),
                patientsFavorites: [...state.patientsFavorites].filter(
                    p => p.code !== patient.code
                )
            }
        } else {
            return {
                ...state,
            }
        }
    }),

    on(sortPatients, (state) => ({
        ...state,
        patients: [...state.patients].sort((a, b) => b.birthday - a.birthday)
    })),
);


export function patientsReducer(
    state: PatientsState | undefined,
    action: Action
): PatientsState {
  return reducer(state, action);
}
