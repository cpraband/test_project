import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OnboardingFormComponent} from './onboarding-form/onboarding-form.component'

const routes: Routes = [
{path: 'onboarding-form', component: OnboardingFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
