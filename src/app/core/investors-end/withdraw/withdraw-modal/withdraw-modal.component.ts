import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/global.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-withdraw-modal',
  templateUrl: './withdraw-modal.component.html',
  styleUrls: ['./withdraw-modal.component.css']
})
export class WithdrawModalComponent implements OnInit {
  withdrawForm!: FormGroup;
  constructor(
    private profileService: ProfileService,
    private globalService: GlobalService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.withdrawForm  = this.fb.group({
      requested_amount: ['', [Validators.required]],
      token: ['', [Validators.required]],
      withdraw_method: ['', [Validators.required]],
      message: ['', [Validators.required]],
    })
  }
 // Close
 close() {
  this.dialog.closeAll();
 }
}
