import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { UserAccount } from './app.user.account';
import { Session } from './app.session';

@Injectable()
export class AppService {
  private session: Session;
  private account: UserAccount;
  private apiKey: string;
  private token: string;

  constructor(private http: Http) { }

  getApiKey(): string {
    return this.apiKey;
  }

  setApiKey(key: string): void {
    this.apiKey = key;
  }

  createToken(key: string): Promise<Response> {
    return this.http.get('https://api.themoviedb.org/3/authentication/token/new?api_key=' + key)
      .toPromise();
  }

  getToken(): string {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
  }

  createSession(key, token): Promise<Response> {
    return this.http.get('https://api.themoviedb.org/3/authentication/session/new?api_key=' + key + '&request_token=' + token)
      .toPromise();
  }

  getSession(): Session {
    return this.session;
  }

  setSession(session: Session): void {
    this.session = session;
  }

  getUserAccount(key: string, session: Session): Promise<Response> {
    return this.http.get('https://api.themoviedb.org/3/account?api_key=' + key + '&session_id=' + session.session_id)
      .toPromise();
  }

  getAccount(): UserAccount {
    return this.account;
  }

  setAccount(account: UserAccount): void {
    this.account = account;
  }
}
