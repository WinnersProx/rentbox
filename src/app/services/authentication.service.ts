import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';
let localStorage = window.localStorage;
let AUTH_TOKEN = null;
let base_url = 'http://localhost/smartchat_api/users/';
const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization' : '__token'
  })
}
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);
  constructor(private platform : Platform, private http : HttpClient) { 
    this.platform.ready().then(()=>{
      this.checkToken();
    })
  }
  errorHandler(error : HttpErrorResponse){
    console.log(error);
  }
  logIn(user:Users){
    
    return this.http.post<Users>(base_url + 'login.json',user.email, httpOptions)
    .subscribe(data =>{
      console.log(data);
    }, error => {
      console.log(error);
    })
    // AUTH_TOKEN = 'Bearer 12345';
    // localStorage.setItem('_authToken', AUTH_TOKEN);
    // this.authenticationState.next(true);
  }
  logOut(){
    AUTH_TOKEN = '';
    localStorage.removeItem('_authToken');
    this.authenticationState.next(false);
  }
  isAuthenticated(){
    return this.authenticationState.value;
  }
  checkToken(){
    localStorage.getItem('_authToken');
    if(AUTH_TOKEN){
      this.authenticationState.next(true);
    }
    else{
      this.authenticationState.next(false);
    }
    
  }
}
