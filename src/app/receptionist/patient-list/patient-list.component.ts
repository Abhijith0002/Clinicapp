import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/models/patient';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';
import {ToastrService}  from 'ngx-toastr'


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  constructor(public receptionistService:ReceptionistService ,public router:Router,private toastr:ToastrService) { }

  p:number=1;
  searchTerm="";
  ngOnInit(): void {
    this.receptionistService.patientLists();
  }

  updatePatients(p:Patient){
    console.log(p);
    this.populatePatientsData(p);
    this.router.navigate(['receptionist/patient_edit',p.id])
  }
  populatePatientsData(p: Patient) {
    this.receptionistService.formPatientsData= Object.assign({},p)
  }


  viewPatients(p:Patient){
    console.log(p);
    this.populatePatientsData(p);
    this.router.navigate(['receptionist/patient_view',p.id])
  }

  deletePatients(id: number) {
    if (confirm('Are you sure you want to delete this patient?')) {
      this.receptionistService.deletePatient(id).subscribe((response)=>{
        console.log(response);
        this.receptionistService.patientLists();
        this.toastr.error("Deleted Successfully");

      },(error)=>{
        console.log(error);
      })

      }
  }

  
}
