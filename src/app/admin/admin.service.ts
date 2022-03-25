import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  

  usersAdd(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addUsers`,model);
  }

  usersGet():Promise<any>{
    return this.http.get(`${environment.base_URL}getUsers`).toPromise();
  }

  usersGetById(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getUsersById/${id}`).toPromise();
  }

  usersUpdate(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateUsers`,model);
  }

  usersDelete(id:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteUsers/${id}`);
  }
}
