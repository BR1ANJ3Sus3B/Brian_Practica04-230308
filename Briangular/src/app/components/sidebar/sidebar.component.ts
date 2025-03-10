import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() selectedExercise: string = '';

  getMessage(): string {
    switch (this.selectedExercise) {
      case 'Ejercicio 01': return 'Mensaje personalizado para Ejercicio 01.';
      case 'Ejercicio 02': return 'Mensaje personalizado para Ejercicio 02.';
      case 'Ejercicio 03': return 'Mensaje personalizado para Ejercicio 03.';
      case 'Ejercicio 04': return 'Mensaje personalizado para Ejercicio 04.';
      case 'Ejercicio 05': return 'Mensaje personalizado para Ejercicio 05.';
      case 'Ejercicio 06': return 'Mensaje personalizado para Ejercicio 06.';
      case 'Ejercicio 07': return 'Mensaje personalizado para Ejercicio 07.';
      case 'Ejercicio 08': return 'Mensaje personalizado para Ejercicio 08.';
      case 'Ejercicio 09': return 'Mensaje personalizado para Ejercicio 09.';
      case 'Ejercicio 10': return 'Mensaje personalizado para Ejercicio 10.';
      case 'Ejercicio 11': return 'Mensaje personalizado para Ejercicio 11.';
      case 'Ejercicio 12': return 'Mensaje personalizado para Ejercicio 12.';
      default:
        return 'Selecciona un ejercicio (desde el navbar) para ver el mensaje.';
    }
  }
}
