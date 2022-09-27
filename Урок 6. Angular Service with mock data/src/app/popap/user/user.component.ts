import { Component, OnInit } from '@angular/core';
import { IDchatInterface } from 'src/app/interface/chat.interface';
import { ChatMesageService } from 'src/app/service/chat-mesage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public userArea: IDchatInterface[] = [];
  public title!: string;
  public text!: string;
  public editStatus = false;
  public editID!: number;
  public postAdd = this.userChat.button;



  constructor(
    private userChat: ChatMesageService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userArea = this.userChat.getServiceChat()
  }

  addUser(): void {
    const newServiceChat = {
      id: this.editID,
      title: this.title,
      // user: this.user,
      text: this.text
    };
    if (this.userArea.length > 0) {
      const id = this.userArea.slice(-1)[0].id;
      newServiceChat.id = id + 1
    }

    this.userChat.addServiceChat(newServiceChat);
    this.title = '';
    this.text = '';
  }

  editUser(mesage: IDchatInterface): void {
    this.postAdd = true;
    this.title = mesage.title;
    this.text = mesage.text;
    this.editStatus = true;
    this.editID = mesage.id
  }

  saveAdmin(): void {
    const updataServiceChat = {
      id: this.editID,
      title: this.title,
      // user: this.user,
      text: this.text
    };
    this.userChat.updateServiceChat(updataServiceChat, this.editID);
    this.title = '';
    this.text = '';
    this.editStatus = false;
    this.postAdd = false;
  }

  delitAdmin(mesage: IDchatInterface): void {
    if (confirm('Are you sure?')) {
      this.userChat.deliteServiceChat(mesage.id);
    }
  }

  addPostClose(): void {
    this.postAdd = false;
  }

}
