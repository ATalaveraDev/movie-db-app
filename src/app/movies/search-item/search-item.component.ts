import { Component, Input } from '@angular/core';

import { Movie } from '../list/movie/movie.model';

@Component({
  selector: 'movie-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {
  @Input() movie: Movie;

  constructor() { }
}
