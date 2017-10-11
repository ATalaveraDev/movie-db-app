import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../list/movie/movie.model';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'movie-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'detail.component.html'
})
export class MovieDetailComponent {
  @Input() movie$: Observable<Movie>;
  @Output() closeDetail: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  removeMovie() {
    this.closeDetail.emit(false);
  }
}


