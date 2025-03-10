import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [CommonModule, ContentComponent, FooterComponent, BreadcrumbComponent],
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent {
  @Input() selectedExercise: string = '';
  @Input() isLoggedIn: boolean = false; // Default to false, since login state is handled by parent component
  @Output() login = new EventEmitter<void>(); // Event emitter for login action

  // Method to trigger login action
  onLogin() {
    this.login.emit(); // Emit the login event to notify parent component to handle it
  }
}
