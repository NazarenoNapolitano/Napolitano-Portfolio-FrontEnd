import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { Vista1Module } from './vista1/vista1.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, Vista1Module],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
