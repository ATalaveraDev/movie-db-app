import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMoviesComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchMoviesComponent
  ],
  exports: [
    SearchMoviesComponent
  ]
})
export class SearchMoviesModule {}
