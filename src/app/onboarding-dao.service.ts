
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnboardingDAOService {

  apiUrl: string = 'https://wviddpe1t9.execute-api.us-east-2.amazonaws.com/dev/userprofile';
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create
  createTask(data): Observable<any> {
    console.log("insidecreate task")
    let API_URL = `${this.apiUrl}`;
    console.log(API_URL)
    return this.http.post(API_URL, data, {headers: {
      "Content-Type":"application/json",
      "Access-Control-Allow-Origin" : "*"
  }})
      .pipe(
        catchError(this.error)
      )
  }

  // Read
  showTasks() {
    console.log(this.apiUrl)
    return this.http.get(`${this.apiUrl}`);
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