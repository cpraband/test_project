import { Component, OnInit } from '@angular/core';
import { OnboardingDAOService } from '../onboarding-dao.service';

@Component({
  selector: 'app-hr-onboarding',
  templateUrl: './hr-onboarding.component.html',
  styleUrls: ['./hr-onboarding.component.css']
})
export class HrOnboardingComponent implements OnInit {

  empProfiles: EmpProfile[] = [];
  constructor(private onboardingsrv : OnboardingDAOService) { }

  ngOnInit(): void {
  //this.empProfiles = this.getEmpProfiles();
  this.getEmpProfiles();
  }
  getEmpProfiles(){
   
  this.onboardingsrv.getUsers().subscribe(data => this.empProfiles=data);
   
  }

}



export class EmpProfile {
  employeeid :string="";
  first_name:string="";
  last_name:string="";
  designation:string="";
  hire_dt:string="";
  job_classification:string="";
  contract_startdt:string="";
  emp_status:string="";
  
  isSelected:boolean=false;

}