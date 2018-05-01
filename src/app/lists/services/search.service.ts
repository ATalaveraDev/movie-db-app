import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppService } from '../../app.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient, private appService: AppService) { }

  byTitle(title: string): any {
    return this.http.get(`${environment.tmdb}search/tv?api_key=${this.appService.getApiKey()}&query=${title}`);
  }
}