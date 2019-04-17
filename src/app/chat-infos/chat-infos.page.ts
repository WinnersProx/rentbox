import { Component, OnInit, Input } from '@angular/core';
import { ChatsService } from '../services/chats.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-chat-infos',
  templateUrl: './chat-infos.page.html',
  styleUrls: ['./chat-infos.page.scss'],
})
export class ChatInfosPage implements OnInit {
  private chats:any = [];
  constructor(private Chats : ChatsService, private Aroute : ActivatedRoute, private modal : ModalController, private params : NavParams){
    // injections
  }
  ngOnInit() {
    console.log(this.getCurrentFriend);
    //this.friendId = parseInt(this.Aroute.snapshot.paramMap.get('userId'));//route params
    this.Chats.getFriendChats(parseInt(this.getCurrentFriend.id)).subscribe(datas => {
      this.chats = Object.values(datas)[0];
    }, 
    error => {
      console.log("An error occured", error);
    })
    // get chat details 
    
  }
  get getCurrentFriend(){
    return this.params.get('chatInfos');
  }
  dismiss(){
    this.modal.dismiss().then(modal => {
      console.log("Modal dismissed");
    })
  }

}
