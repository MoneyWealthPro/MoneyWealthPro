import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
   users: any;

  constructor(
    private adminService: AdminService,
    private notifierService: NotifierService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.adminService.getAllUsers().subscribe((res: any) => {
      this.users = res?.data;
    })
  }
   // Approve
   assignModerator(item: any){
    this.adminService.user_to_moderator(item?._id).subscribe((res: any) => {
      this.notifierService.notify('success', `${res?.message}`);
      this.getUsers();
    },(err: any) => {
      this.notifierService.notify('error', 'Check your details');
    })
  }
  // view user referral
  viewReferral() {
  }
}
