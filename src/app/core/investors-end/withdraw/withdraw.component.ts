import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { ProfileService } from 'src/app/services/profile.service';
import { WithdrawModalComponent } from './withdraw-modal/withdraw-modal.component';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  withdraws: any;
  total_withdrawal: any  = 0;
  pending_withdraw: any  = 0;
  pending: any;
  approved: any;
  constructor(
    private profileService: ProfileService,
    private dialog: MatDialog,
    private globalService: GlobalService,
  ) { }

  ngOnInit(): void {
    this.getMyWithdraw();
  }
  // Funtion to get list of withdraw
  getMyWithdraw() {
      this.profileService.mywithdrawals().subscribe((res: any) => {
        this.withdraws = res['data']; 
        let counter = 0;
        let counter2 = 0;
        this.pending = this.withdraws.filter((item: any) => item?.withdraw_status === 'pending');
        this.approved = this.withdraws.filter((item: any) => item?.withdraw_status === 'approved');
        for(let i = 0; i < this.pending.length; i++) {
            counter = counter + this.pending[i]?.requested_amount;
        }
        for (let i = 0; i < this.approved.length; i++) {
          counter2 = counter2 + this.approved[i]?.requested_amount;
        }
        this.pending_withdraw = counter;
         this.total_withdrawal = counter2;
      }, (err: any) => {
      })
  }
  // Function to request fund
  requestFund() {
    let sideBar = {
      status: true
    }

    this.globalService.modalSidebarClass.next(sideBar);
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
}
