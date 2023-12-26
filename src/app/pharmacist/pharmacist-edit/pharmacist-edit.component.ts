import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmacistService } from 'src/app/shared/services/pharmacist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pharmacist-edit',
  templateUrl: './pharmacist-edit.component.html',
  styleUrls: ['./pharmacist-edit.component.scss']
})
export class PharmacistEditComponent implements OnInit {

  constructor(public pharmacistservice:PharmacistService,public router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm){
  console.log(form.value);
  //insert the data into the database
  this.editmedicines(form);
}
  editmedicines(form: NgForm) {
    console.log("editing")
    this.pharmacistservice.updateMedicine(form.value)
    .subscribe((result=>{
      console.log(result);
      this.resetForm(form)
      this.toastr.success('EDITED SUCCESFULLY!!!!');
      this.router.navigate(['/pharmacist/medicine-list'])
    }))
  }
  resetForm(form: NgForm) {
    if(form!=null){
      form.resetForm();
    }  }
}