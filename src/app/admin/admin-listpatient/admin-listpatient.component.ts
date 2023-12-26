import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-listpatient',
  templateUrl: './admin-listpatient.component.html',
  styleUrls: ['./admin-listpatient.component.scss']
})
export class AdminListpatientComponent implements OnInit {

  constructor(public adminService :AdminService ,public router:Router,private toastr:ToastrService) { }

  p:number=1;
  searchTerm="";
  ngOnInit(): void {
    this.adminService.patientLists();
  }

}