import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmacistService } from 'src/app/shared/services/pharmacist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pharmacist-add',
  templateUrl: './pharmacist-add.component.html',
  styleUrls: ['./pharmacist-add.component.scss']
})
export class PharmacistAddComponent implements OnInit {

  
  constructor(public pharmacistservice:PharmacistService, public router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  addmethod(){

  }
onSubmit(form:NgForm){
  console.log(form.value);
  // insert the medicine datats to the database
  this.addmedicines(form);
}
  addmedicines(form: NgForm) {
    console.log("inserting")
    this.pharmacistservice.insertmedicine(form.value)
    .subscribe(
      (result=>{
        console.log(result);
        this.resetForm(form);
        this.toastr.success('ADDED SUCCESFULLY!!!!');
        this.router.navigate(['/pharmacist/medicine-list'])
      })
    )
  }
  resetForm(form: NgForm) {
if(form!=null){
  form.resetForm();
}  }

}