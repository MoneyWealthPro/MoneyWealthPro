import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestorsEndRoutingModule } from './investors-end-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestorsEndComponent } from './investors-end.component';
import { InvestmentComponent } from './investment/investment.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InvestorsEndComponent,
    InvestmentComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    InvestorsEndRoutingModule
  ]
})
export class InvestorsEndModule { }
