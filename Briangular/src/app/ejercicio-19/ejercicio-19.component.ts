import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormControl, } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ejercicio-19',
  imports: [ReactiveFormsModule, MatIconModule, CommonModule],
  templateUrl: './ejercicio-19.component.html',
  styleUrl: './ejercicio-19.component.css'
})
export class Ejercicio19Component {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
