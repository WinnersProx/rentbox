import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ChatsService } from '../services/chats.service';
// import { map } from 'rxjs/operators';
interface Chats {

}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  private chats:any = [];
  constructor(
    private http : HttpClient, 
    private route : Router,
    private toast : ToastController,
    private Chats : ChatsService){
    // runs the request when starting up the application
  }
  ngOnInit(){
    // When the page is initiated
    
    this.Chats.getAllChats().subscribe((datas) => {
      this.chats = Object.values(datas)[0];
      
    },
    error => {
      this.toastError(error);
    })
  }
  
  chatInfos(info){
    this.route.navigate(['chat', info.user.id]);
  }
  async toastError(error) {
    const toast = await this.toast.create({
      message: `An error occured : ${error.message}  with status : ${error.status}`,
      showCloseButton: true,
      duration : 2000,
      animated : true,
      color : 'danger',
      position: 'bottom',
      closeButtonText: 'OK'
    });
    toast.present();
  }
}
