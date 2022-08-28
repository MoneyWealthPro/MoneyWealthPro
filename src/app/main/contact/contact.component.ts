import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup
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
    this.contactForm  = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.email]],
      name: [''],
      message: ['']
    })
  }

  submit() {
    this.globalService.contact(this.contactForm.value).subscribe((res: any) => {
      this.contactForm.reset();
      this.notifierService.notify('success', `${res?.message}`);
    },(err: any) => {
      this.notifierService.notify('error', err?.message);
    })
  }
}
