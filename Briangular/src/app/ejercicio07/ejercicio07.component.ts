import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio07',
  imports: [],
  templateUrl: './ejercicio07.component.html',
  styleUrl: './ejercicio07.component.css'
})
export class Ejercicio07Component {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  onMouseLeave() {
    this.message = '';
  }
}

