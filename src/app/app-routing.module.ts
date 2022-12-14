import { NgModule } from "@angular/core";
import { HomeComponent } from './Home-Routing/home.component';
import { UsersComponent } from './users-routing/users.component';
import { ServersComponent } from './Servers-Routing/servers.component';
import { UserComponent } from './users-routing/user/user.component';
import { EditServerComponent } from './Servers-Routing/edit-server/edit-server.component';
import { ServerComponent } from './Servers-Routing/server/server.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivatedGuard } from "./Servers-Routing/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./Servers-Routing/server/server-resolver.services";



// Create the Variable To Store Multiple Routes
const appRoutes: Routes = [
    // Every Single Route is a Object in the Array i.e Key: Value
    { path: '', component: HomeComponent },
  
    // Adding the CHILDREN property for Nested Routing
    // To Load the Child Routes ADD a saperate <router-outlet> in the PARENT Component i.e Users.component
    { path: 'users', component: UsersComponent, children: [
        //USING Params -- Add Parameters to the Path to Load a Single User
        { path: ':id/:name', component: UserComponent },
    ] },
    
    //### REMOVE THEm FROM HERE AND ADD THEM AS A CHILD/NESTED  to the SERVERS PATH
    // //USING Params -- Add Parameters to the Path to Load a Single User
    // { path: 'users/:id/:name', component: UserComponent },
  
    // Adding the CHILDREN property for Nested Routing
    // To Load the Child Routes ADD a saperate <router-outlet> in the PARENT Component i.e Servers.component 
    { path: 'servers', 
    // canActivate: [AuthGuard], 
    canActivateChild: [AuthGuard], component: ServersComponent, children: [
      
        // Loading the Single Server
        { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
  
        // USINIG Query Params --
        // Add canDeactivate Here
        { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivatedGuard]  },
    ] 
  },
  
  // Page Not Found Routing -- ##it should always be in the END of ROUTES
  // ** WILDCARD ROUTE -- this Menas redirect Everything that is not in Path to NOT-FOUND
  // { path: 'not-found', component: PageNotFoundComponent },
  // The error-Page Path to Pass STATIC DATA for Error Messages
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
  
    //### REMOVE THEm FROM HERE AND ADD THEM AS A CHILD/NESTED  to the SERVERS PATH 
  // // Loading the Single Server
    // { path: 'servers/:id', component: ServerComponent },
    // // USINIG Query Params --
    // { path: 'servers/:id/edit', component: EditServerComponent }, 
  ];


@NgModule({
    imports: [
     // For Routing
    //  This is the Place to use Location Strategies, useHash: false: it is  false by default 
    // RouterModule.forRoot(appRoutes, {useHash: true}),
    RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}