import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductEditComponent } from './component/product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
