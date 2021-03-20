import { Component, OnInit } from '@angular/core';

import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car = {} as Car;
  cars: Car[] = [];
  isLoanding = false;

  title = 'Agencia Carros';
  subTitle = 'Gerenciamento de Carros';

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  // defini se um carro será criado ou atualizado
  saveCar(form: NgForm) {
    if (this.car.id !== undefined) {
      this.carService.updateCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.carService.saveCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obter todos os carros
  getCars() {
    this.isLoanding = true;
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.isLoanding = false;
      this.cars = cars;
    },
      error => {
        this.isLoanding = false;
        console.log(error);
      });
  }

  // deleta um carro
  deleteCar(car: Car) {
    this.carService.deleteCar(car).subscribe(() => {
      this.getCars();
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getCars();
    form.resetForm();
    //car = {} as Car;
  }

}
