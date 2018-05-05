import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListsPageComponent } from './components/lists-page/lists-page.component';
import { ListsResolver } from './services/lists.resolver.service';
import { AuthGuardService } from '../shared/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ListsPageComponent,
    canActivate: [AuthGuardService],
    resolve: {
      accountId: ListsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuardService,
    ListsResolver
  ]
})
export class ListsRoutingModule { }