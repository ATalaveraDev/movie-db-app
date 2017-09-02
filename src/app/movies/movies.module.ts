import { NgModule } from '@angular/core';
import { CommonModule } from  '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MoviesComponent } from './movies.component';
import { SearchMoviesModule } from './search/search.module';
import { MoviesRoutingModule } from './movies.routing.module';
import { ListMoviesModule } from './list/list.module';
import { MovieDetailModule } from './detail/detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchMoviesModule,
    ListMoviesModule,
    MovieDetailModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesComponent
  ],
  providers: []
})
export class MoviesModule { }
