import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from '@angular/router';

  // Building a Custom Observables
import { Observable, Subscription } from 'rxjs'

// Calling/Using a OPERATOR
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-home-observables',
  templateUrl: './home-observables.component.html',
  styleUrls: ['./home-observables.component.css']
})
export class HomeObservablesComponent {}



// export class HomeObservablesComponent implements OnInit, OnDestroy {

//   // Building a Custom Observables
//   // This is to Store the Subscribe and Unsubscribe Observables
//   constructor( private firstObsSubscription: Subscription ) { }

//   ngOnInit(): void {
// //     interval( period:1000.subscribe( ( next: count) => {
// //       console.log(count);
// //     }))
// //   }

// //   // Building a Custom Observables -- USING/FOR NEXT i.e EMITTING NEW DATA
// //   ngOnInit() {
// //     const customIntervalObservable = Observable.create( (observer) => {
// //       let count = 0;
// //       setInterval( () => {
// //         observer.next(count);
// //         // COMPLETE -- 
// //         if(count == 2) {
// //           observer.complete();
// //         }
// //         // ERROR -- To Handle ERRORS
// //         if(count > 3) {
// //           observer.error(new Error('the count is more than 3!'));
// //         }
// //         count++;
// //       }, 2000)
// //     });
    
// //     // subscribe to the Observable for NEXT Function
// //     this.firstObsSubscription =
// //     // Calling/Using a OPERATOR with pipe() method 
// //     customIntervalObservable.pipe( map( (data: number) => {
// //       return data;
// //     })).subscribe( (data: number) => {
// //       console.log(data);
// //       // subscribe to the Observable for ERROR Function
// //     }, error => {
// //       console.log(error);
// //       alert(error.message);
// //       // subscribe to the Observable for COMPLETE Function
// //     }, () => {
// //       console.log('completed!')
// //     })
// //   }

//   ngOnDestroy() {
//     // this.firstObsSubscription.unsubscribe();
// }
 
// }

// }