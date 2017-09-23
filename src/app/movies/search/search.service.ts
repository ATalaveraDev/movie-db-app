import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constants } from '../../app.constants';
import { AppService } from '../../app.service';
import { ReplaySubject } from 'rxjs';
import { Movie } from '../list/movie/movie.model';

@Injectable()
export class SearchService {
  private listSubject = new ReplaySubject<Movie>();

  list$ = this.listSubject.asObservable();

  constructor(private http: HttpClient, private appService: AppService) { }

  searchMovie(value): void {
    this.http.get(Constants.END_POINT + '/search/movie' + '?api_key=' + this.appService.getApiKey() + '&query=' + value)
      .subscribe((data: any) => this.listSubject.next(data.results));
  }
}
