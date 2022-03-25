import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardGuard implements CanActivate {
  constructor(private rut:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    if(sessionStorage.getItem('islogin') == undefined)
    {
      this.rut.navigate(['']);
    }
    else
    {
      return true;
    }
  }
  
}
