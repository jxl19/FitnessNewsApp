import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewsletterComponent } from './create-newsletter/create-newsletter.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UpdateInformationComponent } from './update-information/update-information.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'login', component:LoginComponent},
  {path:'homepage', component:HomePageComponent},
  {path:'createnewsletter', component:CreateNewsletterComponent},
  {path:'register', component:RegisterPageComponent},
  {path:'updateinfo', component:UpdateInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
