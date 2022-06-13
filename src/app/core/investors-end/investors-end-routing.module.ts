import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestmentComponent } from './investment/investment.component';
import { InvestorsEndComponent } from './investors-end.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [

  {
    path: '',
    component: InvestorsEndComponent,
    children: [
      {
      path: 'dashboard',
      component: DashboardComponent
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorsEndRoutingModule { }
