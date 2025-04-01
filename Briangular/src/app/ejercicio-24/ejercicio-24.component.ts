import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-24',
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
  templateUrl: './ejercicio-24.component.html',
  styleUrl: './ejercicio-24.component.css'
})
export class Ejercicio24Component {
  num =  987.6543;
  birthday = new Date(2000, 3, 27);
  cost = 7899.99;
}
