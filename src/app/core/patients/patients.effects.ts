import { Injectable } from '@angular/core';

import {ofType, createEffect, Actions, Effect} from '@ngrx/effects';
import {getPatients, getPatientsSuccess} from './patients.actions';
import {PatientsService} from "./patients.service";
import {map, exhaustMap} from 'rxjs/operators';


@Injectable()
export class PatientsEffects {

    constructor(
        private actions$: Actions,
        private patientsService: PatientsService
    ) {}


    @Effect()
    getPatients$ = createEffect(
        () => this.actions$.pipe(
            ofType(getPatients),
            exhaustMap(
                () => this.patientsService.fetchPatients().pipe(
                    map(
                        (patients) => getPatientsSuccess({ patients })
                    )
                )
            )
        )
    )



}
