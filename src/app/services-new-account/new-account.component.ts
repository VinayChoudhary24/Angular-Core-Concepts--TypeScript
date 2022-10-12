import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

  // This is for Angular -- SERVICES
  // PROVIDE THE SERVICE NAME HERE FOR ANGULAR
  providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // This is for TypeScript
  // Add a Constructor Here to Infor ANGULAR and to Use the Instance of the LOGGING.SERVICE.ts
  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {}

//   This Fuction Creates a New Account 
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChanges(accountStatus);
  }
}
