import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthServiceService} from '../auth-service.service'

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  errorAlert:boolean =false;
  loginStatus :boolean=false;
  formGroup: FormGroup = new FormGroup({
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    userrole : new FormControl('hr',[Validators.required]),
  })
  constructor(private authsrvc :  AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    //this.initForm();
  }
 
  loginProcess(){
    if(this.formGroup.valid){
       
       if(this.authsrvc.login(this.formGroup.value) )
       this.router.navigateByUrl('home')
       else
        this.errorAlert=true;
        this.authsrvc.usrrole=this.formGroup.value.userrole;
      }
  }


}
