import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

//## RXJS is the PACKAGE that Provides OBSERVABLES i.e THIRD_PARTY PACKAGES
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};

//   Store the Subscription in a  Variable
paramsSubscription: Subscription

//   INJECT ActivatedRoute to Load with Dynamic Parameter i.e Currently Loaded Route
  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    // Load the User
    this.user = {
        id: this.route.snapshot.params['id'],
        name: this.route.snapshot.params['name']
    };
    
    // OBSERVABLE -- to UPDATE the URL & PAGE/DOM DATA Together
    this.paramsSubscription = this.route.params.subscribe( (params: Params) => { 
        this.user.id = params['id'];
        this.user.name = params['name'];
    });
  }

//   To Destroy the SUBSCRIPTION
ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
}

}
