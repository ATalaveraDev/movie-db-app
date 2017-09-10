import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import { CookieService } from 'ngx-cookie-service';

import { AppService } from '../app.service';

@Component({
  selector: 'app-authenticator',
  templateUrl: 'authenticator.component.html',
  styleUrls: ['authenticator.component.css']
})
export class AuthenticatorComponent {
  private form: FormGroup;
  checkingAuthentication: Boolean;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private cookieService: CookieService) {
    this.checkingAuthentication = true;

    if (this.cookieService.get('accountId') && this.cookieService.get('session') && this.cookieService.get('apiKey')) {
      this.router.navigate(['/movies']);
    } else {
      this.checkingAuthentication = false;
    }

    this.form = new FormGroup({
      key: new FormControl('', Validators.required)
    });

    this.route.queryParams.subscribe((params: Params) => {
      if (params['approved'] && params['key']) {
        this.appService.setApiKey(params['key']);
        this.appService.setToken(params['request_token']);

        this.authenticateAndNavigate();
      }
    });
  }

  authenticateAndNavigate(): void {
    this.appService.createSession(this.appService.getApiKey(), this.appService.getToken())
      .subscribe(() => {
        this.appService.createUserAccount()
          .subscribe(() => {
            this.router.navigate(['/movies']);
          });
      });
  }

  onSubmit(): void {
    this.appService.createToken(this.form.value.key).subscribe(response => {
      window.location.href = 'https://www.themoviedb.org/authenticate/' + response.request_token + '?redirect_to=http://localhost:4200/authenticate?key=' + this.form.value.key;
    });
  }
}
