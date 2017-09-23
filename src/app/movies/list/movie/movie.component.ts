import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from './movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['movie.component.css']
})
export class MovieComponent {
  @Input() movie: Movie;
  @Output() onMovieClicked: EventEmitter<Movie>;

  constructor() {
    this.onMovieClicked = new EventEmitter<Movie>();
  }
}
