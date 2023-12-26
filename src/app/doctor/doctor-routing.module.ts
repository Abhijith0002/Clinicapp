import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorAddmedComponent } from './doctor-addmed/doctor-addmed.component';
import { DoctorAddobsComponent } from './doctor-addobs/doctor-addobs.component';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';
import { HistoryListComponent } from './history-list/history-list.component';

const routes: Routes = [
  // go to Doctor
  {path:'add-medicine/:id', component:DoctorAddmedComponent},
  {path:'add-observation', component:DoctorAddobsComponent},


  // go to Doctor-list
  {path:'list', component: DoctorListComponent},
  //go to Doctor-edit
  {path:'edit', component: DoctorEditComponent},
  {path:'doctordashboard', component: DoctorDashboardComponent},
  {path:'view/:id', component: DoctorViewComponent},
  {path:'history', component: HistoryListComponent},



  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
