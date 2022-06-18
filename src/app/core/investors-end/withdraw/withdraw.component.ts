import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  total_withdrawal: any;

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
        for(let i = 0; i < this.withdraws.length; i++){
          counter = counter + this.withdraws[i]?.requested_amount;
        }
        return this.total_withdrawal = counter;
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
