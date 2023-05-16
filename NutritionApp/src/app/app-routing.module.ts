import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePage } from './Pages/welcome/welcome.component';
import { HomePage } from './Pages/home/home.component';

import { ProfilePage } from './Pages/profile/profile.component';
import { LoginPage } from './Pages/login/login.component';
import { AuthGuard } from './auth.guard';
import { RegistrationPage } from './Pages/registration/registration.component';
import { SearchPage } from './Pages/search/search.component';
import { AddDietPage } from './Pages/add-diet/add-diet.component';
import { CreationDietPage } from './Pages/creationdiet/creationdiet.component';
import { ModifyProfilePage } from './Pages/modifyprofile/modifyprofile.component';
import { ModifyDietPage } from './Pages/modifydiet/modifydiet.component';
import { SettingsPage } from './Pages/settings/settings.component';
import { PrivacyPolicyPage } from './Pages/privacypolicy/privacypolicy.component';
import { InsertDietPage } from './Pages/insertdiet/insertdiet.component';



const routes: Routes = [
  {
    path: '',
    component: WelcomePage,
  },
  {
    path: 'registration',
    component: RegistrationPage
  },
  {
    path: 'insertDiet',
    component: InsertDietPage,
  },
  {
    path: 'addDiet',
    component: AddDietPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'modifyDiet',
    component: ModifyDietPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'modifyProfile',
    component: ModifyProfilePage,
    canActivate: [AuthGuard]
  },
  {
    path: 'creationDiet',
    component: CreationDietPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomePage,
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: SearchPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'privacy&policy',
    component: PrivacyPolicyPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
