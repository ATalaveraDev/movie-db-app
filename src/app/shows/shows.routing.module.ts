import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShowsComponent } from 'app/shows/shows.component';

const routes = [
  {
    path: 'shows',
    component: ShowsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShowsRoutingModule { }
