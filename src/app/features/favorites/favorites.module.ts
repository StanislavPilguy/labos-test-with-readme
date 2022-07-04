import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesComponent } from './favorites/favorites.component';
import {FavoritesRoutingModule} from "./favorites-routing.module";
import { FilterFormComponent } from './favorites/filter-form/filter-form.component';


@NgModule({
  declarations: [FavoritesComponent, FilterFormComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
