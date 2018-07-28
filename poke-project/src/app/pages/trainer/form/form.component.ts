import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor(public pkmnService: PokemonService) { }

  ngOnInit() {
  }

  inputDisabled: boolean = true;

  onSubmit(jornada) {
  	console.log(jornada.value.poke);
  }

  passwordError:boolean = false;

  checkPassword(senha){
  	if(senha.value.length < 6)
  		this.passwordError = true;
 
  	else
  		this.passwordError = false;
  }

  modalActions = new EventEmitter<string|MaterializeAction>();
  abreModal() {
  	this.modalActions.emit({action:"modal",params:['open']});
  }

  fechaModal() {
  	this.modalActions.emit({action:"modal",params:['close']});
  }

  /* Quem é esse pokemon! */

  pokemon;
  poke;
  
  getPokemon(poke){
    console.log("Entrei na função")
    this.pkmnService.getPokemon(poke.value)
    .subscribe(
      (res)=>{
        this.pokemon = res;
        console.log(res);
      }
    )
  }

}
