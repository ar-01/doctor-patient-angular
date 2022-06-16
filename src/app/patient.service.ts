import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:9000/api/v1/patient";

  constructor(private httpClient: HttpClient) { }

  getPatientList(): Observable<Patient[]>
  {
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
  }

  createPatient(patient: Patient): Observable<Object>
  {
    return this.httpClient.post<any>(`${this.baseURL}`, patient);
  }

  getPatientById(id: number): Observable<any>
  {
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  }
}
