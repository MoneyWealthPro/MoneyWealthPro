import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.welcome();
  }
  // welcome note 
  welcome() {
    this.globalService.getWelcomeNote().subscribe((res: any) => {
      console.log(res);
    })
  }
  // Function 
  register() {
    this.router.navigate(['/core/register'])
  }
}
