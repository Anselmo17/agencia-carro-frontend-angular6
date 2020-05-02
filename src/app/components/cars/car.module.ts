import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';


//routers
import { CarRoutingModule } from './car.routing.module';

//components
import { CarComponent } from './car.component';
import { CarFormComponent } from './car-form/car-form.component';

// services
import { CarService } from '../../services/car.service';


// aplicacao do modulo 
@NgModule({
  imports: [
    CommonModule,
    CarRoutingModule
    //RouterModule
  ],
  exports: [],
  declarations: [
    CarComponent,
    CarFormComponent
  ],
  providers: [
    CarService
  ],
  bootstrap: [
    CarComponent,
    CarFormComponent
  ]
})

export class CarModule { }