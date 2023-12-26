import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicineHistory } from 'src/app/shared/models/medicine-history';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-test-to-done-view',
  templateUrl: './test-to-done-view.component.html',
  styleUrls: ['./test-to-done-view.component.scss']
})
export class TestToDoneViewComponent implements OnInit {

  medicineHistory!: MedicineHistory

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    this.route.params.subscribe(params => {
      const medicineHistoryId = +params['id']; // Convert the parameter to a number

      this.doctorService.viewMedicineHistory(medicineHistoryId).subscribe(
        (response) => {
          this.medicineHistory = response;
        },
        (error) => {
          console.error('Error retrieving medicine history:', error);
        }
      );
    });
  }
}
