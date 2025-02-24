import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio01Component } from './ejercicio01/ejercicio01.component';
import { Ejercicio02Component } from './ejercicio02/ejercicio02.component';
import { Ejercicio03Component } from "./ejercicio03/ejercicio03.component";
import { Ejercicio06Component } from './ejercicio06/ejercicio06.component';
import { Ejercicio04Component } from './ejercicio04/ejercicio04.component';
import { Ejercicio05Component } from './ejercicio05/ejercicio05.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ejercicio01Component,Ejercicio02Component,Ejercicio03Component,Ejercicio06Component,Ejercicio04Component,Ejercicio05Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Brian Jesus mendoza Marquez';
}
