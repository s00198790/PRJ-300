import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';

import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { PropertyComponent } from './property/property.component';
import { UploadPropertyComponent } from './property/upload-property/upload-property.component';
import { DetailedPropertyComponent } from './property/detailed-property/detailed-property.component';

import { DetailComponent } from './components/detail/detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';


const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },

  {path: 'listings', component: PropertyComponent},
   {path:'upload', component: UploadPropertyComponent},
   {path: 'property', component: DetailedPropertyComponent},
  {path: 'detail/:id', component: DetailComponent, outlet: 'd'},

  

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
