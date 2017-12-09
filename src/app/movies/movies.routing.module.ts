import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { ListMoviesComponent } from './list/list.component';
import { ListsComponent } from './lists/lists.component';

const moviesRoutes = [
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: 'lists',
        component: ListsComponent
      },
      {
        path: '',
        component: ListMoviesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule {}
