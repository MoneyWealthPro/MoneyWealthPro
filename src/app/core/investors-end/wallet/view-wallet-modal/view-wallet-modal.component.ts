import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-view-wallet-modal',
  templateUrl: './view-wallet-modal.component.html',
  styleUrls: ['./view-wallet-modal.component.css']
})
export class ViewWalletModalComponent implements OnInit {
  depositForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<ViewWalletModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private profileService: ProfileService
    ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.depositForm  = this.fb.group({
      deposited_amount: ['', [Validators.required]],
      depositor_wallet_address: ['', [Validators.required]],
      depositor_message: ['', [Validators.required]]
    })
  }
  close () {
    this.dialog.closeAll();
  }
  // Function to copy wallet
  copy(val: any) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    // After success copy
  }
  // Function to paid 
  paid() {
    this.profileService.deposit(this.depositForm.value).subscribe((res: any) => {
      this.depositForm.reset();
      this.dialog.closeAll();
    },(err: any) => {
    })
  }
}
