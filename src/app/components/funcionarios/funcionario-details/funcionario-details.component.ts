import { Component, OnInit } from '@angular/core';

import { FuncionarioService } from '../../../services/funcionario.service';
import { Funcionario } from '../../../models/funcionario';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-funcionario-details',
  templateUrl: './funcionario-details.component.html',
  styleUrls: ['./funcionario-details.component.css']
})


export class FuncionarioDetailsComponent implements OnInit {



  id: number;
  inscricaoId: Subscription;
  editavel: boolean = false;
  enable:boolean= false;

  //tipo funcionario
  funcionario = {} as Funcionario;
  funcionarios: Funcionario[];


  title = 'Detalhes dos dados';
  subTitle = 'Gerenciamento de Funcionários';

  constructor(private funcionarioService: FuncionarioService, private routerParams: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {

    // busca todos os funcionarios 
    this.getFuncionarios();
    

    // busca o dados e devolve na tela 
    this.inscricaoId = this.routerParams.params.subscribe((params: any) => {
      this.id = params['id'];
      this.editavel = params['editar'] === "true" ? true : false;


      // todo loading
      if(this.editavel){
        this.title = "Editar os dados";
        this.enable = true;
      }else{
        this.enable = false;
      }

      // filtra pelo id 
      this.funcionarioService.getFuncionarioById(this.id).subscribe((funcionario: Funcionario) => {
        this.funcionario = funcionario;
      });

    });

  }

  ngOnDestroy() {
    this.inscricaoId.unsubscribe();
  }

  // Chama o serviço para obter todos os carros
  getFuncionarios() {
    this.funcionarioService.getAllProfiles().subscribe((funcionarios: Funcionario[]) => {
      this.funcionarios = funcionarios;
    });
  }

  // copia o carro para ser editado.
  editFuncionario(funcionario: Funcionario) {
    this.funcionario = { ...funcionario };
    this.funcionarioService.updateFuncionario(this.funcionario).subscribe(() => {
      console.log('atualizado com sucesso=================!')
      this.cleanForm();
    });
  }

  // limpa o formulario
  cleanForm() {
    this.funcionario = {} as Funcionario;
    this.getFuncionarios();
    this.router.navigate(['/funcionarios']);
  }

}
