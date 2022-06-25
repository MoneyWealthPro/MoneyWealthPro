import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register-link',
  templateUrl: './register-link.component.html',
  styleUrls: ['./register-link.component.css']
})
export class RegisterLinkComponent implements OnInit {
  registerForm!: FormGroup;
  routeSub: any;
  code: any;
  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    private notifierService: NotifierService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['link'])
      this.code = params['link'];
    })
    this.initForm();
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  initForm() {
    this.registerForm  = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      referral_code: [this.code]
    })
  }
  // Function to create 
  createAccount() {
    this.globalService.registerWithCode(this.registerForm.value).subscribe((res: any) => {
      this.notifierService.notify('success', `${res?.msg}`);
      this.registerForm.reset();
    },(err: any) => {
      this.registerForm.reset();
      this.notifierService.notify('error', 'An issue occured check your details');
    })
  }
}
