import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { OnboardingDAOService } from '../onboarding-dao.service';
import rbacItems from '../_files/rbac.json';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';
import { FormGroup, NgForm } from '@angular/forms';
import { EmpProfile } from '../hr-onboarding/hr-onboarding.component';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css'],
  providers: [DatePipe]

})

export class OnboardingFormComponent implements OnInit {

  alert:boolean = false;
  empProfiles: EmpProfile = new EmpProfile();
  
   excelData : string[][]=new Array();
  fieldsList:{ "role":string ,"name":string,"type" : string, "value": string}[]=rbacItems;
  errorAlert:boolean = false;
  myDate = new Date();
  constructor(private daoservice : OnboardingDAOService, public authSrv: AuthServiceService, private datePipe: DatePipe) { }

  ngOnInit(): void {
   // this.daoservice.getUsers() 
   this.fieldsList = this.fieldsList.filter(element => {
    return element.role == this.authSrv.usrrole
    
   });
   
   
  }
  readExcelData(data) {
  this.excelData=data;
  console.log(this.excelData);
  this.empProfiles.first_name=data[1][0];
  this.empProfiles.last_name=data[1][1];
  this.empProfiles.email=data[1][4];
  this.empProfiles.phone_no=data[1][3];
  

  }
  
  
  
  submitEmpFormFunc(formValue): void{
  
  formValue.value.createdBy=this.authSrv.usrrole;
  formValue.value.updatedBy=this.authSrv.usrrole;
  formValue.value.createdDt= this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  formValue.value.updatedDt=this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.daoservice.createTask(formValue.value).subscribe(
      response => {console.log('submitted')
      formValue.reset();
      this.alert=true
     },
      error => {console.log(error)
      this.errorAlert=true
      //formValue.reset();
      }
    );
     
    
  }

}
