import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {

  pokemons = [];
  id: number;
  constructor(public pkmnService: PokemonService) {
      this.id = 0;
   }

  ngOnInit() {
  }

  getPokemon(){
    console.log("Entrei na função")
    this.id++;
    this.pkmnService.getPokemon(this.id)
    .subscribe(
        (res)=>{
          this.pokemons.push(res);
          console.log(res);
        }
    )
  }
}
