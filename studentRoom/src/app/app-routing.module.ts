import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListingsComponent } from './listings/listings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';

import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';

import { ImageComponent } from './images/image/image.component'; 
import { ImageListComponent } from './images/image-list/image-list.component';
import { DisplayListingsComponent } from './display-listings/display-listings.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },

  {path: 'listings', component: ListingsComponent},
  {path:'upload', component: ImageComponent},
  {path: 'list', component: ImageListComponent},
  {path: 'property', component: DisplayListingsComponent},

  

  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'verify-email', component: VerifyEmailComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'profile', component: ProfileComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
