import { createAction, props } from '@ngrx/store';
import {Patient} from "../../shared/models/patient.model";

export const getPatients = createAction('[Patients] Get');
export const getPatientsSuccess = createAction('[Patients] Get Success', props<{ patients: Patient[] }>());
export const getPatientsFail = createAction('[Patients] Get Fail', props<any>());

