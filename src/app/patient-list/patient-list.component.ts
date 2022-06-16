import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  id: number;
  patient: Patient;
  patients: Patient[];
  pName: String;
  error = null;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.error = null;
    const tdId = document.getElementsByTagName("td")[0];
    const tdName = document.getElementsByTagName("td")[1];
    const tdVisDoc = document.getElementsByTagName("td")[2];
    const tdDOV = document.getElementsByTagName("td")[3];
    let htmlData = '';
    this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patient = data;
      htmlData = `${this.patient.id}`;
      tdId.innerText = htmlData;
      htmlData = `${this.patient.name}`;
      tdName.innerText = htmlData;
      htmlData = `${this.patient.visitedDoctor}`;
      tdVisDoc.innerText = htmlData;
      htmlData = `${this.patient.dateOfVisit}`;
      tdDOV.innerText = htmlData;
    }, error => {
      this.error = error.error.message;
      console.log(error);
      htmlData = '';
      tdId.innerText = htmlData;
      tdName.innerText = htmlData;
      tdVisDoc.innerText = htmlData;
      tdDOV.innerText = htmlData;
    });
  }
}
