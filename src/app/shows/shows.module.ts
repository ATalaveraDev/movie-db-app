import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows.routing.module';
import { ShowsComponent } from './shows.component';

@NgModule({
  imports: [
    CommonModule,
    ShowsRoutingModule
  ],
  declarations: [
    ShowsComponent
  ]
})
export class ShowsModule { }
