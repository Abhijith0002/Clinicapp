import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/shared/models/appointment';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';

@Component({
  selector: 'app-appointmentbill-add',
  templateUrl: './appointmentbill-add.component.html',
  styleUrls: ['./appointmentbill-add.component.scss']
})
export class AppointmentbillAddComponent implements OnInit {

  appointment!: Appointment;

  constructor(
    private receptionistService: ReceptionistService,
    private route: ActivatedRoute, // Inject ActivatedRoute
    public router:Router

  ) { }

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    this.route.params.subscribe(params => {
      const appointmentId = +params['id']; // Convert the parameter to a number

      this.receptionistService.viewAppointment(appointmentId).subscribe(
        (response) => {
          this.appointment = response;
        },
        (error) => {
          console.error('Error retrieving appointment:', error);
        }
      );
    });
  }

 
 
}