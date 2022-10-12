// ----------------------------------------------------------------------------------------
// -------------------------Creating Custom STRUCTURAL Directives------------------------------------

import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appUnless]'
})

export class UnlessDirective {
    vcRef: ViewContainerRef;
    // Get the Condition
    @Input() set appUnless(condition: boolean) {
        if(!condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        }else {
            this.vcRef.clear();
        }
    }

    // ElementRef Gives us ACCESS to the element
    // TemplateRef Gives us ACCESS to the template
    // ViewContainerRef tells where to  View
    constructor( private templateRef: TemplateRef<any>, vcRef: ViewContainerRef ) {}
}