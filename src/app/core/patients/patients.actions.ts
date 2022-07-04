import { createAction, props } from '@ngrx/store';
import {Patient} from "../../shared/models/patient.model";

export const getPatients = createAction('[Patients] Get');
export const getPatientsSuccess = createAction('[Patients] Get Success', props<{ patients: Patient[] }>());
export const getPatientsFail = createAction('[Patients] Get Fail', props<any>());


export const getPatientsFavorites = createAction('[Patients] Get Favorites');
export const getPatientsFavoritesSuccess = createAction('[Patients] Get Favorites Success', props<{ patientsFavorites: Patient[] }>());
export const getPatientsFavoritesFail = createAction('[Patients] Get Favorites Fail', props<any>());

export const addPatientToFavorites = createAction('[Patients] Add Patient To Favorites ', props<{ patient: Patient }>());
export const removePatientFromFavorites = createAction('[Patients] Remove Patient From Favorites ', props<{ patient: Patient }>());

export const sortPatients = createAction('[Patients] Sort');

export const searchPatients = createAction('[Patients] Search Patients', props<{ query: string }>());


