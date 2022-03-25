import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginGet(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}getLogin`,model);
  }
}
