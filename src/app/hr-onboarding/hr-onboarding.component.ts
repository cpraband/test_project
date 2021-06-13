import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-onboarding',
  templateUrl: './hr-onboarding.component.html',
  styleUrls: ['./hr-onboarding.component.css']
})
export class HrOnboardingComponent implements OnInit {

  empProfiles: EmpProfile[] =[
    {employeeid:"1",job_description:"Test",job_classification:"Test",contract_startdt:"2021-02-01",job_location:"Toronto",designation:"Manager",isSelected:false}
  ]
  constructor() { }

  ngOnInit(): void {
    this.getEmpProfiles();
  }
  getEmpProfiles(){
   
    this.empProfiles=[
      {employeeid:"1",job_description:"Test",job_classification:"Test",contract_startdt:"2021-02-01",job_location:"Toronto",designation:"Manager",isSelected:false},
      {employeeid:"2",job_description:"Test2",job_classification:"Test2",contract_startdt:"2021-02-10",job_location:"Toronto",designation:"Engineer",isSelected:false}
    ]
  }

}



class EmpProfile {
  employeeid :string="";
  job_description:string="";
  job_classification:string="";
  contract_startdt:string="";
  job_location:string="";
  designation:string="";
  isSelected:boolean=false;

}