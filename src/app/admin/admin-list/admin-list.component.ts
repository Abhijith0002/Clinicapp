import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staffs } from 'src/app/shared/models/staffs';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  constructor(public adminService : AdminService, public router : Router) { }
  searchTerm: any;
  staff :number=1;
 

  ngOnInit(): void {
    this.adminService.bindListStaffs();
  }

  //viewmore
  viewMore(staff: Staffs){
    console.log(staff);
    this.router.navigate(['admin/viewmore',staff.id])
  }

   //update post
   updatePosts(staff: Staffs){
    console.log(staff);
    this.populatePostsData(staff);
    this.router.navigate(['admin/edit/'+staff.id, staff])
  }
  populatePostsData(staff: Staffs) {
    this.adminService.formstaffData = Object.assign({}, staff)
  }
  toggleStaffStatus(staff: any) {
    staff.is_active = !staff.is_active; // Toggle the active status

}
}