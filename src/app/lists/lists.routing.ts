import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListsComponent } from './lists.component';

const routes = [
  {
    path: 'lists',
    component: ListsComponent
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
export class ListsRouting { }
