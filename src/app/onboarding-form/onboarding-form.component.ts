import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css']
})
export class OnboardingFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  submitEmpFormFunc(formValue): void{
    console.log(formValue)
  }

  
}
