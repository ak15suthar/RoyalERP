import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Info } from '../info';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }

  batchAdd(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}addBatch`, model);
  }

  batchGet(): Promise<any> {
    return this.http.get(`${environment.base_URL}getBatch`).toPromise();
  }

  batchGetById(id: number): Observable<any> {
    return this.http.get(`${environment.base_URL}getBatchById/${id}`);
  }

  batchUpdate(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}updateBatch`, model);
  }

  batchDelete(id: any): Observable<any> {
    return this.http.delete(`${environment.base_URL}deleteBatch/${id}`);
  }

  batchGetUserById(id: number):Observable<any> {
    return this.http.get(`${environment.base_URL}getBatchByUserId/${id}`)
  }

  // Get Batch Student in Faculty

  getBatchStudent(id: any): Promise<any> {
    return this.http.get(`${environment.base_URL}getBatchStudent/${id}`).toPromise();
  }

  // Send email

  sendEmail(obj): Observable<Info> {
    return this.http.post<Info>('http://localhost:3131/sendFormData', obj)
  }

  // Get mail student

  getMailStudent(id:number):Promise<any>{
    return this.http.get(`${environment.base_URL}getMailStudent/${id}`).toPromise();
  }

  //Session

  addSession(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addSession`,model);
  }

  //Get Session

  getSessionById(id:number):Promise<any>{
    return this.http.get(`${environment.base_URL}getSessionById/${id}`).toPromise();
  }

}
