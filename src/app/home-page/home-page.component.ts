import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { OnboardingFormComponent } from '../onboarding-form/onboarding-form.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor(public authSrv : AuthServiceService) { }

  ngOnInit(): void {
  }

}
