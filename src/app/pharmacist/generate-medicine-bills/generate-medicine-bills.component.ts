import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { MedicineHistory, PrescriptionDetail } from 'src/app/shared/models/medicine-history';
import { Medicines } from 'src/app/shared/models/medicines';
import { PharmacistService } from 'src/app/shared/services/pharmacist.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-generate-medicine-bills',
  templateUrl: './generate-medicine-bills.component.html',
  styleUrls: ['./generate-medicine-bills.component.scss']
})
export class GenerateMedicineBillsComponent implements OnInit {
  medicineHistory2!: MedicineHistory
  medicineHistory1: MedicineHistory = new MedicineHistory();
  medicines: Medicines[] = [];
  medicineHistory: MedicineHistory | undefined;

  
  constructor(public pharmacistservice:PharmacistService,private route: ActivatedRoute,public router:Router,public httpclient:HttpClient, private toastr : ToastrService) { }

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    this.route.params.subscribe(params => {
      const medicineHistoryId = +params['id']; // Convert the parameter to a number

      this.pharmacistservice.viewMedicineHistory(medicineHistoryId).subscribe(
        (response) => {
          this.medicineHistory = response;
          // this.calculateMedicineQuantities();
          
        },
        (error) => {
          console.error('Error retrieving medicine history:', error);
        }
      );
    });
    console.log('Initial Medicine History List:', this.medicineHistory);
  } 

 
  // calculateTotal(medicineQuantity: any[]): number {
  //   let total = 0;
  
  //   medicineQuantity.forEach((details: any) => {
  //     total += (details.quantity || 0) * (details.medicine_per_price || 0);
  //   });
  
  //   return total;
  // }
  // calculateMedicineQuantities(): void {
  //   if (this.medicineHistory) {
  //     this.medicineQuantities = this.medicineHistory.prescription_detai.map((detail) => {
  //       const quantity =
  //         (parseInt(detail.dosage, 10) || 0) *
  //         (parseInt(detail.time_of_consumption, 10) || 0) *
  //         (parseInt(detail.days, 10) || 0);
  //         console.log(quantity);
  //       return { quantity };
        
  //     });
  //   }
  // }

  // getQuantity(prescriptionIndex: number, detailIndex: number): number {
  //   return this.medicineQuantities[prescriptionIndex]?.quantity || 0;
  // }

  printInvoice() {
    window.print();
  }
  calculateTotal(): number {
  let total = 0;

  for (const detail of this.pharmacistservice.formMedicineHistoryData.prescription_detai || []) {
    
      total += (Number(detail.quantity) || 0) * (Number(detail.medicine_per_price) || 0);
    
  }
console.log(total)
  return total;
}
submit(){
  this.editTest(this.pharmacistservice.formMedicineHistoryData.prescription_detai)
}
goBack(){
  this.router.navigate(['/pharmacist/medicine-bills_new'])
}

// editTest(prescriptionDetail:PrescriptionDetail[]){
//   console.log("editing...")
//   this.pharmacistservice.updatePrescriptionQuantity(prescriptionDetail).subscribe((result=>{
//     if(result){
//       this.toastr.error('Medicine Unavailable..');
//     }else{
//       this.toastr.success('Billing Succesfully..');
//       this.router.navigate(['/pharmacist/generate_medicine-bills/',this.pharmacistservice.formMedicineHistoryData.id])

//     }
//   }))
// }

editTest(prescriptionDetail: PrescriptionDetail[]) {
  console.log("editing...");

  this.pharmacistservice.updatePrescriptionQuantity(prescriptionDetail).subscribe((result) => {
    if (result) {
      // Handle error case
      this.toastr.error('Medicine Unavailable..');
      console.error('Error: Stock quantity not sufficient');
       
      // Additional error handling logic can be added here
    } else {
      // Handle success case
      this.toastr.success('Billing Succesfully..');
      console.log('Prescription updated successfully');
      // Additional success handling logic can be added here
    }

    // Navigate to the specified route regardless of success or error
    this.router.navigate(['/pharmacist/generate_medicine-bills/', this.pharmacistservice.formMedicineHistoryData.id]);
  });
}


}
