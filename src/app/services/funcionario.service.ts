import { Injectable } from '@angular/core';

// comons
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

//models
import { Funcionario } from '../models/funcionario';


@Injectable({
  providedIn: 'root'
})


export class FuncionarioService {

  // url busca no servidor 
  url = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) { }


  // opcoes no header
  options = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  //obtem os funcionarios
  getAllProfiles() {

    return this.http.get<Funcionario[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )

  }


  // Obtem um carro pelo id
  getFuncionarioById(id: number) {
    return this.http.get<Funcionario>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  // salva um carro
  saveCar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.url, JSON.stringify(funcionario), this.options)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  // atualiza um carro
  updateFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(this.url + '/' + funcionario.id, JSON.stringify(funcionario), 
    this.options)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um carro
  deleteFuncionario(funcionario: Funcionario) {
    return this.http.delete<Funcionario>(this.url + '/' + funcionario.id, this.options)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    //let errorMessage = '';
    // if (error.error instanceof ErrorEvent) {
    //   // Erro ocorreu no lado do client
    //   errorMessage = error.error.message;
    // } else {
    //   // Erro ocorreu no lado do servidor
    //   errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    // }
    console.log("Houve um erro ========== " + error);
    return throwError(error);
  };

};