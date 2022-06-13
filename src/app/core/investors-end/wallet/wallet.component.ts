import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/global.service';
import { ProfileService } from 'src/app/services/profile.service';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  deposits: any;
  total_deposited_amount: any = 0;
  total_pending_deposited_amount: any = 0;
  total_confirmed_deposited_amount: any = 0;
  total_unconfirmed_deposited_amount: any = 0;
  constructor(
    private globalService: GlobalService, 
    private dialog: MatDialog,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.getDeposits();
  }
  // payment
  initiatePaymentMethod() {
    let sideBar = {
      status: true
    }
    this.globalService.modalSidebarClass.next(sideBar);
    const dialogRef = this.dialog.open(PaymentOptionsComponent, {
      width: '400px'
    })
    dialogRef.afterClosed().subscribe(result => {
      let sideBar = {
        status: false
      }
      this.globalService.modalSidebarClass.next(sideBar);
    });
  }
  // Get all deposits
  getDeposits() {
    this.profileService.mydeposits().subscribe((res: any) => {
      this.deposits = res['data'];
        this.deposits.reduce((sum: any, a: any)=>{
        if(a?.deposit_status === 'pending') {
          this.total_pending_deposited_amount = sum + a.deposited_amount;
        } else if(a?.deposit_status === 'confirmed') {
           this.total_deposited_amount = sum + a.deposited_amount;
        } else {
          this.total_unconfirmed_deposited_amount = sum + a.deposited_amount;
        }
      },0);
    }, (err: any) => {
    })
  }
}
