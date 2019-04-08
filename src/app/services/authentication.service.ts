import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform, LoadingController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
let base_url = 'http://localhost/smartchat_api/users/';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private authenticationState = new BehaviorSubject(false);
  public accessToken = null;
  private authUser = null;
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : this.getToken
    })
  }
  constructor(private platform : Platform, 
    private http : HttpClient, 
    private store : Storage, 
    private route : Router) { 
    
  }
  errorHandler(error : HttpErrorResponse){
    console.log(error);
  }
  logIn(user){
    
    this.http.post<Users>(base_url + 'login.json',{
      email: user.username, 
      password: user.password
    }).subscribe(datas => {
      this.store.set('__accessToken', datas.__accessToken)
      this.store.set('authUser', datas.authUser);
      this.setToken(datas.__accessToken);
      this.setAuthUser(datas.authUser);
      this.route.navigate(['tabs']);
    }, error => {
      console.log("Error occured", error);
    })

  }
  logOut(){
    this.store.remove('_authToken').then(cleared =>{
      this.authenticationState.next(false);
      this.store.remove('authUser');
    });
    
    
  }
  isAuthenticated(){
    return this.authenticationState.value;
  }
  setToken(token){
    this.accessToken = token;
  }
  
  get getToken(){
    return this.accessToken;
  }
  get getAuthUser(){
    return this.authUser;
  }
  checkToken(){
    this.store.get('__accessToken').then(authToken => {
      this.authenticationState.next(true);
      this.accessToken = authToken
    }, error =>{
      this.authenticationState.next(false);
    });
    return this.authenticationState.value;
    
  }
  setAuthUser(user){
    this.authUser = user;
  }
}
