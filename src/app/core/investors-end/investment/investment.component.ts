import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/global.service';
import { ProfileService } from 'src/app/services/profile.service';
import { InvestModalComponent } from './invest-modal/invest-modal.component';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {
  investmets: any;
  investmeted_packages: any;
  total_investment_balance: any = 0;
  constructor(
     private profileService: ProfileService,
     private dialog: MatDialog,
     private globalService: GlobalService, ) { }

  ngOnInit(): void {
    this.getInvestments();
    this.getMyInvesment();
  }
  // Get investment rates
  getInvestments() {
    this.profileService.getInvestments().subscribe((res: any) => {
      this.investmets = res['data'];  
    }, (err: any) => {
    })
  }
  // Modal invest form
  investModal(item: any) {
    let sideBar = {
      status: true
    }
    this.globalService.modalSidebarClass.next(sideBar);
    const dialogRef = this.dialog.open(InvestModalComponent, {
      width: '600px',
      data: item
    })
    dialogRef.afterClosed().subscribe(result => {
      let sideBar = {
        status: false
      }
      this.globalService.modalSidebarClass.next(sideBar);
    });
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
}
