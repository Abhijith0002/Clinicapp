import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabReport } from 'src/app/shared/models/lab-report';
import { LabtechnicianService } from 'src/app/shared/services/labtechnician.service';

@Component({
  selector: 'app-lab-bill',
  templateUrl: './lab-bill.component.html',
  styleUrls: ['./lab-bill.component.scss']
})
export class LabBillComponent implements OnInit {

  labreport!: LabReport;
  constructor(
    private labTechnicianService: LabtechnicianService,
    private route: ActivatedRoute // Inject ActivatedRoute
  )  { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const patientId = +params['id']; // Convert the parameter to a number

      this.labTechnicianService.viewReport(patientId).subscribe(
        (response) => {
          this.labreport = response;
          console.log('Lab Report : ',this.labreport);
        },
        (error) => {
          console.error('Error retrieving patient:', error);
        }
      );
    });
    
  }

}


