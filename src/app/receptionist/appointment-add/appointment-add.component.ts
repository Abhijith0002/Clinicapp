import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';
import {ToastrService}  from 'ngx-toastr'


@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.scss']
})
export class AppointmentAddComponent implements OnInit {

  constructor(public receptionistService:ReceptionistService,public router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.receptionistService.patientLists();
    this.receptionistService. docAvaPosts();

  }
  onSubmit(
    form:NgForm){
      console.log(form.value)
      this.addAppointment(form);
    }
    
    addAppointment(form:NgForm){
      console.log("Inserting.....")
      this.receptionistService.insertAppointment(form.value)
      .subscribe(
        (result=>{
          console.log(result);
          const newAppointmentId = result.id;
          this.toastr.success("Done");
          this.router.navigate([`receptionist/appointment-view/${newAppointmentId}`]);
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
