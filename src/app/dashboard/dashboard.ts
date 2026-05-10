import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatProgressBarModule, MatChipsModule],
  template: `
    <div class="dashboard">
      <h1 class="page-title">Dashboard</h1>

      <div class="stats-grid">
        @for (stat of stats; track stat.label) {
          <mat-card class="stat-card">
            <mat-card-content>
              <div class="stat-icon" [style.background]="stat.color">
                <mat-icon>{{stat.icon}}</mat-icon>
              </div>
              <div class="stat-info">
                <span class="stat-value">{{stat.value}}</span>
                <span class="stat-label">{{stat.label}}</span>
              </div>
            </mat-card-content>
          </mat-card>
        }
      </div>

      <div class="content-grid">
        <mat-card class="dsa-card">
          <mat-card-header>
            <mat-card-title>DSA Progress</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            @for (topic of dsaTopics; track topic.name) {
              <div class="topic-row">
                <div class="topic-header">
                  <span class="topic-name">{{topic.name}}</span>
                  <span class="topic-pct">{{topic.pct}}%</span>
                </div>
                <mat-progress-bar mode="determinate" [value]="topic.pct"
                  [color]="topic.pct > 70 ? 'primary' : topic.pct > 40 ? 'accent' : 'warn'">
                </mat-progress-bar>
                <div class="topic-chips">
                  @for (tag of topic.tags; track tag) {
                    <mat-chip>{{tag}}</mat-chip>
                  }
                </div>
              </div>
            }
          </mat-card-content>
        </mat-card>

        <div class="charts-col">
          <mat-card class="chart-card">
            <mat-card-header>
              <mat-card-title>Weekly Activity</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="chart-placeholder">
                <mat-icon>bar_chart</mat-icon>
                <span>Chart coming soon</span>
              </div>
            </mat-card-content>
          </mat-card>

          <mat-card class="chart-card">
            <mat-card-header>
              <mat-card-title>Topic Distribution</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="chart-placeholder">
                <mat-icon>pie_chart</mat-icon>
                <span>Chart coming soon</span>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard { padding: 24px; }
    .page-title { font-size: 1.75rem; font-weight: 600; margin: 0 0 24px; color: #cdd6f4; }
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .stat-card { border-radius: 12px; }
    .stat-card mat-card-content { display: flex; align-items: center; gap: 16px; padding: 8px 0; }
    .stat-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
    .stat-icon mat-icon { color: #fff; }
    .stat-info { display: flex; flex-direction: column; }
    .stat-value { font-size: 1.5rem; font-weight: 700; line-height: 1.2; }
    .stat-label { font-size: 0.85rem; color: #a6adc8; }
    .content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    @media (max-width: 900px) { .content-grid { grid-template-columns: 1fr; } }
    .dsa-card { border-radius: 12px; }
    .topic-row { margin-bottom: 16px; }
    .topic-header { display: flex; justify-content: space-between; margin-bottom: 6px; }
    .topic-name { font-weight: 500; }
    .topic-pct { color: #a6adc8; font-size: 0.85rem; }
    .topic-chips { margin-top: 8px; display: flex; gap: 6px; flex-wrap: wrap; }
    .topic-chips mat-chip { font-size: 0.75rem; height: 24px; }
    .charts-col { display: flex; flex-direction: column; gap: 16px; }
    .chart-card { border-radius: 12px; flex: 1; }
    .chart-placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 140px; color: #585b70; gap: 8px; }
    .chart-placeholder mat-icon { font-size: 48px; }
  `]
})
export class DashboardComponent {
  stats = [
    { icon: 'code', label: 'Problems Solved', value: '142', color: 'rgba(96,165,250,0.2)' },
    { icon: 'local_fire_department', label: 'Current Streak', value: '12 days', color: 'rgba(250,179,135,0.2)' },
    { icon: 'emoji_events', label: 'Rank', value: 'Top 15%', background: 'rgba(166,227,161,0.2)', color: 'rgba(166,227,161,0.2)' },
    { icon: 'schedule', label: 'Hours This Week', value: '8.5', color: 'rgba(203,166,247,0.2)' },
  ];

  dsaTopics = [
    { name: 'Arrays & Hashing', pct: 85, tags: ['Easy', 'Medium'] },
    { name: 'Two Pointers', pct: 62, tags: ['Medium'] },
    { name: 'Sliding Window', pct: 45, tags: ['Medium', 'Hard'] },
    { name: 'Trees & Graphs', pct: 30, tags: ['Hard'] },
    { name: 'Dynamic Programming', pct: 18, tags: ['Hard'] },
  ];
}
