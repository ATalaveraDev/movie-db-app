import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMoviesComponent } from './search.component';
import { SearchService } from './search.service';
import { SearchItemModule } from '../search-item/search-item.module';

@NgModule({
  imports: [
    CommonModule,
    SearchItemModule
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
