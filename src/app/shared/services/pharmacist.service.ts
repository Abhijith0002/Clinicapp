import { Injectable } from '@angular/core';
import { Medicines } from '../models/medicines';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { MedicineBill } from '../models/medicine-bill';
import { MedicineHistory, PrescriptionDetail } from '../models/medicine-history';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {
  medicines:Medicines[]= [];
  medicine_bill:MedicineBill[]=[];
  medicineHistoryList: MedicineHistory[] = [];
  formpostdata:Medicines= new Medicines()
  prescriptiondetail:PrescriptionDetail[]=[];
  formMedicineHistoryData: MedicineHistory=new MedicineHistory();


  constructor(private httpclient:HttpClient) { }
  //for listing the medicines
  
  bindlistMedicines(): void {
    this.httpclient.get<Medicines[]>(environment.apiUrl + "/api/medicine")
      .subscribe((response: Medicines[]) => {
        // Include both enabled and disabled medicines in the list
        this.medicines = response;
      },
      (error) => {
        console.error("Error fetching medicine list:", error);
      });
  }

  viewMedicineHistory(medicineHistoryId: number): Observable<MedicineHistory> {
    const url = `${environment.apiUrl}/api/medicine-history/${medicineHistoryId}`;
    return this.httpclient.get<MedicineHistory>(url);
  }


  bindlistprescription(): void {
    this.httpclient.get<MedicineBill[]>(environment.apiUrl + "/api/medicine_bills")
      .subscribe((response: MedicineBill[]) => {
        // Include both enabled and disabled medicines in the list
        this.medicine_bill = response;
      },
      (error) => {
        console.error("Error fetching medicine list:", error);
      });
  }


  //insert record method
  insertmedicine(medicines:Medicines):Observable<any>{
    return this.httpclient.post(environment.apiUrl+"/api/medicine",medicines)
  }
    //edit the content
    updateMedicine(medicines:Medicines):Observable<any>{
      console.log("in update");
      return this.httpclient.put(environment.apiUrl+ "/api/medicine/"+ medicines.id,medicines)
    }
  deleteMedicines(medicineId: number): Observable<any> {
    // Assuming your API supports disabling through DELETE
    return this.httpclient.delete(environment.apiUrl + "/api/medicine/" + medicineId);
  }
  getMedicineHistory(): void {
    this.httpclient.get<MedicineHistory[]>(environment.apiUrl + "/api/medicine-history")
      .subscribe(response => this.medicineHistoryList = response);
  }
  savemedicinebill(medicines_bills:MedicineBill):Observable<any>{
    return this.httpclient.post(environment.apiUrl+"/api/medicine_bills",medicines_bills)
  }
 
  updatePrescriptionQuantity(prescriptionDetail:PrescriptionDetail[]): Observable<boolean> {
    let quantityError: boolean = false;
    for(let prescription of prescriptionDetail){
      this.httpclient.patch(environment.apiUrl+"/api/prescription_detail/"+prescription.id,prescription)
      .subscribe({
        next: (response) => {
          quantityError = false;
        },
        error: (error) => {
          quantityError = true;
        }
      });
      if(quantityError){
        break;
      }
    }

    return of(quantityError);
  }

  // updatePrescriptionQuantity(prescriptionDetail: PrescriptionDetail[]): Observable<boolean> {
  //   let quantityError = false;

  //   const requests = prescriptionDetail.map((prescription) =>
  //     this.httpclient.get<Medicines>(environment.apiUrl + '/api/medicine/' + prescription.id).pipe(
  //       switchMap((medicine) => {
  //         // Check if the stock quantity is sufficient
  //         if (medicine.stock_quantity >= prescription.quantity) {
  //           // If sufficient, update the prescription
  //           return this.httpclient.patch(environment.apiUrl + '/api/prescription_detail/' + prescription.id, prescription);
  //         } else {
  //           // If not sufficient, set error flag
  //           quantityError = true;
  //           return of(null);
  //         }
  //       })
  //     )
  //   );

  //   return forkJoin(requests).pipe(
  //     catchError(() => {
  //       // Handle other errors here
  //       quantityError = true;
  //       return of(quantityError);
  //     }),
  //     map(() => quantityError)
  //   );
  // }
 
}
  