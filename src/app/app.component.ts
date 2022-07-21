import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tenzies';

  dice: number[] = []

  getAllNewDice() {
    for(let i = 0; i < 10; i++) {
      this.dice[i] = (Math.ceil(Math.random() * 6));
    }
  }

  ngOnInit(): void {
    this.getAllNewDice();
  }

}
