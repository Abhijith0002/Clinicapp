import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PrescriptionDetails } from 'src/app/shared/models/prescription-details';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-doctor-addmed',
  templateUrl: './doctor-addmed.component.html',
  styleUrls: ['./doctor-addmed.component.scss']
})
export class DoctorAddmedComponent implements OnInit {
  prescriptionDetail: PrescriptionDetails = new PrescriptionDetails();

  constructor(public doctorService: DoctorService, public router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.doctorService.bindlistMedicines();

    // Retrieve the ID from the route parameters
    this.route.params.subscribe(params => {
      const prescriptionId = +params['id']; // Convert the parameter to a number
      // Use the prescriptionId as needed
      console.log(prescriptionId)
      this.doctorService.formPrescriptionDetailData.medicine_prescription = prescriptionId;

    });
  }



  onSubmit(form: NgForm): void {
    console.log(form.value);
    this.addPrescriptionDetail(form);
  }

  addPrescriptionDetail(form: NgForm) {
    console.log("Inserting.....");
    console.log(form.value);

    this.doctorService.insertPrescription(form.value).subscribe(
      result => {
        console.log(result);
        console.log('Prescription added successfully', result);
        this.resetForm(form);

        
      },
      error => {
        console.error('Error adding prescription', error);
        this.resetForm(form);
      }
    );
  }

  resetForm(form: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }
}