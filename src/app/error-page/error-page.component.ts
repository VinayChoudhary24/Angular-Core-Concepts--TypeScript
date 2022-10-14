import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  // INJECT ActivatedRoute to Use the Path from the app-routing.module
  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    // Both Cases Works
    // this.errorMessage = this.route.snapshot.data['message'];

    this.route.data.subscribe( (data: Data) => {
      this.errorMessage = data['message'];
    })
  }

}
