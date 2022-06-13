import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetComponent } from './auth/forget/forget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatesComponent } from './investors-end/profile/modals/rates/rates.component';
import { LogoutModalComponent } from './auth/logout-modal/logout-modal.component';


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
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule
  ],
  entryComponents: [
    RatesComponent
  ]
})
export class CoreModule { }
