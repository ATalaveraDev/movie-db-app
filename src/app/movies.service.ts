import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import { Constants } from './app.constants';
import { AppService } from './app.service';

@Injectable()
export class MoviesService {
  private subject = new BehaviorSubject<any>([]);
  list$ = this.subject.asObservable();

  constructor(private http: HttpClient, private cookieService: CookieService, private appService: AppService) { }

  getMovies() {
    this.http.get(Constants.END_POINT + '/account/' + this.cookieService.get('accountId') + '/watchlist/movies?api_key=' + this.appService.getApiKey() + '&session_id=' + this.cookieService.get('session'))
        .map((response: any) => {
            this.subject.next(response.results);
        }).subscribe();
  }
}
