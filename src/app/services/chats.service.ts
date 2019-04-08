import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ChatsService {
  
  private base_url = 'http://localhost/smartchat_api/messages/';
  constructor(
    private Auth : AuthenticationService,
    private http : HttpClient
    ) { }
  private httpOptions = { 
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      Authorization : 'Bearer ' + this.Auth.accessToken
    })
  }
  getAllChats(){
    // get all the chats of the current user
    return this.http.get(`${this.base_url}get_chats.json`, this.httpOptions)
  }
  getFriendChats(friendId){
    // get all the chat with a specific user
    return this.http.get(`${this.base_url}get_friend_chats/${friendId}.json`, this.httpOptions)
  }
}
