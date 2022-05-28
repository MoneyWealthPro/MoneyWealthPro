import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEndRoutingModule } from './admin-end-routing.module';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';


@NgModule({
  declarations: [
    DashboardPanelComponent
  ],
  imports: [
    CommonModule,
    AdminEndRoutingModule
  ]
})
export class AdminEndModule { }
