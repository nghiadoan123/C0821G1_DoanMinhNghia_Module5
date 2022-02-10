import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';


const routes: Routes = [
  {
    path: 'list',
    component: ContractListComponent
  },
  {
    path: 'create',
    component: ContractCreateComponent
  },
  // {
  //   path: 'edit/:id',
  //   component: CustomerEditComponent
  // },
  // {
  //   path: 'delete/:id',
  //   component: CustomerDeleteComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
