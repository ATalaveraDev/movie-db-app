import { NgModule, Input } from '@angular/core';
import { MovieDetailComponent } from './detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MovieDetailComponent
  ],
  exports: [
    MovieDetailComponent
  ]
})
export class MovieDetailModule { }
