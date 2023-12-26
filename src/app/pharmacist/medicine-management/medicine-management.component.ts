import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacistService } from 'src/app/shared/services/pharmacist.service';

@Component({
  selector: 'app-medicine-management',
  templateUrl: './medicine-management.component.html',
  styleUrls: ['./medicine-management.component.scss']
})
export class MedicineManagementComponent implements OnInit {
  searchTerm =''; //to search
  
  p: number=1;

  constructor(public pharmacistservice:PharmacistService,public router:Router) { }

  ngOnInit(): void {
    this.pharmacistservice.bindlistMedicines();

  }

}