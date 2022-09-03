import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutModalComponent } from '../auth/logout-modal/logout-modal.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-investors-end',
  templateUrl: './investors-end.component.html',
  styleUrls: ['./investors-end.component.css']
})
export class InvestorsEndComponent implements OnInit {
  sideClass: any;
  user_data: any;
  constructor(
     private globalService: GlobalService, 
     private dialog: MatDialog,
     private router: Router
  ) { }

  ngOnInit(): void {
     // Check if a user is loggedIn successfully
     this.globalService.modalSidebarClass.subscribe((res: any) => {
         this.sideClass = res;
    })
    let newObject = window.localStorage.getItem("userdata");
   this.user_data = JSON.parse(newObject!);
  }

    // Function to logut from the system
     // Function to open modal
  openModal(modalTitle: any) { 
    if(modalTitle == 'logout') {
      const dialogRef = this.dialog.open(LogoutModalComponent, {
        width: '300px'
      })
      dialogRef.afterClosed().subscribe(result => {
        let sideBar = {
          status: false
        }
        this.globalService.modalSidebarClass.next(sideBar);
      });
    }
  }
  dashboard() {
    this.router.navigate(['/home']).then(() =>{
      window.location.reload();
    })
  }
  
}
