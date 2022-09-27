import { Injectable } from '@angular/core';
import { IDchatInterface } from '../interface/chat.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatMesageService {

  //  public postClose: boolean = false;

   public button!: boolean ;


  private serviceChat: Array<IDchatInterface> = [
    {
      id: 1,
      title: 'First post',
      // user: 'Admin',
      text: 'Sign up to create your account and start to use Angular blog'
    }
  ];

  constructor() { }

  // addButtonTry(){}

  // buttonTry(): void {
  //   this.button = true;
  // }
 
  getServiceChat(): Array<IDchatInterface>{
    return this.serviceChat;
  }

  addServiceChat(serviceChat: IDchatInterface): void {
      this.serviceChat.push(serviceChat)
  }

  updateServiceChat(serviceChat: IDchatInterface, id: number): void {
    const index = this.serviceChat.findIndex(serviceChat => serviceChat.id === id);
    this.serviceChat.splice(index, 1, serviceChat);
  }

  deliteServiceChat(id: number): void {
    const index = this.serviceChat.findIndex(serviceChat => serviceChat.id === id);
    this.serviceChat.splice(index, 1);
  }
}
