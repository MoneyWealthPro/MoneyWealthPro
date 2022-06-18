import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetComponent } from './auth/forget/forget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatesComponent } from './investors-end/profile/modals/rates/rates.component';
import { LogoutModalComponent } from './auth/logout-modal/logout-modal.component';
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
    RegisterComponent,
    LoginComponent,
    ForgetComponent,
    RatesComponent,
    LogoutModalComponent
  ],
  imports: [
    CommonModule,
    NotifierModule.withConfig((customNotifierOptions)),
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule
  ],
  entryComponents: [
    RatesComponent
  ]
})
export class CoreModule { }
