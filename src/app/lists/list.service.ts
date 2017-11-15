import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { HttpClient } from '@angular/common/http';

import { Constants } from '../app.constants';
import { AppService } from '../app.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ListService {
  private listsSubject = new ReplaySubject<any>();
  lists$ = this.listsSubject.asObservable();

  constructor(private http: HttpClient, private cookieService: CookieService, private appService: AppService) { }

  getLists(): void {
    this.http.get(Constants.END_POINT + '/account/' + this.cookieService.get('accountId') + '/lists?api_key=' + this.appService.getApiKey() + '&session_id=' + this.cookieService.get('session'))
      .subscribe(response => this.listsSubject.next(response));
  }
}
