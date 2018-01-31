import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimListComponent} from './sim-list/sim-list.component';
import {SimFormComponent} from './sim-form/sim-form.component';

const routes: Routes = [
  {path: '', component: SimListComponent},
  {path: 'new', component: SimFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HardwareRoutingModule { }
