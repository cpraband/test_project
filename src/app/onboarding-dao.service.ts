
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { EmpProfile } from './hr-onboarding/hr-onboarding.component';
import { EmbeddedTemplateAst } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class OnboardingDAOService {

  apiUrl: string = 'https://wviddpe1t9.execute-api.us-east-2.amazonaws.com/dev/userprofile';
  apiGetUrl: string = 'https://wviddpe1t9.execute-api.us-east-2.amazonaws.com/dev/userprofile?getUsers=true';

  
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

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
  getUsers() : Observable<EmpProfile[]> {
    console.log(this.apiGetUrl)
    const result=this.http.get<EmpProfile[]>(`${this.apiGetUrl}`);
    console.log( result);
   
    return result;
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