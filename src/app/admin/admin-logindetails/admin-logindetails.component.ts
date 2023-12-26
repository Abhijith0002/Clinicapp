import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logindetails } from 'src/app/shared/models/logindetails';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-logindetails',
  templateUrl: './admin-logindetails.component.html',
  styleUrls: ['./admin-logindetails.component.scss']
})
export class AdminLogindetailsComponent implements OnInit {

  loginDetails: Logindetails[] = [];


  constructor(public adminService : AdminService, public router : Router) { }
  staff :number=1;

  ngOnInit(): void {
    this.fetchLoginDetails();
  }

  fetchLoginDetails(): void {
    this.adminService.getLoginDetails().subscribe(
      (details: Logindetails[]) => {
        this.loginDetails = details;
      },
      (error) => {
        console.error('Error fetching login details:', error);
        // Handle error or show a message to the user
      }
    );
  }
  printlog(){
    window.print();
  }
}