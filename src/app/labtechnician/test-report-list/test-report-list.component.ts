import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabReport } from 'src/app/shared/models/lab-report';
import { LabtechnicianService } from 'src/app/shared/services/labtechnician.service';

@Component({
  selector: 'app-test-report-list',
  templateUrl: './test-report-list.component.html',
  styleUrls: ['./test-report-list.component.scss']
})
export class TestReportListComponent implements OnInit {
  
  p :number=1;

  constructor(public labTechniciantService:LabtechnicianService ,public router:Router) { }

  ngOnInit(): void {
    this.labTechniciantService.reportLists();
  }

  populateReportsData(p: LabReport) {
    this.labTechniciantService.formLabReportData= Object.assign({},p)
  }


  viewReport(p:LabReport){
    console.log(p);
    this.populateReportsData(p);
    this.router.navigate(['labtechnician/lab_bill',p.id])
  }
  
}