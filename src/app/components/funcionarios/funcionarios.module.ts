import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//routers
import { FuncionariosRoutingModule } from './funcionarios.routing.module';

//components
import { FuncionariosComponent } from '../funcionarios/funcionarios.component';
import {FuncionarioFormComponent} from './funcionario-form/funcionario-form.component';
import {FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';
import { LoadingComponent } from '../../shared/loading/loading.component';

// services
import { FuncionarioService } from '../../services/funcionario.service';

// aplicacao do modulo 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FuncionariosRoutingModule

  ],
  exports: [
  ],
  declarations: [
    FuncionariosComponent,
    FuncionarioFormComponent,
    FuncionarioDetailsComponent,
    LoadingComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    FuncionarioService
  ]
})

export class FuncionarioModule { }