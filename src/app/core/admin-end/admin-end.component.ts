import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutModalComponent } from '../auth/logout-modal/logout-modal.component';

@Component({
  selector: 'app-admin-end',
  templateUrl: './admin-end.component.html',
  styleUrls: ['./admin-end.component.css']
})
export class AdminEndComponent implements OnInit {

  sideClass: any;
  user_data: any;
  constructor(private globalService: GlobalService,  private dialog: MatDialog) {
    let newObject = window.localStorage.getItem("userdata");
  
    this.user_data = JSON.parse(newObject!);
   }

  ngOnInit(): void {
     // Check if a user is loggedIn successfully
     this.globalService.modalSidebarClass.subscribe((res: any) => {
         this.sideClass = res;
    })
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

}
