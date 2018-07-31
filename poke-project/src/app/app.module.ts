import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule} from './app.routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { FormComponent } from './pages/trainer/form/form.component';
import { TrainerService } from './services/trainer/trainer.service';
import { PokemonsModule } from './pages/pokemons/pokemons.module';


@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TrainerComponent,
    FormComponent   
  ],

  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PokemonsModule
  ],

  providers: [
    TrainerService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
