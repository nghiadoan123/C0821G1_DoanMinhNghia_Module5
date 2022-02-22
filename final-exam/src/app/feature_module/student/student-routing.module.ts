import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentEditComponent} from './student-edit/student-edit.component';
import {StudentDeleteComponent} from './student-delete/student-delete.component';



const routes: Routes = [
  {
    path: 'list',
    component: StudentListComponent
  },
  {
    path: 'create',
    // component: CustomerCreateComponent
  },
  {
    path: 'edit/:id',
    component: StudentEditComponent
  },
  {
    path: 'delete/:id',
    component: StudentDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
