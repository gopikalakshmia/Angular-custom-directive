import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})

export class AttributeDirective {
@Input() case:string="";
  @HostListener('blur')onblur(){
    let valuechanged:string=this.el.nativeElement.value.toUpperCase();
    (this.case=="lower") ?this.render.setProperty(this.el.nativeElement,'value',valuechanged):
    this.render.setProperty(this.el.nativeElement,'value',this.el.nativeElement.value.toLowerCase());
  }

  constructor(private el:ElementRef,private render:Renderer2) {
    console.log("something");
   }

   ngOnInit(){

    console.log(this.el.nativeElement.value);
   }

}
