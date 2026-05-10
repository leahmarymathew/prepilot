import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DsaTopic {
  name: string;
  pct: number;
  tags: string[];
}

export interface DashboardData {
  problemsSolved: number;
  currentStreak: number;
  rank: string;
  hoursThisWeek: number;
  dsaTopics: DsaTopic[];
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private http = inject(HttpClient);
  private api = 'http://localhost:5000/api/dashboard';

  getDashboard(): Observable<DashboardData> {
    return this.http.get<DashboardData>(this.api);
  }
}
