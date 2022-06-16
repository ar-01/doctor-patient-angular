import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { FormsModule } from '@angular/forms';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    CreatePatientComponent,
    DoctorListComponent,
    PageNotFoundComponent,
    AddDoctorComponent,
    AllPatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
