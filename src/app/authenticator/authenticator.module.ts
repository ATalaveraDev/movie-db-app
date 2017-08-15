import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatorComponent } from './authenticator.component';
import { AppService } from '../app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    AppService
  ]
})
export class AuthenticatorModule { }
