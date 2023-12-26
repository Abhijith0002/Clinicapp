import { Component, OnInit } from '@angular/core';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';
import { Appointment } from 'src/app/shared/models/appointment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  p:number=1;

  constructor(public receptionistService:ReceptionistService ,public router:Router) { }

  ngOnInit(): void {
    this.receptionistService.appointmentList();
  }
  
  viewAppointment(p:Appointment){
    console.log(p);
    this.router.navigate(['doctor/view',p.patient_id])
  }

  

      }