import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { UserAccount } from './app.user.account';
import { Session } from './app.session';
import { Constants } from './app.constants';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {
  private session: Session;
  account: UserAccount;
  private apiKey: string;


  constructor(private http: HttpClient, private cookieService: CookieService) { }

  createToken(apiToken: string): any {
    this.cookieService.set('api_token', apiToken);

    return this.http.post(`${environment.tmdb}/auth/request_token`, {redirect_to: 'http://localhost:4200/lists'}, this.httpHeaders());
  }

  private httpHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${this.cookieService.get('api_token')}`
      }
    };
  }

  setAuthenticationParams(requestToken: string): void {
    this.cookieService.set('request_token', requestToken);
  }

  requestAccessToken(): any {
    return this.http.post(`${environment.tmdb}/auth/access_token`, {request_token: this.cookieService.get('request_token')}, this.httpHeaders());
  }





  getApiKey(): string {
    return this.cookieService.get('apiKey');
  }



  setRequestToken(token) {
    this.cookieService.set('request_token', token);
  }

  getSession(): Session {
    return this.session;
  }

  setSession(session: Session): void {
    this.session = session;
    this.cookieService.set('session', session.session_id);
  }

  createUserAccount(): Observable<void> {
    return this.http.get<UserAccount>(Constants.END_POINT + '/account?api_key=' + this.getApiKey() + '&session_id=' + this.getSession().session_id)
      .map(response => {
        this.setAccount(response);
      });
  }

  getAccount(): UserAccount {
    return this.account;
  }

  setAccount(account: UserAccount): void {
    this.account = account;
    console.log(account)
    this.cookieService.set('accountId', account.id.toString());
  }
}
