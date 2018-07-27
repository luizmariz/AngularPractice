import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule} from './app.routing.module';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { HomeComponent } from './pages/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { FormComponent } from './pages/trainer/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonsComponent,
    HomeComponent,
    TrainerComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
