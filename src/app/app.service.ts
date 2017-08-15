import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { UserAccount } from './movies/userAccount';
import { Token } from './authenticator/authenticator.token';

@Injectable()
export class AppService {
  private authentication: any;
  private session: any;
  private account: UserAccount;
  private apiKey: string;
  private token: string;

  constructor(private http: Http) {
  }

  setApiKey(key) {
    this.apiKey = key;
  }

  getApiKey() {
    return this.apiKey;
  }

  // Get Request Token
  // https://api.themoviedb.org/3/authentication/token/new?api_key=<<api_key>>
  createToken(key) {
    return this.http.get('https://api.themoviedb.org/3/authentication/token/new?api_key=' + key)
      .toPromise();
  }

  getToken() {
    return this.token;
  }

  setToken(token) {
    this.token = token;
  }

  // Create sesion
  // https://api.themoviedb.org/3/authentication/session/new?api_key=<<api_key>>&request_token=<<request_token>>
  createSession(key, token) {
    return this.http.get('https://api.themoviedb.org/3/authentication/session/new?api_key=' + key + '&request_token=' + token)
      .toPromise();
  }

  getSession() {
    return this.session;
  }

  setSession(session: any) {
    this.session = session;
  }

  // Get account details
  // https://api.themoviedb.org/3/account?api_key=<<api_key>>&session_id=<<session_id>>
  getUserAccount(key, session) {
    return this.http.get('https://api.themoviedb.org/3/account?api_key=' + key + '&session_id=' + session)
      .toPromise();
  }

  getAccount() {
    return this.account;
  }

  setAccount(account: UserAccount) {
    this.account = account;
  }
}
