import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { UserAccount } from './app.user.account';
import { Session } from './app.session';
import { Constants } from './app.constants';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class AppService {
  private session: Session;
  account: UserAccount;
  private apiKey: string;

  private authEndpoint: string;
  private accessGrantedSubject: ReplaySubject<boolean>;
  accessGranted$: Observable<boolean>;

  accessToken: string;
  account_id: string;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.accessGrantedSubject = new ReplaySubject<boolean>();
    this.accessGranted$ = this.accessGrantedSubject.asObservable();
    this.authEndpoint = `${environment.tmdb}/auth`;
  }

  requestTokenAndRedirect(apiToken: string, path: string): void {
    this.cookieService.set('api_token', apiToken);

    this.http.post(`${this.authEndpoint}/request_token`, {redirect_to: `http://localhost:4200/${path}`}, this.httpHeaders())
      .subscribe((response: any) => {
        this.setRequestToken(response.request_token);
        window.location.href = 'https://www.themoviedb.org/auth/access?request_token=' + response.request_token;
      });
  }

  setRequestToken(requestToken: string): void {
    this.cookieService.set('request_token', requestToken);
  }

  requestAccessToken(): void {
    this.http.post(`${this.authEndpoint}/access_token`, {request_token: this.cookieService.get('request_token')}, this.httpHeaders())
      .subscribe((response: any) => {
        if (response.success) {
          this.setAccessInfo(response);
        }

        this.accessGrantedSubject.next(response.success);
      });
  }

  setAccessInfo(values: any): void {
    this.accessToken = values.access_token;
    this.account_id = values.account_id;
  }

  httpHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${this.cookieService.get('api_token')}`
      }
    };
  }




  getApiKey(): string {
    return this.cookieService.get('apiKey');
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
