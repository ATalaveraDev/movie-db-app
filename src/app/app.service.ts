import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { UserAccount } from './app.user.account';
import { Session } from './app.session';
import { Constants } from './app.constants';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  private session: Session;
  account: UserAccount;
  private apiKey: string;
  private token: string;

  constructor(private httpClient: HttpClient) { }

  getApiKey(): string {
    return this.apiKey;
  }

  setApiKey(key: string): void {
    this.apiKey = key;
  }

  createToken(key: string): Observable<any> {
    return this.httpClient.get<any>(Constants.END_POINT + '/authentication/token/new?api_key=' + key)
        .map(response => {
          return response;
        });
  }

  getToken(): string {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
  }

  createSession(key, token): Observable<any> {
    return this.httpClient.get<Session>(Constants.END_POINT + '/authentication/session/new?api_key=' + key + '&request_token=' + token)
        .map(response => {
          return response;
        });
  }

  getSession(): Session {
    return this.session;
  }

  setSession(session: Session): void {
    this.session = session;
  }

  getUserAccount(key: string, session: Session): Observable<UserAccount> {
    return this.httpClient.get<UserAccount>(Constants.END_POINT + '/account?api_key=' + key + '&session_id=' + session.session_id)
        .map(response => {
          return response;
        });
  }

  getAccount(): UserAccount {
    return this.account;
  }

  setAccount(account: UserAccount): void {
    this.account = account;
  }

  readAuthenticationStatus(token): Observable<any> {
    console.log(token);
    return this.httpClient.post<any>('http://localhost:8080/authentication/data', {token: token})
      .map((response) => {
        this.setAccount(response.account);
        this.setSession(response.session);
        this.setApiKey(response.apiKey)
      });
  }

  saveUserInfo(): Observable<any> {
    let userInfo = {
      account: this.getAccount(),
      apiKey: this.getApiKey(),
      session: this.getSession()
    };

    return this.httpClient.post('http://localhost:8080/authentication', userInfo);
  }
}
