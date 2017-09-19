import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../list/movie/movie.model';

@Component({
  selector: 'movie-detail',
  templateUrl: 'detail.component.html'
})
export class MovieDetailComponent {
  @Input() movie$: Observable<Movie>;

  constructor() { }
}


