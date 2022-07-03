import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Patient} from "../../../shared/models/patient.model";
import {map} from "rxjs/operators";
import { removePatientFromFavorites, selectPatients } from '../../../core/core.module';

@Component({
  selector: 'st-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {
  public patientsFavorites$: Observable<Patient[]>;
  constructor(
      private store: Store
  ) { }

  ngOnInit(): void {
    this.patientsFavorites$ = this.store.select(selectPatients).pipe(
        map((data) => {
          return data.patientsFavorites
        })
    )
  }


  removeFromFavorite(patient: Patient) {
    this.store.dispatch(removePatientFromFavorites({patient}))
  }
}
