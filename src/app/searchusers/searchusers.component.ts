import { Component, OnInit } from '@angular/core';
import { OnboardingDAOService } from '../onboarding-dao.service';
import {Pipe} from '@angular/core';
import {FilterPipe} from '../filter.pipe'
import taskItems from '../_files/tasks.json';
import {AuthServiceService} from  '../auth-service.service';
import {EmpProfile} from '../hr-onboarding/hr-onboarding.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-searchusers',
  templateUrl: './searchusers.component.html',
  styleUrls: ['./searchusers.component.css'],
  providers : [DatePipe]
})
export class SearchusersComponent implements OnInit {
  empProfiles: EmpProfile[] = [];
  searchText:string="";
  tasksList :{  role:string, name:string, id:string, checked:boolean , empid:string}[] = taskItems
  checkedItems : string[] =[];
  alert:boolean =false;
  constructor(private onboardingsrv : OnboardingDAOService, public auth : AuthServiceService, private datePipe: DatePipe) { }
  ngOnInit(): void {
    //this.empProfiles = this.getEmpProfiles();
    this.getEmpProfiles(this.auth.usrrole);
    this.tasksList = this.tasksList.filter(x=> x.role==this.auth.usrrole)
    }
    getEmpProfiles(role:string){
     
    this.onboardingsrv.getUsers(role).subscribe(data => this.empProfiles=data);
     
    }
    onChange(e){
      let empid =e.target.id.split(':')[0]
      let taskname =e.target.id.split(':')[1]
      
      if(e.target.checked){
        this.checkedItems.push(e.target.id)
      }
      else{
       let index= this.checkedItems.findIndex(x=>x==e.target.id)
       this.checkedItems.splice(index,1)
      }
      console.log(this.checkedItems)
    }
    submitTasks(hrform):  void{
      var index:string =hrform.value.empDetails;
      this.alert=true;
      var myDate = new Date();
      var updDt = this.datePipe.transform(myDate, 'yyyy-MM-dd');
      console.log(this.empProfiles)
      console.log(this.tasksList)
      this.onboardingsrv.updateStatus(this.checkedItems, updDt).subscribe(
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

