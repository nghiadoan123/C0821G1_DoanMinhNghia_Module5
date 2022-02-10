import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import { FacilityCreateComponent } from './facility-create/facility-create.component';
import { FacilityDeleteComponent } from './facility-delete/facility-delete.component';
import { FacilityEditComponent } from './facility-edit/facility-edit.component';
import { FacilityListComponent } from './facility-list/facility-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    FacilityCreateComponent,
    FacilityDeleteComponent,
    FacilityEditComponent,
    FacilityListComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule
  ]
})
export class FacilityModule { }
