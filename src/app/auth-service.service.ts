import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
public loginStatus:boolean =false;
public usrrole:string = "";
public loginpage:boolean=true;
  constructor() { }

  login(formData) {
    console.log(formData);
    if(formData.username=="admin" && formData.password=="admin"){
      this.loginStatus=true;
      this.loginpage=false;
      return true;
    }
    
    else {
      this.loginStatus=false;
      return false
    }
  }
}
