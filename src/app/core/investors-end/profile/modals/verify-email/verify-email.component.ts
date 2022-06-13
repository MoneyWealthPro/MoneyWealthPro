import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(private dialog: MatDialog,
    public dialogRef: MatDialogRef<VerifyEmailComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log('wee', this.data);
  }
   // Close
 close() {
  this.dialog.closeAll();
 }

}
function MD_DIALOG_DATA(MD_DIALOG_DATA: any) {
  throw new Error('Function not implemented.');
}

