
// ----------------------------------------------------------------------------------------
// -------------------------Creating Custom Directives------------------------------------

import { Directive, ElementRef, OnInit } from "@angular/core";

// Add a Decorator for the Directive i.e @
@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {

    //INJECTING --  To Instantiate
    // ElementRef Gives us ACCESS to the Element
    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}