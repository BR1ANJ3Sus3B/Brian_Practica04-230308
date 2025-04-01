import { Component, inject } from '@angular/core';
import { Practice21Service } from './practice21.service';

@Component({
  selector: 'app-ejercicio-21',
  imports: [],
  templateUrl: './ejercicio-21.component.html',
  styleUrl: './ejercicio-21.component.css'
})
export class Ejercicio21Component {
  display = '';
  practice21Service = inject(Practice21Service)
  constructor() {
    this.display = this.practice21Service.getPlants().join(' 😺 ');
  }
}
