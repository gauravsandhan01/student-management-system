import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendance-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent {
  records = [
    { student: 'Aarav Patel', grade: '10', date: '2026-06-01', status: 'Present' },
    { student: 'Priya Singh', grade: '11', date: '2026-06-01', status: 'Absent' },
    { student: 'Mira Das', grade: '9', date: '2026-06-01', status: 'Present' }
  ];
}
