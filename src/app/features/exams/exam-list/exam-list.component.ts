import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent {
  exams = [
    { subject: 'Mathematics', date: '2026-06-18', time: '9:00 AM', location: 'Room 101' },
    { subject: 'Science', date: '2026-06-19', time: '10:30 AM', location: 'Room 103' },
    { subject: 'English', date: '2026-06-20', time: '1:00 PM', location: 'Room 102' }
  ];
}
