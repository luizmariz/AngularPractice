import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {

  constructor(public pkmnService: PokemonService) { }

  ngOnInit() {
  }

  getPokemon(){
    console.log("Entrei na função")
    this.id = 1;
    this.pkmnService.getPokemon(this.id)
    .subscribe(
        (res)=>{
          this.pokemons.push(res);
          console.log(res);
        }
    )
  }
}
