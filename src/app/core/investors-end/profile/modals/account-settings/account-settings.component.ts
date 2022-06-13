import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
  
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  display: boolean = false;
  title_settings : any;
  passwordForm!: FormGroup;
  profileForm!: FormGroup;
  constructor(
    private profileService: ProfileService,
    private globalService: GlobalService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.initForm();
    this.globalService.userDetails().subscribe((res: any) => {
      this.profileForm.patchValue(res?.data);
    })
  }
  initForm() {
    this.passwordForm  = this.fb.group({
      old_password: ['', [Validators.required]],
      new_password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    })
    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      phone_number: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
    
  }
 // Close
 close() {
  this.dialog.closeAll();
 }
// activate action
activate(item: any) {
  this.display = true;
  this.title_settings = item;
}
// Function to change password
changePassword() {
    this.profileService.changePassword(this.passwordForm.value).subscribe((res: any) => {
      this.passwordForm.reset();
      this.dialog.closeAll();
    },(err: any) => {
    })
}
// Update profile
updateProfile() {
  this.profileService.updateProfile(this.profileForm.value).subscribe((res: any) => {
    this.profileForm.reset();
    this.dialog.closeAll();
  },(err: any) => {
  })
}
}
