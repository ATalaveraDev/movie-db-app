import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) { }

  byTitle(): void {
    this.http.get('https://api.themoviedb.org/3/search/multi?api_key=&query=');
  }
}