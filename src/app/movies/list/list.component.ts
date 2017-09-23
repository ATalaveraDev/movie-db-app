import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['list.component.css']
})
export class ListMoviesComponent {
  constructor(private moviesService: MoviesService) {
    this.moviesService.getMovies();
  }

  tracker(index, item): number {
    return item.id;
  }

  onClickMovie(movie): void {
    this.moviesService.selectMovie(movie.id);
  }
}
