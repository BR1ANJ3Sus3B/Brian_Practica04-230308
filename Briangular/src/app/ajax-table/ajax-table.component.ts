import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Session {
  clientData: {
    ip: string;
    macAddress: string;
  };
  serverData: {
    ip: string;
    macAddress: string;
  };
  inactivityTime: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  _id: string;
  email: string;
  nickname: string;
  createdAt: string;
  lastAccess: string;
  status: string;
  sessionID: string;
}

@Component({
  selector: 'app-ajax-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './ajax-table.component.html',
  styleUrl: './ajax-table.component.css'
})
export class AjaxTableComponent implements OnInit {
  sessions: Session[] = [];
  loading = true;
  error = '';

  // Pagination
  currentPage = 1;
  itemsPerPage = 5;
  
  // Search
  searchTerm = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchSessions();
  }

  fetchSessions() {
    this.loading = true;
    this.error = '';
    
    this.http.get('http://127.0.0.1:3000/sessions')
      .subscribe({
        next: (response: any) => {
          console.log('API Response:', response); // Debug log
          if (response && Array.isArray(response)) {
            this.sessions = response;
          } else if (response && Array.isArray(response.sessions)) {
            this.sessions = response.sessions;
          } else {
            this.error = 'Invalid data format received';
            console.error('Invalid response format:', response);
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('API Error:', error);
          this.error = `Error loading sessions: ${error.message || 'Unknown error'}`;
          this.loading = false;
        }
      });
  }

  get filteredSessions() {
    return this.sessions.filter(session =>
      session.nickname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      session.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      session.status.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get paginatedSessions() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredSessions.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredSessions.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
