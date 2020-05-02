
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

// components 
//import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
//import { CarComponent } from './components/cars/car.component';
//import { CarFormComponent } from './components/cars/car-form/car-form.component';


// caminhos para definir rotas aplicacao
const appRouters: Routes = [
  { path: '', component: HomeComponent }
  // { path: 'cars', component: CarComponent },
  // { path: 'cars/cadastrar', component: CarFormComponent },
  // { path: 'cars/cadastrar/:id', component: CarFormComponent },
  // {
  //   path: 'cars', component: CarComponent, children:
  //     [
  //       { path: 'cadastrar', component: CarFormComponent }
  //     ]
  // },
  //{ path: '**', component: HomeComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  imports: [
    RouterModule.forRoot(appRouters)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }