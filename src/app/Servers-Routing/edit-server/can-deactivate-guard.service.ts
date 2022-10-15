import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

// INTERFACE -- ite Works Like DESTRUCTURING the Code which will be Used Alot..
export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivatedGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate,
                  currentRoute: ActivatedRouteSnapshot, 
                  currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
                    return component.canDeactivate();
                  }
}