import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'dashboard', loadChildren: './admin/admin.module#AdminModule'},
  {path: 'sims', loadChildren: './hardware/hardware.module#HardwareModule'},
  {path: 'users', loadChildren: './users/users.module#UsersModule'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
