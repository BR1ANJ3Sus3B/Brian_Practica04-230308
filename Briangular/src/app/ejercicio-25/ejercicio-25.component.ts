import { Component } from '@angular/core';
import { Practice25Pipe } from './practice25.pipe';

@Component({
  selector: 'app-ejercicio-25',
  imports: [Practice25Pipe],
  templateUrl: './ejercicio-25.component.html',
  styleUrl: './ejercicio-25.component.css'
})
export class Ejercicio25Component {
  word = 'The rain';
}
