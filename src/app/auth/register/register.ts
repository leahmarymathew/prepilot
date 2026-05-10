import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  template: `
    <div class="auth-container">
      <mat-card class="auth-card">
        <mat-card-header>
          <mat-card-title class="auth-title">PrepPilot AI</mat-card-title>
          <mat-card-subtitle class="auth-subtitle">Create your account</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
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
              <input matInput [type]="hide ? 'password' : 'text'" [(ngModel)]="password" name="password" required />
              <button mat-icon-button matSuffix (click)="hide = !hide" type="button">
                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button>
            </mat-form-field>
            <button mat-raised-button color="primary" class="full-width auth-btn" type="submit" [disabled]="!regForm.valid">
              Create Account
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
    .auth-btn { margin-top: 8px; height: 48px; border-radius: 8px; font-size: 1rem; }
    .auth-footer { justify-content: center; padding: 8px 16px 16px; }
    .auth-footer a { color: #60a5fa; text-decoration: none; font-weight: 500; }
    .auth-footer a:hover { text-decoration: underline; }
  `]
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  hide = true;
  private auth = inject(AuthService);
  private router = inject(Router);

  onSubmit(): void {
    if (this.auth.register(this.name, this.email, this.password)) {
      this.router.navigate(['/dashboard']);
    }
  }
}
