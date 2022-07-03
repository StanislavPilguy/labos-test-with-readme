import { createSelector } from '@ngrx/store';

import {selectPatientsState} from '../core.state';
import { PatientsState } from './patients.reducer';

export const selectPatients = createSelector(
    selectPatientsState,
    (state: PatientsState) => state
);
