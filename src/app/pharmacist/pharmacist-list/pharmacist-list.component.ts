import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicines } from 'src/app/shared/models/medicines';
import { PharmacistService } from 'src/app/shared/services/pharmacist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pharmacist-list',
  templateUrl: './pharmacist-list.component.html',
  styleUrls: ['./pharmacist-list.component.scss']
})
export class PharmacistListComponent implements OnInit {
  searchTerm =''; //to search
  p: number=1;
  

  constructor(public pharmacistservice:PharmacistService, public router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.pharmacistservice.bindlistMedicines();
  }
  //update
  updatemedicinedetails(p:Medicines){
    console.log(p);
    this.populateMedicinesdata(p);
    this.router.navigate(['/pharmacist/medicine-edit',p.id])
  }
  populateMedicinesdata(p: Medicines) {
this.pharmacistservice.formpostdata = Object.assign({},p)  }

  // your.component.ts
disableMedicine(medicineId: number): void {
  if (confirm('Are you sure you want to disable this record?')) {
    this.pharmacistservice.deleteMedicines(medicineId).subscribe(
      (response: any) => {
        this.toastr.error('DISABLED SUCCESFULLY!!!!');
        console.log('Medicine disabled successfully');
        console.log(response);
        this.pharmacistservice.bindlistMedicines();
        // Update your medicine list or perform any necessary actions
      },
      (error) => {
        console.error('Error disabling medicine:', error);
      }
    );
  }
}

}
  