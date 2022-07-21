import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Die } from "../utility/die";

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {

  @Input() die !: Die;
  @Output('heldChanged') eventEmitter: EventEmitter<any> = new EventEmitter<any>();

  toggleHoldDice() {
    this.eventEmitter.emit({ id: this.die.id });
  }

}
