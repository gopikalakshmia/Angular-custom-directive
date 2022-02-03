import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color="green";
   }

}
