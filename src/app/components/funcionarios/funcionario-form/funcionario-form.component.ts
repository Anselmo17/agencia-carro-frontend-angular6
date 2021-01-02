import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//models
import { Funcionario } from '../../../models/funcionario';
// Service
import { FuncionarioService } from '../../../services/funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

// variaveis global
  mensagem: string;
 isLoading: boolean = false;

 //tipo funcionario
 funcionario = {} as Funcionario;
 funcionarios: Funcionario[];

  constructor(private funcionarioService:FuncionarioService) { }

  ngOnInit() {

  }


  // Chama o serviço para obter todos os carros
  getFuncionarios() {
    this.funcionarioService.getAllProfiles().subscribe((funcionarios: Funcionario[]) => {
      this.funcionarios = funcionarios;
    });
  }

  saveFuncionario(form: NgForm) {

    this.isLoading = true;
    // defini se um carro será criado ou atualizado
        if (this.funcionario.id !== undefined) {
          this.funcionarioService.updateFuncionario(this.funcionario).subscribe(() => {
            this.isLoading = false;
            this.cleanForm(form);
          });
        } else {
          this.funcionarioService.saveFuncionario(this.funcionario).subscribe(() => {
            this.isLoading = false;
            this.mensagem = "Cadastro com sucesso !!!"
            this.cleanForm(form);
    
            // limpa msg sucesso
            setTimeout(() => {
              this.mensagem = undefined;
            }, 3000)
          });
        }
      }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getFuncionarios();
    form.resetForm();
    this.funcionario = {} as Funcionario;
  }
  
}
