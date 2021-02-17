import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authUsers = {
    'user1': {
      name: "Admin",
      password: "Admin"
    },
    'user2': {
      name: "MyName",
      password: "test"
    }
  }

  private mockdata1 = new SignInData(this.authUsers.user1.name, this.authUsers.user1.password);
  private mockdata2 = new SignInData(this.authUsers.user2.name, this.authUsers.user2.password);
  public checkCredentialValue: boolean = false;
  public loginUser: any;

  constructor(private router: Router) {
    if (localStorage.getItem("login")) {
      this.checkCredentialValue = true;
    }
    else {

      this.checkCredentialValue = false;
    }
  }

  authenticate(signInData: SignInData): boolean {

    if (this.checkCredential(signInData)) {
      this.checkCredentialValue = true;
      localStorage.setItem('login', 'true');
      this.router.navigate(['/home']);
      this.loginUser = signInData.getName();
      return true;
    }
    this.checkCredentialValue = false;
    return false;

  }

  checkCredential(signInData: any): boolean {
    return this.checkDataOne(signInData.getName(), signInData.getPassword()) ||
      this.checkDataTwo(signInData.getName(), signInData.getPassword());
  }

  checkDataOne(name: string, password: string) {
    return name === this.mockdata1.getName() && password === this.mockdata1.getPassword();
  }

  checkDataTwo(name: string, password: string) {
    return name === this.mockdata2.getName() && password === this.mockdata2.getPassword();
  }

  logOut() {
    this.checkCredentialValue = false;
    localStorage.removeItem('login');
    this.router.navigate(['']);
  }
}
