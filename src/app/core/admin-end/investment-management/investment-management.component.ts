import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-investment-management',
  templateUrl: './investment-management.component.html',
  styleUrls: ['./investment-management.component.css']
})
export class InvestmentManagementComponent implements OnInit {
  investments: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllInvestment().subscribe((res: any) => {
      this.investments = res?.data;
      console.log('investments', this.investments);
    })
  }

}
