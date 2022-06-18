import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  forgetForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService
  ) { }
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.forgetForm  = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.email]],
    })
  }
  login() {
    console.log(this.forgetForm);
  }   

}
