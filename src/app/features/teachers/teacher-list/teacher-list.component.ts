import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {
  teachers = [
    { id: 'TCH201', name: 'Mr. Rohan Mehta', subject: 'Mathematics', status: 'Active' },
    { id: 'TCH202', name: 'Ms. Anjali Rao', subject: 'Science', status: 'Active' },
    { id: 'TCH203', name: 'Mrs. Sheetal Jain', subject: 'English', status: 'On Leave' }
  ];
}
