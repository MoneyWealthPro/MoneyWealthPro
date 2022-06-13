import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css']
})
export class LogoutModalComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }
  logout () {
    localStorage.clear();
    this.router.navigate(['/home']);
    this.dialog.closeAll();
  }
  close () {
    this.dialog.closeAll();
  }
}
