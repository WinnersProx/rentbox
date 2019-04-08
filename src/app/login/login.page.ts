import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private Auth : AuthenticationService, private router : Router) { }

  ngOnInit() {
  }
  signIn(user){
    this.Auth.logIn(user)
    
  }
  goHome(){
    this.router.navigate(['home']);
  }
}
