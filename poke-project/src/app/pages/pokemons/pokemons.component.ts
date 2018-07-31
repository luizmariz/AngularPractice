import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {

  pokemons = [];
  id: number;
  constructor(public pkmnService: PokemonService public router: Router) {
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

  redirect(pokemon) {
    this.router.navigate(['/pokemons', pokemon.id]);
  }
}
