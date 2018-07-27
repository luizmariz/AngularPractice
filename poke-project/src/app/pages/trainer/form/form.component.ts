import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inputDisabled: boolean = true;

  onSubmit(login) {
  	console.log(login.value.usuario);
  	console.log(login.value.senha);
  	console.log(login);
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

}
