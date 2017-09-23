import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMoviesComponent } from './search.component';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchMoviesComponent
  ],
  exports: [
    SearchMoviesComponent
  ],
  providers: [
    SearchService
  ]
})
export class SearchMoviesModule {}
