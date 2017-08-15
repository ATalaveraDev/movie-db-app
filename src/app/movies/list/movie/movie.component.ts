import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: any;
  @Output() onMovieDeleted = new EventEmitter<any>();
  checked: Boolean;
  selected: Boolean = false;

  constructor(private http: Http) { }

  ngOnInit() {
    this.checked = this.movie.status === 'Watched';
  }
}
