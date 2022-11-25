import { Component } from '@angular/core';
import { count } from 'console';

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

  onlyEstrella() {
    let onlyEstrellaArray: Chips[] = []

    for (let chips of chipsTypes) {
      if (chips.producer == 'Estrella') {
        onlyEstrellaArray.push(chips)
      }
    }
    this.chipsTypes = [...onlyEstrellaArray]
  }

  isOnlyEstrella(): boolean {
    let count: number = 0;

    for (let chips of chipsTypes) {
      if (chips.producer == 'Estrella') {
        count++
      }
    }
    if (this.chipsTypes.length == count) {
      return true
    }
    return false
  }

  isEstrella(c: Chips): boolean {
    return c.producer == 'Estrella'
  }

}
