import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar';
import { SidebarComponent } from '../shared/sidebar/sidebar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, NavbarComponent, SidebarComponent],
  template: `
    <app-sidebar />
    <div class="main-area">
      <app-navbar />
      <main class="content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    :host { display: flex; min-height: 100vh; }
    .main-area { flex: 1; margin-left: 240px; display: flex; flex-direction: column; min-height: 100vh; background: #1e1e2e; transition: margin-left 0.2s ease; }
    .content { flex: 1; overflow-y: auto; }
    @media (max-width: 768px) { .main-area { margin-left: 64px; } }
  `]
})
export class LayoutComponent {}
