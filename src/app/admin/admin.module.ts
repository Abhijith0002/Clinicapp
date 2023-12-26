import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminLogindetailsComponent } from './admin-logindetails/admin-logindetails.component';
import { AdminViewmoreComponent } from './admin-viewmore/admin-viewmore.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminListpatientComponent } from './admin-listpatient/admin-listpatient.component';
import { AdminAppoinmentlistComponent } from './admin-appoinmentlist/admin-appoinmentlist.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminAddComponent,
    AdminEditComponent,
    AdminListComponent,
    AdminLogindetailsComponent,
    AdminViewmoreComponent,
    AdminDashboardComponent,
    AdminListpatientComponent,
    AdminAppoinmentlistComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
