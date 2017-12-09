import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMoviesComponent } from './search.component';
import { SearchItemModule } from '../search-item/search-item.module';
import { SearchService } from '../../search/search.service';

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
