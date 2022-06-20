import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatDialog } from '@angular/material/dialog';
import { RatesComponent } from './modals/rates/rates.component';
import { AccountSettingsComponent } from './modals/account-settings/account-settings.component';
import { AStoryComponent } from './modals/a-story/a-story.component';
import { VerifyEmailComponent } from './modals/verify-email/verify-email.component';
import { UpdateKycComponent } from './modals/update-kyc/update-kyc.component';
import { ReferralComponent } from './modals/referral/referral.component';
// import { WithdrawalComponent } from './modals/withdrawal/withdrawal.component';
import { ContactUsComponent } from './modals/contact-us/contact-us.component';
import { PointComponent } from './modals/point/point.component';
import { WithdrawModalComponent } from '../withdraw/withdraw-modal/withdraw-modal.component';
import { LogoutModalComponent } from '../../auth/logout-modal/logout-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user_data: any;
  constructor(private globalService: GlobalService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUseDetails();
  }
  // Function to get loggedIn user details
  getUseDetails() {
    this.globalService.userDetails().subscribe((res: any) => {
      this.user_data = res['data'];
      console.log(this.user_data);
      // checks
      let existingUserData = localStorage.getItem("userdata");
      if(existingUserData) {
        localStorage.setItem("userdata", this.user_data);
      }
    }, (err: any) => {
    })
  }


  // Function to open modal
  openModal(modalTitle: any) {
    let sideBar = {
      status: true
    }
    this.globalService.modalSidebarClass.next(sideBar);
    if(modalTitle == 'rate') {
      const dialogRef = this.dialog.open(RatesComponent, {
        width: '600px'
      })
      dialogRef.afterClosed().subscribe(result => {
        let sideBar = {
          status: false
        }
        this.globalService.modalSidebarClass.next(sideBar);
      });
    }
    if(modalTitle == 'account') {
      const dialogRef = this.dialog.open(AccountSettingsComponent, {
        width: '600px'
      })
      dialogRef.afterClosed().subscribe(result => {
        let sideBar = {
          status: false
        }
        this.globalService.modalSidebarClass.next(sideBar);
      });
    }
    if(modalTitle == 'story') {
      const dialogRef = this.dialog.open(AStoryComponent, {
        width: '600px'
      })
      dialogRef.afterClosed().subscribe(result => {
        let sideBar = {
          status: false
        }
        this.globalService.modalSidebarClass.next(sideBar);
      });
    }
    if(modalTitle == 'email') {
      const dialogRef = this.dialog.open(VerifyEmailComponent, {
        width: '600px',
        data: this.user_data
      })
      dialogRef.afterClosed().subscribe(result => {
        let sideBar = {
          status: false
        }
        this.globalService.modalSidebarClass.next(sideBar);
      });
    }
    if(modalTitle == 'kyc') {
      const dialogRef = this.dialog.open(UpdateKycComponent, {
        width: '600px'
      })
      dialogRef.afterClosed().subscribe(result => {
        let sideBar = {
          status: false
        }
        this.globalService.modalSidebarClass.next(sideBar);
      });
    }
    if(modalTitle == 'referral') {
      const dialogRef = this.dialog.open(ReferralComponent, {
        width: '600px'
      })
      dialogRef.afterClosed().subscribe(result => {
        let sideBar = {
          status: false
        }
        this.globalService.modalSidebarClass.next(sideBar);
      });
    }
    if(modalTitle == 'withdraw') {
      const dialogRef = this.dialog.open(WithdrawModalComponent, {
        width: '600px'
      })
      dialogRef.afterClosed().subscribe(result => {
        let sideBar = {
          status: false
        }
        this.globalService.modalSidebarClass.next(sideBar);
      });
    }
    if(modalTitle == 'contact') {
      const dialogRef = this.dialog.open(ContactUsComponent, {
        width: '600px'
      })
      dialogRef.afterClosed().subscribe(result => {
        let sideBar = {
          status: false
        }
        this.globalService.modalSidebarClass.next(sideBar);
      });
    }
    if(modalTitle == 'point') {
      const dialogRef = this.dialog.open(PointComponent, {
        width: '600px'
      })
      dialogRef.afterClosed().subscribe(result => {
        let sideBar = {
          status: false
        }
        this.globalService.modalSidebarClass.next(sideBar);
      });
    }
    if(modalTitle == 'logout') {
      const dialogRef = this.dialog.open(LogoutModalComponent, {
        width: '300px'
      })
      dialogRef.afterClosed().subscribe(result => {
        let sideBar = {
          status: false
        }
        this.globalService.modalSidebarClass.next(sideBar);
      });
    }
  }
}
