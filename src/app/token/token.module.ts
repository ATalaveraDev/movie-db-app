import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenRoutingModule } from './token.routing.module';
import { TokenPageComponent } from './components/token-page/token-page.component';

@NgModule({
  imports: [
    CommonModule,
    TokenRoutingModule
  ],
  declarations: [
    TokenPageComponent
  ]
})
export class TokenModule { }