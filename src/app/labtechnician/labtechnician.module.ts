import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabtechnicianRoutingModule } from './labtechnician-routing.module';
import { LabtechnicianComponent } from './labtechnician.component';
import { LabdashComponent } from './labdash/labdash.component';
import { TestAddComponent } from './test-add/test-add.component';
import { TestEditComponent } from './test-edit/test-edit.component';
import { TestListComponent } from './test-list/test-list.component';
import { FormsModule } from '@angular/forms';
import { TestToDoneComponent } from './test-to-done/test-to-done.component';
import { TestToDoneViewComponent } from './test-to-done-view/test-to-done-view.component';
import { TestReportComponent } from './test-report/test-report.component';
import { LabBillComponent } from './lab-bill/lab-bill.component';
import { TestReportListComponent } from './test-report-list/test-report-list.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    LabtechnicianComponent,
    LabdashComponent,
    TestAddComponent,
    TestEditComponent,
    TestListComponent,
    TestToDoneComponent,
    TestToDoneViewComponent,
    TestReportComponent,
    LabBillComponent,
    TestReportListComponent,
  ],
  imports: [
    CommonModule,
    LabtechnicianRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class LabtechnicianModule {
  getMedicineHistory() {
    throw new Error('Method not implemented.');
  }
}
