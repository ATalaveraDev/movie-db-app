import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListsPageComponent } from './components/lists-page/lists-page.component';
import { ListsResolver } from './services/lists.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ListsPageComponent,
    resolve: {
      accountId: ListsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ListsResolver]
})
export class ListsRoutingModule { }