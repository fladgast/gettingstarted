import { Component } from '@angular/core';

import { Chips, chipsTypes } from '../chips';

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

  chipsTypes = [...chipsTypes];

}
