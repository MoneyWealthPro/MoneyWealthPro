import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEndRoutingModule } from './admin-end-routing.module';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { AdminEndComponent } from './admin-end.component';


@NgModule({
  declarations: [
    DashboardPanelComponent,
    AdminEndComponent
  ],
  imports: [
    CommonModule,
    AdminEndRoutingModule
  ]
})
export class AdminEndModule { }
