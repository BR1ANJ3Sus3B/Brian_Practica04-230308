import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  @Output() loginSuccess = new EventEmitter<void>(); // Notifica el login

  onLogin() {
    if (this.email && this.password) {
      this.loginSuccess.emit(); // Emitir el evento de login
    } else {
      this.errorMessage = 'Por favor, ingrese credenciales válidas.';
    }
  }
}
