import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, public pokemonService: PokemonService) { }

  pokemon;

  ngOnInit() {
  	this.pokemonService.getPokemon(this.route.snapshot.params['id']).subscribe(
		(res) => {
		this.pokemon = res;
		console.log(res);
	});  
  }
}
