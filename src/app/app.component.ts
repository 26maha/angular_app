import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_crud_json_server';
  constructor(public auth: AuthenticationService, public router: Router,) {

  }
  ngOnInit() {
    console.log("Appppp", this.router.url)

    var parts = location.href.split('/');
    var url = parts[parts.length - 1];

    if (localStorage.getItem('login') == 'true' && url == "home") {

    }
    else {
      this.router.navigateByUrl("");
    }
  }

  logOut() {
    this.auth.logOut();
  }
}
