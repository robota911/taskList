import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-lesson04',
  templateUrl: './lesson04.component.html',
  styleUrls: ['./lesson04.component.scss'],
})

export class Lesson04Component implements OnInit {

public FirstName!: string ;
public lastName!: string ;
public number!: string ;
public result:User[] = [];
public editStatus = false;
public editIndex!: number;
popap = false
blackSkrin = false

  constructor() { }

  ngOnInit(): void {
  }

  closePopap(): void {
    this.popap = false
    this.blackSkrin = false
  }

  addPhone(): void {
    this.popap = true
    this.blackSkrin = true
  }

    addUser(): void {
     console.log('word', this.FirstName)
     console.log('word', this.lastName)
     console.log('word', this.number)
     let userObject: User = {
      FirstNames: this.FirstName,
      lastNames: this.lastName,
      numbers: this.number     
     }
     
    this.blackSkrin = false
    this.popap = false
    this.result.push(userObject)
    this.FirstName = ''
    this.lastName = ''
    this.number = ''
  }

  editUser(index: number): void {
    this.FirstName = this.result[index].FirstNames
    this.lastName = this.result[index].lastNames
    this.number = this.result[index].numbers
    this.editIndex = index
    this.editStatus = true
    this.popap = true
    this.blackSkrin = true
  }

  deliteUser(index: number): void {
    this.result.splice(index, 1)
  }

  saveUser(): void {
    this.result[this.editIndex].FirstNames = this.FirstName
    this.result[this.editIndex].lastNames = this.lastName
    this.result[this.editIndex].numbers = this.number
    this.FirstName = ''
    this.lastName = ''
    this.number = ''
    this.editStatus = false
    this.popap = false
    this.blackSkrin = false
  }
}
