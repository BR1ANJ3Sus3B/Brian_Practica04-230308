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
      case 'Ejercicio 01': 
        return 'En este ejercicio, aprenderás a configurar un proyecto básico en Angular utilizando Angular CLI. Explorarás la estructura de un proyecto Angular y comprenderás la función de los diferentes archivos y carpetas generadas.';
      case 'Ejercicio 02': 
        return 'Este ejercicio se centra en los componentes, que son la piedra angular de cualquier aplicación Angular. Aprenderás a crear componentes, entender su ciclo de vida y cómo organizarlos correctamente dentro de la aplicación.';
      case 'Ejercicio 03': 
        return 'En este ejercicio, profundizarás en las diferentes formas de enlace de datos en Angular: el enlace unidireccional y bidireccional. Practicarás cómo enlazar propiedades del componente con el DOM de la vista, así como el uso de eventos para interactuar con el usuario.';
      case 'Ejercicio 04': 
        return 'Las directivas son un aspecto fundamental de Angular. En este ejercicio, aprenderás a utilizar directivas estructurales (como *ngIf, *ngFor) y de atributos (como ngClass, ngStyle). Verás cómo estas directivas permiten modificar el DOM dinámicamente en función del estado de la aplicación.';
      case 'Ejercicio 05': 
        return 'En este ejercicio, explorarás los servicios en Angular y cómo se utilizan para compartir datos y lógica entre diferentes componentes. Aprenderás cómo Angular implementa la Inyección de Dependencias (DI) para gestionar la creación y uso de servicios de manera eficiente.';
      case 'Ejercicio 06': 
        return 'Este ejercicio está enfocado en la creación de rutas dentro de la aplicación Angular. Aprenderás a configurar el enrutador de Angular, definir rutas, manejar la navegación entre vistas y pasar parámetros en las URL. Además, aprenderás a manejar la protección de rutas con guardias.';
      case 'Ejercicio 07': 
        return 'En este ejercicio, te adentrarás en los formularios reactivos, una de las formas de gestionar formularios en Angular. Aprenderás a construir formularios complejos, gestionar validaciones y manejar datos de manera reactiva utilizando FormGroup, FormControl y FormBuilder.';
      case 'Ejercicio 08': 
        return 'Este ejercicio se complementa con el anterior, profundizando en las validaciones de formularios. Aprenderás a implementar validaciones personalizadas, mostrar mensajes de error y manejar el estado de los formularios, tanto en formularios reactivos como en formularios basados en plantillas.';
      case 'Ejercicio 09': 
        return 'En este ejercicio, aprenderás a interactuar con APIs externas a través de Angular. Se cubren las bases del módulo HttpClient de Angular, cómo realizar peticiones GET, POST, PUT, DELETE, y cómo gestionar las respuestas y errores de manera eficiente.';
      case 'Ejercicio 10': 
        return 'Los observables son una parte esencial de Angular, especialmente cuando se trabaja con datos asíncronos. En este ejercicio, aprenderás los conceptos básicos de RxJS, cómo crear y suscribirse a observables, y cómo aplicar operadores para gestionar flujos de datos asíncronos en tu aplicación.';
      case 'Ejercicio 11': 
        return 'En este ejercicio, aprenderás cómo interceptar solicitudes HTTP y respuestas a través de los HttpInterceptor. Verás cómo agregar encabezados, manejar errores globalmente y realizar tareas comunes en todas las peticiones, como la autenticación o la gestión de sesiones.';
      case 'Ejercicio 12': 
        return 'Este ejercicio introduce el concepto de animaciones en Angular. Aprenderás a crear transiciones visuales entre vistas y elementos DOM utilizando el módulo @angular/animations. Conocerás las animaciones de entrada y salida, así como las animaciones de cambio de estado.';
      default:
        return 'Selecciona un ejercicio (desde el navbar) para ver el mensaje.';
    }
  }
}
