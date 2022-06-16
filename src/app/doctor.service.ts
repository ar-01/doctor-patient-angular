import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://localhost:9000/api/v1/doctor";

  constructor(private httpClient: HttpClient) { }

  getDoctorList(): Observable<Doctor[]>
  {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`);
  }

  getDoctorById(id: number): Observable<any>
  {
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  }

  createDoctor(doctor: Doctor): Observable<Object>
  {
    return this.httpClient.post<any>(`${this.baseURL}`, doctor);
  }
}
