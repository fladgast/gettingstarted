import { Component } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent {

  num: number = 0

  addOne() {
    this.num++
  }

  resetNum() {
    this.num = 0
  }

}
