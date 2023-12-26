import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Appointment } from 'src/app/shared/models/appointment';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  p:number=1;

  constructor(public receptionistService:ReceptionistService ,public router:Router) { }

  ngOnInit(): void {
    this.receptionistService.appointmentList();
  }
  
  viewAppointment(p:Appointment){
    console.log(p);
    this.populateAppointmentData(p);
    this.router.navigate(['receptionist/appointment-view',p.id])
  }

  populateAppointmentData(p: Appointment) {
    this.receptionistService.formAppointmentsData= Object.assign({},p)
  }
  deleteAppointment(id: number) {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.receptionistService.deleteAppointment(id).subscribe((response)=>{
        console.log(response);
        this.receptionistService.appointmentList();
      },(error)=>{
        console.log(error);
      })

      }
  }
}
