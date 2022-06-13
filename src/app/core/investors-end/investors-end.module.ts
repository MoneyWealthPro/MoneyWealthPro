import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestorsEndRoutingModule } from './investors-end-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestorsEndComponent } from './investors-end.component';
import { InvestmentComponent } from './investment/investment.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountSettingsComponent } from './profile/modals/account-settings/account-settings.component';
import { AStoryComponent } from './profile/modals/a-story/a-story.component';
import { VerifyEmailComponent } from './profile/modals/verify-email/verify-email.component';
import { UpdateKycComponent } from './profile/modals/update-kyc/update-kyc.component';
import { ContactUsComponent } from './profile/modals/contact-us/contact-us.component';
import { WithdrawalComponent } from './profile/modals/withdrawal/withdrawal.component';
import { ReferralComponent } from './profile/modals/referral/referral.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutModalComponent } from '../auth/logout-modal/logout-modal.component';
import { WalletComponent } from './wallet/wallet.component';
import { PaymentOptionsComponent } from './wallet/payment-options/payment-options.component';
import { ViewWalletModalComponent } from './wallet/view-wallet-modal/view-wallet-modal.component';
import { InvestModalComponent } from './investment/invest-modal/invest-modal.component';
import { PointComponent } from './profile/modals/point/point.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InvestorsEndComponent,
    InvestmentComponent,
    ProfileComponent,
    SettingsComponent,
    AccountSettingsComponent,
    AStoryComponent,
    VerifyEmailComponent,
    UpdateKycComponent,
    ContactUsComponent,
    WithdrawalComponent,
    ReferralComponent,
    WalletComponent,
    PaymentOptionsComponent,
    ViewWalletModalComponent,
    InvestModalComponent,
    PointComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    InvestorsEndRoutingModule
  ],
  entryComponents: [
    VerifyEmailComponent,
    LogoutModalComponent
  ]

})
export class InvestorsEndModule { }
