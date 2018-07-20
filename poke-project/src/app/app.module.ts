import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app.routing.module';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { HomeComponent } from './pages/home/home.component';
import { BerriesComponent } from './pages/berries/berries.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonsComponent,
    HomeComponent,
    BerriesComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
