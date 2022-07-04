import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Store} from "@ngrx/store";

import {Observable} from "rxjs";
import {Patient} from "../../../shared/models/patient.model";
import { removePatientFromFavorites, selectPatients } from '../../../core/core.module';
import {PatientsState} from "../../../core/patients/patients.reducer";

export interface Patients {
  code: number;
  fullName:string;
  sex: string;
  age: number;
  address: {
    phone1: string
  }
  favorites: string
  birthYear: string;
}

@Component({
  selector: 'st-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {
  public state$: Observable<PatientsState>
  displayedColumns: string[] = ['code', 'fullName', 'sex', 'age', 'birthYear', 'phone', 'favorites'];
  public fullName = 'Full Name';
  public age = 'Age';
  public sex = 'Sex';
  public phone = 'Phone';
  public code = 'Code';
  public favorites = 'Favorites';
  public birthYear = 'Year of birth'

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
