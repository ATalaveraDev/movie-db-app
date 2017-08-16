import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-authenticator',
  templateUrl: 'authenticator.component.html',
  styleUrls: ['authenticator.component.css']
})
export class AuthenticatorComponent implements OnInit {
  private form: FormGroup;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      key: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
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
      .then(response => {
        this.appService.setSession(response.json());

        this.appService.getUserAccount(this.appService.getApiKey(), this.appService.getSession())
          .then(response => {
            this.appService.setAccount(response.json());

            this.router.navigate(['/movies']);
          });
      });
  }

  onSubmit(): void {
    this.appService.createToken(this.form.value.key)
      .then(response => {
        window.location.href = 'https://www.themoviedb.org/authenticate/' + response.json().request_token + '?redirect_to=http://localhost:4200/authenticate?key=' + this.form.value.key;
      });
  }
}
