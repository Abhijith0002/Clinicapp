import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacistRoutingModule } from './pharmacist-routing.module';
import { PharmacistComponent } from './pharmacist.component';
import { PharmacistAddComponent } from './pharmacist-add/pharmacist-add.component';
import { PharmacistEditComponent } from './pharmacist-edit/pharmacist-edit.component';
import { PharmacistListComponent } from './pharmacist-list/pharmacist-list.component';
import { PharmacistDashboardComponent } from './pharmacist-dashboard/pharmacist-dashboard.component';
import { GenerateMedicineBillsComponent } from './generate-medicine-bills/generate-medicine-bills.component';
import { MedicineBillsNewComponent } from './medicine-bills-new/medicine-bills-new.component';
import { MedicineManagementComponent } from './medicine-management/medicine-management.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PharmacistComponent,
    PharmacistAddComponent,
    PharmacistEditComponent,
    PharmacistListComponent,
    PharmacistDashboardComponent,
    GenerateMedicineBillsComponent,
    MedicineBillsNewComponent,
    MedicineManagementComponent
  ],
  imports: [
    CommonModule,
    PharmacistRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class PharmacistModule { }
