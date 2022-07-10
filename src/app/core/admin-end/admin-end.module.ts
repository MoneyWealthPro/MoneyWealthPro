import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEndRoutingModule } from './admin-end-routing.module';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { AdminEndComponent } from './admin-end.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { InvestmentManagementComponent } from './investment-management/investment-management.component';
import { DepositManagementComponent } from './deposit-management/deposit-management.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

/**
 * Custom angular notifier options
 */
 const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

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
    AdminEndRoutingModule,
    NotifierModule.withConfig((customNotifierOptions)),
  ]
})
export class AdminEndModule { }
