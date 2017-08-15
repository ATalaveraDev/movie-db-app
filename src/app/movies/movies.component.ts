import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserAccount } from './userAccount';
import { AppService } from '../app.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private list: any;
  private account: UserAccount;

  constructor(private http: Http, private appService: AppService) {
    this.getMovies(this.appService.getAccount().id);
  }

  ngOnInit(): void { }

  getMovies(id): any {
    return this.http.get('https://api.themoviedb.org/3/account/' + id + '/watchlist/movies?api_key=' + this.appService.getApiKey() + '&session_id=' + this.appService.getSession())
      .toPromise()
      .then(response => this.list = response.json().results);
  }
}
