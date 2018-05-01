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

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private cookieService: CookieService) {
    this.form = new FormGroup({
      key: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    this.appService.createToken(this.form.value.key).subscribe(response => {
      // this.appService.setRequestToken(response.request_token);
      this.appService.setAuthenticationParams(response.request_token);
      window.location.href = 'https://www.themoviedb.org/auth/access?request_token=' + response.request_token;
    });
  }
}
