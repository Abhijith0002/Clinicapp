import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineHistory } from 'src/app/shared/models/medicine-history';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-test-to-done',
  templateUrl: './test-to-done.component.html',
  styleUrls: ['./test-to-done.component.scss']
})
export class TestToDoneComponent implements OnInit {

  constructor(public doctorService:DoctorService,public router:Router) { }

  ngOnInit(): void {
    this.doctorService.getMedicineHistory();
  }

  viewTest(p:MedicineHistory){
    console.log(p);
    this.populateMedicinceHistoryData(p);
    this.router.navigate(['labtechnician/test_to_done_view',p.id])
  }
  
  populateMedicinceHistoryData(p: MedicineHistory) {
    this.doctorService.formMedicineHistoryData= Object.assign({},p)
  }
}
