import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ Importar FormsModule

@Component({
  selector: 'app-ejercicio-15',
  standalone: true,  // ✅ Necesario si usas `imports: []`
  imports: [FormsModule],  // ✅ Agregar FormsModule aquí para que ngModel funcione
  templateUrl: './ejercicio-15.component.html',
  styleUrls: ['./ejercicio-15.component.css']  // ✅ Corrección en `styleUrls`
})
export class Ejercicio15Component {
  username = "Jesus";
  favoriteFramework = '';
}
