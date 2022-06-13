import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/global.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ViewWalletModalComponent } from '../view-wallet-modal/view-wallet-modal.component';
declare var LazerCheckout : any;
declare var $: any;
@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {
    address: any;

    constructor(
      private dialog: MatDialog,
      private profileService: ProfileService,
      private globalService: GlobalService,
    ) { }

    ngOnInit(): void {
      this.getWalletAddress() 
    }
    // Modal to view wallet
    pay(item: any) {
      // close intial modal
      let sideBar = {
        status: true
      }
      this.globalService.modalSidebarClass.next(sideBar);
      const dialogRef = this.dialog.open(ViewWalletModalComponent, {
        width: '500px',
        data: item
      })
      dialogRef.afterClosed().subscribe(result => {
        let sideBar = {
          status: false
        }
        this.globalService.modalSidebarClass.next(sideBar);
      });
    }
    // close modal
    close() {
      this.dialog.closeAll();
    }
    // Function to call wallet address
    getWalletAddress() {
        this.profileService.getAddress().subscribe((res: any) => {
          this.address = res['data'];
        }, (err: any) => {
        })
    }
    // Initiate payment
    // LazerCheckout({
    //   name: "Package Free",
    //   email: "",
    //   amount: "25",
    //   key: "pk_test_xG0EjfzUsGIUDpMeQKZFItGFEBtR5SzHzsqwrzlsdADVzPrjZb",
    //   currency: "USD",
    //   reference: "ffeefefe",
    //   onClose: (data: any) => {
    //     console.log('Hello Guy start of things', data);
    //   },
    //   onSuccess: (data: any) => {
    //     console.log('Na success be this oo', data);
    //   },
    //   onError: (data: any) => {
    //     console.log('Na Error be this oo', data);
    //   }
    // })
}
