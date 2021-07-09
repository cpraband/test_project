
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { EmpProfile } from './hr-onboarding/hr-onboarding.component';
import { EmbeddedTemplateAst } from '@angular/compiler';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class OnboardingDAOService {
  
  

  apiUrl: string = 'https://wviddpe1t9.execute-api.us-east-2.amazonaws.com/dev/userprofile';
  apiGetUrl: string = 'https://wviddpe1t9.execute-api.us-east-2.amazonaws.com/dev/userprofile?getUsers=true&role=';

  
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private authSrv : AuthServiceService) { }

  // Create
  createTask(data): Observable<any> {
    console.log("inside create task : " + data)
    let API_URL = `${this.apiUrl}`;
    console.log(API_URL)
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.error)
      )
  }

  // Read
  getUsers(role:string) : Observable<EmpProfile[]> {
    console.log(`${this.apiGetUrl}`+role)
    const result=this.http.get<EmpProfile[]>(`${this.apiGetUrl}`+role);
    
   
    return result;
  }
  getUsersByStatus(role) : Observable<any>{
    console.log(`${this.apiUrl}`+'?getUsersByStatus=true&role='+ role)
    const result=this.http.get<EmpProfile[]>(`${this.apiUrl}`+'?getUsersByStatus=true&role='+ role);
    return result;
  }

  getEmployeeListByStatus(status: any, usrrole: string)  : Observable<any>{
    const result=this.http.get<EmpProfile[]>(`${this.apiUrl}`+'?getEmployees=true&role='+usrrole+"&status="+status);
    console.log(result);
    return result;
  }

  launchTasks (empProfiles: EmpProfile[] , tasksList:{  role:string, name:string, id:string, checked:boolean} [], updDt: any) : Observable<any>  {
     console.log(empProfiles)
     console.log(tasksList)
     var empIds:string[]=[];
     if(this.authSrv.usrrole == 'recruiter')
     {
      empProfiles.forEach(x => {empIds.push(x.employeeid+':'+x.candidate_status)})
     }
       
      
      else{
        empProfiles.forEach(x => {if(x.isSelected) empIds.push(x.employeeid)})
      }
        console.log(empIds.toString())

     let API_URL = `${this.apiUrl}`;
     return this.http.post(API_URL, {"empIds" : empIds.toString(), "updatedDt":updDt , "updatedBy": this.authSrv.usrrole , "role": this.authSrv.usrrole })
     .pipe(
       catchError(this.error)
     )

  }

  updateStatus(checkedItems :string[], updDt: any) : Observable<any>  {
    console.log(checkedItems)
    let API_URL = `${this.apiUrl}`;
    return this.http.post(API_URL, {"updateStatus" : checkedItems.toString(), "updatedDt":updDt , "updatedBy": this.authSrv.usrrole , "role": this.authSrv.usrrole })
    .pipe(
      catchError(this.error)
    )

 }

  // Handle Errors 
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}