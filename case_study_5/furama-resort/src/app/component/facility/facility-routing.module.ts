import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {FacilityDeleteComponent} from './facility-delete/facility-delete.component';
import {FacilityListComponent} from './facility-list/facility-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: FacilityListComponent
  },
  {
    path: 'create',
    component: FacilityCreateComponent
  },
  {
    path: 'edit/:id',
    component: FacilityEditComponent
  },
  {
    path: 'delete/:id',
    component: FacilityDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
