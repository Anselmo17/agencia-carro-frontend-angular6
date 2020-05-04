import { Component, OnInit } from '@angular/core';

import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/car';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})


export class CarDetailsComponent implements OnInit {


  id: number;
  inscricaoId: Subscription;

  car = {} as Car;
  cars: Car[];


  title = 'Editar';
  subTitle = 'Gerenciamento de Carros';

  constructor(private carService: CarService, private routerParams: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.getCars();

    this.inscricaoId = this.routerParams.params.subscribe((params: any) => {
      this.id = params['id'];

      // filtra pelo id 
      this.carService.getCarById(this.id).subscribe((car: Car) => {
        this.car = car;
      });

    });

  }

  ngOnDestroy() {
    this.inscricaoId.unsubscribe();
  }

  // Chama o serviço para obter todos os carros
  getCars() {
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
    });
  }

  // copia o carro para ser editado.
  editCar(car: Car) {
    this.car = { ...car };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getCars();
    form.resetForm();
    this.car = {} as Car;
  }

}
