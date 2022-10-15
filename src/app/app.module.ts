import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Required for ngModule on INPUT [SUB-PACKAGES] [For TYPESCRIPT]
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// -----------------------------BASICS ----------------------------------------
// import { ServerComponent } from './Server/server.component';
// import { ServersComponent } from './servers/servers.component';

// ------------------------------- PRACTICE --------------------------------------------------
// import { WarningAlertComponent } from './warningAlert/warning-alert.component';
// import { SuccessAlertComponent } from './success-alert/success-alert.component';

// ------------------------------- GAME --------------------------------------------------------
// import { GameControlComponent } from './game-control/game-control.component';
// import { OddComponent } from './odd/odd.component';
// import { EvenComponent } from './even/even.component';

// ----------------------------------- DIRECTIVES -------------------------------------------------
// import { BasicHighlightDirective } from './basic-highlight-directives/basic.highlight.directive';
// import { BetterHighlightDirective } from './better-highlight-renderer/better.highlight.directive';

// -------------------------------- STRUCTURAL DIRECTIVES --------------------------------------
// import { UnlessDirective } from './custom-structural-directive/unless.directive';

// --------------------------------- SERVICES ------------------------------------------------
// import { AccountComponent } from './services-account/account.component';
// import { NewAccountComponent } from './services-new-account/new-account.component';

// ------------------------------- PRACTICE SERVICES -------------------------------------------
// import { InactiveUsersComponent } from './inactive-users-services/inactive-users.component';
// import { ActiveUsersComponent } from './active-users-services/active-users.component';

// ----------------------- ROUTING ------------------------------------------------------------
import { HomeComponent } from './Home-Routing/home.component';
import { UsersComponent } from './users-routing/users.component';
import { ServersComponent } from './Servers-Routing/servers.component';
import { UserComponent } from './users-routing/user/user.component';
import { EditServerComponent } from './Servers-Routing/edit-server/edit-server.component';
import { ServerComponent } from './Servers-Routing/server/server.component';
import { ServersService } from './Servers-Routing/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivatedGuard } from './Servers-Routing/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './Servers-Routing/server/server-resolver.services';

@NgModule({
  declarations: [
    AppComponent,
    // ServerComponent,
    // ServersComponent,
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
    // InactiveUsersComponent,
    // ActiveUsersComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    // Import FormsModule Package [For ANGULAR]
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivatedGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
