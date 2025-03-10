import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ejercicio09',
  imports: [],
  templateUrl: './ejercicio09.component.html',
  styleUrl: './ejercicio09.component.css'
})
export class Ejercicio09Component {
  @Output() itemAdded = new EventEmitter<void>(); // Emisor de eventos

  addItem() {
    this.itemAdded.emit(); // Emite el evento cuando se hace clic en el botón
  }
}

