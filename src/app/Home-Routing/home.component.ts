import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    // INJECT router Here
    constructor( private router: Router ) {}

    ngOnInit() {
        
    }

    // This Function will Load a New Page onClick
    // To Load a New Page We Need to Inject Router in the Component
    onLoadServers(id: number) {
        // Use the Navigate Method
        // Using Query Params
        this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
    }
}