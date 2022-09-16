
import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss'],
})

export class Lesson3Component implements OnInit {

  login!: string;
  pasword!: string;
  email!: string;
  result: User[] = [];

  constructor() { }
  ngOnInit(): void { }

  addUser(): void {
    let userObject: User = {
      login: this.login,
      password: this.pasword,
      email: this.email
    }
    this.result.push(userObject)
    this.login = ''
  }
}
