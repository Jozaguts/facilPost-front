import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {APP_ROUTES} from './app.routes';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

// routes


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
