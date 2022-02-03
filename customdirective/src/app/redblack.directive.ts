import { Directive, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';

@Directive({
  selector: '[appRedblack]'
})
export class RedblackDirective {

  constructor(private el:ElementRef) {
    console.log(this.el.nativeElement);
    this.el.nativeElement.style.color="red";
    
   }
   ngOnInit(){

    this.el.nativeElement.innerHTML+=" custome directive added";
   }

}
