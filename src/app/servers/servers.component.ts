import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //Selected by NAME

  // selector: '[app-servers]', //Selected by ATTRIBUTE
  // selector: '.app-servers', //Selected by CLASS

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

   // ---------------------PROPERTY BINDING-------------------------------------------------
   allowNewServer: boolean = false; 

  //  serverCreationStatus: string = 'No server Was Created!'; //Event Binding

   serverName: string = '';  //Two-Way && Event Binding

   serverCreated: boolean = false;  //Directive *ngIf

   servers = ['Server1', 'Server2']; //Directive *ngFor
   
   showSecret: boolean = false; //Practice

   toggleDetails = []; //Practice

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 3000)
   }

  ngOnInit(): void {

   
  }

   // ---------------------EVENT BINDING-------------------------------------------------
   onCreateServer() {
    this.serverCreated = true;  //ngIf

    this.servers.push(this.serverName);   //ngFor

    // this.serverCreationStatus = 'Server was Created!! with Server Name:-- ' + this.serverName; 
   }
  //  onUpdateServerName(event: Event) {
  //   // console.log(event);
  //   this.serverName = (<HTMLInputElement>event.target).value;
  //   // HTMLInputElement is Used to Tell TypeScript For Event
  //  }


// ---------------------PRACTICE DIRECTIVES-------------------------------------------------
  onToggleDetails()  {
    this.showSecret = !this.showSecret;
    // this.toggleDetails.push(this.toggleDetails.length + 1);
    this.toggleDetails.push(new Date)
  }

}
