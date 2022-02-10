import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimeliveComponent} from './component/timelive/timelive.component';

const routes: Routes = [
  {
    path: 'timelive',
    component: TimeliveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
