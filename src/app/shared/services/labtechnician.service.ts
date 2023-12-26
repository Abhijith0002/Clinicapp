import { Injectable } from '@angular/core';
import { Test } from '../models/test';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LabReport } from '../models/lab-report';
import { Staffs } from '../models/staffs';

@Injectable({
  providedIn: 'root'
})
export class LabtechnicianService {

  tests:Test[] = [];
  formTestData:Test=new Test();
  labreport:LabReport[] = [];
  formLabReportData:LabReport=new LabReport();
  staffs : Staffs[] = [];
  formstaffData : Staffs = new Staffs();


  constructor(private httpClient:HttpClient) { }


  bindListStaffs():void{
    this.httpClient.get< Staffs[] >(environment.apiUrl + "/api/staff")
    .subscribe(response => this.staffs = response);
  }

  insertLabReport(labReport: LabReport): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/lab-report",labReport);
  }

  reportLists():void{
    this.httpClient.get<LabReport[]>(environment.apiUrl + "/api/lab-report")
    .subscribe(response=>this.labreport = response);
  }

  viewReport(patientId: number): Observable<LabReport> {
    const url = `${environment.apiUrl}/api/lab-report/${patientId}`;
    return this.httpClient.get<LabReport>(url);
  }


  testLists():void{
    this.httpClient.get<Test[]>(environment.apiUrl + "/api/test")
    .subscribe(response=>this.tests = response);
  }


  insertTest(test:Test):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/test",test);
  }

  updateTest(test:Test):Observable<any>{
    console.log("in update")
    return this.httpClient.put(environment.apiUrl+"/api/test/"+test.id,test);
  }

   deleteTest(id: number): Observable<any> {
    console.log('in delete');
    return this.httpClient.delete(environment.apiUrl + '/api/test/' + id);
  }

  
}
