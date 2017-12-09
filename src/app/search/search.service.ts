import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ReplaySubject } from 'rxjs';

import { AppService } from 'app/app.service';
import { Constants } from 'app/app.constants';
import { Item } from 'app/shared/item.model';

@Injectable()
export class SearchService {
  private listSubject = new ReplaySubject<Item>();

  list$ = this.listSubject.asObservable();

  constructor(private http: HttpClient, private appService: AppService) { }

  searchMovie(value): void {
    this.http.get(Constants.END_POINT + '/search/movie' + '?api_key=' + this.appService.getApiKey() + '&query=' + value)
      .subscribe((data: any) => this.listSubject.next(data.results));
  }

  search(value: string): void {
    this.http.get(Constants.END_POINT + '/search/multi' + '?api_key=' + this.appService.getApiKey() + '&query=' + value)
      .subscribe((data: any) => this.listSubject.next(data.results));
  }
}
