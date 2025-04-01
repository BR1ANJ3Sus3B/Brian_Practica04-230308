import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ejercicio-23',
  imports: [LowerCasePipe, UpperCasePipe],
  templateUrl: './ejercicio-23.component.html',
  styleUrl: './ejercicio-23.component.css'
})
export class Ejercicio23Component {
  username = 'Brian Jesus';
  loudMessage = 'we think you are doing great!'
}
