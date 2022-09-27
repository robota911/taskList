import { Component, OnInit } from '@angular/core';
// import { TitleStrategy } from '@angular/router';
import { IDchatInterface } from 'src/app/interface/chat.interface';
import { ChatMesageService } from 'src/app/service/chat-mesage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public btnPopap = false;
  public adminUser = true;//['admin', 'ivan']
  public btnYellow = false;
  public btnHome = true;
  public user = '';

  public btnPopapUser = false;

  public headerArea: IDchatInterface[] = [];
  public title!: string;
  public text!: string;
  public editStatus = false;
  public editID!: number;

  public postAdd = this.headerChat.button;


  constructor(public headerChat: ChatMesageService) { }

  ngOnInit(): void { }

  btnSignIn(): void {
    this.btnPopap = true;
  }

  btnSubmit(): void {
    this.btnYellow = true;
    this.btnPopap = false;
    this.btnHome = false;
    this.adminUser = false;
  }

  btnSignUp(): void {
    this.btnPopapUser = true;
  }

  btnSubmitUser(): void {
    this.btnYellow = true;
    this.btnHome = false;
    this.btnPopapUser = false;
    this.adminUser;
  }

  btnsignOut(): void {
    this.btnYellow = false;
    this.btnHome = true;
    this.user = '';
  }

  btnClose(): void {
    this.btnPopap = false;
    this.btnPopapUser = false;
  }

  addAdmin(): void {
    const newServiceChat = {
      id: this.editID,
      title: this.title,
      // user: this.user,
      text: this.text
    };
    if (this.headerArea.length > 0) {
      const id = this.headerArea.slice(-1)[0].id;
      newServiceChat.id = id + 1
    }
  
    this.headerChat.addServiceChat(newServiceChat);
    this.title = '';
    this.text = '';
    this.postAdd = false;
  }

  saveAdmin(): void {
    const updataServiceChat = {
      id: this.editID,
      title: this.title,
      // user: this.user,
      text: this.text
    };
    this.headerChat.updateServiceChat(updataServiceChat, this.editID);
    this.title = '';
    this.text = '';
    this.editStatus = false;
  }

  addPostClose(): void {
    this.postAdd = true;
  }

  postClose(): void {
    this.postAdd = false;
  }

}
