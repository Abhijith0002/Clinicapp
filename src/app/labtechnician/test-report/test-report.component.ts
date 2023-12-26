import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabReport } from 'src/app/shared/models/lab-report';
import { MedicineHistory } from 'src/app/shared/models/medicine-history';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { LabtechnicianService } from 'src/app/shared/services/labtechnician.service';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';

@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.scss']
})
export class TestReportComponent implements OnInit {

  constructor(public receptionistService:ReceptionistService,public labTechnicianService:LabtechnicianService,public router:Router,    private doctorService: DoctorService,
    ) { }

  ngOnInit(): void {
    this.receptionistService.patientLists();
    this.receptionistService. docAvaPosts();
    this.labTechnicianService.testLists();
    this.labTechnicianService.bindListStaffs();
    

  }
  onSubmit(
    form:NgForm){
      console.log(form.value)
      this.addReport(form);
    }
    
    addReport(form:NgForm){
      console.log("Inserting.....")
      this.labTechnicianService.insertLabReport(form.value)
      .subscribe(
        (result=>{
          console.log(result);
          const newAppointmentId = result.id;
          this.router.navigate([`labtechnician/lab_bill/${newAppointmentId}`]);
          this.resetForm(form);

        })
      )
    }

    resetForm(form:NgForm){
      if(form!=null){
        form.resetForm();
      }
    }

}
