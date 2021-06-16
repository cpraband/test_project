import { Component, OnInit } from '@angular/core';
import { OnboardingDAOService } from '../onboarding-dao.service';
import taskItems from '../_files/tasks.json';

@Component({
  selector: 'app-hr-onboarding',
  templateUrl: './hr-onboarding.component.html',
  styleUrls: ['./hr-onboarding.component.css']
})
export class HrOnboardingComponent implements OnInit {
  tasksList :{  role:string, name:string, id:string, checked:boolean}[] = taskItems
  empProfiles: EmpProfile[] = [];
  constructor(private onboardingsrv : OnboardingDAOService) { }
  showTasks:boolean=false;
  selectedEmp:string="";
  alert=false;
  ngOnInit(): void {
  //this.empProfiles = this.getEmpProfiles();
  this.getEmpProfiles();
  }
  getEmpProfiles(){
   
  this.onboardingsrv.getUsers().subscribe(data => this.empProfiles=data);
  console.log(this.empProfiles)
   
  }
  showTasksDiv(){
    console.log("test")
    this.showTasks=true;
    this.alert=false;
    
  }

  radioChangeHandler(event : any){
    console.log(event)
   this.selectedEmp = event.target.id
   
  }

  submitEmpTasks(hrform):  void{
    var index:string =hrform.value.empDetails;
    this.alert=true;
    
    this.onboardingsrv.launchTasks(this.empProfiles, this.tasksList);
   hrform.reset();
    
  }
}



export class EmpProfile {
  employeeid :string="";
  first_name:string="";
  last_name:string="";
  phone_no:string="";
  email:string="";
  supervisorid:string="";
  designation:string="";
  hire_dt:string="";
  job_classification:string="";
  contract_startdt:string="";
  emp_status:string="";
  
  isSelected:boolean=false;

}