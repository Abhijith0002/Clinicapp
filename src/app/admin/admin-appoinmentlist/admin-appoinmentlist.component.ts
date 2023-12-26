import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-appoinmentlist',
  templateUrl: './admin-appoinmentlist.component.html',
  styleUrls: ['./admin-appoinmentlist.component.scss']
})
export class AdminAppoinmentlistComponent implements OnInit {
  p:number=1;

  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.appointmentList();
  }

}