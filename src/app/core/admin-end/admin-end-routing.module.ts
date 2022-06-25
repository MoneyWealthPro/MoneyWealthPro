import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEndComponent } from './admin-end.component';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { DepositManagementComponent } from './deposit-management/deposit-management.component';
import { InvestmentManagementComponent } from './investment-management/investment-management.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    component: AdminEndComponent,
    children: [
      {
      path: 'dashboard',
      component: DashboardPanelComponent
      },
      {
        path: 'user', 
        component: UserManagementComponent
      },
      {
        path: 'investment',
        component: InvestmentManagementComponent
      },
      {
      path: 'deposits',
      component: DepositManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEndRoutingModule { }
