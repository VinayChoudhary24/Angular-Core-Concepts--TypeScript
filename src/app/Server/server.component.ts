// SERVER TS COMPONENT

import { Component } from "@angular/core";

// Add Server DECORATOR
@Component({
    selector: 'app-server', //A selector is declared so that we can use this server component in other HTML Files. 
    templateUrl: './server.component.html' //template is neccessary, it it locates the respective HTML Code
})


export class ServerComponent {
    // ---------------------STRING INTERPOLATION-------------------------------------------------
    serverId: number = 10;
    serverStatus: string = 'Offline';
    message: string = 'Please Contact Administration!!';

    // userCreationStatus: string = 'No users has been Added to the Server!';

    // userName: string = '';

    // <!-- ---------------------DIRECTIVES ngStyle------------------------------------------------- -->
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }


    // Method to Show the Message
    showMessage() {
       return this.message;
    }

    // // For Adding User
    // onUserAdd() {
    //    return this.userCreationStatus = 'User was Added!! with Name:-- '+ this.userName;
    // }

    // ----------------------------Directive ngStyle-----------------------------------------
    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }

}