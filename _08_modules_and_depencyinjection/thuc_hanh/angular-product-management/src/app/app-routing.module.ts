import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// @ts-ignore
const routes: Routes = [
  {path: '', redirectTo: 'product/list', pathMatch: 'full'},
  {
    path: 'product',
    loadChildren: () => import('./component/product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./component/category/category.module').then(module => module.CategoryModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
