import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user.interface';


@Component({
  selector: 'app-table003',
  templateUrl: './table003.component.html',
  styleUrls: ['./table003.component.scss']
})
export class Table003Component implements OnInit {

  @Input() result: User[] = [];
  saveUsername!: boolean;
  checkboxStatus = false
  save!: string;
  login!: string;
  editStatus = false;
  editIndex!: number;

  constructor() { }

  ngOnInit(): void {

  }

  public checkBox(value: boolean) {
    this.saveUsername = value;
  }

  editUser(index: number): void {
    this.editIndex = index
    this.editStatus = true
    this.save = this.result[index].login
  }

  deliteUser(index: number): void {
    this.result.splice(index, 1)
    this.saveUsername = false;
    this.editStatus = false
  }

  saveUser(): void {
    this.result[this.editIndex].login = this.save
    this.editStatus = false
    this.login = ''
    this.save = ''
  }
}