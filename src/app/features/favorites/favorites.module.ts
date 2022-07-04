import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesComponent } from './favorites/favorites.component';
import {FavoritesRoutingModule} from "./favorites-routing.module";
import { FilterFormComponent } from './favorites/filter-form/filter-form.component';
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [FavoritesComponent, FilterFormComponent],
    imports: [
        CommonModule,
        FavoritesRoutingModule,
        MatIconModule,
        TranslateModule,
        SharedModule
    ]
})
export class FavoritesModule { }
