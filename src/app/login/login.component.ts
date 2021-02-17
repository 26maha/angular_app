import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormValid: boolean = false;
  areCredentialsValid: boolean = false;
  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm) {

    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsValid = false;
      return
    }

    console.log(signInForm.value, "value");
    const signInData = new SignInData(signInForm.value.inputEmail, signInForm.value.inputPassword);

    if (!this.auth.authenticate(signInData)) {
      this.isFormValid = false;
      this.areCredentialsValid = true;
      return
    }
  }

}
