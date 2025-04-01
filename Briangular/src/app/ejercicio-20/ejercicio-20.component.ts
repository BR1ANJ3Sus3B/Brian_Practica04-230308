import { Component, inject } from '@angular/core';
import { Practice20Service } from './practice20.service';

@Component({
  selector: 'app-ejercicio-20',
  templateUrl: './practice20.component.html',
  styleUrl: './ejercicio-20.component.css'
})
export class Ejercicio20Component {
  Practice20Service = inject(Practice20Service)
}
