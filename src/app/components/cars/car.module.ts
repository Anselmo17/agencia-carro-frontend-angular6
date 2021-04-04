import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//routers
import { CarRoutingModule } from './car.routing.module';

//components
import { CarComponent } from './car.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarDetailsComponent } from './car-details/car-details.component';

// services
import { CarService } from '../../services/car.service';
import { LoadingComponent } from 'src/app/shared/componentes/loading/loading.component';
import { NgxMaskModule } from 'ngx-mask';


// aplicacao do modulo 
@NgModule({
  imports: [
    NgxMaskModule.forRoot(),
    CommonModule,
    FormsModule,
    CarRoutingModule

  ],
  exports: [
    LoadingComponent
  ],
  declarations: [
    CarComponent,
    CarFormComponent,
    CarDetailsComponent,
    LoadingComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    CarService
  ]
})

export class CarModule { }