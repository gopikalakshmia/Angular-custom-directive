import { CommondirectiveModule } from './commondirective/commondirective.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedblackDirective } from './redblack.directive';

@NgModule({
  declarations: [
    AppComponent,
    RedblackDirective,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CommondirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
