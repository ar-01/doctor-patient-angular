import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients()
  {
    this.patientService.getPatientList().subscribe(data=>
      {
        this.patients=data;
      });
  }

}
