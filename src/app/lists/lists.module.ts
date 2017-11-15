import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsComponent } from './lists.component';
import { ListsRouting } from './lists.routing';
import { GridModule } from './grid/grid.module';

@NgModule({
  imports: [
    CommonModule,
    ListsRouting,
    GridModule
  ],
  declarations: [
    ListsComponent
  ]
})
export class ListsModule { }
