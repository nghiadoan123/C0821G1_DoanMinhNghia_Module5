import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListOrderComponent} from './orders/list-order/list-order.component';


const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'orders', component: ListOrderComponent },
  { path: ' ', redirectTo: '/product/list-product' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
