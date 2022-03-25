import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private http:HttpClient) { }

  isLogin(){
    if(sessionStorage.getItem('islogin')){
      return true;
    }
    return false;
  }

  positionAdd(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addPositions`,model);
  }

  positionGet():Promise<any>{
    return this.http.get(`${environment.base_URL}getPositions`).toPromise();
  }

  positionGetById(id:number):Promise<any>{
    return this.http.get(`${environment.base_URL}getPositionsById/${id}`).toPromise();
  }

  positionUpdate(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updatePosition`,model);
  }

  positionDelete(id:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deletePosition/${id}`);
  }

  departmentAdd(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addDepartment`,model);
  }

  departmentGet():Promise<any>{
    return this.http.get(`${environment.base_URL}getDepartment`).toPromise();
  }

  departmentGetById(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getDepartmentById/${id}`).toPromise();
  }

  departmentUpdate(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateDepartment`,model);
  }

  departmentDelete(id:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteDepartment/${id}`);
  }

  employeeAdd(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addEmployees`,model);
  }

  employeeGet():Promise<any>{
    return this.http.get(`${environment.base_URL}getEmployee`).toPromise();
  }

  employeeGetById(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getEmployeeById/${id}`).toPromise();
  }

  employeeUpdate(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateEmployee`,model);
  }

  employeeDelete(id:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteEmployee/${id}`);
  }

  coursesAdd(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addCourses`,model);
  }

  coursesGet():Promise<any>{
    return this.http.get(`${environment.base_URL}getCourses`).toPromise();
  }

  coursesGetById(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getCoursesById/${id}`).toPromise();
  }

  coursesUpdate(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateCourses`,model);
  }

  coursesDelete(id:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteCourses/${id}`);
  }

  postFile(fileToUpload:File):Observable<any>{
    const endpoint = environment.base_URL + 'upload';
    const formData : FormData = new FormData();
    formData.append('image',fileToUpload,fileToUpload.name);
    return this.http.post(endpoint,formData).pipe(map(i => {return i}));
  }
}
