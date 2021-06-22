import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { OnboardingDAOService } from '../onboarding-dao.service';

@Component({
  selector: 'app-new-hires-display',
  templateUrl: './new-hires-display.component.html',
  styleUrls: ['./new-hires-display.component.css']
})
export class NewHiresDisplayComponent implements OnInit {
  statusBoardList : {totalCt:number, status_ct:string, candidate_status:string}[]=[];
   total: number = 0;
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
    this.onboardingsrv.getUsersByStatus(this.authSrv.usrrole).subscribe(data =>  {this.statusBoardList=data
      this.statusBoardList.forEach(x => {
        this.total=this.total+ parseInt(x.status_ct, 10)
      });
     
    });
    
   
  }

}
