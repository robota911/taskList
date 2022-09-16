// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-lesson2',
//   templateUrl: './lesson2.component.html',
//   styleUrls: ['./lesson2.component.scss']
// })
// export class Lesson2Component implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.scss'],
})

export class Lesson2Component implements OnInit {

public login!: string ;
public pasword!: string ;
public email!: string ;
public result:User[] = [];
public editStatus = false;
public editIndex!: number;

  constructor() { }

  ngOnInit(): void {
  }

    addUser(): void {
     console.log('word', this.login)
     console.log('word', this.pasword)
     console.log('word', this.email)
     let userObject: User = {
      login: this.login,
      password: this.pasword,
      email: this.email
      
     }
     
    this.result.push(userObject)
    this.login = ''
    this.pasword = ''
    this.email = ''
  }

  editUser(index: number): void {
    this.login = this.result[index].login
    this.pasword = this.result[index].password
    this.email = this.result[index].email
    this.editIndex = index
    this.editStatus = true
  }

  deliteUser(index: number): void {
    this.result.splice(index, 1)
  }

  saveUser(): void {
    this.result[this.editIndex].login = this.login
    this.result[this.editIndex].password = this.pasword
    this.result[this.editIndex].email = this.email
    this.login = ''
    this.pasword = ''
    this.email = ''
    this.editStatus = false

  }
}
