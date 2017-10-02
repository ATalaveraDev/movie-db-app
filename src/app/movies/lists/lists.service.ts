import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { Constants } from '../../app.constants';
import { AppService } from '../../app.service';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class ListsService {
  private listsSubject = new ReplaySubject<Object>();
  lists$ = this.listsSubject.asObservable();

  constructor(private http: HttpClient, private cookieService: CookieService, private appService: AppService) { }

  getLists() {
    this.http.get(Constants.END_POINT + '/account/' + this.cookieService.get('accountId') + '/lists?api_key=' + this.appService.getApiKey() + '&session_id=' + this.cookieService.get('session'))
      .subscribe((response: any) => this.listsSubject.next(response.results));
  }

  createList(info) {
    this.http.post(Constants.END_POINT + '/list?api_key=' + this.appService.getApiKey() + '&session_id=' + this.cookieService.get('session'), info)
      .subscribe();
  }

  deleteList(id) {
    this.http.delete(Constants.END_POINT + '/list/' + id + '?api_key=' + this.appService.getApiKey() + '&session_id=' + this.cookieService.get('session'))
      .subscribe();
  }
}
