import { Injectable } from '@angular/core';
import { Staffs } from '../models/staffs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Doctorspec } from '../models/doctorspec';
import { Logindetails } from '../models/logindetails';
import { Patient } from '../models/patient';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // create an array variable
  staffs : Staffs[] = [];
  formstaffData : Staffs = new Staffs();
  doctorSpec : Doctorspec[] = [];
  FormsDocSpecData : Doctorspec = new Doctorspec();
  loginDetails : Logindetails[] = [];
  patients:Patient[] = [];
  appointments : Appointment[]=[];

  constructor( private httpClient : HttpClient) { }

  // for list
  bindListStaffs():void{
    this.httpClient.get< Staffs[] >(environment.apiUrl + "/api/staff")
    .subscribe(response => this.staffs = response);
  }

  staffViewmore(staffId: number): Observable<any> {
    console.log("staff viewmore");
    return this.httpClient.get(environment.apiUrl + '/api/staff/' + staffId);
  }
  
  // insert record method
  insertStaff(staffs : Staffs) : Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/staff', staffs);
  }

  // insert record method
  updateStaffs(staffs : Staffs) : Observable<any>{
    return this.httpClient.put(environment.apiUrl + '/api/staff/' +staffs.id, staffs);
  }

  staffupdate(staffId: number): Observable<any> {
    console.log("staff update");
    return this.httpClient.get(environment.apiUrl + '/api/staff/' + staffId);
  }

  getDoctorspecByStaffId(staffId: number): Doctorspec | undefined {
    // Assuming bindListDocSpec has already populated the list of doctor specializations
    return this.doctorSpec.find(docSpec => docSpec.staff === staffId);
  }

  bindListDocSpec():void{
    this.httpClient.get< Doctorspec[] >(environment.apiUrl + "/api/doctors")
    .subscribe(response => this.doctorSpec = response);
  }

  insertDoctorSpec(doctorSpec : Doctorspec) : Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/doctors', doctorSpec);
  }

  updateDocSpec(doctorSpec : Doctorspec) : Observable<any>{
    return this.httpClient.put(environment.apiUrl + '/api/doctors/' +doctorSpec.doctor_id, doctorSpec);
  }

  getDoctorIdByStaffId(doctorId: Number): Observable<Number | null> {
  return this.httpClient.get<Doctorspec[]>(environment.apiUrl + '/api/doctors')
    .pipe(
      map(doctorSpecs => {
        const matchingDoctorSpec = doctorSpecs.find(spec => Number(spec.staff) === doctorId);
        return matchingDoctorSpec ? Number(matchingDoctorSpec.doctor_id) : null;
      }),
      catchError(error => {
        console.error('Error fetching doctor_id:', error);
        return throwError(error);
      })
    );
}


  getLoginDetails(): Observable<Logindetails[]> {
    return this.httpClient.get<Logindetails[]>(environment.apiUrl + '/api/logindetails');
  }

  patientLists():void{   
    this.httpClient.get<Patient[]>(environment.apiUrl + "/api/patient_details")
    .subscribe(response=>this.patients = response);
  }

  appointmentList():void{
    this.httpClient.get<Appointment[]>(environment.apiUrl + "/api/appointment")
    .subscribe(response=>this.appointments = response);
  }



}