import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  template: `
    <div class="auth-container">
      <mat-card class="auth-card">
        <mat-card-header>
          <mat-card-title class="auth-title">PrepPilot AI</mat-card-title>
          <mat-card-subtitle class="auth-subtitle">Create your account</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          @if (error) {
            <div class="error-msg">{{error}}</div>
          }
          <form (ngSubmit)="onSubmit()" #regForm="ngForm">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Full Name</mat-label>
              <input matInput [(ngModel)]="name" name="name" required />
              <mat-icon matSuffix>person</mat-icon>
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email</mat-label>
              <input matInput type="email" [(ngModel)]="email" name="email" required />
              <mat-icon matSuffix>email</mat-icon>
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Password</mat-label>
              <input matInput [type]="hide ? 'password' : 'text'" [(ngModel)]="password" name="password" required minlength="6" />
              <button mat-icon-button matSuffix (click)="hide = !hide" type="button">
                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button>
            </mat-form-field>
            <button mat-raised-button color="primary" class="full-width auth-btn" type="submit" [disabled]="!regForm.valid || loading">
              @if (loading) { <mat-spinner diameter="20" class="spinner" /> } @else { Create Account }
            </button>
          </form>
        </mat-card-content>
        <mat-card-actions class="auth-footer">
          <p>Already have an account? <a routerLink="/login">Sign In</a></p>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .auth-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 16px; }
    .auth-card { width: 100%; max-width: 420px; border-radius: 16px; }
    .auth-title { font-size: 1.75rem; font-weight: 600; }
    .auth-subtitle { margin-top: 4px; }
    .full-width { width: 100%; }
    .auth-btn { margin-top: 8px; height: 48px; border-radius: 8px; font-size: 1rem; display: flex; align-items: center; justify-content: center; gap: 8px; }
    .auth-footer { justify-content: center; padding: 8px 16px 16px; }
    .auth-footer a { color: #60a5fa; text-decoration: none; font-weight: 500; }
    .auth-footer a:hover { text-decoration: underline; }
    .error-msg { background: rgba(243,139,168,0.15); color: #f38ba8; padding: 10px 14px; border-radius: 8px; margin-bottom: 12px; font-size: 0.9rem; }
    .spinner { display: inline-block; margin-right: 8px; }
  `]
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  hide = true;
  loading = false;
  error = '';
  private auth = inject(AuthService);
  private router = inject(Router);

  onSubmit(): void {
    this.loading = true;
    this.error = '';
    this.auth.register(this.name, this.email, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => {
        this.error = err.error?.message || 'Registration failed';
        this.loading = false;
      }
    });
  }
}
