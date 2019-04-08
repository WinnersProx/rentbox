import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  private auth = null;
  constructor(private store : Storage, private Auth : AuthenticationService){
    this.auth = this.Auth.getAuthUser;
  }
  get AuthUser(){
    return this.auth;
  }

}
