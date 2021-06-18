import { Component, OnInit } from '@angular/core';
import { OnboardingDAOService } from '../onboarding-dao.service';
import {Pipe} from '@angular/core';
import {FilterPipe} from '../filter.pipe'
import taskItems from '../_files/tasks.json';
import {AuthServiceService} from  '../auth-service.service';
import {EmpProfile} from '../hr-onboarding/hr-onboarding.component';

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
    this.getEmpProfiles(this.auth.usrrole);
    }
    getEmpProfiles(role:string){
     
    this.onboardingsrv.getUsers(role).subscribe(data => this.empProfiles=data);
     
    }
}

