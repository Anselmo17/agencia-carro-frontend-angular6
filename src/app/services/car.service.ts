import { Injectable } from '@angular/core';

// comons
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

//models
import { Car } from '../models/car';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  // url busca no servidor 
  url = 'http://localhost:3000/cars';


  constructor(private http: HttpClient) { }

  // opcoes no header
  options = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  // obtem todos carros
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um carro pelo id
  getCarById(id: number) {
    return this.http.get<Car>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um carro
  saveCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.url, JSON.stringify(car), this.options)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  // atualiza um carro
  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(this.url + '/' + car.id, JSON.stringify(car), this.options)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um carro
  deleteCar(car: Car) {
    return this.http.delete<Car>(this.url + '/' + car.id, this.options)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
