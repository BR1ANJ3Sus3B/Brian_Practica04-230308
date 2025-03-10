import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejercicio01Component } from '../../ejercicio01/ejercicio01.component';
import { Ejercicio02Component } from '../../ejercicio02/ejercicio02.component';
import { Ejercicio03Component } from '../../ejercicio03/ejercicio03.component';
import { Ejercicio04Component } from '../../ejercicio04/ejercicio04.component';
import { Ejercicio05Component } from '../../ejercicio05/ejercicio05.component';
import { Ejercicio06Component } from '../../ejercicio06/ejercicio06.component';
import { Ejercicio07Component } from '../../ejercicio07/ejercicio07.component';
import { Ejercicio08Component } from '../../ejercicio08/ejercicio08.component';
import { Ejercicio09Component } from '../../ejercicio09/ejercicio09.component';
import { Ejercicio10Component } from '../../ejercicio10/ejercicio10.component';
import { Ejercicio11Component } from '../../ejercicio11/ejercicio11.component';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    Ejercicio01Component,
    Ejercicio02Component,
    Ejercicio03Component,
    Ejercicio04Component,
    Ejercicio05Component,
    Ejercicio06Component,
    Ejercicio07Component,
    Ejercicio08Component,
    Ejercicio09Component,
    Ejercicio10Component,
    Ejercicio11Component,
    
    LoginComponent
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']  // <-- CORREGIDO
})
export class ContentComponent {
  @Input() exerciseName: string = '';
  @Input() isLoggedIn: boolean = false; 
  @Output() login = new EventEmitter<void>();

  // Método para manejar el clic de login
  loginClick() {
    this.login.emit(); 
  }
}
