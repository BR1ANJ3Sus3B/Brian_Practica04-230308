import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ Importar FormsModule

@Component({
  selector: 'app-ejercicio-16',
  standalone: true,  // ✅ Importante si usas `imports`
  imports: [FormsModule],  // ✅ Agregar FormsModule aquí
  templateUrl: './ejercicio-16.component.html',
  styleUrls: ['./ejercicio-16.component.css']
})
export class Ejercicio16Component {
  username = "Ida";
  favoriteFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }
}