import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})
export class StudentReportComponent {
  report = {
    name: 'Aarav Patel',
    grade: '10',
    average: 91,
    attendance: 96,
    remarks: 'Excellent performance across core subjects.'
  };
}
