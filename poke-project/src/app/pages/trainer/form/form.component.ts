import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";
import { PokemonService } from '../../../services/pokemon.service';
import { isNumber } from 'util';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor(public pkmnService: PokemonService) { }

  ngOnInit() {
  }
  
  modalActions = new EventEmitter<string|MaterializeAction>();
  abreModal() {
  	this.modalActions.emit({action:"modal",params:['open']});
  }

  fechaModal() {
  	this.modalActions.emit({action:"modal",params:['close']});
  }

  inputDisabled: boolean = true;

  /* Vamos cuidar para que o user nao escolha a cidade inicial 2x */
  checkbox = [false,false,false,false,false,false,false,false];
  i;
  disableCheckbox(posicao) {
    for(this.i=0;this.i<this.checkbox.length;this.i++) {
      this.checkbox[this.i] = false;
    }

    this.checkbox[posicao] = true;
  }

  /* Guardar as regioes selecionadas pelo user */
  arrayRegioes = [];
  getRegiao(x,y) {
    if(x == true){
      this.arrayRegioes.push(y);
    }
    
    if(x == false){
      this.arrayRegioes.splice(this.arrayRegioes.indexOf(y),1);
    }
  }

  /*Checar a idade do user*/
  ageError: boolean = false;
  checkAge(idade){
    if(idade.value < 10)
      this.ageError = true;
    
    else 
      this.ageError = false;
    
  }

  /*Checar o numero de identificacao*/

  numIdentError: boolean = false;
  checkNumIdent(numIdent){
    if((numIdent.value.length != 8) )
      this.numIdentError = true;

    else 
      this.numIdentError = false;
    
  }
  
  /* Quem é esse pokemon! */

  pokemon;
  poke;
  pokemonError: boolean = false;
  getPokemon(poke){
    console.log("Entrei na função")
    this.pkmnService.getPokemon(poke.value.toLowerCase())
    .subscribe(
      (res)=>{
        this.pokemon = res;
        this.pokemonError = false;
      },

      (error) =>{
        this.pokemonError = true;
      }
    )
  }

  onSubmit(jornada) {
    console.log(jornada.value.nome);
    console.log(jornada.value.idade);
    console.log(jornada.value.numIdent);
    console.log(jornada.value.grupo1);
    console.log(this.arrayRegioes);
    console.log(jornada.value.poke);
    
  }
}
