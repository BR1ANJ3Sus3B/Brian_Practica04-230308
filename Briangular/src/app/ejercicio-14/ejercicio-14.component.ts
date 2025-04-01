import { Component } from '@angular/core';
import { Routes } from '@angular/router';
@Component({
  selector: 'app-ejercicio-14',
  imports: [],
  templateUrl: './ejercicio-14.component.html',
  styleUrl: './ejercicio-14.component.css'
})
export class Ejercicio14Component {
  routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ];

  mostrarMensaje(mensaje: string) {
    alert(mensaje);
  }
}
