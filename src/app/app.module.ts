import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// routers
//import { carRouting, AppRoutingModule} from '../app/components/cars/car.routing';
import { AppRoutingModule } from './app.routing.module';
import { CarModule } from './components/cars/car.module';

// commons
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//services
//import { CarService } from './services/car.service';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
// import { CarComponent } from './components/cars/car.component';
// import { CarFormComponent } from '../app/components/cars/car-form/car-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //CarComponent,
    //CarFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CarModule,
    AppRoutingModule

    //routing,
    //carRouting
    //AppRoutingModule

  ],
  providers: [
    // CarService
  ],
  bootstrap: [
    AppComponent,
    HomeComponent,
    //CarComponent,
    //CarFormComponent
  ]
})
export class AppModule { }
