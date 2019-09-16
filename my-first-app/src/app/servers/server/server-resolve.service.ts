import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Server {
    id: number,
    status: string,
    name: string
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Server> |
        Promise <Server> | Server {
            return this.serversService.getServer(+route.params['id']);
    }
}