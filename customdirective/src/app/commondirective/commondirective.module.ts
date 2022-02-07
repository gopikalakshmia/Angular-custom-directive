import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirective } from './custom/attribute.directive';
import { DirectiveDirective } from './structuaral/directive.directive';



@NgModule({
  declarations: [
    AttributeDirective,
    DirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[AttributeDirective,DirectiveDirective]
})
export class CommondirectiveModule { }
