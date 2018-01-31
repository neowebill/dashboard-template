import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersFormComponent} from './users-form/users-form.component';

const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: 'new', component: UsersFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
