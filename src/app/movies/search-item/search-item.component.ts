import { Component, Input } from '@angular/core';

import { Movie } from '../list/movie/movie.model';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'movie-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {
  @Input() movie: Movie;
  mouseIsOver: boolean;

  constructor(private moviesService: MoviesService) {
    this.mouseIsOver = false;
  }

  onMouseEnter(): void {
    this.mouseIsOver = true;
  }

  onMouseLeave(): void {
    this.mouseIsOver = false;
  }

  addMovie(id): void {
    this.moviesService.addMovieToWatchList(id);
  }
}
