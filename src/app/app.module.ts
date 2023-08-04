import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CardComponent } from './card/card.component';

import { HttpClientModule } from '@angular/common/http';
import { DataInfoComponent } from './data-info/data-info.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CardComponent,
    DataInfoComponent,
    Card2Component,
    Card3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
