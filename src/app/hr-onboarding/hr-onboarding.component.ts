import { Component, OnInit } from '@angular/core';
import { OnboardingDAOService } from '../onboarding-dao.service';
import taskItems from '../_files/tasks.json';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-hr-onboarding',
  templateUrl: './hr-onboarding.component.html',
  styleUrls: ['./hr-onboarding.component.css'],
  providers: [DatePipe]
})
export class HrOnboardingComponent implements OnInit {
  tasksList :{  role:string, name:string, id:string, checked:boolean}[] = taskItems
  empProfiles: EmpProfile[] = [];
  constructor(private onboardingsrv : OnboardingDAOService,private datePipe: DatePipe) { }
  showTasks:boolean=false;
  selectedEmp:string="";
  alert=false;
  ngOnInit(): void {
  //this.empProfiles = this.getEmpProfiles();
  this.getEmpProfiles();
  }
  getEmpProfiles(){
   
  this.onboardingsrv.getUsers("").subscribe(data => this.empProfiles=data);
  console.log(this.empProfiles)
   
  }
  showTasksDiv(){
    console.log("test")
    this.showTasks=true;
    this.alert=false;
    
  }

  submitEmpTasks(hrform):  void{
    var index:string =hrform.value.empDetails;
    this.alert=true;
    var myDate = new Date();
    var updDt = this.datePipe.transform(myDate, 'yyyy-MM-dd');
    this.onboardingsrv.launchTasks(this.empProfiles, this.tasksList, updDt).subscribe(
      response => {console.log(response)
      
      //this.alert=true
     },
      error => {console.log(error)
      //this.errorAlert=true
      //formValue.reset();
      }
    );
    
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
  job_title:string="";
  emp_type:string="";
  contract_startdt:string="";
  candidate_status:string="";
  isSelected:boolean=false;

}