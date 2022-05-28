import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.registerForm  = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(8)]],
    })
  }
  // Function to create 
  createAccount() {
    console.log(this.registerForm.value);
  }
}
