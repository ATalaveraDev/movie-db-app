import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppService } from '../../app.service';
import { Movie } from './movie/movie.model';
import { Constants } from '../../app.constants';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListMoviesComponent implements OnInit {
  list: Array<Movie>;
  @Output() movieClicked = new EventEmitter<any>();

  constructor(private http: HttpClient, private appService: AppService, private cookieService: CookieService) { }

  ngOnInit() {
    this.getMovies(this.cookieService.get('accountId'));
  }

  getMovies(id): any {
    return this.http.get(Constants.END_POINT + '/account/' + id + '/watchlist/movies?api_key=' + this.appService.getApiKey() + '&session_id=' + this.cookieService.get('session'))
      .map((response: any) => this.list = response.results)
      .subscribe();
  }

  tracker(index, item) {
    return item.id;
  }

  onClickMovie(movie) {
    this.movieClicked.emit(movie);
  }
}
