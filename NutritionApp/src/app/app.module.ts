import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/ui-kit/registration/registration.component';
import { TitleComponent } from './Components/ui-kit/title/title.component';
import { ImageComponent } from './Components/ui-kit/image/image.component';
import { WelcomePage } from './Pages/welcome/welcome.component';
import { DescriptionComponent } from './Components/ui-kit/description/description.component';
import { ButtonComponent } from './Components/ui-kit/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './Components/ui-kit/carousel/carousel.component';
import { FooterComponent } from './Components/ui-kit/footer/footer.component';
import { DotsComponent } from './Components/ui-kit/dots/dots.component';
import { HomePage } from './Pages/home/home.component';
import { CardComponent } from './Components/ui-kit/card/card.component';
import { ProfilePage } from './Pages/profile/profile.component';
import { PreferedPage } from './Pages/prefered/prefered.component';
import { UserprofileComponent } from './Components/ui-kit/userprofile/userprofile.component';
import { ListComponent } from './Components/ui-kit/list/list.component';
import { SwitchComponent } from './Components/ui-kit/switch/switch.component';
import { LoginPage } from './Pages/login/login.component';
import { InputComponent } from './Components/ui-kit/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordRecoveryPage } from './Pages/passwordrecovery/passwordrecovery.component';
import { RegistrationPage } from './Pages/registration/registration.component';
import { FooterButtonComponent } from './Components/ui-kit/footerbutton/footerbutton.component';
import { SearchPage } from './Pages/search/search.component';
import { AddDietPage } from './Pages/add-diet/add-diet.component';
import { CreationDietPage } from './Pages/creationdiet/creationdiet.component';
import { AccordionComponent } from './Components/ui-kit/accordion/accordion.component';
import { ModifyProfilePage } from './Pages/modifyprofile/modifyprofile.component';
import { ModifyDietPage } from './Pages/modifydiet/modifydiet.component';
import { SettingsPage } from './Pages/settings/settings.component';
import { PrivacyPolicyPage } from './Pages/privacypolicy/privacypolicy.component';
import { InsertDietPage } from './Pages/insertdietCopy/insertdiet.component';
@NgModule({
  declarations: [
    AppComponent,
    DotsComponent,
    RegistrationComponent,
    TitleComponent,
    DescriptionComponent,
    ImageComponent,
    WelcomePage,
    HomePage,
    ButtonComponent,
    CarouselComponent,
    FooterComponent,
    CardComponent,
    ProfilePage,
    PreferedPage,
    UserprofileComponent,
    ListComponent,
    SwitchComponent,
    LoginPage,
    InputComponent,
    FooterButtonComponent,
    PasswordRecoveryPage,
    RegistrationPage,
    SearchPage,
    AddDietPage,
    CreationDietPage,
    AccordionComponent,
    ModifyProfilePage,
    ModifyDietPage,
    SettingsPage,
    PrivacyPolicyPage,
    InsertDietPage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
