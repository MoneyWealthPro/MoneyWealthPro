import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.css']
})
export class DashboardPanelComponent implements OnInit {
  deposits: any;
  total_pending_deposited_amount: any;
  total_deposited_amount: any;
  total_unconfirmed_deposited_amount: any;
  total_investment_balance: any;
  investmeted_packages: any;
  total_withdrawal: any;
  approved: any;
  withdraws: any;
  pending_withdraw: any;
  total_pending_withdraw: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getMyWithdraw();
    this.getMyInvesment();
    this.getDeposits();
  }
    // Funtion to get list of withdraw
    getMyWithdraw() {
      this.adminService.getAllWithdraw().subscribe((res: any) => {
        this.withdraws = res['data']; 
        let counter2 = 0;
        let counter1 = 0;
        this.approved = this.withdraws.filter((item: any) => item?.withdraw_status === 'approved');
        this.pending_withdraw = this.withdraws.filter((item: any) => item?.withdraw_status === 'pending');
        for (let i = 0; i < this.approved.length; i++) {
          counter2 = counter2 + this.approved[i]?.requested_amount;
        }
        
        for (let i = 0; i < this.pending_withdraw.length; i++) {
          counter1 = counter1 + this.pending_withdraw[i]?.requested_amount;
        }
        this.total_pending_withdraw = counter1;
         this.total_withdrawal = counter2;
      }, (err: any) => {
      })
     }
    // Funtion to get list of investment have subcribe to
    getMyInvesment() {
      this.adminService.getAllInvestment().subscribe((res: any) => {
        this.investmeted_packages = res['data']; 
        let counter = 0;
        for(let i = 0; i < this.investmeted_packages.length; i++){
          counter = counter + this.investmeted_packages[i]?.amount;
        }
        this.total_investment_balance = counter;
      }, (err: any) => {
      })
    }
    getDeposits() {
      this.adminService.getAllDeposit().subscribe((res: any) => {
        this.deposits = res['data'];
          this.deposits.reduce((sum: any, a: any)=>{
            console.log('a:', a, 'sum:', sum);
          if(a?.deposit_status === 'pending') {
            this.total_pending_deposited_amount = sum + a.deposited_amount;
            console.log('p', this.total_pending_deposited_amount)
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
