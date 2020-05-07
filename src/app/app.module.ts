import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// routers
//import { carRouting, AppRoutingModule} from '../app/components/cars/car.routing';
import { AppRoutingModule } from './app.routing.module';
import { CarModule } from './components/cars/car.module';
import { FuncionarioModule } from './components/funcionarios/funcionarios.module';

// commons
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CarModule,
    FuncionarioModule,
    AppRoutingModule,
    ButtonsModule.forRoot()

  ],
  providers: [

  ],
  bootstrap: [
    AppComponent,

  ]
})
export class AppModule { }
