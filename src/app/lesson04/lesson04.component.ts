import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';
// import { SearchPipe } from "./search.pipe";

@Component({
  selector: 'app-lesson04',
  templateUrl: './lesson04.component.html',
  styleUrls: ['./lesson04.component.scss'],
})

export class Lesson04Component implements OnInit {

  FirstName!: string;
  lastName!: string;
  number!: string;
  result: User[] = [];
  editStatus = false;
  editIndex!: number;
  popap = false
  blackSkrin = false
  search = ''
  type = 'ask'
  type1 = 'desk'
  appear = false
  appear1 = false
  appear2 = false

  constructor() { }

  ngOnInit(): void {
  }

  up(): void {
    this.appear = true
  }

  up1(): void {
    this.appear1 = true
  }

  up2(): void {
    this.appear2 = true
  }

  changeSort(type: string): void {
    this.type = type
    this.appear = false
    this.appear1 = false
    this.appear2 = false
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