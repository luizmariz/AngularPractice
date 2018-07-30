import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer/trainer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public trainerService: TrainerService) { }

  arrayTrainer = [];
  
  ngOnInit() {

  	this.trainerService.getUser()
    .subscribe(
      (res)=>{
        
        for(let i=0; i<res.data.length; i++){
        	this.arrayTrainer.push(res.data[i]);
        }

        console.log(this.arrayTrainer);
        
      },

      (error) =>{
        console.log(error);
      }
    )
  }

  deleteTreinador(a){
    this.trainerService.deleteUser(this.arrayTrainer[a].id)
    .subscribe(
      (res)=>{
        console.log(res);
        this.arrayTrainer.splice(a,1);
      },

      (error) =>{
        console.log(error);
      }
    )
  }
}
