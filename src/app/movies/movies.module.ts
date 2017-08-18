import { NgModule } from '@angular/core';
import { CommonModule } from  '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MoviesComponent } from './movies.component';
import { ListComponent } from './list/list.component';
import { MovieComponent } from './list/movie/movie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MoviesComponent,
    ListComponent,
    MovieComponent
  ],
  providers: []
})
export class MoviesModule { }
