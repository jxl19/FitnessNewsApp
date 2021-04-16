import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewsletterComponent } from './create-newsletter/create-newsletter.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PreviousFormComponent } from './previous-form/previous-form.component';
import { PreviousNewsletterComponent } from './previous-newsletter/previous-newsletter.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { UpdateInformationComponent } from './update-information/update-information.component';
import { UpdateNewsletterComponent } from './update-newsletter/update-newsletter.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'login', component:LoginComponent},
  {path:'homepage', component:HomePageComponent},
  {path:'createnewsletter', component:CreateNewsletterComponent},
  {path:'register', component:RegisterPageComponent},
  {path:'updateinfo', component:UpdateInformationComponent},
  {path:'previousnewsletters', component:PreviousNewsletterComponent},
  {path:'updatenewsletter', component:UpdateNewsletterComponent},
  {path:'updatenewsletter/:id', component:UpdateFormComponent},
  {path:'previousnewsletters/:id', component:PreviousFormComponent},
  {path:'pageNotFound', component: NotfoundComponent},
  {path:'**', redirectTo: '/pageNotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
