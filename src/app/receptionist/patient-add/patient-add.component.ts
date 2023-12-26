import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  constructor(public receptionistService:ReceptionistService,public router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  //insert method and call insert method in service
  addMethod(){
    
  }

  calculateAge() {
    const dob = new Date(this.receptionistService.formPatientsData.dateofbirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    // If the birthday hasn't occurred yet this year, subtract 1
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
      this.receptionistService.formPatientsData.age = age - 1;
    } else {
      this.receptionistService.formPatientsData.age = age;
    }
  }


  getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0];
  }

  
  
  onSubmit(
    form:NgForm){
      console.log(form.value)
      this.addPatients(form);
    }
    
    addPatients(form:NgForm){
      console.log("Inserting.....")
      this.receptionistService.insertPatients(form.value)
      .subscribe(
        (result=>{
          console.log(result);
          
          this.router.navigate(['receptionist/patient_list'])
          this.resetForm(form);
          this.toastr.success("Added Successfully");
          this.router.navigate(['receptionist/patient_list'])




        })
      )
    }

    resetForm(form:NgForm){
      if(form!=null){
        form.resetForm();
      }
    }


    bloodGroupChoices = [
      { label: 'A+', value: 'A+' },
      { label: 'A-', value: 'A-' },
      { label: 'B+', value: 'B+' },
      { label: 'B-', value: 'B-' },
      { label: 'O+', value: 'O+' },
      { label: 'O-', value: 'O-' },
      { label: 'AB+', value: 'AB+' },
      { label: 'AB-', value: 'AB-' },
  ]

  genderChoices = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
    { label: 'Other', value: 'O' },
];


}
