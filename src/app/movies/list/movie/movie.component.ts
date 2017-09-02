import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Output() onMovieClicked: EventEmitter<Movie>;

  constructor(private http: HttpClient) {
    this.onMovieClicked = new EventEmitter<Movie>();
  }

  ngOnInit() { }

  movieClicked() {

  }
}
