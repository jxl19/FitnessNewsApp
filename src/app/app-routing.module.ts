import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewsletterComponent } from './create-newsletter/create-newsletter.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PreviousFormComponent } from './previous-form/previous-form.component';
import { PreviousNewsletterComponent } from './previous-newsletter/previous-newsletter.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UpdateFormComponent } from './update-form/update-form.component';
import { UpdateInformationComponent } from './update-information/update-information.component';
import { UpdateNewsletterComponent } from './update-newsletter/update-newsletter.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'login', component:LoginComponent},
  {path:'homepage', component:HomePageComponent,canActivate: [AuthGuardService]},
  {path:'createnewsletter', component:CreateNewsletterComponent,canActivate: [AuthGuardService]},
  {path:'register', component:RegisterPageComponent},
  {path:'updateinfo', component:UpdateInformationComponent,canActivate: [AuthGuardService]},
  {path:'previousnewsletters', component:PreviousNewsletterComponent,canActivate: [AuthGuardService]},
  {path:'updatenewsletter', component:UpdateNewsletterComponent,canActivate: [AuthGuardService]},
  {path:'updatenewsletter/:id', component:UpdateFormComponent,canActivate: [AuthGuardService]},
  {path:'previousnewsletters/:id', component:PreviousFormComponent,canActivate: [AuthGuardService]},
  {path:'forgotpass', component:ForgotPassComponent},
  {path:'pageNotFound', component: NotfoundComponent},
  {path:'resetpass', pathMatch: 'full', component:ResetPasswordComponent},
  {path:'resetpass?token=:token', component:ResetPasswordComponent},
  {path:'**', redirectTo: '/pageNotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
