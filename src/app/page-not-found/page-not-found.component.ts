// ## this component is Handling the 404 Errors i.e if the user types something in the URL section that is not Valid, in that case it will Re-direct the User to this Component Page

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})

export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
