import { Component, OnInit } from '@angular/core';
import { OnboardingDAOService } from '../onboarding-dao.service';
import {Pipe} from '@angular/core';
import {FilterPipe} from '../filter.pipe'
import taskItems from '../_files/tasks.json';
import {AuthServiceService} from  '../auth-service.service';

@Component({
  selector: 'app-searchusers',
  templateUrl: './searchusers.component.html',
  styleUrls: ['./searchusers.component.css']
})
export class SearchusersComponent implements OnInit {
  empProfiles: EmpProfile[] = [];
  searchText:string="";
  tasksList :{  role:string, name:string, id:string}[] = taskItems

  constructor(private onboardingsrv : OnboardingDAOService, public auth : AuthServiceService) { }
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
