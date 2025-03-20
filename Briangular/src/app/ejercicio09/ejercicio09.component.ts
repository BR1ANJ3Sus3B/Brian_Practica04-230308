import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ejercicio09',
  imports: [],
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
    <p>Items added: {{ counter }}</p>  <!-- Muestra el contador en el HTML -->
  `,
  styles: `
    :host {
      color:rgb(18, 81, 44);
      font-family: 'Times New Roman';
      font-size: 30px;
      text-align: center;
      margin: 20px 0;
      display: block;
      font-weight: bold;
    }
    .btn {
      background-color:rgb(38, 90, 23);
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 1.2rem;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .btn:hover {
      background-color:rgb(67, 183, 52);
    }
    p{
      font-size:30px;
      font-family:'Times New Roman';
      font-weight:bold;
      text-align:center;
    }
  `
})

export class Ejercicio09Component {
  @Output() addItemEvent = new EventEmitter<string>();

  // Variable para llevar el contador de items
  counter = 0;

  addItem() {
    this.addItemEvent.emit('🐢');  // Emite el evento
    this.counter++;  // Incrementa el contador cada vez que se agrega un item
  }
}

