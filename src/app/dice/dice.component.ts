import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {

  @Input() value !: number;
  isHeld !: boolean;

  toggleHoldDice() {
    this.isHeld = !this.isHeld;
    console.log(this.isHeld)
  }

}
