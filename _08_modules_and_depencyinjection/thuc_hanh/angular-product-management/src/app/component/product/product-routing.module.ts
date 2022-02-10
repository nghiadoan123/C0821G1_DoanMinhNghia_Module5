import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductCreateComponent} from './product-create/product-create.component';

const routes: Routes = [
  {path: 'list', component: ProductListComponent},
  {path: 'create', component: ProductCreateComponent},
  {path: 'edit/:id', component: ProductEditComponent},
  {path: 'delete/:id', component: ProductDeleteComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
