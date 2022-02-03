import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirective } from './custom/attribute.directive';



@NgModule({
  declarations: [
    AttributeDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[AttributeDirective]
})
export class CommondirectiveModule { }
