import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio08',
  standalone: true,
  templateUrl: './ejercicio08.component.html',
  styleUrls: ['./ejercicio08.component.css']
})
export class Ejercicio08Component {
  @Input() name = 'Brian Jesus Mendoza Marquez';
}

