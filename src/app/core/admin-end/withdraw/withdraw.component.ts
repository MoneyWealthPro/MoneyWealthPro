import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  withdrawals: any;

  constructor(private adminService: AdminService,
    private notifierService: NotifierService) { }

  ngOnInit(): void {
  this.getList();
  }
  getList() {
    this.adminService.getAllWithdraw().subscribe((res: any) => {
      this.withdrawals = res?.data;
    })
  }
  // Approve
  approve(item: any){
    this.adminService.approve_withdraw(item?._id).subscribe((res: any) => {
      this.notifierService.notify('success', `${res?.message}`);
      this.getList();
    },(err: any) => {
      this.notifierService.notify('error', 'Check your details');
    })
  }
  // decline
  decline(item: any){
    this.adminService.decline_withdraw(item?._id).subscribe((res: any) => {
      this.notifierService.notify('success', `${res?.message}`);
      this.getList();
    },(err: any) => {
      this.notifierService.notify('error', 'Check your details');
    })
  }
  // delete
  // delete(item: any) {
  //   this.adminService.delete_deposit(item?._id).subscribe((res: any) => {
  //     this.notifierService.notify('success', `${res?.message}`);
  //     this.getList();
  //   },(err: any) => {
  //     this.notifierService.notify('error', 'Check your details');
  //   })
  // }

}