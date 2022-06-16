import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  {path: 'patient', component: PatientListComponent},
  {path: '', redirectTo:'patient', pathMatch: 'full'},
  {path: 'create-patient', component: CreatePatientComponent},
  {path: 'doctor-list', component: DoctorListComponent},
  {path: 'add-doctor', component: AddDoctorComponent},
  {path: 'all-patients', component: AllPatientsComponent},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
