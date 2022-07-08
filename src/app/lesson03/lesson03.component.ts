import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-lesson03',
  templateUrl: './lesson03.component.html',
  styleUrls: ['./lesson03.component.scss'],
})

export class Lesson03Component implements OnInit {

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
