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

  //obtem os funcionarios
  getAllProfiles() {

    return this.http.get<Funcionario[]>(this.url)
    .pipe(
      retry(2),
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
    console.log("Houve um erro ========== "+error);
    return throwError(error);
  };

};