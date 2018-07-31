import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PokemonService } from '../../services/pokemon.service';
import { PokemonsComponent } from './pokemons.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],

  exports:[],

  declarations: [
  	PokemonDetailsComponent,
  	PokemonsComponent
  ],

  providers:[
	PokemonService,
  ],
})
export class PokemonsModule { }
