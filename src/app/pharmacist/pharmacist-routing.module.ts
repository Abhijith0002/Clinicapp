import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacistAddComponent } from './pharmacist-add/pharmacist-add.component';
import { PharmacistListComponent } from './pharmacist-list/pharmacist-list.component';
import { PharmacistEditComponent } from './pharmacist-edit/pharmacist-edit.component';
import { PharmacistDashboardComponent } from './pharmacist-dashboard/pharmacist-dashboard.component';
import { MedicineManagementComponent } from './medicine-management/medicine-management.component';
import { MedicineBillsNewComponent } from './medicine-bills-new/medicine-bills-new.component';
import { GenerateMedicineBillsComponent } from './generate-medicine-bills/generate-medicine-bills.component';

const routes: Routes = [
  {path:'medicine-add', component: PharmacistAddComponent},
  // go to Pharmacist-list
  {path:'medicine-list', component: PharmacistListComponent},
  //go to Pharmacist-edit
  {path:'medicine-edit', component: PharmacistEditComponent},
  {path : "medicine-edit/:id",component:PharmacistEditComponent},
  //patient list
  {path:'medicine-management', component: MedicineManagementComponent},
 
{path:'medicine-bills_new', component: MedicineBillsNewComponent},
{path:'generate_medicine-bills/:id', component: GenerateMedicineBillsComponent},
  {path:'pharmacistdashboard', component: PharmacistDashboardComponent}

  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacistRoutingModule { }
