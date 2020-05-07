import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//routers
import { FuncionariosRoutingModule } from './funcionarios.routing.module';

//components
import { FuncionariosComponent } from '../funcionarios/funcionarios.component';

// services
import { FuncionarioService } from '../../services/funcionario.service';

// aplicacao do modulo 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FuncionariosRoutingModule

  ],
  exports: [],
  declarations: [
    FuncionariosComponent
  ],
  providers: [
    FuncionarioService
  ]
})

export class FuncionarioModule { }