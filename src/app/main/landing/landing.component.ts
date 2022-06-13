import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogoutModalComponent } from 'src/app/core/auth/logout-modal/logout-modal.component';
import { GlobalService } from 'src/app/services/global.service';
declare var LazerCheckout : any;
declare var $: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router, 
    private globalService: GlobalService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  // Function 
  register() {
    this.router.navigate(['/core/register'])
  }
  
  // Lazer pay
  // pay () {
  //   LazerCheckout({
  //     name: "Package Free",
  //     email: "",
  //     amount: "25",
  //     key: "pk_test_xG0EjfzUsGIUDpMeQKZFItGFEBtR5SzHzsqwrzlsdADVzPrjZb",
  //     currency: "USD",
  //     referemce: "ffeefefe",
  //     onClose: (data: any) => {
  //       console.log('Hello Guy start of things', data);
  //     },
  //     onSuccess: (data: any) => {
  //       console.log('Na success be this oo', data);
  //     },
  //     onError: (data: any) => {
  //       console.log('Na Error be this oo', data);
  //     }
  //   })
  // }
}
