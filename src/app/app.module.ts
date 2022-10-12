import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Required for ngModule on INPUT [SUB-PACKAGES] [For TYPESCRIPT]
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './Server/server.component';
import { ServersComponent } from './servers/servers.component';
// import { WarningAlertComponent } from './warningAlert/warning-alert.component';
// import { SuccessAlertComponent } from './success-alert/success-alert.component';
// import { GameControlComponent } from './game-control/game-control.component';
// import { OddComponent } from './odd/odd.component';
// import { EvenComponent } from './even/even.component';
// import { BasicHighlightDirective } from './basic-highlight-directives/basic.highlight.directive';
// import { BetterHighlightDirective } from './better-highlight-renderer/better.highlight.directive';
// import { UnlessDirective } from './custom-structural-directive/unless.directive';
// import { AccountComponent } from './services-account/account.component';
// import { NewAccountComponent } from './services-new-account/new-account.component';
import { InactiveUsersComponent } from './inactive-users-services/inactive-users.component';
import { ActiveUsersComponent } from './active-users-services/active-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    // WarningAlertComponent,
    // SuccessAlertComponent,
    // GameControlComponent,
    // OddComponent,
    // EvenComponent,
    // BasicHighlightDirective,
    // BetterHighlightDirective,
    // UnlessDirective,
    // AccountComponent,
    // NewAccountComponent,
    InactiveUsersComponent,
    ActiveUsersComponent,
  ],
  imports: [
    BrowserModule,
    // Import FormsModule Package [For ANGULAR]
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
