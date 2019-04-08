import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page extends TabsPage implements OnInit{
  
  ngOnInit(){
    console.log(this.AuthUser);
  }
}
