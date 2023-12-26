import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineHistory } from 'src/app/shared/models/medicine-history';
import { PharmacistService } from 'src/app/shared/services/pharmacist.service';

@Component({
  selector: 'app-medicine-bills-new',
  templateUrl: './medicine-bills-new.component.html',
  styleUrls: ['./medicine-bills-new.component.scss']
})
export class MedicineBillsNewComponent implements OnInit {
  searchTerm =''; //to search
  p: number=1;

  constructor(public pharmacistservice:PharmacistService,public router:Router) { }

  ngOnInit(): void {
    this.pharmacistservice.getMedicineHistory();

  }
  viewbills(p:MedicineHistory){
    console.log(p);
    this.populateMedicinceHistoryData(p);
    this.router.navigate(['/pharmacist/generate_medicine-bills',p.id])
  }
  
  populateMedicinceHistoryData(p: MedicineHistory) {
    this.pharmacistservice.formMedicineHistoryData= Object.assign({},p);
    console.log(this.pharmacistservice.formMedicineHistoryData);
  }
  calculateQuantity(prescription: any): number {
    console.log(prescription)
    // Assuming detail is an object with properties dosage, time_of_consumption, and days
    return prescription.dosage * prescription.days* prescription.time_of_consumption; // You can modify this calculation based on your requirements
  }
  updateTestReport(prescription:MedicineHistory){
    console.log(prescription);
    this.populatePostsData(prescription);
    this.router.navigate(['medicine-history/generate_medicine-bills',prescription.id])
  }
  populatePostsData(prescription:MedicineHistory) {
    this.pharmacistservice.formMedicineHistoryData = Object.assign({},prescription)
  }

}