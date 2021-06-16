import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { OnboardingDAOService } from '../onboarding-dao.service';

@Component({
  selector: 'app-new-hires-display',
  templateUrl: './new-hires-display.component.html',
  styleUrls: ['./new-hires-display.component.css']
})
export class NewHiresDisplayComponent implements OnInit {
  statusBoardList : {status_ct:string, emp_status:string}[]=[];
  onboardingStatusBoardList : {recvdCt : string, completed_ct:string}[] = [
    {
      recvdCt:'10',completed_ct:"4"
    },
    {
      recvdCt:'4',completed_ct:"2"
    },
    {
      recvdCt:'5',completed_ct:"4"
    },
    {
      recvdCt:'4',completed_ct:"1"
    },
    {
      recvdCt:'10',completed_ct:"3"
    }
  ]

  constructor(private onboardingsrv: OnboardingDAOService, public authSrv : AuthServiceService) { }

  ngOnInit(): void {
    this.onboardingsrv.getUsersByStatus().subscribe(data => this.statusBoardList=data);
  }

}
