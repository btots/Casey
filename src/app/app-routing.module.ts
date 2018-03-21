import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';
import { BlogmanComponent } from './components/blogman/blogman.component'

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'email-login', component: EmailComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'blogman', component: BlogmanComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}