import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";

import {ROUTE_ANIMATIONS_ELEMENTS} from "../../../core/core.module";
import { getPatients, selectPatients, addPatientToFavorites, sortPatients } from '../../../core/core.module';
import { Store } from '@ngrx/store'
import {Patient} from "../../../shared/models/patient.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface Patients {
  code: number;
  fullName:string;
  sex: string;
  age: number;
  address: {
    phone1: string;
  }
  favorites: string;
  birthYear: string;
}


@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  public patients$: Observable<Patient[]>;
  patient: Patient;
  displayedColumns: string[] = ['code', 'fullName', 'sex', 'age', 'birthYear', 'phone', 'favorites'];
  public fullName = 'Full Name';
  public age = 'Age';
  public sex = 'Sex';
  public phone = 'Phone';
  public code = 'Code';
  public favorites = 'Favorites';
  public birthYear = 'Year of birth';

  constructor(
      private store: Store
  ) {}

  ngOnInit() {
    this.patients$ = this.store.select(selectPatients).pipe(
        map((data) => {
          return data.patients
        })
    )
    //this.store.dispatch(getPatients())
  }

  getPatients($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(getPatients())
  }

  addToFavorite(patient: Patient) {
    this.store.dispatch(addPatientToFavorites({patient}))
  }

  filterFavorite() {
    this.store.dispatch(sortPatients())
  }

}
