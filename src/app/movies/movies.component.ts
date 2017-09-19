import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  constructor(private moviesService: MoviesService) {
    this.moviesService.getMovies();
  }

  onClickMovie(movie): void {
    this.moviesService.selectMovie(movie.id);
  }
}
