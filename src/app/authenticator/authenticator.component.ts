import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AppService } from '../app.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticator',
  templateUrl: 'authenticator.component.html',
  styleUrls: ['authenticator.component.css']
})
export class AuthenticatorComponent {
  private form: FormGroup;

  constructor(private appService: AppService, private cookieService: CookieService, private router: Router) {
    if (this.cookieService.get('api_token') && this.cookieService.get('request_token')) {
      this.router.navigate(['lists']);
    }
    else {
      this.form = new FormGroup({
        key: new FormControl('', Validators.required)
      });
    }
  }

  onSubmit(): void {
    this.appService.requestTokenAndRedirect(this.form.value.key, 'token');
  }
}
