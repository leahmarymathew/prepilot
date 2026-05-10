import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, MatListModule, MatIconModule, MatSidenavModule],
  template: `
    <div class="sidebar" [class.collapsed]="collapsed">
      <div class="sidebar-header">
        @if (!collapsed) {
          <mat-icon class="logo-icon">rocket_launch</mat-icon>
          <span class="logo-text">PrepPilot</span>
        }
      </div>
      <mat-nav-list>
        <a mat-list-item routerLink="/dashboard" routerLinkActive="active">
          <mat-icon matListItemIcon>dashboard</mat-icon>
          @if (!collapsed) { <span matListItemTitle>Dashboard</span> }
        </a>
        <a mat-list-item routerLink="/dashboard">
          <mat-icon matListItemIcon>code</mat-icon>
          @if (!collapsed) { <span matListItemTitle>DSA Practice</span> }
        </a>
        <a mat-list-item routerLink="/dashboard">
          <mat-icon matListItemIcon>analytics</mat-icon>
          @if (!collapsed) { <span matListItemTitle>Analytics</span> }
        </a>
        <a mat-list-item routerLink="/dashboard">
          <mat-icon matListItemIcon>school</mat-icon>
          @if (!collapsed) { <span matListItemTitle>Resources</span> }
        </a>
        <a mat-list-item routerLink="/dashboard">
          <mat-icon matListItemIcon>settings</mat-icon>
          @if (!collapsed) { <span matListItemTitle>Settings</span> }
        </a>
      </mat-nav-list>
    </div>
  `,
  styles: [`
    .sidebar { width: 240px; background: #181825; border-right: 1px solid #2a2a3e; height: 100vh; position: fixed; top: 0; left: 0; transition: width 0.2s ease; overflow: hidden; z-index: 200; padding-top: 64px; }
    .sidebar.collapsed { width: 64px; }
    .sidebar-header { display: flex; align-items: center; padding: 16px; gap: 10px; }
    .logo-icon { font-size: 28px; color: #60a5fa; width: 28px; height: 28px; }
    .logo-text { font-size: 1.1rem; font-weight: 600; color: #cdd6f4; }
    ::ng-deep .mat-mdc-list-item { border-radius: 8px !important; margin: 2px 8px !important; }
    ::ng-deep .mat-mdc-list-item:hover { background: rgba(96,165,250,0.1) !important; }
    ::ng-deep .mat-mdc-list-item.active { background: rgba(96,165,250,0.15) !important; color: #60a5fa !important; }
  `]
})
export class SidebarComponent {
  collapsed = false;

  @HostListener('window:toggle-sidebar')
  onToggle() { this.collapsed = !this.collapsed; }
}
