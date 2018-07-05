import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AframePipeModule } from 'angular-aframe-pipe';

import { AppComponent } from './app.component';
import { UfoComponent } from './ufo/ufo.component';


@NgModule({
  declarations: [
    AppComponent,
    UfoComponent
  ],
  imports: [
    BrowserModule,
    AframePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
