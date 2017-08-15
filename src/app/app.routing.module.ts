import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { AuthenticatorComponent } from './authenticator/authenticator.component';

const appRoutes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'authenticate',
    component: AuthenticatorComponent
  },
  {
    path: '',
    redirectTo: 'authenticate',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
