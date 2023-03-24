import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name : string = 'Vinicius';
  age : number = 18;
  job = 'Programador';
  hobbies = ['correr', 'jogar', 'estudar']
  car = {
    name : 'Lancer Evolution X',
    year : 2023
  }
}
