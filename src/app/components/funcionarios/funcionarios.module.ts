import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//routers
import { FuncionariosRoutingModule } from './funcionarios.routing.module';

//components
import { FuncionariosComponent } from '../funcionarios/funcionarios.component';
import {FuncionarioFormComponent} from './funcionario-form/funcionario-form.component';
import {FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';

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
    FuncionariosComponent,
    FuncionarioFormComponent,
    FuncionarioDetailsComponent
  ],
  providers: [
    FuncionarioService
  ]
})

export class FuncionarioModule { }