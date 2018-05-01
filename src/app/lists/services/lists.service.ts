import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { AppService } from '../../app.service';

@Injectable()
export class ListsService {
  constructor(private http: HttpClient, private cookieService: CookieService, private appService: AppService) { }

  getAll(id): any {
    return this.http.get(`https://api.themoviedb.org/4/account/${id}/lists`, { headers: {Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2VjOTkyZGY3NmRiMTcxMDg3MDMxMWNhZjA2OTZiNiIsInN1YiI6IjU0YmMzMWEzOTI1MTQxMzYzNTAwM2FlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.et8vL1hnPkRLTZDAigLksl0CVdw4Rz9VSL0MYEUys0Y
`}});
  }
}