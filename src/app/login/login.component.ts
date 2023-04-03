import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
      
  }

  loginForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  });

  loginDone() { 
    console.log(this.loginForm);
  }

  get Name(): FormControl {
    return this.loginForm.get("name") as FormControl;
  }
  get Password(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }
}
