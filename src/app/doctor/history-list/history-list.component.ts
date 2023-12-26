// history-list.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { MedicineHistory } from 'src/app/shared/models/medicine-history'; // Update the import path based on your actual file structure
import { LabtechnicianService } from 'src/app/shared/services/labtechnician.service'; // Update the import path based on your actual file structure
import { ReceptionistService } from 'src/app/shared/services/receptionist.service'; // Update the import path based on your actual file structure
import { DoctorService } from 'src/app/shared/services/doctor.service'; // Update the import path based on your actual file structure

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {
   p:number=1
  @Input() medicineHistoryList: MedicineHistory[] = []; // Assuming you pass the medicineHistoryList as an input

  constructor(
    public doctorService: DoctorService,
    public receptionistService: ReceptionistService,
    public labTechnicianService: LabtechnicianService
  ) { }

  ngOnInit(): void {
    this.doctorService.getMedicineHistory();

  }

  getPatientInfo(patientId: number): string {
    const patient = this.receptionistService.patients.find(p => p.id === patientId);
    return patient ? `${patient.registernumber}-${patient.fullname}` : '';
  }

  getDoctorInfo(doctorId: number): string {
    const doctor = this.receptionistService.avaliabledoc.find(d => d.id === doctorId);
    return doctor ? doctor.doctor_name : '';
  }


}
