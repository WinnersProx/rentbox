import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private Auth : AuthenticationService) {

  }
  canActivate():boolean {
    return this.Auth.isAuthenticated();
  }
}
