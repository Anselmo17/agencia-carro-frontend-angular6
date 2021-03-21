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
import { ExportarExcelService } from 'src/app/shared/service/exportar-excel.service';


// aplicacao do modulo 
@NgModule({
  imports: [
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
    CarService,
    ExportarExcelService
  ]
})

export class CarModule { }