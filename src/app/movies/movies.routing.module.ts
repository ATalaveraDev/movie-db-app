import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { SearchMoviesComponent } from './search/search.component';
import { ListMoviesComponent } from './list/list.component';

const moviesRoutes = [
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: 'search',
        component: SearchMoviesComponent
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
