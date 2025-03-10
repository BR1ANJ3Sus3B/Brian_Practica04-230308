import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ejercicio11',
  standalone: true,
  templateUrl: './ejercicio11.component.html',
  styleUrls: ['./ejercicio11.component.css'],
  imports: [CommonModule, NgOptimizedImage]
})
export class Ejercicio11Component {
  logoUrl = 'assets/image.png';
  logoAlt = 'Imagen de videojuegos';
  username = 'youngTech';
}