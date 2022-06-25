import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEndRoutingModule } from './admin-end-routing.module';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { AdminEndComponent } from './admin-end.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { InvestmentManagementComponent } from './investment-management/investment-management.component';
import { DepositManagementComponent } from './deposit-management/deposit-management.component';


@NgModule({
  declarations: [
    DashboardPanelComponent,
    AdminEndComponent,
    UserManagementComponent,
    InvestmentManagementComponent,
    DepositManagementComponent
  ],
  imports: [
    CommonModule,
    AdminEndRoutingModule
  ]
})
export class AdminEndModule { }
