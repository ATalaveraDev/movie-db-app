import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatorComponent } from './authenticator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AuthenticatorComponent
  ],
  providers: [
    CookieService
  ]
})
export class AuthenticatorModule { }
