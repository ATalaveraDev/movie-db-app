import { Component, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../list/movie/movie.model';
import { Constants } from '../../app.constants';
import { AppService } from '../../app.service';

@Component({
  selector: 'movie-detail',
  templateUrl: 'detail.component.html'
})
export class MovieDetailComponent implements OnChanges {
  @Input() selectedMovie: Movie;
  movie;

  constructor(private httpClient: HttpClient, private appService: AppService) { }

  ngOnChanges() {
    this.httpClient.get(Constants.END_POINT + '/movie/' + this.selectedMovie.id + '?api_key=' + this.appService.getApiKey())
        .map((response: any) => this.movie = response)
        .subscribe();
  }
}


