import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule],
  template: `
    <mat-toolbar class="navbar">
      <button mat-icon-button (click)="toggleSidebar()" class="menu-btn">
        <mat-icon>menu</mat-icon>
      </button>
      <span class="brand">PrepPilot AI</span>
      <span class="spacer"></span>
      <button mat-icon-button class="icon-btn"><mat-icon>notifications</mat-icon></button>
      <button mat-icon-button class="icon-btn" [matMenuTriggerFor]="menu">
        <mat-icon>account_circle</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="logout()">
          <mat-icon>logout</mat-icon>
          <span>Sign Out</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [`
    .navbar { background: #1e1e2e; border-bottom: 1px solid #2a2a3e; position: sticky; top: 0; z-index: 100; }
    .brand { font-weight: 600; font-size: 1.25rem; margin-left: 8px; }
    .spacer { flex: 1; }
    .menu-btn { margin-right: 8px; }
    .icon-btn { margin-left: 4px; }
  `]
})
export class NavbarComponent {
  private auth = inject(AuthService);
  toggleSidebar() { window.dispatchEvent(new Event('toggle-sidebar')); }
  logout() { this.auth.logout(); }
}
