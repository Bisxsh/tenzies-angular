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
      this.dice[i].value = (Math.ceil(Math.random() * 6));
    }
  }

  ngOnInit(): void {
    this.getAllNewDice();
  }

}
