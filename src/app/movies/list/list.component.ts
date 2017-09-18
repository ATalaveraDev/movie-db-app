import { Component, EventEmitter, Output, Input } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Movie } from './movie/movie.model';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListMoviesComponent {
  @Input() list: Array<Movie>;
  @Output() movieClicked = new EventEmitter<any>();

  constructor() { }

  tracker(index, item) {
    return item.id;
  }

  onClickMovie(movie) {
    this.movieClicked.emit(movie);
  }
}
