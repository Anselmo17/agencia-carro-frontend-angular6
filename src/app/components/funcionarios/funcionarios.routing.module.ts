import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components 
import { FuncionariosComponent } from './funcionarios.component';

// caminhos para definir rotas aplicacao
const appRouters: Routes = [
  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'funcionarios/cadastrar', component: FuncionariosComponent },
  { path: 'funcionarios/details/:id', component: FuncionariosComponent }
];


// adiciona as rotas a modulo
@NgModule({
  imports: [
    RouterModule.forChild(appRouters)
  ],
  exports: [RouterModule]
})

export class FuncionariosRoutingModule { }
