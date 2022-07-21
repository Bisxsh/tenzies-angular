import {Component, OnInit} from '@angular/core';
import {Die} from "./utility/die";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tenzies';

  dice: Die[] = []

  getAllNewDice() {
    for(let i = 0; i < 10; i++) {
      this.dice[i] = {
        id: i,
        value: (Math.ceil(Math.random() * 6)),
        isHeld: false
      };
    }
  }

  rollDice() {
    for(let i = 0; i < 10; i++) {
      if (this.dice[i].isHeld) continue;
      this.dice[i].value = (Math.ceil(Math.random() * 6));
    }
  }

  areDiceSame() {
    if (this.dice[0] == null) return false;
    const firstVal = this.dice[0].value;
    return !this.dice.filter(d => d.value==firstVal)
  }

  hasWon(): boolean {
    const firstVal = this.dice[0].value;

    for (const d of this.dice) {
      if (!d.isHeld) return false;
      if (d.value != firstVal) return false;
    }

    return true;
  }

  dieHeldChanged(data: any) {
    const { id } = data;
    const die = this.dice[id];
    this.dice[id] = {
      ...die,
      isHeld: !die.isHeld
    }
    // console.log(this.won);
    console.log(this.hasWon())
    // console.log(this.dice[0] == null);
    // console.log(this.dice.filter(d => d.value==this.dieVal).length)
    // console.log(this.dice.filter(d => d.value==this.dieVal).length==10)

  }

  ngOnInit(): void {
    this.getAllNewDice();
  }

}
