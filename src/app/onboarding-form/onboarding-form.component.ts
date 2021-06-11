import { Component, OnInit } from '@angular/core';
import { OnboardingDAOService } from '../onboarding-dao.service';


@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css']

})

export class OnboardingFormComponent implements OnInit {

  alert:boolean = false
  errorAlert:boolean = false
  constructor(private daoservice : OnboardingDAOService) { }

  ngOnInit(): void {
    this.daoservice.showTasks() 
  }

  
  submitEmpFormFunc(formValue): void{
  
    this.daoservice.createTask(formValue.value).subscribe(
      response => {console.log('submitted')
      formValue.reset();
      this.alert=true
     },
      error => {console.log(error)
      this.errorAlert=true
      formValue.reset();
      }
    );
     
    
  }

}
