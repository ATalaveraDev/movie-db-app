import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMoviesComponent } from './list.component';
import { MovieModule } from './movie/movie.module';
import { MovieDetailModule } from '../detail/detail.module';

@NgModule({
  imports: [
    CommonModule,
    MovieModule,
    MovieDetailModule
  ],
  declarations: [
    ListMoviesComponent
  ],
  exports: [
    ListMoviesComponent
  ]
})
export class ListMoviesModule {}
