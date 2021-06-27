import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginV2Component } from './login-v2/login-v2.component';
import { SignupComponent } from './signup/signup.component';
import { ApiService } from './services/api.service';
import { DecamilizePipe } from './pipes/decamilize.pipe';
import { FormgroupControlKeysPipe } from './pipes/formgroup-control-keys.pipe';
import { CookieService } from 'ngx-cookie-service'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginV2Component,
    SignupComponent,
    DecamilizePipe,
    FormgroupControlKeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
