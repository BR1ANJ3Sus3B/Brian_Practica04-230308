import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';  // Agrega NgIf
import { CommonModule } from '@angular/common';  // Agrega CommonModule

@Component({
  selector: 'app-ejercicio05',
  imports: [CommonModule],  // Importa CommonModule
  templateUrl: './ejercicio05.component.html',
  styleUrls: ['./ejercicio05.component.css']
})
export class Ejercicio05Component {
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' }
  ];
  users = [
    { id: 0, name: 'Idai' },
    { id: 1, name: 'Jesus' },
    { id: 2, name: 'Dulce' },
    { id: 3, name: 'Jonathan' },
    { id: 4, name: 'Brian' }
  ];
  showList = true; 
}
