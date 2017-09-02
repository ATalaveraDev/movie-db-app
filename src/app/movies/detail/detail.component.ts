import { Component, Input } from '@angular/core';
import { Movie } from '../list/movie/movie.model';

@Component({
  selector: 'movie-detail',
  templateUrl: 'detail.component.html'
})
export class MovieDetailComponent {
  @Input() selectedMovie: Movie;

  constructor() {}
}
