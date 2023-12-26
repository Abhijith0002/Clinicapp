import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctorspec } from 'src/app/shared/models/doctorspec';
import { Staffs } from 'src/app/shared/models/staffs';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-viewmore',
  templateUrl: './admin-viewmore.component.html',
  styleUrls: ['./admin-viewmore.component.scss']
})
export class AdminViewmoreComponent implements OnInit {
  staff!: Staffs ; // Update the type according to your staff model
  docSpec?: Doctorspec;

  constructor(private route: ActivatedRoute, private adminService: AdminService,  public router: Router) { }

  ngOnInit(): void {
    this.adminService.bindListDocSpec(); // getting the data of doctor specialization from service

    this.route.params.subscribe(params => {
      const staffId = +params['id']; // Assuming the route parameter is 'id'

      this.adminService.staffViewmore(staffId).subscribe(data => {
        this.staff = data;

        // Check if the role is 'Doctor'
        if (this.staff.role === 'Doctor') {
          // Fetch corresponding Doctorspec data based on staff ID
          this.docSpec = this.adminService.getDoctorspecByStaffId(staffId);
        }
      });
    });
  }
}