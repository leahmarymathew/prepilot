import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private api = 'http://localhost:5000/api/auth';
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  get isLoggedIn(): boolean {
    return !!this.token;
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.api}/login`, { email, password }).pipe(
      tap(res => this.setSession(res))
    );
  }

  register(name: string, email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.api}/register`, { name, email, password }).pipe(
      tap(res => this.setSession(res))
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  restoreSession(): void {
    const stored = localStorage.getItem('user');
    if (stored && this.token) {
      this.userSubject.next(JSON.parse(stored));
    }
  }

  private setSession(res: AuthResponse): void {
    localStorage.setItem('token', res.token);
    localStorage.setItem('user', JSON.stringify(res.user));
    this.userSubject.next(res.user);
  }
}
