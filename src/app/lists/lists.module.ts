import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsComponent } from './lists.component';
import { ListsRouting } from './lists.routing';

@NgModule({
  imports: [
    CommonModule,
    ListsRouting
  ],
  declarations: [
    ListsComponent
  ]
})
export class ListsModule { }
