import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  stats = [
    { label: 'Students', value: 232, highlight: '#4338ca' },
    { label: 'Teachers', value: 28, highlight: '#0891b2' },
    { label: 'Courses', value: 14, highlight: '#16a34a' },
    { label: 'Attendance', value: '98%', highlight: '#dc2626' }
  ];
  alerts = [
    'New student registration requests waiting approval.',
    'Course schedules updated for this week.',
    'Teacher performance reports available in Reports.'
  ];
}
