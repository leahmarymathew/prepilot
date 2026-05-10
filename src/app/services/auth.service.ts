import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  get isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }

  login(email: string, password: string): boolean {
    this.userSubject.next({ id: '1', name: 'User', email });
    localStorage.setItem('user', JSON.stringify({ id: '1', name: 'User', email }));
    return true;
  }

  register(name: string, email: string, password: string): boolean {
    this.userSubject.next({ id: '1', name, email });
    localStorage.setItem('user', JSON.stringify({ id: '1', name, email }));
    return true;
  }

  logout(): void {
    this.userSubject.next(null);
    localStorage.removeItem('user');
  }

  restoreSession(): void {
    const stored = localStorage.getItem('user');
    if (stored) this.userSubject.next(JSON.parse(stored));
  }
}
