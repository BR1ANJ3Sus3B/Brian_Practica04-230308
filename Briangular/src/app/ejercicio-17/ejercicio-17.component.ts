import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ejercicio-17',
  imports: [ReactiveFormsModule, MatIconModule, CommonModule],
  templateUrl: './ejercicio-17.component.html',
  styleUrl: './ejercicio-17.component.css'
})
export class Ejercicio17Component {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}
