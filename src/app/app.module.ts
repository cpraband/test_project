import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingFormComponent } from './onboarding-form/onboarding-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { OnboardingDAOService } from './onboarding-dao.service';
import { NewHiresDisplayComponent } from './new-hires-display/new-hires-display.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HrOnboardingComponent } from './hr-onboarding/hr-onboarding.component';


@NgModule({
  declarations: [
    AppComponent,
    OnboardingFormComponent,
    HomePageComponent,
    NewHiresDisplayComponent,
    LoginComponentComponent,
    NavbarComponent,
    HrOnboardingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [OnboardingDAOService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}



  