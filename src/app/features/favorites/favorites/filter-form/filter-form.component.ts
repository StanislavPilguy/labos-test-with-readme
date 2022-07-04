import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Store} from "@ngrx/store";

import { searchPatients } from '../../../../core/core.module'

@Component({
  selector: 'st-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterFormComponent implements OnInit {

  constructor(
      private store: Store
  ) { }

  ngOnInit(): void {
  }

  search($event: any) {
    this.store.dispatch(searchPatients({query: $event.target.value}))
  }
}
