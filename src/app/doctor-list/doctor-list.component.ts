import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[];
  id: number;
  chosenDoctor: Doctor;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  private getDoctors()
  {
    this.doctorService.getDoctorList().subscribe(data=>
      {
        this.doctors = data;
      })
  }

  onSubmit()
  {
    var e = document.getElementById("selectDoctor") as HTMLSelectElement;
    var sel = e.selectedIndex;
    var opt = e.options[sel];
    this.id = parseInt((<HTMLSelectElement><unknown>opt).value);
    const tId = document.getElementsByTagName("td")[0];
    const tName =  document.getElementsByTagName("td")[1];
    const tAge =  document.getElementsByTagName("td")[2];
    const tGender =  document.getElementsByTagName("td")[3];
    const tSpec =  document.getElementsByTagName("td")[4];
    let dataHtml = '';
    this.doctorService.getDoctorById(this.id).subscribe(data=>{
      this.chosenDoctor = data;
      dataHtml = `${this.chosenDoctor.id}`;
      tId.innerText = dataHtml;
      dataHtml = `${this.chosenDoctor.name}`;
      tName.innerText = dataHtml;
      dataHtml = `${this.chosenDoctor.age}`;
      tAge.innerText = dataHtml;
      dataHtml = `${this.chosenDoctor.gender}`;
      tGender.innerText = dataHtml;
      dataHtml = `${this.chosenDoctor.specialization}`;
      tSpec.innerText = dataHtml;
    }, error => console.log(error));
  }
}
