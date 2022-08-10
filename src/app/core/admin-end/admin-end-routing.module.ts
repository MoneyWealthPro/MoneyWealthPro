import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { WithdrawalComponent } from '../investors-end/profile/modals/withdrawal/withdrawal.component';
import { AdminEndComponent } from './admin-end.component';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { DepositManagementComponent } from './deposit-management/deposit-management.component';
import { InvestmentManagementComponent } from './investment-management/investment-management.component';
import { SystemSettingsComponent } from './system-settings/system-settings.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

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
        path: 'withdrawal',
        component: WithdrawComponent
      },
      {
        path: 'investment',
        component: InvestmentManagementComponent
      },
      {
        path: 'system',
        component: SystemSettingsComponent
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
