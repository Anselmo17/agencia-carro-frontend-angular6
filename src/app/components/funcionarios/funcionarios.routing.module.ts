import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components 
import { FuncionariosComponent } from './funcionarios.component';
import {FuncionarioFormComponent} from './funcionario-form/funcionario-form.component';
import { FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';

// caminhos para definir rotas aplicacao
const appRouters: Routes = [
  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'funcionarios/cadastrar', component: FuncionarioFormComponent },
  { path: 'funcionarios/details/:id/:editar', component: FuncionarioDetailsComponent },
  { path: 'funcionarios/editar/:id/:editar', component: FuncionarioDetailsComponent }
];


// adiciona as rotas a modulo
@NgModule({
  imports: [
    RouterModule.forChild(appRouters)
  ],
  exports: [RouterModule]
})

export class FuncionariosRoutingModule { }
