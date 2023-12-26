import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  // lazy loading

  {path:'',redirectTo:'auth/login',pathMatch:'full'},


  {path:'admin',
  component:AdminComponent,loadChildren:()=>
  import('./admin/admin.module').then(x=>x.AdminModule) },

  {path:'doctor',
  component:DoctorComponent,loadChildren:()=>
  import('./doctor/doctor.module').then(x=>x.DoctorModule) },

  {path:'labtechnician',
  component:LabtechnicianComponent,loadChildren:()=>
  import('./labtechnician/labtechnician.module').then(x=>x.LabtechnicianModule) },

  {path:'pharmacist',
  component:PharmacistComponent,loadChildren:()=>
  import('./pharmacist/pharmacist.module').then(x=>x.PharmacistModule) },

  {path:'receptionist',
  component:ReceptionistComponent,loadChildren:()=>
  import('./receptionist/receptionist.module').then(x=>x.ReceptionistModule) },

  {path:'auth',
  component:AuthComponent,loadChildren:()=>
  import('./auth/auth.module').then(x=>x.AuthModule) },
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
