import { Component, VERSION } from '@angular/core';
import { AuthService } from 'path/to/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(private authService: AuthService) {}

  isLoggedIn() {
    return this.authService.loggedIn;
  }
}
