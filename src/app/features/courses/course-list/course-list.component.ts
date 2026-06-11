import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses = [
    { code: 'MAT101', name: 'Mathematics', instructor: 'Mr. Rohan Mehta', seats: 35 },
    { code: 'SCI102', name: 'Science', instructor: 'Ms. Anjali Rao', seats: 32 },
    { code: 'ENG103', name: 'English', instructor: 'Mrs. Sheetal Jain', seats: 28 }
  ];
}
