import { Component, OnInit } from '@angular/core';
// import { AccountService } from './account.service';
import { UsersService } from './users.service';

//## To Use BootStrap we need to Inform Angular in ANGULAR.JSON File in STYLES[]
   //-- "node_modules/bootstrap/dist/css/bootstrap.min.css"


// These are the DECORATORS
   @Component({
  selector: 'app-root', //This is to Select the INDEX.HTML File.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountService]
  providers: [UsersService]
})

// <!-- ---------------------------------------------------------------------------------- -->
// <!-- ----------------------------BASICS------------------------------------------------ -->
   //##1 - COMPONENTS:- headers, services etc.. [RE-USABLE]
export class AppComponent {
  // name = 'angular-core-concepts';


  // //   ----------------------------GAME CONTROL-------------------------------------------------------
// oddNumbers: number[] =[];
// evenNumbers: number[] =[];

// onIntervalFired(firedNumber: number) {
//    // console.log(firedNumber);
//    if(firedNumber % 2 === 0) {
//       this.evenNumbers.push(firedNumber);
//    }else {
//       this.oddNumbers.push(firedNumber);
//    }
// }


// <!-- ---------------------------------------------------------------------------------- -->
// <!-- ---------------------------- PRACTICE ADVANCE COMPONENTS and DATA BINDING------------------------------------------------ -->
// serverElements = [];
//   newServerName = '';
//   newServerContent = '';

//   onAddServer() {
//     this.serverElements.push({
//       type: 'server',
//       name: this.newServerName,
//       content: this.newServerContent
//     });
//   }

//   onAddBlueprint() {
//     this.serverElements.push({
//       type: 'blueprint',
//       name: this.newServerName,
//       content: this.newServerContent
//     });
//   }



// <!-- ---------------------------------------------------------------------------------- -->
// <!-- ----------------------------PRACTICE ADVANCE DIRECTIVES------------------------------------------------ -->
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4, 6];
  onlyOdd = false;

  // <!-- ----------------------------ngSwitch DIRECTIVES------------------------------------------------ -->
  value = 10;



  // <!-- ----------------------------- -------------------------------- -------------------------------- -->
  // <!-- ----------------------------- SERVICES ------------------------ -------------------------------- -->
  // accounts: {name: string, status: string}[] = [];

  // constructor(private accountService: AccountService) {}

  
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

  // ngOnInit() {
  //    this.accounts = this.accountService.accounts;
  // }

  // <!-- ----------------------------- -------------------------------- -------------------------------- -->
  // <!-- -----------------------------PRACTICE SERVICES ------------------------ -------------------------------- -->  
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['chris', 'Man'];


  
//   <!-- ----------------------------- -------------------------------- -------------------------------- -->
// <!-- ----------------------------- ROUTING ------------------------ -------------------------------- -->
  





//
}

//##Creating Components from CLI
  // ng generate component <name>



 