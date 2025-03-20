import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BasicDatatableComponent } from './components/basic-datatable/basic-datatable.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BasicDatatableComponent],
  template: `
    <app-basic-datatable></app-basic-datatable>
  `
})
export class AppComponent {
  title = 'Brian-230308';
}
