import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMoviesComponent } from './list.component';
import { MovieModule } from './movie/movie.module';

@NgModule({
  imports: [
    CommonModule,
    MovieModule
  ],
  declarations: [
    ListMoviesComponent
  ]
})
export class ListMoviesModule {}
