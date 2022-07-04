import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Store} from "@ngrx/store";

import {Observable} from "rxjs";
import {Patient} from "../../../shared/models/patient.model";
import { removePatientFromFavorites, selectPatients } from '../../../core/core.module';
import {PatientsState} from "../../../core/patients/patients.reducer";

@Component({
  selector: 'st-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {
  public state$: Observable<PatientsState>

  constructor(
        private store: Store
  ) { }

  ngOnInit(): void {
    this.state$ = this.store.select(selectPatients)
  }

  removeFromFavorite(patient: Patient) {
    this.store.dispatch(removePatientFromFavorites({patient}))
  }
}
