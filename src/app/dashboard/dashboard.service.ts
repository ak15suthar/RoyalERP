import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  countStudent():Promise<any>{
    return this.http.get(`${environment.base_URL}countStudent`).toPromise();
  }

  countFaculties():Promise<any>{
    return this.http.get(`${environment.base_URL}countFaculties`).toPromise();
  }

  countCourses():Promise<any>{
    return this.http.get(`${environment.base_URL}countCourses`).toPromise();
  }

}
