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

  constructor(
    private profileService: ProfileService, 
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getReferredUsersList();
  }
  // Function to get list of users i referred
  getReferredUsersList() {
    this.profileService.myreferrals().subscribe((res: any) => {
      this.referrals = res['data'];
    })
  }
}
