import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  investments_categories: any;

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.getInvestments();
  }
 // Get investment rates
 getInvestments() {
  this.globalService.getInvestments().subscribe((res: any) => {
    this.investments_categories = res['data'];  
    console.log(this.investments_categories)
  }, (err: any) => {
  })
}
}
