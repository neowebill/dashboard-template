import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HardwareRoutingModule } from './hardware-routing.module';
import { HardwareComponent } from './hardware.component';
import { SimFormComponent } from './sim-form/sim-form.component';
import { SimListComponent } from './sim-list/sim-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HardwareRoutingModule,
    SharedModule
  ],
  declarations: [HardwareComponent, SimListComponent, SimFormComponent],
})
export class HardwareModule { }
