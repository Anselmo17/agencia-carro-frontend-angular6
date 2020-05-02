import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components 
import { CarComponent } from './car.component';
import { CarFormComponent } from './car-form/car-form.component';


// caminhos para definir rotas aplicacao
const appRouters: Routes = [
  { path: 'cars', component: CarComponent },
  { path: 'cadastrar', component: CarFormComponent },
  { path: 'cadastrar/:id', component: CarFormComponent }
];


// adiciona as rotas a modulo
@NgModule({
  imports: [
    RouterModule.forChild(appRouters)
  ],
  exports: [RouterModule]
})

export class CarRoutingModule { }
