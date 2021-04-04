import { Component, OnInit, OnDestroy } from '@angular/core';

// serice
import { CarService } from '../../../services/car.service';

// models
import { Car } from '../../../models/car';

// commons
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { Subscription } from 'rxjs/Rx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  mensagem: string;

  car = {} as Car;
  cars: Car[];

  id: string;
  inscricaoId: Subscription;

  constructor(
    private carService: CarService,
    private routerParams: ActivatedRoute,
    private router: Router) { }

  // quando o component inicia
  ngOnInit() {
    this.getCars();

    this.inscricaoId = this.routerParams.params.subscribe((params: any) => {
      this.id = params['id'];
    });
  }


  // quando o component desmonta
  ngOnDestroy() {
    this.inscricaoId.unsubscribe();
  }

  saveCar(form: NgForm) {

    // defini se um carro será criado ou atualizado
    if (this.car.id !== undefined) {
      this.carService.updateCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.carService.saveCar(this.car).subscribe(() => {
        this.mensagem = "Cadastro com sucesso !!!";
        this.router.navigate(['/cars']);
        // limpa msg sucesso
        setTimeout(() => {
          this.cleanForm(form);
          this.mensagem = undefined;
        }, 3000)
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
