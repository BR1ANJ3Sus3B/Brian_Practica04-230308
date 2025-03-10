import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ejercicio09',
  imports: [],
  templateUrl: './ejercicio09.component.html',
  styleUrl: './ejercicio09.component.css'
})
export class Ejercicio09Component {
  @Output() addItemEvent = new EventEmitter<string>(); 

  addItem() {
    this.addItemEvent.emit('😺'); 
}
}

