import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { OnboardingDAOService } from '../onboarding-dao.service';
import rbacItems from '../_files/rbac.json';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css'],
  providers: [DatePipe]

})

export class OnboardingFormComponent implements OnInit {

  alert:boolean = false;
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
