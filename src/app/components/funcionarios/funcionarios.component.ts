import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

// Service
import { FuncionarioService } from '../../services/funcionario.service';

//Model
import { Funcionario } from '../../models/funcionario';


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})



export class FuncionariosComponent implements OnInit {

  
  funcionario = {} as Funcionario;
  funcionarios: Funcionario[];

  title = 'Funcionários';
  subTitle = 'Gerenciamento de Funcionários';

  id: string;
  inscricaoId: Subscription;
  mensagem: string;
  

  constructor(private funcionarioService: FuncionarioService , private routerParams: ActivatedRoute) { }

  ngOnInit() {
    this.getFuncionarios();

    this.inscricaoId = this.routerParams.params.subscribe((params:any)=>{
       this.id = params["id"];
    });
  }

// quando o component desmontar
ngOnDestroy() {
  this.inscricaoId.unsubscribe();
}

// lista Funcionarios 
  getFuncionarios() {
    this.funcionarioService.getAllProfiles().subscribe((funcionarios: Funcionario[]) => {
      this.funcionarios = funcionarios;
    })
  }

// Cadastra Funcionario 
saveCar(form: NgForm) {

  // defini se um carro será criado ou atualizado
      if (this.funcionario.id !== undefined) {
        this.funcionarioService.updateFuncionario(this.funcionario).subscribe(() => {
          this.cleanForm(form);
        });
      } else {
        this.funcionarioService.saveFuncionario(this.funcionario).subscribe(() => {
          this.mensagem = "Cadastro com sucesso !!!"
          this.cleanForm(form);
  
          // limpa msg sucesso
          setTimeout(() => {
            this.mensagem = undefined;
          }, 3000)
        });
      }
    }

  //Editar dados funcionarios
  editCar(funcionario: Funcionario) {
    this.funcionario = {
      ...funcionario
    }
  };

   // deleta um carro
   deleteFuncionario(funcionario: Funcionario) {
    this.funcionarioService.deleteFuncionario(funcionario).subscribe(() => {
      this.getFuncionarios();
    });
  }

  // maskara de datas
  maskaraData(){
    const data = this.funcionario.birthday;
    // yy/yy/yyyy
    let dia,mes,ano;
    if (data.length === 8) {
      dia = data.substring(0, 2);
      mes = data.substring(2, 4);
      ano = data.substring(4, 8);
      
    const dataFormatada = `${dia}/${mes}/${ano}`;
      this.funcionario.birthday = dataFormatada;
    }
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getFuncionarios();
    form.resetForm();
    this.funcionario = {} as Funcionario;
  }
}