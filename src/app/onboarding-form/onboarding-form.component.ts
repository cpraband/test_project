import { Component, OnInit } from '@angular/core';
import { OnboardingDAOService } from '../onboarding-dao.service';


@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css']

})

export class OnboardingFormComponent implements OnInit {

  constructor(private daoservice : OnboardingDAOService) { }

  ngOnInit(): void {
    this.daoservice.showTasks() 
  }

  
  submitEmpFormFunc(formValue): void{
  
    this.daoservice.createTask(formValue).subscribe(
      response => {console.log('submitted')},
      error => {console.log(error)}
      
    );
  }

}
