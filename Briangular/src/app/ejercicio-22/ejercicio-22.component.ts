import { Component, inject } from '@angular/core';
import { Practice22Service } from './practice22.service';

@Component({
  selector: 'app-ejercicio-22',
  imports: [],
  templateUrl: './ejercicio-22.component.html',
  styleUrl: './ejercicio-22.component.css'
})
export class Ejercicio22Component {
  display = '';

  constructor(private practice22Service: Practice22Service) {
    this.display = this.practice22Service.getPlants().join(' 😒 ');
}
}