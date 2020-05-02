import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//routers
import { CarRoutingModule } from './car.routing.module';

//components
import { CarComponent } from './car.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarDetailsComponent } from './car-details/car-details.component';

// services
import { CarService } from '../../services/car.service';


// aplicacao do modulo 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarRoutingModule

  ],
  exports: [],
  declarations: [
    CarComponent,
    CarFormComponent,
    CarDetailsComponent
  ],
  providers: [
    CarService
  ]
})

export class CarModule { }