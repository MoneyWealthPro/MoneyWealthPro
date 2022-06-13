import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  investmets: any;

  constructor(private profileService: ProfileService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getInvestments();
  }
  // Get investment rates
  getInvestments() {
    this.profileService.getInvestments().subscribe((res: any) => {
      this.investmets = res['data'];
    }, (err: any) => {
    })
  }
  // Close
  close() {
    this.dialog.closeAll();
  }
}
