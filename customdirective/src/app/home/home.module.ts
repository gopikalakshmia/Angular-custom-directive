import { CommondirectiveModule } from './../commondirective/commondirective.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RedblackDirective } from '../redblack.directive';



@NgModule({
  declarations: [
    HomeComponent,
    
    
  ],
  imports: [
    CommonModule,
    CommondirectiveModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
