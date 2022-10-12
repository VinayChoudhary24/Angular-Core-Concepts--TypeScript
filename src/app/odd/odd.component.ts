// <!-- ---------------------------------------------------------------------------------- -->
// // <!-- ---------------------------- PRACTICE ADVANCE COMPONENTS and DATA BINDING------------------------------------------------ -->

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  // ADD @Input(), so that other Component can INSERT the Value/number from Outside
  @Input() number:number;

  constructor() { }

  ngOnInit(): void {
  }

}
