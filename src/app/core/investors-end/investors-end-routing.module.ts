import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPanelComponent } from '../admin-end/dashboard-panel/dashboard-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestmentComponent } from './investment/investment.component';
import { InvestorsEndComponent } from './investors-end.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { WalletComponent } from './wallet/wallet.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {
    path: '',
    component: InvestorsEndComponent,
    children: [
      {
      path: 'dashboard',
      component: DashboardPanelComponent
      },
      {
        path: 'investment',
        component: InvestmentComponent
      },
      {
        path: 'wallet',
        component: WalletComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'withdraw',
        component: WithdrawComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorsEndRoutingModule { }
