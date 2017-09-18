import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from './list/movie/movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  selectedMovie: Movie;

  constructor(private moviesService: MoviesService) {
    this.moviesService.getMovies();
  }

  onClickMovie(movie) {
    this.selectedMovie = movie;
  }
}
