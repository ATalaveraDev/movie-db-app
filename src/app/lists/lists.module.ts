import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListsRoutingModule } from './lists.routing.module';
import { ListsPageComponent } from './components/lists-page/lists-page.component';
import { SearchService } from './services/search.service';
import { ListsService } from './services/lists.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListsRoutingModule
  ],
  declarations: [ListsPageComponent],
  providers: [
    SearchService,
    ListsService
  ]
})
export class ListsModule { }