import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductRoutingModule} from './product-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryModule} from '../category/category.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    CategoryModule
  ]
})
export class ProductModule { }
