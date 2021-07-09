import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { EmpProfile } from '../hr-onboarding/hr-onboarding.component';
import { OnboardingDAOService } from '../onboarding-dao.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-new-hires-display',
  templateUrl: './new-hires-display.component.html',
  styleUrls: ['./new-hires-display.component.css']
})
export class NewHiresDisplayComponent implements OnInit {
  statusBoardList : {totalCt:number, status_ct:string, candidate_status:string}[]=[];
  empProfiles :EmpProfile[] =[]
  showEmpList:boolean=false
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
  getEmployees(e) {
    
    let status = e.target.id;
    console.log(status)

    this.onboardingsrv.getEmployeeListByStatus(status,this.authSrv.usrrole).subscribe(data =>  {this.empProfiles=data;
      console.log(data)
      this.showEmpList=true;
     });

  }

  exportToExcel(){
    let element = document.getElementById("excel-table");
    const ws : XLSX.WorkSheet = XLSX.utils.table_to_sheet(element)
    const wb : XLSX.WorkBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb,ws,'Employee Data')
    XLSX.writeFile(wb,'DownloadedData.xlsx')

  }

}
