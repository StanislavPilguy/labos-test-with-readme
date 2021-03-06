import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PatientsFetch} from "./interfaces/patients-fetch";
import {Patient} from "../../shared/models/patient.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private readonly URL = 'https://api.mocki.io/v2/51597ef3';

  constructor(
      private http: HttpClient
  ) { }

  public fetchPatients(): Observable<Patient[]> {
    return this.http.get<PatientsFetch>(this.URL).pipe(
        map((res: PatientsFetch) => {
          return this.transform(res.patient)
        })
    )
  }

  private transform(patients: Patient[]) {
    const getFullYear = (patient) => {
      const str = patient.age;
        const arr = [...str];
        const [ _, ...other] = arr.reverse();
      return +(other.reverse().join(''));
    };
      const getBirthday = (patient, fullYear) => {
      return (new Date()).getFullYear() - fullYear;
    }
    return patients.map(
        patient => ({
          ...patient,
          fullYear:getFullYear(patient),
          birthday:getBirthday(patient, getFullYear(patient))
        })
    )
  }
}
