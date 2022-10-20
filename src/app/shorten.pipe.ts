// Creating a Custom PIPE
// it Requires a INTERFACE -- PipeTransform

import { Pipe, PipeTransform } from "@angular/core";

// Add a Decorator
@Pipe({
    name: 'shorten'
})

export class ShortenPipe implements PipeTransform {
    transform(value: any, limit: number) {
        if(value.length > limit) {
        // Transform always returns
        return value.substr(0, limit) + '...';
        } else {
            return value;
        }
        // To use the Pipe, add it in the NgModule declaration --app.mudule
    }
}