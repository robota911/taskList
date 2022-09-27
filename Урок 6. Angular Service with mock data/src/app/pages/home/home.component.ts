import { Component, OnInit } from '@angular/core';
import { IDchatInterface } from 'src/app/interface/chat.interface';
import { ChatMesageService } from 'src/app/service/chat-mesage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


   public homeArea!: IDchatInterface[] ;

  constructor(
    private homeChat: ChatMesageService
    ) { }

  ngOnInit(): void {
    this.getAdmin();
  }

  getAdmin(): void {
    this.homeArea = this.homeChat.getServiceChat()
  }

}
