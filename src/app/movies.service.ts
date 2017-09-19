import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import { Constants } from './app.constants';
import { AppService } from './app.service';
import { Movie } from './movies/list/movie/movie.model';

@Injectable()
export class MoviesService {
    private listSubject = new ReplaySubject<Movie>();
    private movieSubject = new ReplaySubject<Movie>();

    list$ = this.listSubject.asObservable();
    movie$ = this.movieSubject.asObservable();

    constructor(private http: HttpClient, private cookieService: CookieService, private appService: AppService) { }

    getMovies() {
        this.http.get(Constants.END_POINT + '/account/' + this.cookieService.get('accountId') + '/watchlist/movies?api_key=' + this.appService.getApiKey() + '&session_id=' + this.cookieService.get('session'))
            .map((response: any) => {
                this.listSubject.next(response.results);
            }).subscribe();
    }

    selectMovie(id) {
        this.http.get(Constants.END_POINT + '/movie/' + id + '?api_key=' + this.appService.getApiKey())
            .map((response: any) => {
                this.movieSubject.next(response);
            }).subscribe();
    }
}
