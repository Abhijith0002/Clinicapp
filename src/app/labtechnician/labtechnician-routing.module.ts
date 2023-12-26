import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabdashComponent } from './labdash/labdash.component';
import { TestAddComponent } from './test-add/test-add.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestEditComponent } from './test-edit/test-edit.component';
import { TestToDoneComponent } from './test-to-done/test-to-done.component';
import { TestToDoneViewComponent } from './test-to-done-view/test-to-done-view.component';
import { TestReportComponent } from './test-report/test-report.component';
import { LabBillComponent } from './lab-bill/lab-bill.component';
import { TestReportListComponent } from './test-report-list/test-report-list.component';

const routes: Routes = [
  {path:'labdashboard',component:LabdashComponent},
  {path:'test_add',component:TestAddComponent},
  {path:'lab_list',component:TestListComponent},
  {path:'lab_edit/:id',component:TestEditComponent},


  {path:'test_to_done',component:TestToDoneComponent},
  {path:'test_to_done_view/:id',component:TestToDoneViewComponent},

  {path:'test_report',component:TestReportComponent},
  {path:'lab_bill/:id',component:LabBillComponent},
  {path:'report_list',component:TestReportListComponent},


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabtechnicianRoutingModule { }
