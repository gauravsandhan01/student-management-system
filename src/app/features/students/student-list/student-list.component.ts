import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  defaultPhotoUrl = 'https://www.gstatic.com/webp/gallery/1.jpg';

  students = [
    { id: 'STU101', name: 'Aarav Patel', grade: '10', section: 'A', status: 'Active', photo: 'https://www.gstatic.com/webp/gallery/1.jpg' },
    { id: 'STU102', name: 'Priya Singh', grade: '11', section: 'B', status: 'Active', photo: 'https://www.gstatic.com/webp/gallery/2.jpg' },
    { id: 'STU103', name: 'Mira Das', grade: '9', section: 'A', status: 'Inactive', photo: 'https://www.gstatic.com/webp/gallery/3.jpg' }
  ];
}
