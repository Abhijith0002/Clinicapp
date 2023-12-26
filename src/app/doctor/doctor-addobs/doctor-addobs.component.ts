import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineHistory } from 'src/app/shared/models/medicine-history';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { LabtechnicianService } from 'src/app/shared/services/labtechnician.service';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';

@Component({
  selector: 'app-doctor-addobs',
  templateUrl: './doctor-addobs.component.html',
  styleUrls: ['./doctor-addobs.component.scss']
})
export class DoctorAddobsComponent implements OnInit {

  medicineHistoryList!:MedicineHistory;

  medicineHistory: MedicineHistory = new MedicineHistory();

  constructor(public doctorService: DoctorService,public receptionistService:ReceptionistService,public labTechnicianService:LabtechnicianService, public router: Router,private route: ActivatedRoute ) { }


  ngOnInit(): void {
    this.labTechnicianService.testLists();
    this.receptionistService.patientLists();
    this.receptionistService. docAvaPosts();  
    
    this.route.params.subscribe(params => {
      const prescriptionId = +params['id']; // Convert the parameter to a number

      this.doctorService.viewMedicineHistory(prescriptionId).subscribe(
        (response) => {
          this.medicineHistoryList = response;
        },
        (error) => {
          console.error('Error retrieving appointment:', error);
        }
      );
    });
  
  }

  goBack() {
    window.history.back();
  }

  onSubmit(
    form:NgForm) {
      console.log(form.value)
      this.addMedicineHistory(form);
    }
    addMedicineHistory(form: NgForm) {
      console.log("Inserting.....");
      console.log(form.value);
    
      // Assign the patient ID from the previous page to the medicineHistory object
      //this.medicineHistory.patientId = // Assign the patient ID here;
    
      this.doctorService.insertMedicineHistory(form.value).subscribe(
        (result) => {
          console.log(result);
          const newAppointmentId = result.id;
          this.router.navigate([`doctor/add-medicine/${newAppointmentId}`]);
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
