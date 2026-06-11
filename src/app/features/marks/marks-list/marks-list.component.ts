import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marks-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marks-list.component.html',
  styleUrls: ['./marks-list.component.css']
})
export class MarksListComponent {
  marks = [
    { student: 'Aarav Patel', subject: 'Mathematics', score: 92 },
    { student: 'Priya Singh', subject: 'Science', score: 88 },
    { student: 'Mira Das', subject: 'English', score: 95 }
  ];
}
