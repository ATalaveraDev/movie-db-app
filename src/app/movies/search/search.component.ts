import { Component } from '@angular/core';

import { SearchService } from './search.service';

@Component({
  selector: 'movie-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchMoviesComponent {
  constructor(private service: SearchService) { }

  onKey(value) {
    if (value.length > 1) {
      this.service.searchMovie(value);
    }
  }
}
