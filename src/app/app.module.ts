import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// routers
//import { carRouting, AppRoutingModule} from '../app/components/cars/car.routing';
import { AppRoutingModule } from './app.routing.module';
import { CarModule } from './components/cars/car.module';

// commons
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

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
    AppRoutingModule

  ],
  providers: [
   
  ],
  bootstrap: [
    AppComponent,
    
  ]
})
export class AppModule { }
