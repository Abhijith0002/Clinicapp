import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { RecepdashComponent } from './recepdash/recepdash.component';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentbillAddComponent } from './appointmentbill-add/appointmentbill-add.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { PatientViewComponent } from './patient-view/patient-view.component';


const routes: Routes = [
  {path:'patient_view/:id',component:PatientViewComponent},
  {path:'patient_add',component:PatientAddComponent},
  {path:'patient_edit/:id',component:PatientEditComponent},
  {path:'patient_list',component:PatientListComponent},
  
  {path:'recepdashboard',component:RecepdashComponent},

  {path:'appointment-add',component:AppointmentAddComponent},
  {path:'appointment-list',component:AppointmentListComponent},
  {path:'appointment-view/:id',component:AppointmentViewComponent},


  {path:'appointment-bill/:id',component:AppointmentbillAddComponent},


  
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistRoutingModule { }
