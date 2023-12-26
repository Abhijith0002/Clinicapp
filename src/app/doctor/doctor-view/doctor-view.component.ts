import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/models/patient';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.scss']
})
export class DoctorViewComponent implements OnInit {

  patient!: Patient;
  constructor(
    private receptionistService: ReceptionistService,
    private route: ActivatedRoute // Inject ActivatedRoute
  )  { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const patientId = +params['id']; // Convert the parameter to a number

      this.receptionistService.viewPatient(patientId).subscribe(
        (response) => {
          this.patient = response;
        },
        (error) => {
          console.error('Error retrieving patient:', error);
        }
      );
    });
    
  }

}

