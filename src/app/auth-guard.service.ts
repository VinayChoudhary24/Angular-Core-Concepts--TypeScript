import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

// THIS CODE IS EXECUTED BEFORE A ROUTER IS LOADED
// canActivate Method Also Returns Something.. Here it's Observable
// Implement CanActivateChild -- to Protect the Child Routes
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor( private authService: AuthService,
                 private router: Router ) {}

    canActivate( route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot  ): Observable<boolean> | Promise<boolean> | boolean {
                    return this.authService.isAuthenticated()
                    .then( (authenticated: boolean) => {
                        if (authenticated) {
                            return true;
                        } else {
                           return this.router.navigate(['/']);
                        }
                    })
                }

    // Method
    canActivateChild( route: ActivatedRouteSnapshot,
                      state: RouterStateSnapshot  ): Observable<boolean> | Promise<boolean> | boolean {
                        return this.canActivate(route, state);
                      }            
}