import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private Auth : AuthenticationService) {
  }
  canActivate(next : ActivatedRouteSnapshot, 
    state : RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let allow:boolean = this.Auth.getToken ? true : false;
    return allow;
  }
}
