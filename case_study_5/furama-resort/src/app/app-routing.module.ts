import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('./component/customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./component/facility/facility.module').then(module => module.FacilityModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./component/contract/contract.module').then(module => module.ContractModule)
  }
];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {
}
