import { Component } from '@angular/core';

import { SearchService } from './search.service';

@Component({
  selector: 'movie-search',
  templateUrl: './search.component.html'
})
export class SearchMoviesComponent {
  constructor(private service: SearchService) { }

  onKey(value) {
    if (value.length > 4) {
      this.service.searchMovie(value);
    }
  }
}
