import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './component/product/product-list/product-list.component';
import {ProductCreateComponent} from './component/product/product-create/product-create.component';
import {ProductEditComponent} from './component/product/product-edit/product-edit.component';
import {ProductDeleteComponent} from './component/product/product-delete/product-delete.component';


// @ts-ignore
const routes: Routes = [
  {path: '', redirectTo: 'product/list', pathMatch: 'full'},
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
  {path: 'product/delete/:id', component: ProductDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
