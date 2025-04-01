import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // Se agrega RouterModule si usas rutas
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
  @Output() exerciseSelected = new EventEmitter<string>();

  @Input() menuItems: { name: string; link: string }[] = []; // Para recibir elementos del menú

  isExpanded: boolean = false;
  isTablasOpen: boolean = false; // Added to manage the state of the tablas menu.

  toggleSidebar() {
    this.toggle.emit();
  }

  onLogout() {
    this.logout.emit();
  }

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }

  selectExercise(name: string) {
    this.exerciseSelected.emit(name);
    this.isExpanded = false; 
  }

  // Toggle the tablas menu
  toggleTablasMenu() {
    this.isTablasOpen = !this.isTablasOpen;
  }
}
