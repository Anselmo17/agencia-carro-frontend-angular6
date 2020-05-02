import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components 
import { CarComponent } from './car.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarDetailsComponent } from '../cars/car-details/car-details.component';

// caminhos para definir rotas aplicacao
const appRouters: Routes = [
  { path: 'cars', component: CarComponent },
  { path: 'cars/cadastrar', component: CarFormComponent },
  { path: 'cars/details/:id', component: CarDetailsComponent }
];


// adiciona as rotas a modulo
@NgModule({
  imports: [
    RouterModule.forChild(appRouters)
  ],
  exports: [RouterModule]
})

export class CarRoutingModule { }
