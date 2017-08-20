import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AppService } from '../../app.service';
import { Constants } from '../../app.constants';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListMoviesComponent implements OnInit {
  list: any;

  constructor(private http: Http, private appService: AppService) {
  }

  ngOnInit() {
    this.getMovies(this.appService.getAccount().id);

  }

  getMovies(id): any {
    return this.http.get(Constants.END_POINT + '/account/' + id + '/watchlist/movies?api_key=' + this.appService.getApiKey() + '&session_id=' + this.appService.getSession().session_id)
      .toPromise()
      .then(response => this.list = response.json().results);
  }

  tracker(index, item) {
    return item.id;
  }
}
