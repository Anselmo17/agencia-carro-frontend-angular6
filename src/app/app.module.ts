import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from '../app/app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/cars/car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
    //AppRoutingModule

  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HomeComponent,
    CarComponent
  ]
})
export class AppModule { }
