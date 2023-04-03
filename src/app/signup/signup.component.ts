import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  displayMsg: string = '';
  isAccountCreated: boolean = false;
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
      
  }
  signupform = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  });

  signupdone(){
    console.log(this.signupform.valid);
    this.authservice.signupUser([
      this.signupform.value.name!,
      this.signupform.value.email!,
      this.signupform.value.password!
    ]).subscribe((res) => {
        if (res == 'Success') {
          this.displayMsg = 'Account created Successfully';
          this.isAccountCreated = true;
        } else if (res == 'AlreadyExists') {
          this.displayMsg = 'Try another email. account already exists';
          this.isAccountCreated = false;
        } else {
          this.displayMsg = 'Something went wrong';
          this.isAccountCreated = false;
        }
    })
  }

  get Name(): FormControl {
    return this.signupform.get("name") as FormControl;
  }
  get Email(): FormControl {
    return this.signupform.get("email") as FormControl;
  }
  get Password(): FormControl {
    return this.signupform.get("password") as FormControl;
  }
}
