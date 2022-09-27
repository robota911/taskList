import { Component, OnInit } from '@angular/core';
// import { TitleStrategy } from '@angular/router';
import { IDchatInterface  } from 'src/app/interface/chat.interface';
import { ChatMesageService } from 'src/app/service/chat-mesage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public adminArea: IDchatInterface [] = [] ;
  // public adminArea!: IDchatInterface[] ;
  public title!: string;
  public text!: string;
  public editStatus = false;
  public editID!:number;
  // public postClose = false;

  // public postAdd = this.adminChat.postClose;
  public postAdd = this.adminChat.button;
 


  constructor( public adminChat: ChatMesageService ) { }

  ngOnInit(): void {
   
    this.getAdmin();
  //   this.adminArea = this.adminChat.getServiceChat()
  
  }

  getAdmin(): void {
    this.adminArea = this.adminChat.getServiceChat()
  }

  addAdmin(): void{
    const newServiceChat = {
      id: this.editID,
      title: this.title,
      // user: this.user,
      text: this.text   
    };
    if (this.adminArea.length > 0) {
      const id = this.adminArea.slice(-1)[0].id;
      newServiceChat.id = id + 1     
    }
    // console.log(newServiceChat)
    this.adminChat.addServiceChat(newServiceChat);
    this.title = '';
    this.text = '' ;
    
  }

  editAdmin(mesage: IDchatInterface): void {
    // this.postClose = true;
    this.postAdd = true;
    console.log(this.postAdd)

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
    this.adminChat.updateServiceChat(updataServiceChat, this.editID);
    this.title = '';
    this.text = '';
    this.editStatus = false;
    this.postAdd = false;
  }

  delitAdmin(mesage: IDchatInterface): void {
    if (confirm('Are you sure?')) {
      this.adminChat.deliteServiceChat(mesage.id);
    }    
  }

 addPostClose(): void {
  this.postAdd = false;
    }

}
