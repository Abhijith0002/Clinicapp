import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminViewmoreComponent } from './admin-viewmore/admin-viewmore.component';
import { AdminLogindetailsComponent } from './admin-logindetails/admin-logindetails.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminListpatientComponent } from './admin-listpatient/admin-listpatient.component';
import { AdminAppoinmentlistComponent } from './admin-appoinmentlist/admin-appoinmentlist.component';

const routes: Routes = [
  // go to Admin
  {path:'add', component: AdminAddComponent},
  // go to Admin-list
  {path:'list', component: AdminListComponent},
  //go to Admin-edit
  {path:'edit', component: AdminEditComponent},
  {path:'edit/:id', component: AdminEditComponent},
  //go to Admin-viewmore
  {path:'viewmore', component: AdminViewmoreComponent},
  {path:'viewmore/:id', component: AdminViewmoreComponent},

  {path:'logindetails', component: AdminLogindetailsComponent},

  {path:'admindashboard', component: AdminDashboardComponent},

  {path:'listpatients', component: AdminListpatientComponent},
  {path:'appoinments', component: AdminAppoinmentlistComponent},

  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
