import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { AppRoutingModule } from './app.routing.module';
import { AuthenticatorModule } from './authenticator/authenticator.module';
import { AppService } from './app.service';

import { ListsModule } from './lists/lists.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MoviesModule,
    AuthenticatorModule,
    AppRoutingModule,
    ListsModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
