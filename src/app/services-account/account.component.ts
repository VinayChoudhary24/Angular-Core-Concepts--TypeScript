import { Component, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],

  // This is for Angular -- SERVICES 
  // PROVIDE THE SERVICE NAME HERE FOR ANGULAR
   providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  // This is for TypeScript
  // Add a Constructor Here to Infor ANGULAR and to Use the Instance of the LOGGING.SERVICE.ts
  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {}

// Function That Changes the STATUS
  onSetTo(status: string) {
    this.accountService.UpdateStatus(this.id, status);
    this.loggingService.logStatusChanges(status);
  }
}
