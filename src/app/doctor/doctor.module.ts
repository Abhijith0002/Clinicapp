import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';
import { DoctorAddobsComponent } from './doctor-addobs/doctor-addobs.component';
import { DoctorAddmedComponent } from './doctor-addmed/doctor-addmed.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HistoryListComponent } from './history-list/history-list.component';


@NgModule({
  declarations: [
    DoctorComponent,
    DoctorAddComponent,
    DoctorEditComponent,
    DoctorListComponent,
    DoctorDashboardComponent,
    DoctorViewComponent,
    DoctorAddobsComponent,
    DoctorAddmedComponent,
    HistoryListComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class DoctorModule { }
