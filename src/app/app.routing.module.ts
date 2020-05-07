
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

// components 
import { HomeComponent } from './components/home/home.component';

// caminhos para definir rotas aplicacao
const appRouters: Routes = [
  { path: '', component: HomeComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  imports: [
    RouterModule.forRoot(appRouters)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }