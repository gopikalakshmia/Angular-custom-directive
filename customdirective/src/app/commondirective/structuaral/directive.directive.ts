import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private templeref:TemplateRef<any>,private vcRef:ViewContainerRef) {

   }
   @Input() set appDirective(condition: boolean){
     condition ?this.vcRef.clear():this.vcRef.createEmbeddedView(this.templeref);
   }

}
