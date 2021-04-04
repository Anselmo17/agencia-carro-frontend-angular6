import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// routers
import { AppRoutingModule } from './app.routing.module';
import { CarModule } from './components/cars/car.module';
import { FuncionarioModule } from './components/funcionarios/funcionarios.module';

// commons
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CarModule,
    FuncionarioModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
  ],
  exports: [
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,

  ]
})
export class AppModule { }
