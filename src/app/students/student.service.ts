import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  // Student

  studentAdd(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}addStudents`, model);
  }

  studentGet(): Promise<any> {
    return this.http.get(`${environment.base_URL}getStudents`).toPromise();
  }

  studentGetById(id: any): Promise<any> {
    return this.http.get(`${environment.base_URL}getStudentsById/${id}`).toPromise();
  }

  studentUpdate(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}updateStudents`, model);
  }

  studentDelete(id: any): Observable<any> {
    return this.http.delete(`${environment.base_URL}deleteStudents/${id}`);
  }

  postFileStudent(fileToUpload: File): Observable<any> {
    const endpoint = environment.base_URL + 'uploadStudent';
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData).pipe(map(i => { return i }));
  }

  // Join

  genDetailGet(): Promise<any> {
    return this.http.get(`${environment.base_URL}getGenDetail`).toPromise();
  }

  clubDetailGet(): Promise<any> {
    return this.http.get(`${environment.base_URL}getClubDetail`).toPromise()
  }

  onetooneDetailGet(): Promise<any> {
    return this.http.get(`${environment.base_URL}getOnetooneDetail`).toPromise();
  }

  // Types of batch

  getGenStudent(): Promise<any> {
    return this.http.get(`${environment.base_URL}getGenStudent`).toPromise();
  }

  getClubStudent(): Promise<any> {
    return this.http.get(`${environment.base_URL}getClubStudent`).toPromise();
  }

  getOnetooneStudent(): Promise<any> {
    return this.http.get(`${environment.base_URL}getOnetooneStudent`).toPromise();
  }

  
  // Manage  Batch

  manageBatchAdd(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}addManageBatch`, model);
  }

  manageBatchGet(): Promise<any> {
    return this.http.get(`${environment.base_URL}getManageBatch`).toPromise();
  }

  manageBatchGetById(id: any): Promise<any> {
    return this.http.get(`${environment.base_URL}getManageBatchById/${id}`).toPromise();
  }

  manageBatchUpdate(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}updateManageBatch`, model);
  }

  manageBatchDelete(id: any): Observable<any> {
    return this.http.delete(`${environment.base_URL}deleteManageBatch/${id}`);
  }



}
