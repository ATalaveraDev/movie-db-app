import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from './movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.css']
})
export class MovieComponent {
  @Input() movie: Movie;
  @Output() onMovieClicked: EventEmitter<Movie>;

  constructor() {
    this.onMovieClicked = new EventEmitter<Movie>();
  }
}
