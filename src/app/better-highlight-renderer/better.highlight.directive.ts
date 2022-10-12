
import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
    // Other Binding Option than Renderer
    @HostBinding('style.backgroundColor') backgroundColor: string = 'violet';

    // INJECTING -- Renderer Binding
    // ElementRef Gives us ACCESS to the Element
    // constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        
    }

    // To Make the Styling More Interactive
    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = 'green'
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = 'yellow'
    } 

}