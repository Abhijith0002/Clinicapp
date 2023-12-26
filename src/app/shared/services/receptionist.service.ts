import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';
import { Availabledoc } from '../models/availabledoc';


@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  patients:Patient[] = [];
  formPatientsData:Patient=new Patient();
  appointments : Appointment[]=[];
  formAppointmentsData: Appointment=new Appointment();
  avaliabledoc : Availabledoc[]=[];



  constructor(private httpClient:HttpClient) { }


  docAvaPosts():void{
    this.httpClient.get<Availabledoc[]>(environment.apiUrl + "/api/doctor_availability")
    .subscribe(response=>this.avaliabledoc = response);
  }

  patientLists():void{
    
    this.httpClient.get<Patient[]>(environment.apiUrl + "/api/patient_details")
    .subscribe(response=>this.patients = response);
  }

  insertPatients(patient:Patient):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/patient_details",patient);
  }

  updatePatient(patient:Patient):Observable<any>{
    console.log("in update")
    return this.httpClient.put(environment.apiUrl+"/api/patient_details/"+patient.id,patient);
  }

   deletePatient(id: number): Observable<any> {
    console.log('in delete');
    return this.httpClient.delete(environment.apiUrl + '/api/patient_details/' + id);
  }

  viewPatient(patientId: number): Observable<Patient> {
    const url = `${environment.apiUrl}/api/patient_details/${patientId}`;
    return this.httpClient.get<Patient>(url);
  }

  
  appointmentList():void{
    this.httpClient.get<Appointment[]>(environment.apiUrl + "/api/appointment")
    .subscribe(response=>this.appointments = response);
  }
  insertAppointment(appointments:Appointment):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/appointment",appointments);
  }


  deleteAppointment(id: number): Observable<any> {
    console.log('in delete');
    return this.httpClient.delete(environment.apiUrl + '/api/appointment/' + id);
  }


  viewAppointment(appointmentId: number): Observable<Appointment> {
    const url = `${environment.apiUrl}/api/appointment/${appointmentId}`;
    return this.httpClient.get<Appointment>(url);
  }




}
