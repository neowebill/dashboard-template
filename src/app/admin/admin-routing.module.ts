import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UtilitiesComponent } from './utilities/utilities.component';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
      {path: 'utilities', component: UtilitiesComponent},
      {path: 'accounts', component: AccountsComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
