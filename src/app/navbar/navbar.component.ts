import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginStatus:boolean=false;
  constructor(public auth : AuthServiceService) { }

  ngOnInit(): void {
    this.loginStatus= this.auth.loginStatus;
  }
  logout(){
    this.auth.loginStatus=false;
  }

}
