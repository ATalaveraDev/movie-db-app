import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListsComponent } from './lists.component';
import { ListDetailComponent } from './list-detail/list-detail.component';

const routes = [
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'lists/:id',
    component: ListDetailComponent
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
