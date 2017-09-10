import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { UserAccount } from './app.user.account';
import { Session } from './app.session';
import { Constants } from './app.constants';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AppService {
  private session: Session;
  account: UserAccount;
  private apiKey: string;
  private token: string;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  getApiKey(): string {
    return this.cookieService.get('apiKey');
  }

  setApiKey(key: string): void {
    this.cookieService.set('apiKey', key);
  }

  createToken(key: string): Observable<any> {
    return this.httpClient.get<any>(Constants.END_POINT + '/authentication/token/new?api_key=' + key)
        .map(response => {
          return response;
        });
  }

  getToken(): string {
    return this.cookieService.get('token');
  }

  setToken(token: string): void {
    this.cookieService.set('token', token);
  }

  createSession(key, token): Observable<any> {
    return this.httpClient.get<Session>(Constants.END_POINT + '/authentication/session/new?api_key=' + key + '&request_token=' + token)
        .map(response => {
          this.setSession(response);
        });
  }

  getSession(): Session {
    return this.session;
  }

  setSession(session: Session): void {
    this.session = session;
    this.cookieService.set('session', session.session_id);
  }

  createUserAccount(): Observable<void> {
    return this.httpClient.get<UserAccount>(Constants.END_POINT + '/account?api_key=' + this.getApiKey() + '&session_id=' + this.getSession().session_id)
      .map(response => {
        this.setAccount(response);
      });
  }

  getAccount(): UserAccount {
    return this.account;
  }

  setAccount(account: UserAccount): void {
    this.account = account;
    this.cookieService.set('accountId', account.id.toString());
  }
}
