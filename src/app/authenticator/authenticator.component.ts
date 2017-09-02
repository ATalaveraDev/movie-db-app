import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import { CookieService } from 'ngx-cookie-service';

import { AppService } from '../app.service';
import { Session } from '../app.session';
import { UserAccount } from '../app.user.account';

@Component({
  selector: 'app-authenticator',
  templateUrl: 'authenticator.component.html',
  styleUrls: ['authenticator.component.css']
})
export class AuthenticatorComponent implements OnInit {
  private form: FormGroup;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private cookieService: CookieService) {
    if (this.cookieService.get('token')) {
      this.appService.readAuthenticationStatus(this.cookieService.get('token'))
          .subscribe(() => {
            this.router.navigate(['/movies']);
          });
    }
  }

  ngOnInit(): void {
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
      .subscribe((response: Session) => {
        this.appService.setSession(response);

        this.appService.getUserAccount(this.appService.getApiKey(), this.appService.getSession())
          .subscribe((response: UserAccount) => {
            this.appService.setAccount(response);
            this.appService.saveUserInfo().subscribe(response => {
              this.cookieService.set('token', response._id);

              this.router.navigate(['/movies']);
            });
          });
      });
  }

  onSubmit(): void {
    this.appService.createToken(this.form.value.key).subscribe(response => {
      window.location.href = 'https://www.themoviedb.org/authenticate/' + response.request_token + '?redirect_to=http://localhost:4200/authenticate?key=' + this.form.value.key;
    });
  }
}
