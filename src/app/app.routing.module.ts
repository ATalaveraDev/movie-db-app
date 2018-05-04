import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticatorComponent } from './authenticator/authenticator.component';

const appRoutes: Routes = [
  {
    path: 'authenticate',
    component: AuthenticatorComponent
  },
  {
    path: 'token',
    loadChildren: './token/token.module#TokenModule'
  },
  {
    path: 'search',
    loadChildren: './search/search.module#SearchModule'
  },
  {
    path: 'lists',
    loadChildren: './lists/lists.module#ListsModule'
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
