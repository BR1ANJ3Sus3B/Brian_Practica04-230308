import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';
@Component({
  selector: 'app-ejercicio10',
  standalone: true,
  imports: [CommonModule, CommentsComponent],
  templateUrl: './ejercicio10.component.html',
  styleUrl: './ejercicio10.component.css'
})
export class Ejercicio10Component {

}
