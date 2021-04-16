import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateNewsletterComponent } from './create-newsletter/create-newsletter.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UpdateInformationComponent } from './update-information/update-information.component';
import { PreviousNewsletterComponent } from './previous-newsletter/previous-newsletter.component';
import { UpdateNewsletterComponent } from './update-newsletter/update-newsletter.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { PreviousFormComponent } from './previous-form/previous-form.component';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    HomePageComponent,
    NavbarComponent,
    NewsletterComponent,
    CreateNewsletterComponent,
    RegisterPageComponent,
    UpdateInformationComponent,
    PreviousNewsletterComponent,
    UpdateNewsletterComponent,
    UpdateFormComponent,
    PreviousFormComponent,
    ForgotPassComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
