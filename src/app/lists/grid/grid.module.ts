import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';
import { ListService } from '../list.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridComponent
  ],
  exports: [
    GridComponent
  ],
  providers: [
    ListService
  ]
})
export class GridModule { }
