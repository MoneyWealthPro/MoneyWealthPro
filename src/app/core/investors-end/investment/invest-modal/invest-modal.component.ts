import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-invest-modal',
  templateUrl: './invest-modal.component.html',
  styleUrls: ['./invest-modal.component.css']
})
export class InvestModalComponent implements OnInit {
  investForm!: FormGroup;
  showForm: boolean = false;
  constructor(
      private fb: FormBuilder,
      private dialog: MatDialog,
      public dialogRef: MatDialogRef<InvestModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.initForm();
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
   this.profileService.investFunds(this.investForm .value).subscribe((res: any) => {
    this.investForm .reset();
    this.dialog.closeAll();
    },(err: any) => {
    })
  }
  close () {
    this.dialog.closeAll();
  }
}
