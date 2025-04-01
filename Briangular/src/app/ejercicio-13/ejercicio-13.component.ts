import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-ejercicio-13',
  imports: [],
  templateUrl: './ejercicio-13.component.html',
  styleUrl: './ejercicio-13.component.css'
})
export class Ejercicio13Component {
  routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', redirectTo: '/user', pathMatch: 'full' },
  ];

  mostrarMensaje(mensaje: string) {
    alert(mensaje);
  }
}

