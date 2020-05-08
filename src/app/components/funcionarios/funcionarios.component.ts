import { Component, OnInit } from '@angular/core';


import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/funcionario';
import { NgForm } from '@angular/forms';
import { FuncionarioModule } from './funcionarios.module';


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {


  funcionario = {} as Funcionario;
  funcionarios: Funcionario[];

  title = 'Funcionarios';
  subTitle = 'Gerenciamento de Funcionarios';

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.getFuncionarios();

  }

  getFuncionarios() {
    this.funcionarioService.getAllProfiles().subscribe((funcionarios: Funcionario[]) => {
      this.funcionarios = funcionarios;
    })
  }


  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getFuncionarios();
    form.resetForm();
    //this.funcionario = {} as Funcionario;
  }
}