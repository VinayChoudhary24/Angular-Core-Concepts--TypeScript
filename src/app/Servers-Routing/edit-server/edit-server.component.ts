import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  // For NAVIGATION with canDeactivate
  changesSaved = false;

//   INJECT the ActivatedRoute to Access the QueryParams from Home.component
  constructor( private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
    // Subscribe to the query Params and fragments
    this.route.queryParams.subscribe( (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    // After this we Need to Navigate Away from this with the INJECTING router: Router in Constructor
    this.changesSaved = true;
    // Using Router
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  // To Make the canDeactivate Navigation Work on the Child 
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    // THE ACTUAL LOGIC THAT ALLOWS USER TO  EDIT/NAVIGATE
    if(!this.allowEdit) {
      return true;
    } if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

}
