import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// components 
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/cars/car.component';



// caminhos para definir rotas aplicacao
const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars', component: CarComponent },
  //{ path: '', component: HomeComponent },
  // {
  //   path: 'cars', component: CarComponent, children:
  //     [
  //       { path: 'cadastrar', component: CarComponent}
  //     ]
  // },
  { path: '**', component: AppComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);