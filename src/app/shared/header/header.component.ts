import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogoutModalComponent } from 'src/app/core/auth/logout-modal/logout-modal.component';
import { GlobalService } from 'src/app/services/global.service';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user_data: any;
  constructor(
     private router: Router,
     private globalService: GlobalService,
     private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    $('.open-menu').click( function (){    
    $('div').addClass('activee');  
    });

    $('.close-menu').click( function (){

    $('div').removeClass('activee'); 
    });
    // Check if a user is loggedIn successfully
    this.globalService.userData.subscribe((res: any) => {
      if(res != '') {
        this.user_data = res;
      }
    })
    this.user_data = localStorage.getItem("userdata");
  }
  // Routing Functions
  home() {
    this.router.navigate(['/'])
  }
  plans() {
    this.router.navigate(['/plans'])
  }
  // Logout 
  // Logout
  logout() {
    const dialogRef = this.dialog.open(LogoutModalComponent, {
      width: '300px'
    })
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  

}
