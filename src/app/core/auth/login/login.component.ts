import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.loginForm  = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
    })
  }
  login() {
    this.globalService.loginWithEmail(this.loginForm.value).subscribe((res: any) => {
      sessionStorage.setItem("user_token", res?.token);
      this.loginForm.reset();
      this.getUseDetails();
    },(err: any) => {
      console.log('error', err);
    })
  }
  // Function to get the details of logged In User
  getUseDetails() {
    this.globalService.userDetails().subscribe((res: any) => {
      localStorage.setItem('userdata', JSON.stringify(res?.data));
      this.globalService.userData.next(JSON.stringify(res?.data));
      this.router.navigate(['/core/investor/dashboard']);
    }, (err: any) => {
    })
  }

}
