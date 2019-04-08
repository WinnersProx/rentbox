import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../services/chats.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chat-infos',
  templateUrl: './chat-infos.page.html',
  styleUrls: ['./chat-infos.page.scss'],
})
export class ChatInfosPage implements OnInit {
  private chats:any = [];
  private friendId:number;
  private currentFriend:Object = {};
  constructor(private Chats : ChatsService, private Aroute : ActivatedRoute){
    // injections
  }
  ngOnInit() {
    this.friendId = parseInt(this.Aroute.snapshot.paramMap.get('userId'));
    console.log(this.friendId);
    this.Chats.getFriendChats(this.friendId).subscribe(datas => {
      this.chats = Object.values(datas)[0];
      this.currentFriend = Object.values(datas)[1];
    }, 
    error => {
      console.log("An error occured", error);
    })
    // get chat details 
    
  }
  get getCurrentFriend(){
    return this.currentFriend;
  }
  

}
