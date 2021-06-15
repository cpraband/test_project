import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import menuItems from '../_files/menus.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginStatus:boolean=false;
  menuList :{  role:string, name:string, routerLink:string}[] = menuItems
  constructor(public auth : AuthServiceService) { }

  ngOnInit(): void {
    this.loginStatus= this.auth.loginStatus;
  }
  logout(){
    this.auth.loginStatus=false;
  }

}
