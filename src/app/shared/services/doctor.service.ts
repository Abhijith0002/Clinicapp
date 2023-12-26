import { Injectable } from '@angular/core';
import { MedicineHistory, PrescriptionDetail } from '../models/medicine-history';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Medicines } from '../models/medicines';
import { Test } from '../models/test';
import { PrescriptionDetails } from '../models/prescription-details';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  medicineHistoryList: MedicineHistory[] = [];
  formMedicineHistoryData: MedicineHistory=new MedicineHistory();
  prescriptionDetail:PrescriptionDetails[]=[];
  formPrescriptionDetailData: PrescriptionDetail=new PrescriptionDetail();
  medicines:Medicines[]= [];
  tests: Test[]= [];





  constructor(private httpClient: HttpClient) { }

  getMedicineHistory(): void {
    this.httpClient.get<MedicineHistory[]>(environment.apiUrl + "/api/medicine-history")
      .subscribe(response => this.medicineHistoryList = response);
  }

  viewMedicineHistory(medicineHistoryId: number): Observable<MedicineHistory> {
    const url = `${environment.apiUrl}/api/medicine-history/${medicineHistoryId}`;
    return this.httpClient.get<MedicineHistory>(url);
  }


  insertMedicineHistory(medicineHistory: MedicineHistory): Observable<any> {
    console.log("im hereee")
    console.log(medicineHistory)
    return this.httpClient.post(environment.apiUrl + "/api/medicine-history",medicineHistory);
  }


  insertPrescription(prescriptionDetail: PrescriptionDetail): Observable<any> {
    console.log("heyy")
    return this.httpClient.post(environment.apiUrl + "/api/prescription_detail",prescriptionDetail);
  }
  viewPrescription(prescriptionDetailId: number): Observable<PrescriptionDetail> {
    const url = `${environment.apiUrl}/api/prescription_detail/${prescriptionDetailId}`;
    return this.httpClient.get<PrescriptionDetail>(url);
  }


  testLists():void{
    this.httpClient.get<Test[]>(environment.apiUrl + "/api/test")
    .subscribe(response=>this.tests = response);
  }
  historyLists():void{
    this.httpClient.get<MedicineHistory[]>(environment.apiUrl + "/api/medicine-history")
    .subscribe(response=>this.medicineHistoryList = response);
  }

  bindlistMedicines(): void {
    this.httpClient.get<Medicines[]>(environment.apiUrl + "/api/medicine")
      .subscribe((response: Medicines[]) => {
        // Include both enabled and disabled medicines in the list
        this.medicines = response;
      },
      (error) => {
        console.error("Error fetching medicine list:", error);
      });
  
  }
  
}