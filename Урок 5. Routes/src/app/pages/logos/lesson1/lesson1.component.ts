import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss']
})
export class Lesson1Component implements OnInit {

  public textInput = ''
  public inp = 'input'
  public changeRed = 'input2'
  public changeGreen = 'input1'
  public bedWord = ['']
  public textAreaValue = ''

  constructor() { }

  ngOnInit(): void {
  }

  inputGreen(): void {
    if (this.textInput.length > 0) {
      this.inp = this.changeGreen
    }
    else {
      this.inp = this.changeRed
    }
  }

  add(): void {
    this.bedWord.push(this.textInput)
    this.textInput = ''
  }
  cenzor(): void {
    const arr = this.textAreaValue.split(' ');
    let resul = arr.map((word) => {
      if (this.bedWord.includes(word)) {
        return '*'.repeat(word.length)
      } else {
        return word
      }
    })
    this.textAreaValue = resul.join(' ')
  }

}
