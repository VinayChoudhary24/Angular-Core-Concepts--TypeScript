import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor( private serversService: ServersService, 
               private router: Router, 
               private route: ActivatedRoute ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

   // This Function will Load a New Page with RELATIVE PATH onClick
    // To Load a New Page We Need to Inject Router in the Component
    onReloadPage() {
        // To Load with RELATIVE Path we need to INJECT route: ActivatedRoute which Gives us the {relativeTo:} Property
        // this.router.navigate(['servers'], {relativeTo: this.route});
    }

}
