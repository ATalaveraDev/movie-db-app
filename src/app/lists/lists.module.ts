import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists.routing.module';
import { ListsPageComponent } from './components/lists-page/lists-page.component';

@NgModule({
  imports: [
    CommonModule,
    ListsRoutingModule
  ],
  declarations: [ListsPageComponent]
})
export class ListsModule { }