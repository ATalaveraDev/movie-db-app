import { Component, OnInit } from '@angular/core';
import { Movie } from './list/movie/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  selectedMovie: Movie;

  constructor() { }

  onClickMovie(movie) {
    this.selectedMovie = movie;
  }
}
