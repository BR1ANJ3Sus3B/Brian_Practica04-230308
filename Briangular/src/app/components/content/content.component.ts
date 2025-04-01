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
import { Ejercicio12Component } from '../../ejercicio-12/ejercicio-12.component';
import { Ejercicio13Component } from '../../ejercicio-13/ejercicio-13.component';
import { Ejercicio14Component } from '../../ejercicio-14/ejercicio-14.component';
import { Ejercicio15Component } from '../../ejercicio-15/ejercicio-15.component';
import { Ejercicio16Component } from '../../ejercicio-16/ejercicio-16.component';
import { Ejercicio17Component } from '../../ejercicio-17/ejercicio-17.component';
import { Ejercicio18Component } from '../../ejercicio-18/ejercicio-18.component';

import { BasicDatatableComponent } from '../../basic-datatable/basic-datatable.component';

import { LoginComponent } from '../login/login.component';
import { BasicGraphicComponent } from '../../basic-graphic/basic-graphic.component';
import { GraphicPopulationPyramidComponent } from '../../graphic-population-pyramid/graphic-population-pyramid.component';
import { AjaxGraphicComponent } from '../../ajax-graphic/ajax-graphic.component';
import { AjaxTableComponent } from '../../ajax-table/ajax-table.component';
import { JsonTableComponent } from '../../json-table/json-table.component';
import { JsonGraphicComponent } from '../../json-graphic/json-graphic.component';

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
    Ejercicio12Component,
    Ejercicio13Component,
    Ejercicio14Component,
    Ejercicio15Component,
    Ejercicio16Component,
    Ejercicio17Component,
    Ejercicio18Component,
    
    
    LoginComponent,BasicDatatableComponent,
    BasicGraphicComponent,GraphicPopulationPyramidComponent,
    AjaxGraphicComponent,AjaxTableComponent,
    JsonTableComponent, JsonGraphicComponent
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
