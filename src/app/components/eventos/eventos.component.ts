import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show : boolean = true;

  showMessage(): void{
    this.show = !this.show
    // if(this.show == true){
    //   this.show = false;
    // }else{
    //   this.show = true
    // }
  }
}
