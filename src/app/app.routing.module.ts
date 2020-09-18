
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

// components 
import { HomeComponent } from './components/home/home.component';

// caminhos para definir rotas aplicacao
const appRouters: Routes = [
  { path: '', component: HomeComponent },

  // senao existe rota redireciona para home 
  { path: '**', redirectTo:'',  pathMatch: "full" }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  imports: [
    RouterModule.forRoot(appRouters)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }