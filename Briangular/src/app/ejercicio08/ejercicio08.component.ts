import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio-08',
  standalone: true,
  templateUrl: './ejercicio-08.component.html',
  styleUrls: ['./ejercicio-08.component.css']
})
export class Ejercicio08Component {
  @Input() name = 'Brian Jesus Mendoza Marquez';
}

