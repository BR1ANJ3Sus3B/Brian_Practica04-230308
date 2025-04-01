import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-ejercicio-12',
  imports: [],
  templateUrl: './ejercicio-12.component.html',
  styleUrl: './ejercicio-12.component.css'
})
export class Ejercicio12Component {
  routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ];

  mostrarMensaje(mensaje: string) {
    alert(mensaje);
  }
}


