// This Service is to Pass DYNAMIC DATA with the RESOLVE GUARD..

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

// INTERFACE -- ite Works Like DESTRUCTURING the Code which will be Used Alot..
interface Server {
    id: number,
    name: string,
    status: string
}

// Here, We INJECT a Service into Another Service, So we Have to Use @INJECTABLE
@Injectable()

export class ServerResolver implements Resolve<Server> {

    // To Inject ServersService to Get the Method, which will retur us the Sserver
    constructor( private serversService: ServersService ) {}

    resolve(route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot ): Observable<Server> | Promise<Server> | Server {
                return this.serversService.getServer(+route.params['id']);
            }
}
