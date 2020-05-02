import { Component, OnInit } from '@angular/core';

//
import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/car';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {


  car = {} as Car;
  cars: Car[];

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
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
    });
  }

  editCar(car: Car) {
    this.car = {
      ...car
    }
  };


  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getCars();
    form.resetForm();
    //car = {} as Car;
  }
}
