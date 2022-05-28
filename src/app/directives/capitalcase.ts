import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalCase'
})
export class CapitalizeCase implements PipeTransform {
    transform(text: string): string {
        return text[0].toUpperCase() + text.substring(1).toLowerCase(); 
    }
}