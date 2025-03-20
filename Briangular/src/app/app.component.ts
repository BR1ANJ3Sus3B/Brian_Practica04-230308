import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { NgIf } from '@angular/common';
import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    NavbarComponent,
    SidebarComponent,
    PageContainerComponent,
    NgIf,BasicDatatableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ManualEjercicios_Anglar_230308';

  isSidebarCollapsed = false;
  currentExercise: string = '';
  isLoggedIn: boolean = false; // Establecer a false inicialmente

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onExerciseSelected(exerciseName: string) {
    this.currentExercise = exerciseName;
  }

  logout() {
    this.isLoggedIn = false; // Cambiar a false al hacer logout
  }

  login() {
    this.isLoggedIn = true; // Cambiar a true al hacer login
  }
}
