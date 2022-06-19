import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  referrals: any;
  withdraws: any;
  total_withdrawal: any;
  approved: any;
  investmeted_packages: any;
  total_investment_balance: any;
  deposits: any;
  total_pending_deposited_amount: any;
  total_deposited_amount: any;
  total_unconfirmed_deposited_amount: any;

  constructor(
    private profileService: ProfileService, 
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getReferredUsersList();
    this.getMyWithdraw();
    this.getMyInvesment();
    this.getDeposits();
  }
  // Function to get list of users i referred
  getReferredUsersList() {
    this.profileService.myreferrals().subscribe((res: any) => {
      this.referrals = res['data'];
    })
  }
   // Funtion to get list of withdraw
   getMyWithdraw() {
    this.profileService.mywithdrawals().subscribe((res: any) => {
      this.withdraws = res['data']; 
      let counter2 = 0;
      this.approved = this.withdraws.filter((item: any) => item?.withdraw_status === 'approved');
      for (let i = 0; i < this.approved.length; i++) {
        counter2 = counter2 + this.approved[i]?.requested_amount;
      }
       this.total_withdrawal = counter2;
    }, (err: any) => {
    })
   }
  // Funtion to get list of investment have subcribe to
  getMyInvesment() {
    this.profileService.myinvestments().subscribe((res: any) => {
      this.investmeted_packages = res['data']; 
      for(let i = 0; i < this.investmeted_packages.length; i++){
        this.total_investment_balance += this.investmeted_packages[i]?.amount;
      }
      return  this.total_investment_balance;
    }, (err: any) => {
    })
  }
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
