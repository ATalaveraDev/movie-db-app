import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsComponent } from './lists.component';
import { ListsRouting } from './lists.routing';
import { GridModule } from './grid/grid.module';
import { ListDetailComponent } from './list-detail/list-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ListsRouting,
    GridModule
  ],
  declarations: [
    ListsComponent,
    ListDetailComponent
  ]
})
export class ListsModule { }
