import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  subcribeForm!: FormGroup; 
  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    private router: Router,
    private notifierService: NotifierService
   ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.subcribeForm  = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.email]],
    })
  }
  submit() {
    this.globalService.subcribe(this.subcribeForm.value).subscribe((res: any) => {
      this.subcribeForm.reset();
      this.notifierService.notify('success', `${res?.message}`);
    },(err: any) => {
      // this.loginForm.reset();
      this.notifierService.notify('error', 'Check your details');
    })
  }

}
