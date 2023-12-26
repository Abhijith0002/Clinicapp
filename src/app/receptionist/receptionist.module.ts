import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { ReceptionistComponent } from './receptionist.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { RecepdashComponent } from './recepdash/recepdash.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentbillAddComponent } from './appointmentbill-add/appointmentbill-add.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule} from 'ng2-search-filter'


@NgModule({
  declarations: [
    ReceptionistComponent,
    PatientAddComponent,
    PatientListComponent,
    PatientEditComponent,
    RecepdashComponent,
    AppointmentAddComponent,
    AppointmentListComponent,
    AppointmentbillAddComponent,
    AppointmentViewComponent,
    PatientViewComponent
  
  ],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

  ]
})
export class ReceptionistModule { }
