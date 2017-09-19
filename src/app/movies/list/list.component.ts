import { Component, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from './movie/movie.model';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['list.component.css']
})
export class ListMoviesComponent {
  @Input() list$: Observable<Movie>;
  @Output() movieClicked = new EventEmitter<any>();

  constructor() { }

  tracker(index, item): number {
    return item.id;
  }

  onClickMovie(movie): void {
    this.movieClicked.emit(movie);
  }
}
