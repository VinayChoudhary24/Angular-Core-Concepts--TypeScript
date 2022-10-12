// <!-- ---------------------------------------------------------------------------------- -->
// // <!-- ---------------------------- PRACTICE ADVANCE COMPONENTS and DATA BINDING------------------------------------------------ -->

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;

  // ADD @OUTPUT(), so that other Components(app.component) can Listen to this FROm OUTSIDE
  @Output() intervalFired = new EventEmitter<number>();

  lastNumber;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval( () => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 2000)
  }

  onPauseGame() {
    clearInterval(this.interval)
  }

}
