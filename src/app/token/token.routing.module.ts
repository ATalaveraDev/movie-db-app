import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TokenPageComponent } from './components/token-page/token-page.component';

const routes: Routes = [
  {
    path: '',
    component: TokenPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokenRoutingModule { }