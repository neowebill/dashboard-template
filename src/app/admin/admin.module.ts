import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, UtilitiesComponent, AccountsComponent]
})
export class AdminModule { }
