import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();
  patients: Patient[];
  doctors: Doctor[];
  constructor(private patientService: PatientService,
    private router: Router, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getPatients();
    this.getDoctors();
  }

  savePatient()
  {
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
    }, error => console.log(error));
  }

  goToPatientList()
  {
    this.router.navigate(['/patient']);
  }

  onSubmit()
  {
    this.savePatient();
    this.goToPatientList();
    console.log(this.getPatients);
  }

  private getPatients()
  {
    this.patientService.getPatientList().subscribe(data=>
      {
        this.patients = data;
      })
  }

  private getDoctors()
  {
    this.doctorService.getDoctorList().subscribe(data=>
      {
        this.doctors = data;
      })
  }
}
