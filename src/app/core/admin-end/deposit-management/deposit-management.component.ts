import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-deposit-management',
  templateUrl: './deposit-management.component.html',
  styleUrls: ['./deposit-management.component.css']
})
export class DepositManagementComponent implements OnInit {
  deposits: any;

  constructor(private adminService: AdminService,
    private notifierService: NotifierService) { }

  ngOnInit(): void {
  this.getList();
  }
  getList() {
    this.adminService.getAllDeposit().subscribe((res: any) => {
      this.deposits = res?.data;
    })
  }
  // Approve
  approve(item: any){
    this.adminService.approve_deposit(item?._id).subscribe((res: any) => {
      this.notifierService.notify('success', `${res?.message}`);
      this.getList();
    },(err: any) => {
      this.notifierService.notify('error', 'Check your details');
    })
  }
  // decline
  decline(item: any){
    this.adminService.decline_deposit(item?._id).subscribe((res: any) => {
      this.notifierService.notify('success', `${res?.message}`);
      this.getList();
    },(err: any) => {
      this.notifierService.notify('error', 'Check your details');
    })
  }
  // delete
  delete(item: any) {
    this.adminService.delete_deposit(item?._id).subscribe((res: any) => {
      this.notifierService.notify('success', `${res?.message}`);
      this.getList();
    },(err: any) => {
      this.notifierService.notify('error', 'Check your details');
    })
  }

}
