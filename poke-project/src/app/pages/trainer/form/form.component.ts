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

  checkbox = [false,false,false,false,false,false,false,false];
  i;
  disableCheckbox(posicao) {
    for(this.i=0;this.i<this.checkbox.length;this.i++) {
      this.checkbox[this.i] = false;
    }

    this.checkbox[posicao] = true;
  }

  onSubmit(jornada) {
    console.log(jornada.value.nome);
    console.log(jornada.value.idade);
    console.log(jornada.value.numIdent);
    console.log(jornada.value.grupo1);
    console.log(this.arrayRegioes);
    console.log(jornada.value.poke);
    
  }

  arrayRegioes = [];
  essaBudegaMudou(x,y) {
    if(x == true){
      this.arrayRegioes.push(y);
    }
    
    if(x == false){
      this.arrayRegioes.splice(this.arrayRegioes.indexOf(y),1);
    }
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
      }
    )
  }

}
