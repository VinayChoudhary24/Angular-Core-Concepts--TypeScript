import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

//   INJECt ActivatedRoute to Access the Links from servers component
  constructor( private serversService: ServersService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit() {
        // Initialize the Router Link
        // Use + to Convert the ID into Number
        const id = +this.route.snapshot.params['id']

    this.server = this.serversService.getServer(id);

    // React to Any Change After. we nedd to Subscribe
    this.route.params.subscribe( (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
    })
  }

// This Function will Navigate to the Edit-server.component, we need to INJECt router: Router
  onEdit() {
    // we use queryParamsHandling to Preserve the URL DATA
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

}
