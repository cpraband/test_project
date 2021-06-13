import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { NewHiresDisplayComponent } from './new-hires-display/new-hires-display.component';
import {OnboardingFormComponent} from './onboarding-form/onboarding-form.component'
import {HrOnboardingComponent} from './hr-onboarding/hr-onboarding.component'

const routes: Routes = [
{path: 'onboarding-form', component: OnboardingFormComponent},
{path: 'newHires', component: NewHiresDisplayComponent},
{path: '' , component: LoginComponentComponent},
{path: 'home' , component: HomePageComponent},
{path : 'logout' , component : LoginComponentComponent},
{path : 'hr-onboarding', component : HrOnboardingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
