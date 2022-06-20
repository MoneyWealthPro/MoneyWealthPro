import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileService } from 'src/app/services/profile.service';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-invest-modal',
  templateUrl: './invest-modal.component.html',
  styleUrls: ['./invest-modal.component.css']
})
export class InvestModalComponent implements OnInit {
  investForm!: FormGroup;
  showForm: boolean = false;
  deposits: any;
  total_deposited_amount: any;
  constructor(
      private fb: FormBuilder,
      private dialog: MatDialog,
      public dialogRef: MatDialogRef<InvestModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private profileService: ProfileService,
      private notifierService: NotifierService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getDeposits();
  }
  initForm() {
    this.investForm  = this.fb.group({
      amount: ['', [Validators.required]],
      selected_package: this.data['_id']
    })
  }
  startInvest() {
    this.showForm = true;
  }
  // Function to start work
  putMoney() {
    if(this.investForm.value?.amount > this.total_deposited_amount) {
      this.notifierService.notify('error', 'Top up your wallet');
      this.dialog.closeAll();
    } else {
        this.profileService.investFunds(this.investForm.value).subscribe((res: any) => {
          this.investForm .reset();
          this.notifierService.notify('success', 'Investment done successfully!');
          this.dialog.closeAll();
          },(err: any) => {
        })
     }
  }
  getDeposits() {
    this.profileService.mydeposits().subscribe((res: any) => {
      this.deposits = res['data'];
        this.deposits.reduce((sum: any, a: any)=>{
        if(a?.deposit_status === 'confirmed') {
           this.total_deposited_amount = sum + a.deposited_amount;
        } 
      },0);
    }, (err: any) => {
    })
  }
  close () {
    this.dialog.closeAll();
  }
}
